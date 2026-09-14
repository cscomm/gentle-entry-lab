import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2 } from "lucide-react";
import {
  CHANNELS,
  CHANNEL_LABEL,
  CHANNEL_STYLE,
  SAMPLE_STATUS,
  UNITS,
  asChannel,
  crm,
  num,
  today,
} from "./shared";
import { Badge, Empty, Field, Panel, Select } from "./ui";
import type { AdminStore } from "./useAdminData";

const channelOptions = CHANNELS.map((c) => ({ value: c, label: CHANNEL_LABEL[c] }));
const statusOptions = Object.entries(SAMPLE_STATUS).map(([value, label]) => ({ value, label }));
const unitOptions = UNITS.map((u) => ({ value: u, label: u }));

const blank = {
  account_id: "",
  channel: "silica",
  item_name: "",
  qty: "",
  unit: "kg",
  sent_date: today(),
  carrier: "",
  tracking_no: "",
  test_status: "requested",
  feedback: "",
};

interface Props {
  store: AdminStore;
  reload: () => Promise<void>;
  accountFilter?: string;
}

const SamplesTab = ({ store, reload, accountFilter }: Props) => {
  const { toast } = useToast();
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ ...blank });
  const [statusFilter, setStatusFilter] = useState("all");

  const accountOptions = useMemo(
    () => [
      { value: "", label: "거래처 미지정" },
      ...store.accounts.map((a) => ({ value: a.id, label: a.company_name })),
    ],
    [store.accounts],
  );

  const rows = useMemo(
    () =>
      store.samples.filter((s) => {
        if (accountFilter && s.account_id !== accountFilter) return false;
        if (statusFilter !== "all" && s.test_status !== statusFilter) return false;
        return true;
      }),
    [store.samples, statusFilter, accountFilter],
  );

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.item_name) {
      toast({ title: "샘플 품목을 입력해 주세요", variant: "destructive" });
      return;
    }
    try {
      await crm({
        action: "create",
        table: "samples",
        values: {
          ...form,
          account_id: form.account_id || (accountFilter ?? null) || null,
          qty: num(form.qty),
          sent_date: form.sent_date || null,
        },
      });
      setForm({ ...blank });
      setShowNew(false);
      await reload();
      toast({ title: "샘플 이력을 등록했습니다" });
    } catch {
      toast({ title: "등록에 실패했습니다", variant: "destructive" });
    }
  };

  const patch = async (id: string, values: Record<string, unknown>) => {
    try {
      await crm({ action: "update", table: "samples", id, values });
      await reload();
    } catch {
      toast({ title: "저장에 실패했습니다", variant: "destructive" });
    }
  };

  const remove = async (id: string) => {
    if (!window.confirm("이 샘플 이력을 삭제할까요?")) return;
    await crm({ action: "delete", table: "samples", id });
    await reload();
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Select
          value={statusFilter}
          onChange={setStatusFilter}
          options={[{ value: "all", label: "진행 상태 전체" }, ...statusOptions]}
          className="h-9 w-44"
        />
        <Button size="sm" variant="outline" className="ml-auto" onClick={() => setShowNew((v) => !v)}>
          <Plus className="mr-1.5 h-3.5 w-3.5" /> 샘플 발송 등록
        </Button>
      </div>

      {showNew && (
        <form onSubmit={save} className="mb-6 rounded-xl border bg-background p-5">
          <h2 className="mb-3 text-sm font-semibold">샘플 발송 등록</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Field label="거래처">
              <Select value={form.account_id} onChange={(v) => setForm({ ...form, account_id: v })} options={accountOptions} />
            </Field>
            <Field label="유입 채널">
              <Select value={form.channel} onChange={(v) => setForm({ ...form, channel: v })} options={channelOptions} />
            </Field>
            <Field label="샘플 품목">
              <Input value={form.item_name} onChange={(e) => setForm({ ...form, item_name: e.target.value })} />
            </Field>
            <Field label="수량">
              <Input value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} placeholder="예: 5" />
            </Field>
            <Field label="단위">
              <Select value={form.unit} onChange={(v) => setForm({ ...form, unit: v })} options={unitOptions} />
            </Field>
            <Field label="발송일">
              <Input type="date" value={form.sent_date} onChange={(e) => setForm({ ...form, sent_date: e.target.value })} />
            </Field>
            <Field label="운송사">
              <Input value={form.carrier} onChange={(e) => setForm({ ...form, carrier: e.target.value })} placeholder="택배/화물" />
            </Field>
            <Field label="운송장번호">
              <Input value={form.tracking_no} onChange={(e) => setForm({ ...form, tracking_no: e.target.value })} />
            </Field>
            <Field label="진행 상태">
              <Select value={form.test_status} onChange={(v) => setForm({ ...form, test_status: v })} options={statusOptions} />
            </Field>
          </div>
          <Textarea
            rows={3}
            className="mt-3"
            placeholder="테스트 결과 · 고객 피드백"
            value={form.feedback}
            onChange={(e) => setForm({ ...form, feedback: e.target.value })}
          />
          <div className="mt-3 flex gap-2">
            <Button type="submit" size="sm">저장</Button>
            <Button type="button" size="sm" variant="ghost" onClick={() => setShowNew(false)}>취소</Button>
          </div>
        </form>
      )}

      {rows.length === 0 ? (
        <Empty>등록된 샘플 이력이 없습니다.</Empty>
      ) : (
        <div className="space-y-2">
          {rows.map((s) => {
            const acc = store.accounts.find((a) => a.id === s.account_id);
            return (
              <Panel key={s.id} className="p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold">{s.item_name}</span>
                  <span className="text-xs text-muted-foreground">
                    {s.qty} {s.unit}
                  </span>
                  <Badge className={CHANNEL_STYLE[asChannel(s.channel)]}>{CHANNEL_LABEL[asChannel(s.channel)]}</Badge>
                  {acc && <span className="text-xs text-muted-foreground">· {acc.company_name}</span>}
                  <div className="ml-auto flex items-center gap-2">
                    <Select
                      value={s.test_status}
                      onChange={(v) => patch(s.id, { test_status: v })}
                      options={statusOptions}
                      className="h-8 w-36"
                    />
                    <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove(s.id)}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  발송 {s.sent_date ?? "-"} · {s.carrier || "운송사 미입력"} · 운송장 {s.tracking_no || "-"}
                </p>
                {s.feedback && <p className="mt-2 whitespace-pre-wrap rounded-lg bg-muted/30 p-3 text-xs">{s.feedback}</p>}
              </Panel>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SamplesTab;
