CREATE TABLE public.product_visibility (
  slug text PRIMARY KEY,
  visible boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.product_visibility TO anon, authenticated;
GRANT ALL ON public.product_visibility TO service_role;
ALTER TABLE public.product_visibility ENABLE ROW LEVEL SECURITY;
CREATE POLICY "visibility readable by all" ON public.product_visibility FOR SELECT USING (true);