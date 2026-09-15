import { useMemo, useState } from "react";
import { CHANNELS, CHANNEL_LABEL, asChannel, won } from "./shared";
import { Panel, Pills, SectionTitle } from "./ui";
import type { AdminStore } from "./useAdminData";

const monthKey = (d: string) => d.slice(0, 7);

const DashboardTab = ({ store }: { store: AdminStore }) => {
  const [channel, setChannel] = useState<"all" | string>("all");

  const match = (c: string) => channel === "all" || asChannel(c) === channel;

  const sales = useMemo(() => store.salesVouchers.filter((v) => match(v.channel)), [store.salesVouchers, channel]);
  const purchases = useMemo(() => store.purchaseVouchers.filter((v) => match(v.channel)), [store.purchaseVouchers, channel]);

  const salesTotal = sales.reduce((s, v) => s + Number(v.amount_krw || 0), 0);
  const purchaseTotal = purchases.reduce((s, v) => s + Number(v.amount_krw || 0), 0);
  const profit = salesTotal - purchaseTotal;

  const received = store.receipts
    .filter((r) => sales.some((v) => v.id === r.voucher_id))
    .reduce((s, r) => s + Number(r.amount || 0), 0);
  const paid = store.payments
    .filter((r) => purchases.some((v) => v.id === r.voucher_id))
    .reduce((s, r) => s + Number(r.amount || 0), 0);
  const receivable = Math.max(0, sales.reduce((s, v) => s + Number(v.total_krw || 0), 0) - received);
  const payable = Math.max(0, purchases.reduce((s, v) => s + Number(v.total_krw || 0), 0) - paid);

  const months = useMemo(() => {
    const keys = new Set<string>();
    for (const v of [...sales, ...purchases]) keys.add(monthKey(v.voucher_date));
    return Array.from(keys).sort().slice(-12);
  }, [sales, purchases]);

  const monthly = months.map((m) => ({
    m,
    sales: sales.filter((v) => monthKey(v.voucher_date) === m).reduce((s, v) => s + Number(v.amount_krw || 0), 0),
    purchase: purchases.filter((v) => monthKey(v.voucher_date) === m).reduce((s, v) => s + Number(v.amount_krw || 0), 0),
  }));
  const maxMonthly = Math.max(1, ...monthly.map((r) => Math.max(r.sales, r.purchase)));

  const ranking = useMemo(() => {
    const map = new Map<string, number>();
    for (const v of sales) {
      const name = store.accounts.find((a) => a.id === v.account_id)?.company_name ?? "(미지정)";
      map.set(name, (map.get(name) ?? 0) + Number(v.amount_krw || 0));
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, 8);
  }, [sales, store.accounts]);
  const maxRank = Math.max(1, ...ranking.map(([, v]) => v));

  const cards = [
    { label: "총 매출액", value: salesTotal, cls: "text-sky-700" },
    { label: "총 매입액 (환율 적용)", value: purchaseTotal, cls: "text-orange-700" },
    { label: "순이익", value: profit, cls: profit >= 0 ? "text-emerald-700" : "text-rose-700" },
    { label: "미수금 잔액", value: receivable, cls: "text-rose-700" },
    { label: "미지급금 잔액", value: payable, cls: "text-amber-700" },
  ];

  return (
    <div className="space-y-4">
      <Pills
        value={channel}
        onChange={setChannel}
        items={[{ key: "all", label: "전체 보기" }, ...CHANNELS.map((c) => ({ key: c as string, label: CHANNEL_LABEL[c] }))]}
      />

      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {cards.map((c) => (
          <Panel key={c.label} className="p-4">
            <p className="text-[11px] text-muted-foreground">{c.label}</p>
            <p className={`mt-1 text-lg font-bold ${c.cls}`}>{won(c.value)}<span className="ml-1 text-xs font-normal">원</span></p>
          </Panel>
        ))}
      </div>

      <Panel>
        <SectionTitle>월별 매출 · 매입 추이</SectionTitle>
        {monthly.length === 0 ? (
          <p className="text-xs text-muted-foreground">전표가 등록되면 추이가 표시됩니다.</p>
        ) : (
          <div className="flex items-end gap-3 overflow-x-auto pb-2">
            {monthly.map((r) => (
              <div key={r.m} className="flex min-w-[52px] flex-col items-center gap-1">
                <div className="flex h-40 items-end gap-1">
                  <div
                    className="w-4 rounded-t bg-sky-500"
                    style={{ height: `${(r.sales / maxMonthly) * 100}%` }}
                    title={`매출 ${won(r.sales)}원`}
                  />
                  <div
                    className="w-4 rounded-t bg-orange-400"
                    style={{ height: `${(r.purchase / maxMonthly) * 100}%` }}
                    title={`매입 ${won(r.purchase)}원`}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground">{r.m.slice(2)}</span>
              </div>
            ))}
          </div>
        )}
        <div className="mt-2 flex gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-sky-500" /> 매출</span>
          <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-orange-400" /> 매입</span>
        </div>
      </Panel>

      <Panel>
        <SectionTitle>거래처별 매출 순위</SectionTitle>
        {ranking.length === 0 ? (
          <p className="text-xs text-muted-foreground">매출 전표가 없습니다.</p>
        ) : (
          <div className="space-y-2">
            {ranking.map(([name, value]) => (
              <div key={name} className="flex items-center gap-2 text-xs">
                <span className="w-32 shrink-0 truncate">{name}</span>
                <div className="h-3 flex-1 rounded bg-muted">
                  <div className="h-3 rounded bg-primary" style={{ width: `${(value / maxRank) * 100}%` }} />
                </div>
                <span className="w-28 shrink-0 text-right">{won(value)}원</span>
              </div>
            ))}
          </div>
        )}
      </Panel>

      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ["문의", store.inquiries.filter((i) => match(i.channel)).length],
          ["거래처", store.accounts.filter((a) => match(a.channel)).length],
          ["견적서", store.quotes.filter((q) => match(q.channel)).length],
          ["샘플 발송", store.samples.filter((s) => match(s.channel)).length],
        ].map(([label, value]) => (
          <Panel key={label as string} className="p-4">
            <p className="text-[11px] text-muted-foreground">{label}</p>
            <p className="mt-1 text-lg font-bold">{value as number}</p>
          </Panel>
        ))}
      </div>
    </div>
  );
};

export default DashboardTab;
