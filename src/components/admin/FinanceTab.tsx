import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Download, FileText, Plus, Printer, Trash2, X } from "lucide-react";
import {
  CHANNELS,
  CHANNEL_LABEL,
  CHANNEL_STYLE,
  COST_TYPE,
  CURRENCIES,
  EVIDENCE_STATUS,
  PAY_STATUS,
  RECEIPT_STATUS,
  TAX_INVOICE_STATUS,
  asChannel,
  crm,
  downloadCsv,
  num,
  today,
  won,
} from "./shared";
import { Badge, Empty, Field, Panel, Pills, Select } from "./ui";
import type { AdminStore } from "./useAdminData";
import TransactionDocument from "./TransactionDocument";

const channelOptions = CHANNELS.map((c) => ({ value: c, label: CHANNEL_LABEL[c] }));
const currencyOptions = CURRENCIES.map((c) => ({ value: c, label: c }));
const opts = (m: Record<string, string>) => Object.entries(m).map(([value, label]) => ({ value, label }));

const blankVoucher = {
  account_id: "",
  channel: "silica",
  cost_type: "material",
  voucher_date: today(),
  description: "",
  currency: "KRW",
  fx_rate: "1",
  amount_foreign: "",
  vat_amount: "",
  receipt_status: "unpaid",
  tax_invoice_status: "none",
  pay_status: "unpaid",
  evidence_status: "none",
  memo: "",
};

interface Props {
  store: AdminStore;
  reload: () => Promise<void>;
}

const FinanceTab = ({ store, reload }: Props) => {
  const { toast } = useToast();
  const [mode, setMode] = useState<"sales" | "purchase">("sales");
  const [channelFilter, setChannelFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ ...blankVoucher });
  const [openId, setOpenId] = useState<string | null>(null);
  const [money, setMoney] = useState({ paid_date: today(), amount: "", bank_account: "", memo: "" });
  const [statementId, setStatementId] = useState<string | null>(null);

  const accountOptions = useMemo(
    () => [
      { value: "", label: "거래처 미지정" },
      ...store.accounts
        .filter((a) => (mode === "sales" ? a.account_type === "customer" : a.account_type === "supplier"))
        .map((a) => ({ value: a.id, label: a.company_name })),
      ...store.accounts
        .filter((a) => (mode === "sales" ? a.account_type !== "customer" : a.account_type !== "supplier"))
        .map((a) => ({ value: a.id, label: `${a.company_name} (기타)` })),
    ],
    [store.accounts, mode],
  );

  const rows = useMemo(() => {
    const src: any[] = mode === "sales" ? store.salesVouchers : store.purchaseVouchers;
    return src.filter((v) => {
      if (channelFilter !== "all" && asChannel(v.channel) !== channelFilter) return false;
      if (monthFilter && !v.voucher_date.startsWith(monthFilter)) return false;
      return true;
    });
  }, [mode, store.salesVouchers, store.purchaseVouchers, channelFilter, monthFilter]);

  const paidFor = (voucherId: string) =>
    (mode === "sales" ? store.receipts : store.payments)
      .filter((r) => r.voucher_id === voucherId)
      .reduce((s, r) => s + Number(r.amount || 0), 0);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fx = num(form.fx_rate) || 1;
    const foreign = num(form.amount_foreign);
    const krw = form.currency === "KRW" ? foreign : foreign * fx;
    const vat = num(form.vat_amount);
    const table = mode === "sales" ? "sales_vouchers" : "purchase_vouchers";
    const base = {
      account_id: form.account_id || null,
      channel: form.channel,
      voucher_date: form.voucher_date,
      description: form.description,
      currency: form.currency,
      fx_rate: fx,
      amount_foreign: foreign,
      amount_krw: krw,
      vat_amount: vat,
      total_krw: krw + vat,
      memo: form.memo,
    };
    const values =
      mode === "sales"
        ? { ...base, receipt_status: form.receipt_status, tax_invoice_status: form.tax_invoice_status }
        : { ...base, cost_type: form.cost_type, pay_status: form.pay_status, evidence_status: form.evidence_status };
    try {
      await crm({ action: "create", table, values });
      setForm({ ...blankVoucher });
      setShowNew(false);
      await reload();
      toast({ title: "전표를 등록했습니다" });
    } catch {
      toast({ title: "등록에 실패했습니다", variant: "destructive" });
    }
  };

  const patch = async (id: string, values: Record<string, unknown>) => {
    await crm({ action: "update", table: mode === "sales" ? "sales_vouchers" : "purchase_vouchers", id, values });
    await reload();
  };

  const remove = async (id: string) => {
    if (!window.confirm("이 전표를 삭제할까요?")) return;
    await crm({ action: "delete", table: mode === "sales" ? "sales_vouchers" : "purchase_vouchers", id });
    await reload();
  };

  const addMoney = async (voucherId: string) => {
    if (!num(money.amount)) {
      toast({ title: "금액을 입력해 주세요", variant: "destructive" });
      return;
    }
    const table = mode === "sales" ? "sales_receipts" : "purchase_payments";
    await crm({
      action: "create",
      table,
      values: { voucher_id: voucherId, paid_date: money.paid_date, amount: num(money.amount), bank_account: money.bank_account, memo: money.memo },
    });
    const v: any = rows.find((r) => r.id === voucherId);
    const total = paidFor(voucherId) + num(money.amount);
    if (mode === "sales") {
      const status = total >= Number(v.total_krw) ? "paid" : total > 0 ? "partial" : "unpaid";
      await crm({ action: "update", table: "sales_vouchers", id: voucherId, values: { receipt_status: status } });
    } else if (total >= Number(v.total_krw)) {
      await crm({ action: "update", table: "purchase_vouchers", id: voucherId, values: { pay_status: "paid" } });
    }
    setMoney({ paid_date: today(), amount: "", bank_account: "", memo: "" });
    await reload();
    toast({ title: mode === "sales" ? "입금 내역을 기록했습니다" : "지급 내역을 기록했습니다" });
  };

  const removeMoney = async (id: string) => {
    await crm({ action: "delete", table: mode === "sales" ? "sales_receipts" : "purchase_payments", id });
    await reload();
  };

  const updateTaxInvoice = async (id: string, status: string) => {
    const now = new Date().toISOString();
    const values: Record<string, unknown> = { tax_invoice_status: status };
    if (status === "requested") values.tax_invoice_requested_at = now;
    if (status === "issued") values.tax_invoice_issued_at = now;
    await patch(id, values);
  };

  const exportCsv = () => {
    const name = (id: string | null) => store.accounts.find((a) => a.id === id)?.company_name ?? "";
    if (mode === "sales") {
      downloadCsv(`매출전표_${monthFilter || "전체"}.csv`, [
        ["일자", "유입채널", "거래처", "내용", "통화", "환율", "외화금액", "공급가액(원)", "부가세", "합계(원)", "수금상태", "수금액", "세금계산서"],
        ...rows.map((v: any) => [
          v.voucher_date,
          CHANNEL_LABEL[asChannel(v.channel)],
          name(v.account_id),
          v.description ?? "",
          v.currency,
          v.fx_rate,
          v.amount_foreign,
          v.amount_krw,
          v.vat_amount,
          v.total_krw,
          RECEIPT_STATUS[v.receipt_status] ?? "",
          paidFor(v.id),
          TAX_INVOICE_STATUS[v.tax_invoice_status] ?? "",
        ]),
      ]);
    } else {
      downloadCsv(`매입전표_${monthFilter || "전체"}.csv`, [
        ["일자", "유입채널", "거래처", "비용구분", "내용", "통화", "환율", "외화금액", "원화금액", "부가세", "합계(원)", "지급상태", "지급액", "증빙"],
        ...rows.map((v: any) => [
          v.voucher_date,
          CHANNEL_LABEL[asChannel(v.channel)],
          name(v.account_id),
          COST_TYPE[v.cost_type] ?? "",
          v.description ?? "",
          v.currency,
          v.fx_rate,
          v.amount_foreign,
          v.amount_krw,
          v.vat_amount,
          v.total_krw,
          PAY_STATUS[v.pay_status] ?? "",
          paidFor(v.id),
          EVIDENCE_STATUS[v.evidence_status] ?? "",
        ]),
      ]);
    }
  };

  const statementVoucher = store.salesVouchers.find((voucher) => voucher.id === statementId) ?? null;
  const statementQuote = statementVoucher
    ? store.quotes.find((quote) => quote.id === statementVoucher.quote_id) ?? null
    : null;

  if (statementVoucher && statementQuote) {
    return (
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2 print:hidden">
          <Button size="sm" variant="outline" onClick={() => setStatementId(null)}>
            <X className="mr-1.5 h-3.5 w-3.5" /> 목록으로
          </Button>
          <Button size="sm" onClick={() => window.print()}>
            <Printer className="mr-1.5 h-3.5 w-3.5" /> 인쇄 · PDF 저장
          </Button>
        </div>
        <div className="rounded-xl border bg-white p-2 print:border-0 print:p-0">
          <TransactionDocument
            quote={statementQuote}
            voucher={statementVoucher}
            items={store.quoteItems.filter((item) => item.quote_id === statementQuote.id)}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Pills
          value={mode}
          onChange={(v) => {
            setMode(v);
            setOpenId(null);
            setShowNew(false);
          }}
          items={[
            { key: "sales" as const, label: "매출 · 수금", count: store.salesVouchers.length },
            { key: "purchase" as const, label: "매입 · 지급", count: store.purchaseVouchers.length },
          ]}
        />
        <div className="ml-auto flex flex-wrap items-center gap-2">
          <Select
            value={channelFilter}
            onChange={setChannelFilter}
            options={[{ value: "all", label: "채널 전체" }, ...channelOptions]}
            className="h-9 w-32"
          />
          <Input type="month" value={monthFilter} onChange={(e) => setMonthFilter(e.target.value)} className="h-9 w-[150px]" />
          <Button size="sm" variant="outline" onClick={exportCsv}>
            <Download className="mr-1.5 h-3.5 w-3.5" /> 세무자료 CSV
          </Button>
          <Button size="sm" variant="outline" onClick={() => setShowNew((v) => !v)}>
            <Plus className="mr-1.5 h-3.5 w-3.5" /> 전표 등록
          </Button>
        </div>
      </div>

      {showNew && (
        <form onSubmit={submit} className="mb-6 rounded-xl border bg-background p-5">
          <h2 className="mb-3 text-sm font-semibold">{mode === "sales" ? "매출 전표 등록" : "매입 전표 등록"}</h2>
          <div className="grid gap-3 sm:grid-cols-4">
            <Field label="거래처">
              <Select value={form.account_id} onChange={(v) => setForm({ ...form, account_id: v })} options={accountOptions} />
            </Field>
            <Field label="유입 채널">
              <Select value={form.channel} onChange={(v) => setForm({ ...form, channel: v })} options={channelOptions} />
            </Field>
            <Field label="일자">
              <Input type="date" value={form.voucher_date} onChange={(e) => setForm({ ...form, voucher_date: e.target.value })} />
            </Field>
            {mode === "purchase" && (
              <Field label="비용 구분">
                <Select value={form.cost_type} onChange={(v) => setForm({ ...form, cost_type: v })} options={opts(COST_TYPE)} />
              </Field>
            )}
            <Field label="통화">
              <Select value={form.currency} onChange={(v) => setForm({ ...form, currency: v })} options={currencyOptions} />
            </Field>
            <Field label="적용 환율">
              <Input value={form.fx_rate} onChange={(e) => setForm({ ...form, fx_rate: e.target.value })} />
            </Field>
            <Field label={form.currency === "KRW" ? "공급가액 (원)" : "외화 금액"}>
              <Input value={form.amount_foreign} onChange={(e) => setForm({ ...form, amount_foreign: e.target.value })} />
            </Field>
            <Field label="부가세 (원)">
              <Input value={form.vat_amount} onChange={(e) => setForm({ ...form, vat_amount: e.target.value })} />
            </Field>
            {mode === "sales" ? (
              <>
                <Field label="수금 상태">
                  <Select value={form.receipt_status} onChange={(v) => setForm({ ...form, receipt_status: v })} options={opts(RECEIPT_STATUS)} />
                </Field>
                <Field label="세금계산서 증빙">
                  <Select value={form.tax_invoice_status} onChange={(v) => setForm({ ...form, tax_invoice_status: v })} options={opts(TAX_INVOICE_STATUS)} />
                </Field>
              </>
            ) : (
              <>
                <Field label="지급 상태">
                  <Select value={form.pay_status} onChange={(v) => setForm({ ...form, pay_status: v })} options={opts(PAY_STATUS)} />
                </Field>
                <Field label="매입 증빙">
                  <Select value={form.evidence_status} onChange={(v) => setForm({ ...form, evidence_status: v })} options={opts(EVIDENCE_STATUS)} />
                </Field>
              </>
            )}
            <div className="sm:col-span-2">
              <Field label="내용">
                <Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </Field>
            </div>
          </div>
          <Textarea rows={2} className="mt-3" placeholder="메모" value={form.memo} onChange={(e) => setForm({ ...form, memo: e.target.value })} />
          <div className="mt-3 flex gap-2">
            <Button type="submit" size="sm">저장</Button>
            <Button type="button" size="sm" variant="ghost" onClick={() => setShowNew(false)}>취소</Button>
          </div>
        </form>
      )}

      {rows.length === 0 ? (
        <Empty>등록된 전표가 없습니다.</Empty>
      ) : (
        <div className="space-y-2">
          {rows.map((v: any) => {
            const acc = store.accounts.find((a) => a.id === v.account_id);
            const paid = paidFor(v.id);
            const outstanding = Number(v.total_krw) - paid;
            const moneyRows = (mode === "sales" ? store.receipts : store.payments).filter((r) => r.voucher_id === v.id);
            return (
              <Panel key={v.id} className="p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-muted-foreground">{v.voucher_date}</span>
                  <Badge className={CHANNEL_STYLE[asChannel(v.channel)]}>{CHANNEL_LABEL[asChannel(v.channel)]}</Badge>
                  <span className="text-sm font-semibold">{acc?.company_name ?? "(거래처 미지정)"}</span>
                  {mode === "purchase" && (
                    <Badge className="bg-muted text-muted-foreground border-border">{COST_TYPE[v.cost_type]}</Badge>
                  )}
                  <span className="text-sm">{won(v.total_krw)}원</span>
                  {v.currency !== "KRW" && (
                    <span className="text-xs text-muted-foreground">
                      ({v.currency} {won(v.amount_foreign)} @ {won(v.fx_rate)})
                    </span>
                  )}
                  <div className="ml-auto flex items-center gap-2">
                    {mode === "sales" ? (
                      <>
                        <Select value={v.receipt_status} onChange={(val) => patch(v.id, { receipt_status: val })} options={opts(RECEIPT_STATUS)} className="h-8 w-28" />
                        <Select value={v.tax_invoice_status} onChange={(val) => updateTaxInvoice(v.id, val)} options={opts(TAX_INVOICE_STATUS)} className="h-8 w-44" />
                      </>
                    ) : (
                      <>
                        <Select value={v.pay_status} onChange={(val) => patch(v.id, { pay_status: val })} options={opts(PAY_STATUS)} className="h-8 w-28" />
                        <Select value={v.evidence_status} onChange={(val) => patch(v.id, { evidence_status: val })} options={opts(EVIDENCE_STATUS)} className="h-8 w-36" />
                      </>
                    )}
                    <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove(v.id)}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                    {mode === "sales" && v.transaction_no && (
                      <Button size="sm" variant="outline" onClick={() => setStatementId(v.id)}>
                        <FileText className="mr-1.5 h-3.5 w-3.5" /> 거래명세표
                      </Button>
                    )}
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {v.description || "내용 없음"} · {mode === "sales" ? "수금" : "지급"} {won(paid)}원 ·{" "}
                  {mode === "sales" ? "미수금" : "미지급"} {won(Math.max(0, outstanding))}원
                </p>
                {mode === "sales" && v.transaction_no && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {v.transaction_no} · 출고일 {v.delivery_date || v.voucher_date}
                    {v.tax_invoice_requested_at ? ` · 발행 요청 ${v.tax_invoice_requested_at.slice(0, 10)}` : ""}
                    {v.tax_invoice_issued_at ? ` · 발행 완료 ${v.tax_invoice_issued_at.slice(0, 10)}` : ""}
                  </p>
                )}
                <button
                  className="mt-1.5 text-xs text-muted-foreground underline-offset-2 hover:underline"
                  onClick={() => setOpenId(openId === v.id ? null : v.id)}
                >
                  {mode === "sales" ? "입금 내역" : "지급 내역"} {moneyRows.length}건 {openId === v.id ? "닫기" : "열기"}
                </button>
                {openId === v.id && (
                  <div className="mt-3 rounded-lg bg-muted/40 p-3">
                    {moneyRows.map((r) => (
                      <div key={r.id} className="flex items-center gap-2 border-b py-1.5 text-xs last:border-0">
                        <span>{r.paid_date}</span>
                        <span className="font-medium">{won(r.amount)}원</span>
                        <span className="text-muted-foreground">{r.bank_account || "-"}</span>
                        <span className="text-muted-foreground">{r.memo || ""}</span>
                        <button className="ml-auto text-destructive" onClick={() => removeMoney(r.id)}>
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    <div className="mt-2 grid gap-2 sm:grid-cols-5">
                      <Input type="date" value={money.paid_date} onChange={(e) => setMoney({ ...money, paid_date: e.target.value })} className="h-9" />
                      <Input placeholder={mode === "sales" ? "입금액" : "지급액"} value={money.amount} onChange={(e) => setMoney({ ...money, amount: e.target.value })} className="h-9" />
                      <Input placeholder={mode === "sales" ? "입금 계좌" : "출금 계좌"} value={money.bank_account} onChange={(e) => setMoney({ ...money, bank_account: e.target.value })} className="h-9" />
                      <Input placeholder="메모" value={money.memo} onChange={(e) => setMoney({ ...money, memo: e.target.value })} className="h-9" />
                      <Button size="sm" onClick={() => addMoney(v.id)}>기록</Button>
                    </div>
                  </div>
                )}
              </Panel>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FinanceTab;
