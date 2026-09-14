import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Lock,
  Mail,
  Phone,
  Building2,
  User,
  RefreshCw,
  Search,
  Plus,
  Download,
  LogOut,
  Trash2,
  Clock,
} from "lucide-react";

type Status = "pending" | "in_progress" | "done" | "archived";

interface Inquiry {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  company: string | null;
  message: string;
  status: Status;
  admin_note: string | null;
  source: string;
  created_at: string;
  updated_at: string;
}

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

const FILTERS: { key: "all" | Status; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "pending", label: "대기중" },
  { key: "in_progress", label: "진행중" },
  { key: "done", label: "완료" },
  { key: "archived", label: "보관" },
];

const PW_KEY = "silica_admin_pw";

const fmt = (iso: string) =>
  new Date(iso).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

const Admin = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filter, setFilter] = useState<"all" | Status>("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [newForm, setNewForm] = useState({ name: "", phone: "", email: "", company: "", message: "", created_at: "" });
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", phone: "", email: "", company: "", message: "" });

  useEffect(() => {
    document.title = "관리자 · 문의 관리";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const call = useCallback(
    async (payload: Record<string, unknown>, pw?: string) => {
      const pass = pw ?? sessionStorage.getItem(PW_KEY) ?? "";
      const { data, error } = await supabase.functions.invoke("admin-inquiries", {
        body: { ...payload, password: pass },
      });
      if (error) throw error;
      return data as any;
    },
    [],
  );

  const load = useCallback(
    async (pw?: string) => {
      setLoading(true);
      try {
        const res = await call({ action: "list" }, pw);
        setInquiries(res.inquiries ?? []);
      } catch {
        toast({ title: "목록을 불러오지 못했습니다", variant: "destructive" });
      } finally {
        setLoading(false);
      }
    },
    [call, toast],
  );

  useEffect(() => {
    const saved = sessionStorage.getItem(PW_KEY);
    if (saved) {
      setAuthed(true);
      load(saved);
    }
  }, [load]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await call({ action: "login" }, password);
      sessionStorage.setItem(PW_KEY, password);
      setAuthed(true);
      setPassword("");
      await load(password);
    } catch {
      toast({ title: "비밀번호가 올바르지 않습니다", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem(PW_KEY);
    setAuthed(false);
    setInquiries([]);
    setSelectedId(null);
  };

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: inquiries.length };
    for (const f of FILTERS) if (f.key !== "all") c[f.key] = 0;
    for (const i of inquiries) c[i.status] = (c[i.status] ?? 0) + 1;
    return c;
  }, [inquiries]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return inquiries.filter((i) => {
      if (filter !== "all" && i.status !== filter) return false;
      if (!q) return true;
      return [i.name, i.company, i.email, i.phone, i.message]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
  }, [inquiries, filter, query]);

  const selected = inquiries.find((i) => i.id === selectedId) ?? null;

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
      const res = await call({ action: "update", id, ...payload });
      setInquiries((prev) => prev.map((i) => (i.id === id ? res.inquiry : i)));
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
      const res = await call({
        action: "create",
        ...newForm,
        created_at: newForm.created_at ? new Date(newForm.created_at).toISOString() : "",
      });
      setInquiries((prev) => [res.inquiry, ...prev]);
      setNewForm({ name: "", phone: "", email: "", company: "", message: "", created_at: "" });
      setShowNew(false);
      toast({ title: "문의를 추가했습니다" });
    } catch {
      toast({ title: "추가에 실패했습니다", variant: "destructive" });
    }
  };

  const backfill = async () => {
    try {
      const res = await call({ action: "backfill" });
      await load();
      toast({ title: `지난 문의 ${res.imported ?? 0}건을 불러왔습니다` });
    } catch {
      toast({ title: "불러오기에 실패했습니다", variant: "destructive" });
    }
  };

  const remove = async (id: string) => {
    if (!window.confirm("이 문의를 삭제할까요? 되돌릴 수 없습니다.")) return;
    try {
      await call({ action: "delete", id });
      setInquiries((prev) => prev.filter((i) => i.id !== id));
      setSelectedId(null);
      toast({ title: "삭제했습니다" });
    } catch {
      toast({ title: "삭제에 실패했습니다", variant: "destructive" });
    }
  };

  if (!authed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-xl border bg-background p-8 shadow-sm"
        >
          <div className="mb-6 flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-semibold">관리자 모드</h1>
          </div>
          <label htmlFor="admin-pw" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
            비밀번호
          </label>
          <Input
            id="admin-pw"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="mb-4"
          />
          <Button type="submit" className="w-full" disabled={loading || !password}>
            {loading ? "확인 중..." : "입장"}
          </Button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/20 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold">문의 관리</h1>
            <p className="text-sm text-muted-foreground">홈페이지 문의 접수 내역</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => load()} disabled={loading}>
              <RefreshCw className={`mr-1.5 h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} /> 새로고침
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowNew((v) => !v)}>
              <Plus className="mr-1.5 h-3.5 w-3.5" /> 문의 추가
            </Button>
            <Button variant="outline" size="sm" onClick={backfill}>
              <Download className="mr-1.5 h-3.5 w-3.5" /> 지난 문의 불러오기
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="mr-1.5 h-3.5 w-3.5" /> 나가기
            </Button>
          </div>
        </header>

        {showNew && (
          <form onSubmit={createInquiry} className="mb-6 rounded-xl border bg-background p-5">
            <h2 className="mb-3 text-sm font-semibold">지난 문의 직접 추가</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input placeholder="이름" value={newForm.name} onChange={(e) => setNewForm({ ...newForm, name: e.target.value })} />
              <Input placeholder="연락처" value={newForm.phone} onChange={(e) => setNewForm({ ...newForm, phone: e.target.value })} />
              <Input placeholder="이메일" value={newForm.email} onChange={(e) => setNewForm({ ...newForm, email: e.target.value })} />
              <Input placeholder="회사명" value={newForm.company} onChange={(e) => setNewForm({ ...newForm, company: e.target.value })} />
              <Input type="date" value={newForm.created_at} onChange={(e) => setNewForm({ ...newForm, created_at: e.target.value })} />
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

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                filter === f.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label} <span className="opacity-70">{counts[f.key] ?? 0}</span>
            </button>
          ))}
          <div className="relative ml-auto w-full max-w-xs">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="이름 · 회사 · 이메일 검색"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          {/* 목록 */}
          <div className="space-y-2">
            {visible.length === 0 && (
              <p className="rounded-xl border bg-background p-6 text-center text-sm text-muted-foreground">
                표시할 문의가 없습니다.
              </p>
            )}
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
                  <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] ${STATUS_STYLE[i.status]}`}>
                    {STATUS_LABEL[i.status]}
                  </span>
                </div>
                <p className="line-clamp-2 text-xs text-muted-foreground">{i.message}</p>
                <p className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Clock className="h-3 w-3" /> {fmt(i.created_at)}
                </p>
              </button>
            ))}
          </div>

          {/* 상세 (1:1 문의 형태) */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            {!selected ? (
              <p className="rounded-xl border bg-background p-8 text-center text-sm text-muted-foreground">
                왼쪽에서 문의를 선택하세요.
              </p>
            ) : (
              <div className="rounded-xl border bg-background p-5">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base font-semibold">{selected.name || "(이름 없음)"}</h2>
                    <p className="text-xs text-muted-foreground">접수 {fmt(selected.created_at)} · 최근 수정 {fmt(selected.updated_at)}</p>
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-xs ${STATUS_STYLE[selected.status]}`}>
                    {STATUS_LABEL[selected.status]}
                  </span>
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
                    {selected.phone ? <a href={`tel:${selected.phone}`} className="underline-offset-2 hover:underline">{selected.phone}</a> : <span>-</span>}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                    {selected.email ? <a href={`mailto:${selected.email}`} className="underline-offset-2 hover:underline">{selected.email}</a> : <span>-</span>}
                  </div>
                </dl>

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
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
