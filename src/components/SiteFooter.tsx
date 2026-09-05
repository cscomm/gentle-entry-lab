import { Link, useLocation } from "@/lib/router";
import { useLang } from "@/contexts/LanguageContext";
import { ChevronUp } from "lucide-react";

const SiteFooter = () => {
  const { t, lang } = useLang();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const applicationLinks = [
    {
      to: "/applications/fused-silica/",
      ko: "용융실리카",
      en: "Fused Silica",
      ja: "溶融シリカ",
    },
    {
      to: "/applications/quartz/",
      ko: "쿼츠 · 결정질 실리카",
      en: "Quartz · Crystalline Silica",
      ja: "クォーツ・結晶質シリカ",
    },
    {
      to: "/applications/precipitated-silica/",
      ko: "침전 실리카",
      en: "Precipitated Silica",
      ja: "沈降シリカ",
    },
    {
      to: "/applications/fumed-silica/",
      ko: "흄드 실리카",
      en: "Fumed Silica",
      ja: "ヒュームドシリカ",
    },
    {
      to: "/applications/silica-gel/",
      ko: "실리카겔",
      en: "Silica Gel",
      ja: "シリカゲル",
    },
    {
      to: "/applications/silica-sol/",
      ko: "콜로이달 실리카 시리즈",
      en: "Colloidal Silica Series",
      ja: "コロイダルシリカシリーズ",
    },
    {
      to: "/applications/silica-sand/",
      ko: "규사 · 규사분말",
      en: "Silica Sand & Powder",
      ja: "珪砂・珪砂粉末",
    },
  ];

  const navItems = [
    { label: t("nav.home"), to: "/#home", external: true },
    { label: t("nav.products"), to: "/#products", external: true },
    { label: t("nav.about"), to: "/about", external: false },
    { label: t("nav.applications"), dropdown: true },
    { label: t("nav.board"), to: "/board", external: false },
    { label: t("nav.contact"), to: "/#contact", external: true },
  ];

  const renderNavItem = (item: typeof navItems[number]) => {
    if (item.dropdown) {
      return (
        <div key={item.label} className="group relative inline-flex">
          <button
            type="button"
            className="inline-flex items-center gap-1 transition hover:text-primary-glow"
            aria-expanded="false"
            aria-haspopup="true"
          >
            {item.label}
            <ChevronUp className="h-3.5 w-3.5 opacity-70" />
          </button>
          <div className="invisible absolute bottom-full left-1/2 z-50 mb-3 w-56 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
            <div className="overflow-hidden rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-md">
              {applicationLinks.map((link, idx, arr) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow ${
                    idx < arr.length - 1 ? "border-b border-border/60" : ""
                  }`}
                >
                  <div className="font-semibold">
                    {lang === "ja" ? link.ja : lang === "en" ? link.en : link.ko}
                  </div>
                  {lang === "ko" && (
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {link.en}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.label}
        to={item.to}
        className="transition hover:text-primary-glow"
      >
        {item.label}
      </Link>
    );
  };

  // Compact footer for non-home pages (About, ProductDetail, etc.)
  if (!isHome) {
    return (
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          {/* Left: brand + inline nav */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight">
                Si<span className="text-primary-glow">Li</span>CA
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {t("nav.tagline")} · 실리카
              </span>
            </div>
            <nav className="flex flex-wrap items-center gap-x-5 text-sm font-medium text-foreground/80">
              {navItems.map((item) => renderNavItem(item))}
            </nav>
          </div>

          {/* Right: legal line */}
          <div className="text-xs text-muted-foreground">
            <span className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <Link to="/terms/" className="hover:text-primary-glow">이용약관</Link>
              <span className="opacity-30">|</span>
              <Link to="/privacy/" className="hover:text-primary-glow">개인정보처리방침</Link>
              <span className="opacity-30">|</span>
              <a href="mailto:contact@silica.co.kr" className="hover:text-primary-glow">contact@silica.co.kr</a>
              <span className="opacity-30">|</span>
              <span>전북특별자치도 진안군 동향면 동계로 328 주식회사비에이알</span>
              <span className="opacity-30">|</span>
              <span>© 2023 SiLiCA. All rights reserved.</span>
            </span>
          </div>
        </div>
      </footer>
    );
  }

  // Home: keep centered, fuller footer
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 text-center">
        <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
          <span className="text-3xl font-bold tracking-tight">
            Si<span className="text-primary-glow">Li</span>CA
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            {t("nav.tagline")} · 실리카
          </span>
        </div>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-foreground/80">
          {navItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-x-8">
              {renderNavItem(item)}
              {i < navItems.length - 1 && (
                <span className="text-border" aria-hidden="true">|</span>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          <span className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <Link to="/terms/" className="hover:text-primary-glow">이용약관</Link>
            <span className="opacity-30">|</span>
            <Link to="/privacy/" className="hover:text-primary-glow">개인정보처리방침</Link>
            <span className="opacity-30">|</span>
            <a href="mailto:contact@silica.co.kr" className="hover:text-primary-glow">contact@silica.co.kr</a>
            <span className="opacity-30">|</span>
            <span>전북특별자치도 진안군 동향면 동계로 328 주식회사비에이알</span>
            <span className="opacity-30">|</span>
            <span>© 2023 SiLiCA. All rights reserved.</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
