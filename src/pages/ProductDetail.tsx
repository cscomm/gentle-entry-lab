import { useEffect } from "react";
import { pick } from "@/lib/lang";
import { silicaAlt } from "@/lib/silicaAlt";
import { Link, useLocation, useParams } from "@/lib/router";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, BarChart3, Shield, Thermometer, Scale, Gem, FlaskConical, Factory, Leaf, Zap, Wrench, Paintbrush, Pen, Link2, Layers, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductBySlug, productCatalog } from "@/data/products";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCategoryBar from "@/components/ProductCategoryBar";
import { useLang } from "@/contexts/LanguageContext";
import aSemi from "@/assets/a-semicon.jpg";
import aOptic from "@/assets/a-optics.jpg";
import aDisplay from "@/assets/a-display.jpg";
import aAero from "@/assets/a-aero.jpg";
import aMedical from "@/assets/a-medical.jpg";
import aEnergy from "@/assets/a-energy.jpg";
import hpqEgs from "@/assets/hpq-egs.jpg";
import hpqGlass from "@/assets/hpq-glass.jpg";
import hpqElec from "@/assets/hpq-electronic.jpg";
import hpqCasting from "@/assets/hpq-casting.jpg";
import hpqNano from "@/assets/hpq-nano.jpg";
import cConstruction from "@/assets/c-construction.jpg";
import cPaint from "@/assets/c-paint.jpg";
import cPlastic from "@/assets/c-plastic.jpg";
import cAbrasive from "@/assets/c-abrasive.jpg";
import cIndustrial from "@/assets/c-industrial.jpg";
import aSilicaGel from "@/assets/a-silica-gel.jpg";
import SpecTable from "@/components/SpecTable";
import { silicaGelSpecs } from "@/data/silicaGelSpecs";

const APP_VISUALS: Record<string, { img?: string; items: string[] }> = {
  "반도체": {
    img: aSemi,
    items: ["확산/산화용 보트", "웨이퍼 캐리어", "RTP 챔버 부품", "플라즈마 에칭 윈도우", "고순도 웨이퍼 카세트"],
  },
  "광학": {
    img: aOptic,
    items: ["UV~IR 광학 윈도우", "고출력 레이저 거울", "리소그래피 렌즈", "광섬유 프리폼", "우주망원경 광학계"],
  },
  "디스플레이": {
    img: aDisplay,
    items: ["OLED 증착 마스크 지지대", "유리 기판 반송 부품", "건식 에칭 챔버 부품"],
  },
  "항공/방산": {
    img: aAero,
    items: ["위성 광학 부품", "미사일 돔", "적외선 탐지기 윈도우", "열충격 보호 커버"],
  },
  "의료": {
    img: aMedical,
    items: ["분석용 큐벳", "생물반응기 윈도우", "진단 장비 부품", "의료용 광섬유 부품"],
  },
  "에너지": {
    img: aEnergy,
    items: ["고온 수소 연료전지", "태양광 확산관", "고온 절연 부품"],
  },
  // Grade B
  "태양광": { img: aEnergy, items: ["실리콘 잉곳용 도가니", "태양전지 가열 부품", "고순도 반응 용기"] },
  "전자/반도체": { img: aSemi, items: ["반도체 EMC 충진재", "하이엔드 절연재", "중간 절연층 소재"] },
  "정밀 주조": { img: aAero, items: ["항공우주 부품 금형", "정밀 기계 부품 주조", "고내열 세라믹 부품"] },
  "특수 소재": { img: aDisplay, items: ["고사양 내열 코팅", "기능성 고분자 복합재", "전자재료 절연 필름"] },
  // Grade C
  "건축 및 건자재": { img: cConstruction, items: ["고강도 시멘트 첨가제", "내화 벽돌 및 패널", "바닥재 충진재"] },
  "페인트 및 코팅": { img: cPaint, items: ["내스크래치 도료", "방청 프라이머", "무광 코팅 필러"] },
  "플라스틱/고무": { img: cPlastic, items: ["범용 플라스틱 보강재", "내열 실리콘 충진재", "접착제 증점제"] },
  "연마 및 내마모재": { img: cAbrasive, items: ["샌드블라스트 연마제", "연마 패드 및 휠", "내마모 코팅"] },
  "기타 산업용": { img: cIndustrial, items: ["필터 미디어", "내열 실란트", "주물사 대체재"] },
  // Natural HPQ
  "EGS / 인조대리석": { img: hpqEgs, items: ["고급 주방 상판", "호텔 인테리어", "건축 내외장재", "변색 없는 백색 대리석"] },
  "고급 유리": { img: hpqGlass, items: ["태양광 패널용 유리", "광학 렌즈 원료", "고투명 특수 유리"] },
  "전자재료": { img: hpqElec, items: ["절연 필러", "에폭시 수지 배합재", "저전압 절연 소재"] },
  
  "나노 가공": { img: hpqNano, items: ["나노 실리카 원료", "실리카 파우더", "고부가 화학 제품"] },
  // Silica Gel
  "실리카겔": { img: aSilicaGel, items: ["미분 실리카 (Microsilica)", "안티블로킹제 (Anti-blocking)", "소광제 (Matting Agent)", "흡착·건조용 실리카겔", "내수 실리카겔 (FNG)"] },
  // Precipitated Silica
  "침전/침강실리카": { img: aSilicaGel, items: ["고무 보강재 (그린타이어·실리콘)", "페인트·코팅·잉크 소광/증점", "식·의약품 고결방지제 (E551)", "치약·화장품 연마/증점", "농약·촉매·윤활제 캐리어"] },

  // SL series applications
  "반도체 EMC": { img: aSemi, items: ["EMC(에폭시 몰딩 컴파운드) 충진재", "저열팽창·고열전도 특성", "미세 몰딩성 및 유동성 향상", "AI·HBM 고집적 패키지 대응"] },
  "CCL / PCB": { img: aSemi, items: ["동박 적층판(CCL) 절연 필러", "저유전율·저손실 특성", "고주파 5G/6G 기판 적합", "치수 안정성 및 낮은 CTE"] },
  "언더필 / 봉지재": { img: aSemi, items: ["플립칩 언더필 충진재", "저점도·고분산성", "낮은 알파선 방출량", "고신뢰성 반도체 패키징"] },
  "고열전도 소재": { img: aEnergy, items: ["방열 시트 및 그리스", "TIM(열계면 재료) 필러", "EV 배터리 방열 소재", "LED·파워 모듈 방열"] },
  "도전성 페이스트": { img: aSemi, items: ["Ag 페이스트 유변학 조절", "전극 인쇄 정밀도 향상", "PCB 비아 충진용", "태양전지 프론트 전극"] },
  "산업용 코팅": { img: cPaint, items: ["내스크래치·경도 향상", "무광·소광 효과", "내후성·내화학성 강화", "고광택 자동차 도료"] },
  "고내마모 복합재": { img: cAbrasive, items: ["엔지니어링 플라스틱 보강", "산업용 벨트·롤러", "고내마모 코팅층", "기계 부품 수명 연장"] },
  "EMC / 봉지재": { img: aSemi, items: ["범용 EMC 충진재", "저비용 몰딩 컴파운드", "안정적 유동성", "대량 생산 대응"] },
  "산업 도료": { img: cPaint, items: ["방청·프라이머", "산업 시설용 코팅", "내화학·내열 도료", "표면 경화제"] },
  "접착제 · 실란트": { img: cPlastic, items: ["에폭시·PU 접착제 증점", "실리콘 실란트 틱소트로피", "액상 흘러내림 방지", "구조용 접착제 보강"] },
  "고무 보강": { img: cPlastic, items: ["타이어 트레드 보강", "저연비 그린타이어", "산업용 고무 부품", "실리콘 고무 필러"] },
  "인조 대리석": { img: hpqEgs, items: ["엔지니어드 스톤 충진재", "주방 상판·세면대", "고광택·내오염 표면", "균일한 백색도"] },
  "전기 절연재": { img: hpqElec, items: ["절연 바니시·수지", "변압기 절연 필러", "고전압 애자", "전기기기 부품"] },
  "HBM / DDR5": { img: aSemi, items: ["HBM 스택 패키지 EMC", "DDR5 고속 메모리 봉지재", "저알파선·저열팽창", "미세 갭 충진성"] },
  "AI 반도체 EMC": { img: aSemi, items: ["AI 가속기 대형 다이 봉지", "고열전도·저열팽창", "휨(warpage) 최소화", "고신뢰성 봉지재"] },
  "어드밴스드 패키징": { img: aSemi, items: ["FO-WLP·2.5D/3D 패키지", "TSV 언더필", "칩렛 인터커넥트 보호", "차세대 반도체 대응"] },
  "에폭시 복합재": { img: cPlastic, items: ["산업용 에폭시 수지 보강", "내열·전기 절연 부품", "복합 구조재", "고강도 성형품"] },
  "실리콘 실란트": { img: cPlastic, items: ["건축·산업용 실리콘 실란트", "틱소성·안티새깅", "고온·저온 안정성", "접착 신뢰성"] },
  "고성능 접착제": { img: cPlastic, items: ["구조용 접착제 증점", "자동차·전자 조립", "고전단·고인장 강도", "장기 내구성"] },
  "코팅 · 잉크": { img: cPaint, items: ["인쇄 잉크 유변학 조절", "기능성 코팅 필러", "무광 매트 효과", "안료 침강 방지"] },
  "유리 원료": { img: hpqGlass, items: ["플로트·특수 유리 원료", "광학 유리 배치재", "고투명 태양광 커버 유리", "저철분 규사"] },
  "연마재": { img: cAbrasive, items: ["샌드블라스팅용 규사", "정밀 연마재", "표면 처리 미디어", "금속·석재 표면 가공"] },
  "워터 필터": { img: cIndustrial, items: ["정수 처리 여과사", "산업용수 필터 미디어", "수영장·상수도 여과층", "균일 입도 규사"] },
  "스포츠 표면재": { img: cIndustrial, items: ["인조잔디 충진재", "골프장 벙커·페어웨이", "육상 트랙 표면재", "스포츠 시설 규사"] },
  "전자 부품 봉착": { img: hpqElec, items: ["LED·다이오드 봉착", "센서 모듈 봉지", "저융점 무연 유리 프릿", "고신뢰성 접합"] },
  "태양전지": { img: aEnergy, items: ["실리콘 태양전지 봉착 유리", "박막 태양전지 배리어", "PV 모듈 프릿", "고투과·저융점 특성"] },
  "세라믹 · 금속 봉착": { img: hpqElec, items: ["세라믹-금속 하이브리드 봉착", "진공·기밀 실링", "산업용 센서 봉지", "고온 안정 접합"] },
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const location = useLocation();
  const { t, lang } = useLang();
  const tri = (ko: string, en: string, ja: string) =>
    lang === "ja" ? ja : lang === "en" ? en : ko;
  const trApp = (name: string) => t(`app.${name}`);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.hash, slug]);

  useEffect(() => {
    if (!product) return;
    const name = pick(lang, product.name, product.enName, product.jaName);
    const description = pick(lang, product.description, product.enDescription, product.jaDescription);
    const url = `https://silica.co.kr${location.pathname.endsWith("/") ? location.pathname : location.pathname + "/"}`;
    const image = product.image?.startsWith("http") ? product.image : `https://silica.co.kr${product.image ?? ""}`;
    const ld = {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      description,
      image,
      url,
      sku: product.slug,
      brand: { "@type": "Brand", name: "SiLiCA" },
      manufacturer: { "@type": "Organization", name: "SiLiCA", url: "https://silica.co.kr/" },
      offers: {
        "@type": "Offer",
        url,
        priceCurrency: "KRW",
        price: "0",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "KRW",
          price: "0",
          valueAddedTaxIncluded: false,
        },
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        businessFunction: "http://purl.org/goodrelations/v1#Sell",
        seller: { "@type": "Organization", name: "SiLiCA", url: "https://silica.co.kr/" },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
          merchantReturnLink: "https://silica.co.kr/terms",
          applicableCountry: "KR",
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "KRW" },
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "KR" },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
              "@type": "QuantitativeValue",
              minValue: 1,
              maxValue: 3,
              unitCode: "DAY",
            },
            transitTime: {
              "@type": "QuantitativeValue",
              minValue: 1,
              maxValue: 5,
              unitCode: "DAY",
            },
          },
        },
      },
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.dataset.jsonld = "product";
    el.textContent = JSON.stringify(ld);
    document.head.querySelectorAll('script[data-jsonld="product"]').forEach((n) => n.remove());
    document.head.appendChild(el);
    return () => { el.remove(); };
  }, [product, lang, location.pathname]);


  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{t("pd.notFound")}</h1>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary-glow hover:underline">
            <ArrowLeft className="h-4 w-4" /> {t("pd.toHome")}
          </Link>
        </div>
      </div>
    );
  }

  const others = product.parentSlug
    ? productCatalog.filter((p) => p.parentSlug === product.parentSlug && p.slug !== product.slug)
    : productCatalog.filter((p) => p.slug !== product.slug && !p.isCategoryIndex && !p.parentSlug && (p.category ?? "quartz") === (product.category ?? "quartz"));
  const isGradeA = product.slug === "fused-silica-a-grade";
  const isGradeB = product.slug === "fused-silica-b-grade";
  const isGradeC = product.slug === "fused-silica-c-grade";
  const isSilicaSand = product.slug === "sls-series";
  const isSilicaPowder = product.slug === "slp-series";
  const isHS12 = product.slug === "sl-hs12";
  const isFrit = product.slug === "amorphous-ceramic-frit";
  const subModels = product.subModels;
  const subModelsLabel = product.subModelsColumnLabel;
  const children = product.isCategoryIndex
    ? (() => {
        const byParent = productCatalog.filter((p) => p.parentSlug === product.slug);
        const refSlugs = (product.subModels ?? [])
          .map((sm) => sm.slug)
          .filter((s): s is string => !!s);
        const referenced = refSlugs
          .map((slug) => productCatalog.find((p) => p.slug === slug))
          .filter((p): p is typeof productCatalog[number] => !!p);
        const seen = new Set<string>();
        return [...byParent, ...referenced].filter((p) => {
          if (seen.has(p.slug)) return false;
          seen.add(p.slug);
          return true;
        });
      })()
    : [];

  // ============= Category-Index Layout (for SL-series parent categories) =============
  if (product.isCategoryIndex) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader transparentAtTop={false} />

        <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              ← {t("products.cat")}
            </Link>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {product.enName.toUpperCase()}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              {pick(lang, product.name, product.enName, product.jaName)} · {product.enName}
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">
              {pick(lang, product.description, product.enDescription, product.jaDescription)}
            </p>
          </div>
        </section>

        {/* Category bar */}
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <div className="overflow-x-auto rounded-xl border border-border/60 bg-card/60 px-4 py-3 backdrop-blur-sm">
            <ProductCategoryBar activeSlug={product.slug} />
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {children.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}/`}
                className="group block overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="aspect-square overflow-hidden bg-secondary/40">
                  <img
                    src={p.image}
                    alt={silicaAlt(pick(lang, p.name, p.enName, p.jaName))}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold leading-snug line-clamp-2">{pick(lang, p.name, p.enName, p.jaName)}</h3>
                  {lang === "ko" && <p className="mt-1 text-[11px] text-muted-foreground line-clamp-1">{p.enName}</p>}
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-primary transition group-hover:gap-1.5">
                    {t("products.detail")} <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop />




      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={product.image} alt={silicaAlt(product.name)} className="h-[460px] w-full object-cover md:h-[560px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-6 pb-16 text-white">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs tracking-widest text-white/90 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            {product.enName.toUpperCase()}
          </span>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl drop-shadow-lg">{pick(lang, product.name, product.enName, product.jaName)}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{pick(lang, product.tagline, product.enTagline, product.jaTagline)}</p>
        </div>
      </section>

      {/* Category bar in the empty space below hero */}
      <div className="mx-auto max-w-7xl px-6 pt-10 md:pt-14">
        <div className="overflow-x-auto rounded-xl border border-border/60 bg-card/60 px-4 py-3 backdrop-blur-sm">
          <ProductCategoryBar activeSlug={product.slug} />
        </div>
      </div>

      {/* Overview + Spec Sheet */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              OVERVIEW
            </span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">{t("pd.overview")}</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{pick(lang, product.description, product.enDescription, product.jaDescription)}</p>

            {product.detailImage && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
                <img src={product.detailImage} alt={silicaAlt(`${product.name} 상세`)} className="h-full w-full object-cover" loading="lazy" />
              </div>
            )}

            {isGradeA && (
              <div className="mt-8 grid grid-cols-2 gap-3">
                {(lang === "ja"
                  ? ["100% 非晶質", "超低熱膨張", "超低金属不純物", "EC < 3 µs/cm", "カスタム粒度加工"]
                  : lang === "en"
                  ? ["100% Amorphous", "Ultra-Low CTE", "Ultra-Low Metal Impurities", "EC < 3 µs/cm", "Custom Particle Size"]
                  : ["100% 무정형", "초저열팽창", "초저금속 불순물", "EC < 3 µs/cm", "맞춤 입도 가공"]
                ).map((b) => (
                  <div key={b} className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-3 py-2.5 text-xs font-medium text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {b}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Spec Sheet */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/30 shadow-sm">
              <div className="flex items-center justify-between border-b border-border bg-foreground px-6 py-4 text-background">
                <div>
                  <div className="text-[10px] tracking-[0.3em] text-primary-glow">SPEC SHEET</div>
                  <div className="mt-0.5 text-lg font-semibold">📊 {t("pd.spec")}</div>
                </div>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {product.enName.split("·")[0].trim()}
                </span>
              </div>
              <div className="divide-y divide-border">
                <div className="grid grid-cols-12 bg-secondary/40 px-6 py-3 text-xs font-semibold tracking-widest text-muted-foreground">
                  <div className="col-span-5">{t("pd.spec.item")}</div>
                  <div className="col-span-4">{t("pd.spec.value")}</div>
                  <div className="col-span-3 text-right">{t("pd.spec.note")}</div>
                </div>
                {product.specs.map((s) => (
                  <div key={s.label} className="grid grid-cols-12 items-center px-6 py-3.5 text-sm transition hover:bg-secondary/30">
                    <div className="col-span-5 text-muted-foreground">{pick(lang, s.label, s.enLabel, s.jaLabel)}</div>
                    <div className="col-span-4 font-semibold text-foreground">{pick(lang, s.value, s.enValue ?? s.value, s.jaValue ?? s.enValue ?? s.value)}</div>
                    <div className="col-span-3 text-right text-xs text-primary">{pick(lang, s.note ?? "—", s.enNote ?? s.note ?? "—", s.jaNote ?? s.enNote ?? s.note ?? "—")}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SL-SPH-300 — Particle Size & Chemistry Technical Tables */}
      {product.slug === "sl-sph-300" && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              TECHNICAL DATA
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            🔬 {tri("입도 분석 및 화학 조성", "Particle Size Analysis & Chemistry", "粒度分析および化学組成")}
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            {tri(
              "SL-SPH-300은 화학합성 공정을 통해 좁고 균일한 아미크론급 입도 분포와 초고순도 조성을 동시에 실현합니다. 아래는 대표 TDS 데이터입니다.",
              "SL-SPH-300 achieves a narrow, uniform submicron particle size distribution and ultra-high-purity composition through a chemical synthesis process. Representative TDS data below.",
              "SL-SPH-300は化学合成プロセスにより、狭く均一なサブミクロン粒度分布と超高純度組成を同時に実現します。以下は代表TDSデータです。"
            )}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Particle Size Table */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="bg-primary/10 px-6 py-4">
                <h4 className="text-lg font-bold text-foreground">
                  📐 {tri("입도 분석 (Particle Size)", "Particle Size Analysis", "粒度分析")}
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-foreground text-background">
                      <th className="px-6 py-3 text-left text-xs font-semibold tracking-[0.2em]">{tri("항목", "Item", "項目")}</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold tracking-[0.2em]">{tri("측정값", "Value", "測定値")}</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold tracking-[0.2em]">{tri("단위", "Unit", "単位")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { item: tri("평균 입경 (D50)", "Mean Size (D50)", "平均粒径 (D50)"), val: "0.38", unit: "µm" },
                      { item: tri("최대 입경 (D100)", "Max Size (D100)", "最大粒径 (D100)"), val: "≤ 0.8", unit: "µm" },
                      { item: tri("비표면적 (SSA)", "Specific Surface Area", "比表面積 (SSA)"), val: "8.5", unit: "m²/g" },
                      { item: tri("수분", "Moisture", "水分"), val: "0.12", unit: "%" },
                      { item: "PH", val: "6.1", unit: "—" },
                      { item: tri("전기전도도 (EC)", "Electrical Conductivity", "電気伝導度 (EC)"), val: "8.9", unit: "µS/cm" },
                    ].map((r) => (
                      <tr key={r.item} className="transition hover:bg-secondary/40">
                        <td className="px-6 py-3 font-medium text-foreground">{r.item}</td>
                        <td className="px-6 py-3 font-mono font-semibold text-primary">{r.val}</td>
                        <td className="px-6 py-3 text-muted-foreground">{r.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Chemistry Table */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="bg-primary/10 px-6 py-4">
                <h4 className="text-lg font-bold text-foreground">
                  🧪 {tri("화학 조성 (Chemical Composition)", "Chemical Composition", "化学組成")}
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-foreground text-background">
                      <th className="px-6 py-3 text-left text-xs font-semibold tracking-[0.2em]">{tri("성분", "Element", "成分")}</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold tracking-[0.2em]">{tri("측정값", "Value", "測定値")}</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold tracking-[0.2em]">{tri("단위", "Unit", "単位")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { item: "SiO₂", val: "99.98", unit: "%" },
                      { item: "Fe", val: "1.5", unit: "ppm" },
                      { item: "Cl⁻", val: "0.9", unit: "ppm" },
                      { item: "Na⁺", val: "1.7", unit: "ppm" },
                    ].map((r) => (
                      <tr key={r.item} className="transition hover:bg-secondary/40">
                        <td className="px-6 py-3 font-mono font-semibold text-foreground">{r.item}</td>
                        <td className="px-6 py-3 font-mono font-semibold text-primary">{r.val}</td>
                        <td className="px-6 py-3 text-muted-foreground">{r.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SEM image + caption */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="aspect-square overflow-hidden bg-black">
                <img
                  src={product.image}
                  alt={silicaAlt(pick(lang, product.name, product.enName, product.jaName))}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="inline-block rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">
                  SEM IMAGE
                </span>
                <h4 className="mt-4 text-2xl font-bold">
                  {tri(
                    "완전 구상 · 균일 입도 확인",
                    "Perfectly Spherical · Uniform PSD Verified",
                    "完全球状 · 均一粒度を確認"
                  )}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {tri(
                    "SEM(주사전자현미경) 이미지에서 확인되는 바와 같이, SL-SPH-300은 응집 없이 개별 분산된 균일한 나노구상 입자로 구성됩니다. 완전 구형에 근접한 형상은 수지 매트릭스 내 최대 충전율(High Filler Loading)을 가능하게 하며, 컴파운드 점도를 획기적으로 낮춰 반도체 EMC·언더필·저유전 CCL의 성형성과 신뢰성을 동시에 향상시킵니다.",
                    "As shown in the SEM (Scanning Electron Microscope) image, SL-SPH-300 consists of individually dispersed, uniform nano-spherical particles with virtually no agglomeration. Its near-perfect spherical morphology enables the highest filler loading in resin matrices while dramatically reducing compound viscosity — simultaneously improving processability and reliability in semiconductor EMC, underfill and low-Dk CCL.",
                    "SEM(走査電子顕微鏡)画像で確認されるように、SL-SPH-300は凝集のない、個別に分散した均一なナノ球状粒子で構成されます。ほぼ完全な球形状は樹脂マトリックス中の最大充填率(高フィラーローディング)を可能にし、コンパウンド粘度を大幅に低減することで、半導体EMC・アンダーフィル・低誘電CCLの成形性と信頼性を同時に向上させます。"
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SL-SHS — Full Silica Sol Grade Matrix */}
      {product.slug === "sl-shs" && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            TECHNICAL DATA · SL-SHS SERIES
          </span>
          <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            📊 {tri("전체 그레이드 스펙 매트릭스", "Full Grade Specification Matrix", "全グレード仕様マトリクス")}
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            {tri(
              "SL-SHS 시리즈 14종 그레이드의 SiO₂ 농도·알칼리(Na₂O)·pH·점도·밀도·평균 입자경·Cl⁻ 범위를 한 표에서 비교할 수 있습니다. 계열별 색상 그룹으로 구분되어 있으며, 사이즈·포장은 커스터마이즈 가능합니다.",
              "Compare SiO₂ content, alkali (Na₂O), pH, viscosity, density, mean particle size and Cl⁻ range for all 14 SL-SHS grades in one table. Grades are color-grouped by stabilization series; particle size and packaging are customizable.",
              "SL-SHSシリーズ14グレードのSiO₂濃度・アルカリ(Na₂O)・pH・粘度・密度・平均粒子径・Cl⁻範囲を一つの表で比較できます。系列別にカラーグルーピングされ、粒子径・包装はカスタマイズ可能です。"
            )}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[13px] md:text-sm" style={{ fontVariantNumeric: "tabular-nums" }}>
                <thead>
                  <tr className="bg-foreground text-background">
                    <th className="border-r border-background/20 px-3 py-3 text-left text-xs font-semibold tracking-[0.15em] md:px-4">{tri("계열", "Series", "系列")}</th>
                    <th className="border-r border-background/20 px-3 py-3 text-left text-xs font-semibold tracking-[0.15em] md:px-4">{tri("모델", "Type", "型番")}</th>
                    <th className="border-r border-background/20 px-3 py-3 text-center text-xs font-semibold tracking-[0.15em] md:px-4">SiO₂ (%)</th>
                    <th className="border-r border-background/20 px-3 py-3 text-center text-xs font-semibold tracking-[0.15em] md:px-4">Na₂O (%) ≤</th>
                    <th className="border-r border-background/20 px-3 py-3 text-center text-xs font-semibold tracking-[0.15em] md:px-4">pH</th>
                    <th className="border-r border-background/20 px-3 py-3 text-center text-xs font-semibold tracking-[0.15em] md:px-4">{tri("점도", "Viscosity", "粘度")}<br/><span className="text-[10px] opacity-80">mPa·s (25℃) ≤</span></th>
                    <th className="border-r border-background/20 px-3 py-3 text-center text-xs font-semibold tracking-[0.15em] md:px-4">{tri("밀도", "Density", "密度")}<br/><span className="text-[10px] opacity-80">g/cm³ (25℃)</span></th>
                    <th className="border-r border-background/20 px-3 py-3 text-center text-xs font-semibold tracking-[0.15em] md:px-4">{tri("평균 입경", "Avg Grain", "平均粒径")}<br/><span className="text-[10px] opacity-80">nm</span></th>
                    <th className="px-3 py-3 text-center text-xs font-semibold tracking-[0.15em] md:px-4">Cl⁻<br/><span className="text-[10px] opacity-80">ppm</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { series: "JN", tint: "bg-blue-500/5", model: "SL-SHS-JN15", sio2: "15–16", na2o: "0.70", ph: "9.0–11.0", visc: "5", dens: "1.09–1.11", grain: "6–8", cl: "—" },
                    { series: "JN", tint: "bg-blue-500/5", model: "SL-SHS-JN20", sio2: "20–21", na2o: "0.50", ph: "9.0–11.0", visc: "6", dens: "1.12–1.14", grain: "10–20", cl: "—" },
                    { series: "JN", tint: "bg-blue-500/5", model: "SL-SHS-JN25", sio2: "25–26", na2o: "0.30", ph: "9.0–10.0", visc: "6", dens: "1.15–1.17", grain: "10–20", cl: "—" },
                    { series: "JN", tint: "bg-blue-500/5", model: "SL-SHS-JN30", sio2: "30–31", na2o: "0.30", ph: "9.0–10.0", visc: "7", dens: "1.19–1.21", grain: "10–20", cl: "—" },
                    { series: "JN", tint: "bg-blue-500/5", model: "SL-SHS-JN40", sio2: "40–41", na2o: "0.60", ph: "9.0–10.5", visc: "25", dens: "1.28–1.30", grain: "10–20", cl: "—" },
                    { series: "SW", tint: "bg-emerald-500/5", model: "SL-SHS-SW20", sio2: "20–21", na2o: "0.04", ph: "2.0–4.0", visc: "5", dens: "1.12–1.14", grain: "10–20", cl: "—" },
                    { series: "SW", tint: "bg-emerald-500/5", model: "SL-SHS-SW25", sio2: "25–26", na2o: "0.05", ph: "2.0–4.0", visc: "6", dens: "1.15–1.17", grain: "10–20", cl: "—" },
                    { series: "SW", tint: "bg-emerald-500/5", model: "SL-SHS-SW30", sio2: "30–31", na2o: "0.06", ph: "2.0–4.0", visc: "7", dens: "1.19–1.21", grain: "10–20", cl: "—" },
                    { series: "JA", tint: "bg-primary/5", model: "SL-SHS-JA30", sio2: "30–31", na2o: "0.06", ph: "8.5–10.0", visc: "7", dens: "1.19–1.21", grain: "10–20", cl: "—" },
                    { series: "JA", tint: "bg-primary/5", model: "SL-SHS-JA30/40", sio2: "40–41", na2o: "0.10", ph: "9.0–10.0", visc: "12", dens: "1.28–1.30", grain: "20–30", cl: "—" },
                    { series: "ZX", tint: "bg-amber-500/5", model: "SL-SHS-ZX25", sio2: "25–26", na2o: "0.10", ph: "6.0–8.0", visc: "6", dens: "1.15–1.17", grain: "10–20", cl: "—" },
                    { series: "ZX", tint: "bg-amber-500/5", model: "SL-SHS-ZX30", sio2: "30–31", na2o: "0.12", ph: "6.0–8.0", visc: "7", dens: "1.19–1.21", grain: "10–20", cl: "—" },
                    { series: "JGC", tint: "bg-fuchsia-500/5", model: "SL-SHS-JGC25", sio2: "25–26", na2o: "0.30", ph: "9.0–10.0", visc: "7", dens: "1.15–1.17", grain: "8–16", cl: "≤ 30" },
                    { series: "JGC", tint: "bg-fuchsia-500/5", model: "SL-SHS-JGC30", sio2: "30–31", na2o: "0.30", ph: "9.0–10.0", visc: "8", dens: "1.19–1.21", grain: "10–20", cl: "≤ 30" },
                  ].map((r, i) => (
                    <tr key={r.model} className={`${r.tint} transition hover:bg-secondary/40`}>
                      <td className="border-r border-border px-3 py-3 text-xs font-bold tracking-wider text-primary md:px-4">{r.series}</td>
                      <td className="border-r border-border px-3 py-3 font-mono text-xs font-semibold text-foreground md:px-4 md:text-sm">{r.model}</td>
                      <td className="border-r border-border px-3 py-3 text-center font-mono font-semibold text-foreground md:px-4">{r.sio2}</td>
                      <td className="border-r border-border px-3 py-3 text-center font-mono text-muted-foreground md:px-4">{r.na2o}</td>
                      <td className="border-r border-border px-3 py-3 text-center font-mono text-foreground md:px-4">{r.ph}</td>
                      <td className="border-r border-border px-3 py-3 text-center font-mono text-foreground md:px-4">{r.visc}</td>
                      <td className="border-r border-border px-3 py-3 text-center font-mono text-foreground md:px-4">{r.dens}</td>
                      <td className="border-r border-border px-3 py-3 text-center font-mono font-semibold text-primary md:px-4">{r.grain}</td>
                      <td className="px-3 py-3 text-center font-mono text-muted-foreground md:px-4">{r.cl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-border bg-secondary/20 px-5 py-4 md:px-7">
              <ul className="space-y-1.5 text-xs text-muted-foreground md:text-sm">
                <li className="flex gap-2"><span className="mt-0.5 shrink-0 text-primary">•</span><span>{tri("사이즈 및 포장(25 kg 드럼 · 200 kg 드럼 · 1,000 kg IBC 등)은 커스터마이즈 가능합니다.", "Size and packaging (25 kg drum · 200 kg drum · 1,000 kg IBC, etc.) can be customized.", "サイズおよび包装(25 kg ドラム · 200 kg ドラム · 1,000 kg IBC など)はカスタマイズ可能です。")}</span></li>
                <li className="flex gap-2"><span className="mt-0.5 shrink-0 text-primary">•</span><span>{tri("평균 입자경이 10 nm 미만인 그레이드는 점도에 관한 별도 합의가 필요합니다.", "For grades with average grain diameter under 10 nm, buyer and seller need to agree separately on viscosity.", "平均粒子径が10 nm未満のグレードは、粘度について別途合意が必要です。")}</span></li>
                <li className="flex gap-2"><span className="mt-0.5 shrink-0 text-primary">•</span><span>{tri("원산지: 중국. 계열별 특성에 맞춰 안정형·pH·이온 농도를 세밀하게 조정 공급합니다.", "Origin: China. Stabilizer, pH and ionic content are precisely adjusted per series.", "原産地:中国。系列別特性に合わせて安定化系・pH・イオン濃度をきめ細かく調整して供給します。")}</span></li>
              </ul>
            </div>
          </div>

          {/* Application highlights */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: "🏗️", ko: "정밀 주조 · 내화 코팅", en: "Investment Casting · Refractory", ja: "精密鋳造 · 耐火コーティング", desc: tri("셸 몰드 바인더 · 세라믹 코팅 · 소결 강도 향상", "Shell binders, ceramic coatings, sintering strength", "シェルバインダー · セラミックコーティング · 焼結強度向上") },
              { icon: "📄", ko: "제지 · 섬유 · 도료", en: "Paper · Textile · Coatings", ja: "製紙 · 繊維 · 塗料", desc: tri("표면 개질제 · 안티슬립 · 매트 코팅", "Surface modifier, anti-slip, matte coating", "表面改質剤 · アンチスリップ · マットコーティング") },
              { icon: "🔋", ko: "이차전지 · 촉매 · 실리콘", en: "Batteries · Catalyst · Silicone", ja: "二次電池 · 触媒 · シリコン", desc: tri("고체 전해질 · 촉매 담체 · 실리콘 시트 처리제", "Solid electrolyte, catalyst support, silicone sheet agent", "固体電解質 · 触媒担体 · シリコンシート処理剤") },
            ].map((c) => (
              <div key={c.en} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="text-3xl">{c.icon}</div>
                <h4 className="mt-3 text-lg font-bold text-foreground">{tri(c.ko, c.en, c.ja)}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SL-CHR-01 — Column Chromatography A/B/C × Industrial/Reagent */}
      {product.slug === "silica-gel-sl-chr-01" && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            TECHNICAL DATA · SL-CHR-01
          </span>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            🧪 {tri("A / B / C형 × 공업/시약 등급 스펙", "Type A / B / C × Industrial / Reagent Grade", "A / B / C型 × 工業/試薬グレード仕様")}
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            {tri(
              "SL-CHR-01은 3종 공극 구조(A: 세공 / B: 중공 / C: 조공)를 각각 공업 등급(Industrial)과 시약 등급(Reagent)으로 공급합니다. 아래는 대표 스펙 값입니다.",
              "SL-CHR-01 is supplied in three pore structures (A: fine / B: medium / C: coarse), each available in Industrial and Reagent grades. Representative specifications below.",
              "SL-CHR-01は3種の細孔構造(A: 細孔 / B: 中孔 / C: 粗孔)を、それぞれ工業(Industrial)グレードと試薬(Reagent)グレードで供給します。以下は代表仕様値です。"
            )}
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-foreground text-background">
                    <th rowSpan={2} className="px-4 py-3 text-left text-xs font-semibold tracking-[0.15em]">{tri("항목 / Items", "Items", "項目")}</th>
                    <th colSpan={2} className="px-4 py-2 text-center text-xs font-semibold tracking-[0.15em] border-l border-background/20">Type-A</th>
                    <th colSpan={2} className="px-4 py-2 text-center text-xs font-semibold tracking-[0.15em] border-l border-background/20">Type-B</th>
                    <th colSpan={2} className="px-4 py-2 text-center text-xs font-semibold tracking-[0.15em] border-l border-background/20">Type-C</th>
                  </tr>
                  <tr className="bg-foreground/90 text-background text-[11px]">
                    <th className="px-3 py-2 border-l border-background/20">{tri("공업", "Industrial", "工業")}</th>
                    <th className="px-3 py-2">{tri("시약", "Reagent", "試薬")}</th>
                    <th className="px-3 py-2 border-l border-background/20">{tri("공업", "Industrial", "工業")}</th>
                    <th className="px-3 py-2">{tri("시약", "Reagent", "試薬")}</th>
                    <th className="px-3 py-2 border-l border-background/20">{tri("공업", "Industrial", "工業")}</th>
                    <th className="px-3 py-2">{tri("시약", "Reagent", "試薬")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { item: tri("공경 (Pore size, Å)", "Pore size (Å)", "細孔径 (Å)"), row: ["20–30", "20–30", "50–80", "50–80", "90–100", "90–100"] },
                    { item: tri("공용적 (Pore volume, ml/g)", "Pore volume (ml/g)", "細孔容積 (ml/g)"), row: ["0.35–0.45", "0.35–0.45", "0.5–0.7", "0.5–0.7", "0.85–1.0", "0.85–1.0"] },
                    { item: tri("비표면적 (SSA, m²/g)", "Specific Surface Area (m²/g)", "比表面積 (m²/g)"), row: ["≥600", "≥600", "450–600", "450–600", "320–400", "320–400"] },
                    { item: tri("겉보기 밀도 (Bulk, g/L)", "Bulk density (g/L)", "嵩密度 (g/L)"), row: ["≥670", "≥670", "500–600", "500–600", "400–500", "400–500"] },
                    { item: tri("가열감량 (%, ≤)", "Loss on heating (%, ≤)", "加熱減量 (%, ≤)"), row: ["5", "3", "5", "3", "5", "3"] },
                    { item: tri("염화물 Cl (%, ≤)", "Chlorides Cl (%, ≤)", "塩化物 Cl (%, ≤)"), row: ["—", "0.02", "—", "0.02", "—", "0.02"] },
                    { item: tri("철분 Fe (%, ≤)", "Iron Fe (%, ≤)", "鉄 Fe (%, ≤)"), row: ["—", "0.02", "—", "0.02", "—", "0.02"] },
                  ].map((r) => (
                    <tr key={r.item} className="transition hover:bg-secondary/40">
                      <td className="px-4 py-3 font-medium text-foreground">{r.item}</td>
                      {r.row.map((v, i) => (
                        <td key={i} className={`px-3 py-3 text-center font-mono text-xs ${i % 2 === 0 ? "border-l border-border" : ""} ${v === "—" ? "text-muted-foreground" : "text-primary font-semibold"}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-secondary/40 text-xs">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-foreground">{tri("입도 (Size)", "Size", "粒度")}</td>
                    <td colSpan={6} className="px-4 py-3 text-center font-mono text-foreground">60–100 / 80–120 / 100–200 / 200–300 / 230–400 / 300–400 mesh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-foreground">{tri("포장 (Packing)", "Packing", "包装")}</td>
                    <td colSpan={6} className="px-4 py-3 text-center text-muted-foreground">500 g / bottle · 1 kg / bag · 10 kg / carton · 20·25 kg / carton · 20 kg / compound bag</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* SL-CHR-02 — TLC Powder H / HF254 / G / GF254 */}
      {product.slug === "silica-gel-sl-chr-02" && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            TECHNICAL DATA · SL-CHR-02
          </span>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            🧪 {tri("H / HF254 / G / GF254 형별 스펙", "H / HF254 / G / GF254 Type Specifications", "H / HF254 / G / GF254 型別仕様")}
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            {tri(
              "SL-CHR-02는 TLC 분석 용도에 맞춰 4가지 형(Type)으로 공급되며, G / GF254 등급은 소석고(CaSO₄·½H₂O) 12–14 %가 첨가되어 결합력이 향상되어 있습니다.",
              "SL-CHR-02 is offered in four types tailored for TLC analysis. G / GF254 grades contain 12–14 % calcined gypsum (CaSO₄·½H₂O) for enhanced binder strength.",
              "SL-CHR-02はTLC分析用途に合わせて4種類の型(Type)で供給され、G / GF254グレードは焼石膏(CaSO₄·½H₂O)12–14 %を配合し結合力を高めています。"
            )}
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-foreground text-background">
                    <th className="px-4 py-3 text-left text-xs font-semibold tracking-[0.15em]">{tri("항목", "Items", "項目")}</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold tracking-[0.15em] border-l border-background/20">Type-H</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold tracking-[0.15em] border-l border-background/20">Type-HF254</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold tracking-[0.15em] border-l border-background/20">Type-G</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold tracking-[0.15em] border-l border-background/20">Type-GF254</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { item: tri("공경 (Å)", "Pore size (Å)", "細孔径 (Å)"), row: ["90–100", "90–100", "90–100", "90–100"] },
                    { item: tri("공용적 (ml/g)", "Pore volume (ml/g)", "細孔容積 (ml/g)"), row: ["0.85–1.0", "0.85–1.0", "0.85–1.0", "0.85–1.0"] },
                    { item: tri("비표면적 (m²/g)", "SSA (m²/g)", "比表面積 (m²/g)"), row: ["320–400", "320–400", "320–400", "320–400"] },
                    { item: tri("겉보기 밀도 (g/L)", "Bulk density (g/L)", "嵩密度 (g/L)"), row: ["400–500", "400–500", "400–500", "400–500"] },
                    { item: tri("가열감량 (%, ≤)", "Loss on heating (%, ≤)", "加熱減量 (%, ≤)"), row: ["3", "3", "3", "3"] },
                    { item: tri("소석고 CaSO₄·½H₂O (%)", "Calcined gypsum CaSO₄·½H₂O (%)", "焼石膏 CaSO₄·½H₂O (%)"), row: ["—", "—", "12–14", "12–14"] },
                    { item: tri("염화물 Cl (%, ≤)", "Chlorides Cl (%, ≤)", "塩化物 Cl (%, ≤)"), row: ["0.02", "0.02", "0.02", "0.02"] },
                    { item: tri("철분 Fe (%, ≤)", "Iron Fe (%, ≤)", "鉄 Fe (%, ≤)"), row: ["0.02", "0.02", "0.02", "0.02"] },
                    { item: tri("pH (10% 현탁)", "pH (10% suspension)", "pH (10%懸濁)"), row: ["6.0–7.0", "6.0–7.0", "6.0–7.0", "6.0–7.0"] },
                    { item: tri("활성 (Activity)", "Activity", "活性"), row: [tri("삼색 분리", "Tricolor separation", "三色分離"), tri("삼색 분리", "Tricolor separation", "三色分離"), tri("삼색 분리", "Tricolor separation", "三色分離"), tri("삼색 분리", "Tricolor separation", "三色分離")] },
                  ].map((r) => (
                    <tr key={r.item} className="transition hover:bg-secondary/40">
                      <td className="px-4 py-3 font-medium text-foreground">{r.item}</td>
                      {r.row.map((v, i) => (
                        <td key={i} className={`px-4 py-3 text-center font-mono text-xs border-l border-border ${v === "—" ? "text-muted-foreground" : "text-primary font-semibold"}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-secondary/40 text-xs">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-foreground">{tri("입도 (µm)", "Size (µm)", "粒度 (µm)")}</td>
                    <td colSpan={4} className="px-4 py-3 text-center font-mono text-foreground">{tri("일반 10–40 µm · 고효율 5–10 µm / 3–10 µm", "Normal 10–40 µm · High efficiency 5–10 µm / 3–10 µm", "一般 10–40 µm · 高効率 5–10 µm / 3–10 µm")}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-foreground">{tri("포장", "Packing", "包装")}</td>
                    <td colSpan={4} className="px-4 py-3 text-center text-muted-foreground">{tri("플라스틱 병 · 500 g/병 · 10병/카톤", "Plastic bottle · 500 g/bottle · 10 bottles/carton", "プラスチックボトル · 500 g/本 · 10本/カートン")}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* SL-CHR-03 — TLC Plate */}
      {product.slug === "silica-gel-sl-chr-03" && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            TECHNICAL DATA · SL-CHR-03
          </span>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            🧪 {tri("TLC 플레이트 규격 · 포장 수량", "TLC Plate Specifications & Packing Quantity", "TLCプレート仕様・包装数量")}
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            {tri(
              "판 두께는 전 형 공통 0.20 ± 0.03 mm이며, 활성도는 삼색 분리(디메틸옐로우·수단레드·인디고) 기준입니다. 규격·형별 표준 포장 수량은 아래와 같습니다.",
              "Plate thickness is 0.20 ± 0.03 mm across all types; activity is verified by tricolor separation (dimethyl yellow, sudan red, indigo). Standard packing quantities per size and type are shown below.",
              "板厚は全型共通で0.20 ± 0.03 mm、活性度は三色分離(ジメチルイエロー・スダンレッド・インジゴ)基準です。サイズ・型別の標準包装数量は下記の通りです。"
            )}
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-[10px] tracking-[0.3em] text-primary">THICKNESS</div>
              <div className="mt-2 text-3xl font-bold text-foreground">0.20 ± 0.03 mm</div>
              <div className="mt-2 text-sm text-muted-foreground">{tri("전 형(H / HF254 / G / GF254) 공통", "Common to all types (H / HF254 / G / GF254)", "全型(H / HF254 / G / GF254)共通")}</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-[10px] tracking-[0.3em] text-primary">ACTIVITY</div>
              <div className="mt-2 text-2xl font-bold text-foreground">{tri("삼색 분리", "Tricolor Separation", "三色分離")}</div>
              <div className="mt-2 text-sm text-muted-foreground">{tri("디메틸옐로우 · 수단레드 · 인디고", "Dimethyl yellow · Sudan red · Indigo", "ジメチルイエロー · スダンレッド · インジゴ")}</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-[10px] tracking-[0.3em] text-primary">BINDER</div>
              <div className="mt-2 text-2xl font-bold text-foreground">{tri("G / GF254 전용", "G / GF254 only", "G / GF254 専用")}</div>
              <div className="mt-2 text-sm text-muted-foreground">{tri("결합제 배합 — 접착력은 G / GF254에 한함", "Adhesive force limited to thin-layer G and GF254", "結合剤配合 — 接着力はG / GF254に限る")}</div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-foreground text-background">
                    <th className="px-4 py-3 text-left text-xs font-semibold tracking-[0.15em]">{tri("규격 (mm)", "Size (mm)", "サイズ (mm)")}</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold tracking-[0.15em] border-l border-background/20">S ({tri("매/pcs", "pieces", "枚")})</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold tracking-[0.15em] border-l border-background/20">M ({tri("매/pcs", "pieces", "枚")})</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold tracking-[0.15em] border-l border-background/20">L ({tri("매/pcs", "pieces", "枚")})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { size: "75 × 25", s: "80", m: "320", l: "1600" },
                    { size: "100 × 20", s: "80", m: "320", l: "1600" },
                    { size: "100 × 50", s: "40", m: "160", l: "800" },
                    { size: "100 × 100", s: "20", m: "80", l: "400" },
                    { size: "200 × 50", s: "20", m: "80", l: "400" },
                    { size: "200 × 100", s: "10", m: "40", l: "200" },
                    { size: "200 × 100", s: "/", m: "20", l: "100" },
                    { size: "200 × 200", s: "/", m: "20", l: "100" },
                  ].map((r, idx) => (
                    <tr key={idx} className="transition hover:bg-secondary/40">
                      <td className="px-4 py-3 font-mono font-semibold text-foreground">{r.size}</td>
                      <td className={`px-4 py-3 text-center font-mono border-l border-border ${r.s === "/" ? "text-muted-foreground" : "text-primary font-semibold"}`}>{r.s}</td>
                      <td className="px-4 py-3 text-center font-mono border-l border-border text-primary font-semibold">{r.m}</td>
                      <td className="px-4 py-3 text-center font-mono border-l border-border text-primary font-semibold">{r.l}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-sm leading-relaxed text-foreground">
            <div className="mb-2 text-[11px] font-semibold tracking-[0.2em] text-primary">📝 {tri("보관 · 재활성화", "STORAGE & REGENERATION", "保管・再活性化")}</div>
            {tri(
              "건조하고 통풍이 잘되는 장소에 보관하고, 휘발성 물질과 함께 보관하지 않습니다. 개봉 후에는 즉시 밀봉하여 흡습·타 화학물질 흡착으로 인한 분리성능 저하를 방지하세요. 장기 보관 또는 흡습된 TLC 실리카겔 플레이트는 60–90℃에서 1–2시간 건조·활성화 후 사용 가능합니다.",
              "Store in a dry, well-ventilated place and do not store together with volatile substances. Once opened, reseal immediately to prevent moisture or foreign chemical adsorption. Long-stored or moist TLC plates can be reactivated at 60–90 ℃ for 1–2 hours before use.",
              "乾燥した通気性の良い場所に保管し、揮発性物質と一緒に保管しないでください。開封後は直ちに密封して吸湿・他化学物質の吸着による分離性能低下を防止します。長期保管または吸湿したTLCシリカゲルプレートは60–90℃で1–2時間乾燥・活性化した後に使用可能です。"
            )}
          </div>
        </section>
      )}

      {/* Silica gel technical data tables — redesigned HTML rendering */}
      {silicaGelSpecs[product.slug] && <SpecTable spec={silicaGelSpecs[product.slug]} />}





      {isSilicaSand && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              PRODUCT LINEUP
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            📦 {tri("대표 제품", "Representative Products", "代表製品")}
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            {tri(
              "표준 입도별 4종 라인업을 기본 공급하며, 그 외 입도·SiO₂·Fe·백색도 사양은 상담을 통해 맞춤 생산이 가능합니다.",
              "Four standard grain-size grades are offered as our base lineup. Additional grain sizes, SiO₂, Fe, and whiteness specs are available via custom production upon consultation.",
              "標準粒度別の4種ラインアップを基本供給しており、その他の粒度・SiO₂・Fe・白色度仕様はご相談によりカスタム生産が可能です。"
            )}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-foreground text-background">
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-[0.2em]">
                      {tri("품번", "Code", "品番")}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-[0.2em]">
                      {tri("입도 (Mesh)", "Grain Size (Mesh)", "粒度 (Mesh)")}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-[0.2em]">
                      {tri("제품명", "Product", "製品名")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { code: "SLS20", mesh: "20 ~ 40 Mesh" },
                    { code: "SLS40", mesh: "40 ~ 70 Mesh" },
                    { code: "SLS70", mesh: "70 ~ 140 Mesh" },
                    { code: "SLS100", mesh: "100 ~ 200 Mesh" },
                  ].map((row) => (
                    <tr key={row.code} className="transition hover:bg-secondary/40">
                      <td className="px-6 py-4 font-mono text-base font-semibold text-primary">{row.code}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{row.mesh}</td>
                      <td className="px-6 py-4 text-muted-foreground">{tri("규사", "Silica Sand", "珪砂")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            {tri(
              "※ 표준 규격 외 입도, 이산화규소(SiO₂) 함량, 철(Fe) 함량, 백색도 등 다양한 사양은 상담을 통해 맞춤 생산이 가능합니다.",
              "※ Beyond the standard specifications, custom production is available for grain size, SiO₂ content, Fe content, whiteness, and more — please contact us for details.",
              "※ 標準規格以外の粒度、二酸化ケイ素(SiO₂)含有量、鉄(Fe)含有量、白色度など多様な仕様はご相談によりカスタム生産が可能です。"
            )}
          </p>
        </section>
      )}

      {/* Generic Sub-Models Lineup Table (for Advanced Series & Silica Powder) */}
      {subModels && !isSilicaSand && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              PRODUCT LINEUP
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            📦 {tri("대표 제품", "Representative Products", "代表製品")}
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            {tri(
              "아래 대표 라인업을 기본 공급하며, 그 외 입도·순도·표면처리 등 세부 사양은 상담을 통해 맞춤 생산이 가능합니다.",
              "The representative lineup below is our standard offering. Additional grain sizes, purity levels, surface treatments and detailed specs are available via custom production upon consultation.",
              "以下の代表ラインアップを基本供給しており、その他の粒度・純度・表面処理など詳細仕様はご相談によりカスタム生産が可能です。"
            )}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-foreground text-background">
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-[0.2em]">
                      {tri("품번", "Code", "品番")}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-[0.2em]">
                      {subModelsLabel ? tri(subModelsLabel.ko, subModelsLabel.en, subModelsLabel.ja) : tri("특성", "Feature", "特性")}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-[0.2em]">
                      {tri("제품명", "Product", "製品名")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {subModels.map((row) => (
                    <tr key={row.code} className="transition hover:bg-secondary/40">
                      <td className="px-6 py-4 font-mono text-base font-semibold text-primary">{row.code}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{tri(row.spec, row.enSpec ?? row.spec, row.jaSpec ?? row.spec)}</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {row.name || row.enName || row.jaName
                          ? tri(row.name ?? product.name, row.enName ?? product.enName, row.jaName ?? product.jaName ?? product.enName)
                          : tri(product.name, product.enName, product.jaName ?? product.enName)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            {tri(
              "※ 표준 규격 외 입도·순도·표면처리·조성 등 다양한 사양은 상담을 통해 맞춤 생산이 가능합니다.",
              "※ Beyond the standard specs, custom production is available for grain size, purity, surface treatment, composition and more — please contact us.",
              "※ 標準規格以外の粒度・純度・表面処理・組成など多様な仕様はご相談によりカスタム生産が可能です。"
            )}
          </p>
        </section>
      )}


      {/* Features */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
                KEY FEATURES
              </span>
              <h2 className="mt-6 text-3xl font-bold md:text-4xl">✨ {t("pd.features")}</h2>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f) => (
              <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
                <div className="relative">
                  <h3 className="text-lg font-bold leading-snug">{pick(lang, f.title, f.enTitle, f.jaTitle)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pick(lang, f.desc, f.enDesc, f.jaDesc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade A Detailed Technical Content */}
      {isGradeA && (
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              TECHNICAL DEEP-DIVE
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">🔍 {tri("상세 기술 프로파일", "Detailed Technical Profile", "詳細技術プロファイル")}</h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            {tri(
              "A급 용융 실리카(Fused Silica)의 화학·물리·전기·수분 관리 측면 핵심 특성을 정밀하게 정리하였습니다.",
              "An in-depth look at the chemical, physical, electrical, and moisture-control characteristics that define Grade A Fused Silica.",
              "Aグレード溶融シリカ(Fused Silica)の化学・物理・電気・水分管理面における核心特性を精密に整理しました。"
            )}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: FlaskConical,
                tag: "01",
                title: tri("화학적 순도 및 불순물 관리", "Chemical Purity & Impurity Control", "化学的純度および不純物管理"),
                intro: tri(
                  "SiO₂ 순도 99.9% 이상 — 금속 불순물 합계를 수십 ppm 수준으로 제어하였으며, 반도체·디스플레이 공정의 치명적 오염원인 알칼리·천이 금속을 극미량으로 통제했습니다.",
                  "SiO₂ purity ≥ 99.9% — total metallic impurities controlled to the tens-of-ppm level. Alkali and transition metals that are critical contamination sources in semiconductor and display processes are suppressed to trace levels.",
                  "SiO₂純度99.9%以上 — 金属不純物の合計を数十ppmレベルで制御し、半導体・ディスプレイ工程における致命的な汚染源であるアルカリ・遷移金属を極微量に抑制しています。"
                ),
                points: tri(
                  [
                    "Al < 0.01% — 내화벽돌·세라믹과의 반응성 최소화, 용융점 부근 구조적 결함 방지",
                    "Fe < 0.005% — 적외선 흡수 및 착색 억제로 광학적 투명성·절연성 확보",
                    "K · Na · Ca 각 < 0.003% — 검출 한계 수준으로 통제, 고전압·고온 환경 신뢰성 보장",
                    "Mg < 0.001% — 결정핵 형성 억제로 무정형 구조 유지에 기여",
                  ].join("|"),
                  [
                    "Al < 0.01% — minimizes reactivity with refractory bricks and ceramics, preventing structural defects near melting temperatures",
                    "Fe < 0.005% — suppresses infrared absorption and coloration, securing optical transparency and insulation",
                    "K · Na · Ca each < 0.003% — virtually at detection limit, ensuring reliability under high-voltage, high-temperature conditions",
                    "Mg < 0.001% — inhibits crystal nucleation, helping maintain the amorphous structure",
                  ].join("|"),
                  [
                    "Al < 0.01% — 耐火レンガ・セラミックスとの反応性を最小化し、融点付近での構造的欠陥を防止",
                    "Fe < 0.005% — 赤外線吸収および着色を抑制し、光学的透明性・絶縁性を確保",
                    "K · Na · Ca 各 < 0.003% — 検出限界レベルで制御、高電圧・高温環境での信頼性を保証",
                    "Mg < 0.001% — 結晶核形成を抑制し、非晶質構造の維持に寄与",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Gem,
                tag: "02",
                title: tri("물리적 특성 및 구조적 우수성", "Physical Properties & Structural Excellence", "物理的特性および構造的優秀性"),
                intro: tri(
                  "100% 무정형 구조와 초저열팽창, 균일한 밀도, 높은 표면 경도를 동시에 갖춰 정밀성과 내구성을 보장합니다.",
                  "A 100% amorphous structure with extremely low thermal expansion, uniform density, and high surface hardness — built for precision and durability.",
                  "100%非晶質構造、超低熱膨張、均一な密度、高い表面硬度を同時に備え、精密性と耐久性を保証します。"
                ),
                points: tri(
                  [
                    "100% 무정형 — 이방성 없음, 균일한 팽창·수축으로 열충격(Thermal Shock)에 매우 강함",
                    "열팽창계수 < 0.6 ×10⁻⁶/°C — 1000°C 이상의 급격한 승강온에도 치수 변화 극소",
                    "밀도 1.8 – 2.4 ×10³ kg/m³ — 기공(Void)·균열(Crack) 최소화, 가공 시 칩(Chip) 발생 억제",
                    "모스 경도 7 — 천연 석영 수준의 표면 경도로 마모 환경에서 우수한 내구성",
                  ].join("|"),
                  [
                    "100% amorphous — no anisotropy, uniform expansion/contraction, outstanding thermal-shock resistance",
                    "CTE < 0.6 ×10⁻⁶/°C — near-zero dimensional change even with rapid heating/cooling above 1000°C",
                    "Density 1.8 – 2.4 ×10³ kg/m³ — minimized voids and cracks, reducing chipping during machining",
                    "Mohs hardness 7 — quartz-level hardness for excellent wear resistance in abrasive environments",
                  ].join("|"),
                  [
                    "100%非晶質 — 異方性なし、均一な膨張・収縮で熱衝撃(Thermal Shock)に非常に強い",
                    "熱膨張係数 < 0.6 ×10⁻⁶/°C — 1000°C以上の急激な昇降温でも寸法変化が極小",
                    "密度 1.8 – 2.4 ×10³ kg/m³ — ボイド・クラックを最小化し、加工時のチップ発生を抑制",
                    "モース硬度7 — 天然石英レベルの表面硬度で摩耗環境での優れた耐久性",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Zap,
                tag: "03",
                title: tri("전기적 절연성 및 화학적 안정성", "Electrical Insulation & Chemical Stability", "電気的絶縁性および化学的安定性"),
                intro: tri(
                  "이온성 불순물·염소·pH를 정밀 관리하여 최고 수준의 절연성과 부식 방지, 공정 예측 가능성을 제공합니다.",
                  "Tight control of ionic impurities, chloride, and pH delivers maximum insulation, corrosion protection, and process predictability.",
                  "イオン性不純物・塩素・pHを精密に管理し、最高水準の絶縁性、腐食防止、工程の予測可能性を提供します。"
                ),
                points: tri(
                  [
                    "수성추출액 EC < 3 µs/cm — 누설 전류 최소화, 변압기·고주파 기판·반도체 세정 설비에 최적",
                    "수성추출액 Cl < 3 ppm — 스테인리스강·알루미늄 부식 효과적 방지, 화학·고온 수증기 환경 적합",
                    "수성추출액 pH 6.5 ± 1 — 중성 안정으로 정밀 세정·의약품 보관 용기 등 공정 관리 용이",
                  ].join("|"),
                  [
                    "Aqueous extract EC < 3 µs/cm — minimized leakage current, ideal for transformers, RF substrates, semiconductor cleaning lines",
                    "Aqueous extract Cl < 3 ppm — effectively prevents corrosion of stainless steel and aluminum in chemical/steam environments",
                    "Aqueous extract pH 6.5 ± 1 — neutral stability simplifies process control in precision cleaning and pharmaceutical packaging",
                  ].join("|"),
                  [
                    "水性抽出液 EC < 3 µs/cm — 漏洩電流を最小化、変圧器・高周波基板・半導体洗浄設備に最適",
                    "水性抽出液 Cl < 3 ppm — ステンレス鋼・アルミニウムの腐食を効果的に防止、化学・高温水蒸気環境に適合",
                    "水性抽出液 pH 6.5 ± 1 — 中性安定で精密洗浄・医薬品保管容器など工程管理が容易",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Thermometer,
                tag: "04",
                title: tri("수분 및 건도 관리 (Moisture < 0.1%)", "Moisture & Dryness Management (Moisture < 0.1%)", "水分および乾燥度管理 (Moisture < 0.1%)"),
                intro: tri(
                  "수분 함량 0.1% 미만 유지로 표면 수산기(Si-OH) 형성을 억제하여 고온 진공 환경에서의 가스 방출(Outgassing)을 최소화하고 치수 안정성을 확보합니다.",
                  "Moisture maintained below 0.1% suppresses surface Si-OH formation, minimizes outgassing in high-temperature vacuum, and secures dimensional stability.",
                  "水分含有量0.1%未満を維持することで、表面水酸基(Si-OH)の形成を抑制し、高温真空環境におけるガス放出(Outgassing)を最小化し、寸法安定性を確保します。"
                ),
                points: tri(
                  [
                    "흡습에 의한 표면 수산기(Si-OH) 형성 억제",
                    "고온 진공 환경에서의 가스 방출(Outgassing) 최소화",
                    "유리 전이점(Tg) 이하에서도 치수 안정성 확보",
                    "적외선 센서 윈도우·UV 램프 하우징 소재의 광투과율 저하 문제 해결",
                  ].join("|"),
                  [
                    "Suppresses surface hydroxyl (Si-OH) formation caused by moisture absorption",
                    "Minimizes outgassing in high-temperature, vacuum environments",
                    "Maintains dimensional stability even below the glass transition point (Tg)",
                    "Solves transmittance degradation issues in IR sensor windows and UV lamp housings",
                  ].join("|"),
                  [
                    "吸湿による表面水酸基(Si-OH)形成を抑制",
                    "高温真空環境におけるガス放出(Outgassing)を最小化",
                    "ガラス転移点(Tg)以下でも寸法安定性を確保",
                    "赤外線センサーウィンドウ・UVランプハウジング素材の光透過率低下問題を解決",
                  ].join("|")
                ).split("|"),
              },
            ].map((sec) => (
              <div
                key={sec.tag}
                className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <sec.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs tracking-[0.3em] text-primary">{sec.tag}</span>
                  </div>
                  <h4 className="mt-5 text-xl font-bold leading-snug md:text-2xl">{sec.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sec.intro}</p>
                  <ul className="mt-5 space-y-2.5">
                    {sec.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Grade B Detailed Technical Content */}
      {isGradeB && (
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              TECHNICAL DEEP-DIVE
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">🔍 {tri("상세 기술 프로파일", "Detailed Technical Profile", "詳細技術プロファイル")}</h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            {tri(
              "B급 용융 실리카(Fused Silica)의 화학·물리·공정 안정성·가공성 측면 핵심 특성을 정밀하게 정리하였습니다.",
              "An in-depth look at the chemical, physical, process-stability, and processability characteristics that define Grade B Fused Silica.",
              "Bグレード溶融シリカ(Fused Silica)の化学・物理・工程安定性・加工性の核心特性を精密に整理しました。"
            )}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: FlaskConical,
                tag: "01",
                title: tri("화학적 순도 및 불순물 관리", "Chemical Purity & Impurity Control", "化学的純度および不純物管理"),
                intro: tri(
                  "SiO₂ 순도 99.5% 이상 — 산업용 고신뢰 등급으로 알칼리·천이 금속 및 착색 요인을 ppm 단위로 제어하여 태양광·정밀 주조·특수 소재 공정에 최적화되어 있습니다.",
                  "SiO₂ purity ≥ 99.5% — a high-reliability industrial grade with alkalis, transition metals, and coloration sources controlled at the ppm level, optimized for solar, precision-casting, and specialty-material processes.",
                  "SiO₂純度99.5%以上 — アルカリ・遷移金属および着色要因をppm単位で制御した産業用高信頼グレードで、太陽光・精密鋳造・特殊素材工程に最適化されています。"
                ),
                points: tri(
                  [
                    "Al < 0.03% — 세라믹·내화재와의 반응성 억제, 소결·성형 시 결함 최소화",
                    "Fe < 0.02% — 태양광 잉곳·유리 원료의 색상 저하 및 광 흡수 방지",
                    "K · Na 각 < 0.01% — 알칼리 이온 최소화로 열화·마이그레이션 억제",
                    "Ca < 0.01%, Mg < 0.003% — 미량 관리로 화학적 안정성 및 균일한 물성 확보",
                  ].join("|"),
                  [
                    "Al < 0.03% — suppresses reactivity with ceramics and refractories, minimizing defects during sintering and forming",
                    "Fe < 0.02% — prevents color degradation and light absorption in solar ingots and glass feedstock",
                    "K · Na each < 0.01% — minimized alkali ions inhibit degradation and ion migration",
                    "Ca < 0.01%, Mg < 0.003% — trace-level control secures chemical stability and uniform properties",
                  ].join("|"),
                  [
                    "Al < 0.03% — セラミックス・耐火材との反応性を抑制し、焼結・成形時の欠陥を最小化",
                    "Fe < 0.02% — 太陽光インゴット・ガラス原料の色調低下および光吸収を防止",
                    "K · Na 各 < 0.01% — アルカリイオンを最小化し、劣化・マイグレーションを抑制",
                    "Ca < 0.01%, Mg < 0.003% — 微量管理により化学的安定性と均一な物性を確保",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Gem,
                tag: "02",
                title: tri("물리적 특성 및 구조적 안정성", "Physical Properties & Structural Stability", "物理的特性および構造的安定性"),
                intro: tri(
                  "98% 이상의 무정형 구조와 낮은 열팽창계수, 균일한 밀도로 고온 공정에서 뛰어난 치수 안정성과 열충격 저항성을 제공합니다.",
                  "Over 98% amorphous structure combined with a low CTE and uniform density delivers outstanding dimensional stability and thermal-shock resistance in high-temperature processes.",
                  "98%以上の非晶質構造と低い熱膨張係数、均一な密度により、高温工程で優れた寸法安定性と熱衝撃耐性を提供します。"
                ),
                points: tri(
                  [
                    "무정형상 > 98% — 이방성 최소화로 균일한 팽창·수축 거동 확보",
                    "열팽창계수 < 0.8 ×10⁻⁶/°C — 급격한 승강온 환경에서 균열·변형 억제",
                    "밀도 1.8 – 2.4 ×10³ kg/m³ — 안정된 벌크 밀도로 성형·주조 재현성 우수",
                    "무색 투명 ~ 고순도 백색 분말 — 최종 제품의 외관 품질과 신뢰성 향상",
                  ].join("|"),
                  [
                    "Amorphous > 98% — minimized anisotropy for uniform expansion/contraction behavior",
                    "CTE < 0.8 ×10⁻⁶/°C — suppresses cracking and deformation under rapid heating/cooling",
                    "Density 1.8 – 2.4 ×10³ kg/m³ — stable bulk density with excellent forming and casting reproducibility",
                    "Colorless-transparent to high-purity white powder — enhances appearance quality and reliability of finished products",
                  ].join("|"),
                  [
                    "非晶質 > 98% — 異方性を最小化し、均一な膨張・収縮挙動を確保",
                    "熱膨張係数 < 0.8 ×10⁻⁶/°C — 急激な昇降温環境で亀裂・変形を抑制",
                    "密度 1.8 – 2.4 ×10³ kg/m³ — 安定したバルク密度で成形・鋳造の再現性に優れる",
                    "無色透明~高純度白色粉末 — 最終製品の外観品質と信頼性を向上",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Zap,
                tag: "03",
                title: tri("공정 안정성 및 내구 성능", "Process Stability & Durability", "工程安定性および耐久性能"),
                intro: tri(
                  "산·알칼리·유기용제에 대한 우수한 내화학성과 안정된 열적 거동으로 태양광·전자·정밀 주조 등 고신뢰 산업 공정에서 예측 가능한 성능을 보장합니다.",
                  "Excellent chemical resistance against acids, alkalis, and organic solvents combined with stable thermal behavior guarantees predictable performance in high-reliability industries such as solar, electronics, and precision casting.",
                  "酸・アルカリ・有機溶剤に対する優れた耐化学性と安定した熱的挙動により、太陽光・電子・精密鋳造など高信頼産業工程で予測可能な性能を保証します。"
                ),
                points: tri(
                  [
                    "우수한 내화학성 — 산·알칼리·유기용제 환경에서 장기 안정성 확보",
                    "내열충격성 우수 — 1000°C 급 승강온에도 균열·박리 최소화",
                    "저알칼리 조성 — 반도체·태양광 잉곳 오염 리스크 저감",
                    "안정된 로트 관리 — 대량 산업 공급에 적합한 균일 품질 유지",
                  ].join("|"),
                  [
                    "Excellent chemical resistance — long-term stability under acid, alkali, and organic-solvent environments",
                    "Superior thermal-shock resistance — minimizes cracking and delamination under 1000°C-class heat cycling",
                    "Low-alkali composition — reduces contamination risk in semiconductor and solar ingot processes",
                    "Consistent lot control — uniform quality suited to large-scale industrial supply",
                  ].join("|"),
                  [
                    "優れた耐化学性 — 酸・アルカリ・有機溶剤環境で長期安定性を確保",
                    "内熱衝撃性に優れる — 1000°C級の昇降温でも亀裂・剥離を最小化",
                    "低アルカリ組成 — 半導体・太陽光インゴット汚染リスクを低減",
                    "安定したロット管理 — 大量産業供給に適した均一品質を維持",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Thermometer,
                tag: "04",
                title: tri("맞춤형 입도 및 가공성", "Custom Particle Size & Processability", "カスタム粒度および加工性"),
                intro: tri(
                  "60mm 과립부터 1µm(12500 메쉬) 미분까지 고객 공정에 맞춘 정밀 입도 제어가 가능하며, 수분 관리와 균일한 벌크 특성으로 우수한 가공성을 제공합니다.",
                  "Precise particle-size control from 60 mm granules down to 1 µm (12,500 mesh) fine powder tailored to customer processes, with moisture management and uniform bulk properties for outstanding processability.",
                  "60mm顆粒から1µm(12500メッシュ)微粉まで顧客工程に合わせた精密な粒度制御が可能で、水分管理と均一なバルク特性により優れた加工性を提供します。"
                ),
                points: tri(
                  [
                    "과립·중분·미분 등 광범위 입도 커스텀 대응 가능",
                    "수분 < 0.1% — 흡습에 의한 응집·가스 방출 억제",
                    "균일한 벌크 밀도 — 자동 계량·정량 공급 라인에서 재현성 확보",
                    "표면 균질성 — 컴파운드·주조 슬러리 내 분산성 향상",
                  ].join("|"),
                  [
                    "Wide-range custom sizing from granules to medium and fine powder",
                    "Moisture < 0.1% — suppresses agglomeration and outgassing caused by moisture absorption",
                    "Uniform bulk density — ensures reproducibility on automated dosing and metering lines",
                    "Surface homogeneity — improves dispersion in compounds and casting slurries",
                  ].join("|"),
                  [
                    "顆粒・中粉・微粉など幅広い粒度のカスタム対応が可能",
                    "水分 < 0.1% — 吸湿による凝集・ガス放出を抑制",
                    "均一なバルク密度 — 自動計量・定量供給ラインで再現性を確保",
                    "表面の均質性 — コンパウンド・鋳造スラリー中の分散性を向上",
                  ].join("|")
                ).split("|"),
              },
            ].map((sec) => (
              <div
                key={sec.tag}
                className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <sec.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs tracking-[0.3em] text-primary">{sec.tag}</span>
                  </div>
                  <h4 className="mt-5 text-xl font-bold leading-snug md:text-2xl">{sec.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sec.intro}</p>
                  <ul className="mt-5 space-y-2.5">
                    {sec.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Grade C Detailed Technical Content */}
      {isGradeC && (
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              TECHNICAL DEEP-DIVE
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">🔍 {tri("상세 기술 프로파일", "Detailed Technical Profile", "詳細技術プロファイル")}</h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            {tri(
              "C급 용융 실리카(Fused Silica)의 화학 조성·물리 구조·경제성·범용 적용성 측면의 핵심 특성을 정밀하게 정리하였습니다.",
              "An in-depth look at the chemical composition, physical structure, cost efficiency, and general-purpose applicability that define Grade C Fused Silica.",
              "Cグレード溶融シリカ(Fused Silica)の化学組成・物理構造・経済性・汎用適用性における核心特性を精密に整理しました。"
            )}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: FlaskConical,
                tag: "01",
                title: tri("화학 조성 및 품질 범위", "Chemical Composition & Quality Range", "化学組成および品質範囲"),
                intro: tri(
                  "SiO₂ 순도 99% 이상의 범용 산업 등급으로, 불순물 허용 범위를 명확히 규정하여 대량 생산 공정에서도 일정한 품질을 유지합니다.",
                  "A general-purpose industrial grade with ≥99% SiO₂ purity. Clearly defined impurity tolerances keep quality consistent even in high-volume production.",
                  "SiO₂純度99%以上の汎用産業グレードで、不純物の許容範囲を明確に規定し、大量生産工程でも一定の品質を維持します。"
                ),
                points: tri(
                  [
                    "SiO₂ > 99% — 건축·코팅·플라스틱 등 범용 산업 요구 수준 충족",
                    "Al < 0.1% — 내화·세라믹 배합에서 안정적인 소결 거동 확보",
                    "Fe < 0.04% — 일반 코팅·충전재 용도의 색상 요구를 충족",
                    "K · Na · Ca 각 < 0.05%, Mg < 0.01% — 알칼리 이온을 허용 범위 내로 관리",
                  ].join("|"),
                  [
                    "SiO₂ > 99% — meets general industrial requirements for construction, coatings, and plastics",
                    "Al < 0.1% — stable sintering behavior in refractory and ceramic formulations",
                    "Fe < 0.04% — satisfies color requirements for standard coatings and fillers",
                    "K · Na · Ca each < 0.05%, Mg < 0.01% — alkali ions kept within controlled tolerances",
                  ].join("|"),
                  [
                    "SiO₂ > 99% — 建築・コーティング・プラスチックなど汎用産業の要求水準を満たす",
                    "Al < 0.1% — 耐火・セラミックス配合で安定した焼結挙動を確保",
                    "Fe < 0.04% — 一般コーティング・充填材用途の色調要求を満たす",
                    "K · Na · Ca 各 < 0.05%、Mg < 0.01% — アルカリイオンを許容範囲内で管理",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Gem,
                tag: "02",
                title: tri("물리 구조 및 내열 안정성", "Physical Structure & Thermal Stability", "物理構造および耐熱安定性"),
                intro: tri(
                  "95% 이상의 무정형 구조와 낮은 열팽창계수로 일반 고온 공정에서 균열·변형을 억제하고, 균일한 밀도로 배합 재현성을 확보합니다.",
                  "Over 95% amorphous structure with a low CTE suppresses cracking and deformation in standard high-temperature processes, while uniform density ensures batching reproducibility.",
                  "95%以上の非晶質構造と低い熱膨張係数により、一般的な高温工程での亀裂・変形を抑制し、均一な密度で配合再現性を確保します。"
                ),
                points: tri(
                  [
                    "무정형상 > 95% — 열적·화학적으로 안정된 비결정 구조 유지",
                    "열팽창계수 < 1.2 ×10⁻⁶/°C — 일반 고온 환경에서 내열충격성 확보",
                    "밀도 1.8 – 2.4 ×10³ kg/m³ — 균일한 벌크 밀도로 계량·배합 편차 최소화",
                    "모스 경도 7 — 연마재·내마모 충전재로 활용 가능한 표면 경도",
                  ].join("|"),
                  [
                    "Amorphous > 95% — maintains a thermally and chemically stable non-crystalline structure",
                    "CTE < 1.2 ×10⁻⁶/°C — thermal-shock resistance for standard high-temperature service",
                    "Density 1.8 – 2.4 ×10³ kg/m³ — uniform bulk density minimizes dosing and batching deviation",
                    "Mohs hardness 7 — surface hardness suitable for abrasives and wear-resistant fillers",
                  ].join("|"),
                  [
                    "非晶質 > 95% — 熱的・化学的に安定した非結晶構造を維持",
                    "熱膨張係数 < 1.2 ×10⁻⁶/°C — 一般的な高温環境で耐熱衝撃性を確保",
                    "密度 1.8 – 2.4 ×10³ kg/m³ — 均一なバルク密度で計量・配合のばらつきを最小化",
                    "モース硬度7 — 研磨材・耐摩耗充填材として活用可能な表面硬度",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Zap,
                tag: "03",
                title: tri("내화학성 및 공정 신뢰성", "Chemical Resistance & Process Reliability", "耐化学性および工程信頼性"),
                intro: tri(
                  "산·알칼리·유기용제에 대한 높은 내구성과 낮은 수분 함량으로 장기 보관 및 연속 생산 라인에서도 안정적인 거동을 보장합니다.",
                  "High durability against acids, alkalis, and organic solvents plus low moisture content ensures stable behavior in long-term storage and continuous production lines.",
                  "酸・アルカリ・有機溶剤に対する高い耐久性と低い水分含有量により、長期保管および連続生産ラインでも安定した挙動を保証します。"
                ),
                points: tri(
                  [
                    "우수한 내화학성 — 산·알칼리·유기용제 환경에서 장기 안정성 유지",
                    "수분 < 0.1% — 흡습에 의한 응집·케이킹 및 유동성 저하 방지",
                    "무기 불연성 — 화재 안전성이 요구되는 건자재·도료 배합에 적합",
                    "로트 간 편차 최소화 — 대량 산업 공급에 적합한 안정적 품질 관리",
                  ].join("|"),
                  [
                    "Excellent chemical resistance — long-term stability in acid, alkali, and solvent environments",
                    "Moisture < 0.1% — prevents agglomeration, caking, and flowability loss from moisture pickup",
                    "Inorganic and non-combustible — suitable for fire-safe building materials and paint formulations",
                    "Minimized lot-to-lot variation — stable quality control for large-volume industrial supply",
                  ].join("|"),
                  [
                    "優れた耐化学性 — 酸・アルカリ・有機溶剤環境で長期安定性を維持",
                    "水分 < 0.1% — 吸湿による凝集・ケーキングおよび流動性低下を防止",
                    "無機・不燃性 — 防火性が求められる建材・塗料配合に適合",
                    "ロット間ばらつきの最小化 — 大量産業供給に適した安定した品質管理",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Thermometer,
                tag: "04",
                title: tri("경제성 및 범용 적용성", "Cost Efficiency & General-Purpose Applicability", "経済性および汎用適用性"),
                intro: tri(
                  "과립(60mm)부터 미분(1µm)까지 맞춤 입도 생산이 가능하며, 대량 산업 수요에 최적화된 원가 구조로 폭넓은 용도에 경제적으로 적용됩니다.",
                  "Custom sizing from 60 mm granules to 1 µm fine powder, combined with a cost structure optimized for high-volume industrial demand, enables economical use across a broad range of applications.",
                  "顆粒(60mm)から微粉(1µm)まで粒度のカスタム生産が可能で、大量産業需要に最適化されたコスト構造により幅広い用途に経済的に適用されます。"
                ),
                points: tri(
                  [
                    "과립 60mm ~ 미분 1µm(12500 메쉬) 범위의 고객 맞춤 입도 생산",
                    "건축·건자재 — 인조대리석, 특수 모르타르, 에폭시 바닥재 충전재",
                    "페인트·코팅 — 내마모·내후성 향상용 기능성 충전재",
                    "플라스틱·고무 및 연마재 — 치수 안정성 향상, 샌드블라스팅·연마 소재",
                  ].join("|"),
                  [
                    "Custom particle sizing from 60 mm granules down to 1 µm (12,500 mesh) fine powder",
                    "Construction — engineered stone, specialty mortars, epoxy flooring fillers",
                    "Paints & coatings — functional filler improving abrasion and weather resistance",
                    "Plastics, rubber & abrasives — dimensional stability, sandblasting and polishing media",
                  ].join("|"),
                  [
                    "顆粒60mm~微粉1µm(12500メッシュ)範囲の顧客カスタム粒度生産",
                    "建築・建材 — 人造大理石、特殊モルタル、エポキシ床材の充填材",
                    "塗料・コーティング — 耐摩耗・耐候性向上のための機能性充填材",
                    "プラスチック・ゴムおよび研磨材 — 寸法安定性向上、サンドブラスト・研磨素材",
                  ].join("|")
                ).split("|"),
              },
            ].map((sec) => (
              <div
                key={sec.tag}
                className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <sec.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs tracking-[0.3em] text-primary">{sec.tag}</span>
                  </div>
                  <h4 className="mt-5 text-xl font-bold leading-snug md:text-2xl">{sec.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sec.intro}</p>
                  <ul className="mt-5 space-y-2.5">
                    {sec.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SL-HS12 Detailed Technical Profile */}
      {isHS12 && (
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              TECHNICAL DEEP-DIVE
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">🔍 {tri("상세 기술 프로파일", "Detailed Technical Profile", "詳細技術プロファイル")}</h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            {tri(
              "SL-HS12 고순도 결정질 실리카 미분의 화학 조성·입도 설계·물성·공정 품질 관리 특성을 정밀하게 정리하였습니다.",
              "A precise breakdown of the chemical composition, particle-size design, physical properties and process quality control that define SL-HS12 high-purity crystalline silica micro-powder.",
              "SL-HS12 高純度結晶質シリカ微粉の化学組成・粒度設計・物性・工程品質管理特性を精密に整理しました。"
            )}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: FlaskConical,
                tag: "01",
                title: tri("화학 조성 및 순도 관리", "Chemical Composition & Purity Control", "化学組成および純度管理"),
                intro: tri(
                  "규격 SiO₂ ≥99.85%, 대표치 99.92%의 고순도 결정질 SiO₂로, 주요 금속 불순물을 ppm 단위로 상시 관리합니다.",
                  "High-purity crystalline SiO₂ with a specification of ≥99.85% and a typical value of 99.92%, with key metallic impurities controlled at the ppm level.",
                  "規格SiO₂ ≥99.85%、代表値99.92%の高純度結晶質SiO₂で、主要金属不純物をppm単位で常時管理します。"
                ),
                points: tri(
                  [
                    "SiO₂ 규격 ≥99.85 % · 대표 99.92 % — 규격 대비 여유 있는 품질 마진",
                    "Al ≤100 ppm (대표 35 ppm) — 소결·배합 거동의 안정성 확보",
                    "Fe ≤50 ppm (대표 3 ppm) — 착색 및 전기 특성 저하 요인 최소화",
                    "Ca · K · Na 각 ≤50 ppm (대표 5 / 6 / 7 ppm), Mg 대표 0.5 ppm — 알칼리 이온 최소화",
                  ].join("|"),
                  [
                    "SiO₂ spec ≥99.85% · typical 99.92% — comfortable quality margin over specification",
                    "Al ≤100 ppm (typ. 35 ppm) — stable sintering and formulation behavior",
                    "Fe ≤50 ppm (typ. 3 ppm) — minimizes discoloration and electrical degradation",
                    "Ca · K · Na each ≤50 ppm (typ. 5 / 6 / 7 ppm), Mg typ. 0.5 ppm — alkali ions kept minimal",
                  ].join("|"),
                  [
                    "SiO₂ 規格 ≥99.85 % · 代表値 99.92 % — 規格に対し余裕ある品質マージン",
                    "Al ≤100 ppm (代表値35 ppm) — 焼結・配合挙動の安定性を確保",
                    "Fe ≤50 ppm (代表値3 ppm) — 着色および電気特性低下要因を最小化",
                    "Ca · K · Na 各 ≤50 ppm (代表値5 / 6 / 7 ppm)、Mg 代表値0.5 ppm — アルカリイオンを最小化",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: BarChart3,
                tag: "02",
                title: tri("입도 설계 및 분포 제어", "Particle Size Design & Distribution Control", "粒度設計および分布制御"),
                intro: tri(
                  "D50 12±2 µm를 기준으로 좁고 균일한 분포를 유지하며, 고객 사용 조건에 따라 PSD 커스터마이징이 가능합니다.",
                  "A narrow, uniform distribution centered on D50 12±2 µm, with PSD customization available per the customer's usage conditions.",
                  "D50 12±2 µmを基準に狭く均一な分布を維持し、使用条件に応じたPSDのカスタマイズが可能です。"
                ),
                points: tri(
                  [
                    "D10 2.4 µm · D50 12.1 µm · D100 28.6 µm (대표 분포)",
                    "미분 과다·조대 입자 최소화로 배합 재현성 향상",
                    "고충전 시에도 낮은 점도 유지 — 성형성과 표면 품질 개선",
                    "PSD는 실제 사용 상황 및 요구 사양에 맞춰 조정 가능",
                  ].join("|"),
                  [
                    "D10 2.4 µm · D50 12.1 µm · D100 28.6 µm (typical distribution)",
                    "Minimal fines and oversize particles for reproducible compounding",
                    "Low viscosity maintained even at high loading — better moldability and surface quality",
                    "PSD adjustable to the actual usage situation and required specification",
                  ].join("|"),
                  [
                    "D10 2.4 µm · D50 12.1 µm · D100 28.6 µm (代表分布)",
                    "微粉過多・粗大粒子を最小化し配合再現性を向上",
                    "高充填時も低粘度を維持 — 成形性と表面品位を改善",
                    "PSDは実際の使用状況・要求仕様に応じて調整可能",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Gem,
                tag: "03",
                title: tri("결정 구조 및 물리 특성", "Crystal Structure & Physical Properties", "結晶構造および物理特性"),
                intro: tri(
                  "천연 고순도 석영 기반의 α-Quartz 결정 구조로, 높은 경도와 화학적 안정성을 제공합니다.",
                  "An α-quartz crystal structure derived from natural high-purity quartz, delivering high hardness and chemical stability.",
                  "天然高純度石英ベースのα-Quartz結晶構造で、高硬度と化学的安定性を提供します。"
                ),
                points: tri(
                  [
                    "α-Quartz(삼방정계) 결정질 SiO₂ — Mohs 경도 7",
                    "산·알칼리(HF 제외) 및 대부분의 용제에 대한 우수한 내화학성",
                    "높은 체적 저항과 안정적인 절연 특성",
                    "용융 실리카 대비 경제적이며 원료 수급이 안정적",
                  ].join("|"),
                  [
                    "α-quartz (trigonal) crystalline SiO₂ — Mohs hardness 7",
                    "Excellent chemical resistance to acids, alkalis (except HF) and most solvents",
                    "High volume resistivity and stable insulating behavior",
                    "More economical than fused silica with stable raw-material availability",
                  ].join("|"),
                  [
                    "α-Quartz(三方晶系)結晶質SiO₂ — モース硬度7",
                    "酸・アルカリ(HFを除く)および大半の溶剤に対する優れた耐薬品性",
                    "高い体積抵抗と安定した絶縁特性",
                    "溶融シリカ対比で経済的、原料供給も安定",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Shield,
                tag: "04",
                title: tri("공정 · 품질 관리", "Process & Quality Assurance", "工程・品質管理"),
                intro: tri(
                  "파쇄·분급 전 공정에서 수분과 오염을 통제하여 로트 간 편차를 최소화합니다.",
                  "Moisture and contamination are controlled across the entire crushing and grading process to minimize lot-to-lot variation.",
                  "破砕・分級の全工程で水分と汚染を管理し、ロット間ばらつきを最小化します。"
                ),
                points: tri(
                  [
                    "수분 ≤0.2 % (대표 0.1 %) — 응집·기포 발생 억제",
                    "금속 오염 방지 설비 기반의 파쇄·분급 라인 운용",
                    "로트별 성적서(SiO₂·금속 불순물·수분·입도) 제공",
                    "원산지: 중국 · 안정적 대량 공급 체계",
                  ].join("|"),
                  [
                    "Moisture ≤0.2% (typ. 0.1%) — suppresses agglomeration and voids",
                    "Crushing and grading lines built to prevent metallic contamination",
                    "Per-lot certificate of analysis (SiO₂, metallic impurities, moisture, PSD)",
                    "Country of origin: China · stable high-volume supply",
                  ].join("|"),
                  [
                    "水分 ≤0.2 % (代表値0.1 %) — 凝集・気泡発生を抑制",
                    "金属汚染防止設備に基づく破砕・分級ラインの運用",
                    "ロット別成績書(SiO₂・金属不純物・水分・粒度)を提供",
                    "原産地:中国 · 安定した大量供給体制",
                  ].join("|")
                ).split("|"),
              },
            ].map((sec) => (
              <div
                key={sec.tag}
                className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <sec.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs tracking-[0.3em] text-primary">{sec.tag}</span>
                  </div>
                  <h4 className="mt-5 text-xl font-bold leading-snug md:text-2xl">{sec.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sec.intro}</p>
                  <ul className="mt-5 space-y-2.5">
                    {sec.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Amorphous Ceramic Frit Detailed Technical Profile */}
      {isFrit && (
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              TECHNICAL DEEP-DIVE
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">🔍 {tri("상세 기술 프로파일", "Detailed Technical Profile", "詳細技術プロファイル")}</h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            {tri(
              "비정질 세라믹 프리트의 유리 조성 설계, 용융·급냉 공정, 소성 거동 및 품질 관리 특성을 정밀하게 정리하였습니다.",
              "A precise breakdown of the glass composition design, melting and quenching process, firing behavior and quality control that define this amorphous ceramic frit.",
              "非晶質セラミックフリットのガラス組成設計、溶融・急冷工程、焼成挙動および品質管理特性を精密に整理しました。"
            )}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: FlaskConical,
                tag: "01",
                title: tri("유리 조성 설계 (칼슘-알루미노실리케이트계)", "Glass Composition Design (Calcium Aluminosilicate System)", "ガラス組成設計(カルシウムアルミノシリケート系)"),
                intro: tri(
                  "SiO₂-Al₂O₃-CaO 3원계를 기본 골격으로 Na₂O·K₂O·MgO를 완충제로 배합한 균형형 프리트 조성입니다.",
                  "A balanced frit composition built on the SiO₂-Al₂O₃-CaO ternary system with Na₂O, K₂O and MgO as buffering components.",
                  "SiO₂-Al₂O₃-CaOの三元系を基本骨格に、Na₂O・K₂O・MgOを緩衝成分として配合したバランス型フリット組成です。"
                ),
                points: tri(
                  [
                    "SiO₂ 65.68 % — 유리질(비정질) 네트워크를 형성하는 주 골격 성분",
                    "CaO 12.90 % — 융점 저하와 화학적 내구성(내알칼리·내수성) 동시 확보",
                    "Al₂O₃ 10.00 % — 점도 조절, 실금(Crazing) 방지, 소성 온도 범위 확대",
                    "Na₂O 4.14 % / K₂O 1.98 % — 강력한 용융제(Flux)로 용융 촉진 및 광택 개선",
                    "MgO 4.09 % — 고온 점도 안정화 및 매끄러운 표면 질감 형성",
                  ].join("|"),
                  [
                    "SiO₂ 65.68% — primary network former of the vitreous (amorphous) structure",
                    "CaO 12.90% — lowers melting point while securing chemical durability (alkali/water resistance)",
                    "Al₂O₃ 10.00% — viscosity control, crazing prevention and a wider firing window",
                    "Na₂O 4.14% / K₂O 1.98% — strong fluxes that promote melting and improve gloss",
                    "MgO 4.09% — stabilizes high-temperature viscosity and yields a smooth surface texture",
                  ].join("|"),
                  [
                    "SiO₂ 65.68 % — ガラス質(非晶質)ネットワークを形成する主骨格成分",
                    "CaO 12.90 % — 融点低下と化学的耐久性(耐アルカリ・耐水性)を同時に確保",
                    "Al₂O₃ 10.00 % — 粘度調整、貫入(クレージング)防止、焼成温度範囲の拡大",
                    "Na₂O 4.14 % / K₂O 1.98 % — 強力な溶融剤(フラックス)として溶融促進と光沢改善",
                    "MgO 4.09 % — 高温粘度の安定化および滑らかな表面質感の形成",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Shield,
                tag: "02",
                title: tri("불순물 관리 및 무붕소 조성", "Impurity Control & Boron-Free Composition", "不純物管理および無ホウ素組成"),
                intro: tri(
                  "철분과 붕소를 극소량으로 관리하여 백색도·발색 재현성과 규제 대응력을 동시에 확보합니다.",
                  "Iron and boron are held to trace levels, simultaneously securing whiteness, color reproducibility and regulatory compliance.",
                  "鉄分とホウ素を極少量に管理し、白色度・発色再現性と規制対応力を同時に確保します。"
                ),
                points: tri(
                  [
                    "Fe₂O₃ 0.09 % (0.1 % 이하) — 착색 요인 최소화로 고백색 유약 기재에 적합",
                    "B₂O₃ < 0.05 % — 무붕소(Boron-free) 조성으로 붕소 규제 대응 및 고온 안정성 확보",
                    "붕소 휘발에 의한 표면 결점(핀홀·스컴) 리스크 저감",
                    "안료 발색 왜곡이 적어 컬러 유약·엔고베 배합의 재현성 향상",
                  ].join("|"),
                  [
                    "Fe₂O₃ 0.09% (below 0.1%) — minimal coloring contribution, ideal for high-whiteness glaze bases",
                    "B₂O₃ < 0.05% — boron-free composition for regulatory compliance and high-temperature stability",
                    "Reduced risk of surface defects (pinholes, scumming) caused by boron volatilization",
                    "Low pigment-shift, improving reproducibility of colored glaze and engobe formulations",
                  ].join("|"),
                  [
                    "Fe₂O₃ 0.09 %(0.1 %以下) — 着色要因を最小化し高白色釉薬基材に最適",
                    "B₂O₃ < 0.05 % — 無ホウ素(Boron-free)組成でホウ素規制対応と高温安定性を確保",
                    "ホウ素揮発による表面欠点(ピンホール・スカム)リスクを低減",
                    "顔料の発色ずれが少なく、カラー釉薬・エンゴーベ配合の再現性を向上",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: Gem,
                tag: "03",
                title: tri("비정질 구조 및 소성 거동", "Amorphous Structure & Firing Behavior", "非晶質構造および焼成挙動"),
                intro: tri(
                  "고온 완전 용융 후 수냉 급냉으로 결정 성장을 억제하여, 저온에서 균일하게 연화·용융되는 유리 상태를 구현합니다.",
                  "Full high-temperature melting followed by water quenching suppresses crystal growth, producing a glassy state that softens and melts uniformly at lower temperatures.",
                  "高温での完全溶融後、水冷急冷により結晶成長を抑制し、低温で均一に軟化・溶融するガラス状態を実現します。"
                ),
                points: tri(
                  [
                    "결정상 부재 — 조성 편석 없이 균일한 용융·유리막 형성",
                    "소성 온도 하향 가능 — 에너지 절감 및 소결 밀도·강도 향상",
                    "타일 몸체·엔고베 첨가 시 융합 촉진제로 작용",
                    "매끄럽고 광택이 우수한 유약 표면 구현, 실금 발생 억제",
                  ].join("|"),
                  [
                    "No crystalline phase — uniform melting and glass-film formation without segregation",
                    "Allows lower firing temperature — energy savings with higher sintered density and strength",
                    "Acts as a fusion promoter when added to tile bodies and engobes",
                    "Produces a smooth, high-gloss glaze surface while suppressing crazing",
                  ].join("|"),
                  [
                    "結晶相が存在せず — 組成偏析のない均一な溶融・ガラス膜形成",
                    "焼成温度の低減が可能 — 省エネかつ焼結密度・強度の向上",
                    "タイル素地・エンゴーベへの添加で融合促進剤として作用",
                    "滑らかで光沢に優れた釉薬表面を実現し、貫入の発生を抑制",
                  ].join("|")
                ).split("|"),
              },
              {
                icon: BarChart3,
                tag: "04",
                title: tri("입도 설계 · 작업성 및 품질 관리", "Particle Size, Handling & Quality Assurance", "粒度設計・作業性および品質管理"),
                intro: tri(
                  "0.1~0.7 mm 과립 형태의 2종 입도로 공급되어 계량·이송·습식 분쇄 공정에서 우수한 작업성을 제공합니다.",
                  "Supplied in two granular grades spanning 0.1–0.7 mm, delivering excellent handling in weighing, conveying and wet-milling operations.",
                  "0.1~0.7 mmの顆粒形態2種の粒度で供給され、計量・搬送・湿式粉砕工程で優れた作業性を提供します。"
                ),
                points: tri(
                  [
                    "입도 0.1 ~ 0.35 mm / 0.35 ~ 0.7 mm — 용도별 선택 공급",
                    "과립 형태로 비산·분진 발생이 적고 계량 정확도 우수",
                    "볼밀 습식 분쇄 시 빠른 분쇄 효율과 균일한 슬립 분산성",
                    "로트별 성적서(조성·입도·수분) 제공 · 원산지: 중국 · 안정 대량 공급",
                  ].join("|"),
                  [
                    "Particle size 0.1–0.35 mm / 0.35–0.7 mm — selectable by application",
                    "Granular form minimizes dusting and improves weighing accuracy",
                    "Fast milling efficiency and uniform slip dispersion in wet ball milling",
                    "Per-lot certificate (composition, PSD, moisture) · Country of origin: China · stable high-volume supply",
                  ].join("|"),
                  [
                    "粒度 0.1~0.35 mm / 0.35~0.7 mm — 用途別に選択供給",
                    "顆粒形態のため飛散・粉塵が少なく、計量精度に優れる",
                    "ボールミル湿式粉砕時の高い粉砕効率と均一なスリップ分散性",
                    "ロット別成績書(組成・粒度・水分)提供 · 原産地:中国 · 安定した大量供給",
                  ].join("|")
                ).split("|"),
              },
            ].map((sec) => (
              <div
                key={sec.tag}
                className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <sec.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs tracking-[0.3em] text-primary">{sec.tag}</span>
                  </div>
                  <h4 className="mt-5 text-xl font-bold leading-snug md:text-2xl">{sec.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sec.intro}</p>
                  <ul className="mt-5 space-y-2.5">
                    {sec.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}





      {/* SL-A81 Detailed Content */}
      {product.slug === "precipitated-silica-sl-a81" && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          {/* Application Areas */}
          <div className="mt-16">
            <div className="flex items-center gap-3">
              <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
                APPLICATIONS
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold md:text-3xl">🏭 {tri("주요 적용 분야", "Key Application Areas", "主な適用分野")}</h3>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: Leaf,
                  title: tri("그린타이어 (저연비 타이어)", "Green Tires (Low-Fuel-Consumption Tires)", "グリーンタイヤ(低燃費タイヤ)"),
                  points: tri(
                    "넓은 비표면적으로 고무 매트릭스와의 결합력 증가|회전 저항을 낮춰 연비 향상에 기여|젖은 노면에서의 그립력과 내마모성 동시 개선",
                    "Wide specific surface area increases bonding with the rubber matrix|Reduces rolling resistance to improve fuel economy|Simultaneously improves wet-grip and abrasion resistance",
                    "広い比表面積によりゴムマトリックスとの結合力が増加|回転抵抗を低減し燃費向上に寄与|濡れた路面でのグリップ力と耐摩耗性を同時に改善"
                  ).split("|"),
                },
                {
                  icon: Zap,
                  title: tri("고성능 실리콘 고무 (Silicone Rubber)", "High-Performance Silicone Rubber", "高性能シリコーンゴム (Silicone Rubber)"),
                  points: tri(
                    "높은 비표면적으로 인장강도, 내열성, 내크리프성 향상|투명/반투명 실리콘 제품에도 백색도 영향을 최소화하며 보강 가능|저압축 영구줄음(Compression set) 특성 개선",
                    "High specific surface area improves tensile strength, heat resistance, and creep resistance|Reinforces transparent/semi-transparent silicone products with minimal whitening effect|Improves compression set characteristics",
                    "高い比表面積により引張強度、耐熱性、耐クリープ性を向上|透明/半透明シリコーン製品にも白色度への影響を最小化して補強可能|圧縮永久ひずみ(Compression set)特性を改善"
                  ).split("|"),
                },
                {
                  icon: Shield,
                  title: tri("접착제 및 실런트 (Adhesives & Sealants)", "Adhesives & Sealants", "接着剤およびシーラント (Adhesives & Sealants)"),
                  points: tri(
                    "증점 효과 및 틱소트로피(thixotropy) 부여로 도포성 향상|접착 강도 및 내수성, 내열접착력 향상|에폭시, 우레탄, 아크릴, 실리콘계 접착제에 광범위 적용",
                    "Thickening and thixotropy effects improve coatability|Enhanced adhesion strength, water resistance, and heat-resistant bonding|Widely applicable to epoxy, urethane, acrylic, and silicone adhesives",
                    "増粘効果およびチクソトロピー(thixotropy)付与により塗布性を向上|接着強度および耐水性、耐熱接着力を向上|エポキシ、ウレタン、アクリル、シリコーン系接着剤に幅広く適用"
                  ).split("|"),
                },
                {
                  icon: Factory,
                  title: tri("기타 첨단 소재 분야", "Other Advanced Material Fields", "その他の先端素材分野"),
                  points: tri(
                    "배터리 분리막, 촉매 지지체, 기능성 코팅, 방열 소재 등|의약품/화장품용 유동성 개선제, 항결집제|고순도가 요구되는 전자재료 봉지재",
                    "Battery separators, catalyst supports, functional coatings, heat-dissipation materials|Flow improvers and anti-caking agents for pharmaceuticals/cosmetics|Encapsulant for electronic materials requiring high purity",
                    "電池セパレーター、触媒担体、機能性コーティング、放熱素材など|医薬品/化粧品用の流動性改善剤、固結防止剤|高純度が要求される電子材料封止材"
                  ).split("|"),
                },
              ].map((app) => (
                <div
                  key={app.title}
                  className="overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="flex items-center gap-3 border-b border-border bg-secondary/30 px-6 py-4">
                    <app.icon className="h-5 w-5 text-primary" />
                    <h4 className="font-bold">{app.title}</h4>
                  </div>
                  <ul className="space-y-3 p-6">
                    {app.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SLH-380S Detailed Applications */}
      {product.slug === "fumed-silica-slh-380s" && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              APPLICATIONS
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold md:text-3xl">🏭 {tri("적용 분야", "Application Areas", "適用分野")}</h3>
          <p className="mt-4 text-muted-foreground">
            {tri(
              "SLH-380S는 다양한 산업 분야에서 사용됩니다.",
              "SLH-380S is used in a wide variety of industrial fields.",
              "SLH-380Sは多様な産業分野で使用されています。"
            )}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Wrench,
                title: tri("① 실리콘 및 실란트", "① Silicone & Sealants", "① シリコーン・シーラント"),
                uses: tri(
                  "RTV 실리콘|구조용 실란트|건축용 실란트|자동차 실란트",
                  "RTV Silicone|Structural Sealants|Construction Sealants|Automotive Sealants",
                  "RTVシリコーン|構造用シーラント|建築用シーラント|自動車用シーラント"
                ).split("|"),
                effects: tri(
                  "점도 증가|처짐 방지|기계적 강도 향상|작업성 개선",
                  "Viscosity increase|Sag prevention|Improved mechanical strength|Improved workability",
                  "粘度増加|垂れ防止|機械的強度向上|作業性改善"
                ).split("|"),
              },
              {
                icon: Paintbrush,
                title: tri("② 코팅 및 도료", "② Coatings & Paints", "② コーティング・塗料"),
                uses: tri(
                  "산업용 도료|자동차 도료|UV 코팅|목재 코팅",
                  "Industrial Paints|Automotive Paints|UV Coatings|Wood Coatings",
                  "産業用塗料|自動車塗料|UVコーティング|木材コーティング"
                ).split("|"),
                effects: tri(
                  "침강 방지|내스크래치성 향상|점도 안정화|무광 효과|저장 안정성 향상",
                  "Anti-settling|Improved scratch resistance|Viscosity stabilization|Matte effect|Improved storage stability",
                  "沈降防止|耐スクラッチ性向上|粘度安定化|マット効果|貯蔵安定性向上"
                ).split("|"),
              },
              {
                icon: Pen,
                title: tri("③ 잉크", "③ Inks", "③ インク"),
                uses: tri("UV Ink|Screen Ink|Digital Ink", "UV Ink|Screen Ink|Digital Ink", "UVインク|スクリーンインク|デジタルインク").split("|"),
                effects: tri(
                  "안료 분산|침강 방지|인쇄 품질 향상|점도 조절",
                  "Pigment dispersion|Anti-settling|Improved print quality|Viscosity control",
                  "顔料分散|沈降防止|印刷品質向上|粘度調節"
                ).split("|"),
              },
              {
                icon: Link2,
                title: tri("④ 접착제", "④ Adhesives", "④ 接着剤"),
                uses: tri("에폭시|우레탄|아크릴 접착제", "Epoxy|Urethane|Acrylic Adhesives", "エポキシ|ウレタン|アクリル接着剤").split("|"),
                effects: tri(
                  "흐름성 제어|점착성 개선|저장 안정성 향상",
                  "Flow control|Improved tack|Improved storage stability",
                  "流動性制御|粘着性改善|貯蔵安定性向上"
                ).split("|"),
              },
              {
                icon: Layers,
                title: tri("⑤ 복합소재", "⑤ Composites", "⑤ 複合素材"),
                uses: tri("CFRP|GFRP|에폭시 복합재", "CFRP|GFRP|Epoxy Composites", "CFRP|GFRP|エポキシ複合材").split("|"),
                effects: tri(
                  "강도 향상|충격 저항 향상|균열 방지",
                  "Improved strength|Improved impact resistance|Crack prevention",
                  "強度向上|耐衝撃性向上|亀裂防止"
                ).split("|"),
              },
              {
                icon: Battery,
                title: tri("⑥ 배터리 소재", "⑥ Battery Materials", "⑥ 電池材料"),
                uses: tri("리튬이온 배터리|전극 슬러리", "Lithium-ion Batteries|Electrode Slurries", "リチウムイオン電池|電極スラリー").split("|"),
                effects: tri(
                  "점도 조절|분산 안정화|슬러리 균일성 향상",
                  "Viscosity control|Dispersion stabilization|Improved slurry uniformity",
                  "粘度調節|分散安定化|スラリー均一性向上"
                ).split("|"),
              },
              {
                icon: Sparkles,
                title: tri("⑦ 화장품", "⑦ Cosmetics", "⑦ 化粧品"),
                uses: tri(
                  "파우더|크림|선크림|메이크업 제품",
                  "Powder|Cream|Sunscreen|Makeup Products",
                  "パウダー|クリーム|日焼け止め|メイクアップ製品"
                ).split("|"),
                effects: tri(
                  "사용감 개선|유분 흡수|점도 조절",
                  "Improved feel|Oil absorption|Viscosity control",
                  "使用感改善|油分吸収|粘度調節"
                ).split("|"),
              },
            ].map((app) => (
              <div
                key={app.title}
                className="overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="flex items-center gap-3 border-b border-border bg-secondary/30 px-6 py-4">
                  <app.icon className="h-5 w-5 text-primary" />
                  <h4 className="font-bold">{app.title}</h4>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h5 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {tri("용도", "Uses", "用途")}
                    </h5>
                    <ul className="space-y-1.5">
                      {app.uses.map((it, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {tri("효과", "Effects", "効果")}
                    </h5>
                    <ul className="space-y-1.5">
                      {app.effects.map((it, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Applications — visual cards with images */}
      {product.slug !== "fumed-silica-slh-380s" && !isSilicaSand && !isSilicaPowder && !isGradeB && !isHS12 && (
      <section id="applications" className="mx-auto max-w-7xl px-6 py-20 md:py-28 scroll-mt-24">
        <div className="text-center">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            APPLICATIONS
          </span>
          <h2 className="mt-6 text-3xl font-bold md:text-4xl">🎯 {t("pd.applications")}</h2>
          <p className="mt-4 text-muted-foreground">{t("pd.applications.desc")}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.applications.map((appName) => {
            const visual = APP_VISUALS[appName];
            return (
              <article
                key={appName}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {visual ? (
                    <img src={visual.img} alt={silicaAlt(`${product.name} ${appName} 응용`)} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-primary/30 to-primary-glow/20" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white drop-shadow">{trApp(appName)}</h3>
                  </div>
                </div>
                {visual?.items && (
                  <ul className="space-y-2 p-6">
                    {visual.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Link to="/#contact">
            <Button size="lg" className="h-12 rounded-full bg-primary px-8 text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90">
              {t("pd.inquire")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            {t("pd.allProducts")}
          </Link>
        </div>
      </section>
      )}

      {/* Related */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">{t("pd.related")}</h2>
          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}/`}
                className="group block overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="aspect-square overflow-hidden bg-secondary/40">
                  <img
                    src={p.image}
                    alt={silicaAlt(pick(lang, p.name, p.enName, p.jaName))}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold leading-snug line-clamp-2">{pick(lang, p.name, p.enName, p.jaName)}</h3>
                  {lang === "ko" && <p className="mt-1 text-[11px] text-muted-foreground line-clamp-1">{p.enName}</p>}
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-primary transition group-hover:gap-1.5">
                    {t("products.detail")} <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ProductDetail;
