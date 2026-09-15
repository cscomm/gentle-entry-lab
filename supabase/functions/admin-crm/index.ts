import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

// Tables the admin panel may read/write, with their allowed columns.
const TABLES: Record<string, string[]> = {
  accounts: [
    'account_type', 'channel', 'company_name', 'biz_no', 'ceo_name', 'biz_type', 'biz_item',
    'address', 'email', 'phone', 'country', 'memo',
  ],
  account_contacts: ['account_id', 'name', 'position', 'phone', 'email', 'memo'],
  account_notes: ['account_id', 'body', 'note_date'],
  samples: [
    'account_id', 'channel', 'item_name', 'qty', 'unit', 'sent_date', 'tracking_no', 'carrier',
    'test_status', 'feedback',
  ],
  quotes: [
    'quote_no', 'account_id', 'inquiry_id', 'channel', 'issuer', 'lang', 'currency', 'fx_rate',
    'quote_date', 'valid_days', 'status', 'buyer_company', 'buyer_contact', 'buyer_phone',
    'buyer_email', 'delivery_terms', 'seller_company', 'seller_ceo', 'seller_address',
    'seller_email', 'seller_contact', 'remarks', 'bank_name', 'bank_account', 'bank_holder',
    'vat_rate', 'subtotal', 'vat_amount', 'total_amount', 'order_confirmed_at', 'shipped_at',
  ],
  quote_items: ['quote_id', 'sort_order', 'item_name', 'spec', 'qty', 'unit', 'unit_price', 'amount'],
  sales_vouchers: [
    'account_id', 'quote_id', 'channel', 'voucher_date', 'description', 'currency', 'fx_rate',
    'amount_foreign', 'amount_krw', 'vat_amount', 'total_krw', 'receipt_status',
    'tax_invoice_status', 'transaction_no', 'delivery_date', 'tax_invoice_requested_at',
    'tax_invoice_issued_at', 'memo',
  ],
  sales_receipts: ['voucher_id', 'paid_date', 'amount', 'bank_account', 'memo'],
  purchase_vouchers: [
    'account_id', 'channel', 'cost_type', 'voucher_date', 'description', 'currency', 'fx_rate',
    'amount_foreign', 'amount_krw', 'vat_amount', 'total_krw', 'pay_status', 'evidence_status',
    'memo',
  ],
  purchase_payments: ['voucher_id', 'paid_date', 'amount', 'bank_account', 'memo'],
}

const ORDER: Record<string, { col: string; asc: boolean }> = {
  accounts: { col: 'created_at', asc: false },
  account_contacts: { col: 'created_at', asc: true },
  account_notes: { col: 'note_date', asc: false },
  samples: { col: 'created_at', asc: false },
  quotes: { col: 'quote_date', asc: false },
  quote_items: { col: 'sort_order', asc: true },
  sales_vouchers: { col: 'voucher_date', asc: false },
  sales_receipts: { col: 'paid_date', asc: false },
  purchase_vouchers: { col: 'voucher_date', asc: false },
  purchase_payments: { col: 'paid_date', asc: false },
}

const pickCols = (table: string, body: Record<string, unknown>) => {
  const cols = TABLES[table]
  const row: Record<string, unknown> = {}
  const src = (body.values ?? {}) as Record<string, unknown>
  for (const c of cols) {
    if (src[c] === undefined) continue
    const v = src[c]
    row[c] = typeof v === 'string' ? v.slice(0, 20000) : v
  }
  return row
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

  const url = Deno.env.get('SUPABASE_URL')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  const adminPassword = Deno.env.get('ADMIN_PANEL_PASSWORD')
  if (!url || !serviceKey || !adminPassword) return json({ error: 'server_misconfigured' }, 500)

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json({ error: 'invalid_json' }, 400)
  }

  const password = typeof body.password === 'string' ? body.password : ''
  const enc = new TextEncoder()
  const a = enc.encode(password)
  const b = enc.encode(adminPassword)
  let same = a.length === b.length
  for (let i = 0; i < Math.max(a.length, b.length); i++) if (a[i] !== b[i]) same = false
  if (!same) {
    await new Promise((r) => setTimeout(r, 400))
    return json({ error: 'unauthorized' }, 401)
  }

  const action = typeof body.action === 'string' ? body.action : ''
  const table = typeof body.table === 'string' ? body.table : ''
  const supabase = createClient(url, serviceKey)

  try {
    if (action === 'ping') return json({ success: true })

    if (action === 'bootstrap') {
      const [accounts, quotes, samples, sales, purchases, receipts, payments, quoteItems] =
        await Promise.all([
          supabase.from('accounts').select('*').order('created_at', { ascending: false }).limit(2000),
          supabase.from('quotes').select('*').order('quote_date', { ascending: false }).limit(2000),
          supabase.from('samples').select('*').order('created_at', { ascending: false }).limit(2000),
          supabase.from('sales_vouchers').select('*').order('voucher_date', { ascending: false }).limit(3000),
          supabase.from('purchase_vouchers').select('*').order('voucher_date', { ascending: false }).limit(3000),
          supabase.from('sales_receipts').select('*').limit(5000),
          supabase.from('purchase_payments').select('*').limit(5000),
          supabase.from('quote_items').select('*').order('sort_order', { ascending: true }).limit(8000),
        ])
      for (const r of [accounts, quotes, samples, sales, purchases, receipts, payments, quoteItems]) {
        if (r.error) throw r.error
      }
      return json({
        success: true,
        accounts: accounts.data,
        quotes: quotes.data,
        quote_items: quoteItems.data,
        samples: samples.data,
        sales_vouchers: sales.data,
        purchase_vouchers: purchases.data,
        sales_receipts: receipts.data,
        purchase_payments: payments.data,
      })
    }

    if (!TABLES[table]) return json({ error: 'unknown_table' }, 400)

    if (action === 'list') {
      let q = supabase.from(table).select('*')
      const eq = (body.eq ?? {}) as Record<string, unknown>
      for (const [k, v] of Object.entries(eq)) {
        if (TABLES[table].includes(k) || k === 'id') q = q.eq(k, v as never)
      }
      const o = ORDER[table]
      const { data, error } = await q.order(o.col, { ascending: o.asc }).limit(5000)
      if (error) throw error
      return json({ success: true, rows: data })
    }

    if (action === 'create') {
      const row = pickCols(table, body)
      const { data, error } = await supabase.from(table).insert(row).select().maybeSingle()
      if (error) throw error
      return json({ success: true, row: data })
    }

    if (action === 'update') {
      const id = typeof body.id === 'string' ? body.id : ''
      if (!id) return json({ error: 'id_required' }, 400)
      const row = pickCols(table, body)
      if (Object.keys(row).length === 0) return json({ error: 'nothing_to_update' }, 400)
      const { data, error } = await supabase.from(table).update(row).eq('id', id).select().maybeSingle()
      if (error) throw error
      return json({ success: true, row: data })
    }

    if (action === 'delete') {
      const id = typeof body.id === 'string' ? body.id : ''
      if (!id) return json({ error: 'id_required' }, 400)
      const { error } = await supabase.from(table).delete().eq('id', id)
      if (error) throw error
      return json({ success: true })
    }

    // Replace all quote items in one shot
    if (action === 'replace_quote_items' && table === 'quote_items') {
      const quoteId = typeof body.quote_id === 'string' ? body.quote_id : ''
      if (!quoteId) return json({ error: 'quote_id_required' }, 400)
      const items = Array.isArray(body.items) ? body.items : []
      const { error: delErr } = await supabase.from('quote_items').delete().eq('quote_id', quoteId)
      if (delErr) throw delErr
      const rows = items.slice(0, 100).map((it: Record<string, unknown>, idx: number) => ({
        quote_id: quoteId,
        sort_order: idx + 1,
        item_name: String(it.item_name ?? '').slice(0, 500),
        spec: it.spec ? String(it.spec).slice(0, 300) : null,
        qty: Number(it.qty ?? 0),
        unit: String(it.unit ?? 'ton').slice(0, 20),
        unit_price: Number(it.unit_price ?? 0),
        amount: Number(it.amount ?? 0),
      }))
      if (rows.length > 0) {
        const { error } = await supabase.from('quote_items').insert(rows)
        if (error) throw error
      }
      const { data, error } = await supabase
        .from('quote_items')
        .select('*')
        .eq('quote_id', quoteId)
        .order('sort_order', { ascending: true })
      if (error) throw error
      return json({ success: true, rows: data })
    }

    return json({ error: 'unknown_action' }, 400)
  } catch (e) {
    console.error('admin-crm failed', e)
    return json({ error: 'internal_error', detail: String(e) }, 500)
  }
})
