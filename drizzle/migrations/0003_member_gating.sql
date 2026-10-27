ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS member_id uuid;
COMMENT ON COLUMN public.posts.member_id IS 'Member account id from the external sign-up server; posts are created only through the member-api function.';
DROP POLICY IF EXISTS "Anyone can insert posts" ON public.posts;
ALTER TABLE public.product_finder_logs ADD COLUMN IF NOT EXISTS member_id uuid;
ALTER TABLE public.product_finder_logs ADD COLUMN IF NOT EXISTS member_email text;