ALTER TABLE public.product_finder_logs ADD COLUMN IF NOT EXISTS guest_device_id text;
ALTER TABLE public.product_finder_logs ADD COLUMN IF NOT EXISTS guest_ip_hash text;
CREATE INDEX IF NOT EXISTS product_finder_logs_member_created_idx ON public.product_finder_logs (member_id, created_at);
CREATE INDEX IF NOT EXISTS product_finder_logs_guest_device_idx ON public.product_finder_logs (guest_device_id) WHERE guest_device_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS product_finder_logs_guest_ip_idx ON public.product_finder_logs (guest_ip_hash) WHERE guest_ip_hash IS NOT NULL;