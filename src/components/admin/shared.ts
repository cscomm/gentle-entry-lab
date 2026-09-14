import { supabase } from "@/integrations/supabase/client";

export const PW_KEY = "silica_admin_pw";

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
    label: "주식회사 실리카",
    company: "주식회사 실리카",
    companyEn: "SILICA Co., Ltd.",
    ceo: "최은성",
    address: "경기도 화성시",
    email: "info@silica.co.kr",
    contact: "송인재 (010-8884-2773)",
    prefix: "SIL",
  },
  nanokorea: {
    label: "나노코리아",
    company: "나노코리아",
    companyEn: "NANO KOREA",
    ceo: "최은성",
    address: "경기도 화성시",
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
  status: "draft" | "sent" | "won" | "lost";
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
  lost: "거절",
};

export const QUOTE_STATUS_STYLE: Record<string, string> = {
  draft: "bg-muted text-muted-foreground border-border",
  sent: "bg-sky-100 text-sky-800 border-sky-200",
  won: "bg-emerald-100 text-emerald-800 border-emerald-200",
  lost: "bg-rose-100 text-rose-800 border-rose-200",
};

export const RECEIPT_STATUS: Record<string, string> = {
  unpaid: "미수금",
  partial: "부분수금",
  paid: "수금완료",
};

export const TAX_INVOICE_STATUS: Record<string, string> = {
  none: "미발행",
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

async function invoke(fn: string, payload: Record<string, unknown>) {
  const pass = sessionStorage.getItem(PW_KEY) ?? "";
  const { data, error } = await supabase.functions.invoke(fn, {
    body: { ...payload, password: pass },
  });
  if (error) throw error;
  if (data && (data as any).error) throw new Error((data as any).error);
  return data as any;
}

export const crm = (payload: Record<string, unknown>) => invoke("admin-crm", payload);
export const inquiryApi = (payload: Record<string, unknown>) => invoke("admin-inquiries", payload);

export const downloadCsv = (filename: string, rows: (string | number)[][]) => {
  const esc = (v: string | number) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const csv = "\uFEFF" + rows.map((r) => r.map(esc).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
