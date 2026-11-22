import { memberAuth } from "@/lib/members/client";

/** Admin data lives in the member storage project; only the admin account may read/write it. */
export const ADMIN_EMAIL = "songinjai@gmail.com";

export type Channel = "silica" | "nanokorea" | "etc";

export const CHANNEL_LABEL: Record<Channel, string> = {
  silica: "실리카",
  nanokorea: "나노코리아",
  etc: "기타/직접연락",
};

export const CHANNEL_STYLE: Record<Channel, string> = {
  silica: "bg-sky-100 text-sky-800 border-sky-200",
  nanokorea: "bg-emerald-100 text-emerald-800 border-emerald-200",
  etc: "bg-muted text-muted-foreground border-border",
};

export const CHANNELS: Channel[] = ["silica", "nanokorea", "etc"];

export const asChannel = (v: string | null | undefined): Channel =>
  v === "nanokorea" || v === "etc" ? v : "silica";

export const ISSUERS = {
  silica: {
    label: "주식회사 비에이알",
    company: "주식회사 비에이알",
    companyEn: "BAR Co., Ltd.",
    bizNo: "565-88-02541",
    ceo: "박균수",
    address: "전라북도 진안군 동향면 동계로 328",
    bizType: "제조업, 도매 및 소매업",
    bizItem: "비금속광물 광업, 도소매업, 광물",
    email: "info@silica.co.kr",
    contact: "송인재 (010-8884-2773)",
    prefix: "SIL",
  },
  nanokorea: {
    label: "나노코리아",
    company: "나노코리아",
    companyEn: "NANO KOREA",
    bizNo: "",
    ceo: "최은성",
    address: "경기도 화성시",
    bizType: "",
    bizItem: "",
    email: "info@silica.co.kr",
    contact: "송인재 (010-8884-2773)",
    prefix: "NK",
  },
} as const;

export type Issuer = keyof typeof ISSUERS;

export interface Account {
  id: string;
  account_type: "customer" | "supplier";
  channel: string;
  company_name: string;
  biz_no: string | null;
  ceo_name: string | null;
  biz_type: string | null;
  biz_item: string | null;
  address: string | null;
  email: string | null;
  phone: string | null;
  country: string | null;
  memo: string | null;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  account_id: string;
  name: string;
  position: string | null;
  phone: string | null;
  email: string | null;
  memo: string | null;
  created_at: string;
}

export interface AccountNote {
  id: string;
  account_id: string;
  body: string;
  note_date: string;
  created_at: string;
}

export interface Sample {
  id: string;
  account_id: string | null;
  channel: string;
  item_name: string;
  qty: number;
  unit: string;
  sent_date: string | null;
  tracking_no: string | null;
  carrier: string | null;
  test_status: string;
  feedback: string | null;
  created_at: string;
}

export interface Quote {
  id: string;
  quote_no: string;
  account_id: string | null;
  inquiry_id: string | null;
  channel: string;
  issuer: string;
  lang: "ko" | "en";
  currency: string;
  fx_rate: number;
  quote_date: string;
  valid_days: number;
  status: "draft" | "sent" | "won" | "order_confirmed" | "shipped" | "lost";
  order_confirmed_at: string | null;
  shipped_at: string | null;
  buyer_company: string | null;
  buyer_contact: string | null;
  buyer_phone: string | null;
  buyer_email: string | null;
  delivery_terms: string | null;
  seller_company: string | null;
  seller_ceo: string | null;
  seller_address: string | null;
  seller_email: string | null;
  seller_contact: string | null;
  remarks: string | null;
  bank_name: string | null;
  bank_account: string | null;
  bank_holder: string | null;
  vat_rate: number;
  subtotal: number;
  vat_amount: number;
  total_amount: number;
  created_at: string;
}

export interface QuoteItem {
  id?: string;
  quote_id?: string;
  sort_order: number;
  item_name: string;
  spec: string | null;
  qty: number;
  unit: string;
  unit_price: number;
  amount: number;
}

export interface SalesVoucher {
  id: string;
  account_id: string | null;
  quote_id: string | null;
  channel: string;
  voucher_date: string;
  description: string | null;
  currency: string;
  fx_rate: number;
  amount_foreign: number;
  amount_krw: number;
  vat_amount: number;
  total_krw: number;
  receipt_status: "unpaid" | "partial" | "paid";
  tax_invoice_status: string;
  transaction_no: string | null;
  delivery_date: string | null;
  tax_invoice_requested_at: string | null;
  tax_invoice_issued_at: string | null;
  memo: string | null;
}

export interface PurchaseVoucher {
  id: string;
  account_id: string | null;
  channel: string;
  cost_type: string;
  voucher_date: string;
  description: string | null;
  currency: string;
  fx_rate: number;
  amount_foreign: number;
  amount_krw: number;
  vat_amount: number;
  total_krw: number;
  pay_status: "unpaid" | "paid";
  evidence_status: string;
  memo: string | null;
}

export interface MoneyRow {
  id: string;
  voucher_id: string;
  paid_date: string;
  amount: number;
  bank_account: string | null;
  memo: string | null;
}

export const SAMPLE_STATUS: Record<string, string> = {
  requested: "요청접수",
  preparing: "준비중",
  shipped: "발송완료",
  testing: "테스트중",
  feedback: "피드백수신",
  closed: "종료",
};

export const QUOTE_STATUS: Record<string, string> = {
  draft: "작성중",
  sent: "발송완료",
  won: "계약성사",
  order_confirmed: "주문 확정",
  shipped: "출고 완료",
  lost: "거절",
};

export const QUOTE_STATUS_STYLE: Record<string, string> = {
  draft: "bg-muted text-muted-foreground border-border",
  sent: "bg-sky-100 text-sky-800 border-sky-200",
  won: "bg-emerald-100 text-emerald-800 border-emerald-200",
  order_confirmed: "bg-amber-100 text-amber-800 border-amber-200",
  shipped: "bg-teal-100 text-teal-800 border-teal-200",
  lost: "bg-rose-100 text-rose-800 border-rose-200",
};

export const RECEIPT_STATUS: Record<string, string> = {
  unpaid: "미수금",
  partial: "부분수금",
  paid: "수금완료",
};

export const TAX_INVOICE_STATUS: Record<string, string> = {
  none: "미발행",
  requested: "발행 요청",
  issued: "세금계산서 발행완료",
  zero_rate: "영세율",
  cash_receipt: "현금영수증",
};

export const PAY_STATUS: Record<string, string> = {
  unpaid: "미지급",
  paid: "지급완료",
};

export const EVIDENCE_STATUS: Record<string, string> = {
  none: "미수취",
  tax_invoice: "세금계산서",
  invoice: "계산서",
  card: "신용카드",
  cash_receipt: "현금영수증",
  zero_rate: "영세율",
};

export const COST_TYPE: Record<string, string> = {
  material: "원자재 매입",
  freight: "운송비",
  customs: "관세사 수수료",
  forwarding: "포워딩",
  etc: "기타",
};

export const CURRENCIES = ["KRW", "USD", "EUR", "JPY", "CNY"];
export const UNITS = ["ton", "kg", "EA", "bag", "set"];

export const won = (n: number) => Math.round(n || 0).toLocaleString("ko-KR");

export const num = (v: string | number) => {
  const n = typeof v === "number" ? v : Number(String(v).replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
};

export const today = () => new Date().toISOString().slice(0, 10);

export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });

export const fmtDateTime = (iso: string) =>
  new Date(iso).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

// Tables the admin panel may read/write, with their allowed columns
// (mirrors the former admin-crm server action).
const TABLES: Record<string, string[]> = {
  accounts: [
    "account_type", "channel", "company_name", "biz_no", "ceo_name", "biz_type", "biz_item",
    "address", "email", "phone", "country", "memo",
  ],
  account_contacts: ["account_id", "name", "position", "phone", "email", "memo"],
  account_notes: ["account_id", "body", "note_date"],
  samples: [
    "account_id", "channel", "item_name", "qty", "unit", "sent_date", "tracking_no", "carrier",
    "test_status", "feedback",
  ],
  quotes: [
    "quote_no", "account_id", "inquiry_id", "channel", "issuer", "lang", "currency", "fx_rate",
    "quote_date", "valid_days", "status", "buyer_company", "buyer_contact", "buyer_phone",
    "buyer_email", "delivery_terms", "seller_company", "seller_ceo", "seller_address",
    "seller_email", "seller_contact", "remarks", "bank_name", "bank_account", "bank_holder",
    "vat_rate", "subtotal", "vat_amount", "total_amount", "order_confirmed_at", "shipped_at",
  ],
  quote_items: ["quote_id", "sort_order", "item_name", "spec", "qty", "unit", "unit_price", "amount"],
  sales_vouchers: [
    "account_id", "quote_id", "channel", "voucher_date", "description", "currency", "fx_rate",
    "amount_foreign", "amount_krw", "vat_amount", "total_krw", "receipt_status",
    "tax_invoice_status", "transaction_no", "delivery_date", "tax_invoice_requested_at",
    "tax_invoice_issued_at", "memo",
  ],
  sales_receipts: ["voucher_id", "paid_date", "amount", "bank_account", "memo"],
  purchase_vouchers: [
    "account_id", "channel", "cost_type", "voucher_date", "description", "currency", "fx_rate",
    "amount_foreign", "amount_krw", "vat_amount", "total_krw", "pay_status", "evidence_status",
    "memo",
  ],
  purchase_payments: ["voucher_id", "paid_date", "amount", "bank_account", "memo"],
};

const ORDER: Record<string, { col: string; asc: boolean }> = {
  accounts: { col: "created_at", asc: false },
  account_contacts: { col: "created_at", asc: true },
  account_notes: { col: "note_date", asc: false },
  samples: { col: "created_at", asc: false },
  quotes: { col: "quote_date", asc: false },
  quote_items: { col: "sort_order", asc: true },
  sales_vouchers: { col: "voucher_date", asc: false },
  sales_receipts: { col: "paid_date", asc: false },
  purchase_vouchers: { col: "voucher_date", asc: false },
  purchase_payments: { col: "paid_date", asc: false },
};

const pickCols = (table: string, body: Record<string, unknown>) => {
  const cols = TABLES[table];
  const row: Record<string, unknown> = {};
  const src = (body.values ?? {}) as Record<string, unknown>;
  for (const c of cols) {
    if (src[c] === undefined) continue;
    const v = src[c];
    row[c] = typeof v === "string" ? v.slice(0, 20000) : v;
  }
  return row;
};

const fail = (error: { message?: string } | null) => {
  if (error) throw new Error(error.message ?? "error");
};

/** Admin CRM actions, executed directly against the member storage project.
 *  The admin's member login session authorizes every call (RLS). */
export async function crm(payload: Record<string, unknown>): Promise<any> {
  const action = String(payload.action ?? "");
  const table = String(payload.table ?? "");

  if (action === "ping") return { success: true };

  if (action === "set_visibility") {
    const slugs = (Array.isArray(payload.slugs) ? payload.slugs : [payload.slug])
      .filter((s): s is string => typeof s === "string" && s.length > 0 && s.length < 200)
      .slice(0, 500);
    if (slugs.length === 0) throw new Error("slug_required");
    const visible = payload.visible !== false;
    const rows = slugs.map((slug) => ({ slug, visible, updated_at: new Date().toISOString() }));
    fail((await memberAuth.from("product_visibility").upsert(rows, { onConflict: "slug" })).error);
    return { success: true };
  }

  if (action === "product_notes") {
    const { data, error } = await memberAuth
      .from("product_admin_notes")
      .select("slug, memo, updated_at")
      .limit(2000);
    fail(error);
    return { success: true, rows: data };
  }

  if (action === "set_product_note") {
    const slug = String(payload.slug ?? "");
    if (!slug || slug.length > 200) throw new Error("slug_required");
    const memo = String(payload.memo ?? "").slice(0, 5000);
    fail(
      (
        await memberAuth
          .from("product_admin_notes")
          .upsert({ slug, memo, updated_at: new Date().toISOString() }, { onConflict: "slug" })
      ).error,
    );
    return { success: true };
  }

  if (action === "finder_logs") {
    const limit = Math.min(Math.max(Number(payload.limit) || 300, 1), 1000);
    const { data, error } = await memberAuth
      .from("product_finder_logs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);
    fail(error);
    return { success: true, rows: data };
  }

  if (action === "delete_finder_log") {
    const id = String(payload.id ?? "");
    if (!id) throw new Error("id_required");
    fail((await memberAuth.from("product_finder_logs").delete().eq("id", id)).error);
    return { success: true };
  }

  if (action === "member_profiles") {
    const { data, error } = await memberAuth
      .from("member_profiles")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5000);
    fail(error);
    return { success: true, rows: data };
  }

  if (action === "bootstrap") {
    const [accounts, quotes, samples, sales, purchases, receipts, payments, quoteItems] =
      await Promise.all([
        memberAuth.from("accounts").select("*").order("created_at", { ascending: false }).limit(2000),
        memberAuth.from("quotes").select("*").order("quote_date", { ascending: false }).limit(2000),
        memberAuth.from("samples").select("*").order("created_at", { ascending: false }).limit(2000),
        memberAuth.from("sales_vouchers").select("*").order("voucher_date", { ascending: false }).limit(3000),
        memberAuth.from("purchase_vouchers").select("*").order("voucher_date", { ascending: false }).limit(3000),
        memberAuth.from("sales_receipts").select("*").limit(5000),
        memberAuth.from("purchase_payments").select("*").limit(5000),
        memberAuth.from("quote_items").select("*").order("sort_order", { ascending: true }).limit(8000),
      ]);
    for (const r of [accounts, quotes, samples, sales, purchases, receipts, payments, quoteItems]) fail(r.error);
    return {
      success: true,
      accounts: accounts.data,
      quotes: quotes.data,
      quote_items: quoteItems.data,
      samples: samples.data,
      sales_vouchers: sales.data,
      purchase_vouchers: purchases.data,
      sales_receipts: receipts.data,
      purchase_payments: payments.data,
    };
  }

  if (!TABLES[table]) throw new Error("unknown_table");

  if (action === "list") {
    let q = memberAuth.from(table).select("*");
    const eq = (payload.eq ?? {}) as Record<string, unknown>;
    for (const [k, v] of Object.entries(eq)) {
      if (TABLES[table].includes(k) || k === "id") q = q.eq(k, v as never);
    }
    const o = ORDER[table];
    const { data, error } = await q.order(o.col, { ascending: o.asc }).limit(5000);
    fail(error);
    return { success: true, rows: data };
  }

  if (action === "create") {
    const { data, error } = await memberAuth.from(table).insert(pickCols(table, payload)).select().maybeSingle();
    fail(error);
    return { success: true, row: data };
  }

  if (action === "update") {
    const id = String(payload.id ?? "");
    if (!id) throw new Error("id_required");
    const row = pickCols(table, payload);
    if (Object.keys(row).length === 0) throw new Error("nothing_to_update");
    const { data, error } = await memberAuth.from(table).update(row).eq("id", id).select().maybeSingle();
    fail(error);
    return { success: true, row: data };
  }

  if (action === "delete") {
    const id = String(payload.id ?? "");
    if (!id) throw new Error("id_required");
    fail((await memberAuth.from(table).delete().eq("id", id)).error);
    return { success: true };
  }

  if (action === "replace_quote_items" && table === "quote_items") {
    const quoteId = String(payload.quote_id ?? "");
    if (!quoteId) throw new Error("quote_id_required");
    const items = Array.isArray(payload.items) ? payload.items : [];
    fail((await memberAuth.from("quote_items").delete().eq("quote_id", quoteId)).error);
    const rows = items.slice(0, 100).map((it: Record<string, unknown>, idx: number) => ({
      quote_id: quoteId,
      sort_order: idx + 1,
      item_name: String(it.item_name ?? "").slice(0, 500),
      spec: it.spec ? String(it.spec).slice(0, 300) : null,
      qty: Number(it.qty ?? 0),
      unit: String(it.unit ?? "ton").slice(0, 20),
      unit_price: Number(it.unit_price ?? 0),
      amount: Number(it.amount ?? 0),
    }));
    if (rows.length > 0) fail((await memberAuth.from("quote_items").insert(rows)).error);
    const { data, error } = await memberAuth
      .from("quote_items")
      .select("*")
      .eq("quote_id", quoteId)
      .order("sort_order", { ascending: true });
    fail(error);
    return { success: true, rows: data };
  }

  throw new Error("unknown_action");
}

const INQUIRY_STATUSES = ["pending", "in_progress", "sampling", "sample_done", "done", "archived"];

/** Inquiry admin actions, direct against the member storage project. */
export async function inquiryApi(payload: Record<string, unknown>): Promise<any> {
  const action = String(payload.action ?? "");

  if (action === "login") return { success: true };

  if (action === "list") {
    const { data, error } = await memberAuth
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000);
    fail(error);
    return { success: true, inquiries: data };
  }

  if (action === "update") {
    const id = String(payload.id ?? "");
    if (!id) throw new Error("id_required");
    const patch: Record<string, unknown> = {};
    if (typeof payload.status === "string") {
      if (!INQUIRY_STATUSES.includes(payload.status)) throw new Error("bad_status");
      patch.status = payload.status;
    }
    if (typeof payload.admin_note === "string") patch.admin_note = payload.admin_note.slice(0, 5000);
    for (const f of ["name", "phone", "email", "company", "message", "channel"] as const) {
      if (typeof payload[f] === "string") patch[f] = (payload[f] as string).slice(0, 5000);
    }
    if (typeof payload.account_id === "string") patch.account_id = payload.account_id || null;
    if (Object.keys(patch).length === 0) throw new Error("nothing_to_update");
    const { data, error } = await memberAuth
      .from("inquiries")
      .update(patch)
      .eq("id", id)
      .select()
      .maybeSingle();
    fail(error);
    return { success: true, inquiry: data };
  }

  if (action === "create") {
    const status =
      typeof payload.status === "string" && INQUIRY_STATUSES.includes(payload.status)
        ? payload.status
        : "pending";
    const createdAt =
      typeof payload.created_at === "string" && payload.created_at ? payload.created_at : null;
    const row = {
      name: String(payload.name ?? "").slice(0, 200),
      phone: payload.phone ? String(payload.phone).slice(0, 100) : null,
      email: payload.email ? String(payload.email).slice(0, 200) : null,
      company: payload.company ? String(payload.company).slice(0, 200) : null,
      message: String(payload.message ?? "").slice(0, 5000),
      source: typeof payload.source === "string" && payload.source ? payload.source.slice(0, 50) : "manual",
      channel: typeof payload.channel === "string" && payload.channel ? payload.channel.slice(0, 30) : "silica",
    };
    const { data, error } = await memberAuth.from("inquiries").insert(row).select().maybeSingle();
    fail(error);
    if (data?.id && (status !== "pending" || createdAt)) {
      const extra: Record<string, unknown> = {};
      if (status !== "pending") extra.status = status;
      if (createdAt) extra.created_at = createdAt;
      const { data: updated, error: updErr } = await memberAuth
        .from("inquiries")
        .update(extra)
        .eq("id", data.id)
        .select()
        .maybeSingle();
      fail(updErr);
      return { success: true, inquiry: updated ?? data };
    }
    return { success: true, inquiry: data };
  }

  if (action === "delete") {
    const id = String(payload.id ?? "");
    if (!id) throw new Error("id_required");
    fail((await memberAuth.from("inquiries").delete().eq("id", id)).error);
    return { success: true };
  }

  if (action === "backfill") {
    // Past-inquiry recovery read the old server's mail log; unavailable while
    // that server is paused.
    return { success: true, imported: 0 };
  }

  throw new Error("unknown_action");
}

export const downloadCsv = (filename: string, rows: (string | number)[][]) => {
  const esc = (v: string | number) => {
    let str = String(v ?? "");
    // Neutralize spreadsheet formulas (CSV injection)
    if (typeof v === "string" && /^[=+\-@\t\r]/.test(str)) str = `'${str}`;
    return `"${str.replace(/"/g, '""')}"`;
  };
  const csv = "\uFEFF" + rows.map((r) => r.map(esc).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
