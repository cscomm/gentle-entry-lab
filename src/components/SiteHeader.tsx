import { useEffect, useState } from "react";
import { pick } from "@/lib/lang";
import { Link, useNavigate } from "@/lib/router";
import { ChevronDown, Search } from "lucide-react";
import { productCatalog } from "@/data/products";
import { useLang } from "@/contexts/LanguageContext";

const navItems = [
  { key: "nav.home", href: "/" },
  { key: "nav.products", href: "/#products", dropdown: "products" as const },
  { key: "nav.about", href: "/about" },
  { key: "nav.applications", href: "/#applications", dropdown: "applications" as const },
  { key: "nav.board", href: "/board" },
  { key: "nav.contact", href: "/#contact" },
];

interface SiteHeaderProps {
  /** Use transparent style at top of page (only useful when page has a hero behind it). */
  transparentAtTop?: boolean;
}

const SiteHeader = ({ transparentAtTop = false }: SiteHeaderProps) => {
  const [scrolled, setScrolled] = useState(!transparentAtTop);
  const { lang, setLang, t } = useLang();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term = q.trim().toLowerCase();
    if (!term) return;
    const found = productCatalog.find(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.enName.toLowerCase().includes(term) ||
        p.slug.toLowerCase().includes(term)
    );
    navigate(found ? `/products/${found.slug}` : `/#products`);
    setQ("");
  };

  useEffect(() => {
    if (!transparentAtTop) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentAtTop]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/85 border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <Link to="/" className="inline-flex flex-col leading-tight">
          <span
            className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-white drop-shadow"
            }`}
          >
            Si<span className="text-primary-glow">Li</span>CA
          </span>
          <span
            className={`mt-1 block w-full text-center font-medium transition-colors duration-500 ${
              scrolled ? "text-muted-foreground" : "text-white/90 drop-shadow"
            }`}
            style={{ fontSize: "0.62rem", letterSpacing: "0.05em" }}
          >
            {t("nav.tagline")}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const linkClass = `relative inline-flex items-center gap-1 text-[15px] font-semibold tracking-wide transition-colors duration-500 hover:text-primary-glow ${
              scrolled ? "text-foreground/85" : "text-white/95 [text-shadow:_0_1px_2px_rgb(0_0_0_/_45%)]"
            }`;
            const inner = (
              <>
                <span>{t(item.key)}</span>
                {item.dropdown && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </>
            );

            return (
              <div key={item.key} className="group relative">
                <Link to={item.href} className={linkClass}>{inner}</Link>



                {item.dropdown === "products" && (
                  <div className="invisible absolute left-1/2 top-full z-50 max-h-[80vh] w-72 -translate-x-1/2 overflow-y-auto pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-md">
                      {[
                        { to: "/products/fused-silica/", ko: "용융실리카", en: "Fused Silica", ja: "溶融シリカ" },
                        { to: "/products/crystalline-silica/", ko: "쿼츠 · 결정질 실리카", en: "Quartz · Crystalline Silica", ja: "クォーツ・結晶質シリカ" },
                        { to: "/products/surface-modified-silica-powder/", ko: "표면개질 실리카 분말", en: "Surface-Modified Silica Powder", ja: "表面改質シリカ粉末" },
                        { to: "/products/spherical-silica-powder/", ko: "구상 실리카 분말", en: "Spherical Silica Powder", ja: "球状シリカ粉末" },
                        { to: "/products/round-corner-silica-powder/", ko: "모서리 라운드 실리카 분말", en: "Round Corner Silica Powder", ja: "丸角シリカ粉末" },
                        { to: "/products/angular-silica-powder/", ko: "각상 실리카 분말", en: "Angular Silica Powder", ja: "角形シリカ粉末" },
                        { to: "/products/low-radiation-silica-powder/", ko: "저방사선 실리카 분말", en: "Low-Alpha Silica Powder", ja: "低α線シリカ粉末" },
                        { to: "/products/lead-free-glass-powder/", ko: "무연유리분말", en: "Lead-Free Glass Powder", ja: "無鉛ガラス粉末" },
                        { to: "/products/precipitated-silica/", ko: "침전 실리카", en: "Precipitated Silica", ja: "沈降シリカ" },
                        { to: "/products/fumed-silica/", ko: "흄드 실리카", en: "Fumed Silica", ja: "ヒュームドシリカ" },
                        { to: "/products/silica-gel/", ko: "실리카겔", en: "Silica Gel", ja: "シリカゲル" },
                        { to: "/products/silica-sol/", ko: "실리카졸", en: "Silica Sol (Colloidal Silica)", ja: "シリカゾル" },
                        { to: "/products/silica-sand/", ko: "규사", en: "Silica Sand", ja: "珪砂" },
                        { to: "/products/silica-powder/", ko: "규사분말", en: "Silica Powder", ja: "珪砂粉末" },
                        { to: "/products/high-purity-quartz/", ko: "천연 고순도규석", en: "Natural High-Purity Quartz", ja: "天然高純度石英" },
                        { to: "/products/applied-silica-materials/", ko: "실리카 응용 · 연관 소재", en: "Applied & Related Silica Materials", ja: "シリカ応用・関連素材" },
                      ].map((it, idx, arr) => (

                        <Link
                          key={it.to}
                          to={it.to}
                          className={`block px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow ${idx < arr.length - 1 ? "border-b border-border/60" : ""}`}
                        >
                          <div className="font-semibold">{lang === "ja" ? it.ja : lang === "en" ? it.en : it.ko}</div>
                          {lang === "ko" && (
                            <div className="mt-0.5 text-xs text-muted-foreground">{it.en}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}



                {item.dropdown === "applications" && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-md">
                      <Link
                        to="/applications/fused-silica/"
                        className="block border-b border-border/60 px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow"
                      >
                        <div className="font-semibold">{lang === "ja" ? "溶融シリカ" : lang === "en" ? "Fused Silica" : "용융실리카"}</div>
                        {lang === "ko" && (
                          <div className="mt-0.5 text-xs text-muted-foreground">Fused Silica</div>
                        )}
                      </Link>
                      <Link
                        to="/applications/quartz/"
                        className="block border-b border-border/60 px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow"
                      >
                        <div className="font-semibold">{lang === "ja" ? "クォーツ・結晶質シリカ" : lang === "en" ? "Quartz · Crystalline Silica" : "쿼츠 · 결정질 실리카"}</div>
                        {lang === "ko" && (
                          <div className="mt-0.5 text-xs text-muted-foreground">Quartz · Crystalline Silica</div>
                        )}
                      </Link>
                      {productCatalog
                        .filter((p) => (p.category ?? "quartz") === "quartz" && !["high-purity-quartz", "silica-sand", "silica-powder", "fused-silica-a-grade", "fused-silica-b-grade", "fused-silica-c-grade", "silica-sol", "sl-ja25", "sl-ja30", "sl-shs"].includes(p.slug))
                        .map((p) => (
                          <Link
                            key={p.slug}
                            to={`/products/${p.slug}/#applications`}

                            className="block border-b border-border/60 px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow"
                          >
                            <div className="font-semibold">{pick(lang, p.name, p.enName, p.jaName)}</div>
                            {lang === "ko" && (
                              <div className="mt-0.5 text-xs text-muted-foreground">{p.enName}</div>
                            )}
                          </Link>
                        ))}
                      <Link
                        to="/applications/precipitated-silica/"
                        className="block border-b border-border/60 px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow"
                      >
                        <div className="font-semibold">{lang === "ja" ? "沈降/沈殿シリカ" : lang === "en" ? "Precipitated Silica" : "침전/침강 실리카"}</div>
                        {lang === "ko" && (
                          <div className="mt-0.5 text-xs text-muted-foreground">Precipitated Silica</div>
                        )}
                      </Link>
                      <Link
                        to="/applications/fumed-silica/"
                        className="block border-b border-border/60 px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow"
                      >
                        <div className="font-semibold">{lang === "ja" ? "ヒュームドシリカ" : lang === "en" ? "Fumed Silica" : "흄드 실리카"}</div>
                        {lang === "ko" && (
                          <div className="mt-0.5 text-xs text-muted-foreground">Fumed Silica</div>
                        )}
                      </Link>
                      <Link
                        to="/applications/silica-gel/"
                        className="block border-b border-border/60 px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow"
                      >
                        <div className="font-semibold">{lang === "ja" ? "シリカゲル" : lang === "en" ? "Silica Gel" : "실리카겔"}</div>
                        {lang === "ko" && (
                          <div className="mt-0.5 text-xs text-muted-foreground">Silica Gel</div>
                        )}
                      </Link>
                      <Link
                        to="/applications/silica-sol/"
                        className="block border-b border-border/60 px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow"
                      >
                        <div className="font-semibold">{lang === "ja" ? "コロイダルシリカ シリーズ" : lang === "en" ? "Colloidal Silica Series" : "콜로이달 실리카 시리즈"}</div>
                        {lang === "ko" && (
                          <div className="mt-0.5 text-xs text-muted-foreground">Colloidal Silica / Silica Sol</div>
                        )}
                      </Link>
                      <Link
                        to="/applications/silica-sand/"
                        className="block border-b border-border/60 px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow"
                      >
                        <div className="font-semibold">{lang === "ja" ? "珪砂・珪砂粉末" : lang === "en" ? "Silica Sand & Powder" : "규사 · 규사분말"}</div>
                        {lang === "ko" && (
                          <div className="mt-0.5 text-xs text-muted-foreground">Silica Sand & Powder</div>
                        )}
                      </Link>
                      <Link
                        to="/products/high-purity-quartz/#applications"
                        className="block px-5 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary-glow"
                      >
                        <div className="font-semibold">{lang === "ja" ? "天然高純度石英" : lang === "en" ? "Natural High-Purity Quartz" : "천연 고순도규석"}</div>
                        {lang === "ko" && (
                          <div className="mt-0.5 text-xs text-muted-foreground">Natural High-Purity Quartz</div>
                        )}
                      </Link>
                    </div>
                  </div>
                )}

              </div>
            );
          })}

          {/* Search */}
          <form onSubmit={onSearch} className="relative hidden lg:block">
            <Search className={`pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 ${scrolled ? "text-muted-foreground" : "text-white/70"}`} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={lang === "ja" ? "検索" : lang === "en" ? "Search" : "검색"}
              className={`h-9 w-40 rounded-full border pl-8 pr-3 text-sm outline-none transition focus:border-primary ${
                scrolled
                  ? "border-border/60 bg-card text-foreground placeholder:text-muted-foreground"
                  : "border-white/30 bg-white/10 text-white placeholder:text-white/70 backdrop-blur"
              }`}
            />
          </form>

          {/* Language toggle */}
          <div className={`flex items-center gap-1 rounded-full border px-1 py-1 text-xs font-bold transition-colors duration-500 ${
            scrolled ? "border-border/60 bg-card" : "border-white/30 bg-white/10 backdrop-blur"
          }`}>
            <button
              onClick={() => setLang("ko")}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "ko"
                  ? "bg-primary text-primary-foreground"
                  : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              }`}
              aria-label="한국어"
            >
              KO
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              }`}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLang("ja")}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "ja"
                  ? "bg-primary text-primary-foreground"
                  : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              }`}
              aria-label="日本語"
            >
              JA
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
