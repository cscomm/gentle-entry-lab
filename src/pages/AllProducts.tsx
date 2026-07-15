import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "@/lib/router";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCategoryBar from "@/components/ProductCategoryBar";
import { productCatalog } from "@/data/products";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";
import { silicaAlt } from "@/lib/silicaAlt";

const PAGE_SIZE = 24;

const AllProducts = () => {
  const { lang, t } = useLang();
  const location = useLocation();
  const navigate = useNavigate();

  const items = useMemo(
    () => productCatalog.filter((p) => !p.isCategoryIndex),
    []
  );

  const params = new URLSearchParams(location.search);
  const initialPage = Math.max(1, parseInt(params.get("page") || "1", 10) || 1);
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const [page, setPage] = useState(Math.min(initialPage, totalPages));

  const start = (page - 1) * PAGE_SIZE;
  const pageItems = items.slice(start, start + PAGE_SIZE);

  const goTo = (n: number) => {
    const next = Math.min(totalPages, Math.max(1, n));
    setPage(next);
    const sp = new URLSearchParams(location.search);
    if (next === 1) sp.delete("page");
    else sp.set("page", String(next));
    navigate(`${location.pathname}${sp.toString() ? `?${sp.toString()}` : ""}`);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const title = pick(
    lang,
    "전체 제품",
    "All Products",
    "全製品"
  );
  const desc = pick(
    lang,
    "실리원의 전체 실리카 제품 라인업 — 용융실리카, 구상·각상·모서리 라운드·저방사선·표면개질 실리카 분말, 침전·흄드·나노 실리카, 실리카겔, 실리카졸, 규사, 무연유리분말, 천연 고순도 규석까지 한 페이지에서 탐색하세요.",
    "Silione's complete silica lineup — fused silica, spherical / angular / round-corner / low-alpha / surface-modified silica powders, precipitated, fumed and nano silica, silica gel, silica sol, silica sand, lead-free glass powder and natural high-purity quartz — all in one place.",
    "Silione の全シリカ製品ラインアップ — 溶融シリカ、球状・角形・丸角・低α線・表面改質シリカ粉末、沈降・ヒュームド・ナノシリカ、シリカゲル、シリカゾル、珪砂、無鉛ガラス粉末、天然高純度石英まで一覧で。"
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← {t("products.cat")}
          </Link>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            ALL PRODUCTS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">{desc}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {pick(lang, "총", "Total", "合計")} {items.length}
            {pick(lang, "개 제품", " products", " 製品")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-6">
        <ProductCategoryBar />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {pageItems.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}/`}
              className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
            >
              <div className="aspect-square overflow-hidden bg-secondary/40">
                <img
                  src={p.image}
                  alt={silicaAlt(pick(lang, p.name, p.enName, p.jaName))}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold leading-snug line-clamp-2">
                  {pick(lang, p.name, p.enName, p.jaName)}
                </h3>
                {lang === "ko" && (
                  <p className="mt-1 text-[11px] text-muted-foreground line-clamp-1">{p.enName}</p>
                )}
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                  {pick(lang, p.tagline, p.enTagline, p.jaTagline)}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary transition group-hover:gap-2">
                  {t("products.detail")} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
            aria-label="Pagination"
          >
            <button
              onClick={() => goTo(page - 1)}
              disabled={page <= 1}
              className="inline-flex h-9 items-center gap-1 rounded-full border border-border bg-card px-3 text-xs text-muted-foreground transition hover:border-primary hover:text-foreground disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              {pick(lang, "이전", "Prev", "前へ")}
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goTo(n)}
                aria-current={n === page ? "page" : undefined}
                className={`h-9 min-w-9 rounded-full border px-3 text-xs transition ${
                  n === page
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => goTo(page + 1)}
              disabled={page >= totalPages}
              className="inline-flex h-9 items-center gap-1 rounded-full border border-border bg-card px-3 text-xs text-muted-foreground transition hover:border-primary hover:text-foreground disabled:opacity-40"
            >
              {pick(lang, "다음", "Next", "次へ")}
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}
      </section>

      <SiteFooter />
    </div>
  );
};

export default AllProducts;
