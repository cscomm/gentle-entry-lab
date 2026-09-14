-- 1) inquiries: channel + account link
ALTER TABLE public.inquiries
  ADD COLUMN IF NOT EXISTS channel text NOT NULL DEFAULT 'silica',
  ADD COLUMN IF NOT EXISTS account_id uuid;

-- 2) accounts
CREATE TABLE public.accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_type text NOT NULL DEFAULT 'customer',
  channel text NOT NULL DEFAULT 'silica',
  company_name text NOT NULL DEFAULT '',
  biz_no text,
  ceo_name text,
  biz_type text,
  biz_item text,
  address text,
  email text,
  phone text,
  country text DEFAULT 'KR',
  memo text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.accounts TO service_role;
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER accounts_set_updated_at BEFORE UPDATE ON public.accounts FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.inquiries
  ADD CONSTRAINT inquiries_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.accounts(id) ON DELETE SET NULL;

-- 3) contacts
CREATE TABLE public.account_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  name text NOT NULL DEFAULT '',
  position text,
  phone text,
  email text,
  memo text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.account_contacts TO service_role;
ALTER TABLE public.account_contacts ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER account_contacts_set_updated_at BEFORE UPDATE ON public.account_contacts FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 4) account notes (timeline)
CREATE TABLE public.account_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  body text NOT NULL DEFAULT '',
  note_date date NOT NULL DEFAULT (now()::date),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.account_notes TO service_role;
ALTER TABLE public.account_notes ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER account_notes_set_updated_at BEFORE UPDATE ON public.account_notes FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 5) samples
CREATE TABLE public.samples (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES public.accounts(id) ON DELETE SET NULL,
  channel text NOT NULL DEFAULT 'silica',
  item_name text NOT NULL DEFAULT '',
  qty numeric NOT NULL DEFAULT 0,
  unit text NOT NULL DEFAULT 'kg',
  sent_date date,
  tracking_no text,
  carrier text,
  test_status text NOT NULL DEFAULT 'requested',
  feedback text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.samples TO service_role;
ALTER TABLE public.samples ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER samples_set_updated_at BEFORE UPDATE ON public.samples FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 6) quotes
CREATE TABLE public.quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_no text NOT NULL,
  account_id uuid REFERENCES public.accounts(id) ON DELETE SET NULL,
  inquiry_id uuid REFERENCES public.inquiries(id) ON DELETE SET NULL,
  channel text NOT NULL DEFAULT 'silica',
  issuer text NOT NULL DEFAULT 'silica',
  lang text NOT NULL DEFAULT 'ko',
  currency text NOT NULL DEFAULT 'KRW',
  fx_rate numeric NOT NULL DEFAULT 1,
  quote_date date NOT NULL DEFAULT (now()::date),
  valid_days integer NOT NULL DEFAULT 30,
  status text NOT NULL DEFAULT 'draft',
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
  vat_rate numeric NOT NULL DEFAULT 10,
  subtotal numeric NOT NULL DEFAULT 0,
  vat_amount numeric NOT NULL DEFAULT 0,
  total_amount numeric NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.quotes TO service_role;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER quotes_set_updated_at BEFORE UPDATE ON public.quotes FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.quote_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_id uuid NOT NULL REFERENCES public.quotes(id) ON DELETE CASCADE,
  sort_order integer NOT NULL DEFAULT 1,
  item_name text NOT NULL DEFAULT '',
  spec text,
  qty numeric NOT NULL DEFAULT 0,
  unit text NOT NULL DEFAULT 'ton',
  unit_price numeric NOT NULL DEFAULT 0,
  amount numeric NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.quote_items TO service_role;
ALTER TABLE public.quote_items ENABLE ROW LEVEL SECURITY;

-- 7) sales vouchers
CREATE TABLE public.sales_vouchers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES public.accounts(id) ON DELETE SET NULL,
  quote_id uuid REFERENCES public.quotes(id) ON DELETE SET NULL,
  channel text NOT NULL DEFAULT 'silica',
  voucher_date date NOT NULL DEFAULT (now()::date),
  description text,
  currency text NOT NULL DEFAULT 'KRW',
  fx_rate numeric NOT NULL DEFAULT 1,
  amount_foreign numeric NOT NULL DEFAULT 0,
  amount_krw numeric NOT NULL DEFAULT 0,
  vat_amount numeric NOT NULL DEFAULT 0,
  total_krw numeric NOT NULL DEFAULT 0,
  receipt_status text NOT NULL DEFAULT 'unpaid',
  tax_invoice_status text NOT NULL DEFAULT 'none',
  memo text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.sales_vouchers TO service_role;
ALTER TABLE public.sales_vouchers ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER sales_vouchers_set_updated_at BEFORE UPDATE ON public.sales_vouchers FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.sales_receipts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  voucher_id uuid NOT NULL REFERENCES public.sales_vouchers(id) ON DELETE CASCADE,
  paid_date date NOT NULL DEFAULT (now()::date),
  amount numeric NOT NULL DEFAULT 0,
  bank_account text,
  memo text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.sales_receipts TO service_role;
ALTER TABLE public.sales_receipts ENABLE ROW LEVEL SECURITY;

-- 8) purchase vouchers
CREATE TABLE public.purchase_vouchers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES public.accounts(id) ON DELETE SET NULL,
  channel text NOT NULL DEFAULT 'silica',
  cost_type text NOT NULL DEFAULT 'material',
  voucher_date date NOT NULL DEFAULT (now()::date),
  description text,
  currency text NOT NULL DEFAULT 'KRW',
  fx_rate numeric NOT NULL DEFAULT 1,
  amount_foreign numeric NOT NULL DEFAULT 0,
  amount_krw numeric NOT NULL DEFAULT 0,
  vat_amount numeric NOT NULL DEFAULT 0,
  total_krw numeric NOT NULL DEFAULT 0,
  pay_status text NOT NULL DEFAULT 'unpaid',
  evidence_status text NOT NULL DEFAULT 'none',
  memo text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.purchase_vouchers TO service_role;
ALTER TABLE public.purchase_vouchers ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER purchase_vouchers_set_updated_at BEFORE UPDATE ON public.purchase_vouchers FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.purchase_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  voucher_id uuid NOT NULL REFERENCES public.purchase_vouchers(id) ON DELETE CASCADE,
  paid_date date NOT NULL DEFAULT (now()::date),
  amount numeric NOT NULL DEFAULT 0,
  bank_account text,
  memo text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.purchase_payments TO service_role;
ALTER TABLE public.purchase_payments ENABLE ROW LEVEL SECURITY;

CREATE INDEX idx_quote_items_quote ON public.quote_items(quote_id);
CREATE INDEX idx_contacts_account ON public.account_contacts(account_id);
CREATE INDEX idx_notes_account ON public.account_notes(account_id);
CREATE INDEX idx_samples_account ON public.samples(account_id);
CREATE INDEX idx_sales_account ON public.sales_vouchers(account_id);
CREATE INDEX idx_purchase_account ON public.purchase_vouchers(account_id);
CREATE UNIQUE INDEX idx_quotes_no ON public.quotes(quote_no);