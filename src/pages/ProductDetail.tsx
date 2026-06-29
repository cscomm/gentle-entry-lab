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

  const others = productCatalog.filter((p) => p.slug !== product.slug && (p.category ?? "quartz") === (product.category ?? "quartz"));
  const isGradeA = product.slug === "fused-silica-a-grade";

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
                    <div className="col-span-4 font-semibold text-foreground">{s.value}</div>
                    <div className="col-span-3 text-right text-xs text-primary">{pick(lang, s.note ?? "—", s.enNote ?? s.note ?? "—", s.jaNote ?? s.enNote ?? s.note ?? "—")}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <h3 className="mt-4 text-2xl font-bold md:text-3xl">🏭 {isEn ? "Key Application Areas" : "주요 적용 분야"}</h3>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: Leaf,
                  title: isEn ? "Green Tires (Low-Fuel-Consumption Tires)" : "그린타이어 (저연비 타이어)",
                  points: isEn
                    ? [
                        "Wide specific surface area increases bonding with the rubber matrix",
                        "Reduces rolling resistance to improve fuel economy",
                        "Simultaneously improves wet-grip and abrasion resistance",
                      ]
                    : [
                        "넓은 비표면적으로 고무 매트릭스와의 결합력 증가",
                        "회전 저항을 낮춰 연비 향상에 기여",
                        "젖은 노면에서의 그립력과 내마모성 동시 개선",
                      ],
                },
                {
                  icon: Zap,
                  title: isEn ? "High-Performance Silicone Rubber" : "고성능 실리콘 고무 (Silicone Rubber)",
                  points: isEn
                    ? [
                        "High specific surface area improves tensile strength, heat resistance, and creep resistance",
                        "Reinforces transparent/semi-transparent silicone products with minimal whitening effect",
                        "Improves compression set characteristics",
                      ]
                    : [
                        "높은 비표면적으로 인장강도, 내열성, 내크리프성 향상",
                        "투명/반투명 실리콘 제품에도 백색도 영향을 최소화하며 보강 가능",
                        "저압축 영구줄음(Compression set) 특성 개선",
                      ],
                },
                {
                  icon: Shield,
                  title: isEn ? "Adhesives & Sealants" : "접착제 및 실런트 (Adhesives & Sealants)",
                  points: isEn
                    ? [
                        "Thickening and thixotropy effects improve coatability",
                        "Enhanced adhesion strength, water resistance, and heat-resistant bonding",
                        "Widely applicable to epoxy, urethane, acrylic, and silicone adhesives",
                      ]
                    : [
                        "증점 효과 및 틱소트로피(thixotropy) 부여로 도포성 향상",
                        "접착 강도 및 내수성, 내열접착력 향상",
                        "에폭시, 우레탄, 아크릴, 실리콘계 접착제에 광범위 적용",
                      ],
                },
                {
                  icon: Factory,
                  title: isEn ? "Other Advanced Material Fields" : "기타 첨단 소재 분야",
                  points: isEn
                    ? [
                        "Battery separators, catalyst supports, functional coatings, heat-dissipation materials",
                        "Flow improvers and anti-caking agents for pharmaceuticals/cosmetics",
                        "Encapsulant for electronic materials requiring high purity",
                      ]
                    : [
                        "배터리 분리막, 촉매 지지체, 기능성 코팅, 방열 소재 등",
                        "의약품/화장품용 유동성 개선제, 항결집제",
                        "고순도가 요구되는 전자재료 봉지재",
                      ],
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
          <h3 className="mt-4 text-2xl font-bold md:text-3xl">🏭 {isEn ? "Application Areas" : "적용 분야"}</h3>
          <p className="mt-4 text-muted-foreground">
            {isEn
              ? "SLH-380S is used in a wide variety of industrial fields."
              : "SLH-380S는 다양한 산업 분야에서 사용됩니다."}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Wrench,
                title: isEn ? "① Silicone & Sealants" : "① 실리콘 및 실란트",
                uses: isEn
                  ? ["RTV Silicone", "Structural Sealants", "Construction Sealants", "Automotive Sealants"]
                  : ["RTV 실리콘", "구조용 실란트", "건축용 실란트", "자동차 실란트"],
                effects: isEn
                  ? ["Viscosity increase", "Sag prevention", "Improved mechanical strength", "Improved workability"]
                  : ["점도 증가", "처짐 방지", "기계적 강도 향상", "작업성 개선"],
              },
              {
                icon: Paintbrush,
                title: isEn ? "② Coatings & Paints" : "② 코팅 및 도료",
                uses: isEn
                  ? ["Industrial Paints", "Automotive Paints", "UV Coatings", "Wood Coatings"]
                  : ["산업용 도료", "자동차 도료", "UV 코팅", "목재 코팅"],
                effects: isEn
                  ? ["Anti-settling", "Improved scratch resistance", "Viscosity stabilization", "Matte effect", "Improved storage stability"]
                  : ["침강 방지", "내스크래치성 향상", "점도 안정화", "무광 효과", "저장 안정성 향상"],
              },
              {
                icon: Pen,
                title: isEn ? "③ Inks" : "③ 잉크",
                uses: isEn ? ["UV Ink", "Screen Ink", "Digital Ink"] : ["UV Ink", "Screen Ink", "Digital Ink"],
                effects: isEn
                  ? ["Pigment dispersion", "Anti-settling", "Improved print quality", "Viscosity control"]
                  : ["안료 분산", "침강 방지", "인쇄 품질 향상", "점도 조절"],
              },
              {
                icon: Link2,
                title: isEn ? "④ Adhesives" : "④ 접착제",
                uses: isEn ? ["Epoxy", "Urethane", "Acrylic Adhesives"] : ["에폭시", "우레탄", "아크릴 접착제"],
                effects: isEn
                  ? ["Flow control", "Improved tack", "Improved storage stability"]
                  : ["흐름성 제어", "점착성 개선", "저장 안정성 향상"],
              },
              {
                icon: Layers,
                title: isEn ? "⑤ Composites" : "⑤ 복합소재",
                uses: isEn ? ["CFRP", "GFRP", "Epoxy Composites"] : ["CFRP", "GFRP", "에폭시 복합재"],
                effects: isEn
                  ? ["Improved strength", "Improved impact resistance", "Crack prevention"]
                  : ["강도 향상", "충격 저항 향상", "균열 방지"],
              },
              {
                icon: Battery,
                title: isEn ? "⑥ Battery Materials" : "⑥ 배터리 소재",
                uses: isEn ? ["Lithium-ion Batteries", "Electrode Slurries"] : ["리튬이온 배터리", "전극 슬러리"],
                effects: isEn
                  ? ["Viscosity control", "Dispersion stabilization", "Improved slurry uniformity"]
                  : ["점도 조절", "분산 안정화", "슬러리 균일성 향상"],
              },
              {
                icon: Sparkles,
                title: isEn ? "⑦ Cosmetics" : "⑦ 화장품",
                uses: isEn ? ["Powder", "Cream", "Sunscreen", "Makeup Products"] : ["파우더", "크림", "선크림", "메이크업 제품"],
                effects: isEn
                  ? ["Improved feel", "Oil absorption", "Viscosity control"]
                  : ["사용감 개선", "유분 흡수", "점도 조절"],
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
                      {isEn ? "Uses" : "용도"}
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
                      {isEn ? "Effects" : "효과"}
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
      {product.slug !== "fumed-silica-slh-380s" && (
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
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}/`}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={silicaAlt(p.name)} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{pick(lang, p.name, p.enName, p.jaName)}</h3>
                  {lang === "ko" && <p className="mt-1 text-xs text-muted-foreground">{p.enName}</p>}
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
