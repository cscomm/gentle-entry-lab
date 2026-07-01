import { Link } from "@/lib/router";
import {
  Sparkles,
  Layers,
  Factory,
  Droplets,
  Palette,
  Building2,
  Gem,
  ShieldCheck,
  Wind,
  FlaskConical,
  Sun,
  Rocket,
  Car,
  HeartPulse,
  Beaker,
  Home,
  Sprout,
  Wrench,
  Ruler,
  CircleCheck,
  ArrowRight,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";
import { silicaAlt } from "@/lib/silicaAlt";
import silicaSandImg from "@/assets/silica-sand.jpg";
import silicaPowderImg from "@/assets/silica-powder.jpg";

const SilicaSandApplications = () => {
  const { lang, t } = useLang();
  const tri = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  // ─── i18n copy ─────────────────────────────────────────────
  const title = tri(
    "규사 · 규사분말 응용분야",
    "Silica Sand & Powder Applications",
    "珪砂・珪砂粉末の応用分野",
  );
  const heroDesc = tri(
    "SiO₂ 99.5% 이상의 고순도 정제 규사(Silica Sand)와 규사분말(Silica Powder)은 건축·특수 유리, 주조, 수처리, 페인트·플라스틱, 인조대리석, 화학 원료 등 광범위한 산업 분야의 핵심 원료로 사용됩니다. 원광 선별부터 분급·수세·정제까지 전 공정을 통합 관리하여 산업별 요구 사양에 최적화된 입도와 화학 조성을 안정적으로 공급합니다.",
    "With SiO₂ ≥ 99.5%, our refined Silica Sand and Silica Powder serve as core raw materials across construction and specialty glass, foundry, water treatment, paints & plastics, engineered stone, and chemical feedstocks. Integrated control from ore selection to classification, washing, and refining ensures optimized grain size and chemistry tailored to each industry.",
    "SiO₂ 99.5% 以上の高純度精製珪砂（Silica Sand）と珪砂粉末（Silica Powder）は、建築・特殊ガラス、鋳造、水処理、塗料・プラスチック、人造大理石、化学原料など幅広い産業分野の中核原料として使用されます。原鉱選別から分級・水洗・精製まで全工程を統合管理し、産業別要求仕様に最適化された粒度と化学組成を安定供給します。",
  );

  // ─── Highlight stats ───────────────────────────────────────
  const stats = [
    {
      value: "99.5%+",
      label: tri("이산화규소(SiO₂) 함량", "SiO₂ Content", "二酸化ケイ素（SiO₂）含有量"),
    },
    {
      value: tri("모스 7", "Mohs 7", "モース 7"),
      label: tri("고경도 · 내마모성", "High Hardness & Wear Resistance", "高硬度・耐摩耗性"),
    },
    {
      value: "1,750℃+",
      label: tri("내화도", "Refractoriness", "耐火度"),
    },
    {
      value: tri("맞춤 입도", "Custom Grain Size", "カスタム粒度"),
      label: tri("고객 요구 사양 맞춤 가공", "Tailored to customer specifications", "顧客要求仕様に合わせて加工"),
    },
  ];

  // ─── Application main cards ────────────────────────────────
  const industries = [
    {
      icon: Layers,
      tag: tri("① 유리 제조", "① Glass Manufacturing", "① ガラス製造"),
      title: tri(
        "유리 성분의 70% 이상을 차지하는 핵심 원료",
        "Core raw material — over 70% of glass composition",
        "ガラス成分の 70% 以上を占める中核原料",
      ),
      desc: tri(
        "평판·강화·복층 유리 등 건축용 유리부터 병·용기·특수 유리까지, 규사는 유리 산업 전반의 기초 원료입니다. 저철분·고순도 규사는 유리의 투명도와 강도를 높이고, 균일한 입도는 용융 효율을 개선하여 에너지 소비를 절감합니다.",
        "From flat, tempered, and insulated architectural glass to bottles, containers, and specialty glass, silica sand is the fundamental raw material of the glass industry. Low-iron, high-purity sand improves transparency and strength, while uniform grain size enhances melting efficiency and reduces energy consumption.",
        "板ガラス・強化ガラス・複層ガラスなどの建築用ガラスから、瓶・容器・特殊ガラスまで、珪砂はガラス産業全般の基礎原料です。低鉄分・高純度珪砂はガラスの透明度と強度を高め、均一な粒度は溶解効率を改善しエネルギー消費を削減します。",
      ),
      bullets: [
        tri("평판·강화·복층 유리 (건축·창호)", "Flat, tempered, insulated glass (architecture)", "板・強化・複層ガラス（建築・サッシ）"),
        tri("병·용기·식기용 유리", "Bottle, container, tableware glass", "瓶・容器・食器用ガラス"),
        tri("광학·전자·유리섬유", "Optical, electronics, fiberglass", "光学・電子・ガラス繊維"),
        tri("저철분(Fe₂O₃ ≤ 0.01%)으로 유리의 녹색 편차 최소화", "Low iron (Fe₂O₃ ≤ 0.01%) minimizes green tint", "低鉄分（Fe₂O₃ ≤ 0.01%）でガラスの緑色偏差を最小化"),
      ],
    },
    {
      icon: Factory,
      tag: tri("② 주조 (Foundry)", "② Foundry", "② 鋳造（Foundry）"),
      title: tri(
        "고내화도 · 통기성 · 재사용성을 갖춘 주조사",
        "Foundry sand with high refractoriness, gas permeability and reusability",
        "高耐火度・通気性・再利用性を備えた鋳造砂",
      ),
      desc: tri(
        "주철·주강 등 사형 및 수지사 주조, 동합금·알루미늄 합금 주조, 정밀 인베스트먼트 주조 등 다양한 주조 공정에 사용됩니다. 1,750℃ 이상의 내화도로 고온 용탕의 침식을 견디며, 우수한 통기성으로 가스 결함을 줄여 주물의 표면 품질과 치수 정밀도를 확보합니다.",
        "Used across sand casting, resin sand casting, non-ferrous casting (copper, aluminum alloys) and precision investment casting. Refractoriness above 1,750℃ withstands molten metal erosion, while excellent gas permeability reduces porosity defects — improving surface quality and dimensional accuracy of castings.",
        "鋳鉄・鋳鋼などの砂型・樹脂砂鋳造、銅合金・アルミ合金鋳造、精密インベストメント鋳造など多様な鋳造工程で使用されます。1,750℃ 以上の耐火度で高温溶湯の浸食に耐え、優れた通気性でガス欠陥を低減し、鋳物の表面品質と寸法精度を確保します。",
      ),
      bullets: [
        tri("사형 · 수지사 주조 (주철 · 주강)", "Sand & resin-sand casting (iron, steel)", "砂型・樹脂砂鋳造（鋳鉄・鋳鋼）"),
        tri("동합금 · 알루미늄 합금 등 비철 주조", "Copper & aluminum alloy non-ferrous casting", "銅合金・アルミ合金など非鉄鋳造"),
        tri("정밀 인베스트먼트(로스트왁스) 셸 재료", "Precision investment (lost-wax) shell material", "精密インベストメント（ロストワックス）シェル材料"),
        tri("입도 배합 맞춤 공급으로 주물 품질 최적화", "Custom grain blends optimize casting quality", "粒度配合カスタム供給で鋳物品質を最適化"),
      ],
    },
    {
      icon: Droplets,
      tag: tri("③ 수처리 · 여과", "③ Water Treatment & Filtration", "③ 水処理・濾過"),
      title: tri(
        "안정적인 화학·기계적 강도의 여과 필터 미디어",
        "Filter media with chemically stable, mechanically robust performance",
        "安定した化学的・機械的強度を持つ濾過フィルター媒体",
      ),
      desc: tri(
        "정수장 여과지, 농촌 음용수 사업, 순환 냉각수·보일러수 전처리, 산업 폐수 고도 처리, 수영장 순환 여과 등에 사용됩니다. 유해 물질을 방출하지 않는 화학적 안정성과 높은 기계 강도로 장수명 운전이 가능하며, 균일한 입도가 여과 효율과 역세척 회복 성능을 보장합니다.",
        "Used in drinking water filtration beds, rural water supply projects, circulating cooling & boiler feed water pre-treatment, industrial wastewater advanced treatment, and swimming pool filtration. Chemical stability prevents leaching of harmful substances, high mechanical strength enables long service life, and uniform grain size ensures consistent filtration efficiency and backwash recovery.",
        "浄水場濾過池、農村飲用水事業、循環冷却水・ボイラー水前処理、産業廃水高度処理、プール循環濾過などで使用されます。有害物質を放出しない化学的安定性と高い機械強度で長寿命運転が可能で、均一な粒度が濾過効率と逆洗回復性能を保証します。",
      ),
      bullets: [
        tri("정수장 · 상수도 여과지 (음용수)", "Municipal drinking water filter beds", "浄水場・上水道濾過池（飲用水）"),
        tri("순환 냉각수 · 보일러 급수 전처리", "Cooling loop & boiler feed pre-treatment", "循環冷却水・ボイラー給水前処理"),
        tri("산업 폐수 · 중수 재이용 고도 처리", "Wastewater & reclaimed water advanced treatment", "産業廃水・中水再利用の高度処理"),
        tri("수영장 · 워터파크 순환 여과 시스템", "Swimming pool & water park recirculation filters", "プール・ウォーターパーク循環濾過システム"),
      ],
    },
    {
      icon: Palette,
      tag: tri("④ 페인트 · 코팅 · 플라스틱 (규사분말)", "④ Paints, Coatings & Plastics (Silica Powder)", "④ 塗料・コーティング・プラスチック（珪砂粉末）"),
      title: tri(
        "고백색 · 저흡유량 기능성 미분 필러",
        "High-whiteness, low oil-absorption functional micronized filler",
        "高白色・低吸油量の機能性微粉フィラー",
      ),
      desc: tri(
        "200~2,500 mesh의 초미분 규사분말은 페인트·코팅·잉크의 백색도, 내후성, 은폐력, 마모 저항성을 향상시키는 기능성 충진재로 사용됩니다. 플라스틱·고무 컴파운드에서는 강성·치수 안정성·내열성을 강화하며, 저흡유량 특성으로 배합 점도를 낮춰 가공성을 개선합니다.",
        "Ultra-fine silica powder from 200 to 2,500 mesh acts as a functional filler that improves whiteness, weathering, hiding power and abrasion resistance in paints, coatings and inks. In plastic and rubber compounds it reinforces stiffness, dimensional stability and heat resistance, and its low oil absorption reduces compound viscosity for better processability.",
        "200～2,500 メッシュの超微粉珪砂粉末は、塗料・コーティング・インクの白色度、耐候性、隠蔽力、耐摩耗性を向上させる機能性充填材として使用されます。プラスチック・ゴムコンパウンドでは剛性・寸法安定性・耐熱性を強化し、低吸油量特性で配合粘度を下げ加工性を改善します。",
      ),
      bullets: [
        tri("건축·산업용 페인트, 파우더 코팅", "Architectural & industrial paints, powder coatings", "建築・産業用塗料、粉体塗装"),
        tri("잉크, 실리콘 실란트, 접착제", "Inks, silicone sealants, adhesives", "インク、シリコーンシーラント、接着剤"),
        tri("엔지니어링 플라스틱 · 고무 강화 필러", "Engineering plastic & rubber reinforcement filler", "エンジニアリングプラスチック・ゴム強化フィラー"),
        tri("에폭시 몰딩 컴파운드(EMC) · 전자 캡슐화", "Epoxy molding compound (EMC) & electronic encapsulation", "エポキシモールディングコンパウンド（EMC）・電子封止"),
      ],
    },
    {
      icon: Building2,
      tag: tri("⑤ 인조대리석 · 건축 자재", "⑤ Engineered Stone & Construction", "⑤ 人造大理石・建築資材"),
      title: tri(
        "석영석(Engineered Stone)의 90% 이상을 차지하는 주 원료",
        "Main raw material — over 90% of quartz-based engineered stone",
        "石英石（エンジニアードストーン）の 90% 以上を占める主原料",
      ),
      desc: tri(
        "규사와 규사분말은 석영석(퀄츠 카운터탑) 판재의 주 원료로, 수지와 함께 압축·경화되어 대리석 이상의 강도와 내오염성을 구현합니다. 건축용 몰탈에 혼합하면 강도와 내구성이 향상되고, 에폭시·자체 레벨링 바닥재의 골재로 사용되면 내마모성과 미끄럼 방지 성능을 제공합니다.",
        "Silica sand and powder are the primary raw materials of engineered quartz stone (quartz countertops), compressed and cured with resins to deliver strength and stain resistance beyond natural marble. Blended into construction mortars they improve strength and durability, and as aggregate in epoxy and self-leveling floor systems they provide abrasion resistance and anti-slip performance.",
        "珪砂と珪砂粉末は石英石（クオーツカウンタートップ）板材の主原料で、樹脂と共に圧縮・硬化され大理石以上の強度と耐汚染性を実現します。建築用モルタルに混合すると強度と耐久性が向上し、エポキシ・セルフレベリング床材の骨材として使用されると耐摩耗性と滑り止め性能を提供します。",
      ),
      bullets: [
        tri("석영석 판재 · 인조대리석 카운터탑", "Quartz slabs & engineered stone countertops", "石英石板材・人造大理石カウンタートップ"),
        tri("건축용 몰탈 · 고강도 콘크리트", "Construction mortar & high-strength concrete", "建築用モルタル・高強度コンクリート"),
        tri("에폭시 · 자체 레벨링 바닥재 골재", "Epoxy & self-leveling floor aggregate", "エポキシ・セルフレベリング床材骨材"),
        tri("내마모 상재 · 논슬립 표면 마감", "Wear-resistant topping & anti-slip finishes", "耐摩耗トッピング・ノンスリップ表面仕上げ"),
      ],
    },
    {
      icon: FlaskConical,
      tag: tri("⑥ 화학·기타 산업", "⑥ Chemical & Other Industries", "⑥ 化学・その他産業"),
      title: tri(
        "실리카 화학 원료 · 산업 표면 처리",
        "Silica chemical feedstocks and industrial surface treatment",
        "シリカ化学原料・産業表面処理",
      ),
      desc: tri(
        "물유리(소듐 실리케이트), 백탄, 실리콘, 실리카 겔 등 실리카 화학 제품의 기초 원료로 사용됩니다. 또한 촉매 담체, 금속 표면 샌드블라스팅, 조경·장식용 자재, 골프장 벙커·비치발리볼 코트용 스포츠 규사 등 광범위한 산업 표면 처리 및 특수 용도에도 활용됩니다.",
        "Serves as the base feedstock for silica-based chemistries including water glass (sodium silicate), white carbon (precipitated silica), silicones and silica gel. Also widely used as catalyst carrier, sandblasting media for metal surface treatment, landscape and decorative material, and sports-grade sand for golf course bunkers and beach volleyball courts.",
        "水ガラス（ケイ酸ナトリウム）、ホワイトカーボン、シリコーン、シリカゲルなどシリカ化学製品の基礎原料として使用されます。また触媒担体、金属表面サンドブラスト、造園・装飾用資材、ゴルフ場バンカー・ビーチバレーコート用スポーツ珪砂など、幅広い産業表面処理・特殊用途にも活用されます。",
      ),
      bullets: [
        tri("물유리 · 백탄 · 실리콘 · 실리카 겔 원료", "Water glass, white carbon, silicones, silica gel feedstock", "水ガラス・ホワイトカーボン・シリコーン・シリカゲル原料"),
        tri("촉매 담체 · 화학 반응 지지체", "Catalyst carrier & reaction support", "触媒担体・化学反応支持体"),
        tri("샌드블라스팅 · 금속 표면 처리", "Sandblasting & metal surface treatment", "サンドブラスト・金属表面処理"),
        tri("골프장 벙커 · 비치발리볼 · 조경 자재", "Golf bunker, beach volleyball, landscape material", "ゴルフ場バンカー・ビーチバレー・造園資材"),
      ],
    },
  ];

  // ─── Specialty glass matrix ────────────────────────────────
  const specialtyGlass = [
    {
      icon: FlaskConical,
      name: tri("고붕규산 유리", "Borosilicate Glass", "高ホウケイ酸ガラス"),
      grade: tri("산업용 특수 소재", "Industrial specialty material", "工業用特殊材料"),
      spec1: tri("1,500℃ 내열", "Withstands 1,500℃", "1,500℃ 耐熱"),
      spec2: tri("강산·강알칼리 내식성", "Strong acid/alkali resistance", "強酸・強アルカリ耐食性"),
      use: tri("실험실 · 화학 장비 기초재", "Laboratory & chemical apparatus base material", "実験室・化学装置基礎材"),
    },
    {
      icon: Sun,
      name: tri("태양광 유리", "Photovoltaic Glass", "太陽光ガラス"),
      grade: tri("신재생 에너지 핵심 부품", "Renewable energy core component", "新再生エネルギー核心部品"),
      spec1: tri("99.8% 초고 투과율", "99.8% ultra-high transmittance", "99.8% 超高透過率"),
      spec2: tri("25년 내후 수명", "25-year weathering life", "25 年耐候寿命"),
      use: tri("분산형 태양광 모듈 표면 유리", "Distributed PV module cover glass", "分散型太陽光モジュール表面ガラス"),
    },
    {
      icon: Rocket,
      name: tri("항공우주 유리", "Aerospace Glass", "航空宇宙ガラス"),
      grade: tri("고정밀 · 방산 등급", "High-precision defense grade", "高精密・防衛等級"),
      spec1: tri("10G 초강 압력 대응", "Withstands 10G pressure", "10G 超強圧力対応"),
      spec2: tri("우주 방사선 차폐", "Cosmic radiation shielding", "宇宙放射線遮蔽"),
      use: tri("항공기 · 우주선 창호 전용", "Aircraft & spacecraft window glazing", "航空機・宇宙船窓専用"),
    },
    {
      icon: Car,
      name: tri("차량용 유리", "Automotive Glass", "車載ガラス"),
      grade: tri("스마트카 표준 사양", "Smart-car standard specification", "スマートカー標準仕様"),
      spec1: tri("고강도 방탄·방폭", "High-strength shatter resistance", "高強度防弾・防爆"),
      spec2: tri("AR HUD 통합 대응", "AR HUD integration ready", "AR HUD 統合対応"),
      use: tri("전기차 규격 인증 유리", "EV-grade certified glass", "EV 規格認証ガラス"),
    },
    {
      icon: HeartPulse,
      name: tri("의료용 유리", "Medical Glass", "医療用ガラス"),
      grade: tri("의료 등급 안전 소재", "Medical-grade safety material", "医療等級安全材料"),
      spec1: tri("100% 생체 적합성", "100% biocompatibility", "100% 生体適合性"),
      spec2: tri("무균 등급 생산", "Sterile-grade production", "無菌等級生産"),
      use: tri("백신 보관 전용 바이알", "Vaccine storage vials", "ワクチン保存専用バイアル"),
    },
  ];

  // ─── Grain size guide ──────────────────────────────────────
  const grainGuide = [
    { size: tri("조사 (1~10 mm)", "Coarse (1–10 mm)", "粗砂（1〜10 mm）"), use: tri("주조 · 수처리 필터 · 샌드블라스팅", "Foundry, water filter media, sandblasting", "鋳造・水処理フィルター・サンドブラスト") },
    { size: tri("중사 (0.5~1 mm)", "Medium (0.5–1 mm)", "中砂（0.5〜1 mm）"), use: tri("내화재 · 에폭시 바닥재 · 알루미나 소결 조제", "Refractory, epoxy flooring, alumina sintering aid", "耐火材・エポキシ床材・アルミナ焼結助剤") },
    { size: tri("세사 (0.3~0.5 mm)", "Fine (0.3–0.5 mm)", "細砂（0.3〜0.5 mm）"), use: tri("판유리 · 세라믹 원료", "Sheet glass, ceramic raw material", "板ガラス・セラミック原料") },
    { size: tri("정세사 (0.1~0.3 mm)", "Extra-fine (0.1–0.3 mm)", "精細砂（0.1〜0.3 mm）"), use: tri("전자 소재 · 정밀 주조", "Electronic materials, precision casting", "電子材料・精密鋳造") },
    { size: tri("미분 (< 0.1 mm)", "Micronized (< 0.1 mm)", "微粉（< 0.1 mm）"), use: tri("고급 유리 · 광학 · 페인트 · 인조대리석 필러", "Premium glass, optics, paint, engineered stone filler", "高級ガラス・光学・塗料・人造大理石フィラー") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/40 to-background pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <Link to="/#applications" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← {t("nav.applications")}
          </Link>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-card px-4 py-1.5 text-xs tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            SILICA SAND · SILICA POWDER
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{heroDesc}</p>

          {/* Stat grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card/80 p-5 backdrop-blur">
                <div className="text-2xl font-bold text-primary md:text-3xl">{s.value}</div>
                <div className="mt-2 text-xs leading-snug text-muted-foreground md:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT DUO ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
            <img src={silicaSandImg} alt={silicaAlt(tri("규사", "Silica Sand", "珪砂"))} className="h-64 w-full object-cover transition group-hover:scale-105 md:h-80" />
            <div className="p-6">
              <div className="text-xs tracking-widest text-primary">SILICA SAND</div>
              <h3 className="mt-2 text-2xl font-bold">{tri("규사 (Silica Sand)", "Silica Sand", "珪砂 (Silica Sand)")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tri(
                  "0.1 mm ~ 10 mm 입도 범위의 산업용 정제 규사. 유리·주조·수처리·건축 등 벌크 원료 시장을 담당합니다.",
                  "Industrial refined silica sand from 0.1 mm to 10 mm — bulk feedstock for glass, foundry, water treatment and construction markets.",
                  "0.1 mm 〜 10 mm 粒度範囲の産業用精製珪砂。ガラス・鋳造・水処理・建築などバルク原料市場を担当します。",
                )}
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
            <img src={silicaPowderImg} alt={silicaAlt(tri("규사분말", "Silica Powder", "珪砂粉末"))} className="h-64 w-full object-cover transition group-hover:scale-105 md:h-80" />
            <div className="p-6">
              <div className="text-xs tracking-widest text-primary">SILICA POWDER</div>
              <h3 className="mt-2 text-2xl font-bold">{tri("규사분말 (Silica Powder)", "Silica Powder", "珪砂粉末 (Silica Powder)")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tri(
                  "200 ~ 2,500 mesh의 초미분 규석. 페인트·플라스틱·인조대리석·전자 캡슐화용 기능성 필러로 사용됩니다.",
                  "Ultra-fine quartz powder from 200 to 2,500 mesh — functional filler for paints, plastics, engineered stone and electronic encapsulation.",
                  "200 〜 2,500 メッシュの超微粉珪石。塗料・プラスチック・人造大理石・電子封止用の機能性フィラーとして使用されます。",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY APPLICATIONS ────────────────────────────── */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              {tri("응용 산업 분야", "Industry Applications", "応用産業分野")}
            </span>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              {tri("6대 핵심 산업 분야", "Six Core Industry Segments", "6 大核心産業分野")}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {tri(
                "규사와 규사분말은 서로 다른 입도 대역에서 각기 다른 산업 요구를 충족하지만, 원료·품질 관리·공급 체계는 하나로 통합되어 있습니다.",
                "Silica sand and silica powder serve different grain-size ranges and industrial needs, yet share a unified raw material base, quality control and supply system.",
                "珪砂と珪砂粉末はそれぞれ異なる粒度帯で異なる産業要求を満たしますが、原料・品質管理・供給体系は一つに統合されています。",
              )}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {industries.map((ind) => (
              <div key={ind.tag} className="group rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ind.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold tracking-widest text-primary">{ind.tag}</div>
                    <h3 className="mt-2 text-xl font-bold leading-snug">{ind.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                <ul className="mt-5 space-y-2">
                  {ind.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CircleCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTY GLASS MATRIX ───────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            {tri("특수 유리 매트릭스", "Specialty Glass Matrix", "特殊ガラスマトリックス")}
          </span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            {tri("고부가 특수 유리 · 5대 제품군", "Five High-Value Specialty Glass Categories", "高付加特殊ガラス・5 大製品群")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {tri(
              "저부가 일반 유리에서 벗어나 고정밀 특수 유리 분야로 확장되는 시장에서, 저철분·고순도 규사는 필수 원료입니다.",
              "As demand shifts from low-value commodity glass to high-precision specialty glass, low-iron and high-purity silica sand becomes an indispensable feedstock.",
              "低付加の一般ガラスから高精密特殊ガラス分野へ拡大する市場において、低鉄分・高純度珪砂は必須原料です。",
            )}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {specialtyGlass.map((g) => (
            <div key={g.name} className="group rounded-2xl border border-border bg-gradient-to-b from-card to-card/60 p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{g.name}</h3>
              <div className="mt-1 text-[11px] tracking-wide text-muted-foreground">{g.grade}</div>
              <div className="mt-4 space-y-2 border-t border-border pt-4">
                <div className="flex items-start gap-2 text-xs">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                  <span>{g.spec1}</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                  <span>{g.spec2}</span>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-primary/5 p-3 text-xs leading-snug text-muted-foreground">
                {g.use}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GRAIN SIZE GUIDE ─────────────────────────────────── */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
                {tri("입도별 활용 가이드", "Grain Size Guide", "粒度別活用ガイド")}
              </span>
              <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                {tri("입도가 곧 용도를 결정합니다", "Grain size defines the application", "粒度がそのまま用途を決定します")}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {tri(
                  "동일한 SiO₂ 99.5% 이상 순도라도 입도 대역에 따라 산업별 활용 방식이 달라집니다. 실리카는 조사부터 미분까지 전 입도 대역을 자체 분급·정제 라인에서 생산 공급합니다.",
                  "Even at ≥ 99.5% SiO₂ purity, application changes with grain size. SiLiCA produces and supplies the full range from coarse sand to micronized powder through in-house classification and refining lines.",
                  "同じ SiO₂ 99.5% 以上の純度でも粒度帯によって産業別活用方式が異なります。SiLiCA は粗砂から微粉まで全粒度帯を自社の分級・精製ラインで生産供給します。",
                )}
              </p>
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-primary">
                <Ruler className="h-4 w-4" />
                <span className="font-medium">
                  {tri("고객 요구 사양에 맞춘 맞춤 입도 가공 가능", "Custom grain size processing per customer specification", "顧客要求仕様に合わせたカスタム粒度加工可能")}
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead className="bg-primary/10 text-left text-xs uppercase tracking-widest text-primary">
                  <tr>
                    <th className="px-5 py-4 font-semibold">{tri("규격 / 입도", "Grade / Size", "規格 / 粒度")}</th>
                    <th className="px-5 py-4 font-semibold">{tri("주요 용도", "Main Application", "主要用途")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {grainGuide.map((g) => (
                    <tr key={g.size} className="transition hover:bg-primary/5">
                      <td className="px-5 py-4 font-medium">{g.size}</td>
                      <td className="px-5 py-4 text-muted-foreground">{g.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION ────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            {tri("고객 가치", "Customer Value", "顧客価値")}
          </span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            {tri("왜 SiLiCA 규사·규사분말인가", "Why SiLiCA Silica Sand & Powder", "なぜ SiLiCA の珪砂・珪砂粉末なのか")}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Gem,
              title: tri("원광 · 정제 통합 관리", "Integrated Ore-to-Refined Control", "原鉱・精製統合管理"),
              desc: tri("고품위 광산 선별부터 수세·자력 선별·분급까지 자체 통합 관리하여 배치 간 편차를 최소화합니다.", "From high-grade ore selection to washing, magnetic separation and classification — fully in-house control minimizes batch-to-batch variance.", "高品位鉱山選別から水洗・磁力選別・分級まで自社統合管理でバッチ間偏差を最小化します。"),
            },
            {
              icon: ShieldCheck,
              title: tri("배치별 COA 제공", "Batch-level COA", "バッチ別 COA 提供"),
              desc: tri("모든 배치에 화학 성분·입도·수분·백색도 시험 성적서를 발행하여 고객 IQC 부담을 낮춥니다.", "Every batch ships with a chemical, grain-size, moisture and whiteness test certificate — reducing customer IQC burden.", "全バッチに化学成分・粒度・水分・白色度試験成績書を発行し、顧客 IQC 負担を軽減します。"),
            },
            {
              icon: Wrench,
              title: tri("맞춤 입도 · 소량 시생산", "Custom Sizing & Pilot Runs", "カスタム粒度・少量試作"),
              desc: tri("고객 공정에 최적화된 입도 배합과 소량 시생산을 지원하여 신제품 개발 리드타임을 단축합니다.", "We support custom grain blends and small pilot production runs to shorten new-product development lead time.", "顧客工程に最適化された粒度配合と少量試作をサポートし、新製品開発リードタイムを短縮します。"),
            },
            {
              icon: Wind,
              title: tri("안정적 대량 공급", "Stable Bulk Supply", "安定した大量供給"),
              desc: tri("복수 생산 라인 병행 운영과 국내외 물류 네트워크로 대량·정기 납품을 안정적으로 유지합니다.", "Parallel production lines and a domestic/international logistics network sustain stable bulk and scheduled deliveries.", "複数生産ライン並行運営と国内外物流ネットワークで大量・定期納品を安定維持します。"),
            },
            {
              icon: Home,
              title: tri("친환경 · 무기 소재", "Eco-friendly Inorganic Material", "環境に優しい無機素材"),
              desc: tri("휘발성 유기 화합물이 없는 100% 무기 광물로, 친환경 건축·소재 규제 대응에 적합합니다.", "A 100% inorganic mineral with zero VOCs — well suited to eco-friendly construction and material regulations.", "揮発性有機化合物のない 100% 無機鉱物で、環境配慮型建築・素材規制対応に適しています。"),
            },
            {
              icon: Sprout,
              title: tri("지속가능한 파트너십", "Sustainable Partnership", "持続可能なパートナーシップ"),
              desc: tri("장기 공급 계약과 기술 협업을 통해 고객사의 원가·품질 목표 달성을 함께 추구합니다.", "Long-term supply agreements and technical collaboration to jointly pursue customer cost and quality targets.", "長期供給契約と技術協業を通じて顧客のコスト・品質目標達成を共に追求します。"),
            },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center text-primary-foreground">
          <Beaker className="mx-auto h-10 w-10 opacity-90" />
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            {tri(
              "샘플 요청 · 기술 상담",
              "Request Samples & Technical Consultation",
              "サンプル依頼・技術相談",
            )}
          </h2>
          <p className="mt-4 text-primary-foreground/90 md:text-lg">
            {tri(
              "적용 산업 · 요구 순도 · 목표 입도만 알려 주시면, 최적 사양의 시료와 시험 성적서를 발송해 드립니다.",
              "Tell us your target industry, purity level and grain size — we will ship optimized samples with a test report.",
              "適用産業・要求純度・目標粒度をお知らせいただければ、最適仕様の試料と試験成績書を発送いたします。",
            )}
          </p>
          <Link
            to="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            {tri("문의하기", "Contact Us", "お問い合わせ")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SilicaSandApplications;
