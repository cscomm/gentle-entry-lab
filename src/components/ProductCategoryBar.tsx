import { useState } from "react";
import { Link, useNavigate } from "@/lib/router";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { productCatalog } from "@/data/products";
import { useLang } from "@/contexts/LanguageContext";

const categories: { label: string; en: string; ja: string; slug?: string; href?: string }[] = [
  { label: "전체 제품", en: "All Products", ja: "全製品", href: "/#products" },
  { label: "구형 실리카 분말", en: "Spherical Silica Powder", ja: "球状シリカ粉末", slug: "spherical-silica-powder" },
  { label: "원각 실리카 분말", en: "Round Corner Silica Powder", ja: "丸角シリカ粉末", slug: "round-corner-silica-powder" },
  { label: "각형 실리카 분말", en: "Angular Silica Powder", ja: "角形シリカ粉末", slug: "angular-silica-powder" },
  { label: "저방사 실리카 분말", en: "Low-Radiation Silica Powder", ja: "低α線シリカ粉末", slug: "low-radiation-silica-powder" },
  { label: "활성 실리카 분말", en: "Surface-Modified Silica Powder", ja: "活性シリカ粉末", slug: "surface-modified-silica-powder" },
  { label: "실리카 사·입자", en: "Silica Sand & Granule", ja: "シリカサンド・粒", slug: "silica-sand-granule" },
  { label: "A등급 용융실리카", en: "Grade A Fused Silica", ja: "Aグレード溶融シリカ", slug: "fused-silica-a-grade" },
  { label: "B등급 용융실리카", en: "Grade B Fused Silica", ja: "Bグレード溶融シリカ", slug: "fused-silica-b-grade" },
  { label: "C등급 용융실리카", en: "Grade C Fused Silica", ja: "Cグレード溶融シリカ", slug: "fused-silica-c-grade" },
  { label: "침전 실리카", en: "Precipitated Silica", ja: "沈降シリカ", href: "/products/precipitated-silica" },
  { label: "흄드 실리카", en: "Fumed Silica", ja: "ヒュームドシリカ", href: "/products/fumed-silica" },
  { label: "무연유리분말", en: "Lead-Free Glass Powder", ja: "無鉛ガラス粉末", slug: "lead-free-glass-powder" },
  { label: "규사", en: "Silica Sand", ja: "珪砂", slug: "silica-sand" },
  { label: "규사분말", en: "Silica Powder", ja: "珪砂粉末", slug: "silica-powder" },
  { label: "천연 고순도규석", en: "Natural High-Purity Quartz", ja: "天然高純度石英", slug: "high-purity-quartz" },
  { label: "실리카겔", en: "Silica Gel", ja: "シリカゲル", href: "/products/silica-gel" },
];


interface Props {
  activeSlug?: string;
  className?: string;
}

const ProductCategoryBar = ({ activeSlug, className = "" }: Props) => {
  const { lang } = useLang();
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
    if (found) {
      navigate(`/products/${found.slug}/`);
      setQ("");
    } else {
      navigate(`/#products`);
    }
  };

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      <button
        onClick={() => navigate(-1)}
        aria-label="이전"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => navigate(1)}
        aria-label="다음"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-foreground"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      {categories.map((cat) => {
        const isActive = !!activeSlug && cat.slug === activeSlug;
        const className = `rounded-full border px-3.5 py-1.5 text-xs md:text-sm whitespace-nowrap transition ${
          isActive
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
        }`;
        const label = lang === "ja" ? cat.ja : lang === "en" ? cat.en : cat.label;
        if (cat.href) {
          return (
            <Link key={cat.label} to={cat.href} className={className}>
              {label}
            </Link>
          );
        }
        return (
          <Link key={cat.label} to={`/products/${cat.slug}/`} className={className}>
            {label}
          </Link>
        );
      })}

      <form onSubmit={onSearch} className="relative ml-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={lang === "ja" ? "検索" : lang === "en" ? "Search" : "검색"}
          className="h-9 w-36 rounded-full border border-border bg-card pl-8 pr-3 text-xs outline-none transition focus:border-primary md:w-44 md:text-sm"
        />
      </form>
    </div>
  );
};

export default ProductCategoryBar;
