import { useCallback, useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronDown, ChevronRight, Download, RefreshCw, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { productCatalog } from "@/data/products";
import { crm, downloadCsv, fmtDateTime } from "./shared";

interface FinderLog {
  id: string;
  query: string;
  lang: string;
  answer: string | null;
  recommended: { slug?: string; reason?: string }[] | null;
  status: string;
  error_message: string | null;
  duration_ms: number | null;
  user_agent: string | null;
  created_at: string;
}

const STATUS: Record<string, { label: string; cls: string }> = {
  done: { label: "답변 완료", cls: "bg-primary/10 text-primary" },
  pending: { label: "답변 중", cls: "bg-amber-500/15 text-amber-700" },
  aborted: { label: "중단됨", cls: "bg-muted text-muted-foreground" },
  error: { label: "오류", cls: "bg-destructive/10 text-destructive" },
};

const LANG_LABEL: Record<string, string> = { ko: "한국어", en: "English", ja: "日本語" };

const device = (ua: string | null) => {
  if (!ua) return "";
  if (/iPhone|Android.*Mobile|Mobile/i.test(ua)) return "모바일";
  if (/iPad|Tablet/i.test(ua)) return "태블릿";
  return "PC";
};

const productName = (slug?: string) => {
  const p = productCatalog.find((x) => x.slug === slug);
  return p ? p.name : slug ?? "";
};

type Filter = "all" | "done" | "aborted" | "error";

const FinderLogsTab = () => {
  const { toast } = useToast();
  const [rows, setRows] = useState<FinderLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await crm({ action: "finder_logs", limit: 1000 });
      setRows(res.rows ?? []);
    } catch {
      toast({ title: "로그를 불러오지 못했습니다", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    load();
  }, [load]);

  const stats = useMemo(() => {
    const now = Date.now();
    const today = new Date().toDateString();
    return {
      total: rows.length,
      today: rows.filter((r) => new Date(r.created_at).toDateString() === today).length,
      week: rows.filter((r) => now - new Date(r.created_at).getTime() < 7 * 864e5).length,
    };
  }, [rows]);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return rows.filter((r) => {
      if (filter !== "all" && (filter === "error" ? r.status !== "error" : r.status !== filter)) return false;
      if (!term) return true;
      return r.query.toLowerCase().includes(term) || (r.answer ?? "").toLowerCase().includes(term);
    });
  }, [rows, q, filter]);

  const remove = async (id: string) => {
    if (!confirm("이 기록을 삭제할까요?")) return;
    try {
      await crm({ action: "delete_finder_log", id });
      setRows((rs) => rs.filter((r) => r.id !== id));
    } catch {
      toast({ title: "삭제에 실패했습니다", variant: "destructive" });
    }
  };

  const exportCsv = () => {
    downloadCsv(`ai-finder-log-${new Date().toISOString().slice(0, 10)}.csv`, [
      ["일시", "언어", "상태", "질문", "추천 제품", "AI 답변"],
      ...list.map((r) => [
        fmtDateTime(r.created_at),
        LANG_LABEL[r.lang] ?? r.lang,
        STATUS[r.status]?.label ?? r.status,
        r.query,
        (r.recommended ?? []).map((x) => productName(x.slug)).join(" / "),
        r.answer ?? "",
      ]),
    ]);
  };

  const filters: [Filter, string][] = [
    ["all", "전체"],
    ["done", "답변 완료"],
    ["aborted", "중단됨"],
    ["error", "오류"],
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        사용가이드의 <b className="text-foreground">나에게 적합한 제품은?</b>에서 방문자가 입력한 질문과 AI 답변, 추천된 제품이 모두 기록됩니다.
      </p>

      <div className="grid grid-cols-3 gap-3">
        {[
          ["전체", stats.total],
          ["오늘", stats.today],
          ["최근 7일", stats.week],
        ].map(([label, n]) => (
          <div key={label as string} className="rounded-xl border bg-background px-4 py-3">
            <div className="text-xs text-muted-foreground">{label}</div>
            <div className="text-2xl font-bold text-foreground">{n}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex gap-1 rounded-lg border bg-background p-1">
          {filters.map(([k, label]) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                filter === k ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="relative min-w-[200px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="질문·답변 내용 검색" className="pl-9" />
        </div>
        <Button variant="outline" size="sm" onClick={load} disabled={loading}>
          <RefreshCw className={`mr-1.5 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          새로고침
        </Button>
        <Button variant="outline" size="sm" onClick={exportCsv} disabled={list.length === 0}>
          <Download className="mr-1.5 h-4 w-4" />
          엑셀(CSV)
        </Button>
      </div>

      {list.length === 0 ? (
        <div className="rounded-xl border bg-background px-4 py-12 text-center text-sm text-muted-foreground">
          {loading ? "불러오는 중…" : "기록이 없습니다."}
        </div>
      ) : (
        <div className="space-y-2">
          {list.map((r) => {
            const isOpen = open === r.id;
            const st = STATUS[r.status] ?? STATUS.pending;
            const recs = (r.recommended ?? []).filter((x) => x?.slug);
            return (
              <div key={r.id} className="rounded-xl border bg-background">
                <button
                  onClick={() => setOpen(isOpen ? null : r.id)}
                  className="flex w-full items-start gap-3 px-4 py-3 text-left"
                >
                  {isOpen ? <ChevronDown className="mt-0.5 h-4 w-4 shrink-0" /> : <ChevronRight className="mt-0.5 h-4 w-4 shrink-0" />}
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span>{fmtDateTime(r.created_at)}</span>
                      <span className={`rounded-full px-2 py-0.5 font-semibold ${st.cls}`}>{st.label}</span>
                      <span>{LANG_LABEL[r.lang] ?? r.lang}</span>
                      {device(r.user_agent) && <span>· {device(r.user_agent)}</span>}
                    </div>
                    <p className={`text-sm font-medium text-foreground ${isOpen ? "whitespace-pre-wrap" : "line-clamp-2"}`}>{r.query}</p>
                    {!isOpen && recs.length > 0 && (
                      <p className="mt-1 truncate text-xs text-primary">추천: {recs.map((x) => productName(x.slug)).join(", ")}</p>
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="space-y-4 border-t px-4 py-4 pl-11">
                    {recs.length > 0 && (
                      <div>
                        <div className="mb-2 text-xs font-semibold text-muted-foreground">추천된 제품</div>
                        <ul className="space-y-1.5">
                          {recs.map((x, i) => (
                            <li key={i} className="text-sm">
                              <a
                                href={`/ko/products/${x.slug}/`}
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold text-primary hover:underline"
                              >
                                {productName(x.slug)}
                              </a>
                              {x.reason && <span className="text-muted-foreground"> — {x.reason}</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div>
                      <div className="mb-2 text-xs font-semibold text-muted-foreground">AI 답변</div>
                      {r.answer ? (
                        <div className="prose prose-sm max-w-none rounded-lg bg-muted/40 p-4 text-sm text-foreground [&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-base [&_h2]:font-bold [&_li]:ml-4 [&_li]:list-disc [&_p]:mb-2 [&_table]:w-full [&_td]:border [&_td]:px-2 [&_td]:py-1 [&_th]:border [&_th]:px-2 [&_th]:py-1">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{r.answer}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">{r.error_message ? `오류: ${r.error_message}` : "답변이 저장되지 않았습니다."}</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{r.duration_ms != null ? `응답 시간 ${(r.duration_ms / 1000).toFixed(1)}초` : ""}</span>
                      <Button variant="ghost" size="sm" onClick={() => remove(r.id)} className="text-destructive hover:text-destructive">
                        <Trash2 className="mr-1.5 h-4 w-4" />
                        삭제
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FinderLogsTab;
