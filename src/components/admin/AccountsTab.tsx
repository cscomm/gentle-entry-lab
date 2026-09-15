import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FileText, Plus, Trash2 } from "lucide-react";
import {
  CHANNELS,
  CHANNEL_LABEL,
  CHANNEL_STYLE,
  asChannel,
  crm,
  fmtDate,
  fmtDateTime,
  type Account,
  type AccountNote,
  type Contact,
  won,
} from "./shared";
import { Badge, Empty, Field, Panel, Pills, SectionTitle, Select } from "./ui";
import type { AdminStore } from "./useAdminData";

const channelOptions = CHANNELS.map((c) => ({ value: c, label: CHANNEL_LABEL[c] }));
const typeOptions = [
  { value: "customer", label: "매출처/고객" },
  { value: "supplier", label: "매입처/협력사" },
];

const blank = {
  account_type: "customer",
  channel: "silica",
  company_name: "",
  biz_no: "",
  ceo_name: "",
  biz_type: "",
  biz_item: "",
  address: "",
  email: "",
  phone: "",
  country: "KR",
  memo: "",
};

interface Props {
  store: AdminStore;
  reload: () => Promise<void>;
  focusId: string | null;
  onFocused: () => void;
  onQuoteForAccount: (account: Account) => void;
}

const AccountsTab = ({ store, reload, focusId, onFocused, onQuoteForAccount }: Props) => {
  const { toast } = useToast();
  const [typeFilter, setTypeFilter] = useState<"all" | "customer" | "supplier">("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ ...blank });
  const [editing, setEditing] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [notes, setNotes] = useState<AccountNote[]>([]);
  const [contactForm, setContactForm] = useState({ name: "", position: "", phone: "", email: "" });
  const [noteBody, setNoteBody] = useState("");

  useEffect(() => {
    if (focusId) {
      setSelectedId(focusId);
      onFocused();
    }
  }, [focusId, onFocused]);

  const selected = store.accounts.find((a) => a.id === selectedId) ?? null;

  useEffect(() => {
    if (!selectedId) return;
    (async () => {
      try {
        const [c, n] = await Promise.all([
          crm({ action: "list", table: "account_contacts", eq: { account_id: selectedId } }),
          crm({ action: "list", table: "account_notes", eq: { account_id: selectedId } }),
        ]);
        setContacts(c.rows ?? []);
        setNotes(n.rows ?? []);
      } catch {
        setContacts([]);
        setNotes([]);
      }
    })();
  }, [selectedId, store.accounts]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return store.accounts.filter((a) => {
      if (typeFilter !== "all" && a.account_type !== typeFilter) return false;
      if (!q) return true;
      return [a.company_name, a.email, a.phone, a.ceo_name, a.biz_no]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
  }, [store.accounts, typeFilter, query]);

  const counts = useMemo(
    () => ({
      all: store.accounts.length,
      customer: store.accounts.filter((a) => a.account_type === "customer").length,
      supplier: store.accounts.filter((a) => a.account_type === "supplier").length,
    }),
    [store.accounts],
  );

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company_name) {
      toast({ title: "회사명을 입력해 주세요", variant: "destructive" });
      return;
    }
    try {
      if (editing && selectedId) {
        await crm({ action: "update", table: "accounts", id: selectedId, values: form });
        toast({ title: "거래처 정보를 수정했습니다" });
      } else {
        const res = await crm({ action: "create", table: "accounts", values: form });
        setSelectedId(res.row?.id ?? null);
        toast({ title: "거래처를 등록했습니다" });
      }
      setShowNew(false);
      setEditing(false);
      setForm({ ...blank });
      await reload();
    } catch {
      toast({ title: "저장에 실패했습니다", variant: "destructive" });
    }
  };

  const startEdit = (a: Account) => {
    setForm({
      account_type: a.account_type,
      channel: asChannel(a.channel),
      company_name: a.company_name,
      biz_no: a.biz_no ?? "",
      ceo_name: a.ceo_name ?? "",
      biz_type: a.biz_type ?? "",
      biz_item: a.biz_item ?? "",
      address: a.address ?? "",
      email: a.email ?? "",
      phone: a.phone ?? "",
      country: a.country ?? "KR",
      memo: a.memo ?? "",
    });
    setEditing(true);
    setShowNew(true);
  };

  const removeAccount = async (id: string) => {
    if (!window.confirm("이 거래처를 삭제할까요? 담당자·메모도 함께 삭제됩니다.")) return;
    await crm({ action: "delete", table: "accounts", id });
    setSelectedId(null);
    await reload();
  };

  const addContact = async () => {
    if (!selectedId || !contactForm.name) return;
    await crm({ action: "create", table: "account_contacts", values: { account_id: selectedId, ...contactForm } });
    setContactForm({ name: "", position: "", phone: "", email: "" });
    const c = await crm({ action: "list", table: "account_contacts", eq: { account_id: selectedId } });
    setContacts(c.rows ?? []);
  };

  const removeContact = async (id: string) => {
    await crm({ action: "delete", table: "account_contacts", id });
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const addNote = async () => {
    if (!selectedId || !noteBody.trim()) return;
    await crm({ action: "create", table: "account_notes", values: { account_id: selectedId, body: noteBody } });
    setNoteBody("");
    const n = await crm({ action: "list", table: "account_notes", eq: { account_id: selectedId } });
    setNotes(n.rows ?? []);
  };

  const timeline = useMemo(() => {
    if (!selectedId) return [];
    const items: { date: string; kind: string; text: string }[] = [];
    for (const i of store.inquiries.filter((x) => x.account_id === selectedId))
      items.push({ date: i.created_at.slice(0, 10), kind: "문의", text: i.message.slice(0, 160) });
    for (const q of store.quotes.filter((x) => x.account_id === selectedId))
      items.push({ date: q.quote_date, kind: "견적", text: `${q.quote_no} · ${won(q.total_amount)} ${q.currency}` });
    for (const s of store.samples.filter((x) => x.account_id === selectedId))
      items.push({ date: s.sent_date ?? s.created_at.slice(0, 10), kind: "샘플", text: `${s.item_name} ${s.qty}${s.unit}` });
    for (const v of store.salesVouchers.filter((x) => x.account_id === selectedId))
      items.push({ date: v.voucher_date, kind: "매출", text: `${won(v.total_krw)}원 · ${v.description ?? ""}` });
    for (const v of store.purchaseVouchers.filter((x) => x.account_id === selectedId))
      items.push({ date: v.voucher_date, kind: "매입", text: `${won(v.total_krw)}원 · ${v.description ?? ""}` });
    for (const n of notes) items.push({ date: n.note_date, kind: "상담", text: n.body.slice(0, 200) });
    return items.sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [selectedId, store, notes]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Pills
          value={typeFilter}
          onChange={(v) => setTypeFilter(v as "all" | "customer" | "supplier")}
          items={[
            { key: "all" as const, label: "전체", count: counts.all },
            { key: "customer" as const, label: "매출처/고객", count: counts.customer },
            { key: "supplier" as const, label: "매입처/협력사", count: counts.supplier },
          ]}
        />
        <div className="ml-auto flex items-center gap-2">
          <Input
            placeholder="회사명 · 사업자번호 · 이메일 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-9 w-full max-w-[240px]"
          />
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setForm({ ...blank });
              setEditing(false);
              setShowNew((v) => !v);
            }}
          >
            <Plus className="mr-1.5 h-3.5 w-3.5" /> 거래처 등록
          </Button>
        </div>
      </div>

      {showNew && (
        <form onSubmit={submit} className="mb-6 rounded-xl border bg-background p-5">
          <h2 className="mb-3 text-sm font-semibold">{editing ? "거래처 정보 수정" : "거래처 등록"}</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Field label="거래처 유형">
              <Select value={form.account_type} onChange={(v) => setForm({ ...form, account_type: v })} options={typeOptions} />
            </Field>
            <Field label="유입 채널">
              <Select value={form.channel} onChange={(v) => setForm({ ...form, channel: v })} options={channelOptions} />
            </Field>
            <Field label="회사명">
              <Input value={form.company_name} onChange={(e) => setForm({ ...form, company_name: e.target.value })} />
            </Field>
            <Field label="사업자/법인등록번호">
              <Input value={form.biz_no} onChange={(e) => setForm({ ...form, biz_no: e.target.value })} />
            </Field>
            <Field label="대표자명">
              <Input value={form.ceo_name} onChange={(e) => setForm({ ...form, ceo_name: e.target.value })} />
            </Field>
            <Field label="업태">
              <Input value={form.biz_type} onChange={(e) => setForm({ ...form, biz_type: e.target.value })} />
            </Field>
            <Field label="종목">
              <Input value={form.biz_item} onChange={(e) => setForm({ ...form, biz_item: e.target.value })} />
            </Field>
            <Field label="국가">
              <Input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
            </Field>
            <Field label="대표 전화">
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </Field>
            <Field label="대표 이메일">
              <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </Field>
            <div className="sm:col-span-2">
              <Field label="주소">
                <Input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
              </Field>
            </div>
          </div>
          <Textarea
            rows={2}
            className="mt-3"
            placeholder="거래처 메모"
            value={form.memo}
            onChange={(e) => setForm({ ...form, memo: e.target.value })}
          />
          <div className="mt-3 flex gap-2">
            <Button type="submit" size="sm">저장</Button>
            <Button type="button" size="sm" variant="ghost" onClick={() => { setShowNew(false); setEditing(false); }}>
              취소
            </Button>
          </div>
        </form>
      )}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="space-y-2">
          {visible.length === 0 && <Empty>등록된 거래처가 없습니다.</Empty>}
          {visible.map((a) => (
            <button
              key={a.id}
              onClick={() => setSelectedId(a.id)}
              className={`w-full rounded-xl border bg-background p-4 text-left transition hover:border-primary/50 ${
                selectedId === a.id ? "border-primary ring-1 ring-primary/30" : ""
              }`}
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="truncate text-sm font-semibold">{a.company_name}</span>
                <span className="flex shrink-0 gap-1">
                  <Badge className={CHANNEL_STYLE[asChannel(a.channel)]}>{CHANNEL_LABEL[asChannel(a.channel)]}</Badge>
                  <Badge
                    className={
                      a.account_type === "customer"
                        ? "bg-indigo-100 text-indigo-800 border-indigo-200"
                        : "bg-orange-100 text-orange-800 border-orange-200"
                    }
                  >
                    {a.account_type === "customer" ? "매출처" : "매입처"}
                  </Badge>
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {[a.ceo_name, a.phone, a.email].filter(Boolean).join(" · ") || "연락처 미입력"}
              </p>
            </button>
          ))}
        </div>

        <div>
          {!selected ? (
            <Empty>왼쪽에서 거래처를 선택하세요.</Empty>
          ) : (
            <div className="space-y-4">
              <Panel>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base font-semibold">{selected.company_name}</h2>
                    <p className="text-xs text-muted-foreground">등록 {fmtDateTime(selected.created_at)}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline" onClick={() => onQuoteForAccount(selected)}>
                      <FileText className="mr-1.5 h-3.5 w-3.5" /> 견적서 작성
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => startEdit(selected)}>수정</Button>
                    <Button size="sm" variant="ghost" className="text-destructive" onClick={() => removeAccount(selected.id)}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                <dl className="grid gap-x-6 gap-y-2 rounded-lg bg-muted/40 p-4 text-sm sm:grid-cols-2">
                  {[
                    ["유형", selected.account_type === "customer" ? "매출처/고객" : "매입처/협력사"],
                    ["유입 채널", CHANNEL_LABEL[asChannel(selected.channel)]],
                    ["사업자번호", selected.biz_no],
                    ["대표자", selected.ceo_name],
                    ["업태", selected.biz_type],
                    ["종목", selected.biz_item],
                    ["국가", selected.country],
                    ["전화", selected.phone],
                    ["이메일", selected.email],
                    ["주소", selected.address],
                  ].map(([k, v]) => (
                    <div key={k as string} className="flex gap-2">
                      <dt className="w-24 shrink-0 text-[11px] text-muted-foreground">{k}</dt>
                      <dd className="min-w-0 break-words">{v || "-"}</dd>
                    </div>
                  ))}
                </dl>
                {selected.memo && (
                  <p className="mt-3 whitespace-pre-wrap rounded-lg border-l-2 border-primary bg-muted/30 p-3 text-xs">
                    {selected.memo}
                  </p>
                )}
              </Panel>

              <Panel>
                <SectionTitle>담당자</SectionTitle>
                <div className="mb-3 space-y-1.5">
                  {contacts.length === 0 && <p className="text-xs text-muted-foreground">등록된 담당자가 없습니다.</p>}
                  {contacts.map((c) => (
                    <div key={c.id} className="flex items-center gap-2 rounded-lg bg-muted/40 px-3 py-2 text-sm">
                      <span className="font-medium">{c.name}</span>
                      {c.position && <span className="text-xs text-muted-foreground">{c.position}</span>}
                      {c.phone && <a href={`tel:${c.phone}`} className="text-xs underline-offset-2 hover:underline">{c.phone}</a>}
                      {c.email && <a href={`mailto:${c.email}`} className="text-xs underline-offset-2 hover:underline">{c.email}</a>}
                      <button className="ml-auto text-destructive" onClick={() => removeContact(c.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="grid gap-2 sm:grid-cols-4">
                  <Input placeholder="이름" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} />
                  <Input placeholder="직위" value={contactForm.position} onChange={(e) => setContactForm({ ...contactForm, position: e.target.value })} />
                  <Input placeholder="연락처" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} />
                  <Input placeholder="이메일" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} />
                </div>
                <Button size="sm" className="mt-2" onClick={addContact}>담당자 추가</Button>
              </Panel>

              <Panel>
                <SectionTitle>상담 메모 추가</SectionTitle>
                <Textarea rows={3} value={noteBody} onChange={(e) => setNoteBody(e.target.value)} placeholder="통화 · 미팅 · 협의 내용" />
                <Button size="sm" className="mt-2" onClick={addNote}>메모 저장</Button>
              </Panel>

              <Panel>
                <SectionTitle>통합 타임라인</SectionTitle>
                {timeline.length === 0 ? (
                  <p className="text-xs text-muted-foreground">기록이 없습니다.</p>
                ) : (
                  <ol className="space-y-2 border-l pl-4">
                    {timeline.map((t, idx) => (
                      <li key={idx} className="relative text-sm">
                        <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-primary" />
                        <span className="mr-2 text-[11px] text-muted-foreground">{fmtDate(t.date)}</span>
                        <Badge className="mr-2 bg-muted text-muted-foreground border-border">{t.kind}</Badge>
                        <span className="whitespace-pre-wrap">{t.text}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </Panel>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountsTab;
