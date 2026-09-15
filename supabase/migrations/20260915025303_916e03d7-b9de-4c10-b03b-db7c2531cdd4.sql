ALTER TABLE public.quotes
  ADD COLUMN IF NOT EXISTS order_confirmed_at timestamptz,
  ADD COLUMN IF NOT EXISTS shipped_at timestamptz;

ALTER TABLE public.sales_vouchers
  ADD COLUMN IF NOT EXISTS transaction_no text,
  ADD COLUMN IF NOT EXISTS delivery_date date,
  ADD COLUMN IF NOT EXISTS tax_invoice_requested_at timestamptz,
  ADD COLUMN IF NOT EXISTS tax_invoice_issued_at timestamptz;

CREATE UNIQUE INDEX IF NOT EXISTS idx_sales_vouchers_transaction_no
  ON public.sales_vouchers(transaction_no)
  WHERE transaction_no IS NOT NULL;