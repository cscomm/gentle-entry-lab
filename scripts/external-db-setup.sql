-- ============================================================
-- silica.co.kr 게시판·관리자 저장 공간 설정 SQL
-- 대상: 회원가입과 같은 외부 Supabase 프로젝트 (msjbpdeyucfunzgtnith)
-- 실행 방법: 해당 프로젝트 대시보드 → SQL Editor → 이 파일 전체 붙여넣기 → Run
-- 여러 번 실행해도 안전합니다 (IF NOT EXISTS / OR REPLACE 사용).
-- ============================================================

create extension if not exists pgcrypto;

-- 관리자 판별: 이 이메일로 로그인한 회원만 관리자 자료를 읽고 쓸 수 있습니다.
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select coalesce(auth.jwt() ->> 'email', '') = 'songinjai@gmail.com'
$$;

-- ------------------------------------------------------------
-- 1. 게시판
-- ------------------------------------------------------------
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  author_name text not null default 'Member',
  password_hash text not null,
  is_public boolean not null default true,
  views integer not null default 0,
  member_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.post_translations (
  post_id uuid not null references public.posts (id) on delete cascade,
  lang text not null,
  title text not null,
  content text not null,
  created_at timestamptz not null default now(),
  primary key (post_id, lang)
);

grant all on public.posts to service_role;
grant all on public.post_translations to service_role;

alter table public.posts enable row level security;
alter table public.post_translations enable row level security;

-- 글 목록·제목은 누구나 볼 수 있되, 본문과 암호는 직접 읽기에서 제외합니다.
revoke all on public.posts from anon, authenticated;
grant select (id, title, author_name, is_public, views, created_at, updated_at, member_id)
  on public.posts to anon, authenticated;
grant insert (title, content, author_name, password_hash, is_public, member_id)
  on public.posts to authenticated;

drop policy if exists "posts_select_meta" on public.posts;
create policy "posts_select_meta" on public.posts for select using (true);

drop policy if exists "posts_insert_member" on public.posts;
create policy "posts_insert_member" on public.posts for insert
  with check (member_id = auth.uid());

grant select on public.post_translations to anon, authenticated;
drop policy if exists "post_translations_select" on public.post_translations;
create policy "post_translations_select" on public.post_translations for select using (true);

-- 암호는 저장 시 자동으로 해시됩니다.
create or replace function public.posts_hash_password()
returns trigger
language plpgsql
as $$
begin
  if new.password_hash is not null and new.password_hash not like '$2a$%' then
    new.password_hash := crypt(new.password_hash, gen_salt('bf'));
  end if;
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists posts_hash_password_trigger on public.posts;
create trigger posts_hash_password_trigger
  before insert or update on public.posts
  for each row execute function public.posts_hash_password();

create or replace function public.verify_post_password(_post_id uuid, _password text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.posts
    where id = _post_id and password_hash = crypt(_password, password_hash)
  );
$$;

create or replace function public.get_post_content(_post_id uuid, _password text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  _content text;
  _is_public boolean;
begin
  select content, is_public into _content, _is_public from public.posts where id = _post_id;
  if not found then return null; end if;
  if _is_public then return _content; end if;
  if public.verify_post_password(_post_id, _password) then return _content; end if;
  return null;
end;
$$;

create or replace function public.increment_post_views(_post_id uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update public.posts set views = views + 1 where id = _post_id;
$$;

-- 본인 글 + 암호가 맞아야 삭제 (관리자는 암호 없이 삭제 가능)
create or replace function public.delete_post(_post_id uuid, _password text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  _member uuid;
begin
  select member_id into _member from public.posts where id = _post_id;
  if not found then return false; end if;
  if not public.is_admin() then
    if _member is distinct from auth.uid() then return false; end if;
    if not public.verify_post_password(_post_id, _password) then return false; end if;
  end if;
  delete from public.posts where id = _post_id;
  return true;
end;
$$;

grant execute on function public.verify_post_password(uuid, text) to anon, authenticated;
grant execute on function public.get_post_content(uuid, text) to anon, authenticated;
grant execute on function public.increment_post_views(uuid) to anon, authenticated;
grant execute on function public.delete_post(uuid, text) to authenticated;

create index if not exists posts_created_at_idx on public.posts (created_at desc);

-- ------------------------------------------------------------
-- 2. 문의 (방문자 작성 가능, 열람·관리는 관리자만)
-- ------------------------------------------------------------
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  company text,
  message text not null,
  status text not null default 'pending',
  admin_note text,
  source text not null default 'web',
  channel text not null default 'silica',
  account_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

grant insert (name, phone, email, company, message, source, channel) on public.inquiries to anon, authenticated;
grant select, update, delete on public.inquiries to authenticated;
grant all on public.inquiries to service_role;

drop policy if exists "inquiries_insert_public" on public.inquiries;
create policy "inquiries_insert_public" on public.inquiries for insert with check (true);

drop policy if exists "inquiries_admin_all" on public.inquiries;
create policy "inquiries_admin_all" on public.inquiries for all
  using (public.is_admin()) with check (public.is_admin());

-- 회원 본인 문의 내역 (본인 이메일과 일치하는 것만)
create or replace function public.my_inquiries()
returns setof public.inquiries
language sql
security definer
set search_path = public
as $$
  select * from public.inquiries
  where email is not null
    and lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
    and coalesce(auth.jwt() ->> 'email', '') <> ''
  order by created_at desc
  limit 200;
$$;

grant execute on function public.my_inquiries() to authenticated;

-- ------------------------------------------------------------
-- 3. 관리자 CRM (거래처·견적·샘플·매출입) — 관리자 전용
-- ------------------------------------------------------------
create table if not exists public.accounts (
  id uuid primary key default gen_random_uuid(),
  account_type text not null default 'customer',
  channel text not null default 'silica',
  company_name text not null,
  biz_no text,
  ceo_name text,
  biz_type text,
  biz_item text,
  address text,
  email text,
  phone text,
  country text,
  memo text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.account_contacts (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.accounts (id) on delete cascade,
  name text not null,
  position text,
  phone text,
  email text,
  memo text,
  created_at timestamptz not null default now()
);

create table if not exists public.account_notes (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.accounts (id) on delete cascade,
  body text not null,
  note_date date not null default current_date,
  created_at timestamptz not null default now()
);

create table if not exists public.samples (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references public.accounts (id) on delete set null,
  channel text not null default 'silica',
  item_name text not null,
  qty numeric not null default 0,
  unit text not null default 'kg',
  sent_date date,
  tracking_no text,
  carrier text,
  test_status text not null default 'requested',
  feedback text,
  created_at timestamptz not null default now()
);

create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  quote_no text not null,
  account_id uuid references public.accounts (id) on delete set null,
  inquiry_id uuid,
  channel text not null default 'silica',
  issuer text not null default 'silica',
  lang text not null default 'ko',
  currency text not null default 'KRW',
  fx_rate numeric not null default 1,
  quote_date date not null default current_date,
  valid_days integer not null default 30,
  status text not null default 'draft',
  order_confirmed_at timestamptz,
  shipped_at timestamptz,
  buyer_company text,
  buyer_contact text,
  buyer_phone text,
  buyer_email text,
  delivery_terms text,
  seller_company text,
  seller_ceo text,
  seller_address text,
  seller_email text,
  seller_contact text,
  remarks text,
  bank_name text,
  bank_account text,
  bank_holder text,
  vat_rate numeric not null default 0.1,
  subtotal numeric not null default 0,
  vat_amount numeric not null default 0,
  total_amount numeric not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.quote_items (
  id uuid primary key default gen_random_uuid(),
  quote_id uuid not null references public.quotes (id) on delete cascade,
  sort_order integer not null default 1,
  item_name text not null,
  spec text,
  qty numeric not null default 0,
  unit text not null default 'ton',
  unit_price numeric not null default 0,
  amount numeric not null default 0
);

create table if not exists public.sales_vouchers (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references public.accounts (id) on delete set null,
  quote_id uuid references public.quotes (id) on delete set null,
  channel text not null default 'silica',
  voucher_date date not null default current_date,
  description text,
  currency text not null default 'KRW',
  fx_rate numeric not null default 1,
  amount_foreign numeric not null default 0,
  amount_krw numeric not null default 0,
  vat_amount numeric not null default 0,
  total_krw numeric not null default 0,
  receipt_status text not null default 'unpaid',
  tax_invoice_status text not null default 'none',
  transaction_no text,
  delivery_date date,
  tax_invoice_requested_at timestamptz,
  tax_invoice_issued_at timestamptz,
  memo text
);

create table if not exists public.sales_receipts (
  id uuid primary key default gen_random_uuid(),
  voucher_id uuid not null references public.sales_vouchers (id) on delete cascade,
  paid_date date not null default current_date,
  amount numeric not null default 0,
  bank_account text,
  memo text
);

create table if not exists public.purchase_vouchers (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references public.accounts (id) on delete set null,
  channel text not null default 'silica',
  cost_type text not null default 'material',
  voucher_date date not null default current_date,
  description text,
  currency text not null default 'KRW',
  fx_rate numeric not null default 1,
  amount_foreign numeric not null default 0,
  amount_krw numeric not null default 0,
  vat_amount numeric not null default 0,
  total_krw numeric not null default 0,
  pay_status text not null default 'unpaid',
  evidence_status text not null default 'none',
  memo text
);

create table if not exists public.purchase_payments (
  id uuid primary key default gen_random_uuid(),
  voucher_id uuid not null references public.purchase_vouchers (id) on delete cascade,
  paid_date date not null default current_date,
  amount numeric not null default 0,
  bank_account text,
  memo text
);

-- ------------------------------------------------------------
-- 4. 상품 게시 설정·관리자 메모·회원 정보·AI 추천 로그
-- ------------------------------------------------------------
create table if not exists public.product_visibility (
  slug text primary key,
  visible boolean not null default true,
  updated_at timestamptz not null default now()
);

create table if not exists public.product_admin_notes (
  slug text primary key,
  memo text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.member_profiles (
  member_id uuid primary key,
  account_email text,
  contact_email text,
  provider text,
  full_name text,
  company text,
  phone text,
  zipcode text,
  address text,
  address_detail text,
  terms_agreed_at timestamptz,
  signed_up_at timestamptz,
  last_seen_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.product_finder_logs (
  id uuid primary key default gen_random_uuid(),
  member_id uuid,
  member_email text,
  query text not null default '',
  lang text not null default 'ko',
  answer text,
  recommended jsonb,
  status text not null default 'done',
  error_message text,
  duration_ms integer,
  user_agent text,
  created_at timestamptz not null default now()
);

-- 관리자 전용 표 묶음에 RLS 적용
do $$
declare
  t text;
begin
  foreach t in array array[
    'accounts', 'account_contacts', 'account_notes', 'samples', 'quotes', 'quote_items',
    'sales_vouchers', 'sales_receipts', 'purchase_vouchers', 'purchase_payments',
    'product_admin_notes', 'product_finder_logs'
  ] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('grant all on public.%I to service_role', t);
    execute format('drop policy if exists "admin_only" on public.%I', t);
    execute format(
      'create policy "admin_only" on public.%I for all using (public.is_admin()) with check (public.is_admin())',
      t
    );
  end loop;
end $$;

-- 상품 게시 설정: 누구나 읽기 가능(숨김 상품 표시용), 쓰기는 관리자만
alter table public.product_visibility enable row level security;
grant select on public.product_visibility to anon, authenticated;
grant insert, update, delete on public.product_visibility to authenticated;
grant all on public.product_visibility to service_role;
drop policy if exists "product_visibility_read" on public.product_visibility;
create policy "product_visibility_read" on public.product_visibility for select using (true);
drop policy if exists "product_visibility_admin" on public.product_visibility;
create policy "product_visibility_admin" on public.product_visibility for all
  using (public.is_admin()) with check (public.is_admin());

-- 회원 정보: 본인 것만 등록·수정, 열람은 관리자만
alter table public.member_profiles enable row level security;
grant insert, update on public.member_profiles to authenticated;
grant select on public.member_profiles to authenticated;
grant all on public.member_profiles to service_role;
drop policy if exists "member_profiles_self_write" on public.member_profiles;
create policy "member_profiles_self_write" on public.member_profiles for insert
  with check (member_id = auth.uid());
drop policy if exists "member_profiles_self_update" on public.member_profiles;
create policy "member_profiles_self_update" on public.member_profiles for update
  using (member_id = auth.uid()) with check (member_id = auth.uid());
drop policy if exists "member_profiles_admin_read" on public.member_profiles;
create policy "member_profiles_admin_read" on public.member_profiles for select
  using (public.is_admin() or member_id = auth.uid());

-- ------------------------------------------------------------
-- 5. 파일 저장소 (게시판 이미지·제품 자료실)
-- ------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('board-images', 'board-images', true), ('datasheets', 'datasheets', false)
on conflict (id) do nothing;

-- 게시판 이미지: 누구나 보기, 회원은 본인 폴더에만 업로드
drop policy if exists "board_images_read" on storage.objects;
create policy "board_images_read" on storage.objects for select
  using (bucket_id = 'board-images');

drop policy if exists "board_images_insert" on storage.objects;
create policy "board_images_insert" on storage.objects for insert
  with check (bucket_id = 'board-images' and (storage.foldername(name))[1] = auth.uid()::text);

-- 제품 자료실: 로그인한 회원만 열람(서명 주소 발급 포함), 쓰기는 관리자만
drop policy if exists "datasheets_member_read" on storage.objects;
create policy "datasheets_member_read" on storage.objects for select
  using (bucket_id = 'datasheets' and auth.role() = 'authenticated');

drop policy if exists "datasheets_admin_write" on storage.objects;
create policy "datasheets_admin_write" on storage.objects for insert
  with check (bucket_id = 'datasheets' and public.is_admin());
