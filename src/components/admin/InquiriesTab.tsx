import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Building2, Clock, FileText, Mail, Phone, Plus, Trash2, User, UserPlus } from "lucide-react";
import {
  CHANNELS,
  CHANNEL_LABEL,
  CHANNEL_STYLE,
  asChannel,
  crm,
  fmtDateTime,
  inquiryApi,
  today,
} from "./shared";
import { Badge, Empty, Field, Panel, Pills, Select } from "./ui";
import type { AdminStore, Inquiry, Status } from "./useAdminData";

const STATUS_LABEL: Record<Status, string> = {
  pending: "대기중",
  in_progress: "진행중",
  done: "완료",
  archived: "보관",
};

const STATUS_STYLE: Record<Status, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  in_progress: "bg-sky-100 text-sky-800 border-sky-200",
  done: "bg-emerald-100 text-emerald-800 border-emerald-200",
  archived: "bg-muted text-muted-foreground border-border",
};

const channelOptions = CHANNELS.map((c) => ({ value: c, label: CHANNEL_LABEL[c] }));

interface Props {
  store: AdminStore;
  reload: () => Promise<void>;
  onOpenAccount: (id: string) => void;
  onQuoteFromInquiry: (inquiry: Inquiry) => void;
}

const InquiriesTab = ({ store, reload, onOpenAccount, onQuoteFromInquiry }: Props) => {
  const { toast } = useToast();
  const inquiries = store.inquiries;
  const [filter, setFilter] = useState<"all" | Status>("all");
  const [channelFilter, setChannelFilter] = useState<"all" | string>("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [newForm, setNewForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
    created_at: today(),
    channel: "silica",
    source: "phone",
  });
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", phone: "", email: "", company: "", message: "" });

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: inquiries.length, pending: 0, in_progress: 0, done: 0, archived: 0 };
    for (const i of inquiries) c[i.status] = (c[i.status] ?? 0) + 1;
    return c;
  }, [inquiries]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return inquiries.filter((i) => {
      if (filter !== "all" && i.status !== filter) return false;
      if (channelFilter !== "all" && asChannel(i.channel) !== channelFilter) return false;
      if (!q) return true;
      return [i.name, i.company, i.email, i.phone, i.message]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
  }, [inquiries, filter, channelFilter, query]);

  const selected = inquiries.find((i) => i.id === selectedId) ?? null;
  const linkedAccount = selected?.account_id
    ? store.accounts.find((a) => a.id === selected.account_id) ?? null
    : null;

  const openDetail = (i: Inquiry) => {
    setSelectedId(i.id);
    setNote(i.admin_note ?? "");
    setEditing(false);
    setEditForm({
      name: i.name,
      phone: i.phone ?? "",
      email: i.email ?? "",
      company: i.company ?? "",
      message: i.message,
    });
  };

  const patch = async (id: string, payload: Record<string, unknown>, msg: string) => {
    try {
      await inquiryApi({ action: "update", id, ...payload });
      await reload();
      toast({ title: msg });
      return true;
    } catch {
      toast({ title: "저장에 실패했습니다", variant: "destructive" });
      return false;
    }
  };

  const createInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newForm.name && !newForm.message) {
      toast({ title: "이름 또는 문의 내용을 입력해 주세요", variant: "destructive" });
      return;
    }
    try {
      await inquiryApi({
        action: "create",
        ...newForm,
        created_at: newForm.created_at ? new Date(newForm.created_at).toISOString() : "",
      });
      setNewForm({
        name: "",
        phone: "",
        email: "",
        company: "",
        message: "",
        created_at: today(),
        channel: "silica",
        source: "phone",
      });
      setShowNew(false);
      await reload();
      toast({ title: "문의를 등록했습니다" });
    } catch {
      toast({ title: "등록에 실패했습니다", variant: "destructive" });
    }
  };

  const remove = async (id: string) => {
    if (!window.confirm("이 문의를 삭제할까요? 되돌릴 수 없습니다.")) return;
    try {
      await inquiryApi({ action: "delete", id });
      setSelectedId(null);
      await reload();
      toast({ title: "삭제했습니다" });
    } catch {
      toast({ title: "삭제에 실패했습니다", variant: "destructive" });
    }
  };

  const registerAccount = async (i: Inquiry) => {
    const existing = store.accounts.find(
      (a) =>
        (i.email && a.email && a.email.toLowerCase() === i.email.toLowerCase()) ||
        (i.company && a.company_name && a.company_name.trim() === i.company.trim()),
    );
    if (existing) {
      if (!i.account_id) await inquiryApi({ action: "update", id: i.id, account_id: existing.id });
      await reload();
      onOpenAccount(existing.id);
      toast({ title: "이미 등록된 거래처로 연결했습니다" });
      return;
    }
    try {
      const res = await crm({
        action: "create",
        table: "accounts",
        values: {
          account_type: "customer",
          channel: asChannel(i.channel),
          company_name: i.company || i.name || "(미확인)",
          email: i.email,
          phone: i.phone,
          memo: `문의 접수(${fmtDateTime(i.created_at)})에서 등록`,
        },
      });
      const accountId = res.row?.id as string;
      await crm({
        action: "create",
        table: "account_contacts",
        values: { account_id: accountId, name: i.name || "담당자", phone: i.phone, email: i.email },
      });
      await crm({
        action: "create",
        table: "account_notes",
        values: { account_id: accountId, note_date: i.created_at.slice(0, 10), body: `[문의 접수]\n${i.message}` },
      });
      await inquiryApi({ action: "update", id: i.id, account_id: accountId });
      await reload();
      onOpenAccount(accountId);
      toast({ title: "거래처로 등록했습니다" });
    } catch {
      toast({ title: "거래처 등록에 실패했습니다", variant: "destructive" });
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Pills
          value={filter}
          onChange={(v) => setFilter(v as typeof filter)}
          items={[
            { key: "all" as const, label: "전체", count: counts.all },
            { key: "pending" as const, label: "대기중", count: counts.pending },
            { key: "in_progress" as const, label: "진행중", count: counts.in_progress },
            { key: "done" as const, label: "완료", count: counts.done },
            { key: "archived" as const, label: "보관", count: counts.archived },
          ]}
        />
        <div className="ml-auto flex flex-wrap items-center gap-2">
          <Select
            value={channelFilter}
            onChange={setChannelFilter}
            options={[{ value: "all", label: "채널 전체" }, ...channelOptions]}
            className="h-9 w-36"
          />
          <Input
            placeholder="이름 · 회사 · 이메일 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-9 w-full max-w-[220px]"
          />
          <Button variant="outline" size="sm" onClick={() => setShowNew((v) => !v)}>
            <Plus className="mr-1.5 h-3.5 w-3.5" /> 문의 수동 등록
          </Button>
        </div>
      </div>

      {showNew && (
        <form onSubmit={createInquiry} className="mb-6 rounded-xl border bg-background p-5">
          <h2 className="mb-3 text-sm font-semibold">문의 수동 등록 (전화 · 카카오톡 · 이메일 등)</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Field label="이름">
              <Input value={newForm.name} onChange={(e) => setNewForm({ ...newForm, name: e.target.value })} />
            </Field>
            <Field label="연락처">
              <Input value={newForm.phone} onChange={(e) => setNewForm({ ...newForm, phone: e.target.value })} />
            </Field>
            <Field label="이메일">
              <Input value={newForm.email} onChange={(e) => setNewForm({ ...newForm, email: e.target.value })} />
            </Field>
            <Field label="회사명">
              <Input value={newForm.company} onChange={(e) => setNewForm({ ...newForm, company: e.target.value })} />
            </Field>
            <Field label="유입 채널">
              <Select
                value={newForm.channel}
                onChange={(v) => setNewForm({ ...newForm, channel: v })}
                options={channelOptions}
              />
            </Field>
            <Field label="접수 경로">
              <Select
                value={newForm.source}
                onChange={(v) => setNewForm({ ...newForm, source: v })}
                options={[
                  { value: "phone", label: "전화" },
                  { value: "kakao", label: "카카오톡" },
                  { value: "email", label: "이메일" },
                  { value: "visit", label: "방문/미팅" },
                  { value: "manual", label: "기타" },
                ]}
              />
            </Field>
            <Field label="접수일">
              <Input
                type="date"
                value={newForm.created_at}
                onChange={(e) => setNewForm({ ...newForm, created_at: e.target.value })}
              />
            </Field>
          </div>
          <Textarea
            placeholder="문의 내용"
            rows={3}
            className="mt-3"
            value={newForm.message}
            onChange={(e) => setNewForm({ ...newForm, message: e.target.value })}
          />
          <div className="mt-3 flex gap-2">
            <Button type="submit" size="sm">저장</Button>
            <Button type="button" size="sm" variant="ghost" onClick={() => setShowNew(false)}>취소</Button>
          </div>
        </form>
      )}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="space-y-2">
          {visible.length === 0 && <Empty>표시할 문의가 없습니다.</Empty>}
          {visible.map((i) => (
            <button
              key={i.id}
              onClick={() => openDetail(i)}
              className={`w-full rounded-xl border bg-background p-4 text-left transition hover:border-primary/50 ${
                selectedId === i.id ? "border-primary ring-1 ring-primary/30" : ""
              }`}
            >
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="truncate text-sm font-semibold">
                  {i.name || "(이름 없음)"}
                  {i.company ? <span className="ml-1.5 font-normal text-muted-foreground">· {i.company}</span> : null}
                </span>
                <span className="flex shrink-0 gap-1">
                  <Badge className={CHANNEL_STYLE[asChannel(i.channel)]}>{CHANNEL_LABEL[asChannel(i.channel)]}</Badge>
                  <Badge className={STATUS_STYLE[i.status]}>{STATUS_LABEL[i.status]}</Badge>
                </span>
              </div>
              <p className="line-clamp-2 text-xs text-muted-foreground">{i.message}</p>
              <p className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
                <Clock className="h-3 w-3" /> {fmtDateTime(i.created_at)}
              </p>
            </button>
          ))}
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          {!selected ? (
            <Empty>왼쪽에서 문의를 선택하세요.</Empty>
          ) : (
            <Panel>
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-base font-semibold">{selected.name || "(이름 없음)"}</h2>
                  <p className="text-xs text-muted-foreground">
                    접수 {fmtDateTime(selected.created_at)} · 최근 수정 {fmtDateTime(selected.updated_at)}
                  </p>
                </div>
                <Badge className={STATUS_STYLE[selected.status]}>{STATUS_LABEL[selected.status]}</Badge>
              </div>

              <dl className="mb-4 grid gap-2 rounded-lg bg-muted/40 p-4 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{selected.name || "-"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{selected.company || "-"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                  {selected.phone ? (
                    <a href={`tel:${selected.phone}`} className="underline-offset-2 hover:underline">{selected.phone}</a>
                  ) : (
                    <span>-</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                  {selected.email ? (
                    <a href={`mailto:${selected.email}`} className="underline-offset-2 hover:underline">{selected.email}</a>
                  ) : (
                    <span>-</span>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[11px] text-muted-foreground">유입 채널</span>
                  <Select
                    value={asChannel(selected.channel)}
                    onChange={(v) => patch(selected.id, { channel: v }, "유입 채널을 변경했습니다")}
                    options={channelOptions}
                    className="h-8 w-40"
                  />
                </div>
              </dl>

              <div className="mb-4 flex flex-wrap gap-2">
                <Button size="sm" variant="outline" onClick={() => registerAccount(selected)}>
                  <UserPlus className="mr-1.5 h-3.5 w-3.5" />
                  {linkedAccount ? "거래처 열기" : "거래처로 등록"}
                </Button>
                <Button size="sm" variant="outline" onClick={() => onQuoteFromInquiry(selected)}>
                  <FileText className="mr-1.5 h-3.5 w-3.5" /> 이 문의로 견적서 작성
                </Button>
                {linkedAccount && (
                  <button
                    onClick={() => onOpenAccount(linkedAccount.id)}
                    className="self-center text-xs text-muted-foreground underline-offset-2 hover:underline"
                  >
                    연결된 거래처: {linkedAccount.company_name}
                  </button>
                )}
              </div>

              <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">문의 내용</h3>
              {editing ? (
                <div className="space-y-2">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <Input placeholder="이름" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                    <Input placeholder="연락처" value={editForm.phone} onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })} />
                    <Input placeholder="이메일" value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} />
                    <Input placeholder="회사명" value={editForm.company} onChange={(e) => setEditForm({ ...editForm, company: e.target.value })} />
                  </div>
                  <Textarea rows={6} value={editForm.message} onChange={(e) => setEditForm({ ...editForm, message: e.target.value })} />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={async () => {
                        const ok = await patch(selected.id, editForm, "문의 내용을 수정했습니다");
                        if (ok) setEditing(false);
                      }}
                    >
                      저장
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setEditing(false)}>취소</Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="whitespace-pre-wrap rounded-lg border-l-2 border-primary bg-muted/30 p-4 text-sm leading-relaxed">
                    {selected.message || "(내용 없음)"}
                  </div>
                  <button onClick={() => setEditing(true)} className="mt-1.5 text-xs text-muted-foreground underline-offset-2 hover:underline">
                    내용 수정
                  </button>
                </>
              )}

              <h3 className="mb-1.5 mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">답변 · 처리 메모</h3>
              <Textarea rows={4} value={note} onChange={(e) => setNote(e.target.value)} placeholder="고객에게 안내한 내용, 견적, 후속 조치 등을 기록하세요." />
              <Button size="sm" className="mt-2" onClick={() => patch(selected.id, { admin_note: note }, "메모를 저장했습니다")}>
                메모 저장
              </Button>

              <h3 className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">상태 변경</h3>
              <div className="flex flex-wrap gap-2">
                {(["pending", "in_progress", "done", "archived"] as Status[]).map((s) => (
                  <Button
                    key={s}
                    size="sm"
                    variant={selected.status === s ? "default" : "outline"}
                    onClick={() => patch(selected.id, { status: s }, `${STATUS_LABEL[s]}(으)로 변경했습니다`)}
                  >
                    {STATUS_LABEL[s]}
                  </Button>
                ))}
                <Button size="sm" variant="ghost" className="ml-auto text-destructive" onClick={() => remove(selected.id)}>
                  <Trash2 className="mr-1.5 h-3.5 w-3.5" /> 삭제
                </Button>
              </div>
            </Panel>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiriesTab;
