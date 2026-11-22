DROP POLICY IF EXISTS "post translations readable by all" ON public.post_translations;
REVOKE ALL ON TABLE public.post_translations FROM anon, authenticated;
GRANT ALL ON TABLE public.post_translations TO service_role;

DROP POLICY IF EXISTS "visibility readable by all" ON public.product_visibility;
REVOKE ALL ON TABLE public.product_visibility FROM anon, authenticated;
GRANT ALL ON TABLE public.product_visibility TO service_role;