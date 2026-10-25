CREATE TABLE public.product_finder_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  query text NOT NULL DEFAULT '',
  lang text NOT NULL DEFAULT 'ko',
  answer text,
  recommended jsonb NOT NULL DEFAULT '[]'::jsonb,
  status text NOT NULL DEFAULT 'pending',
  error_message text,
  duration_ms integer,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.product_finder_logs TO service_role;

ALTER TABLE public.product_finder_logs ENABLE ROW LEVEL SECURITY;

CREATE INDEX product_finder_logs_created_at_idx ON public.product_finder_logs (created_at DESC);

CREATE TRIGGER product_finder_logs_set_updated_at
  BEFORE UPDATE ON public.product_finder_logs
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

COMMENT ON TABLE public.product_finder_logs IS 'AI product finder requests and answers; written by the product-finder edge function, read only through admin-crm.';