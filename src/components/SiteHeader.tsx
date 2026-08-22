import { useEffect, useRef, useState } from "react";
import { pick } from "@/lib/lang";
import { Link, useNavigate, useLocation } from "@/lib/router";
import { ChevronDown, Search, Menu, X, ArrowRight } from "lucide-react";
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

const productMenu = [
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
];

const applicationMenu = [
  { to: "/applications/fused-silica/", ko: "용융실리카", en: "Fused Silica", ja: "溶融シリカ" },
  { to: "/applications/quartz/", ko: "쿼츠 · 결정질 실리카", en: "Quartz · Crystalline Silica", ja: "クォーツ・結晶質シリカ" },
  { to: "/applications/precipitated-silica/", ko: "침전/침강 실리카", en: "Precipitated Silica", ja: "沈降/沈殿シリカ" },
  { to: "/applications/fumed-silica/", ko: "흄드 실리카", en: "Fumed Silica", ja: "ヒュームドシリカ" },
  { to: "/applications/silica-gel/", ko: "실리카겔", en: "Silica Gel", ja: "シリカゲル" },
  { to: "/applications/silica-sol/", ko: "콜로이달 실리카 시리즈", en: "Colloidal Silica Series", ja: "コロイダルシリカ シリーズ" },
  { to: "/applications/silica-sand/", ko: "규사 · 규사분말", en: "Silica Sand & Powder", ja: "珪砂・珪砂粉末" },
  { to: "/products/high-purity-quartz/#applications", ko: "천연 고순도규석", en: "Natural High-Purity Quartz", ja: "天然高純度石英" },
];


interface SiteHeaderProps {
  /** Use transparent style at top of page (only useful when page has a hero behind it). */
  transparentAtTop?: boolean;
}

const SiteHeader = ({ transparentAtTop = false }: SiteHeaderProps) => {
  const [scrolled, setScrolled] = useState(!transparentAtTop);
  const { lang, setLang, t } = useLang();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [q, setQ] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<"products" | "applications" | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<"products" | "applications" | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSearchOpen(false);
    setActiveDropdown(null);
  }, [pathname]);


  const openDropdown = (dropdown: "products" | "applications") => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(dropdown);
  };

  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };


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
    setMobileSearchOpen(false);
    setMobileOpen(false);
    setActiveDropdown(null);
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

  const dropdownItems = activeDropdown === "products" ? productMenu : applicationMenu;
  const dropdownAllHref = activeDropdown === "products" ? "/products/all" : "/#applications";
  const dropdownAllLabel = activeDropdown === "products" ? t("products.all") : t("applications.all");

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
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.dropdown && openDropdown(item.dropdown)}
                onMouseLeave={closeDropdown}
              >
                <Link to={item.href} className={linkClass}>{inner}</Link>
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

        {/* Mobile actions */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={() => { setMobileSearchOpen((v) => !v); setMobileOpen(false); }}
            aria-label={lang === "ja" ? "検索" : lang === "en" ? "Search" : "검색"}
            aria-expanded={mobileSearchOpen}
            className={`rounded-full p-2 transition ${scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/15"}`}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => { setMobileOpen((v) => !v); setMobileSearchOpen(false); }}
            aria-label={lang === "ja" ? "メニュー" : lang === "en" ? "Menu" : "메뉴"}
            aria-expanded={mobileOpen}
            className={`rounded-full p-2 transition ${scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/15"}`}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      {mobileSearchOpen && (
        <div className="border-t border-border/60 bg-background/95 px-6 py-3 backdrop-blur-md md:hidden">
          <form onSubmit={onSearch} className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={lang === "ja" ? "製品を検索" : lang === "en" ? "Search products" : "제품 검색"}
              className="h-10 w-full rounded-full border border-border/60 bg-card pl-9 pr-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
            />
          </form>
        </div>
      )}

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border/60 bg-background/97 backdrop-blur-md md:hidden">
          <nav className="px-4 py-3">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.key} className="border-b border-border/50">
                  <button
                    onClick={() => setOpenGroup(openGroup === item.dropdown ? null : item.dropdown!)}
                    className="flex w-full items-center justify-between px-2 py-3.5 text-[15px] font-semibold text-foreground"
                    aria-expanded={openGroup === item.dropdown}
                  >
                    <span>{t(item.key)}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openGroup === item.dropdown ? "rotate-180" : ""}`} />
                  </button>
                  {openGroup === item.dropdown && (
                    <div className="pb-2">
                      {(item.dropdown === "products" ? productMenu : applicationMenu).map((it) => (
                        <Link
                          key={it.to}
                          to={it.to}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-primary-glow"
                        >
                          {pick(lang, it.ko, it.en, it.ja)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-border/50 px-2 py-3.5 text-[15px] font-semibold text-foreground transition hover:text-primary-glow"
                >
                  {t(item.key)}
                </Link>
              )
            )}

            <div className="flex items-center gap-1 px-2 py-4">
              {(["ko", "en", "ja"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                    lang === l ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Full-width mega dropdown */}
      {activeDropdown && (
        <div
          className="hidden absolute left-0 right-0 top-full z-50 border-b border-border bg-background shadow-2xl md:block"
          onMouseEnter={() => activeDropdown && openDropdown(activeDropdown)}
          onMouseLeave={closeDropdown}
        >
          <div className="mx-auto max-w-7xl px-6 py-6 md:px-8">
            <div className="mb-5 border-b border-border/60 pb-3">
              <Link
                to={dropdownAllHref}
                onClick={() => setActiveDropdown(null)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-glow"
              >
                {dropdownAllLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4">
              {dropdownItems.map((it) => (
                <Link
                  key={it.to}
                  to={it.to}
                  onClick={() => setActiveDropdown(null)}
                  className="group/item flex flex-col rounded-lg px-4 py-3 transition hover:bg-secondary"
                >
                  <span className="font-semibold text-foreground transition group-hover/item:text-primary-glow">
                    {pick(lang, it.ko, it.en, it.ja)}
                  </span>
                  {lang === "ko" && (
                    <span className="mt-0.5 text-xs text-muted-foreground">{it.en}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>

  );
};

export default SiteHeader;
