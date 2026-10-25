import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { BookOpen, HelpCircle, MessagesSquare, Wand2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FaqSection from "@/components/guide/FaqSection";
import BoardSection from "@/components/guide/BoardSection";
import ProductFinder from "@/components/guide/ProductFinder";
import { useLang } from "@/contexts/LanguageContext";

type Tab = "faq" | "board" | "finder";
const TABS: { key: Tab; icon: typeof HelpCircle; label: Record<"ko" | "en" | "ja", string>; desc: Record<"ko" | "en" | "ja", string> }[] = [
  {
    key: "faq",
    icon: HelpCircle,
    label: { ko: "FAQ", en: "FAQ", ja: "FAQ" },
    desc: { ko: "자주 묻는 질문", en: "Frequently asked", ja: "よくあるご質問" },
  },
  {
    key: "board",
    icon: MessagesSquare,
    label: { ko: "게시판", en: "Board", ja: "掲示板" },
    desc: { ko: "공지 · 기술 정보", en: "News & tech notes", ja: "お知らせ・技術情報" },
  },
  {
    key: "finder",
    icon: Wand2,
    label: { ko: "나에게 적합한 제품은?", en: "Find my product", ja: "私に合う製品は？" },
    desc: { ko: "AI 소재 추천", en: "AI material advisor", ja: "AI素材レコメンド" },
  },
];

const isTab = (v: string | null): v is Tab => v === "faq" || v === "board" || v === "finder";

const Guide = ({ defaultTab = "faq" }: { defaultTab?: Tab }) => {
  const { lang } = useLang();
  const [params, setParams] = useSearchParams();
  const { pathname } = useLocation();
  const qp = params.get("tab");
  const tab: Tab = isTab(qp) ? qp : defaultTab;

  useEffect(() => {
    const titles: Record<Tab, Record<"ko" | "en" | "ja", string>> = {
      faq: { ko: "사용가이드 · FAQ | SILICA", en: "User Guide · FAQ | SILICA", ja: "ご利用ガイド・FAQ | SILICA" },
      board: { ko: "사용가이드 · 게시판 | SILICA", en: "User Guide · Board | SILICA", ja: "ご利用ガイド・掲示板 | SILICA" },
      finder: {
        ko: "나에게 적합한 실리카 제품은? AI 추천 | SILICA",
        en: "Find the Right Silica Product — AI Advisor | SILICA",
        ja: "私に合うシリカ製品は？AIレコメンド | SILICA",
      },
    };
    document.title = titles[tab][lang];
  }, [tab, lang, pathname]);

  const select = (t: Tab) => {
    const next = new URLSearchParams(params);
    if (t === defaultTab) next.delete("tab");
    else next.set("tab", t);
    setParams(next, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pb-20 pt-32">
        <section className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-bold tracking-widest text-primary">
              <BookOpen className="h-3.5 w-3.5" />
              USER GUIDE
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {{ ko: "사용가이드", en: "User Guide", ja: "ご利用ガイド" }[lang]}
            </h1>
            <p className="mt3 mt-3 text-muted-foreground">
              {{
                ko: "자주 묻는 질문부터 게시판, AI 제품 추천까지 — 필요한 정보를 한 곳에서 찾아보세요.",
                en: "From FAQs to our board and an AI product advisor — everything you need in one place.",
                ja: "よくあるご質問から掲示板、AI製品レコメンドまで — 必要な情報をひとつの場所で。",
              }[lang]}
            </p>
          </div>

          <div role="tablist" aria-label="User guide" className="mb-10 grid grid-cols-3 gap-2 rounded-2xl border border-border bg-secondary/40 p-1.5 md:gap-3 md:p-2">
            {TABS.map(({ key, icon: Icon, label, desc }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  aria-controls={`guide-panel-${key}`}
                  onClick={() => select(key)}
                  className={`flex flex-col items-center gap-1 rounded-xl px-2 py-3 text-center transition md:flex-row md:gap-3 md:px-4 md:text-left ${
                    active ? "bg-card shadow-sm ring-1 ring-primary/30" : "hover:bg-card/60"
                  }`}
                >
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      active ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className={`block text-xs font-bold leading-tight md:text-base ${active ? "text-foreground" : "text-muted-foreground"}`}>
                      {label[lang]}
                    </span>
                    <span className="hidden text-xs text-muted-foreground md:block">{desc[lang]}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div role="tabpanel" id={`guide-panel-${tab}`}>
            {tab === "faq" && <FaqSection />}
            {tab === "board" && <BoardSection />}
            {tab === "finder" && <ProductFinder />}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Guide;
