import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

const STATUSES = ['pending', 'in_progress', 'done', 'archived']

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

  const url = Deno.env.get('SUPABASE_URL')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  const adminPassword = Deno.env.get('ADMIN_PANEL_PASSWORD')
  if (!url || !serviceKey || !adminPassword) {
    return json({ error: 'server_misconfigured' }, 500)
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json({ error: 'invalid_json' }, 400)
  }

  const password = typeof body.password === 'string' ? body.password : ''
  // constant-ish time compare
  const enc = new TextEncoder()
  const a = enc.encode(password)
  const b = enc.encode(adminPassword)
  let same = a.length === b.length
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] !== b[i]) same = false
  }
  if (!same) {
    await new Promise((r) => setTimeout(r, 400))
    return json({ error: 'unauthorized' }, 401)
  }

  const action = typeof body.action === 'string' ? body.action : ''
  const supabase = createClient(url, serviceKey)

  try {
    if (action === 'login') return json({ success: true })

    if (action === 'list') {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1000)
      if (error) throw error
      return json({ success: true, inquiries: data })
    }

    if (action === 'update') {
      const id = typeof body.id === 'string' ? body.id : ''
      if (!id) return json({ error: 'id_required' }, 400)
      const patch: Record<string, unknown> = {}
      if (typeof body.status === 'string') {
        if (!STATUSES.includes(body.status)) return json({ error: 'bad_status' }, 400)
        patch.status = body.status
      }
      if (typeof body.admin_note === 'string') patch.admin_note = body.admin_note.slice(0, 5000)
      for (const f of ['name', 'phone', 'email', 'company', 'message', 'channel'] as const) {
        if (typeof body[f] === 'string') patch[f] = (body[f] as string).slice(0, 5000)
      }
      if (typeof body.account_id === 'string') patch.account_id = body.account_id || null
      if (Object.keys(patch).length === 0) return json({ error: 'nothing_to_update' }, 400)
      const { data, error } = await supabase
        .from('inquiries')
        .update(patch)
        .eq('id', id)
        .select()
        .maybeSingle()
      if (error) throw error
      return json({ success: true, inquiry: data })
    }

    if (action === 'create') {
      const row = {
        name: String(body.name ?? '').slice(0, 200),
        phone: body.phone ? String(body.phone).slice(0, 100) : null,
        email: body.email ? String(body.email).slice(0, 200) : null,
        company: body.company ? String(body.company).slice(0, 200) : null,
        message: String(body.message ?? '').slice(0, 5000),
        status: typeof body.status === 'string' && STATUSES.includes(body.status) ? body.status : 'pending',
        source: 'manual',
        ...(typeof body.created_at === 'string' && body.created_at ? { created_at: body.created_at } : {}),
      }
      const { data, error } = await supabase.from('inquiries').insert(row).select().maybeSingle()
      if (error) throw error
      return json({ success: true, inquiry: data })
    }

    if (action === 'delete') {
      const id = typeof body.id === 'string' ? body.id : ''
      if (!id) return json({ error: 'id_required' }, 400)
      const { error } = await supabase.from('inquiries').delete().eq('id', id)
      if (error) throw error
      return json({ success: true })
    }

    if (action === 'backfill') {
      // Recover past inquiries from confirmation-email send history
      const { data: logs, error: logError } = await supabase
        .from('email_send_log')
        .select('recipient_email, created_at')
        .eq('template_name', 'contact-confirmation')
        .order('created_at', { ascending: false })
        .limit(1000)
      if (logError) throw logError

      const { data: existing, error: exError } = await supabase
        .from('inquiries')
        .select('email, created_at')
        .limit(2000)
      if (exError) throw exError

      const seen = new Set(
        (existing ?? []).map((r: any) => `${(r.email ?? '').toLowerCase()}|${String(r.created_at).slice(0, 10)}`),
      )
      const rows: Record<string, unknown>[] = []
      for (const l of logs ?? []) {
        const key = `${(l.recipient_email ?? '').toLowerCase()}|${String(l.created_at).slice(0, 10)}`
        if (!l.recipient_email || seen.has(key)) continue
        seen.add(key)
        rows.push({
          name: '(이름 미확인)',
          email: l.recipient_email,
          message: '(과거 문의 — 발송 기록에서 복구. 상세 내용은 메일함 확인 필요)',
          status: 'archived',
          source: 'backfill',
          created_at: l.created_at,
        })
      }
      if (rows.length > 0) {
        const { error } = await supabase.from('inquiries').insert(rows)
        if (error) throw error
      }
      return json({ success: true, imported: rows.length })
    }

    return json({ error: 'unknown_action' }, 400)
  } catch (e) {
    console.error('admin-inquiries failed', e)
    return json({ error: 'internal_error' }, 500)
  }
})
