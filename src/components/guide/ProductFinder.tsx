import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@/lib/router";
import { ArrowRight, Infinity as InfinityIcon, Loader2, RotateCcw, Sparkles, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLang, type Lang } from "@/contexts/LanguageContext";
import { productCatalog } from "@/data/products";
import { isProductHidden, useHiddenSlugs } from "@/lib/productVisibility";
import { pick } from "@/lib/lang";
import { silicaAlt } from "@/lib/silicaAlt";
import { useMember } from "@/lib/members/MemberContext";
import MemberGate from "@/components/member/MemberGate";

const ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/product-finder`;
const ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
const REC = "[[RECOMMEND]]";
const ERR = "[[ERROR]]";
type Rec = { slug: string; reason: string };
type Quota = { kind: "guest" | "member"; unlimited: boolean; limit: number; used: number; remaining: number };

const TXT: Record<string, Record<Lang, string>> = {
  lead: {
    ko: "사용하실 용도, 공정, 원하는 효과를 자유롭게 적어주세요. AI가 소재 전문가 관점에서 적합한 소재와 핵심 사양을 먼저 제안하고, 사이트에서 가장 근접한 제품을 함께 추천해 드립니다.",
    en: "Describe your application, process and the effect you want. AI first proposes suitable materials and key specs from a materials-expert view, then recommends the closest products on our site.",
    ja: "ご使用の用途・工程・求める効果を自由にご記入ください。AIが素材の専門家の視点で適した素材と主要スペックを提案し、当サイトで最も近い製品もあわせてご推薦します。",
  },
  label: { ko: "용도 · 원하는 효과", en: "Application & desired effect", ja: "用途・求める効果" },
  placeholder: {
    ko: "예) 무용제 에폭시 바닥재에 흐름 방지(요변성)와 침강 방지 효과가 필요합니다. 투명도는 유지되어야 하고, 현재 첨가량은 1~2% 정도를 생각하고 있습니다.",
    en: "e.g. We need anti-sag (thixotropy) and anti-settling in a solvent-free epoxy floor coating while keeping it clear. We plan a dosage of about 1–2%.",
    ja: "例）無溶剤エポキシ床材にタレ防止（チキソ性）と沈降防止効果が必要です。透明性は維持したく、添加量は1〜2%程度を想定しています。",
  },
  examples: { ko: "예시로 시작하기", en: "Start from an example", ja: "例から始める" },
  submit: { ko: "AI 추천 받기", en: "Get AI recommendation", ja: "AIの提案を受ける" },
  stop: { ko: "중지", en: "Stop", ja: "停止" },
  reset: { ko: "새로 질문하기", en: "Ask again", ja: "新しく質問する" },
  thinking: {
    ko: "AI가 용도를 분석하고 적합한 소재를 검토하고 있습니다… (보통 20~40초)",
    en: "AI is analysing your application and reviewing suitable materials… (usually 20–40 s)",
    ja: "AIが用途を分析し、適した素材を検討しています…（通常20〜40秒）",
  },
  step1: { ko: "AI 소재 분석", en: "AI material analysis", ja: "AI素材分析" },
  step1sub: {
    ko: "소재 전문 지식을 바탕으로 한 AI의 제안입니다",
    en: "AI's proposal based on materials expertise",
    ja: "素材の専門知識に基づくAIのご提案です",
  },
  step2: { ko: "사이트 내 근접 추천 제품", en: "Closest products on our site", ja: "当サイトの近い推奨製品" },
  step2sub: {
    ko: "위 분석과 가장 가까운 당사 제품입니다",
    en: "Our products closest to the analysis above",
    ja: "上記の分析に最も近い当社製品です",
  },
  picking: { ko: "근접 제품을 고르는 중…", en: "Picking the closest products…", ja: "近い製品を選定中…" },
  none: {
    ko: "사이트에 딱 맞는 제품이 없지만, 목록에 없는 소재도 공급이 가능합니다. 문의해 주세요.",
    en: "No close match on our site, but we can source unlisted materials too. Please contact us.",
    ja: "当サイトに近い製品はありませんが、掲載外の素材も供給可能です。お問い合わせください。",
  },
  view: { ko: "제품 보기", en: "View product", ja: "製品を見る" },
  ctaTitle: {
    ko: "샘플 · 견적이 필요하신가요?",
    en: "Need a sample or a quote?",
    ja: "サンプル・お見積もりが必要ですか？",
  },
  ctaDesc: {
    ko: "AI 분석 결과와 함께 용도를 남겨주시면 담당자가 최적 사양을 확인해 안내해 드립니다.",
    en: "Send us your application along with this analysis and our team will confirm the best spec.",
    ja: "AI分析結果とあわせて用途をお知らせいただければ、担当者が最適なスペックを確認してご案内します。",
  },
  cta: { ko: "문의하기", en: "Contact us", ja: "お問い合わせ" },
  disclaimer: {
    ko: "AI 답변은 참고용입니다. 최종 선정 전 TDS 확인 및 샘플 테스트를 권장합니다.",
    en: "AI answers are for reference. Please check the TDS and test samples before final selection.",
    ja: "AIの回答は参考用です。最終選定の前にTDSの確認とサンプルテストをお勧めします。",
  },
  tooShort: { ko: "용도를 조금 더 구체적으로 적어주세요.", en: "Please describe your use a bit more.", ja: "用途をもう少し具体的にご記入ください。" },
  err402: {
    ko: "현재 AI 추천 기능을 사용할 수 없습니다. 잠시 후 다시 시도하시거나 문의하기를 이용해 주세요.",
    en: "The AI finder is unavailable right now. Please try later or contact us directly.",
    ja: "現在AI提案機能をご利用いただけません。しばらくしてから再度お試しいただくか、お問い合わせをご利用ください。",
  },
  err429: {
    ko: "요청이 많아 잠시 대기 중입니다. 1분 후 다시 시도해 주세요.",
    en: "Too many requests right now. Please try again in a minute.",
    ja: "リクエストが集中しています。1分後に再度お試しください。",
  },
  errLogin: {
    ko: "로그인이 만료되었습니다. 다시 로그인해 주세요.",
    en: "Your session has expired. Please sign in again.",
    ja: "ログインの有効期限が切れました。再度ログインしてください。",
  },
  errGeneric: {
    ko: "AI 답변을 가져오지 못했습니다. 잠시 후 다시 시도해 주세요.",
    en: "Couldn't get an AI answer. Please try again shortly.",
    ja: "AIの回答を取得できませんでした。しばらくしてから再度お試しください。",
  },
  memberNote: {
    ko: "이번 달 남은 이용 횟수: {n} / {limit}회",
    en: "Remaining this month: {n} / {limit}",
    ja: "今月の残り利用回数：{n} / {limit}回",
  },
  unlimitedNote: { ko: "무제한 이용 계정입니다", en: "Unlimited account", ja: "無制限アカウントです" },
  memberUsedTitle: {
    ko: "이번 달 이용 횟수를 모두 사용하셨습니다",
    en: "You've used all of this month's tries",
    ja: "今月の利用回数をすべて使用しました",
  },
  memberUsed: {
    ko: "회원은 매월 {limit}회까지 이용하실 수 있으며, 다음 달 1일에 다시 채워집니다. 더 자세한 상담이 필요하시면 문의하기를 이용해 주세요.",
    en: "Members can use it {limit} times a month; it resets on the 1st. For more help, please contact us.",
    ja: "会員は毎月{limit}回までご利用いただけ、翌月1日にリセットされます。詳しいご相談はお問い合わせをご利用ください。",
  },
};

const EXAMPLES: Record<Lang, string[]> = {
  ko: [
    "투명 에폭시 코팅에 흐름 방지(요변성)와 침강 방지 효과가 필요해요",
    "반도체 EMC에 고충전용 필러를 찾고 있어요. 저방사선이 중요합니다",
    "수성 목재 도료를 무광(소광) 처리하고 싶어요",
    "분말 식품 원료의 고결(뭉침)을 방지하고 싶어요",
    "실리콘 고무의 인장강도를 보강하고 싶어요",
  ],
  en: [
    "Anti-sag and anti-settling for a clear epoxy coating",
    "High-loading filler for semiconductor EMC; low alpha matters",
    "Matting a water-based wood coating",
    "Preventing caking of a powdered food ingredient",
    "Reinforcing the tensile strength of silicone rubber",
  ],
  ja: [
    "透明エポキシ塗料のタレ防止と沈降防止",
    "半導体EMC用の高充填フィラー（低α線が重要）",
    "水性木工塗料の艶消し",
    "粉末食品原料の固結防止",
    "シリコーンゴムの引張強度の補強",
  ],
};

const md = {
  h2: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-3 mt-8 flex items-center gap-2 text-lg font-bold text-foreground first:mt-0 before:h-5 before:w-1 before:rounded-full before:bg-primary" {...p} />
  ),
  h3: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h4 className="mb-2 mt-5 font-bold text-foreground" {...p} />,
  p: (p: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mb-3 leading-relaxed text-muted-foreground" {...p} />,
  ul: (p: React.HTMLAttributes<HTMLUListElement>) => <ul className="mb-4 space-y-2 pl-1" {...p} />,
  ol: (p: React.HTMLAttributes<HTMLOListElement>) => <ol className="mb-4 list-decimal space-y-2 pl-5 text-muted-foreground" {...p} />,
  li: ({ children, ...p }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="flex gap-2.5 leading-relaxed text-muted-foreground" {...p}>
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
      <span className="min-w-0 flex-1">{children}</span>
    </li>
  ),
  strong: (p: React.HTMLAttributes<HTMLElement>) => <strong className="font-semibold text-foreground" {...p} />,
  table: (p: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="mb-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm" {...p} />
    </div>
  ),
  th: (p: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="border-b border-border bg-secondary/60 px-3 py-2 text-left font-semibold text-foreground" {...p} />
  ),
  td: (p: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-border px-3 py-2 align-top text-muted-foreground" {...p} />
  ),
};

/** Splits the streamed text into the analysis, the recommendation JSON and an optional error. */
const parseStream = (raw: string) => {
  let rest = raw;
  let error: { status: number; message: string } | null = null;
  const ei = rest.indexOf(ERR);
  if (ei >= 0) {
    try {
      error = JSON.parse(rest.slice(ei + ERR.length).trim());
    } catch {
      error = { status: 500, message: "" };
    }
    rest = rest.slice(0, ei);
  }
  const ri = rest.indexOf(REC);
  const analysis = (ri >= 0 ? rest.slice(0, ri) : rest).replace(/\[\[R[A-Z]*\]?$/, "").trim();
  let recs: Rec[] | null = null;
  if (ri >= 0) {
    const jsonPart = rest.slice(ri + REC.length).trim().replace(/^```(json)?|```$/g, "").trim();
    try {
      const v = JSON.parse(jsonPart);
      if (Array.isArray(v)) recs = v.filter((x) => x && typeof x.slug === "string");
    } catch {
      /* still streaming */
    }
  }
  return { analysis, recs, hasRecMarker: ri >= 0, error };
};

const ProductFinder = () => {
  const { lang } = useLang();
  const hidden = useHiddenSlugs();
  const { session, profileComplete, getToken, loading: memberLoading } = useMember();
  const needsProfile = Boolean(session && !profileComplete);
  const [quota, setQuota] = useState<Quota | null>(null);
  const [query, setQuery] = useState("");
  const [raw, setRaw] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const abortRef = useRef<AbortController | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const tx = (k: string) => TXT[k][lang];
  const outOfTries = Boolean(quota && !quota.unlimited && quota.remaining <= 0);

  const loadQuota = useCallback(async () => {
    const memberToken = (await getToken()) ?? undefined;
    if (!memberToken) return; // visitors see the sign-up notice instead
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: ANON, Authorization: `Bearer ${ANON}` },
        body: JSON.stringify({ mode: "quota", memberToken }),
      });
      if (res.ok) setQuota(await res.json());
    } catch {
      /* the server re-checks on every request */
    }
  }, [getToken]);

  const sessionId = session?.user?.id ?? null;
  useEffect(() => {
    if (memberLoading) return;
    setQuota(null);
    loadQuota();
  }, [memberLoading, sessionId, loadQuota]);

  const { analysis, recs, hasRecMarker, error } = useMemo(() => parseStream(raw), [raw]);

  const products = useMemo(() => {
    if (!recs) return [];
    const seen = new Set<string>();
    return recs
      .map((r) => ({ r, p: productCatalog.find((p) => p.slug === r.slug) }))
      .filter((x): x is { r: Rec; p: (typeof productCatalog)[number] } => {
        if (!x.p || seen.has(x.p.slug) || isProductHidden(hidden, x.p)) return false;
        seen.add(x.p.slug);
        return true;
      })
      .slice(0, 4);
  }, [recs, hidden]);

  const run = async () => {
    const q = query.trim();
    if (q.length < 4) {
      setErrMsg(tx("tooShort"));
      setStatus("error");
      return;
    }
    if (!session || needsProfile || outOfTries) return;
    const memberToken = (await getToken()) ?? undefined;
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;
    setRaw("");
    setErrMsg("");
    setStatus("loading");
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: ANON, Authorization: `Bearer ${ANON}` },
        body: JSON.stringify({ query: q, lang, memberToken }),
        signal: ac.signal,
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 429 && data?.error === "quota_exceeded") {
          setQuota(data as Quota);
          setStatus("idle");
          return;
        }
        setErrMsg(res.status === 401 ? tx("errLogin") : res.status === 429 ? tx("err429") : res.status === 402 || res.status === 403 ? tx("err402") : tx("errGeneric"));
        setStatus("error");
        return;
      }
      // This try now counts; update the remaining number shown.
      setQuota((qt) => (qt && !qt.unlimited ? { ...qt, used: qt.used + 1, remaining: Math.max(0, qt.remaining - 1) } : qt));
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setRaw(acc);
      }
      const parsed = parseStream(acc);
      if (parsed.error) {
        const s = parsed.error.status;
        setErrMsg(s === 429 ? tx("err429") : s === 402 || s === 403 ? tx("err402") : tx("errGeneric"));
        setStatus(parsed.analysis ? "done" : "error");
        loadQuota(); // failed answers don't count
        return;
      }
      setStatus("done");
    } catch (e) {
      if ((e as Error).name === "AbortError") {
        setStatus(raw ? "done" : "idle");
        return;
      }
      setErrMsg(tx("errGeneric"));
      setStatus("error");
    }
  };

  const stop = () => {
    abortRef.current?.abort();
    setStatus("done");
  };

  const reset = () => {
    abortRef.current?.abort();
    setRaw("");
    setStatus("idle");
    setErrMsg("");
  };

  const loading = status === "loading";
  const showResult = loading || analysis || (status === "error" && errMsg && raw);

  return (
    <div className="space-y-8">
      {/* Input */}
      <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card p-6 shadow-sm md:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <label htmlFor="finder-query" className="mb-2 block text-sm font-semibold text-foreground">
            {tx("label")}
          </label>
          <Textarea
            id="finder-query"
            value={query}
            onChange={(e) => setQuery(e.target.value.slice(0, 2000))}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !loading) run();
            }}
            placeholder={tx("placeholder")}
            rows={5}
            className="resize-y bg-background text-[15px] leading-relaxed"
            disabled={loading}
          />
          <div className="mt-1 text-right text-xs text-muted-foreground">{query.length} / 2000</div>

          <div className="mt-3">
            <p className="mb-2 text-xs font-semibold text-muted-foreground">{tx("examples")}</p>
            <div className="flex flex-wrap gap-2">
              {EXAMPLES[lang].map((ex) => (
                <button
                  key={ex}
                  type="button"
                  disabled={loading}
                  onClick={() => setQuery(ex)}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-left text-xs text-foreground transition hover:border-primary/50 hover:bg-primary/5 disabled:opacity-50"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>

          {!memberLoading && !session ? (
            <MemberGate messageKey="gateFinderUsed" className="mt-6" />
          ) : needsProfile ? (
            <MemberGate messageKey="gateFinder" className="mt-6" />
          ) : outOfTries && !loading ? (
            <div role="status" className="mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-6 text-center">
              <p className="font-semibold text-foreground">{tx("memberUsedTitle")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{tx("memberUsed").replace("{limit}", String(quota?.limit ?? 10))}</p>
              <Button asChild className="mt-4">
                <Link to="/#contact">{tx("cta")}</Link>
              </Button>
            </div>
          ) : (
          <div className="mt-6 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              {loading ? (
                <Button type="button" variant="outline" onClick={stop} className="gap-2">
                  <Square className="h-4 w-4" />
                  {tx("stop")}
                </Button>
              ) : (
                <Button type="button" size="lg" onClick={run} className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  {tx("submit")}
                </Button>
              )}
              {(analysis || status === "error") && !loading && (
                <Button type="button" variant="ghost" onClick={reset} className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  {tx("reset")}
                </Button>
              )}
              <span className="text-xs text-muted-foreground">{tx("disclaimer")}</span>
            </div>
            {quota && (
              <p className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                {quota.unlimited ? (
                  <>
                    <InfinityIcon className="h-3.5 w-3.5" />
                    {tx("unlimitedNote")}
                  </>
                ) : (
                  tx("memberNote").replace("{n}", String(quota.remaining)).replace("{limit}", String(quota.limit))
                )}
              </p>
            )}
          </div>
          )}

          {status === "error" && errMsg && !raw && (
            <p role="alert" className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              {errMsg}
            </p>
          )}
        </div>
      </div>

      {/* Result */}
      <div ref={resultRef} className="scroll-mt-28">
        {showResult && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8" aria-live="polite">
              <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                <div>
                  <h2 className="text-lg font-bold text-foreground">{tx("step1")}</h2>
                  <p className="text-xs text-muted-foreground">{tx("step1sub")}</p>
                </div>
              </div>
              {analysis ? (
                <div className="text-[15px]">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>{analysis}</ReactMarkdown>
                  {loading && !hasRecMarker && <span className="inline-block h-4 w-2 animate-pulse bg-primary/60 align-middle" />}
                </div>
              ) : (
                <div className="flex items-center gap-3 py-6 text-sm text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  {tx("thinking")}
                </div>
              )}
              {errMsg && raw && (
                <p role="alert" className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                  {errMsg}
                </p>
              )}
            </section>

            {(hasRecMarker || status === "done") && !error && (
              <section className="rounded-3xl border border-primary/25 bg-primary/5 p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">{tx("step2")}</h2>
                    <p className="text-xs text-muted-foreground">{tx("step2sub")}</p>
                  </div>
                </div>

                {loading && !recs ? (
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    {tx("picking")}
                  </div>
                ) : products.length === 0 ? (
                  <p className="text-sm text-muted-foreground">{tx("none")}</p>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {products.map(({ r, p }, i) => (
                      <Link
                        key={p.slug}
                        to={`/products/${p.slug}/`}
                        className="group flex gap-4 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
                      >
                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-secondary">
                          <img
                            src={p.image}
                            alt={silicaAlt(pick(lang, p.name, p.enName, p.jaName))}
                            loading="lazy"
                            className="h-full w-full object-cover transition group-hover:scale-105"
                          />
                          {i === 0 && (
                            <span className="absolute left-1.5 top-1.5 rounded-md bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                              BEST
                            </span>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="line-clamp-1 font-bold text-foreground">{pick(lang, p.name, p.enName, p.jaName)}</p>
                          <p className="mb-2 line-clamp-1 text-xs text-muted-foreground">
                            {pick(lang, p.tagline, p.enTagline, p.jaTagline)}
                          </p>
                          <p className="line-clamp-3 text-sm leading-snug text-foreground/80">{r.reason}</p>
                          <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                            {tx("view")}
                            <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            )}

            {status === "done" && (
              <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center">
                <div>
                  <p className="font-semibold text-foreground">{tx("ctaTitle")}</p>
                  <p className="text-sm text-muted-foreground">{tx("ctaDesc")}</p>
                </div>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  {tx("cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFinder;
