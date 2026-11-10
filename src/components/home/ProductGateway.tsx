import { useEffect, useMemo, useState } from "react";
import { Link } from "@/lib/router";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { categories } from "@/components/ProductCategoryBar";
import { productCatalog } from "@/data/products";
import { useHiddenSlugs } from "@/lib/productVisibility";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";
import bg from "@/assets/logistics-port.png.asset.json";
import { Button } from "@/components/ui/button";

interface Props {
  showAll: boolean;
  onToggleAll: () => void;
}

const ProductGateway = ({ showAll, onToggleAll }: Props) => {
  const { lang } = useLang();
  const hidden = useHiddenSlugs();

  const items = useMemo(
    () =>
      categories
        .filter((c) => c.label !== "전체 제품")
        .map((c) => {
          const slug = c.slug ?? c.href?.split("/").filter(Boolean).pop() ?? "";
          const p = productCatalog.find((x) => x.slug === slug);
          return { ...c, key: slug, href: c.href ?? `/products/${slug}/`, image: p?.image };
        })
        .filter((c) => !hidden.has(c.key)),
    [hidden]
  );

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length || 1;
  const next = () => setIdx((i) => (i + 1) % n);
  const prev = () => setIdx((i) => (i - 1 + n) % n);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, n]);

  const visible = [0, 1, 2].map((o) => items[(idx + o) % n]).filter(Boolean);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-foreground py-24 text-background md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        src={bg.url}
        alt={pick(lang, "실리카 제품 공급을 위한 항만 물류", "Port logistics for silica product supply", "シリカ製品供給の港湾物流")}
        loading="lazy"
        width={948}
        height={729}
        className="absolute inset-0 block h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center gap-5 pb-4" data-reveal="left">
          <h2 className="text-base font-normal md:text-lg">Product</h2>
          <Button
            variant="ghost"
            type="button"
            onClick={onToggleAll}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 rounded-full border border-background/50 px-5 py-2 text-sm transition hover:bg-background/10"
          >
            {pick(lang, "제품 전체보기", "View All Products", "全製品を見る")}
            {showAll ? <ChevronDown className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>

        <p
          className="mt-10 whitespace-pre-line text-xl font-bold leading-tight tracking-tight md:text-3xl lg:text-[42px] lg:leading-[1.3]"
          data-reveal="left"
        >
          {pick(
            lang,
            "데이터와 경험으로\n최적의 공급망을 구축합니다",
            "Building the Optimal Supply Chain\nwith Data and Experience",
            "データと経験で\n最適なサプライチェーンを築きます"
          )}
        </p>

        <div className="relative mt-10 md:mx-auto md:w-[72%] md:px-14" data-reveal="zoom">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={prev}
            aria-label={pick(lang, "이전 카테고리", "Previous", "前へ")}
            className="absolute left-0 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-background/50 bg-foreground/30 backdrop-blur transition hover:bg-background/15"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={next}
            aria-label={pick(lang, "다음 카테고리", "Next", "次へ")}
            className="absolute right-0 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-background/50 bg-foreground/30 backdrop-blur transition hover:bg-background/15"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>

          <div className="grid gap-4 px-14 md:grid-cols-3 md:px-0">
            {visible.map((c, i) => (
              <Link
                key={`${c.key}-${idx}`}
                to={c.href}
                className={`group animate-fade-in overflow-hidden rounded-xl bg-card/90 text-foreground shadow-lg backdrop-blur ${i > 0 ? "hidden md:block" : ""}`}
              >
                <div className="flex flex-col items-center gap-3 px-4 py-5">
                  <h3 className="text-center text-base font-semibold md:text-lg">{pick(lang, c.label, c.en, c.ja)}</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs transition group-hover:border-primary group-hover:gap-2.5">
                    {pick(lang, "자세히 보기", "Learn More", "詳しく見る")} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  {c.image && (
                    <img
                      src={c.image}
                      alt={pick(lang, c.label, c.en, c.ja)}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-1.5">
            {items.map((c, i) => (
              <Button
                variant="ghost"
                key={c.key}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={pick(lang, c.label, c.en, c.ja)}
                className={`h-1.5 rounded-full p-0 transition-all hover:bg-background/80 ${i === idx ? "w-6 bg-background" : "w-1.5 bg-background/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGateway;
