CREATE TABLE public.product_admin_notes (
  slug text PRIMARY KEY,
  memo text NOT NULL DEFAULT '',
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.product_admin_notes TO service_role;
ALTER TABLE public.product_admin_notes ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.product_admin_notes IS 'Admin-only product memos (prices, notes). Service role only; read/written via admin-crm.';