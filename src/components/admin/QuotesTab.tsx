import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Printer, Trash2, X } from "lucide-react";
import {
  CHANNELS,
  CHANNEL_LABEL,
  CHANNEL_STYLE,
  CURRENCIES,
  ISSUERS,
  QUOTE_STATUS,
  QUOTE_STATUS_STYLE,
  UNITS,
  asChannel,
  crm,
  num,
  today,
  won,
  type Issuer,
  type Quote,
  type QuoteItem,
} from "./shared";
import { Badge, Empty, Field, Panel, Select } from "./ui";
import QuoteDocument from "./QuoteDocument";
import type { AdminStore } from "./useAdminData";

export interface QuoteDraft {
  account_id?: string;
  inquiry_id?: string;
  channel?: string;
  buyer_company?: string;
  buyer_contact?: string;
  buyer_phone?: string;
  buyer_email?: string;
}

const channelOptions = CHANNELS.map((c) => ({ value: c, label: CHANNEL_LABEL[c] }));
const statusOptions = Object.entries(QUOTE_STATUS).map(([value, label]) => ({ value, label }));
const unitOptions = UNITS.map((u) => ({ value: u, label: u }));
const currencyOptions = CURRENCIES.map((c) => ({ value: c, label: c }));
const issuerOptions = (Object.keys(ISSUERS) as Issuer[]).map((k) => ({ value: k, label: ISSUERS[k].label }));

const DEFAULT_REMARKS = `1. 대금 납부 조건: 계약 체결 후 30% 현금 송금, 물건 입고 및 검수 후 70% 현금 송금 (검수는 입고 후 5일 이내)
2. 공급 및 인도 장소: 고객 창고 입고까지 완료 비용 포함
3. 납품 기한: 대금 수납 후 15일~30일 이내
4. 포장 단위: 기본 판매용 포장재 사용 또는 바이어 요청 사양 기준
5. 부가가치세법에 의거 10% 부가세가 가산된 합계금액입니다.`;

const DEFAULT_REMARKS_EN = `1. Payment terms: 30% T/T in advance upon contract, 70% T/T after delivery and inspection (within 5 days of arrival).
2. Delivery: DAP customer's warehouse, all charges included.
3. Lead time: 15-30 days after receipt of payment.
4. Packing: standard export packing or as per buyer's specification.
5. VAT 10% is added in accordance with Korean VAT law (domestic sales only).`;

const emptyItem = (): QuoteItem => ({
  sort_order: 1,
  item_name: "",
  spec: null,
  qty: 0,
  unit: "ton",
  unit_price: 0,
  amount: 0,
});

interface Props {
  store: AdminStore;
  reload: () => Promise<void>;
  draft: QuoteDraft | null;
  onDraftConsumed: () => void;
}

const QuotesTab = ({ store, reload, draft, onDraftConsumed }: Props) => {
  const { toast } = useToast();
  const [editorOpen, setEditorOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [items, setItems] = useState<QuoteItem[]>([emptyItem()]);
  const [form, setForm] = useState({
    quote_no: "",
    account_id: "",
    inquiry_id: "",
    channel: "silica",
    issuer: "silica" as Issuer,
    lang: "ko" as "ko" | "en",
    currency: "KRW",
    fx_rate: "1",
    quote_date: today(),
    valid_days: "30",
    status: "draft",
    buyer_company: "",
    buyer_contact: "",
    buyer_phone: "",
    buyer_email: "",
    delivery_terms: "대금 수납 후 15~30일 이내",
    remarks: DEFAULT_REMARKS,
    bank_name: "",
    bank_account: "",
    bank_holder: "",
    seller_contact: "",
    vat_rate: "10",
  });

  const accountOptions = useMemo(
    () => [
      { value: "", label: "거래처 선택" },
      ...store.accounts.filter((a) => a.account_type === "customer").map((a) => ({ value: a.id, label: a.company_name })),
      ...store.accounts.filter((a) => a.account_type !== "customer").map((a) => ({ value: a.id, label: `${a.company_name} (매입처)` })),
    ],
    [store.accounts],
  );

  const nextQuoteNo = (issuer: Issuer, date: string) => {
    const prefix = `${ISSUERS[issuer].prefix}-${date.replace(/-/g, "")}`;
    const n = store.quotes.filter((q) => q.quote_no.startsWith(prefix)).length + 1;
    return `${prefix}-${String(n).padStart(2, "0")}`;
  };

  const openNew = (d?: QuoteDraft) => {
    const issuer: Issuer = "silica";
    const date = today();
    setEditId(null);
    setItems([emptyItem()]);
    setForm((f) => ({
      ...f,
      quote_no: nextQuoteNo(issuer, date),
      quote_date: date,
      issuer,
      lang: "ko",
      currency: "KRW",
      fx_rate: "1",
      status: "draft",
      account_id: d?.account_id ?? "",
      inquiry_id: d?.inquiry_id ?? "",
      channel: asChannel(d?.channel),
      buyer_company: d?.buyer_company ?? "",
      buyer_contact: d?.buyer_contact ?? "",
      buyer_phone: d?.buyer_phone ?? "",
      buyer_email: d?.buyer_email ?? "",
      remarks: DEFAULT_REMARKS,
    }));
    setEditorOpen(true);
  };

  useEffect(() => {
    if (draft) {
      openNew(draft);
      onDraftConsumed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft]);

  const openEdit = (q: Quote) => {
    setEditId(q.id);
    setItems(store.quoteItems.filter((i) => i.quote_id === q.id).map((i) => ({ ...i })) || [emptyItem()]);
    setForm({
      quote_no: q.quote_no,
      account_id: q.account_id ?? "",
      inquiry_id: q.inquiry_id ?? "",
      channel: asChannel(q.channel),
      issuer: (q.issuer as Issuer) ?? "silica",
      lang: q.lang,
      currency: q.currency,
      fx_rate: String(q.fx_rate),
      quote_date: q.quote_date,
      valid_days: String(q.valid_days),
      status: q.status,
      buyer_company: q.buyer_company ?? "",
      buyer_contact: q.buyer_contact ?? "",
      buyer_phone: q.buyer_phone ?? "",
      buyer_email: q.buyer_email ?? "",
      delivery_terms: q.delivery_terms ?? "",
      remarks: q.remarks ?? "",
      bank_name: q.bank_name ?? "",
      bank_account: q.bank_account ?? "",
      bank_holder: q.bank_holder ?? "",
      seller_contact: q.seller_contact ?? "",
      vat_rate: String(q.vat_rate),
    });
    setEditorOpen(true);
  };

  const totals = useMemo(() => {
    const subtotal = items.reduce((s, i) => s + num(i.qty) * num(i.unit_price), 0);
    const vat = Math.round((subtotal * num(form.vat_rate)) / 100);
    return { subtotal, vat, total: subtotal + vat };
  }, [items, form.vat_rate]);

  const setItem = (idx: number, patch: Partial<QuoteItem>) =>
    setItems((prev) =>
      prev.map((it, i) => {
        if (i !== idx) return it;
        const next = { ...it, ...patch };
        next.amount = num(next.qty) * num(next.unit_price);
        return next;
      }),
    );

  const pickAccount = (id: string) => {
    const a = store.accounts.find((x) => x.id === id);
    setForm((f) => ({
      ...f,
      account_id: id,
      channel: a ? asChannel(a.channel) : f.channel,
      buyer_company: a?.company_name ?? f.buyer_company,
      buyer_phone: a?.phone ?? f.buyer_phone,
      buyer_email: a?.email ?? f.buyer_email,
      buyer_contact: a?.ceo_name ?? f.buyer_contact,
    }));
  };

  const setLang = (lang: "ko" | "en") =>
    setForm((f) => ({
      ...f,
      lang,
      remarks:
        f.remarks === DEFAULT_REMARKS || f.remarks === DEFAULT_REMARKS_EN
          ? lang === "en"
            ? DEFAULT_REMARKS_EN
            : DEFAULT_REMARKS
          : f.remarks,
    }));

  const save = async () => {
    if (!form.buyer_company) {
      toast({ title: "수신처(거래처)를 입력해 주세요", variant: "destructive" });
      return;
    }
    const iss = ISSUERS[form.issuer];
    const values = {
      quote_no: form.quote_no || nextQuoteNo(form.issuer, form.quote_date),
      account_id: form.account_id || null,
      inquiry_id: form.inquiry_id || null,
      channel: form.channel,
      issuer: form.issuer,
      lang: form.lang,
      currency: form.currency,
      fx_rate: num(form.fx_rate) || 1,
      quote_date: form.quote_date,
      valid_days: num(form.valid_days) || 30,
      status: form.status,
      buyer_company: form.buyer_company,
      buyer_contact: form.buyer_contact,
      buyer_phone: form.buyer_phone,
      buyer_email: form.buyer_email,
      delivery_terms: form.delivery_terms,
      seller_company: iss.company,
      seller_ceo: iss.ceo,
      seller_address: iss.address,
      seller_email: iss.email,
      seller_contact: form.seller_contact || iss.contact,
      remarks: form.remarks,
      bank_name: form.bank_name,
      bank_account: form.bank_account,
      bank_holder: form.bank_holder,
      vat_rate: num(form.vat_rate),
      subtotal: totals.subtotal,
      vat_amount: totals.vat,
      total_amount: totals.total,
    };
    try {
      const res = editId
        ? await crm({ action: "update", table: "quotes", id: editId, values })
        : await crm({ action: "create", table: "quotes", values });
      const quoteId = (res.row?.id as string) ?? editId;
      await crm({
        action: "replace_quote_items",
        table: "quote_items",
        quote_id: quoteId,
        items: items.filter((i) => i.item_name).map((i) => ({ ...i, qty: num(i.qty), unit_price: num(i.unit_price), amount: num(i.qty) * num(i.unit_price) })),
      });
      await reload();
      setEditorOpen(false);
      setPreviewId(quoteId);
      toast({ title: "견적서를 저장했습니다" });
    } catch {
      toast({ title: "저장에 실패했습니다", variant: "destructive" });
    }
  };

  const remove = async (id: string) => {
    if (!window.confirm("이 견적서를 삭제할까요?")) return;
    await crm({ action: "delete", table: "quotes", id });
    setPreviewId(null);
    await reload();
  };

  const previewQuote = store.quotes.find((q) => q.id === previewId) ?? null;
  const previewItems = previewQuote ? store.quoteItems.filter((i) => i.quote_id === previewQuote.id) : [];

  if (previewQuote) {
    return (
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2 print:hidden">
          <Button size="sm" variant="outline" onClick={() => setPreviewId(null)}>
            <X className="mr-1.5 h-3.5 w-3.5" /> 목록으로
          </Button>
          <Button size="sm" onClick={() => window.print()}>
            <Printer className="mr-1.5 h-3.5 w-3.5" /> 인쇄 · PDF 저장
          </Button>
          <Button size="sm" variant="outline" onClick={() => openEdit(previewQuote)}>수정</Button>
          <Select
            value={previewQuote.status}
            onChange={async (v) => {
              await crm({ action: "update", table: "quotes", id: previewQuote.id, values: { status: v } });
              await reload();
            }}
            options={statusOptions}
            className="h-9 w-36"
          />
        </div>
        <div className="rounded-xl border bg-white p-2 print:border-0 print:p-0">
          <QuoteDocument
            data={{
              ...previewQuote,
              issuer: (previewQuote.issuer as Issuer) ?? "silica",
              buyer_company: previewQuote.buyer_company ?? "",
              buyer_contact: previewQuote.buyer_contact ?? "",
              buyer_phone: previewQuote.buyer_phone ?? "",
              buyer_email: previewQuote.buyer_email ?? "",
              delivery_terms: previewQuote.delivery_terms ?? "",
              remarks: previewQuote.remarks ?? "",
              bank_name: previewQuote.bank_name ?? "",
              bank_account: previewQuote.bank_account ?? "",
              bank_holder: previewQuote.bank_holder ?? "",
              seller_contact: previewQuote.seller_contact ?? "",
            }}
            items={previewItems}
          />
        </div>
      </div>
    );
  }

  if (editorOpen) {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-sm font-semibold">{editId ? "견적서 수정" : "새 견적서 작성"}</h2>
          <div className="ml-auto flex gap-2">
            <Button size="sm" onClick={save}>저장 후 미리보기</Button>
            <Button size="sm" variant="ghost" onClick={() => setEditorOpen(false)}>취소</Button>
          </div>
        </div>

        <Panel>
          <div className="grid gap-3 sm:grid-cols-4">
            <Field label="발행 주체">
              <Select
                value={form.issuer}
                onChange={(v) => {
                  const issuer = v as Issuer;
                  setForm((f) => ({
                    ...f,
                    issuer,
                    quote_no: editId ? f.quote_no : nextQuoteNo(issuer, f.quote_date),
                  }));
                }}
                options={issuerOptions}
              />
            </Field>
            <Field label="언어">
              <Select
                value={form.lang}
                onChange={(v) => setLang(v as "ko" | "en")}
                options={[
                  { value: "ko", label: "한글" },
                  { value: "en", label: "영문 (English)" },
                ]}
              />
            </Field>
            <Field label="유입 채널">
              <Select value={form.channel} onChange={(v) => setForm({ ...form, channel: v })} options={channelOptions} />
            </Field>
            <Field label="진행 상태">
              <Select value={form.status} onChange={(v) => setForm({ ...form, status: v })} options={statusOptions} />
            </Field>
            <Field label="견적번호">
              <Input value={form.quote_no} onChange={(e) => setForm({ ...form, quote_no: e.target.value })} />
            </Field>
            <Field label="견적일">
              <Input type="date" value={form.quote_date} onChange={(e) => setForm({ ...form, quote_date: e.target.value })} />
            </Field>
            <Field label="유효기간(일)">
              <Input value={form.valid_days} onChange={(e) => setForm({ ...form, valid_days: e.target.value })} />
            </Field>
            <Field label="부가세율(%)">
              <Input value={form.vat_rate} onChange={(e) => setForm({ ...form, vat_rate: e.target.value })} />
            </Field>
            <Field label="통화">
              <Select value={form.currency} onChange={(v) => setForm({ ...form, currency: v })} options={currencyOptions} />
            </Field>
            <Field label="적용 환율 (1 통화 = ? KRW)">
              <Input value={form.fx_rate} onChange={(e) => setForm({ ...form, fx_rate: e.target.value })} />
            </Field>
            <Field label="공급자 담당자">
              <Input
                value={form.seller_contact}
                onChange={(e) => setForm({ ...form, seller_contact: e.target.value })}
                placeholder={ISSUERS[form.issuer].contact}
              />
            </Field>
          </div>
        </Panel>

        <Panel>
          <div className="grid gap-3 sm:grid-cols-3">
            <Field label="거래처 선택 (자동 입력)">
              <Select value={form.account_id} onChange={pickAccount} options={accountOptions} />
            </Field>
            <Field label="수신처 회사명">
              <Input value={form.buyer_company} onChange={(e) => setForm({ ...form, buyer_company: e.target.value })} />
            </Field>
            <Field label="담당자">
              <Input value={form.buyer_contact} onChange={(e) => setForm({ ...form, buyer_contact: e.target.value })} />
            </Field>
            <Field label="연락처">
              <Input value={form.buyer_phone} onChange={(e) => setForm({ ...form, buyer_phone: e.target.value })} />
            </Field>
            <Field label="이메일">
              <Input value={form.buyer_email} onChange={(e) => setForm({ ...form, buyer_email: e.target.value })} />
            </Field>
            <Field label="납기">
              <Input value={form.delivery_terms} onChange={(e) => setForm({ ...form, delivery_terms: e.target.value })} />
            </Field>
          </div>
        </Panel>

        <Panel>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">견적 내역</h3>
          <div className="space-y-2">
            {items.map((it, idx) => (
              <div key={idx} className="grid gap-2 sm:grid-cols-[2fr_1fr_0.7fr_0.7fr_1fr_1fr_auto]">
                <Input placeholder="품명" value={it.item_name} onChange={(e) => setItem(idx, { item_name: e.target.value })} />
                <Input placeholder="규격" value={it.spec ?? ""} onChange={(e) => setItem(idx, { spec: e.target.value })} />
                <Input placeholder="수량" value={String(it.qty ?? "")} onChange={(e) => setItem(idx, { qty: num(e.target.value) })} />
                <Select value={it.unit} onChange={(v) => setItem(idx, { unit: v })} options={unitOptions} />
                <Input placeholder="단가" value={String(it.unit_price ?? "")} onChange={(e) => setItem(idx, { unit_price: num(e.target.value) })} />
                <Input readOnly value={won(num(it.qty) * num(it.unit_price))} className="bg-muted/50 text-right" />
                <Button variant="ghost" size="sm" onClick={() => setItems(items.filter((_, i) => i !== idx))}>
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            ))}
          </div>
          <Button size="sm" variant="outline" className="mt-2" onClick={() => setItems([...items, emptyItem()])}>
            <Plus className="mr-1.5 h-3.5 w-3.5" /> 품목 추가
          </Button>
          <div className="mt-4 ml-auto max-w-xs space-y-1 text-sm">
            <div className="flex justify-between"><span>공급가액</span><span>{won(totals.subtotal)} {form.currency}</span></div>
            <div className="flex justify-between"><span>부가세 ({form.vat_rate}%)</span><span>{won(totals.vat)} {form.currency}</span></div>
            <div className="flex justify-between font-semibold"><span>합계</span><span>{won(totals.total)} {form.currency}</span></div>
            {form.currency !== "KRW" && (
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>원화 환산</span><span>{won(totals.total * num(form.fx_rate))} KRW</span>
              </div>
            )}
          </div>
        </Panel>

        <Panel>
          <div className="grid gap-3 sm:grid-cols-3">
            <Field label="은행">
              <Input value={form.bank_name} onChange={(e) => setForm({ ...form, bank_name: e.target.value })} />
            </Field>
            <Field label="계좌번호">
              <Input value={form.bank_account} onChange={(e) => setForm({ ...form, bank_account: e.target.value })} />
            </Field>
            <Field label="예금주">
              <Input value={form.bank_holder} onChange={(e) => setForm({ ...form, bank_holder: e.target.value })} />
            </Field>
          </div>
          <div className="mt-3">
            <Field label="비고 및 특약사항">
              <Textarea rows={7} value={form.remarks} onChange={(e) => setForm({ ...form, remarks: e.target.value })} />
            </Field>
          </div>
        </Panel>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <p className="text-sm text-muted-foreground">저장된 견적서 {store.quotes.length}건</p>
        <Button size="sm" variant="outline" className="ml-auto" onClick={() => openNew()}>
          <Plus className="mr-1.5 h-3.5 w-3.5" /> 새 견적서
        </Button>
      </div>
      {store.quotes.length === 0 ? (
        <Empty>작성된 견적서가 없습니다.</Empty>
      ) : (
        <div className="space-y-2">
          {store.quotes.map((q) => (
            <div key={q.id} className="flex flex-wrap items-center gap-2 rounded-xl border bg-background p-4">
              <button onClick={() => setPreviewId(q.id)} className="min-w-0 flex-1 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold">{q.quote_no}</span>
                  <Badge className={CHANNEL_STYLE[asChannel(q.channel)]}>{CHANNEL_LABEL[asChannel(q.channel)]}</Badge>
                  <Badge className={QUOTE_STATUS_STYLE[q.status]}>{QUOTE_STATUS[q.status]}</Badge>
                  <Badge className="bg-muted text-muted-foreground border-border">{q.lang === "en" ? "EN" : "KO"}</Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {q.quote_date} · {q.buyer_company || "-"} · {won(q.total_amount)} {q.currency}
                </p>
              </button>
              <Button size="sm" variant="outline" onClick={() => openEdit(q)}>수정</Button>
              <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove(q.id)}>
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuotesTab;
