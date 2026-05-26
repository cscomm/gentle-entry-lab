insert into storage.buckets (id, name, public) values ('board-images', 'board-images', true) on conflict (id) do nothing;

create policy "Public read board images"
on storage.objects for select
using (bucket_id = 'board-images');

create policy "Anyone can upload board images"
on storage.objects for insert
to anon, authenticated
with check (bucket_id = 'board-images');