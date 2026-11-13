-- Hide post body and password hash from direct reads; content is served via get_post_content
REVOKE SELECT ON public.posts FROM anon, authenticated;
GRANT SELECT (id, title, author_name, is_public, views, created_at, updated_at, member_id) ON public.posts TO anon, authenticated;

-- Password-only deletion is no longer allowed; deletion goes through member-api with ownership check
REVOKE EXECUTE ON FUNCTION public.delete_post_with_password(uuid, text) FROM PUBLIC, anon, authenticated;

-- Pin search_path on queue helpers
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = '';
ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = '';
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = '';
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = '';

-- Inquiries: only well-formed new website submissions
DROP POLICY IF EXISTS "Anyone can submit an inquiry" ON public.inquiries;
CREATE POLICY "Anyone can submit a valid inquiry" ON public.inquiries
FOR INSERT TO anon, authenticated
WITH CHECK (
  status = 'pending' AND source = 'website' AND channel = 'silica'
  AND admin_note IS NULL AND account_id IS NULL
  AND length(name) BETWEEN 1 AND 100
  AND length(message) BETWEEN 1 AND 2000
  AND (phone IS NULL OR length(phone) <= 50)
  AND (company IS NULL OR length(company) <= 200)
  AND (email IS NULL OR (length(email) <= 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'))
);

-- Board images: uploads only through member-api (service role)
DROP POLICY IF EXISTS "Anyone can upload board images" ON storage.objects;