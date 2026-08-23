import { Link } from "@/lib/router";
import { Sparkles, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";

const QuartzApplications = () => {
  const { lang } = useLang();
  const t = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const sections = [
    {
      title: t(
        "반도체 EMC · 언더필 · 어드밴스드 패키징 (결정형 필러)",
        "Semiconductor EMC · Underfill · Advanced Packaging (Crystalline Filler)",
        "半導体EMC・アンダーフィル・先端パッケージング(結晶質フィラー)"
      ),
      desc: t(
        "결정질 실리카(α-Quartz)는 결정 구조 특유의 높은 모스 경도(7)와 우수한 기계적 강도로, 용융실리카와 함께 반도체 후공정용 무기 필러로 사용됩니다. 결정형 구상 실리카(SN-QJG)·결정형 모서리 라운드(SN-YJG)·결정형 각상(SN-JG) 그레이드는 EMC(에폭시 몰딩 컴파운드)의 강도·내마모성을 극대화하면서 원가 경쟁력을 확보하며, 저방사선(Low-α) 결정형 SN-CL은 메모리·로직 반도체의 소프트 에러(SEU)를 억제합니다. 순도 SiO₂ ≥ 99.5%, 저 방사성 원소(U/Th) 관리 그레이드가 표준입니다.",
        "Crystalline silica (α-quartz) combines a high Mohs hardness of 7 with excellent mechanical strength, complementing fused silica as an inorganic filler in semiconductor back-end packaging. Crystalline spherical (SN-QJG), round-corner (SN-YJG) and angular (SN-JG) grades maximize the strength and abrasion resistance of epoxy molding compounds (EMC) with better cost efficiency, while low-alpha crystalline SN-CL suppresses soft errors (SEU) in memory and logic devices. Standard specifications are SiO₂ ≥ 99.5% with tightly controlled U/Th radioactive elements.",
        "結晶質シリカ(α-クォーツ)は、モース硬度7と優れた機械的強度を併せ持ち、溶融シリカとともに半導体後工程の無機フィラーとして使用されます。結晶質球状(SN-QJG)、丸角(SN-YJG)、角状(SN-JG)グレードはEMCの強度・耐摩耗性を最大化しつつコスト競争力を確保し、低α線結晶質SN-CLはメモリ・ロジック半導体のソフトエラー(SEU)を抑制します。SiO₂ 99.5%以上・U/Th管理グレードが標準です。"
      ),
      items: [
        t("에폭시 몰딩 컴파운드 (EMC) 결정형 필러", "Crystalline filler for epoxy molding compounds (EMC)", "エポキシモールドコンパウンド(EMC)用結晶質フィラー"),
        t("언더필 (CUF / MUF)", "Underfill (CUF / MUF)", "アンダーフィル(CUF/MUF)"),
        t("어드밴스드 패키징 — FC-BGA · WLP · Fan-Out", "Advanced packaging — FC-BGA / WLP / Fan-Out", "先端パッケージング — FC-BGA・WLP・Fan-Out"),
        t("HBM · DDR5 · AI용 저방사선 결정형", "Low-α crystalline for HBM / DDR5 / AI devices", "HBM・DDR5・AI向け低α線結晶質グレード"),
        t("다이 어태치·봉지재 무기 강화 필러", "Die-attach & encapsulant reinforcement filler", "ダイアタッチ・封止材の無機補強フィラー"),
      ],
    },
    {
      title: t(
        "CCL · PCB · 고밀도 실장 기판",
        "CCL · PCB · High-Density Circuit Boards",
        "CCL・PCB・高密度実装基板"
      ),
      desc: t(
        "결정질 실리카는 CCL·PCB 프리프레그·솔더 레지스트·잉크에 첨가되어 열팽창을 낮추고 기계적 강도·내마모성·치수 안정성을 확보합니다. 결정형 구상(SN-QJG)과 모서리 라운드(SN-YJG)는 수지 유동성과 고충전율을 동시에 만족시켜 HDI·다층 기판·IC 기판에 활용되며, 결정형 각상(SN-JG)은 표준 FR-4 CCL 및 산업용 도전성 페이스트에서 저비용·고성능 필러로 사용됩니다.",
        "Crystalline silica is added to CCL, PCB prepregs, solder resists and inks to lower CTE and improve mechanical strength, abrasion resistance and dimensional stability. Crystalline spherical (SN-QJG) and round-corner (SN-YJG) grades combine resin flow with high filler loading for HDI, multilayer boards and IC substrates, while crystalline angular (SN-JG) is a cost-effective high-performance filler for standard FR-4 CCL and industrial conductive pastes.",
        "結晶質シリカはCCL・PCBプリプレグ・ソルダーレジスト・インキに添加され、熱膨張を低減し機械的強度・耐摩耗性・寸法安定性を確保します。結晶質球状(SN-QJG)と丸角(SN-YJG)は樹脂流動性と高充填率を両立し、HDI・多層基板・IC基板に採用され、結晶質角状(SN-JG)は標準FR-4 CCLや産業用導電性ペーストで低コスト・高性能フィラーとして使用されます。"
      ),
      items: [
        t("FR-4 CCL · 다층 PCB 프리프레그", "FR-4 CCL & multilayer PCB prepregs", "FR-4 CCL・多層PCBプリプレグ"),
        t("HDI · IC 기판 · ABF 필름", "HDI, IC substrates & ABF film", "HDI・IC基板・ABFフィルム"),
        t("솔더 레지스트 · 잉크 · 코팅", "Solder resist, inks & coatings", "ソルダーレジスト・インキ・コーティング"),
        t("도전성 페이스트 · EMI 차폐재", "Conductive pastes & EMI shielding", "導電性ペースト・EMIシールド材"),
      ],
    },
    {
      title: t(
        "인조 대리석 · 엔지니어드 스톤 · 건축 자재",
        "Engineered Stone · Artificial Marble · Construction",
        "人造大理石・エンジニアードストーン・建築資材"
      ),
      desc: t(
        "결정질 실리카(석영)는 인조 대리석·엔지니어드 스톤(쿼츠 카운터탑)의 대표 원료로, 총 배합비의 90% 이상을 차지합니다. 결정 구조 특유의 높은 경도(모스 7)와 아름다운 백색도, 낮은 흡수율은 주방 상판·욕실 자재·건축 외벽재에 이상적입니다. 각상 결정형(SN-JG)과 규사 20~200 mesh 라인업이 인조 대리석·UHPC·고강도 콘크리트·타일·바닥재·몰탈에 폭넓게 사용됩니다.",
        "Crystalline silica (quartz) is the primary raw material of engineered stone and artificial marble (quartz countertops), accounting for over 90% of the total formulation. Its high hardness (Mohs 7), pure whiteness and low absorption make it ideal for kitchen tops, bathroom materials and building façades. Angular crystalline grades (SN-JG) and 20–200 mesh silica sand series are widely used in engineered stone, UHPC, high-strength concrete, tiles, flooring and mortars.",
        "結晶質シリカ(石英)は人造大理石・エンジニアードストーン(クォーツカウンタートップ)の主原料で、配合の90%以上を占めます。モース硬度7の高い硬度、優れた白色度、低吸水率により、キッチン天板・バスルーム資材・建築外装材に最適です。角状結晶質(SN-JG)と20~200メッシュの珪砂ラインアップが人造大理石、UHPC、高強度コンクリート、タイル、床材、モルタルに広く使用されています。"
      ),
      items: [
        t("쿼츠 카운터탑 · 엔지니어드 스톤", "Quartz countertops & engineered stone", "クォーツカウンタートップ・エンジニアードストーン"),
        t("인조 대리석 · 인공석", "Artificial marble & synthetic stone", "人造大理石・人工石"),
        t("UHPC · 고강도 콘크리트", "UHPC & high-strength concrete", "UHPC・高強度コンクリート"),
        t("타일·바닥재·건축 몰탈", "Tiles, flooring, construction mortars", "タイル・床材・建築モルタル"),
      ],
    },
    {
      title: t(
        "유리 · 특수 유리 · 도자기 원료",
        "Glass · Specialty Glass · Ceramics Raw Material",
        "ガラス・特殊ガラス・陶磁器原料"
      ),
      desc: t(
        "고순도 결정질 규사(SiO₂ 99% 이상)는 유리·특수 유리·도자기 산업의 기본 원료로 사용됩니다. 판유리·용기유리·태양광 커버 유리·LCD/OLED 백플레인 유리·붕규산 유리·저 유전 유리 섬유·광학 유리 등의 SiO₂ 공급원으로 필수적이며, 도자기·위생도기·타일 몸체 조성의 주 원료입니다. 결정형 각상 실리카 SN-JG 및 20~200 mesh 규사 라인업이 융제 반응과 유리 균질성 확보를 위해 정밀 입도 관리 상태로 공급됩니다.",
        "High-purity crystalline silica sand (SiO₂ ≥ 99%) is the foundational raw material of the glass, specialty glass and ceramics industries. It is the essential SiO₂ source for flat glass, container glass, solar cover glass, LCD/OLED backplane glass, borosilicate glass, low-Dk glass fiber and optical glass, and it is a primary raw material for ceramic, sanitary ware and tile bodies. Crystalline angular SN-JG and 20–200 mesh silica sand grades are supplied under strict particle-size control to secure flux reactivity and glass homogeneity.",
        "高純度結晶質珪砂(SiO₂ 99%以上)は、ガラス・特殊ガラス・陶磁器産業の基本原料です。板ガラス、容器ガラス、太陽光カバーガラス、LCD/OLEDバックプレーンガラス、ホウケイ酸ガラス、低誘電ガラス繊維、光学ガラスなどのSiO₂供給源として不可欠であり、陶磁器・衛生陶器・タイル素地の主原料です。結晶質角状SN-JGおよび20~200メッシュ珪砂ラインアップが、フラックス反応とガラス均質性の確保のため精密な粒度管理下で供給されます。"
      ),
      items: [
        t("판유리 · 용기유리 · 태양광 커버 유리", "Flat glass, container glass, solar cover glass", "板ガラス・容器ガラス・太陽光カバーガラス"),
        t("LCD / OLED 백플레인 유리", "LCD / OLED backplane glass", "LCD / OLEDバックプレーンガラス"),
        t("붕규산 유리 · 저 유전 유리 섬유", "Borosilicate glass & low-Dk glass fiber", "ホウケイ酸ガラス・低誘電ガラス繊維"),
        t("도자기 · 위생도기 · 타일 몸체", "Ceramics, sanitary ware, tile body", "陶磁器・衛生陶器・タイル素地"),
      ],
    },
    {
      title: t(
        "정밀 주조 · 주물 · 파운드리",
        "Precision Casting · Foundry",
        "精密鋳造・鋳物・ファウンドリ"
      ),
      desc: t(
        "결정질 규사는 주조·파운드리 산업에서 가장 널리 사용되는 몰드·코어 소재입니다. 높은 내화도(1670℃), 열간 강도, 열충격 저항, 낮은 팽창률로 자동차 엔진 블록·터빈 부품·기계 부품 주물 몰드에 필수적이며, 20~120 mesh 라인업이 그린 샌드·수지 코어·CO₂ 프로세스에 폭넓게 사용됩니다. 저 방사성 원소 그레이드는 정밀 인베스트먼트 캐스팅과 세라믹 슬러리 코팅제로도 사용됩니다.",
        "Crystalline silica sand is the most widely used mold and core material in the casting and foundry industry. Its high refractoriness (1670 °C), hot strength, thermal-shock resistance and low expansion make it essential for automotive engine block, turbine and machinery casting molds. 20–120 mesh series are widely used for green sand, resin-bonded cores and CO₂ processes, and low-radioactive grades are also used for precision investment casting and ceramic slurry coatings.",
        "結晶質珪砂は鋳造・ファウンドリ産業で最も広く使用されるモールド・コア材料です。高い耐火度(1670℃)、熱間強度、耐熱衝撃性、低膨張率により自動車エンジンブロック・タービン部品・機械部品鋳造モールドに不可欠であり、20~120メッシュのラインアップがグリーンサンド・レジンコア・CO₂プロセスに広く使用されます。低放射性グレードは精密インベストメント鋳造やセラミックスラリーコーティングにも使用されます。"
      ),
      items: [
        t("자동차 엔진 블록 · 실린더 헤드 주물", "Automotive engine block & cylinder head castings", "自動車エンジンブロック・シリンダーヘッド鋳造"),
        t("그린 샌드 · 수지 코어 · CO₂ 프로세스", "Green sand, resin cores, CO₂ process", "グリーンサンド・レジンコア・CO₂プロセス"),
        t("정밀 인베스트먼트 캐스팅", "Precision investment casting", "精密インベストメント鋳造"),
        t("세라믹 슬러리 코팅제", "Ceramic slurry coatings", "セラミックスラリーコーティング"),
      ],
    },
    {
      title: t(
        "연마재 · 워터젯 · 표면 처리",
        "Abrasives · Waterjet · Surface Treatment",
        "研磨材・ウォータージェット・表面処理"
      ),
      desc: t(
        "모스 경도 7의 결정질 실리카는 샌드블라스팅·워터젯 커팅·연마 세정 등 표면 처리 분야에서 핵심 소재로 사용됩니다. 20~80 mesh 규사가 금속·석재·콘크리트 표면 세정 및 러스트 제거에, 미분 결정형 SN-JG는 정밀 연마 페이스트와 광학 렌즈 랩핑 공정에 사용됩니다. 필터 미디어(워터 필터, 수영장 필터)로도 폭넓게 활용됩니다.",
        "With a Mohs hardness of 7, crystalline silica is a core material for surface-treatment applications — sandblasting, waterjet cutting and abrasive cleaning. 20–80 mesh silica sand is used for metal, stone and concrete surface cleaning and rust removal, while micronized crystalline SN-JG is applied to precision polishing pastes and optical-lens lapping. It is also widely used as filter media (water filtration, swimming-pool filters).",
        "モース硬度7の結晶質シリカは、サンドブラスト・ウォータージェット切断・研磨洗浄などの表面処理分野で中核素材として使用されます。20~80メッシュの珪砂は金属・石材・コンクリート表面の洗浄と錆除去に、微粉結晶質SN-JGは精密研磨ペーストや光学レンズラッピング工程に使用されます。ろ材(水フィルター、プールフィルター)としても広く活用されています。"
      ),
      items: [
        t("샌드블라스팅 · 그릿 블라스팅", "Sandblasting & grit blasting", "サンドブラスト・グリットブラスト"),
        t("워터젯 커팅용 애브레시브", "Waterjet cutting abrasive", "ウォータージェット切断用アブレシブ"),
        t("정밀 연마 페이스트 · 렌즈 랩핑", "Precision polishing paste & lens lapping", "精密研磨ペースト・レンズラッピング"),
        t("워터 필터 · 수영장 필터 미디어", "Water & swimming-pool filter media", "水フィルター・プールフィルター用ろ材"),
      ],
    },
    {
      title: t(
        "태양광 · 반도체 · 웨이퍼 원료",
        "Solar · Semiconductor · Wafer Feedstock",
        "太陽光・半導体・ウェハ原料"
      ),
      desc: t(
        "SiO₂ 99.99% 이상 초고순도 결정질 석영(天然 高純度規石)은 태양광용 다결정/단결정 실리콘 잉곳을 성장시키는 석영 도가니(Quartz Crucible)의 필수 원료입니다. 반도체용 확산로 튜브, 웨이퍼 캐리어, CVD 반응관 등 초고온·초청정 공정 부품의 소재이며, 광섬유 프리폼용 합성 석영의 출발 원료로도 사용됩니다. 저 알칼리·저 방사성 원소 관리가 필수이며, 광원 채광 단계부터 광학 선별·화학 정제·자기 선별을 거쳐 공급됩니다.",
        "Ultra-high-purity crystalline quartz (SiO₂ ≥ 99.99%) is the essential raw material of quartz crucibles that grow multicrystalline and monocrystalline silicon ingots for solar and semiconductor use. It is also the material for semiconductor diffusion-furnace tubes, wafer carriers and CVD reaction tubes — components used in ultra-high-temperature, ultra-clean processes — and the starting feedstock for synthetic quartz used in optical-fiber preforms. Low-alkali and low-radioactive control is mandatory, achieved through carefully selected ore, optical sorting, chemical purification and magnetic separation.",
        "SiO₂ 99.99%以上の超高純度結晶質石英(天然高純度石英)は、太陽光・半導体用多結晶/単結晶シリコンインゴットを成長させる石英ルツボ(Quartz Crucible)の必須原料です。半導体用拡散炉チューブ、ウェハキャリア、CVD反応管など超高温・超清浄プロセス部品の素材であり、光ファイバープリフォーム用合成石英の出発原料としても使用されます。低アルカリ・低放射性元素管理が必須で、鉱床選別・光学選別・化学精製・磁力選別を経て供給されます。"
      ),
      items: [
        t("태양광 잉곳 성장용 석영 도가니", "Quartz crucibles for solar ingot growth", "太陽光インゴット成長用石英ルツボ"),
        t("반도체 확산로 튜브 · CVD 반응관", "Semiconductor diffusion tubes & CVD reactors", "半導体拡散炉チューブ・CVD反応管"),
        t("합성 석영·광섬유 프리폼 출발 원료", "Feedstock for synthetic quartz & optical fiber preforms", "合成石英・光ファイバープリフォーム出発原料"),
        t("고순도 석영 유리 원료", "High-purity fused quartz feedstock", "高純度石英ガラス原料"),
      ],
    },
    {
      title: t(
        "스포츠 표면재 · 인조잔디 · 골프장 벙커",
        "Sports Surfaces · Artificial Turf · Golf Course",
        "スポーツ表面材・人工芝・ゴルフバンカー"
      ),
      desc: t(
        "구형에 가까운 결정질 규사는 인조잔디 충전재, 골프장 벙커 샌드, 승마장 표면재, 배수·기반재 등 스포츠 표면 분야의 표준 소재입니다. 라운드 형상·균일 입도·낮은 먼지 함량·중성 pH로 스포츠 안전성과 경기력을 확보하며, 실리카 광원에서 선별한 백색·황색·라운드 그레이드가 요구 조건에 맞춰 공급됩니다.",
        "Rounded crystalline silica sand is the standard material for sports-surface applications — artificial-turf infill, golf-course bunker sand, equestrian arena surfacing and drainage/base courses. Its rounded shape, uniform grain size, low dust content and neutral pH ensure both athlete safety and playing performance. White, yellow and rounded grades sorted from selected silica ore are supplied to meet each specification.",
        "球状に近い結晶質珪砂は、人工芝インフィル、ゴルフバンカーサンド、乗馬場表面材、排水・基盤材などスポーツ表面分野の標準素材です。丸みのある形状、均一な粒度、低ダスト含量、中性pHにより選手の安全性と競技性を確保し、白色・黄色・ラウンドグレードが要求仕様に合わせて供給されます。"
      ),
      items: [
        t("인조잔디 충전용 실리카 (Infill)", "Artificial-turf infill silica", "人工芝インフィル用シリカ"),
        t("골프장 벙커 · 페어웨이 탑드레싱", "Golf bunker sand & fairway top-dressing", "ゴルフバンカーサンド・フェアウェイトップドレッシング"),
        t("승마장·경기장 표면재", "Equestrian & sports arena surfacing", "乗馬場・競技場表面材"),
        t("배수·기반재·조경 자재", "Drainage/base courses & landscaping", "排水・基盤材・造園資材"),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/#applications" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← {t("응용 분야", "Applications", "用途分野")}
          </Link>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            QUARTZ · CRYSTALLINE SILICA · APPLICATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {t("쿼츠 · 결정질 실리카 응용 분야", "Quartz · Crystalline Silica Applications", "クォーツ・結晶質シリカ用途分野")}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t(
              "쿼츠(Quartz) · 결정질 실리카(Crystalline Silica, α-Quartz)는 SiO₂가 규칙적으로 배열된 결정 구조 소재로, 모스 경도 7의 높은 기계적 강도·1670℃의 뛰어난 내화도·화학적 안정성·풍부한 매장량을 갖춘 산업의 기본 원료입니다. 결정형 구상(SN-QJG)·모서리 라운드(SN-YJG)·각상(SN-JG)·저방사선(SN-CL) 등 형상과 순도별 라인업이 반도체 EMC, CCL·PCB, 인조 대리석, 유리·도자기, 정밀 주조, 연마·워터젯, 태양광 웨이퍼, 스포츠 표면재 등 국가 기간산업 전반에 걸쳐 사용됩니다.",
              "Quartz and crystalline silica (α-quartz) are foundational industrial raw materials — SiO₂ arranged in a regular crystalline lattice, delivering a Mohs hardness of 7, refractoriness up to 1670 °C, excellent chemical stability and abundant availability. Lineups by shape and purity — crystalline spherical (SN-QJG), round-corner (SN-YJG), angular (SN-JG) and low-alpha (SN-CL) — are used across semiconductor EMC, CCL/PCB, engineered stone, glass and ceramics, precision casting, abrasives and waterjet, solar wafer feedstock and sports surfacing.",
              "クォーツ(Quartz)・結晶質シリカ(α-クォーツ)は、SiO₂が規則的に配列された結晶構造を持ち、モース硬度7の高い機械的強度、1670℃の優れた耐火度、化学的安定性、豊富な埋蔵量を備えた産業の基本原料です。結晶質球状(SN-QJG)、丸角(SN-YJG)、角状(SN-JG)、低α線(SN-CL)など形状・純度別のラインアップが、半導体EMC、CCL・PCB、人造大理石、ガラス・陶磁器、精密鋳造、研磨・ウォータージェット、太陽光ウェハ、スポーツ表面材など国家基幹産業全般で使用されています。"
            )}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 md:pb-32">
        <div className="space-y-8">
          {sections.map((s, i) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 md:p-10 shadow-sm transition hover:border-primary"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-bold tracking-tight md:text-2xl">{s.title}</h2>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{s.desc}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/products/high-purity-quartz/"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            {t("천연 고순도규석 제품 보기", "View Natural High-Purity Quartz", "天然高純度石英 製品を見る")}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default QuartzApplications;
