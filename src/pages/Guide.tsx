import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { BookOpen, HelpCircle, MessagesSquare, Wand2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FaqSection from "@/components/guide/FaqSection";
import BoardSection from "@/components/guide/BoardSection";
import ProductFinder from "@/components/guide/ProductFinder";
import { Navigate } from "@/lib/router";
import { withLang } from "@/lib/i18nRouting";
import { useLang } from "@/contexts/LanguageContext";

export type GuideSection = "faq" | "board" | "finder";
type L = Record<"ko" | "en" | "ja", string>;

/** Each user-guide section is its own page (like products / applications). */
export const GUIDE_SECTIONS: Record<GuideSection, { to: string; icon: typeof HelpCircle; label: L; eyebrow: string; intro: L; title: L }> = {
  faq: {
    to: "/guide/faq/",
    icon: HelpCircle,
    eyebrow: "FAQ",
    label: { ko: "FAQ", en: "FAQ", ja: "FAQ" },
    intro: {
      ko: "샘플, 주문·납기, 통관·수출입, 품질·기술지원에 관해 자주 묻는 질문을 모았습니다.",
      en: "Frequently asked questions on samples, orders & lead times, customs & trade, and quality & technical support.",
      ja: "サンプル、注文・納期、通関・輸出入、品質・技術サポートに関するよくあるご質問です。",
    },
    title: { ko: "사용가이드 · FAQ | SILICA", en: "User Guide · FAQ | SILICA", ja: "ご利用ガイド・FAQ | SILICA" },
  },
  board: {
    to: "/board/",
    icon: MessagesSquare,
    eyebrow: "BOARD",
    label: { ko: "게시판", en: "Board", ja: "掲示板" },
    intro: {
      ko: "공지사항, 업계 소식, 실리카 소재 관련 기술 정보를 공유합니다.",
      en: "Announcements, industry news and technical notes on silica materials.",
      ja: "お知らせ、業界ニュース、シリカ素材に関する技術情報を共有します。",
    },
    title: { ko: "사용가이드 · 게시판 | SILICA", en: "User Guide · Board | SILICA", ja: "ご利用ガイド・掲示板 | SILICA" },
  },
  finder: {
    to: "/guide/finder/",
    icon: Wand2,
    eyebrow: "AI PRODUCT FINDER",
    label: { ko: "나에게 적합한 제품은?", en: "Find My Product", ja: "私に合う製品は？" },
    intro: {
      ko: "사용 용도나 원하는 효과를 적어 주시면, AI가 적합한 소재를 제안하고 사이트에서 가장 가까운 제품을 추천합니다.",
      en: "Describe your application or the effect you need — the AI suggests suitable materials and our closest matching products.",
      ja: "用途や求める効果をご記入いただくと、AIが適した素材を提案し、当サイトで最も近い製品をおすすめします。",
    },
    title: {
      ko: "나에게 적합한 실리카 제품은? AI 추천 | SILICA",
      en: "Find the Right Silica Product — AI Advisor | SILICA",
      ja: "私に合うシリカ製品は？AIレコメンド | SILICA",
    },
  },
};

const Guide = ({ section = "faq" }: { section?: GuideSection }) => {
  const { lang } = useLang();
  const { pathname } = useLocation();
  const meta = GUIDE_SECTIONS[section];
  const Icon = meta.icon;

  useEffect(() => {
    document.title = meta.title[lang];
  }, [meta, lang, pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pb-20 pt-32">
        <section className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-bold tracking-widest text-primary">
              <BookOpen className="h-3.5 w-3.5" />
              USER GUIDE · {meta.eyebrow}
            </div>
            <h1 className="flex items-center gap-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground md:h-12 md:w-12">
                <Icon className="h-6 w-6" />
              </span>
              {meta.label[lang]}
            </h1>
            <p className="mt-3 text-muted-foreground">{meta.intro[lang]}</p>
          </div>

          {section === "faq" && <FaqSection />}
          {section === "board" && <BoardSection />}
          {section === "finder" && <ProductFinder />}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

/** Old single-page URL (/guide?tab=…) → the matching separate page. */
export const GuideRedirect = () => {
  const [params] = useSearchParams();
  const { lang } = useLang();
  const tab = params.get("tab");
  const target = tab === "finder" ? GUIDE_SECTIONS.finder.to : tab === "board" ? GUIDE_SECTIONS.board.to : GUIDE_SECTIONS.faq.to;
  return <Navigate to={withLang(lang, target)} replace />;
};

export default Guide;
