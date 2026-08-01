import gradeA from "@/assets/grade-a-silica.png";
import gradeADetail from "@/assets/grade-a-detail.png";
import gradeB from "@/assets/grade-b-silica.png";
import gradeBDetail from "@/assets/grade-b-detail.png";
import gradeC from "@/assets/grade-c-silica.png";
import gradeCDetail from "@/assets/grade-c-detail.png";
import fusedSilicaCategoryImg from "@/assets/fused-silica-category.jpg";
import highPurityQuartz from "@/assets/high-purity-quartz-raw.jpg";
import hpqDetail from "@/assets/hpq-detail.jpg";
import sgMicrosilica from "@/assets/sg-microsilica.jpg";
import sgAntiblocking from "@/assets/sg-antiblocking.jpg";
import sgMatting from "@/assets/sg-matting.jpg";
import sgLargePore from "@/assets/sg-large-pore.jpg";
import sgFng from "@/assets/sg-fng.jpg";
import sgCoarse from "@/assets/sg-coarse.jpg";
import sgTypeA from "@/assets/sg-type-a.jpg";
import sgTypeB from "@/assets/sg-type-b.jpg";
import precipitatedSilica from "@/assets/precipitated-silica.jpg";
import fumedSilica from "@/assets/fumed-silica.png";
import silicaSandImg from "@/assets/silica-sand.jpg";
import silicaPowderImg from "@/assets/silica-powder.jpg";
import sphericalImg from "@/assets/spherical-silica-powder.jpg";
import roundCornerImg from "@/assets/round-corner-silica-powder.jpg";
import angularImg from "@/assets/angular-silica-powder.jpg";
import lowRadImg from "@/assets/low-radiation-silica-powder.jpg";
import surfaceModImg from "@/assets/surface-modified-silica-powder.jpg";
import sandGranuleImg from "@/assets/silica-sand-granule.jpg";
import leadFreeGlassImg from "@/assets/lead-free-glass-powder.jpg";
import hf04Img from "@/assets/hf04-fused-silica-powder.jpg";
import sphSemImg from "@/assets/sl-sph-300-sem.png";
import silicaSolImg from "@/assets/silica-sol.png";
import slShsImg from "@/assets/sl-shs-photo.jpg";
import crystallineSilicaImg from "@/assets/crystalline-silica.jpg";
import slHs12Img from "@/assets/sl-hs12-crystalline-silica.jpg";
import slChr01Img from "@/assets/sl-chr-01.jpg";
import slChr02Img from "@/assets/sl-chr-02.jpg";
import slChr03Img from "@/assets/sl-chr-03.jpg";
import slInd01Img from "@/assets/sl-ind-01-photo.jpg";
import slInd02Img from "@/assets/sl-ind-02-photo.jpg";
import slInd03Img from "@/assets/sl-ind-03-photo.jpg";
import slInd04Img from "@/assets/sl-ind-04-photo.jpg";
import slInd05Img from "@/assets/sl-ind-05-photo.jpg";
import slInd06Img from "@/assets/sl-ind-06-photo.jpg";
import slInd07Img from "@/assets/sl-ind-07-photo.jpg";
import slDes01Img from "@/assets/sl-des-01-photo.jpg";
import slDes02Img from "@/assets/sl-des-02-photo.jpg";
import slDes03Img from "@/assets/sl-des-03-photo.jpg";
import slDes04Img from "@/assets/sl-des-04-photo.jpg";
import slDes05Img from "@/assets/sl-des-05-photo.jpg";
import slDes06Img from "@/assets/sl-des-06-photo.jpg";
import slDes07Img from "@/assets/sl-des-07-photo.jpg";
import slAls01Img from "@/assets/sl-als-01-photo.jpg";
import slAls03Img from "@/assets/sl-als-03-photo.jpg";
import slAls04Img from "@/assets/sl-als-04-photo.jpg";

export type ProductCategory = "quartz" | "silica-gel" | "precipitated" | "fumed" | "advanced-series" | "sand" | "sand-powder";

export type SubModel = {
  code: string;
  spec: string;
  enSpec?: string;
  jaSpec?: string;
  name?: string;
  enName?: string;
  jaName?: string;
  slug?: string;
};

export type ProductDetail = {
  slug: string;
  name: string;
  enName: string;
  jaName?: string;
  tagline: string;
  enTagline?: string;
  jaTagline?: string;
  description: string;
  enDescription?: string;
  jaDescription?: string;
  image: string;
  detailImage?: string;
  category?: ProductCategory;
  features: { title: string; desc: string; enTitle?: string; enDesc?: string; jaTitle?: string; jaDesc?: string }[];
  specs: { label: string; value: string; note?: string; enLabel?: string; enValue?: string; enNote?: string; jaLabel?: string; jaValue?: string; jaNote?: string }[];
  applications: string[];
  subModels?: SubModel[];
  subModelsColumnLabel?: { ko: string; en: string; ja: string };
  isCategoryIndex?: boolean;
  parentSlug?: string;
  useTags?: string[];
};


export const productCatalog: ProductDetail[] = [
  {
    slug: "fused-silica-a-grade",
    name: "A등급 용융실리카",
    enName: "Grade A · Ultra-High Purity Fused Silica", jaName: "Aグレード溶融シリカ",
    tagline: "반도체 공정의 신뢰를 완성하는 100% 무정형 초정밀 소재",
    enTagline: "100% Amorphous Ultra-Precision Material That Delivers Semiconductor-Grade Reliability", jaTagline: "半導体工程の信頼を完成させる100%非晶質の超精密素材",
    description:
      "당사가 공급하는 A급 용융 실리카(Fused Silica)는 천연 석영 원석을 초고온에서 용융 및 급냉 과정을 거쳐 제조된 비정질(Amorphous) 이산화규소(SiO₂) 소재로, 반도체·정밀 화학·광학·고온 내열 소재 등 첨단 산업 분야의 핵심 원료로서 그 가치를 인정받고 있습니다. 본 제품은 일반 용융 실리카 대비 엄격한 품질 관리를 통해 불순물 함량을 획기적으로 저감하였으며, 우수한 물리적 특성과 화학적 안정성을 동시에 확보하여 까다로운 공정 환경에서도 최상의 성능을 발휘하도록 설계되었습니다.",
    enDescription:
      "Our Grade A Fused Silica is an amorphous silicon dioxide (SiO₂) material produced by melting natural quartz at ultra-high temperatures and rapidly quenching it. It is recognized as a core raw material across advanced industries such as semiconductors, precision chemicals, optics, and high-temperature refractory applications. Compared to standard fused silica, this product dramatically reduces impurity content through rigorous quality control while simultaneously securing outstanding physical properties and chemical stability — delivering top-tier performance even in the most demanding processes.", jaDescription: "当社が供給するAグレード溶融シリカ(Fused Silica)は、天然石英原石を超高温で溶融・急冷する過程を経て製造される非晶質(Amorphous)二酸化ケイ素(SiO₂)素材であり、半導体・精密化学・光学・高温耐熱素材など先端産業分野の核心原料としてその価値が認められています。本製品は一般的な溶融シリカと比較して厳格な品質管理により不純物含有量を画期的に低減しており、優れた物理的特性と化学的安定性を同時に確保し、厳しい工程環境でも最適の性能を発揮するよう設計されています。",
    image: gradeA,
    detailImage: gradeADetail,
    features: [
      { title: "🔬 완벽한 무정형 구조", desc: "100% 무정형으로 고온에서도 결정화·변형 제로", enTitle: "🔬 Perfect Amorphous Structure", jaTitle: "🔬 完璧な非晶質構造", enDesc: "100% amorphous — zero crystallization or deformation even at high temperatures", jaDesc: "100%非晶質で高温でも結晶化・変形ゼロ" },
      { title: "🌡️ 극저열팽창", desc: "열팽창계수 < 0.6 (×10⁻⁶/°C) — 열충격에 매우 강함", enTitle: "🌡️ Ultra-Low Thermal Expansion", jaTitle: "🌡️ 極低熱膨張", enDesc: "Coefficient of thermal expansion < 0.6 (×10⁻⁶/°C) — highly resistant to thermal shock", jaDesc: "熱膨張係数 < 0.6 (×10⁻⁶/°C) — 熱衝撃に非常に強い" },
      { title: "🧼 초고순도 관리", desc: "금속 불순물 합계 < 0.03%, 반도체 수율 저하 요인 차단", enTitle: "🧼 Ultra-High Purity Management", jaTitle: "🧼 超高純度管理", enDesc: "Total metallic impurities < 0.03% — eliminates yield-loss factors in semiconductor production", jaDesc: "金属不純物合計 < 0.03%、半導体の歩留まり低下要因を遮断" },
      { title: "⚡ 고전기절연성", desc: "EC < 3 µs/cm, Cl < 3 ppm — 전자 부품 절연 최적화", enTitle: "⚡ Superior Electrical Insulation", jaTitle: "⚡ 高電気絶縁性", enDesc: "EC < 3 µs/cm, Cl < 3 ppm — optimized insulation for electronic components", jaDesc: "EC < 3 µs/cm, Cl < 3 ppm — 電子部品の絶縁最適化" },
      { title: "🔧 맞춤형 입도", desc: "60mm 과립부터 1µm(12500 메쉬) 미분까지 가공 가능", enTitle: "🔧 Custom Particle Sizes", jaTitle: "🔧 カスタマイズ粒度", enDesc: "Processable from 60 mm granules down to 1 µm (12,500 mesh) fine powder", jaDesc: "60mm顆粒から1µm(12500メッシュ)微粉まで加工可能" },
      { title: "✅ 안정 공급", desc: "엄격한 QC 기반의 안정적 공급망", enTitle: "✅ Stable Supply", jaTitle: "✅ 安定供給", enDesc: "Stable supply chain backed by strict quality control", jaDesc: "厳格なQCに基づく安定供給網" },
    ],
    specs: [
      { label: "SiO₂ (순도)", value: "≥ 99.9%", note: "초고순도", enLabel: "SiO₂ (Purity)", jaLabel: "SiO₂ (純度)", enNote: "Ultra-high purity", jaNote: "超高純度" },
      { label: "Al (알루미늄)", value: "< 0.01%", note: "극미량", enLabel: "Al (Aluminum)", jaLabel: "Al (アルミニウム)", enNote: "Trace amount", jaNote: "極微量" },
      { label: "Fe (철)", value: "< 0.005%", note: "극미량", enLabel: "Fe (Iron)", jaLabel: "Fe (鉄)", enNote: "Trace amount", jaNote: "極微量" },
      { label: "K (칼륨)", value: "< 0.003%", note: "극미량", enLabel: "K (Potassium)", jaLabel: "K (カリウム)", enNote: "Trace amount", jaNote: "極微量" },
      { label: "Na (나트륨)", value: "< 0.003%", note: "극미량", enLabel: "Na (Sodium)", jaLabel: "Na (ナトリウム)", enNote: "Trace amount", jaNote: "極微量" },
      { label: "Ca (칼슘)", value: "< 0.003%", note: "극미량", enLabel: "Ca (Calcium)", jaLabel: "Ca (カルシウム)", enNote: "Trace amount", jaNote: "極微量" },
      { label: "Mg (마그네슘)", value: "< 0.001%", note: "극미량", enLabel: "Mg (Magnesium)", jaLabel: "Mg (マグネシウム)", enNote: "Trace amount", jaNote: "極微量" },
      { label: "무정형상 (Amorphous)", value: "100%", note: "완전 무정형", enLabel: "Amorphous", jaLabel: "非晶質 (Amorphous)", enNote: "Fully amorphous", jaNote: "完全非晶質" },
      { label: "열팽창계수", value: "< 0.6 (×10⁻⁶/°C)", note: "초저팽창", enLabel: "Thermal Expansion Coefficient", jaLabel: "熱膨張係数", enNote: "Ultra-low expansion", jaNote: "超低膨張" },
      { label: "수분 (Moisture)", value: "< 0.1%", note: "건조 관리", enLabel: "Moisture", jaLabel: "水分 (Moisture)", enNote: "Dry controlled", jaNote: "乾燥管理" },
      { label: "밀도 (Density)", value: "1.8 – 2.4 ×10³ kg/m³", note: "균일", enLabel: "Density", jaLabel: "密度 (Density)", enNote: "Uniform", jaNote: "均一" },
      { label: "모스경도 (Mohs)", value: "7", note: "내마모성", enLabel: "Mohs Hardness", jaLabel: "モース硬度 (Mohs)", enNote: "Wear-resistant", jaNote: "耐摩耗性" },
      { label: "수성추출액 EC", value: "< 3 µs/cm", note: "고절연", enLabel: "Aqueous Extract EC", jaLabel: "水性抽出液 EC", enNote: "High insulation", jaNote: "高絶縁" },
      { label: "수성추출액 Cl", value: "< 3 ppm", note: "초저염소", enLabel: "Aqueous Extract Cl", jaLabel: "水性抽出液 Cl", enNote: "Ultra-low chlorine", jaNote: "超低塩素" },
      { label: "수성추출액 pH", value: "6.5 ± 1", note: "중성 안정", enLabel: "Aqueous Extract pH", jaLabel: "水性抽出液 pH", enNote: "Neutral stability", jaNote: "中性安定" },
    ],
    applications: ["반도체", "광학", "디스플레이", "항공/방산", "의료", "에너지"],
  },
  {
    slug: "fused-silica-b-grade",
    name: "B등급 용융실리카",
    enName: "Grade B · Premium Fused Silica", jaName: "Bグレード溶融シリカ",
    tagline: "고순도와 열적 안정성의 최적 균형, 에너지 및 정밀 산업의 표준",
    enTagline: "Optimal Balance of High Purity and Thermal Stability — The Standard for Energy and Precision Industries", jaTagline: "高純度と熱的安定性の最適バランス、エネルギーおよび精密産業の標準",
    description:
      "프리미엄 용융 실리카 B등급은 99.5% 이상의 SiO₂ 순도와 98% 이상의 무정형 구조를 갖춘 고품질 소재입니다. 태양광·전자/반도체·정밀 주조·특수 소재 등 고신뢰성이 요구되는 산업에 폭넓게 공급됩니다.",
    enDescription:
      "Grade B Premium Fused Silica is a high-quality material with ≥99.5% SiO₂ purity and ≥98% amorphous structure. It is widely supplied to industries requiring high reliability, including solar, electronics/semiconductor, precision casting, and specialty materials.", jaDescription: "プレミアム溶融シリカBグレードは、99.5%以上のSiO₂純度と98%以上の非晶質構造を備えた高品質な素材です。太陽光・電子/半導体・精密鋳造・特殊素材など高信頼性が要求される産業に幅広く供給されます。",
    image: gradeB,
    detailImage: gradeBDetail,
    features: [
      { title: "🔥 우수한 열적 안정성", desc: "98% 이상 무정형 + 열팽창 < 0.8 → 고온 환경 균일 성능 보장", enTitle: "🔥 Excellent Thermal Stability", jaTitle: "🔥 優れた熱的安定性", enDesc: "≥98% amorphous + thermal expansion < 0.8 → uniform performance in high-temperature environments", jaDesc: "98%以上が非晶質 + 熱膨張 < 0.8 → 高温環境で均一な性能を保証" },
      { title: "🧪 철저한 불순물 관리", desc: "Al, Fe 등 ppm 단위 제어 → 화학적 부식 및 변색 방지", enTitle: "🧪 Strict Impurity Control", jaTitle: "🧪 徹底した不純物管理", enDesc: "Al, Fe, etc. controlled at ppm levels → prevents chemical corrosion and discoloration", jaDesc: "Al、Feなどをppm単位で制御 → 化学的腐食および変色を防止" },
      { title: "✨ 고품질 외관", desc: "무색 투명 또는 고순도 백색 분말 → 최종 제품 신뢰성 향상", enTitle: "✨ High-Quality Appearance", jaTitle: "✨ 高品質な外観", enDesc: "Colorless transparent or high-purity white powder → enhances finished product reliability", jaDesc: "無色透明または高純度白色粉末 → 最終製品の信頼性向上" },
      { title: "⚙️ 맞춤형 입도 제어", desc: "60mm 과립 ~ 1µm(12500 메쉬) 미분 → 공정 최적화 가능", enTitle: "⚙️ Custom Particle-Size Control", jaTitle: "⚙️ カスタマイズ粒度制御", enDesc: "60 mm granules to 1 µm (12,500 mesh) fine powder → process optimization available", jaDesc: "60mm顆粒~1µm(12500メッシュ)微粉 → 工程の最適化が可能" },
    ],
    specs: [
      { label: "SiO₂ (순도)", value: "> 99.5%", note: "고순도 정제", enLabel: "SiO₂ (Purity)", jaLabel: "SiO₂ (純度)", enNote: "High-purity refined", jaNote: "高純度精製" },
      { label: "Al (알루미늄)", value: "< 0.03%", note: "화학적 안정성", enLabel: "Al (Aluminum)", jaLabel: "Al (アルミニウム)", enNote: "Chemical stability", jaNote: "化学的安定性" },
      { label: "Fe (철)", value: "< 0.02%", note: "저철분 관리", enLabel: "Fe (Iron)", jaLabel: "Fe (鉄)", enNote: "Low-iron management", jaNote: "低鉄分管理" },
      { label: "K (칼륨)", value: "< 0.01%", note: "알칼리 최소화", enLabel: "K (Potassium)", jaLabel: "K (カリウム)", enNote: "Alkali minimized", jaNote: "アルカリ最小化" },
      { label: "Na (나트륨)", value: "< 0.01%", note: "알칼리 최소화", enLabel: "Na (Sodium)", jaLabel: "Na (ナトリウム)", enNote: "Alkali minimized", jaNote: "アルカリ最小化" },
      { label: "Ca (칼슘)", value: "< 0.01%", note: "불순물 제어", enLabel: "Ca (Calcium)", jaLabel: "Ca (カルシウム)", enNote: "Impurity controlled", jaNote: "不純物制御" },
      { label: "Mg (마그네슘)", value: "< 0.003%", note: "미량 관리", enLabel: "Mg (Magnesium)", jaLabel: "Mg (マグネシウム)", enNote: "Trace management", jaNote: "微量管理" },
      { label: "무정형상 (Amorphous)", value: "> 98%", note: "우수한 열적 특성", enLabel: "Amorphous", jaLabel: "非晶質 (Amorphous)", enNote: "Excellent thermal properties", jaNote: "優れた熱的特性" },
      { label: "열팽창계수", value: "< 0.8 (×10⁻⁶/°C)", note: "내열충격성 우수", enLabel: "Thermal Expansion Coefficient", jaLabel: "熱膨張係数", enNote: "Excellent thermal-shock resistance", jaNote: "耐熱衝撃性に優れる" },
      { label: "수분 (Moisture)", value: "< 0.1%", note: "초건조 상태", enLabel: "Moisture", jaLabel: "水分 (Moisture)", enNote: "Ultra-dry state", jaNote: "超乾燥状態" },
      { label: "밀도 (Density)", value: "1.8 – 2.4 ×10³ kg/m³", note: "표준 밀도", enLabel: "Density", jaLabel: "密度 (Density)", enNote: "Standard density", jaNote: "標準密度" },
    ],
    applications: ["태양광", "전자/반도체", "정밀 주조", "특수 소재"],
  },
  {
    slug: "fused-silica-c-grade",
    name: "C등급 용융실리카",
    enName: "Grade C · Industrial Fused Silica", jaName: "Cグレード溶融シリカ",
    tagline: "경제성과 실용성을 갖춘 범용 산업 소재",
    enTagline: "General-Purpose Industrial Material with Cost Efficiency and Practical Performance", jaTagline: "経済性と実用性を兼ね備えた汎用産業素材",
    description:
      "산업용 용융 실리카 C등급은 99% 이상의 SiO₂ 순도와 95% 이상의 무정형 구조를 갖춘 경제형 소재입니다. 건축·코팅·플라스틱·연마 등 광범위한 산업 영역에서 안정적인 성능을 발휘합니다.",
    enDescription:
      "Grade C Industrial Fused Silica is an economical material with ≥99% SiO₂ purity and ≥95% amorphous structure. It delivers stable performance across a wide range of industrial areas including construction, coatings, plastics, and abrasives.", jaDescription: "産業用溶融シリカCグレードは、99%以上のSiO₂純度と95%以上の非晶質構造を備えた経済型素材です。建築・コーティング・プラスチック・研磨など広範な産業領域で安定した性能を発揮します。",
    image: gradeC,
    detailImage: gradeCDetail,
    features: [
      { title: "🧱 안정적 무정형 구조", desc: "95% 이상 무정형상 → 열적·화학적 안정성 확보", enTitle: "🧱 Stable Amorphous Structure", jaTitle: "🧱 安定した非晶質構造", enDesc: "≥95% amorphous → ensures thermal and chemical stability", jaDesc: "95%以上が非晶質 → 熱的・化学的安定性を確保" },
      { title: "💰 경제적 원가 구조", desc: "대량 산업용으로 최적화된 가격 경쟁력", enTitle: "💰 Cost-Effective Structure", jaTitle: "💰 経済的なコスト構造", enDesc: "Price-competitive for large-scale industrial applications", jaDesc: "大量産業用に最適化された価格競争力" },
      { title: "🧪 우수한 내화학성", desc: "산·알칼리·유기용제에 대한 높은 내구성", enTitle: "🧪 Excellent Chemical Resistance", jaTitle: "🧪 優れた耐化学性", enDesc: "High durability against acids, alkalis, and organic solvents", jaDesc: "酸・アルカリ・有機溶剤に対する高い耐久性" },
      { title: "⚙️ 폭넓은 입도 지원", desc: "과립(60mm) ~ 미분(1µm) 고객 맞춤 생산 가능", enTitle: "⚙️ Wide Particle-Size Support", jaTitle: "⚙️ 幅広い粒度対応", enDesc: "Custom production from granules (60 mm) to fine powder (1 µm)", jaDesc: "顆粒(60mm) ~ 微粉(1µm) お客様に合わせたカスタム生産が可能" },
    ],
    specs: [
      { label: "SiO₂ (순도)", value: "> 99%", note: "일반 산업용", enLabel: "SiO₂ (Purity)", jaLabel: "SiO₂ (純度)", enNote: "General industrial", jaNote: "一般産業用" },
      { label: "Al (알루미늄)", value: "< 0.1%", note: "허용 범위", enLabel: "Al (Aluminum)", jaLabel: "Al (アルミニウム)", enNote: "Acceptable range", jaNote: "許容範囲" },
      { label: "Fe (철)", value: "< 0.04%", note: "허용 범위", enLabel: "Fe (Iron)", jaLabel: "Fe (鉄)", enNote: "Acceptable range", jaNote: "許容範囲" },
      { label: "K (칼륨)", value: "< 0.05%", note: "허용 범위", enLabel: "K (Potassium)", jaLabel: "K (カリウム)", enNote: "Acceptable range", jaNote: "許容範囲" },
      { label: "Na (나트륨)", value: "< 0.05%", note: "허용 범위", enLabel: "Na (Sodium)", jaLabel: "Na (ナトリウム)", enNote: "Acceptable range", jaNote: "許容範囲" },
      { label: "Ca (칼슘)", value: "< 0.05%", note: "허용 범위", enLabel: "Ca (Calcium)", jaLabel: "Ca (カルシウム)", enNote: "Acceptable range", jaNote: "許容範囲" },
      { label: "Mg (마그네슘)", value: "< 0.01%", note: "허용 범위", enLabel: "Mg (Magnesium)", jaLabel: "Mg (マグネシウム)", enNote: "Acceptable range", jaNote: "許容範囲" },
      { label: "무정형상 (Amorphous)", value: "> 95%", note: "안정적 무정형", enLabel: "Amorphous", jaLabel: "非晶質 (Amorphous)", enNote: "Stable amorphous", jaNote: "安定した非晶質" },
      { label: "열팽창계수", value: "< 1.2 (×10⁻⁶/°C)", note: "내열충격성 확보", enLabel: "Thermal Expansion Coefficient", jaLabel: "熱膨張係数", enNote: "Thermal-shock resistance assured", jaNote: "耐熱衝撃性を確保" },
      { label: "수분 (Moisture)", value: "< 0.1%", note: "건조 관리", enLabel: "Moisture", jaLabel: "水分 (Moisture)", enNote: "Dry controlled", jaNote: "乾燥管理" },
      { label: "밀도 (Density)", value: "1.8 – 2.4 ×10³ kg/m³", note: "균일", enLabel: "Density", jaLabel: "密度 (Density)", enNote: "Uniform", jaNote: "均一" },
      { label: "모스경도 (Mohs)", value: "7", note: "내마모성", enLabel: "Mohs Hardness", jaLabel: "モース硬度 (Mohs)", enNote: "Wear-resistant", jaNote: "耐摩耗性" },
    ],
    applications: ["건축 및 건자재", "페인트 및 코팅", "플라스틱/고무", "연마 및 내마모재", "기타 산업용"],
  },
  {
    slug: "sls-series",
    name: "SL-S 시리즈 규사",
    enName: "SL-S Series Silica Sand", jaName: "SL-Sシリーズ 珪砂",
    tagline: "고순도 SiO₂·저철·고백색 — 선별·세척·산처리 공정의 산업용 규사 (SL-S 표준 시리즈)",
    enTagline: "High-Purity SiO₂, Low Iron, High Whiteness — Industrial Silica Sand (SL-S Standard Series)",
    jaTagline: "高純度SiO₂・低鉄・高白色度 — 選別・洗浄・酸処理工程による産業用シリカサンド(SL-S標準シリーズ)",
    description:
      "SL-S 시리즈는 천연 규석(Quartz)을 원료로 선별, 세척 및 산처리 공정을 거쳐 생산한 고품질 산업용 규사 표준 라인업입니다. 높은 이산화규소(SiO₂) 함량과 낮은 철(Fe) 함량, 우수한 백색도를 갖추고 있으며, 균일한 입도와 뛰어난 화학적 안정성으로 다양한 산업 분야에서 안정적인 품질을 제공합니다.",
    enDescription:
      "The SL-S Series is a high-quality industrial silica sand lineup produced from natural quartz through screening, washing, and acid-treatment processes. With high silicon dioxide (SiO₂) content, low iron (Fe) content, and excellent whiteness, it delivers consistent quality across a wide range of industries thanks to its uniform grain size and outstanding chemical stability.",
    jaDescription:
      "SL-Sシリーズは、天然石英(Quartz)を原料に選別・洗浄および酸処理工程を経て生産する高品質な産業用シリカサンド標準ラインアップです。高い二酸化ケイ素(SiO₂)含有量と低い鉄(Fe)含有量、優れた白色度を備えており、均一な粒度と優れた化学的安定性により、多様な産業分野で安定した品質を提供します。",
    image: silicaSandImg,
    category: "sand",
    features: [
      { title: "🪨 천연 규석 원료", desc: "천연 규석(Natural Quartz)을 원료로 생산한 고품질 규사", enTitle: "🪨 Natural Quartz Source", jaTitle: "🪨 天然石英を原料", enDesc: "High-quality silica sand produced from natural quartz", jaDesc: "天然石英(Natural Quartz)を原料に生産した高品質な珪砂" },
      { title: "🧼 불순물 최소화", desc: "선별·세척·산처리 공정으로 불순물을 효과적으로 제거", enTitle: "🧼 Minimized Impurities", jaTitle: "🧼 不純物の最小化", enDesc: "Impurities effectively removed via screening, washing, and acid-treatment", jaDesc: "選別・洗浄・酸処理工程で不純物を効果的に除去" },
      { title: "🧪 고순도 SiO₂", desc: "이산화규소(SiO₂) 함량 99.5 ~ 99.8%", enTitle: "🧪 High-Purity SiO₂", jaTitle: "🧪 高純度SiO₂", enDesc: "Silicon dioxide (SiO₂) content 99.5 – 99.8%", jaDesc: "二酸化ケイ素(SiO₂)含有量 99.5 ~ 99.8%" },
      { title: "⚙️ 저철·고백색 사양", desc: "저철(Fe) 및 고백색도 사양 맞춤 공급 가능", enTitle: "⚙️ Low-Iron · High-Whiteness Grades", jaTitle: "⚙️ 低鉄・高白色度仕様", enDesc: "Available in low-iron (Fe) and high-whiteness specifications", jaDesc: "低鉄(Fe)および高白色度仕様のカスタム供給が可能" },
      { title: "📐 균일 입도", desc: "균일한 입도 분포와 안정적인 품질", enTitle: "📐 Uniform Grain Size", jaTitle: "📐 均一な粒度", enDesc: "Uniform grain-size distribution with consistent quality", jaDesc: "均一な粒度分布と安定した品質" },
      { title: "🛡️ 우수한 내마모성", desc: "모스경도(Mohs Hardness) 7의 뛰어난 내마모성", enTitle: "🛡️ Excellent Wear Resistance", jaTitle: "🛡️ 優れた耐摩耗性", enDesc: "Mohs hardness of 7 — outstanding wear resistance", jaDesc: "モース硬度(Mohs Hardness)7の優れた耐摩耗性" },
      { title: "🧬 화학적 안정성", desc: "산·알칼리 등 다양한 환경에서 뛰어난 화학적 안정성", enTitle: "🧬 Chemical Stability", jaTitle: "🧬 化学的安定性", enDesc: "Excellent chemical stability across acids, alkalis, and other environments", jaDesc: "酸・アルカリなど多様な環境下での優れた化学的安定性" },
      { title: "🔎 LOT별 품질 관리", desc: "생산 LOT별 품질 관리 및 이력 추적 가능", enTitle: "🔎 Lot-Based Quality Control", jaTitle: "🔎 LOT別品質管理", enDesc: "Lot-based quality control with full traceability", jaDesc: "生産LOTごとの品質管理および履歴追跡が可能" },
      { title: "📄 COA 제공", desc: "LOT별 시험성적서(COA) 제공 가능", enTitle: "📄 COA Available", jaTitle: "📄 COA提供", enDesc: "Certificate of Analysis (COA) available per lot", jaDesc: "LOTごとの試験成績書(COA)提供が可能" },
      { title: "📦 맞춤 생산·OEM", desc: "고객 요구 사양에 따른 맞춤 생산 및 OEM 포장 지원", enTitle: "📦 Custom Production · OEM", jaTitle: "📦 カスタム生産・OEM", enDesc: "Custom production and OEM packaging tailored to customer specifications", jaDesc: "お客様のご要求仕様に応じたカスタム生産およびOEM包装に対応" },
    ],
    specs: [
      { label: "제품명", value: "규사 (Silica Sand)", enValue: "Silica Sand", jaValue: "珪砂 (シリカサンド)", enLabel: "Product Name", jaLabel: "製品名" },
      { label: "원료", value: "천연 규석 (Natural Quartz)", enValue: "Natural Quartz", jaValue: "天然石英 (Natural Quartz)", enLabel: "Raw Material", jaLabel: "原料" },
      { label: "원산지", value: "한국 / 중국 (제품별 상이)", enValue: "Korea / China (varies by product)", jaValue: "韓国 / 中国 (製品により異なる)", enLabel: "Origin", jaLabel: "原産地" },
      { label: "생산공정", value: "선별 · 세척 · 산처리", enValue: "Screening · Washing · Acid Treatment", jaValue: "選別 · 洗浄 · 酸処理", enLabel: "Process", jaLabel: "生産工程" },
      { label: "이산화규소 (SiO₂)", value: "99.5 ~ 99.8%", enLabel: "Silicon Dioxide (SiO₂)", jaLabel: "二酸化ケイ素 (SiO₂)" },
      { label: "철(Fe) 함량", value: "60ppm / 200ppm / 800ppm (선택 가능)", enValue: "60 / 200 / 800 ppm (selectable)", jaValue: "60ppm / 200ppm / 800ppm (選択可能)", enLabel: "Iron (Fe) Content", jaLabel: "鉄(Fe)含有量" },
      { label: "백색도", value: "90 / 93 / 95 이상", enValue: "≥ 90 / 93 / 95", jaValue: "90 / 93 / 95 以上", enLabel: "Whiteness", jaLabel: "白色度" },
      { label: "모스경도 (Mohs Hardness)", value: "7", enLabel: "Mohs Hardness", jaLabel: "モース硬度 (Mohs Hardness)" },
      { label: "입도", value: "20~40 / 40~70 / 70~140 / 100~200 Mesh (맞춤 생산 가능)", enValue: "20–40 / 40–70 / 70–140 / 100–200 Mesh (custom available)", jaValue: "20~40 / 40~70 / 70~140 / 100~200 Mesh (カスタム生産可能)", enLabel: "Grain Size", jaLabel: "粒度" },
      { label: "포장", value: "25kg 지대 / 500kg 벌크백 / 1톤 톤백 / OEM 포장", enValue: "25 kg bag / 500 kg bulk bag / 1-ton bag / OEM packaging", jaValue: "25kg紙袋 / 500kgバルクバッグ / 1トンバッグ / OEM包装", enLabel: "Packaging", jaLabel: "包装" },
    ],
    applications: ["규사"],
    subModelsColumnLabel: { ko: "입도 (Mesh)", en: "Grain Size (Mesh)", ja: "粒度 (Mesh)" },
    subModels: [
      { code: "SLS20", spec: "20 ~ 40 Mesh", name: "규사", enName: "Silica Sand", jaName: "珪砂" },
      { code: "SLS40", spec: "40 ~ 70 Mesh", name: "규사", enName: "Silica Sand", jaName: "珪砂" },
      { code: "SLS70", spec: "70 ~ 140 Mesh", name: "규사", enName: "Silica Sand", jaName: "珪砂" },
      { code: "SLS100", spec: "100 ~ 200 Mesh", name: "규사", enName: "Silica Sand", jaName: "珪砂" },
    ],
  },
  {
    slug: "slp-series",

    name: "SL-P 시리즈 규사분말",
    enName: "SL-P Series Silica Powder", jaName: "SL-Pシリーズ 珪砂粉末 (シリカパウダー)",
    tagline: "고순도 규사를 미세 분쇄한 산업용 분말 — 균일 입도·고백색·고순도 SiO₂",
    enTagline: "Industrial powder from finely ground high-purity silica — Uniform particle size, high whiteness, high-purity SiO₂",
    jaTagline: "高純度シリカを微粉砕した産業用粉末 — 均一粒度・高白色・高純度SiO₂",
    description:
      "규사 분말은 고순도 규사를 정밀하게 미세 분쇄하여 생산한 산업용 분말 소재입니다. 균일한 입도와 우수한 백색도, 높은 이산화규소(SiO₂) 함량을 바탕으로 안정적인 품질을 제공하며, 다양한 산업 분야의 원료로 사용됩니다.",
    enDescription:
      "Silica Powder is an industrial powder material produced by precisely fine-grinding high-purity silica sand. It delivers stable quality based on uniform particle size, excellent whiteness, and high silicon dioxide (SiO₂) content, and is used as a raw material across diverse industrial sectors.",
    jaDescription:
      "珪砂粉末(シリカパウダー)は、高純度シリカサンドを精密に微粉砕して生産した産業用粉末素材です。均一な粒度と優れた白色度、高い二酸化ケイ素(SiO₂)含有量を基盤に安定した品質を提供し、多様な産業分野の原料として使用されます。",
    image: silicaPowderImg,
    category: "sand-powder",
    features: [
      { title: "🏭 고품질 산업용 분말", desc: "고순도 규사를 미세 분쇄한 고품질 산업용 분말", enTitle: "🏭 High-Quality Industrial Powder", jaTitle: "🏭 高品質な産業用粉末", enDesc: "High-quality industrial powder produced by finely grinding high-purity silica sand", jaDesc: "高純度シリカサンドを微粉砕した高品質な産業用粉末" },
      { title: "🧼 선별·세척·산처리", desc: "선별, 세척 및 산처리 공정을 통한 안정적인 품질", enTitle: "🧼 Screening·Washing·Acid Treatment", jaTitle: "🧼 選別・洗浄・酸処理", enDesc: "Stable quality through screening, washing, and acid-treatment processes", jaDesc: "選別・洗浄および酸処理工程による安定した品質" },
      { title: "🧪 고순도 SiO₂", desc: "높은 이산화규소(SiO₂) 함량(99.5~99.8%)", enTitle: "🧪 High-Purity SiO₂", jaTitle: "🧪 高純度SiO₂", enDesc: "High silicon dioxide (SiO₂) content (99.5–99.8%)", jaDesc: "高い二酸化ケイ素(SiO₂)含有量(99.5~99.8%)" },
      { title: "⚙️ 저철·고백색 사양", desc: "저철(Fe) 및 고백색도 사양 공급 가능", enTitle: "⚙️ Low-Iron·High-Whiteness Grades", jaTitle: "⚙️ 低鉄・高白色度仕様", enDesc: "Available in low-iron (Fe) and high-whiteness specifications", jaDesc: "低鉄(Fe)および高白色度仕様の供給が可能" },
      { title: "📐 균일 입도·분산성", desc: "균일한 입도 분포와 우수한 분산성", enTitle: "📐 Uniform Particle Size·Dispersibility", jaTitle: "📐 均一な粒度・分散性", enDesc: "Uniform particle-size distribution and excellent dispersibility", jaDesc: "均一な粒度分布と優れた分散性" },
      { title: "🧬 화학적 안정성", desc: "뛰어난 화학적 안정성", enTitle: "🧬 Chemical Stability", jaTitle: "🧬 化学的安定性", enDesc: "Outstanding chemical stability", jaDesc: "優れた化学的安定性" },
      { title: "🔎 LOT별 품질 관리", desc: "생산 LOT별 품질 관리 및 이력 추적 가능", enTitle: "🔎 Lot-Based Quality Control", jaTitle: "🔎 LOT別品質管理", enDesc: "Lot-based quality control with full traceability", jaDesc: "生産LOTごとの品質管理および履歴追跡が可能" },
      { title: "📄 COA 제공", desc: "LOT별 시험성적서(COA) 제공 가능", enTitle: "📄 COA Available", jaTitle: "📄 COA提供", enDesc: "Certificate of Analysis (COA) available per lot", jaDesc: "LOTごとの試験成績書(COA)提供が可能" },
      { title: "📦 맞춤 생산·OEM", desc: "고객 요구에 따른 맞춤 사양 및 OEM 포장 지원", enTitle: "📦 Custom Production·OEM", jaTitle: "📦 カスタム生産・OEM", enDesc: "Custom specifications and OEM packaging supported per customer requirements", jaDesc: "お客様の要求に応じたカスタム仕様およびOEM包装に対応" },
    ],
    specs: [
      { label: "제품명", value: "규사 분말 (Silica Powder)", enValue: "Silica Powder", jaValue: "珪砂粉末 (シリカパウダー)", enLabel: "Product Name", jaLabel: "製品名" },
      { label: "원료", value: "천연 규석 (Natural Quartz)", enValue: "Natural Quartz", jaValue: "天然石英 (Natural Quartz)", enLabel: "Raw Material", jaLabel: "原料" },
      { label: "원산지", value: "한국 / 중국 (제품별 상이)", enValue: "Korea / China (varies by product)", jaValue: "韓国 / 中国 (製品により異なる)", enLabel: "Origin", jaLabel: "原産地" },
      { label: "생산공정", value: "선별 · 세척 · 산처리 · 미세 분쇄", enValue: "Screening · Washing · Acid Treatment · Fine Grinding", jaValue: "選別 · 洗浄 · 酸処理 · 微粉砕", enLabel: "Process", jaLabel: "生産工程" },
      { label: "이산화규소 (SiO₂)", value: "99.5 ~ 99.8%", enLabel: "Silicon Dioxide (SiO₂)", jaLabel: "二酸化ケイ素 (SiO₂)" },
      { label: "철(Fe) 함량", value: "200ppm / 800ppm (선택 가능)", enValue: "200 / 800 ppm (selectable)", jaValue: "200ppm / 800ppm (選択可能)", enLabel: "Iron (Fe) Content", jaLabel: "鉄(Fe)含有量" },
      { label: "백색도", value: "90 / 93 / 95 이상", enValue: "≥ 90 / 93 / 95", jaValue: "90 / 93 / 95 以上", enLabel: "Whiteness", jaLabel: "白色度" },
      { label: "입도", value: "약 200 Mesh / 325 ~ 1000 Mesh (맞춤 생산 가능)", enValue: "Approx. 200 Mesh / 325–1000 Mesh (custom available)", jaValue: "約200 Mesh / 325~1000 Mesh (カスタム生産可能)", enLabel: "Grain Size", jaLabel: "粒度" },
      { label: "포장", value: "25kg 지대 / 500kg 벌크백 / 1톤 톤백 / OEM 포장", enValue: "25 kg bag / 500 kg bulk bag / 1-ton bag / OEM packaging", jaValue: "25kg紙袋 / 500kgバルクバッグ / 1トンバッグ / OEM包装", enLabel: "Packaging", jaLabel: "包装" },
    ],
    applications: ["규사분말"],
    subModelsColumnLabel: { ko: "입도 (Mesh)", en: "Grain Size (Mesh)", ja: "粒度 (Mesh)" },
    subModels: [
      { code: "SLP200", spec: "약 200 Mesh", enSpec: "Approx. 200 Mesh", jaSpec: "約200 Mesh", name: "규사 분말", enName: "Silica Powder", jaName: "珪砂粉末" },
      { code: "SLP325", spec: "325 ~ 1000 Mesh", name: "고미분 규사 분말", enName: "Ultra-Fine Silica Powder", jaName: "高微細珪砂粉末" },
    ],
  },

  {
    slug: "high-purity-quartz",
    name: "천연 고순도규석",
    enName: "Natural High-Purity Quartz", jaName: "天然高純度石英",
    tagline: "SiO₂ 99.77%, Fe₂O₃ 5ppm, 백색도 L 97.92 — 천연 고순도 원석 공급",
    enTagline: "SiO₂ 99.77%, Fe₂O₃ 5 ppm, Whiteness L 97.92 — Natural High-Purity Raw Stone Supply", jaTagline: "SiO₂ 99.77%、Fe₂O₃ 5ppm、白色度 L 97.92 — 天然高純度原石供給",
    description:
      "프리미엄 천연 고순도 쿼츠는 엄격한 광맥 선별과 정제 공정을 거쳐 SiO₂ 99.77%, Fe₂O₃ 5ppm 수준의 초고순도와 L 97.92의 최상급 백색도를 달성한 천연 원석으로 공급됩니다. 고급 유리, EGS·인조대리석, 전자재료, 정밀 주조, 반도체 크루시블 등 부가가치가 높은 산업의 기초 원료로 사용됩니다.",
    enDescription:
      "Premium Natural High-Purity Quartz is supplied as a raw stone achieving ultra-high purity of SiO₂ 99.77% and Fe₂O₃ 5 ppm, along with top-grade whiteness of L 97.92, through rigorous vein selection and refining processes. It serves as a foundational raw material for high-value-added industries such as premium glass, EGS/engineered stone, electronic materials, precision casting, and semiconductor crucibles.", jaDescription: "プレミアム天然高純度石英は、厳格な鉱脈選別と精製工程を経て、SiO₂ 99.77%、Fe₂O₃ 5ppmレベルの超高純度とL 97.92の最上級の白色度を達成した天然原石として供給されます。高級ガラス、EGS・人造大理石、電子材料、精密鋳造、半導体ルツボなど付加価値の高い産業の基礎原料として使用されます。",
    image: highPurityQuartz,
    detailImage: hpqDetail,
    features: [
      { title: "🧱 압도적 순도", desc: "SiO₂ 99.773% — EGS·특수 유리·전자재료 기초 소재로 적합", enTitle: "🧱 Overwhelming Purity", jaTitle: "🧱 圧倒的な純度", enDesc: "SiO₂ 99.773% — ideal base material for EGS, specialty glass, and electronic materials", jaDesc: "SiO₂ 99.773% — EGS・特殊ガラス・電子材料の基礎素材に最適" },
      { title: "🧼 초저 철분", desc: "Fe₂O₃ 5ppm — 황변 없이 투명도 및 백색도 핵심 유지", enTitle: "🧼 Ultra-Low Iron Content", jaTitle: "🧼 超低鉄分", enDesc: "Fe₂O₃ 5 ppm — maintains transparency and whiteness without yellowing", jaDesc: "Fe₂O₃ 5ppm — 黄変なしに透明度および白色度を中核的に維持" },
      { title: "⚡ 우수한 절연 성능", desc: "EC 2.12 µs/cm — 전자재료 충진재(Filler) 신뢰성 확보", enTitle: "⚡ Excellent Insulation Performance", jaTitle: "⚡ 優れた絶縁性能", enDesc: "EC 2.12 µs/cm — ensures reliability as an electronic-material filler", jaDesc: "EC 2.12 µs/cm — 電子材料用充填材(Filler)の信頼性確保" },
      { title: "✨ 최상급 백색도", desc: "L 97.92 — 고급 인조대리석·건축 내외장재 최적", enTitle: "✨ Top-Grade Whiteness", jaTitle: "✨ 最上級の白色度", enDesc: "L 97.92 — optimal for premium engineered stone and architectural interior/exterior materials", jaDesc: "L 97.92 — 高級人造大理石・建築内外装材に最適" },
      { title: "🪨 천연 원석 공급", desc: "정제된 고순도 천연 원석 형태로 안정 공급", enTitle: "🪨 Natural Raw Stone Supply", jaTitle: "🪨 天然原石供給", enDesc: "Supplied as refined high-purity natural raw stone", jaDesc: "精製された高純度天然原石として安定供給" },
      { title: "🧪 중성 안정", desc: "pH 6.73 — 다양한 화학 공정에 적용 가능", enTitle: "🧪 Neutral Stability", jaTitle: "🧪 中性安定", enDesc: "pH 6.73 — applicable to diverse chemical processes", jaDesc: "pH 6.73 — 多様な化学工程に適用可能" },
    ],
    specs: [
      { label: "SiO₂ (이산화규소)", value: "99.773%", note: "초고순도", enLabel: "SiO₂ (Silicon Dioxide)", jaLabel: "SiO₂ (二酸化ケイ素)", enNote: "Ultra-high purity", jaNote: "超高純度" },
      { label: "Fe₂O₃ (산화철)", value: "5 ppm", note: "극저 철분 (핵심)", enLabel: "Fe₂O₃ (Iron Oxide)", jaLabel: "Fe₂O₃ (酸化鉄)", enNote: "Ultra-low iron (key)", jaNote: "極低鉄分 (核心)" },
      { label: "TiO₂ (산화타이타늄)", value: "9 ppm", note: "미량", enLabel: "TiO₂ (Titanium Oxide)", jaLabel: "TiO₂ (酸化チタン)", enNote: "Trace", jaNote: "微量" },
      { label: "Al₂O₃ (산화알루미늄)", value: "1053 ppm", note: "일반 수준", enLabel: "Al₂O₃ (Aluminum Oxide)", jaLabel: "Al₂O₃ (酸化アルミニウム)", enNote: "General level", jaNote: "一般レベル" },
      { label: "백색도 (Whiteness L)", value: "97.92", note: "최상급 백색도", enLabel: "Whiteness (L)", jaLabel: "白色度 (Whiteness L)", enNote: "Top-grade whiteness", jaNote: "最上級の白色度" },
      { label: "전기전도도 (E.C)", value: "2.12 µs/cm", note: "절연성 우수", enLabel: "Electrical Conductivity (E.C)", jaLabel: "電気伝導度 (E.C)", enNote: "Excellent insulation", jaNote: "絶縁性に優れる" },
      { label: "pH (수소이온농도)", value: "6.73", note: "중성 안정", enLabel: "pH", jaLabel: "pH (水素イオン濃度)", enNote: "Neutral stability", jaNote: "中性安定" },
    ],
    applications: ["고급 유리 원석", "EGS / 인조대리석", "전자재료", "정밀 주조 원석", "반도체 크루시블"],
  },
];

// Add category to existing quartz products
productCatalog.forEach((p) => {
  if (!p.category) p.category = "quartz";
});

const SG_APPS = ["실리카겔"];
const SG_FEATURES = [
  { title: "🔬 고순도 SiO₂", desc: "고순도 이산화규소 기반 — 안정적인 화학·열적 성능", enTitle: "🔬 High-Purity SiO₂", jaTitle: "🔬 高純度SiO₂", enDesc: "Based on high-purity silicon dioxide — stable chemical and thermal performance", jaDesc: "高純度二酸化ケイ素ベース — 安定した化学的・熱的性能" },
  { title: "🧪 맞춤형 생산", desc: "포장 및 규격은 고객 요구에 따라 맞춤 제작", enTitle: "🧪 Custom Production", jaTitle: "🧪 カスタマイズ生産", enDesc: "Packaging and specifications tailored to customer requirements", jaDesc: "包装および規格はお客様の要求に応じてカスタマイズ製作" },
];

// —— 실리카겔 라인업 (신규 SL-CHR/IND/DES/ALS + 기존 6종) ——
type SGSpec = { label: string; value: string; enLabel?: string; enValue?: string; jaLabel?: string; jaValue?: string };
const mkSG = (
  slug: string,
  ko: string, en: string, ja: string,
  koTag: string, enTag: string, jaTag: string,
  koDesc: string, enDesc: string, jaDesc: string,
  image: string,
  specs: SGSpec[],
  useTags: string[],
): ProductDetail => ({
  slug,
  name: ko, enName: en, jaName: ja,
  tagline: koTag, enTagline: enTag, jaTagline: jaTag,
  description: koDesc, enDescription: enDesc, jaDescription: jaDesc,
  image,
  category: "silica-gel",
  features: SG_FEATURES,
  specs,
  applications: SG_APPS,
  useTags,
});

const silicaGelProducts: ProductDetail[] = [
  // ===== 기존 6종 (A/B형 삭제, useTags 부여) =====
  mkSG("silica-gel-microsilica", "미분 실리카 (Microsilica)", "Micronized Silica Powder", "微粉シリカ (Microsilica)",
    "고순도 이산화규소 기반 초미세 분말 — 고활성·다공성 무기 정밀 소재",
    "Ultra-Fine Powder Based on High-Purity Silicon Dioxide", "高純度二酸化ケイ素ベースの超微細粉末",
    "미분 실리카는 고순도 이산화규소(SiO₂)를 핵심 성분으로 하여 특수 공정을 통해 초미세 분말 형태로 가공된 고활성·다공성 무기 정밀 소재입니다. 3–10µm 범위의 균일한 입도로 고분자 충진·보강재, 기능성 코팅, 정밀 무기 소재의 원료로 폭넓게 사용됩니다.",
    "Micronized Silica Powder is a highly active, porous inorganic precision material processed into ultra-fine powder form (3–10 µm) through a special process, used as filler/reinforcement for polymers, functional coatings, and precision inorganic materials.",
    "微粉シリカは高純度二酸化ケイ素(SiO₂)を核心成分とし、特殊な工程で3–10µmの超微細粉末に加工された高活性・多孔質の無機精密素材です。",
    sgMicrosilica,
    [
      { label: "입자 크기", value: "3 – 10 µm", enLabel: "Particle Size", jaLabel: "粒子径" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", enValue: "Customizable", jaLabel: "包装 / 規格", jaValue: "カスタマイズ可能" },
    ], ["촉매", "산업·공정"]),

  mkSG("silica-gel-anti-blocking", "플라스틱 안티블로킹제", "Anti-blocking Agent", "プラスチック用アンチブロッキング剤",
    "필름·시트 안티블로킹용 고순도 실리카",
    "High-Purity Silica for Anti-Blocking in Films and Sheets", "フィルム・シートのアンチブロッキング用高純度シリカ",
    "고순도 실리카 기반의 안티블로킹제로, PE/PP/PET 필름·시트의 접착(블로킹)을 효과적으로 방지하며 우수한 광학적 투명성을 유지합니다.",
    "High-purity silica anti-blocking agent that effectively prevents adhesion in PE/PP/PET films and sheets while maintaining excellent optical transparency.",
    "高純度シリカベースのアンチブロッキング剤で、PE/PP/PETフィルム・シートの接着(ブロッキング)を効果的に防止し、優れた光学透明性を維持します。",
    sgAntiblocking,
    [
      { label: "입자 크기", value: "2 – 10 µm", enLabel: "Particle Size", jaLabel: "粒子径" },
      { label: "비표면적", value: "20 – 380 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "흡유량", value: "150 – 300 ml/100g", enLabel: "Oil Absorption", jaLabel: "吸油量" },
      { label: "SiO₂ 순도", value: "99 %", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
    ], ["안티블로킹"]),

  mkSG("silica-gel-matting", "소광제 (Matting Agent)", "Matting Agent", "艶消し剤 (Matting Agent)",
    "도료·코팅용 무광 효과 실리카",
    "Silica Matting Agent for Paints and Coatings", "塗料・コーティング用マット効果シリカ",
    "도료 및 코팅 시스템에 사용되는 소광제(Matting Agent)로, 균일한 무광 효과와 우수한 분산성을 제공합니다. UV 도료, 우드 코팅, 자동차 보수도료, 인쇄 잉크 등에 광범위하게 사용됩니다.",
    "A matting agent used in paint and coating systems, providing uniform matte effects and excellent dispersibility. Widely used in UV coatings, wood coatings, automotive refinish, and printing inks.",
    "塗料およびコーティングシステムに使用される艶消し剤で、均一なマット効果と優れた分散性を提供します。",
    sgMatting,
    [
      { label: "입자 크기 D50", value: "3.5 – 10 µm", enLabel: "D50", jaLabel: "粒子径 D50" },
      { label: "흡유량", value: "100 – 330 ml/100g", enLabel: "Oil Absorption", jaLabel: "吸油量" },
      { label: "pH", value: "3.5 – 8" },
      { label: "기공 부피", value: "0.4 – 2.2 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
      { label: "표면 처리", value: "왁스 처리 / 무처리", enLabel: "Surface", enValue: "Wax / Untreated", jaLabel: "表面処理", jaValue: "ワックス / 未処理" },
    ], ["소광"]),

  mkSG("silica-gel-large-pore", "대공극 실리카겔", "Large Pore Silica Gel", "大孔径シリカゲル",
    "대공극·고비표면적의 흡착 전용 실리카겔",
    "Adsorption-Grade Silica Gel with Large Pores", "大孔径・高比表面積の吸着専用シリカゲル",
    "대공극 실리카겔은 큰 기공 직경과 높은 기공 부피를 가져 분자 흡착·촉매 담체용으로 최적화된 실리카겔입니다.",
    "Large Pore Silica Gel features large pore diameters and high pore volume, optimized for molecular adsorption and catalyst support applications.",
    "大孔径シリカゲルは、大きな細孔径と高い細孔容積を持ち、分子吸着や触媒担体用に最適化されたシリカゲルです。",
    sgLargePore,
    [
      { label: "기공 직경", value: "16 – 25 nm", enLabel: "Pore Diameter", jaLabel: "細孔径" },
      { label: "비표면적", value: "200 – 350 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "기공 부피", value: "1.2 – 2.2 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
    ], ["산업·공정", "촉매"]),

  mkSG("silica-gel-fng", "내수 실리카겔 (FNG)", "FNG Water-Resistant Silica Gel", "耐水シリカゲル (FNG)",
    "가혹 환경 전용 고성능 내수 실리카겔",
    "High-Performance Water-Resistant Silica Gel", "過酷環境専用の高性能耐水シリカゲル",
    "내수 실리카겔 FNG는 가혹한 환경에서도 안정적으로 동작하도록 설계된 고성능 실리카 소재로, 우수한 내수성·내후성·화학적 안정성을 갖추고 있습니다.",
    "FNG Water-Resistant Silica Gel is a high-performance material designed for harsh environments, featuring excellent water/weather resistance and chemical stability.",
    "耐水シリカゲルFNGは過酷な環境でも安定機能する高性能シリカ素材で、優れた耐水性・耐候性・化学的安定性を備えています。",
    sgFng,
    [
      { label: "특성", value: "내수성 · 내후성 · 화학적 안정성", enLabel: "Characteristics", enValue: "Water / Weather / Chemical resistance", jaLabel: "特性", jaValue: "耐水・耐候・化学的安定性" },
    ], ["건조·흡습", "산업·공정"]),

  mkSG("silica-gel-coarse", "조공극 실리카겔", "Coarse Pore Silica Gel", "粗孔シリカゲル",
    "중간 기공 크기의 범용 흡착 실리카겔",
    "General-Purpose Adsorption Silica Gel", "中孔径の汎用吸着シリカゲル",
    "조공극 실리카겔은 균형 잡힌 기공 구조로 다양한 산업용 흡착·건조·정제 공정에 사용됩니다.",
    "Coarse Pore Silica Gel features a balanced pore structure for various industrial adsorption, drying and purification processes.",
    "粗孔シリカゲルは、バランスの取れた細孔構造で多様な産業用の吸着・乾燥・精製工程に使用されます。",
    sgCoarse,
    [
      { label: "기공 직경", value: "8 – 12.5 nm", enLabel: "Pore Diameter", jaLabel: "細孔径" },
      { label: "비표면적", value: "300 – 400 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "기공 부피", value: "0.8 – 1.0 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
    ], ["산업·공정", "건조·흡습"]),

  // ===== 신규 SL-CHR : 크로마토그래피용 =====
  mkSG("silica-gel-sl-chr-01", "SL-CHR-01 컬럼크로마토그래피용 실리카겔 (A/B/C형)",
    "SL-CHR-01 · Column Chromatography Silica Gel (Type A/B/C)",
    "SL-CHR-01 カラムクロマトグラフィー用シリカゲル (A/B/C型)",
    "세공(20–30Å)~조공(90–100Å)까지 3형 · 중약재·석유·유기물 분리정제",
    "3 pore ranges 20–100Å for herbal, petroleum & organic separation",
    "細孔(20–30Å)~粗孔(90–100Å)3型 · 生薬・石油・有機物の分離精製",
    "SL-CHR-01은 백색의 균일한 과립형 컬럼크로마토그래피 전용 실리카겔로, 세공형(A, 20–30Å)·중공형(B, 50–80Å)·조공형(C, 90–100Å) 3종 공극 구조를 지원합니다. 성분별 흡착 보유시간 차이를 이용해 중약재 유효성분 분리정제, 석유제품 정제, 유기가스·액체의 선택적 흡착분리, 촉매담체 등에 사용됩니다. 입도 60–400목 범위에서 맞춤 공급 가능합니다.",
    "SL-CHR-01 is a white uniform granular silica gel for column chromatography, supporting three pore structures — fine (A, 20–30Å), medium (B, 50–80Å) and coarse (C, 90–100Å). It is used for purifying active ingredients in traditional Chinese medicine, refining petroleum products, selective adsorption of organic gases/liquids and catalyst supports. Available in 60–400 mesh custom sizes.",
    "SL-CHR-01は白色均一顆粒状のカラムクロマトグラフィー専用シリカゲルで、細孔(A, 20–30Å)・中孔(B, 50–80Å)・粗孔(C, 90–100Å)の3種細孔構造をサポートします。生薬有効成分の分離精製、石油製品精製、有機ガス・液体の選択吸着分離、触媒担体に使用されます。",
    slChr01Img,
    [
      { label: "공경 (A/B/C)", value: "20–30 / 50–80 / 90–100 Å", enLabel: "Pore (A/B/C)", jaLabel: "細孔径" },
      { label: "공용적 (A/B/C)", value: "0.35–0.45 / 0.5–0.7 / 0.85–1.0 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
      { label: "비표면적 (A/B/C)", value: "≥600 / 450–600 / 320–400 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "입도", value: "60–400 목 (맞춤)", enLabel: "Mesh", enValue: "60–400 (custom)", jaLabel: "粒度", jaValue: "60–400メッシュ" },
      { label: "포장", value: "500g/1kg/10–25kg", enLabel: "Packing", jaLabel: "包装" },
    ], ["크로마토그래피"]),

  mkSG("silica-gel-sl-chr-02", "SL-CHR-02 박막크로마토그래피용 실리카겔 (분말)",
    "SL-CHR-02 · Thin Layer Chromatography Silica Gel (Powder)",
    "SL-CHR-02 薄層クロマトグラフィー用シリカゲル (粉末)",
    "H / HF254 / G / GF254 4형 · 신속 고감도 분석시약",
    "H / HF254 / G / GF254 4 types for rapid high-sensitivity analysis",
    "H / HF254 / G / GF254 4型 · 迅速・高感度分析試薬",
    "SL-CHR-02는 백색 분말로 물·유기용매에 불용인 TLC 전용 실리카겔입니다. H·HF254·G·GF254 4형 공급이며, 의약·농약·염료·고무 컬럼분석용 신속·고감도 분석시약, 석유제품 정제, 액체 선택적 흡착분리, 촉매담체 제조 등에 사용됩니다. 일반 입도 10–40㎛, 고효율 5–10㎛/3–10㎛로 맞춤 가능합니다.",
    "SL-CHR-02 is a white TLC silica gel powder insoluble in water and organic solvents. Supplied in H, HF254, G and GF254 types for pharmaceutical, agrochemical, dye and rubber column analysis, petroleum refining, selective adsorption and catalyst supports. General 10–40 µm, high-efficiency 5–10 µm / 3–10 µm.",
    "SL-CHR-02は白色粉末で水・有機溶媒に不溶のTLC専用シリカゲルです。H・HF254・G・GF254の4型を供給し、医薬・農薬・染料・ゴムのカラム分析用試薬、石油製品精製、選択吸着分離、触媒担体などに使用されます。",
    slChr02Img,
    [
      { label: "공경", value: "90–100 Å", enLabel: "Pore", jaLabel: "細孔径" },
      { label: "비표면적", value: "320–400 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "소석고 함량 (G / GF254)", value: "12–14 %", enLabel: "Gypsum (G / GF254)", jaLabel: "石膏含有量" },
      { label: "pH (10% 현탁)", value: "6.0–7.0" },
      { label: "입도", value: "일반 10–40㎛ / 고효율 3–10㎛", enLabel: "Particle Size", jaLabel: "粒度" },
    ], ["크로마토그래피"]),

  mkSG("silica-gel-sl-chr-03", "SL-CHR-03 TLC 박막크로마토그래피 플레이트",
    "SL-CHR-03 · TLC Silica Gel Plate",
    "SL-CHR-03 TLCシリカゲルプレート",
    "판 두께 0.20±0.03mm · 순백·평탄·치밀 · 정성/정량 분석",
    "0.20±0.03 mm thickness — pure white, flat, dense for QC analysis",
    "板厚0.20±0.03 mm · 純白・平坦・緻密 · 定性/定量分析",
    "SL-CHR-03은 고순도 TLC 실리카겔 분말에 소량의 결합제를 배합해 판상으로 제작한 박막크로마토그래피 플레이트입니다. 표면이 순백색이며 평탄·균일·치밀하고, 의약품·농약·중약재·유기화학·식품의 정성/정량 분석에 광범위하게 사용됩니다. 일반 TLC 실리카겔 대비 분리효과가 우수합니다.",
    "SL-CHR-03 is a TLC plate made by blending high-purity TLC silica gel powder with a small amount of binder. The pure white, flat, uniform and dense surface delivers superior separation vs bulk TLC gel and is widely used for QC analysis of pharmaceuticals, agrochemicals, herbal medicines, organic chemistry and food.",
    "SL-CHR-03は高純度TLCシリカゲル粉末に少量のバインダーを配合し板状に加工した薄層クロマトグラフィープレートです。純白・平坦・均一・緻密な表面で分離効果が優れ、医薬品・農薬・生薬・有機化学・食品の定性/定量分析に幅広く使用されます。",
    slChr03Img,
    [
      { label: "판 두께", value: "0.20 ± 0.03 mm", enLabel: "Thickness", jaLabel: "板厚" },
      { label: "형", value: "H / HF254 / G / GF254", enLabel: "Type", jaLabel: "型" },
      { label: "규격", value: "75×25 / 100×100 / 200×200 mm", enLabel: "Size", jaLabel: "サイズ" },
      { label: "재활성화", value: "60–90℃ 1–2시간", enLabel: "Regeneration", enValue: "60–90℃ · 1–2h", jaLabel: "再活性化", jaValue: "60–90℃ · 1–2時間" },
    ], ["크로마토그래피"]),

  // ===== SL-IND : 산업·공정용 =====
  mkSG("silica-gel-sl-ind-01", "SL-IND-01 촉매용 미분 실리카겔 (C형)",
    "SL-IND-01 · Micro-powder Silica Gel for Catalyst (Type C)",
    "SL-IND-01 触媒用微粉シリカゲル (C型)",
    "SiO₂ ≥ 98 % · HZSM-5 분자체 합성 전용",
    "SiO₂ ≥ 98 % — for HZSM-5 molecular sieve synthesis",
    "SiO₂ ≥ 98 % · HZSM-5分子篩合成専用",
    "SL-IND-01은 고품질 실리카겔 원료로 가공된 촉매 합성 전용 미분 실리카겔입니다. 순도가 높고 불순물(특히 중금속) 함량이 적으며 입도가 균일해 HZSM-5 분자체 합성에 최적입니다.",
    "SL-IND-01 is a micro-powder silica gel processed from high-quality raw material for catalyst synthesis. High purity, ultra-low heavy-metal impurities and uniform particle size make it ideal for HZSM-5 molecular sieve synthesis.",
    "SL-IND-01は高品質シリカゲル原料から加工された触媒合成専用の微粉シリカゲルです。高純度・低不純物(特に重金属)・均一粒度でHZSM-5分子篩合成に最適です。",
    slInd01Img,
    [
      { label: "공경", value: "90–100 Å", enLabel: "Pore", jaLabel: "細孔径" },
      { label: "비표면적", value: "320–400 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "퇴적밀도", value: "350–500 g/L", enLabel: "Bulk Density", jaLabel: "かさ密度" },
      { label: "입도합격률", value: "≥ 95 %", enLabel: "Size Pass", jaLabel: "粒度合格率" },
      { label: "규격", value: "≤35 목 / ≤100 목", enLabel: "Mesh", jaLabel: "メッシュ" },
    ], ["촉매", "산업·공정"]),

  mkSG("silica-gel-sl-ind-02", "SL-IND-02 유로키나제 흡착용 실리카겔 (C형)",
    "SL-IND-02 · Urokinase Adsorbent Silica Gel (Type C)",
    "SL-IND-02 ウロキナーゼ吸着用シリカゲル (C型)",
    "흡착량(RH100) ≥ 90 % · 유로키나제 정제 전용",
    "≥90% adsorption (RH100) — dedicated to urokinase purification",
    "吸着量(RH100) ≥ 90 % · ウロキナーゼ精製専用",
    "SL-IND-02는 유로키나제 분자구조에 최적화된 비표면적·공극구조 및 활성 컬럼크로마토그래피 특성을 지닌 백색 균일 과립 실리카겔입니다. 유로키나제 분리정제 목적 달성과 동시에 제품 품질·수율을 향상시킵니다.",
    "SL-IND-02 is a white uniform granular silica gel with SSA, pore structure and active column-chromatography characteristics optimized for urokinase. Delivers separation/purification while improving product quality and yield.",
    "SL-IND-02はウロキナーゼの分子構造に最適化された比表面積・細孔構造とアクティブカラムクロマト特性を持つ白色均一顆粒シリカゲルです。分離精製と同時に品質・収率を向上させます。",
    slInd02Img,
    [
      { label: "공경", value: "90–100 Å", enLabel: "Pore", jaLabel: "細孔径" },
      { label: "비표면적", value: "300–500 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "pH", value: "6–8" },
      { label: "가열감량", value: "≤ 5 %", enLabel: "Loss on Heating", jaLabel: "加熱減量" },
      { label: "규격", value: "40–100 / 60–100 / 40–80 / 60–120 목", enLabel: "Mesh", jaLabel: "メッシュ" },
    ], ["산업·공정", "식품·의약"]),

  mkSG("silica-gel-sl-ind-03", "SL-IND-03 맥주 여과용 실리카겔 (초광공형)",
    "SL-IND-03 · Silica Gel for Beer (Super Wide Pore)",
    "SL-IND-03 ビール濾過用シリカゲル (超広孔型)",
    "저장기간 180–240일 연장 · 냉장 혼탁 방지 · 맛·거품 영향 無",
    "Extends shelf life 180–240 days · prevents chill haze · no impact on foam/taste",
    "保存期間180–240日延長 · 冷蔵混濁防止 · 味/泡に影響なし",
    "SL-IND-03은 공경 8–16 nm의 비결정질 미세다공성 고체분말로, 산·알칼리·염류와 반응하지 않고 무독·무취·불연성입니다. 넓은 비표면적과 미세공극구조로 맥주 혼탁 유발 단백질을 수 분 내 흡착 제거하여 저장기간을 180–240일 연장하고 냉장 혼탁을 방지하며, 맥주 거품·맛에는 영향을 주지 않습니다.",
    "SL-IND-03 is an amorphous micro-porous solid powder (8–16 nm pores), non-reactive with acids/alkalis/salts, non-toxic, odorless and non-flammable. Its high SSA and micro-pore structure adsorb haze-forming proteins in minutes, extending beer shelf life 180–240 days and preventing chill haze without affecting foam or taste.",
    "SL-IND-03は細孔径8–16 nmの非晶質微多孔性固体粉末で、酸・アルカリ・塩と反応せず無毒・無臭・不燃です。ビール混濁の原因タンパクを短時間で吸着除去し保存期間を180–240日延長、冷蔵混濁を防止しつつ泡・味に影響を与えません。",
    slInd03Img,
    [
      { label: "공경", value: "140–180 Å", enLabel: "Pore", jaLabel: "細孔径" },
      { label: "비표면적", value: "250–320 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "입도 (d50)", value: "7–15 µm", enLabel: "D50", jaLabel: "D50" },
      { label: "SiO₂", value: "≥ 98 %" },
      { label: "중금속 (Pb)", value: "≤ 0.003 %", enLabel: "Pb", jaLabel: "重金属 (Pb)" },
    ], ["산업·공정", "식품·의약"]),

  mkSG("silica-gel-sl-ind-04", "SL-IND-04 대공극 실리카겔 (C형, 구형/괴상)",
    "SL-IND-04 · Wide Pore Silica Gel (Type C)",
    "SL-IND-04 大孔径シリカゲル (C型, 球/塊状)",
    "공기가스 탈수정제 · 절연유 정제 · 촉매담체",
    "Industrial gas dehydration · insulating oil refining · catalyst support",
    "工業ガス脱水精製 · 絶縁油精製 · 触媒担体",
    "SL-IND-04는 백색 괴상 또는 구형의 대공극 실리카겔로, 방습포장, 공업가스 탈수정제, 절연유 내 유기산·고분자물질 제거, 공업 발효공정의 이분자단백 흡착, 촉매 및 촉매담체 등에 사용됩니다.",
    "SL-IND-04 is a wide-pore silica gel in white lump or bead form, used for moisture-proof packaging, industrial gas dehydration, removal of organic acids/polymers in insulating oil, protein adsorption in fermentation, and as a catalyst/carrier.",
    "SL-IND-04は白色塊状または球状の大孔径シリカゲルで、防湿包装、工業ガスの脱水精製、絶縁油中の有機酸/高分子物質除去、工業発酵工程での二分子タンパク吸着、触媒・担体などに使用されます。",
    slInd04Img,
    [
      { label: "공경", value: "80–100 Å", enLabel: "Pore", jaLabel: "細孔径" },
      { label: "비표면적", value: "300–400 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "공용적", value: "0.8–1.0 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
      { label: "규격 (구형/괴상)", value: "2–5.6 / 4–8mm · 0.5–2 / 2–8mm", enLabel: "Size", jaLabel: "サイズ" },
      { label: "흡착량", value: "≥ 78 %", enLabel: "Adsorption", jaLabel: "吸着量" },
    ], ["산업·공정", "촉매"]),

  mkSG("silica-gel-sl-ind-05", "SL-IND-05 오일 탈색용 실리카겔 샌드 (C형)",
    "SL-IND-05 · Silica Gel Sand for Oil Bleaching (Type C)",
    "SL-IND-05 オイル脱色用シリカゲルサンド (C型)",
    "여과 방식 탈색 · 폐엔진오일 재생 · 바이오디젤 정제",
    "Filtration bleaching · waste engine oil regeneration · biodiesel refining",
    "濾過方式脱色 · 廃エンジンオイル再生 · バイオディーゼル精製",
    "SL-IND-05는 백색 과립 형태의 실리카겔로, 전통적인 산·알칼리·백토 탈색공정을 여과 방식으로 대체하여 오일 중 불순물·산화물을 직접 제거함으로써 흑변 오일을 투명한 액체로 전환합니다. 흑취 경유 탈취·탈색, 폐엔진오일 재생, 유압유·바이오디젤·동식물유 탈색·정제·탈취에 사용됩니다.",
    "SL-IND-05 is a white granular silica gel replacing traditional acid/alkali/clay bleaching with filtration to remove impurities and oxidation products, restoring blackened oils to a clear state. Used for diesel deodorization, waste engine oil regeneration, hydraulic oil, biodiesel and animal/vegetable oil refining.",
    "SL-IND-05は白色顆粒状のシリカゲルで、従来の酸・アルカリ・白土脱色工程を濾過方式に置き換え、オイル中の不純物・酸化物を除去して黒変オイルを透明液体に転換します。ディーゼル脱臭、廃エンジンオイル再生、油圧油・バイオディーゼル・動植物油の精製に使用されます。",
    slInd05Img,
    [
      { label: "공경", value: "85–110 Å", enLabel: "Pore", jaLabel: "細孔径" },
      { label: "비표면적", value: "300–500 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "pH", value: "6–8" },
      { label: "퇴적밀도", value: "≥ 380 g/L", enLabel: "Bulk Density", jaLabel: "かさ密度" },
      { label: "입도", value: "20–120 목", enLabel: "Mesh", jaLabel: "メッシュ" },
    ], ["산업·공정"]),

  mkSG("silica-gel-sl-ind-06", "SL-IND-06 대공극 마이크로구형 실리카겔 (C형)",
    "SL-IND-06 · Macro-pored Micro-spherical Silica Gel (Type C)",
    "SL-IND-06 大孔径マイクロ球状シリカゲル (C型)",
    "고열안정성·고기계강도의 촉매·촉매담체",
    "High thermal stability & mechanical strength catalyst / support",
    "高熱安定性・高機械強度の触媒/担体",
    "SL-IND-06은 백색 투명/반투명의 마이크로 구형 실리카겔로, 균일한 미세공극구조와 안정적인 물리·화학적 특성, 우수한 열안정성과 높은 기계적 강도를 지닙니다. 멜라민·아닐린·아세트산비닐·부타디엔고무·아크릴로니트릴 등 중요 공업생산 촉매·촉매담체, 방향족 정제, 의약품 정제, 유기가스·액체 선택적 흡착분리, 수중 유해 이온 제거에 활용됩니다.",
    "SL-IND-06 is a translucent micro-spherical silica gel with uniform micro-pores, stable properties, excellent thermal stability and high mechanical strength. Used as catalyst/support for melamine, aniline, vinyl acetate, butadiene rubber, acrylonitrile production; aromatics/pharmaceutical purification; selective adsorption; ion exchange in water treatment.",
    "SL-IND-06は白色透明/半透明のマイクロ球状シリカゲルで、均一微細細孔・優れた熱安定性・高い機械強度を有します。メラミン・アニリン・酢酸ビニル・ブタジエンゴム・アクリロニトリル生産の触媒/担体、芳香族精製、医薬品精製、選択吸着分離、水中イオン除去などに活用されます。",
    slInd06Img,
    [
      { label: "공경", value: "80–110 Å", enLabel: "Pore", jaLabel: "細孔径" },
      { label: "비표면적", value: "300–550 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "공용적", value: "0.8–1.3 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
      { label: "퇴적밀도", value: "300 g/L", enLabel: "Bulk Density", jaLabel: "かさ密度" },
      { label: "입도", value: "20–40 / 40–120 목", enLabel: "Mesh", jaLabel: "メッシュ" },
    ], ["산업·공정", "촉매"]),

  mkSG("silica-gel-sl-ind-07", "SL-IND-07 폐엔진오일 정제용 촉매",
    "SL-IND-07 · Catalyst for Waste Engine Oil Refining",
    "SL-IND-07 廃エンジンオイル精製用触媒",
    "반응온도 290–310℃ · 압쇄강도 ≥ 125–130 N/cm",
    "290–310℃ reaction · crush strength ≥ 125–130 N/cm",
    "反応温度290–310℃ · 圧潰強度 ≥ 125–130 N/cm",
    "SL-IND-07은 폐엔진오일(폐윤활유) 정제 전용 신형 촉매입니다. 반응온도 290–310℃, 공간속도 0.2–0.25 h⁻¹, 상압 조건에서 사용하며, 정기적으로 촉매 건조 공정(0–0.1 MPa, 300–360℃, 6–8시간)이 필요합니다. 산·알칼리와의 접촉을 피해야 하며, 사용 전 30목 체망으로 촉매 분진을 제거해야 합니다.",
    "SL-IND-07 is a new catalyst dedicated to refining waste engine oil. Operates at 290–310℃, LHSV 0.2–0.25 h⁻¹, atmospheric pressure. Periodic drying (0–0.1 MPa, 300–360℃, 6–8h) required. Avoid acid/alkali contact and screen out dust with 30-mesh sieve before use.",
    "SL-IND-07は廃エンジンオイル(廃潤滑油)精製専用の新型触媒です。反応温度290–310℃、LHSV 0.2–0.25 h⁻¹、常圧で使用し、定期的な乾燥工程(0–0.1 MPa, 300–360℃, 6–8時間)が必要です。",
    slInd07Img,
    [
      { label: "규격 (A / B)", value: "Φ2.5×2–10mm / Φ3×2–10mm", enLabel: "Size", jaLabel: "サイズ" },
      { label: "비표면적 (A / B)", value: "≥ 235 / ≥ 250 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "압쇄강도 (A / B)", value: "≥ 125 / ≥ 130 N/cm", enLabel: "Crush Strength", jaLabel: "圧潰強度" },
      { label: "원료유", value: "밀도 0.88–0.90 g/ml", enLabel: "Feed Oil", enValue: "Density 0.88–0.90 g/ml", jaLabel: "原料油" },
    ], ["촉매", "산업·공정"]),

  // ===== SL-DES : 건조제·흡습제 =====
  mkSG("silica-gel-sl-des-01", "SL-DES-01 세공형 실리카겔 (A형)",
    "SL-DES-01 · Fine-pored Silica Gel (Type A)",
    "SL-DES-01 細孔型シリカゲル (A型)",
    "비표면적 650–800 m²/g · 건조·방습 표준품",
    "SSA 650–800 m²/g — standard desiccant grade",
    "比表面積650–800 m²/g · 乾燥・防湿標準品",
    "SL-DES-01은 투명 또는 반투명 유리질의 구형(펠릿) 또는 괴상 실리카겔입니다. 평균 공경 2.0–3.0 nm, 비표면적 650–800 m²/g로 건조·방습이 주된 용도이며, 촉매담체·흡착제·분리제·변압흡착(PSA) 용도로도 사용됩니다.",
    "SL-DES-01 is a transparent/translucent glass-like silica gel in pellet or lump form. Average pore 2.0–3.0 nm and SSA 650–800 m²/g make it a standard desiccant, also used for catalyst supports, adsorbents, separators and PSA.",
    "SL-DES-01は透明または半透明ガラス質の球形(ペレット)/塊状シリカゲルです。平均細孔2.0–3.0 nm、比表面積650–800 m²/gで乾燥・防湿が主用途、触媒担体・吸着剤・分離剤・PSAにも使用されます。",
    slDes01Img,
    [
      { label: "비표면적", value: "650–800 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "퇴적밀도", value: "≥ 720(펠릿) / ≥ 670(괴상) g/L", enLabel: "Bulk Density", jaLabel: "かさ密度" },
      { label: "공용적", value: "0.35–0.45 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
      { label: "SiO₂", value: "≥ 98 %" },
      { label: "규격", value: "0.5–8 mm", enLabel: "Size", jaLabel: "サイズ" },
    ], ["건조·흡습"]),

  mkSG("silica-gel-sl-des-02", "SL-DES-02 변압흡착(PSA)용 실리카겔 (A형)",
    "SL-DES-02 · Pressure Swing Adsorption (PSA) Silica Gel (Type A)",
    "SL-DES-02 圧力スイング吸着(PSA)用シリカゲル (A型)",
    "CO₂ 흡착량 ≥ 20 cm³/g · 압축강도 ≥ 100 N",
    "CO₂ ≥ 20 cm³/g · crush ≥ 100 N",
    "CO₂吸着量 ≥ 20 cm³/g · 圧縮強度 ≥ 100 N",
    "SL-DES-02는 투명/반투명 유리질 세공 구형 실리카겔로, 변압흡착(PSA) 방식의 기체 분리·정제용 첨단 소재입니다. 이산화탄소 회수·분리·정제에 주로 사용되며 합성암모니아공업·식품음료가공업의 이산화탄소 제조, 건조·방습, 유기제품 탈수 정제에도 사용됩니다.",
    "SL-DES-02 is a transparent/translucent glass-like fine-pored spherical silica gel for pressure swing adsorption (PSA). Primarily used for CO₂ recovery/purification, ammonia synthesis, food & beverage CO₂ production, drying and organic dehydration.",
    "SL-DES-02は透明/半透明ガラス質細孔球状シリカゲルで、圧力スイング吸着(PSA)による気体分離・精製用の先端素材です。",
    slDes02Img,
    [
      { label: "공경", value: "20–30 Å", enLabel: "Pore", jaLabel: "細孔径" },
      { label: "비표면적", value: "650–800 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "구형입도합격률", value: "≥ 90 %", enLabel: "Spherical Pass", jaLabel: "球形合格率" },
      { label: "가열감량", value: "≤ 2.0 %", enLabel: "Loss on Heating", jaLabel: "加熱減量" },
      { label: "규격", value: "0.5–8 mm", enLabel: "Size", jaLabel: "サイズ" },
    ], ["건조·흡습", "산업·공정"]),

  mkSG("silica-gel-sl-des-03", "SL-DES-03 블루 실리카겔 (A형, 습도지시)",
    "SL-DES-03 · Blue Silica Gel (Type A, Humidity Indicator)",
    "SL-DES-03 ブルーシリカゲル (A型, 湿度指示)",
    "청색 → 분홍색 · 상대습도 직관 표시",
    "Blue → pink — visual RH indicator",
    "青 → ピンク · 相対湿度を視覚表示",
    "SL-DES-03은 청색 또는 담청색 유리상 과립(구형/괴상) 실리카겔입니다. 습기 흡수 후 청색에서 분홍색으로 변색되어 상대습도를 직관적으로 표시합니다. 정밀기기·의약품·석유화학·식품·의류·가전·항공·군수 등 밀폐 환경의 방청·방습 및 습도 지시에 광범위하게 사용됩니다.",
    "SL-DES-03 is a blue/light-blue glass-like granular silica gel (bead/lump). Absorbs moisture and turns pink to visually indicate relative humidity — widely used for rust/moisture protection and humidity indication in precision instruments, pharmaceuticals, petrochemicals, food, garments, appliances, aviation and defense.",
    "SL-DES-03は青色または淡青色ガラス状顆粒(球/塊)のシリカゲルです。吸湿後に青→ピンクへ変色し相対湿度を視覚表示、精密機器・医薬品・石油化学・食品・衣料・家電・航空・軍需などの密閉環境の防錆・防湿および湿度指示に幅広く使用されます。",
    slDes03Img,
    [
      { label: "RH 20 %", value: "청색 / 연청색", enValue: "Blue / Light blue", jaValue: "青 / 淡青" },
      { label: "RH 50 %", value: "분홍색", enValue: "Pink", jaValue: "ピンク" },
      { label: "비표면적", value: "650–800 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "규격", value: "1–6 mm", enLabel: "Size", jaLabel: "サイズ" },
    ], ["건조·흡습", "습도지시"]),

  mkSG("silica-gel-sl-des-04", "SL-DES-04 오렌지 실리카겔 (A형, 습도지시)",
    "SL-DES-04 · Orange Silica Gel (Type A, Humidity Indicator)",
    "SL-DES-04 オレンジシリカゲル (A型, 湿度指示)",
    "무코발트 친환경 습도지시 실리카겔",
    "Cobalt-free eco-friendly humidity indicator silica gel",
    "無コバルト・環境配慮型 湿度指示シリカゲル",
    "SL-DES-04는 보라색·귤색·황색 3가지 유형의 구형/불규칙 과립 실리카겔로, 코발트클로라이드를 함유하지 않아 무독·무해합니다. 습도에 따라 색상이 변화해 습도 지시 기능을 제공하며, 블루 실리카겔과 동일한 산업분야(정밀기기·의약·석유화학·식품·의류·가전·항공·군수 등)에 사용됩니다.",
    "SL-DES-04 comes in three variants (purple, orange, yellow) as spherical/irregular granules, cobalt-chloride-free and non-toxic. Changes color with humidity for RH indication, used in the same fields as blue silica gel (precision instruments, pharma, petrochem, food, garments, appliances, aviation, defense).",
    "SL-DES-04は紫・橙・黄の3タイプの球形/不定形顆粒シリカゲルで、塩化コバルトを含まず無毒・無害です。湿度に応じて変色し湿度指示機能を提供、ブルーシリカゲルと同じ産業分野で使用されます。",
    slDes04Img,
    [
      { label: "RH 20 %", value: "연갈황색 / 주황색", enValue: "Light amber / Orange", jaValue: "淡黄褐 / オレンジ" },
      { label: "RH 50 %", value: "연회록색 / 무색", enValue: "Light gray-green / Colorless", jaValue: "淡灰緑 / 無色" },
      { label: "비표면적", value: "650–800 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "규격", value: "1–6 mm", enLabel: "Size", jaLabel: "サイズ" },
    ], ["건조·흡습", "습도지시"]),

  mkSG("silica-gel-sl-des-05", "SL-DES-05 B형 실리카겔",
    "SL-DES-05 · B Type Silica Gel",
    "SL-DES-05 B型シリカゲル",
    "평균 공경 5–8 nm · 공기습도조절·촉매담체·향료",
    "5–8 nm avg pore — humidity control, catalyst support, fragrance",
    "平均細孔5–8 nm · 湿度調整・触媒担体・香料",
    "SL-DES-05는 구형 또는 괴상, 투명/반투명 유리상의 B형 실리카겔입니다. 평균 공경 5.0–8.0 nm, 비표면적 450–600 m²/g로 공기습도조절제, 촉매 및 촉매담체, 향료 실리카겔·반려동물 깔개 재료, 컬럼크로마토그래피 실리카겔 등 정밀화학 원료로 사용됩니다.",
    "SL-DES-05 is a B-type silica gel in spherical/lump form (transparent/translucent). Avg pore 5.0–8.0 nm, SSA 450–600 m²/g — used as humidity regulator, catalyst support, fragrance carrier, pet litter and column chromatography feedstock.",
    "SL-DES-05は球形/塊状、透明/半透明ガラス状のB型シリカゲルです。平均細孔5.0–8.0 nm、比表面積450–600 m²/gで湿度調整剤、触媒/担体、香料キャリア、ペットリッター、カラムクロマト原料などに使用されます。",
    slDes05Img,
    [
      { label: "공경", value: "50–80 Å", enLabel: "Pore", jaLabel: "細孔径" },
      { label: "비표면적", value: "450–600 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "비저항", value: "≥ 5000(우등) / ≥ 3000(일등) Ω·cm", enLabel: "Resistivity", jaLabel: "比抵抗" },
      { label: "pH", value: "6.7–7.5" },
      { label: "규격", value: "4–8 mm / 2–5.6 mm", enLabel: "Size", jaLabel: "サイズ" },
    ], ["건조·흡습", "촉매"]),

  mkSG("silica-gel-sl-des-06", "SL-DES-06 실리카겔 고양이모래 (C형)",
    "SL-DES-06 · Silica Gel Cat Litter (Type C)",
    "SL-DES-06 シリカゲル猫砂 (C型)",
    "크리스탈 고양이모래 · 경량·저파쇄·항균",
    "Crystal cat litter — lightweight, low crush, antibacterial",
    "クリスタル猫砂 · 軽量・低破砕・抗菌",
    "SL-DES-06은 반려동물 배설물의 수분·냄새를 흡수하고 건조 상태를 유지하며 세균 번식을 억제하는 크리스탈 고양이모래입니다. 벤토나이트 등 기존 고양이모래 대비 경량·저파쇄율·무독·무오염의 친환경 제품으로, 흰색/청색/컬러 과립 커스터마이즈가 가능합니다.",
    "SL-DES-06 is crystal cat litter that absorbs pet waste moisture and odor while keeping surfaces dry and suppressing bacteria. Lighter, less crushable, non-toxic and non-polluting vs bentonite litter — customizable in white/blue/color granules.",
    "SL-DES-06はペットの排泄物の水分・臭いを吸収し乾燥状態を保ち、菌の繁殖を抑制するクリスタル猫砂です。ベントナイト等の従来品より軽量・低破砕率・無毒・無汚染で、白/青/カラー顆粒のカスタマイズが可能です。",
    slDes06Img,
    [
      { label: "공경", value: "80–100 Å", enLabel: "Pore", jaLabel: "細孔径" },
      { label: "비표면적", value: "300–400 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "pH", value: "6–8" },
      { label: "흡착량", value: "≥ 90 %", enLabel: "Adsorption", jaLabel: "吸着量" },
      { label: "규격", value: "0.5–8 mm", enLabel: "Size", jaLabel: "サイズ" },
    ], ["반려동물"]),

  mkSG("silica-gel-sl-des-07", "SL-DES-07 FNG 내수성 실리카겔",
    "SL-DES-07 · FNG Water-Resistant Silica Gel",
    "SL-DES-07 FNG耐水性シリカゲル",
    "수중 무파열율 90–95 % · 압축공기 건조·아세틸렌 흡착",
    "90–95% no-burst in water · compressed air drying, acetylene adsorption",
    "水中無破裂率90–95 % · 圧縮空気乾燥・アセチレン吸着",
    "SL-DES-07은 백색 또는 회백색 과립의 FNG형 내수성 실리카겔로, 일반 실리카겔과 동일한 공극구조·흡착 특성을 지니면서도 내수성이 우수해 물에 젖어도 파열되지 않고 사용수명이 깁니다. 압축공기 건조정화, 아세틸렌·이산화탄소 흡착제, 석유화학·전력·양조업 액체 흡착제 및 촉매담체, 일반 실리카겔의 보호층 완충 건조제로 사용됩니다.",
    "SL-DES-07 is a white/off-white FNG water-resistant silica gel. It retains the pore structure and adsorption of standard silica gel but resists cracking when wet for longer service life. Used for compressed-air drying, acetylene/CO₂ adsorption, liquid adsorption in petrochemicals/power/brewing, and as protective buffer for standard silica gel.",
    "SL-DES-07は白色または灰白色のFNG耐水性シリカゲルで、通常シリカゲルの細孔構造・吸着特性を保ちつつ耐水性に優れ、水に濡れても破裂せず長寿命です。",
    slDes07Img,
    [
      { label: "흡착량 (FNG-A / C)", value: "35–36 / 70–72 %", enLabel: "Adsorption", jaLabel: "吸着量" },
      { label: "압축강도", value: "≥ 68–98 N", enLabel: "Crush Strength", jaLabel: "圧縮強度" },
      { label: "수중 무파열율", value: "90–95 %", enLabel: "No-burst in water", jaLabel: "水中無破裂率" },
      { label: "규격", value: "3–5 mm / 4–8 mm", enLabel: "Size", jaLabel: "サイズ" },
    ], ["건조·흡습", "산업·공정"]),

  // ===== SL-ALS : 알루미나·분자체 (실리카졸은 별도 카테고리) =====
  mkSG("silica-gel-sl-als-01", "SL-ALS-01 실리카알루미나겔",
    "SL-ALS-01 · Silica Alumina Gel",
    "SL-ALS-01 シリカアルミナゲル",
    "mSiO₂·nAl₂O₃·xH₂O · 강극성·고흡착 · 천연가스 건조",
    "mSiO₂·nAl₂O₃·xH₂O — high polarity, strong adsorption, natural gas drying",
    "mSiO₂·nAl₂O₃·xH₂O · 強極性・高吸着 · 天然ガス乾燥",
    "SL-ALS-01은 화학식 mSiO₂·nAl₂O₃·xH₂O의 실리카알루미나겔로, 화학적으로 안정하고 불연성이며 강알칼리·불화수소산 외 용매에 불용입니다. 세공형 실리카겔보다 강한 표면 극성과 우수한 흡착분리성능, 뛰어난 열안정성을 지녀 압축천연가스·천연가스·기체·액화가스 건조 등에 광범위하게 사용됩니다.",
    "SL-ALS-01 is a silica alumina gel (mSiO₂·nAl₂O₃·xH₂O). Chemically stable, non-flammable and insoluble in solvents except strong alkali and hydrofluoric acid. Stronger surface polarity and superior adsorption/thermal stability vs fine-pored silica gel — widely used for CNG, natural gas, gaseous and liquefied gas drying.",
    "SL-ALS-01は化学式mSiO₂·nAl₂O₃·xH₂Oのシリカアルミナゲルで、化学的に安定・不燃性、強アルカリ・フッ化水素酸以外の溶媒に不溶です。細孔型シリカゲルより強い表面極性と優れた吸着分離性能・熱安定性を持ち、CNG・天然ガス・気体・液化ガス乾燥などに広く使用されます。",
    slAls01Img,
    [
      { label: "SiO₂", value: "65–99.5 %" },
      { label: "비표면적", value: "600 / 600–800 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "압축강도", value: "≥ 200 / ≥ 150 N/개", enLabel: "Crush Strength", jaLabel: "圧縮強度" },
      { label: "규격", value: "1–8 mm", enLabel: "Size", jaLabel: "サイズ" },
    ], ["알루미나·분자체", "산업·공정"]),

  mkSG("silica-gel-sl-als-03", "SL-ALS-03 활성알루미나볼",
    "SL-ALS-03 · Activated Alumina Ball",
    "SL-ALS-03 活性アルミナボール",
    "Al₂O₃ ≥ 92 % · 비가열재생 건조제 · 175–315℃ 재생",
    "Al₂O₃ ≥ 92 % — non-heat-regenerative desiccant, 175–315℃ regeneration",
    "Al₂O₃ ≥ 92 % · 非加熱再生型乾燥剤 · 175–315℃再生",
    "SL-ALS-03은 백색 구형의 다공성 활성알루미나 흡착재입니다. 입도가 균일하고 표면이 매끄러우며 기계적 강도가 높고 흡습력이 강하며, 흡습 후에도 팽창·균열 없이 원형을 유지합니다. 무독·무취·물과 에탄올에 불용이며, 기체·수증기 및 일부 액체 속 수분을 선택적으로 흡착하고 175–315℃ 가열로 재생 가능한 고효율 건조제입니다.",
    "SL-ALS-03 is a white spherical porous activated alumina adsorbent. Uniform particle size, smooth surface, high mechanical strength and strong moisture absorption without swelling/cracking. Non-toxic, odorless, insoluble in water/ethanol — a high-efficiency desiccant that selectively adsorbs water from gases, vapors and some liquids and regenerates at 175–315℃.",
    "SL-ALS-03は白色球状の多孔性活性アルミナ吸着材です。均一粒度、滑らかな表面、高い機械強度、強い吸湿力を持ち、吸湿後も膨張・亀裂なく原形を維持します。",
    slAls03Img,
    [
      { label: "Al₂O₃", value: "≥ 92 %" },
      { label: "비표면적", value: "≥ 280 m²/g", enLabel: "SSA", jaLabel: "比表面積" },
      { label: "공용적", value: "≥ 0.40 cm³/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
      { label: "압쇄강도", value: "≥ 130 N/g", enLabel: "Crush Strength", jaLabel: "圧潰強度" },
      { label: "규격", value: "3–5 / 4–6 / 5–8 / 8–12 / 12–20 mm", enLabel: "Size", jaLabel: "サイズ" },
    ], ["알루미나·분자체", "건조·흡습"]),

  mkSG("silica-gel-sl-als-04", "SL-ALS-04 분자체 (4A)",
    "SL-ALS-04 · Molecular Sieve (4A)",
    "SL-ALS-04 分子篩 (4A)",
    "공경 4Å · 물·메탄올·에탄올 선택 흡착 · 산업용 최다 사용",
    "4Å pore — selective adsorption of water/methanol/ethanol, most widely used",
    "細孔4Å · 水・メタノール・エタノール選択吸着 · 産業用最多使用",
    "SL-ALS-04는 공경 4Å의 4A 분자체로, 물·메탄올·에탄올·황화수소·이산화황·이산화탄소·에틸렌·프로필렌을 흡착하며 직경 4Å을 초과하는 분자(프로판 포함)는 흡착하지 않습니다. 물에 대한 선택적 흡착성이 가장 높아 산업용 분자체 중 사용량이 가장 많으며, 천연가스·냉매 등 기체·액체 심층건조, 아르곤 생산정제, 의약품·전자부품 정적건조, 도료·연료·코팅제 탈수제에 사용됩니다.",
    "SL-ALS-04 is a 4Å (4A) molecular sieve that adsorbs water, methanol, ethanol, H₂S, SO₂, CO₂, ethylene and propylene while excluding molecules > 4Å (incl. propane). Its selectivity for water makes it the most widely used industrial sieve — for deep drying of natural gas/refrigerants, argon production, static drying of pharmaceuticals/electronics and dehydration of paints/fuels/coatings.",
    "SL-ALS-04は細孔径4Åの4A分子篩で、水・メタノール・エタノール・H₂S・SO₂・CO₂・エチレン・プロピレンを吸着し、4Å超の分子(プロパン含む)は吸着しません。水への選択的吸着性が最も高く、産業用分子篩の中で最多使用されます。",
    slAls04Img,
    [
      { label: "정적수분흡착", value: "≥ 21 %", enLabel: "Static Water Adsorption", jaLabel: "静的水吸着" },
      { label: "메탄올흡착", value: "≥ 15 %", enLabel: "Methanol Adsorption", jaLabel: "メタノール吸着" },
      { label: "압축강도", value: "≥ 30–70 N", enLabel: "Crush Strength", jaLabel: "圧縮強度" },
      { label: "함수율", value: "≤ 1.5 %", enLabel: "Moisture", jaLabel: "含水率" },
      { label: "규격", value: "1.5–5.0 mm (조형/구형)", enLabel: "Size", jaLabel: "サイズ" },
    ], ["알루미나·분자체", "건조·흡습"]),
];

productCatalog.push(...silicaGelProducts);

const PS_APPS = ["침전/침강실리카"];
const PS_FEATURES = [
  { title: "🧱 합성 무정형 SiO₂", desc: "수용성 규산염과 산의 반응으로 제조된 순백색 무정형 분말", enTitle: "🧱 Synthetic Amorphous SiO₂", jaTitle: "🧱 合成非晶質SiO₂", enDesc: "Pure white amorphous powder produced by reacting soluble silicate with acid", jaDesc: "水溶性ケイ酸塩と酸の反応により製造される純白色の非晶質粉末" },
  { title: "🧪 고순도 관리", desc: "SiO₂ ≥ 98~99%, 중금속·납·비소 등 유해 성분 엄격 관리", enTitle: "🧪 High-Purity Management", jaTitle: "🧪 高純度管理", enDesc: "SiO₂ ≥ 98–99%, with strict control of harmful components such as heavy metals, lead, and arsenic", jaDesc: "SiO₂ ≥ 98~99%、重金属・鉛・ヒ素などの有害成分を厳格管理" },
  { title: "⚙️ 다공성 구조", desc: "높은 비표면적과 흡유량으로 보강·증점·소광·흡착 성능 발휘", enTitle: "⚙️ Porous Structure", jaTitle: "⚙️ 多孔質構造", enDesc: "High specific surface area and oil absorption deliver reinforcement, thickening, matting, and adsorption performance", jaDesc: "高い比表面積と吸油量により、補強・増粘・艶消し・吸着性能を発揮" },
  { title: "🌿 광범위 응용", desc: "고무·페인트·플라스틱·식의약·치약·화장품 등 산업 전반 적용", enTitle: "🌿 Wide Applications", jaTitle: "🌿 広範な応用", enDesc: "Applied across industries: rubber, paint, plastics, food/pharma, toothpaste, cosmetics, and more", jaDesc: "ゴム・塗料・プラスチック・食品医薬品・歯磨き粉・化粧品など産業全般に適用" },
];

const precipitatedProducts: ProductDetail[] = [];

productCatalog.push(...precipitatedProducts);

const FS_APPS = ["흄드실리카"];
const FS_FEATURES = [
  { title: "🔬 초고비표면적 무정형 SiO₂", desc: "BET 100~400 m²/g의 초미세 비결정성 이산화규소 — 나노 입자 단위의 분자 활성", enTitle: "🔬 Ultra-High SSA Amorphous SiO₂", jaTitle: "🔬 超高比表面積の非晶質SiO₂", enDesc: "Ultra-fine non-crystalline silicon dioxide with BET 100–400 m²/g — molecular activity at the nanoparticle scale", jaDesc: "BET 100~400 m²/gの超微細非晶質二酸化ケイ素 — ナノ粒子単位の分子活性" },
  { title: "🧪 고순도(≥99.8%)", desc: "사염화규소(SiCl₄) 화염가수분해로 제조되어 금속 불순물이 ppm 단위로 극미량", enTitle: "🧪 High Purity (≥99.8%)", jaTitle: "🧪 高純度(≥99.8%)", enDesc: "Produced by flame hydrolysis of silicon tetrachloride (SiCl₄) with trace metal impurities at ppm levels", jaDesc: "四塩化ケイ素(SiCl₄)の火炎加水分解で製造され、金属不純物がppm単位で極微量" },
  { title: "⚙️ 강력한 틱소트로피 부여", desc: "3차원 네트워크 구조 형성으로 액상의 점도·요변성을 극적으로 향상", enTitle: "⚙️ Powerful Thixotropy", jaTitle: "⚙️ 強力なチキソトロピー付与", enDesc: "Forms 3D network structures that dramatically improve viscosity and thixotropy of liquids", jaDesc: "3次元ネットワーク構造の形成で液状の粘度・チキソ性を劇的に向上" },
  { title: "💧 친수성·소수성 등급", desc: "표면 처리에 따라 친수성(Hydrophilic) 및 소수성(Hydrophobic) 등급 선택 가능", enTitle: "💧 Hydrophilic & Hydrophobic Grades", jaTitle: "💧 親水性・疎水性グレード", enDesc: "Hydrophilic and hydrophobic grades available depending on surface treatment", jaDesc: "表面処理に応じて親水性(Hydrophilic)および疎水性(Hydrophobic)グレードの選択が可能" },
  { title: "🔥 내열·내화학성", desc: "고온·산·알칼리·유기용제에 강한 안정성으로 가혹 공정에도 적용 가능", enTitle: "🔥 Heat & Chemical Resistance", jaTitle: "🔥 耐熱・耐化学性", enDesc: "Stable under high temperatures, acids, alkalis, and organic solvents — suitable for harsh processes", jaDesc: "高温・酸・アルカリ・有機溶剤に対する強い安定性で、過酷な工程にも適用可能" },
  { title: "✨ 우수한 보강·증점 효과", desc: "실리콘 고무·접착제·실란트의 기계적 강도와 가공성 동시 향상", enTitle: "✨ Excellent Reinforcement & Thickening", jaTitle: "✨ 優れた補強・増粘効果", enDesc: "Simultaneously improves mechanical strength and processability of silicone rubber, adhesives, and sealants", jaDesc: "シリコーンゴム・接着剤・シーラントの機械的強度と加工性を同時に向上" },
];

const fumedProducts: ProductDetail[] = [
  {
    slug: "fumed-silica-slh-380s",
    name: "SLH-380S 소수성 흄드 실리카",
    enName: "SLH-380S · Hydrophobic Fumed Silica (HMDS-Treated)", jaName: "SLH-380S 疎水性ヒュームドシリカ",
    tagline: "BET 310 m²/g · HMDS 표면처리 소수성 등급 — 자동차 코팅·배터리·실란트·전자 소재용 첨단 보강 첨가제",
    enTagline: "BET 310 m²/g · HMDS Surface-Treated Hydrophobic Grade — Advanced Reinforcing Additive for Automotive Coatings, Batteries, Sealants & Electronic Materials", jaTagline: "BET 310 m²/g · HMDS表面処理の疎水性グレード — 自動車コーティング・バッテリー・シーラント・電子素材用先端補強添加剤",
    description:
      "SLH-380S는 사염화규소(SiCl₄)의 화염가수분해로 제조된 흄드 실리카를 HMDS(Hexamethyldisilazane)로 표면 처리하여 소수성(Hydrophobic)을 부여한 고순도 나노 무정형 실리카입니다. SiO₂ 순도 99.94%, 1차 입자 크기 15 nm, BET 비표면적 310 m²/g, 탄소 함량 3.1%의 정밀 규격을 가지며, 물을 강하게 튕겨내는 발수 특성과 비극성 매체에서의 우수한 분산성을 동시에 발휘합니다. 자동차·산업용 코팅의 침전 방지 및 내스크래치 향상, 실리콘·PU·에폭시 실란트와 접착제의 증점·요변성·안티-새깅, 리튬이온 배터리 슬러리의 점도 조절 및 분산성 개선, 반도체 CMP 연마와 전자 패키징의 절연·내열, 화장품의 매트 효과·유화 안정화, 그리고 건축 외장의 방수·방오 코팅 등 고부가가치 첨단 산업 전반에 최적화된 프리미엄 기능성 첨가제입니다.",
    enDescription:
      "SLH-380S is a high-purity nano amorphous silica produced by flame hydrolysis of silicon tetrachloride (SiCl₄) and surface-treated with HMDS (Hexamethyldisilazane) to deliver hydrophobic performance. With SiO₂ purity of 99.94%, primary particle size of 15 nm, BET specific surface area of 310 m²/g and carbon content of 3.1%, it offers strong water repellency together with excellent dispersibility in non-polar media. It is optimized for premium high-value applications: anti-settling and scratch resistance in automotive and industrial coatings; thickening, thixotropy and anti-sagging in silicone, PU and epoxy sealants and adhesives; viscosity control and uniform active-material dispersion in lithium-ion battery slurries; high-precision CMP polishing and insulation/heat resistance in semiconductor packaging; matte effect and emulsion stabilization in cosmetics; and water/stain-repellent architectural exterior coatings.", jaDescription: "SLH-380Sは四塩化ケイ素(SiCl₄)の火炎加水分解で製造されたヒュームドシリカをHMDS(Hexamethyldisilazane)で表面処理し、疎水性(Hydrophobic)を付与した高純度ナノ非晶質シリカです。SiO₂純度99.94%、一次粒子径15 nm、BET比表面積310 m²/g、炭素含有量3.1%の精密仕様を持ち、水を強力に弾く撥水特性と非極性媒体での優れた分散性を同時に発揮します。自動車・産業用コーティングの沈降防止および耐スクラッチ性向上、シリコーン・PU・エポキシシーラントや接着剤の増粘・チキソ性・アンチサギング（液だれ防止）、リチウムイオンバッテリー用スラリーの粘度調整および分散性改善、半導体CMP研磨と電子パッケージングの絶縁・耐熱、化粧品のマット効果・乳化安定化、そして建築外装の防水・防汚コーティングなど、高付加価値の先端産業全般に最適化されたプレミアム機能性添加剤です。",
    image: fumedSilica,
    category: "fumed",
    features: [
      { title: "💧 강력한 소수성 (HMDS 표면처리)", desc: "HMDS로 표면 처리되어 물을 극도로 튕겨내며, 비극성 용매(오일·유기용매·실리콘 오일)에 탁월한 분산성", enTitle: "💧 Strong Hydrophobicity (HMDS-Treated)", jaTitle: "💧 強力な疎水性 (HMDS表面処理)", enDesc: "HMDS-treated surface strongly repels water and disperses excellently in non-polar media (oils, organic solvents, silicone oil)", jaDesc: "HMDSで表面処理され水を極度に弾き、非極性溶媒(オイル・有機溶媒・シリコーンオイル)に対して卓越した分散性を発揮" },
      { title: "🧪 초고순도 SiO₂ 99.94%", desc: "금속 불순물 극미량 — 전자·반도체·배터리 등 고정밀 산업에 적합", enTitle: "🧪 Ultra-High Purity SiO₂ 99.94%", jaTitle: "🧪 超高純度SiO₂ 99.94%", enDesc: "Trace metallic impurities — suitable for high-precision industries such as electronics, semiconductors, and batteries", jaDesc: "金属不純物極微量 — 電子・半導体・バッテリーなど高精密産業に適応" },
      { title: "🔬 초미세 입자 & 광활 비표면적 310 m²/g", desc: "1차 입자 15 nm의 나노 망상 구조로 증점·요변성·보강 효과 극대화", enTitle: "🔬 Ultra-Fine Particles & 310 m²/g SSA", jaTitle: "🔬 超微細粒子 & 広大な比表面積 310 m²/g", enDesc: "15 nm primary particles form a nano-network that maximizes thickening, thixotropy, and reinforcement", jaDesc: "一次粒子15 nmのナノ網目構造で増粘・チキソ性・補強効果を極大化" },
      { title: "🪶 초저 탭 밀도 52 g/L", desc: "매우 가볍고 부피가 커 소량 투입만으로 높은 기능성 발현", enTitle: "🪶 Ultra-Low Tapped Density 52 g/L", jaTitle: "🪶 超低タップ密度 52 g/L", enDesc: "Very light and high-volume — delivers strong functionality at low addition levels", jaDesc: "非常に軽く嵩張るため、少量の投入で高い機能性を発現" },
      { title: "✨ 최상급 백색도 97 %", desc: "백색도 97% / 가열·강열 감량 극저 → 투명·고급 제품 색상 영향 없음", enTitle: "✨ Top-Grade Whiteness 97%", jaTitle: "✨ 最上級の白色度 97 %", enDesc: "Whiteness 97% with ultra-low loss on drying/ignition — no color impact on transparent/premium products", jaDesc: "白色度 97% / 加熱・強熱減量が極めて低い → 透明・高級製品の色に影響なし" },
      { title: "🔥 내열·내화학 안정성", desc: "고온·산·알칼리·유기용제 환경에서도 안정적 성능 유지", enTitle: "🔥 Heat & Chemical Stability", jaTitle: "🔥 耐熱・耐化学安定性", enDesc: "Maintains stable performance under high temperature, acid, alkali, and organic solvent environments", jaDesc: "高温・酸・アルカリ・有機溶剤環境でも安定した性能を維持" },
    ],
    specs: [
      { label: "외관 (Appearance)", value: "백색 분말 (White Powder)", note: "✅ 적합", enLabel: "Appearance", jaLabel: "外観 (Appearance)", enNote: "Conforms", jaNote: "✅ 適合" },
      { label: "백색도 (Whiteness)", value: "97 %", note: "규격 ≥ 93", enLabel: "Whiteness", jaLabel: "白色度 (Whiteness)", enNote: "Spec ≥ 93", jaNote: "規格 ≥ 93" },
      { label: "SiO₂ 순도", value: "99.94 %", note: "규격 ≥ 99 · 고순도", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度", enNote: "Spec ≥ 99 · High purity", jaNote: "規格 ≥ 99 · 高純度" },
      { label: "1차 입자 크기", value: "15 nm", note: "규격 14–16 nm", enLabel: "Primary Particle Size", jaLabel: "一次粒子径", enNote: "Spec 14–16 nm", jaNote: "規格 14–16 nm" },
      { label: "평균 입도 (D50)", value: "8 µm", note: "규격 5–10 µm", enLabel: "Mean Particle Size (D50)", jaLabel: "平均粒度 (D50)", enNote: "Spec 5–10 µm", jaNote: "規格 5–10 µm" },
      { label: "pH (5% 현탁액)", value: "7.1", note: "규격 6.0–8.0 · 중성", enLabel: "pH (5% suspension)", jaLabel: "pH (5%懸濁液)", enNote: "Spec 6.0–8.0 · Neutral", jaNote: "規格 6.0–8.0 · 中性" },
      { label: "가열 감량 (105℃, 2h)", value: "0.2 %", note: "규격 ≤ 0.5 %", enLabel: "Loss on Drying (105℃, 2h)", jaLabel: "加熱減量 (105℃, 2h)", enNote: "Spec ≤ 0.5 %", jaNote: "規格 ≤ 0.5 %" },
      { label: "강열 감량 (1000℃, 2h)", value: "0.5 %", note: "규격 ≤ 2.0 %", enLabel: "Ignition Loss (1000℃, 2h)", jaLabel: "強熱減量 (1000℃, 2h)", enNote: "Spec ≤ 2.0 %", jaNote: "規格 ≤ 2.0 %" },
      { label: "탭 밀도 (Tapped Density)", value: "52 g/L", note: "규격 45–65 g/L", enLabel: "Tapped Density", jaLabel: "タップ密度 (Tapped Density)", enNote: "Spec 45–65 g/L", jaNote: "規格 45–65 g/L" },
      { label: "BET 비표면적", value: "310 m²/g", note: "규격 300 ± 20 m²/g · 고기능성", enLabel: "BET Specific Surface Area", jaLabel: "BET比表面積", enNote: "Spec 300 ± 20 m²/g", jaNote: "規格 300 ± 20 m²/g · 高機能性" },
      { label: "탄소 함량 (Carbon Content)", value: "3.1 %", note: "규격 2.0–4.0 % · HMDS 유래", enLabel: "Carbon Content", jaLabel: "炭素含有量 (Carbon Content)", enNote: "Spec 2.0–4.0 % · From HMDS", jaNote: "規格 2.0–4.0 % · HMDS由来" },
      { label: "표면 처리 방법", value: "HMDS (Hexamethyldisilazane)", note: "소수성 표면 처리", enLabel: "Surface Treatment", jaLabel: "表面処理方法", enNote: "Hydrophobic treatment", jaNote: "疎水性表面処理" },
    ],
    applications: FS_APPS,
  },
];

productCatalog.push(...fumedProducts);

// ============= Advanced Series (7 new categories, SL series) =============
const advSeriesProducts: ProductDetail[] = [
  {
    slug: "spherical-silica-powder",
    name: "구상 실리카 분말",
    enName: "Spherical Silica Powder",
    jaName: "球状シリカ粉末",
    tagline: "고구상도·저점도·저열팽창의 반도체·EMC용 프리미엄 구상 실리카",
    enTagline: "High Sphericity · Low Viscosity · Low CTE — Premium Spherical Silica for Semiconductor EMC",
    jaTagline: "高球形度・低粘度・低熱膨張の半導体・EMC用プレミアム球状シリカ",
    description:
      "구상 실리카 분말은 화염 용융 공정을 통해 완전한 구(球) 형태로 성형된 고순도 무정형 SiO₂ 분말입니다. 낮은 수지 점도, 우수한 유동성, 낮은 열팽창계수를 바탕으로 반도체 EMC(Epoxy Molding Compound), CCL(Copper Clad Laminate), 언더필, 봉지재 등 첨단 전자 소재의 핵심 필러로 사용됩니다. 일반 구상(SL-QG)과 저방사선(Low-α) 구상(SL-QG-L) 2종 시리즈를 기준으로 고객 맞춤 생산 공급합니다.",
    enDescription:
      "Spherical Silica Powder is a high-purity amorphous SiO₂ powder formed into perfect spheres via a flame-fusion process. Thanks to its low resin viscosity, excellent flowability and low CTE, it is used as a key filler in advanced electronic materials such as semiconductor EMC (Epoxy Molding Compound), CCL, underfill and encapsulants. Supplied in two grades: standard SL-QG and low-alpha SL-QG-L.",
    jaDescription:
      "球状シリカ粉末は火炎溶融工程を経て完全な球形に成形された高純度非晶質SiO₂粉末です。低粘度・優れた流動性・低熱膨張係数により、半導体EMC(エポキシ封止材)・CCL・アンダーフィル・封止材など先端電子素材の主要フィラーとして使用されます。標準品SL-QGおよび低α線グレードSL-QG-Lの2種を供給します。",
    image: sphericalImg,
    category: "advanced-series",
    features: [
      { title: "🔵 고구상도", desc: "화염 용융/금속 실리콘 폭연/화학 합성 공법으로 완전 구상에 가까운 입자 성형", enTitle: "🔵 High Sphericity", jaTitle: "🔵 高球形度", enDesc: "Flame-fusion / Si-deflagration / chemical synthesis produces near-perfect spheres", jaDesc: "火炎溶融/金属Si爆燃/化学合成で完全球形に近い粒子を成形" },
      { title: "🧪 고순도 SiO₂ 99.0 ~ 99.95%", desc: "저 Na⁺·Cl⁻·E/C 관리로 반도체 EMC 신뢰성 확보", enTitle: "🧪 High-Purity SiO₂ 99.0–99.95%", jaTitle: "🧪 高純度SiO₂ 99.0~99.95%", enDesc: "Low Na⁺/Cl⁻/E/C ensures semiconductor EMC reliability", jaDesc: "低Na⁺・Cl⁻・E/C管理で半導体EMCの信頼性を確保" },
      { title: "🌡️ 저열팽창·저열전도", desc: "실리콘 웨이퍼와 열팽창 정합성 우수 — 크랙·박리 최소화", enTitle: "🌡️ Low CTE & Low Thermal Conductivity", jaTitle: "🌡️ 低熱膨張・低熱伝導", enDesc: "Excellent CTE match with silicon wafer — minimizes cracking and delamination", jaDesc: "シリコンウェハとの熱膨張整合性に優れ、クラック・剥離を最小化" },
      { title: "☢️ 저방사선 등급(SL-QG-L)", desc: "저 방사성 원소 함량 — 첨단 메모리 소프트 에러 방지", enTitle: "☢️ Low-Alpha Grade (SL-QG-L)", jaTitle: "☢️ 低α線グレード(SL-QG-L)", enDesc: "Low radioactive element content — prevents soft errors in advanced memory", jaDesc: "低放射性元素含有量 — 先端メモリのソフトエラーを防止" },
      { title: "⚙️ 고충전율·저응력", desc: "구상·저비표면적으로 고충전 배합 시에도 저점도·저응력 유지", enTitle: "⚙️ High Loading & Low Stress", jaTitle: "⚙️ 高充填率・低応力", enDesc: "Spherical shape and low SSA maintain low viscosity/stress at high loading", jaDesc: "球状・低比表面積で高充填配合時も低粘度・低応力を維持" },
      { title: "📐 정밀 입도 관리", desc: "D50 0.1 ~ 40 µm 맞춤 공급 (SL-QG), D50 1 ~ 30 µm (SL-QG-L)", enTitle: "📐 Precise PSD Control", jaTitle: "📐 精密な粒度管理", enDesc: "D50 0.1–40 µm (SL-QG) or 1–30 µm (SL-QG-L) customizable", jaDesc: "D50 0.1~40 µm (SL-QG) / 1~30 µm (SL-QG-L) カスタム供給" },
    ],
    specs: [
      { label: "외관", value: "백색 구상 분말", enValue: "White spherical powder", jaValue: "白色球状粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂ 순도", value: "99.0 ~ 99.95 %", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
      { label: "형상", value: "구상(Spherical)", enValue: "Spherical", jaValue: "球形(Spherical)", enLabel: "Morphology", jaLabel: "形状" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "평균 입도 D50", value: "0.1 ~ 40 µm (SL-QG) / 1 ~ 30 µm (SL-QG-L)", enValue: "0.1–40 µm (SL-QG) / 1–30 µm (SL-QG-L)", jaValue: "0.1~40 µm (SL-QG) / 1~30 µm (SL-QG-L)", enLabel: "Mean Particle Size D50", jaLabel: "平均粒度 D50" },
      { label: "특성", value: "저 Na⁺·Cl⁻·E/C · 고구상도 · 저응력", enValue: "Low Na⁺/Cl⁻/E/C · high sphericity · low stress", jaValue: "低Na⁺・Cl⁻・E/C · 高球形度 · 低応力", enLabel: "Features", jaLabel: "特性" },
      { label: "포장", value: "10 / 20 kg 지대 · OEM", enValue: "10 / 20 kg bag · OEM", jaValue: "10 / 20 kg 紙袋 · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "특성", en: "Feature", ja: "特性" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-QG", slug: "sl-qg", spec: "일반 구상", enSpec: "Standard Spherical", jaSpec: "一般球状", name: "SL-QG 일반 구상 실리카 분말", enName: "SL-QG · Standard Spherical Silica Powder", jaName: "SL-QG 一般球状シリカ粉末" },
      { code: "SL-QG-L", slug: "sl-qg-l", spec: "저방사선(Low-α) 구상", enSpec: "Low-Alpha Spherical", jaSpec: "低α線 球状", name: "SL-QG-L 저방사선 구상 실리카 분말", enName: "SL-QG-L · Low-Alpha Spherical Silica Powder", jaName: "SL-QG-L 低α線球状シリカ粉末" },
      { code: "SL-SPH-300", slug: "sl-sph-300", spec: "화학합성 아미크론급 구상 (D50 0.38µm · SiO₂ 99.98%)", enSpec: "Chemically Synthesized Submicron Spherical (D50 0.38 µm · SiO₂ 99.98%)", jaSpec: "化学合成サブミクロン球状 (D50 0.38µm · SiO₂ 99.98%)", name: "SL-SPH-300 고순도 나노구상실리카", enName: "SL-SPH-300 · Ultra-High-Purity Nano Spherical Silica", jaName: "SL-SPH-300 高純度ナノ球状シリカ" },
    ],
    applications: ["반도체 EMC", "CCL / PCB", "언더필 / 봉지재", "고열전도 소재"],
  },
  {
    slug: "round-corner-silica-powder",
    name: "모서리 라운드 실리카 분말",
    enName: "Round Corner Silica Powder",
    jaName: "丸角シリカ粉末",
    tagline: "각상과 구상의 장점을 겸비한 모서리 라운드 실리카 — 우수한 유동성과 경제성",
    enTagline: "Combining Angular Strength with Spherical Flow — Balanced Round-Corner Silica",
    jaTagline: "角形と球状の長所を兼備した丸角シリカ — 優れた流動性と経済性",
    description:
      "모서리 라운드 실리카 분말은 각상 실리카의 모서리를 라운딩(round-corner) 처리하여 구상에 근접한 유동성과 낮은 수지 점도, 우수한 충전성을 갖춘 하이브리드형 필러입니다. 구상 대비 경제성이 우수하며, 결정형 SL-YJG와 용융형 SL-YRG 을 기본으로 고객의 요구를 적용한 맟춤 가공 생산 하여  CCL, 도전성 페이스트, 산업용 코팅, 고내마모 복합재 등에 폭넓게 사용됩니다.",
    enDescription:
      "Round Corner Silica Powder is a hybrid filler produced by rounding the corners of angular silica, delivering near-spherical flow, low resin viscosity, and excellent packing. It offers superior cost-performance compared to fully spherical grades, and is available in crystalline SL-YJG and fused SL-YRG grades — widely used in CCL, conductive pastes, industrial coatings, and high-wear composites.",
    jaDescription:
      "丸角シリカ粉末は角形シリカの角を丸め(round-corner)処理し、球状に近い流動性・低樹脂粘度・優れた充填性を備えたハイブリッド型フィラーです。球状品と比較して経済性に優れ、結晶質SL-YJGおよび溶融質SL-YRGの2種で供給され、CCL・導電性ペースト・産業用コーティング・高耐摩耗複合材などに幅広く使用されます。",
    image: roundCornerImg,
    category: "advanced-series",
    features: [
      { title: "🟢 모서리 라운드 형상 (Round Corner)", desc: "각상의 모서리를 라운딩 처리하여 구상에 근접한 유동성 구현", enTitle: "🟢 Round-Corner Shape", jaTitle: "🟢 丸角形状 (Round Corner)", enDesc: "Rounded corners deliver near-spherical flow performance", jaDesc: "角形の角を丸め処理し、球状に近い流動性を実現" },
      { title: "💰 우수한 경제성", desc: "구상 실리카 대비 20~40% 낮은 원가로 유사 성능 확보", enTitle: "💰 Excellent Cost Efficiency", jaTitle: "💰 優れた経済性", enDesc: "20–40% cost reduction versus spherical silica with similar performance", jaDesc: "球状シリカ対比20~40%低いコストで同等性能を確保" },
      { title: "🔧 2종 라인업", desc: "결정형(SL-YJG)·용융형(SL-YRG) 선택 가능", enTitle: "🔧 Two Grade Lineup", jaTitle: "🔧 2種ラインアップ", enDesc: "Choice of crystalline SL-YJG and fused SL-YRG", jaDesc: "結晶質(SL-YJG)・溶融質(SL-YRG)の選択が可能" },
      { title: "🧬 고충전성", desc: "모서리 라운드 구조로 고충전 배합 시에도 점도 상승 최소화", enTitle: "🧬 High Loading", jaTitle: "🧬 高充填性", enDesc: "Round-corner structure minimizes viscosity rise at high loading", jaDesc: "丸角構造で高充填配合時にも粘度上昇を最小化" },
      { title: "🛡️ 우수한 내마모성", desc: "각상의 강도와 구상의 매끄러움 동시 확보", enTitle: "🛡️ Excellent Wear Resistance", jaTitle: "🛡️ 優れた耐摩耗性", enDesc: "Angular strength combined with spherical smoothness", jaDesc: "角形の強度と球状の滑らかさを同時に確保" },
      { title: "📐 맞춤 입도", desc: "D50 1 ~ 40 µm 요구 사양별 공급", enTitle: "📐 Custom PSD", jaTitle: "📐 カスタム粒度", enDesc: "D50 1–40 µm supplied per requirements", jaDesc: "D50 1~40 µm 要求仕様別に供給" },
    ],
    specs: [
      { label: "외관", value: "백색 모서리 라운드 분말", enValue: "White round-corner powder", jaValue: "白色丸角粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂ 순도", value: "98.0 ~ 99.9 % (SL-YJG) / 99.0 ~ 99.95 % (SL-YRG)", enValue: "98.0–99.9 % (SL-YJG) / 99.0–99.95 % (SL-YRG)", jaValue: "98.0~99.9 % (SL-YJG) / 99.0~99.95 % (SL-YRG)", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
      { label: "형상", value: "모서리 라운드(Round Corner)", enValue: "Round Corner", jaValue: "丸角(Round Corner)", enLabel: "Shape", jaLabel: "形状" },
      { label: "백도 / 모스경도 (SL-YJG)", value: "90 이상 / 7", enValue: "90 Min / 7", jaValue: "90以上 / 7", enLabel: "Whiteness / Mohs (SL-YJG)", jaLabel: "白度 / モース硬度 (SL-YJG)" },
      { label: "팽창계수 / PH (SL-YRG)", value: "0.5×10⁻⁶ / 5 ~ 8", enValue: "0.5×10⁻⁶ / 5–8", jaValue: "0.5×10⁻⁶ / 5~8", enLabel: "Expansion / PH (SL-YRG)", jaLabel: "膨張係数 / PH (SL-YRG)" },
      { label: "평균 입도 D50", value: "10 ~ 50 µm (맞춤)", enValue: "10–50 µm (customizable)", jaValue: "10~50 µm (カスタム)", enLabel: "Mean D50", jaLabel: "平均粒度 D50" },
      { label: "포장", value: "20 kg 지대 · 500 kg 벌크백 · OEM", enValue: "20 kg bag · 500 kg bulk · OEM", jaValue: "20 kg 紙袋 · 500 kg バルク · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "타입", en: "Type", ja: "タイプ" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-YJG", slug: "sl-yjg", spec: "결정형 모서리 라운드", enSpec: "Crystalline Round-Corner", jaSpec: "結晶質 丸角", name: "SL-YJG 결정형 모서리 라운드 실리카 분말", enName: "SL-YJG · Crystalline Round-Corner Silica Powder", jaName: "SL-YJG 結晶質丸角シリカ粉末" },
      { code: "SL-YRG", slug: "sl-yrg", spec: "용융형 모서리 라운드", enSpec: "Fused Round-Corner", jaSpec: "溶融質 丸角", name: "SL-YRG 용융형 모서리 라운드 실리카 분말", enName: "SL-YRG · Fused Round-Corner Silica Powder", jaName: "SL-YRG 溶融質丸角シリカ粉末" },
    ],
    applications: ["CCL / PCB", "도전성 페이스트", "산업용 코팅", "고내마모 복합재"],
  },
  {
    slug: "angular-silica-powder",
    name: "각상 실리카 분말",
    enName: "Angular Silica Powder",
    jaName: "角形シリカ粉末",
    tagline: "고강도·고내마모의 각상 실리카 — 산업 전반의 표준 필러",
    enTagline: "High Strength · High Wear Resistance — Industry-Standard Angular Silica Filler",
    jaTagline: "高強度・高耐摩耗の角形シリカ — 産業全般の標準フィラー",
    description:
      "각상 실리카 분말은 고순도 SiO₂를 정밀 분쇄한 각진 형태의 무기 분체 필러로, 뛰어난 기계적 강도와 내마모성, 우수한 절연 특성을 제공합니다. 용융형(SL-RG)과 결정형(SL-JG) 2종으로 공급되며 EMC, 산업 도료, 접착제, 고무 보강, 인조 대리석, 전기 절연재 등 다양한 산업에서 표준 필러로 사용됩니다.",
    enDescription:
      "Angular Silica Powder is an angular inorganic filler produced by precision milling of high-purity SiO₂. It provides outstanding mechanical strength, wear resistance and excellent insulation. Supplied as fused SL-RG and crystalline SL-JG grades, it is used across broad industries — EMC, industrial coatings, adhesives, rubber reinforcement, engineered stone and electrical insulation.",
    jaDescription:
      "角形シリカ粉末は高純度SiO₂を精密粉砕した角状の無機フィラーで、優れた機械的強度・耐摩耗性・絶縁特性を提供します。溶融質(SL-RG)および結晶質(SL-JG)の2種で供給され、EMC・産業塗料・接着剤・ゴム補強・人造大理石・電気絶縁材など幅広い産業で標準フィラーとして使用されます。",
    image: angularImg,
    category: "advanced-series",
    features: [
      { title: "💎 고강도·고내마모", desc: "각진 입자 구조로 복합재 기계적 물성 극대화", enTitle: "💎 High Strength & Wear Resistance", jaTitle: "💎 高強度・高耐摩耗", enDesc: "Angular structure maximizes mechanical properties of composites", jaDesc: "角状構造で複合材の機械的物性を極大化" },
      { title: "🔧 2종 그레이드", desc: "용융형(SL-RG) · 결정형(SL-JG) 선택 가능", enTitle: "🔧 Dual Grade Lineup", jaTitle: "🔧 2種グレード", enDesc: "Choice of fused SL-RG and crystalline SL-JG", jaDesc: "溶融質(SL-RG)・結晶質(SL-JG)の選択が可能" },
      { title: "🧪 고순도 SiO₂ 98.0 ~ 99.95%", desc: "저철·저알칼리 관리로 절연 신뢰성 확보", enTitle: "🧪 High-Purity SiO₂ 98.0–99.95%", jaTitle: "🧪 高純度SiO₂ 98.0~99.95%", enDesc: "Low-iron/low-alkali control ensures insulation reliability", jaDesc: "低鉄・低アルカリ管理で絶縁信頼性を確保" },
      { title: "⚙️ 광범위 입도", desc: "D50 1 ~ 45 µm 맞춤 생산 가능", enTitle: "⚙️ Wide PSD Range", jaTitle: "⚙️ 広範な粒度", enDesc: "Custom D50 from 1 to 45 µm available", jaDesc: "D50 1~45 µm カスタム生産可能" },
      { title: "💰 경제적 가격", desc: "구상 대비 낮은 원가의 표준 필러", enTitle: "💰 Cost-Effective", jaTitle: "💰 経済的価格", enDesc: "Standard filler with lower cost than spherical grades", jaDesc: "球状品対比低コストの標準フィラー" },
      { title: "🔥 열적 안정성", desc: "고온 공정에서도 안정적 물성 유지", enTitle: "🔥 Thermal Stability", jaTitle: "🔥 熱的安定性", enDesc: "Maintains properties under high-temperature processes", jaDesc: "高温工程でも安定した物性を維持" },
    ],
    specs: [
      { label: "외관", value: "백색 각상 분말", enValue: "White angular powder", jaValue: "白色角形粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂ 순도", value: "99.0 ~ 99.95 % (SL-RG) / 98.0 ~ 99.9 % (SL-JG)", enValue: "99.0–99.95 % (SL-RG) / 98.0–99.9 % (SL-JG)", jaValue: "99.0~99.95 % (SL-RG) / 98.0~99.9 % (SL-JG)", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
      { label: "형상", value: "각상 (Angular)", enValue: "Angular", jaValue: "角形 (Angular)", enLabel: "Shape", jaLabel: "形状" },
      { label: "팽창계수 / PH (SL-RG)", value: "0.5×10⁻⁶ / 5 ~ 8", enValue: "0.5×10⁻⁶ / 5–8", jaValue: "0.5×10⁻⁶ / 5~8", enLabel: "Expansion / PH (SL-RG)", jaLabel: "膨張係数 / PH (SL-RG)" },
      { label: "백도 / 모스경도 (SL-JG)", value: "90 이상 / 7", enValue: "90 Min / 7", jaValue: "90以上 / 7", enLabel: "Whiteness / Mohs (SL-JG)", jaLabel: "白度 / モース硬度 (SL-JG)" },
      { label: "평균 입도 D50", value: "1 ~ 50 µm (맞춤)", enValue: "1–50 µm (customizable)", jaValue: "1~50 µm (カスタム)", enLabel: "Mean D50", jaLabel: "平均粒度 D50" },
      { label: "특성", value: "저 Na⁺·Cl⁻·E/C · 저열팽창 · 안정적 기계 물성", enValue: "Low Na⁺/Cl⁻/E/C · low CTE · stable mechanical performance", jaValue: "低Na⁺・Cl⁻・E/C · 低熱膨張 · 安定した機械物性", enLabel: "Features", jaLabel: "特性" },
      { label: "포장", value: "20 kg 지대 · 500 kg 벌크백 · OEM", enValue: "20 kg bag · 500 kg bulk · OEM", jaValue: "20 kg 紙袋 · 500 kg バルク · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "타입", en: "Type", ja: "タイプ" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-RG", slug: "sl-rg", spec: "용융형 각상", enSpec: "Fused Angular", jaSpec: "溶融質 角形", name: "SL-RG 용융형 각상 실리카 분말", enName: "SL-RG · Fused Angular Silica Powder", jaName: "SL-RG 溶融質角形シリカ粉末" },
      { code: "SL-JG", slug: "sl-jg", spec: "결정형 각상", enSpec: "Crystalline Angular", jaSpec: "結晶質 角形", name: "SL-JG 결정형 각상 실리카 분말", enName: "SL-JG · Crystalline Angular Silica Powder", jaName: "SL-JG 結晶質角形シリカ粉末" },
    ],
    applications: ["EMC / 봉지재", "산업 도료", "접착제 · 실란트", "고무 보강", "인조 대리석", "전기 절연재"],
  },
  {
    slug: "low-radiation-silica-powder",
    name: "저방사선 실리카 분말",
    enName: "Low-Alpha Silica Powder",
    jaName: "低α線シリカ粉末",
    tagline: "α선 ≤ 0.001 cph/cm² — 첨단 메모리·HBM·AI 반도체용 저방사선 실리카",
    enTagline: "α-Emission ≤ 0.001 cph/cm² — Low-Alpha Silica for Advanced Memory, HBM and AI Semiconductors",
    jaTagline: "α線 ≤ 0.001 cph/cm² — 先端メモリ・HBM・AI半導体用低α線シリカ",
    description:
      "저방사선 실리카 분말은 우라늄(U)·토륨(Th) 등 방사성 불순물을 극한까지 제거하여 α선 방사량을 0.001 cph/cm² 이하로 관리한 초고순도 SiO₂ 필러입니다. HBM, DDR5, 어드밴스드 패키징 등 소프트 에러에 극도로 민감한 첨단 메모리 반도체 EMC·언더필의 필수 소재이며, 결정형(SL-CL)과 용융형(SL-FL) 을 기본으로 하여 상세 맞춤 가공 공급 합니다.",
    enDescription:
      "Low-Alpha Silica Powder is an ultra-high-purity SiO₂ filler in which radioactive impurities (U, Th) have been reduced to the ultimate level, keeping α-emission ≤ 0.001 cph/cm². It is an essential material for EMC and underfill of soft-error-sensitive advanced memory devices such as HBM, DDR5 and advanced packaging. Supplied as crystalline SL-CL and fused SL-FL grades.",
    jaDescription:
      "低α線シリカ粉末は、ウラン(U)・トリウム(Th)などの放射性不純物を極限まで除去し、α線放射量を0.001 cph/cm²以下に管理した超高純度SiO₂フィラーです。HBM・DDR5・アドバンストパッケージングなどソフトエラーに極めて敏感な先端メモリ半導体のEMC・アンダーフィルの必須素材で、結晶質(SL-CL)・溶融質(SL-FL)の2種で供給されます。",
    image: lowRadImg,
    category: "advanced-series",
    features: [
      { title: "☢️ 초저 α선 방사량", desc: "≤ 0.001 cph/cm² — 소프트 에러 원천 차단", enTitle: "☢️ Ultra-Low α-Emission", jaTitle: "☢️ 超低α線放射量", enDesc: "≤ 0.001 cph/cm² — eliminates soft errors at the source", jaDesc: "≤ 0.001 cph/cm² — ソフトエラーを源から遮断" },
      { title: "🧬 U/Th 극미량 관리", desc: "우라늄·토륨 ppb 단위 정밀 제어", enTitle: "🧬 U/Th ppb-Level Control", jaTitle: "🧬 U/Th 極微量管理", enDesc: "Uranium/Thorium controlled at ppb level", jaDesc: "ウラン・トリウムをppb単位で精密制御" },
      { title: "💾 HBM/AI 반도체 대응", desc: "HBM3E, DDR5, AP, 고집적 메모리 EMC용 표준", enTitle: "💾 HBM/AI Semiconductor Ready", jaTitle: "💾 HBM/AI半導体対応", enDesc: "Standard for HBM3E, DDR5, AP and high-density memory EMC", jaDesc: "HBM3E、DDR5、AP、高集積メモリEMC用の標準" },
      { title: "🔧 2종 그레이드", desc: "결정형(SL-CL) · 용융형(SL-FL) 선택 가능", enTitle: "🔧 Dual Grade", jaTitle: "🔧 2種グレード", enDesc: "Crystalline SL-CL and fused SL-FL grades available", jaDesc: "結晶質(SL-CL)・溶融質(SL-FL)の選択が可能" },
      { title: "🧪 고순도 SiO₂", desc: "98.0 ~ 99.95 % (SL-CL 결정형 / SL-FL 용융형)", enTitle: "🧪 High-Purity SiO₂", jaTitle: "🧪 高純度SiO₂", enDesc: "98.0–99.95 % (SL-CL crystalline / SL-FL fused)", jaDesc: "98.0~99.95 % (SL-CL 結晶質 / SL-FL 溶融質)" },
      { title: "📐 정밀 입도", desc: "D50 1 ~ 30 µm 맞춤 공급", enTitle: "📐 Precision PSD", jaTitle: "📐 精密粒度", enDesc: "Customizable D50 1–30 µm", jaDesc: "D50 1~30 µmカスタム供給" },
    ],
    specs: [
      { label: "외관", value: "백색 미세 분말", enValue: "White fine powder", jaValue: "白色微粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂ 순도", value: "98.0 ~ 99.9 % (SL-CL) / 99.0 ~ 99.95 % (SL-FL)", enValue: "98.0–99.9 % (SL-CL) / 99.0–99.95 % (SL-FL)", jaValue: "98.0~99.9 % (SL-CL) / 99.0~99.95 % (SL-FL)", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
      { label: "백도 / 모스경도 (SL-CL)", value: "90 이상 / 7", enValue: "90 Min / 7", jaValue: "90以上 / 7", enLabel: "Whiteness / Mohs (SL-CL)", jaLabel: "白度 / モース硬度 (SL-CL)" },
      { label: "백도 / PH (SL-FL)", value: "90 이상 / 5 ~ 8", enValue: "90 Min / 5–8", jaValue: "90以上 / 5~8", enLabel: "Whiteness / PH (SL-FL)", jaLabel: "白度 / PH (SL-FL)" },
      { label: "α선 방사량", value: "저방사선(Low-α) 관리", enValue: "Low-α controlled", jaValue: "低α線管理", enLabel: "α-Emission", jaLabel: "α線放射量" },
      { label: "평균 입도 D50", value: "1 ~ 30 µm (맞춤)", enValue: "1–30 µm (customizable)", jaValue: "1~30 µm (カスタム)", enLabel: "Mean D50", jaLabel: "平均粒度 D50" },
      { label: "포장", value: "10 / 20 kg 지대 · OEM", enValue: "10 / 20 kg bag · OEM", jaValue: "10 / 20 kg 紙袋 · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "타입", en: "Type", ja: "タイプ" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-CL", slug: "sl-cl", spec: "저방사선 결정형", enSpec: "Low-Alpha Crystalline", jaSpec: "低α線 結晶質", name: "SL-CL 저방사선 결정형 실리카 분말", enName: "SL-CL · Low-Alpha Crystalline Silica Powder", jaName: "SL-CL 低α線結晶質シリカ粉末" },
      { code: "SL-FL", slug: "sl-fl", spec: "저방사선 용융형", enSpec: "Low-Alpha Fused", jaSpec: "低α線 溶融質", name: "SL-FL 저방사선 용융형 실리카 분말", enName: "SL-FL · Low-Alpha Fused Silica Powder", jaName: "SL-FL 低α線溶融質シリカ粉末" },
    ],
    applications: ["HBM / DDR5", "AI 반도체 EMC", "언더필 / 봉지재", "어드밴스드 패키징"],
  },
  {
    slug: "surface-modified-silica-powder",
    name: "표면개질 실리카 분말",
    enName: "Surface-Modified Silica Powder",
    jaName: "表面改質シリカ粉末",
    tagline: "실란 커플링 표면개질로 수지 친화성·분산성 극대화",
    enTagline: "Silane-Coupling Surface Modification for Maximum Resin Compatibility and Dispersion",
    jaTagline: "シランカップリング表面改質で樹脂親和性・分散性を極大化",
    description:
      "표면개질 실리카 분말은 SiO₂ 표면에 실란 커플링제(에폭시 실란 등)를 화학적으로 결합시켜 수지와의 친화성, 분산성, 계면 접착력을 획기적으로 향상시킨 기능성 필러입니다. 활성 결정질 실리카와 활성 용융 실리카를 기준으로 표준모델 SL-HJG와 SL-HRG를 기준으로 입도와 순도 등은 고객사의 요구에 대응하는 등급으로 공급되며, 반도체 EMC·언더필, 에폭시·페놀·실리콘·아크릴 등 다양한 수지 매트릭스에 최적화됩니다.",
    enDescription:
      "Surface-Modified Silica Powder is a functional filler in which epoxy-silane coupling agent is chemically bonded to the SiO₂ surface, dramatically improving resin compatibility, dispersion and interfacial adhesion. Based on active crystalline silica and active fused silica, with standard models SL-HJG and SL-HRG as the baseline, grades matching particle size, purity and other requirements are supplied to meet customer needs — optimized for semiconductor EMC/underfill and epoxy, phenolic, silicone and acrylic resin matrices.",
    jaDescription:
      "表面改質シリカ粉末は、SiO₂表面にシランカップリング剤(エポキシシラン)を化学結合させ、樹脂との親和性・分散性・界面接着力を飛躍的に向上させた機能性フィラーです。活性結晶質シリカと活性溶融シリカを基準とし、標準モデルSL-HJG・SL-HRGを基準に粒度や純度などは顧客の要求に応じたグレードで供給され、半導体EMC・アンダーフィル、エポキシ・フェノール・シリコーン・アクリルなど多様な樹脂マトリックスに最適化されます。",
    image: surfaceModImg,
    category: "advanced-series",
    features: [
      { title: "🧬 실란 커플링 표면개질", desc: "에폭시·아미노·비닐·메타크릴 등 맞춤 개질", enTitle: "🧬 Silane Coupling Surface Modification", jaTitle: "🧬 シランカップリング表面改質", enDesc: "Custom modification with epoxy, amino, vinyl, methacryl and more", jaDesc: "エポキシ・アミノ・ビニル・メタクリルなどカスタム改質" },
      { title: "🔗 강력한 계면 접착", desc: "수지-필러 계면 결합력 강화로 기계적 물성 향상", enTitle: "🔗 Strong Interfacial Adhesion", jaTitle: "🔗 強力な界面接着", enDesc: "Enhanced resin-filler bonding improves mechanical properties", jaDesc: "樹脂-フィラー界面結合力の強化で機械的物性が向上" },
      { title: "🌊 우수한 분산성", desc: "응집 최소화 및 균일 분산으로 가공성 향상", enTitle: "🌊 Excellent Dispersibility", jaTitle: "🌊 優れた分散性", enDesc: "Minimized agglomeration and uniform dispersion improve processability", jaDesc: "凝集を最小化し均一分散で加工性を向上" },
      { title: "💧 내수성·내습성", desc: "가수분해 억제로 장기 신뢰성 확보", enTitle: "💧 Water/Humidity Resistance", jaTitle: "💧 耐水性・耐湿性", enDesc: "Hydrolysis suppression ensures long-term reliability", jaDesc: "加水分解抑制で長期信頼性を確保" },
      { title: "🔧 2종 그레이드", desc: "결정형(SL-HJG) · 용융형(SL-HRG) 선택", enTitle: "🔧 Dual Grade", jaTitle: "🔧 2種グレード", enDesc: "Crystalline SL-HJG and fused SL-HRG", jaDesc: "結晶質(SL-HJG)・溶融質(SL-HRG)の選択" },
      { title: "⚙️ 맞춤 사양", desc: "커플링제 종류, 처리량, 입도 요구별 대응", enTitle: "⚙️ Custom Spec", jaTitle: "⚙️ カスタム仕様", enDesc: "Custom coupling agent type, loading and PSD", jaDesc: "カップリング剤種類・処理量・粒度要求別に対応" },
    ],
    specs: [
      { label: "외관", value: "백색 표면개질 분말", enValue: "White surface-modified powder", jaValue: "白色表面改質粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂ 순도", value: "≥ 99.5 %", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
      { label: "표면 처리제", value: "실란 커플링 (에폭시·아미노·비닐 등)", enValue: "Silane coupling (epoxy/amino/vinyl, etc.)", jaValue: "シランカップリング(エポキシ・アミノ・ビニル等)", enLabel: "Surface Treatment", jaLabel: "表面処理剤" },
      { label: "탄소 함량", value: "0.3 ~ 1.5 % (조정 가능)", enValue: "0.3–1.5 % (adjustable)", jaValue: "0.3~1.5 % (調整可能)", enLabel: "Carbon Content", jaLabel: "炭素含有量" },
      { label: "평균 입도 D50", value: "1 ~ 30 µm (맞춤)", enValue: "1–30 µm (customizable)", jaValue: "1~30 µm (カスタム)", enLabel: "Mean D50", jaLabel: "平均粒度 D50" },
      { label: "수분", value: "≤ 0.3 %", enLabel: "Moisture", jaLabel: "水分" },
      { label: "포장", value: "20 kg 지대 · OEM", enValue: "20 kg bag · OEM", jaValue: "20 kg 紙袋 · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "타입", en: "Type", ja: "タイプ" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-HJG", slug: "sl-hjg", spec: "표면개질 결정형 (Active Crystalline)", enSpec: "Surface-Modified Crystalline (Active Crystalline)", jaSpec: "表面改質 結晶質 (活性結晶)", name: "SL-HJG 표면개질 결정형 실리카 분말", enName: "SL-HJG · Surface-Modified Crystalline Silica Powder", jaName: "SL-HJG 表面改質 結晶質シリカ粉末" },
      { code: "SL-HRG", slug: "sl-hrg", spec: "표면개질 용융형 (Active Fused)", enSpec: "Surface-Modified Fused (Active Fused)", jaSpec: "表面改質 溶融質 (活性溶融)", name: "SL-HRG 표면개질 용융형 실리카 분말", enName: "SL-HRG · Surface-Modified Fused Silica Powder", jaName: "SL-HRG 表面改質 溶融質シリカ粉末" },
      { code: "SL-DRG07", slug: "sl-drg07", spec: "표준 등급 (에폭시 실란 표면처리)", enSpec: "Standard Grade (Epoxy-Silane Treated)", jaSpec: "標準グレード (エポキシシラン表面処理)", name: "SL-DRG07 표면개질 실리카 분말", enName: "SL-DRG07 · Surface-Modified Silica Powder", jaName: "SL-DRG07 表面改質シリカ粉末" },
      { code: "SL-DRG07-A", slug: "sl-drg07-a", spec: "고순도 등급 (에폭시 실란 표면처리)", enSpec: "High-Purity Grade (Epoxy-Silane Treated)", jaSpec: "高純度グレード (エポキシシラン表面処理)", name: "SL-DRG07-A 표면개질 실리카 분말", enName: "SL-DRG07-A · Surface-Modified Silica Powder", jaName: "SL-DRG07-A 表面改質シリカ粉末" },
    ],
    applications: ["에폭시 복합재", "실리콘 실란트", "고성능 접착제", "코팅 · 잉크"],
  },
  {
    slug: "silica-sand-granule",
    name: "실리카 분말 · 입자",
    enName: "Silica Powder & Granule",
    jaName: "シリカパウダー・粒",
    tagline: "고순도 결정·용융 석영사 — 유리·주조·연마·필터용 산업 표준 소재",
    enTagline: "High-Purity Crystalline & Fused Quartz Sand — Industrial Standard for Glass, Casting, Abrasives and Filtration",
    jaTagline: "高純度結晶・溶融石英砂 — ガラス・鋳造・研磨・フィルター用産業標準素材",
    description:
      "실리카 사 및 입자 시리즈는 고순도 석영을 선별·정제한 결정형 석영사(SL-CS), 초고온 용융을 거친 용융형 석영사(SL-FS), 그리고 반도체·첨단 패키징용 초고순도 미분 용융 실리카(SL-HF04)로 구성됩니다. SL-CS는 SiO₂ 98.0~99.9%의 결정 석영사로 유리 원료·정밀 주조·연마재·워터 필터·스포츠 표면재 등 광범위한 산업에 사용되며, SL-FS는 SiO₂ 99.0~99.99%·저열팽창(0.5×10⁻⁶)·우수한 내화학성을 바탕으로 고온 공정과 정밀 주조에 적합합니다. SL-HF04는 SiO₂ 99.96%·Fe₂O₃ ~12 ppm·D50 3.8µm의 초미분 비정질 용융 실리카로, 반도체 EMC·언더필·어드밴스드 패키징·CCL/PCB·5G 고주파 기판·고열전도 소재 등 최첨단 전자·반도체 분야에 최적화된 프리미엄 필러입니다. 세 라인업 모두 국내·중국 이원화 공급망을 통해 안정적으로 공급됩니다.",
    enDescription:
      "The Silica Powder & Granule series comprises crystalline quartz sand (SL-CS) purified from high-grade quartz, fused quartz sand (SL-FS) processed at ultra-high temperature, and ultra-high-purity micronized fused silica (SL-HF04) for semiconductor and advanced packaging use. SL-CS (SiO₂ 98.0–99.9%) serves a wide range of industries including glass raw material, precision casting, abrasives, water filtration and sports surfaces. SL-FS (SiO₂ 99.0–99.99%) offers low CTE (0.5×10⁻⁶) and excellent chemical resistance for high-temperature processes and precision casting. SL-HF04 is an ultra-fine amorphous fused silica (SiO₂ 99.96%, Fe₂O₃ ~12 ppm, D50 3.8 µm) — a premium filler optimized for semiconductor EMC, underfill, advanced packaging, CCL/PCB, 5G high-frequency substrates and high-thermal-conductivity materials. All three lineups are supplied through a stable dual Korea/China supply chain.",
    jaDescription:
      "シリカパウダー・粒シリーズは高純度石英を選別・精製した結晶質石英砂(SL-CS)、超高温溶融を経た溶融質石英砂(SL-FS)、そして半導体・先端パッケージ用の超高純度微粉溶融シリカ(SL-HF04)で構成されます。SL-CSはSiO₂ 98.0~99.9%の結晶石英砂で、ガラス原料・精密鋳造・研磨材・浄水フィルター・スポーツ表面材など幅広い産業に使用されます。SL-FSはSiO₂ 99.0~99.99%・低熱膨張(0.5×10⁻⁶)・優れた耐化学性を備え、高温工程や精密鋳造に適します。SL-HF04はSiO₂ 99.96%・Fe₂O₃ ~12 ppm・D50 3.8µmの超微粉非晶質溶融シリカで、半導体EMC・アンダーフィル・先端パッケージング・CCL/PCB・5G高周波基板・高熱伝導材料など最先端の電子・半導体分野に最適化されたプレミアムフィラーです。3つのラインアップはすべて韓国・中国二元化サプライチェーンで安定供給されます。",
    image: sandGranuleImg,
    category: "advanced-series",
    features: [
      { title: "🪨 결정·용융 2종 라인업", desc: "결정형 SL-CS · 용융형 SL-FS 선택 가능", enTitle: "🪨 Crystalline & Fused Lineup", jaTitle: "🪨 結晶・溶融 2種ラインアップ", enDesc: "Choice of crystalline SL-CS and fused SL-FS", jaDesc: "結晶質SL-CS・溶融質SL-FSの選択が可能" },
      { title: "🧪 고순도 SiO₂ 98.0 ~ 99.99%", desc: "결정 SL-CS 98.0~99.9% · 용융 SL-FS 99.0~99.99%", enTitle: "🧪 High Purity SiO₂ 98.0–99.99%", jaTitle: "🧪 高純度SiO₂ 98.0~99.99%", enDesc: "Crystalline SL-CS 98.0–99.9% · Fused SL-FS 99.0–99.99%", jaDesc: "結晶SL-CS 98.0~99.9% · 溶融SL-FS 99.0~99.99%" },
      { title: "📐 광범위 입도", desc: "SL-CS: 6-8/8-16/16-26/26-40/40-70/70-120 mesh · SL-FS: 0-60mm, 8-5mm, ..., 120F 등", enTitle: "📐 Wide Grain Size Range", jaTitle: "📐 広範な粒度", enDesc: "SL-CS: 6-8/8-16/16-26/26-40/40-70/70-120 mesh · SL-FS: 0-60mm to 120F", jaDesc: "SL-CS: 6-8~70-120 mesh · SL-FS: 0-60mmから120Fまで" },
      { title: "🛡️ 우수한 내마모성", desc: "모스경도 7 — 연마·워터필터 최적", enTitle: "🛡️ Excellent Wear Resistance", jaTitle: "🛡️ 優れた耐摩耗性", enDesc: "Mohs 7 — optimal for abrasives and water filtration", jaDesc: "モース硬度7 — 研磨・浄水フィルターに最適" },
      { title: "🔥 고내열성 (SL-FS)", desc: "저열팽창(0.5×10⁻⁶) · 우수한 내화학성", enTitle: "🔥 High Heat Resistance (SL-FS)", jaTitle: "🔥 高耐熱性 (SL-FS)", enDesc: "Low CTE (0.5×10⁻⁶) with excellent chemical resistance", jaDesc: "低熱膨張(0.5×10⁻⁶) · 優れた耐化学性" },
      { title: "🌍 안정 공급", desc: "국내·중국 이원화 공급망으로 물량 안정성 확보", enTitle: "🌍 Stable Supply", jaTitle: "🌍 安定供給", enDesc: "Dual Korea/China supply chain ensures volume stability", jaDesc: "韓国・中国二元化サプライチェーンで数量の安定性を確保" },
    ],
    specs: [
      { label: "외관", value: "무색·백색 결정·용융 입자", enValue: "Colorless / white crystalline & fused granules", jaValue: "無色・白色 結晶・溶融粒子", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂ 순도", value: "98.0 ~ 99.9 % (SL-CS) / 99.0 ~ 99.99 % (SL-FS)", enValue: "98.0–99.9 % (SL-CS) / 99.0–99.99 % (SL-FS)", jaValue: "98.0~99.9 % (SL-CS) / 99.0~99.99 % (SL-FS)", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
      { label: "팽창계수 / PH (SL-FS)", value: "0.5×10⁻⁶ / 5 ~ 8", enValue: "0.5×10⁻⁶ / 5–8", jaValue: "0.5×10⁻⁶ / 5~8", enLabel: "Expansion / PH (SL-FS)", jaLabel: "膨張係数 / PH (SL-FS)" },
      { label: "입도 (SL-CS)", value: "6-8, 8-16, 16-26, 26-40, 40-70, 70-120 mesh 등", enValue: "6-8, 8-16, 16-26, 26-40, 40-70, 70-120 mesh, etc.", jaValue: "6-8, 8-16, 16-26, 26-40, 40-70, 70-120 mesh 等", enLabel: "Grain Size (SL-CS)", jaLabel: "粒度 (SL-CS)" },
      { label: "입도 (SL-FS)", value: "0-60mm, 8-5mm, 5-3mm, 3-1mm, 1-0mm, 1-0.5mm, 0.5-0.1mm, 4+10~-60+120 mesh, 120F 등", enValue: "0-60mm, 8-5mm, ..., 4+10~-60+120 mesh, 120F, etc.", jaValue: "0-60mm, 8-5mm, ..., 4+10~-60+120 mesh, 120F 等", enLabel: "Grain Size (SL-FS)", jaLabel: "粒度 (SL-FS)" },
      { label: "모스경도", value: "7", enLabel: "Mohs Hardness", jaLabel: "モース硬度" },
      { label: "포장", value: "25 kg 지대 · 1 톤 톤백 · OEM", enValue: "25 kg bag · 1-ton bag · OEM", jaValue: "25 kg 紙袋 · 1トンバッグ · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "타입", en: "Type", ja: "タイプ" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-CS", slug: "sl-cs", spec: "결정 석영사", enSpec: "Crystalline Quartz Sand", jaSpec: "結晶石英砂", name: "SL-CS 결정 석영사", enName: "SL-CS · Crystalline Quartz Sand", jaName: "SL-CS 結晶石英砂" },
      { code: "SL-FS", slug: "sl-fs", spec: "용융 석영사", enSpec: "Fused Quartz Sand", jaSpec: "溶融石英砂", name: "SL-FS 용융 석영사", enName: "SL-FS · Fused Quartz Sand", jaName: "SL-FS 溶融石英砂" },
      { code: "SL-HF04", slug: "sl-hf04", spec: "고순도 용융 실리카 분말 (SiO₂ 99.96% · D50 3.8µm)", enSpec: "Ultra-High-Purity Fused Silica Powder (SiO₂ 99.96% · D50 3.8 µm)", jaSpec: "高純度溶融シリカ粉末 (SiO₂ 99.96% · D50 3.8µm)", name: "SL-HF04 고순도 용융 실리카 분말", enName: "SL-HF04 · Ultra-High-Purity Fused Silica Powder", jaName: "SL-HF04 高純度溶融シリカ粉末" },
      { code: "SL-SPH-300", slug: "sl-sph-300", spec: "화학합성 나노구상 (D50 0.38µm · SiO₂ 99.98%)", enSpec: "Chemically Synthesized Nano-Spherical (D50 0.38 µm · SiO₂ 99.98%)", jaSpec: "化学合成ナノ球状 (D50 0.38µm · SiO₂ 99.98%)", name: "SL-SPH-300 고순도 나노구상실리카", enName: "SL-SPH-300 · Ultra-High-Purity Nano Spherical Silica", jaName: "SL-SPH-300 高純度ナノ球状シリカ" },
    ],
    applications: ["유리 원료", "정밀 주조", "연마재", "워터 필터", "스포츠 표면재"],
  },
  {
    slug: "lead-free-glass-powder",
    name: "무연유리분말",
    enName: "Lead-Free Glass Powder",
    jaName: "無鉛ガラス粉末",
    tagline: "친환경 무연 조성 · 저융점 봉착 유리 프릿 (SL-ZT)",
    enTagline: "Eco-Friendly Lead-Free Composition · Low-Melting Sealing Glass Frit (SL-ZT)",
    jaTagline: "環境配慮型 無鉛組成 · 低融点封着ガラスフリット (SL-ZT)",
    description:
      "SL-ZT 무연 유리 분말(Lead-Free Glass Powder) 시리즈는 환경 유해 물질인 납(Pb)을 완전히 배제하고, 친환경적인 조성으로 설계된 고순도 미세 유리 분말입니다. 본 제품은 기존 납계 유리 분말이 가지는 저온 소결성(低溫燒結性)과 우수한 유전 특성을 그대로 유지하면서도, RoHS, REACH 등 글로벌 환경 규제를 완벽하게 충족하는 친환경 대체 소재입니다.\n\n당사의 무연 유리 분말은 최첨단 용융-급냉 공정과 정밀 분쇄 기술을 통해 입도 분포가 균일하고, 비표면적이 일정하여 다양한 산업 현장에서 우수한 공정 안정성을 제공합니다. 특히, 유리 전이 온도(Tg)와 연화점(Sp)을 용도에 맞게 정밀 조절할 수 있어, 고온 공정이 필요한 전자 부품부터 정밀 코팅 재료까지 폭넓게 적용 가능합니다.",
    enDescription:
      "The SL-ZT Lead-Free Glass Powder series is a high-purity micro glass powder designed with an eco-friendly composition that completely eliminates lead (Pb), an environmentally harmful substance. While preserving the low-temperature sinterability and excellent dielectric properties of conventional lead-based glass powders, this product fully satisfies global environmental regulations such as RoHS and REACH as a green alternative material.\n\nOur lead-free glass powder is manufactured through state-of-the-art melting-quenching and precision grinding technologies, delivering uniform particle size distribution and consistent specific surface area for excellent process stability across diverse industrial sites. In particular, the glass transition temperature (Tg) and softening point (Sp) can be precisely tuned to the application, making it suitable for a wide range of uses from electronic components requiring high-temperature processes to precision coating materials.",
    jaDescription:
      "SL-ZT無鉛ガラス粉末シリーズは、環境有害物質である鉛(Pb)を完全に排除し、環境配慮型の組成で設計された高純度微細ガラス粉末です。本製品は、従来の鉛系ガラス粉末が持つ低温焼結性と優れた誘電特性をそのまま維持しながら、RoHS、REACHなどのグローバル環境規制を完全に満たす環境配慮型代替素材です。\n\n当社の無鉛ガラス粉末は、最先端の溶融・急冷工程と精密粉砕技術を通じて粒度分布が均一で、比表面積が一定であり、様々な産業現場で優れた工程安定性を提供します。特に、ガラス転移温度(Tg)と軟化点(Sp)を用途に合わせて精密調整できるため、高温工程が必要な電子部品から精密コーティング材料まで幅広く適用可能です。",
    image: leadFreeGlassImg,
    category: "advanced-series",
    features: [
      { title: "🌿 친환경 무연 조성", desc: "중금속 납(Pb)을 전혀 사용하지 않아 인체 유해성이 없으며, 폐기 시 환경 오염 부담이 극히 낮아 지속 가능한 그린 소재입니다.", enTitle: "🌿 Eco-Friendly Lead-Free Composition", jaTitle: "🌿 環境配慮型無鉛組成", enDesc: "Contains no lead or heavy metals, making it safe for human health and minimizing environmental burden after disposal as a sustainable green material.", jaDesc: "重金属である鉛(Pb)を全く使用しないため人体に無害であり、廃棄時の環境負荷も極めて低く、持続可能なグリーン素材です。" },
      { title: "🔥 우수한 저온 소결성", desc: "납계 제품과 대등한 수준의 낮은 녹는점(연화점)을 구현하여, 내열성이 취약한 기판이나 부품에도 손상 없이 접합 및 밀봉이 가능합니다.", enTitle: "🔥 Excellent Low-Temperature Sinterability", jaTitle: "🔥 優れた低温焼結性", enDesc: "Achieves a low melting/softening point comparable to lead-based products, enabling joint and sealing without thermal damage to heat-sensitive substrates or components.", jaDesc: "鉛系製品と同等レベルの低融点（軟化点）を実現し、耐熱性が低い基板や部品にも損傷を与えずに接合・封着できます。" },
      { title: "📐 정밀한 입도 제어", desc: "평균 입경(D50)을 3㎛ ~ 20㎛ 범위 내에서 사용자 요구 사양에 맞춰 맞춤 생산할 수 있으며, 좁은 입도 분포로 인해 도포(Printing) 또는 충진(Filling) 공정에서 균일한 두께와 높은 밀도를 보장합니다.", enTitle: "📐 Precise Particle Size Control", jaTitle: "📐 精密な粒度制御", enDesc: "The mean particle size (D50) can be customized from 3 µm to 20 µm to meet user requirements, and the narrow particle size distribution ensures uniform thickness and high density in printing or filling processes.", jaDesc: "平均粒径(D50)を3μm～20μmの範囲内でユーザーの要求仕様に合わせてカスタム生産でき、狭い粒度分布により印刷や充填工程で均一な厚みと高密度を保証します。" },
      { title: "🛡️ 뛰어난 내화학성 및 밀봉 특성", desc: "높은 유리 전이 온도(Tg)와 낮은 열팽창 계수(CTE)로 인해, 외부 수분 및 가스 침투를 효과적으로 차단하여 반도체, LED, 센서 등 고신뢰성 부품의 수명을 극대화합니다.", enTitle: "🛡️ Superior Chemical Resistance & Sealing Performance", jaTitle: "🛡️ 優れた耐化学性・封着特性", enDesc: "A high glass transition temperature (Tg) and low coefficient of thermal expansion (CTE) effectively block moisture and gas penetration, maximizing the lifetime of highly reliable components such as semiconductors, LEDs and sensors.", jaDesc: "高いガラス転移温度(Tg)と低い熱膨張係数(CTE)により、外部の水分やガス侵入を効果的に遮断し、半導体、LED、センサーなど高信頼性部品の寿命を最大化します。" },
      { title: "⚡ 우수한 절연성 및 유전 특성", desc: "전기적 절연성이 매우 뛰어나 고전압 또는 고주파 환경에서도 안정적인 성능을 발휘하여, 전자 패키징 소재로 최적입니다.", enTitle: "⚡ Excellent Insulation & Dielectric Properties", jaTitle: "⚡ 優れた絶縁性・誘電特性", enDesc: "Excellent electrical insulation delivers stable performance even in high-voltage or high-frequency environments, making it ideal for electronic packaging materials.", jaDesc: "電気的絶縁性に非常に優れ、高電圧・高周波環境でも安定した性能を発揮するため、電子パッケージング材料に最適です。" },
    ],
    specs: [
      { label: "외관", value: "미세 백색·담황색 분말", enValue: "Fine white / pale yellow powder", jaValue: "微細白色・淡黄色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "조성", value: "무연(Pb-Free) · Bi/Zn/B/Si 계", enValue: "Pb-Free · Bi/Zn/B/Si system", jaValue: "無鉛(Pb-Free) · Bi/Zn/B/Si系", enLabel: "Composition", jaLabel: "組成" },
      { label: "연화점(Ts)", value: "350 ~ 450 ℃", enLabel: "Softening Point (Ts)", jaLabel: "軟化点(Ts)" },
      { label: "봉착 온도", value: "400 ~ 550 ℃", enLabel: "Sealing Temperature", jaLabel: "封着温度" },
      { label: "열팽창계수 (CTE)", value: "6 ~ 11 ×10⁻⁶/℃ (조정 가능)", enValue: "6–11 ×10⁻⁶/℃ (adjustable)", jaValue: "6~11 ×10⁻⁶/℃ (調整可能)", enLabel: "CTE", jaLabel: "熱膨張係数 (CTE)" },
      { label: "평균 입도 D50", value: "3 ~ 20 µm (맞춤)", enValue: "3–20 µm (customizable)", jaValue: "3~20 µm (カスタム)", enLabel: "Mean D50", jaLabel: "平均粒度 D50" },
      { label: "납 함량 (Pb)", value: "≤ 100 ppm", enLabel: "Lead Content (Pb)", jaLabel: "鉛含有量 (Pb)" },
      { label: "포장", value: "5 / 10 kg 지대 · OEM", enValue: "5 / 10 kg bag · OEM", jaValue: "5 / 10 kg 紙袋 · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "타입", en: "Type", ja: "タイプ" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-ZT", slug: "sl-zt", spec: "무연 봉착 유리 프릿", enSpec: "Lead-Free Sealing Glass Frit", jaSpec: "無鉛封着ガラスフリット", name: "SL-ZT 무연 봉착 유리 프릿", enName: "SL-ZT · Lead-Free Sealing Glass Frit", jaName: "SL-ZT 無鉛封着ガラスフリット" },
    ],
    applications: ["전자 부품 봉착", "디스플레이", "태양전지", "세라믹 · 금속 봉착"],
  },
];

productCatalog.push(...advSeriesProducts);

// ============= Generate child ProductDetail entries for each SL sub-model =============
// Non-활성 sub-models inherit features/specs/applications from parent; 활성 (SL-DRG07/-A) get PDF-specific data.
const surfaceModelOverrides: Record<string, Partial<ProductDetail>> = {
  "sl-drg07": {
    tagline: "SiO₂ ≥99.7% · D50 6-9μm · 에폭시 실란 표면처리 표준 등급",
    enTagline: "SiO₂ ≥99.7% · D50 6–9 µm · Standard Grade with Epoxy-Silane Surface Treatment",
    jaTagline: "SiO₂ ≥99.7% · D50 6-9μm · エポキシシラン表面処理 標準グレード",
    description: "SL-DRG07은 정밀한 입도 분포와 엄격한 화학적 순도 관리를 통해 반도체, 세라믹 및 첨단 소재 산업의 공정 효율성을 극대화하는 고순도 표면개질(에폭시 실란) 실리카입니다. SiO₂ ≥99.7%(대표치 99.75%)와 D50 6.6μm 수준의 균일한 입도 분포로 EMC·언더필·고신뢰성 접착제 배합에 최적화되어 있습니다.",
    enDescription: "SL-DRG07 is a high-purity epoxy-silane surface-modified silica engineered for semiconductor, ceramic and advanced material industries, delivering process efficiency through precise particle size distribution and rigorous chemical purity. With SiO₂ ≥99.7% (typical 99.75%) and uniform D50 around 6.6 µm, it is optimized for EMC, underfill and high-reliability adhesive formulations.",
    jaDescription: "SL-DRG07は精密な粒度分布と厳格な化学的純度管理により、半導体・セラミックス・先端素材産業の工程効率を最大化する高純度表面改質(エポキシシラン)シリカです。SiO₂ ≥99.7%(代表値99.75%)、D50 約6.6μmの均一な粒度分布で、EMC・アンダーフィル・高信頼性接着剤配合に最適化されています。",
    specs: [
      { label: "품번 (Code)", value: "SL-DRG07", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "외관", value: "백색 표면개질 분말", enValue: "White surface-modified powder", jaValue: "白色表面改質粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "표면 처리제", value: "에폭시 실란 (Epoxy silane)", enValue: "Epoxy silane", jaValue: "エポキシシラン (Epoxy silane)", enLabel: "Surface Treatment", jaLabel: "表面処理剤" },
      { label: "SiO₂", value: "≥ 99.7 % (대표치 99.75)", enValue: "≥ 99.7 % (typ. 99.75)", jaValue: "≥ 99.7 % (代表値 99.75)", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "Al₂O₃", value: "≤ 0.3 % (대표치 0.12)", enValue: "≤ 0.3 % (typ. 0.12)", jaValue: "≤ 0.3 % (代表値 0.12)", enLabel: "Al₂O₃", jaLabel: "Al₂O₃" },
      { label: "Fe₂O₃", value: "≤ 0.01 % (대표치 0.005)", enValue: "≤ 0.01 % (typ. 0.005)", jaValue: "≤ 0.01 % (代表値 0.005)", enLabel: "Fe₂O₃", jaLabel: "Fe₂O₃" },
      { label: "수용액 EC", value: "< 10 μs/cm (대표치 6.8)", enValue: "< 10 μs/cm (typ. 6.8)", jaValue: "< 10 μs/cm (代表値 6.8)", enLabel: "Aqueous EC", jaLabel: "水溶液 EC" },
      { label: "Cl⁻", value: "< 5 ppm (대표치 1.23)", enValue: "< 5 ppm (typ. 1.23)", jaValue: "< 5 ppm (代表値 1.23)", enLabel: "Cl⁻", jaLabel: "Cl⁻" },
      { label: "Na⁺", value: "< 5 ppm (대표치 1.26)", enValue: "< 5 ppm (typ. 1.26)", jaValue: "< 5 ppm (代表値 1.26)", enLabel: "Na⁺", jaLabel: "Na⁺" },
      { label: "D10", value: "1.796 μm", enLabel: "D10", jaLabel: "D10" },
      { label: "D50", value: "6.631 μm (범위 6-9)", enValue: "6.631 μm (range 6-9)", jaValue: "6.631 μm (範囲 6-9)", enLabel: "D50", jaLabel: "D50" },
      { label: "D90", value: "19.559 μm", enLabel: "D90", jaLabel: "D90" },
    ],
  },
  "sl-drg07-a": {
    tagline: "SiO₂ 대표치 99.80% · Fe₂O₃ 30ppm급 · 고순도 등급",
    enTagline: "SiO₂ typ. 99.80% · Fe₂O₃ 30 ppm-class · High-Purity Grade",
    jaTagline: "SiO₂ 代表値 99.80% · Fe₂O₃ 30ppm級 · 高純度グレード",
    description: "SL-DRG07-A는 SL-DRG07 대비 더욱 엄격한 순도 관리를 적용한 고순도 등급 표면개질(에폭시 실란) 실리카입니다. SiO₂ 대표치 99.80%, Fe₂O₃ 30 ppm급의 초저철분과 D50 6.4μm 수준의 미세 균일 입도로 HBM·AI 반도체용 EMC 및 고신뢰성 언더필에 대응합니다. 입도 분포는 고객 요구에 따라 조정 가능합니다.",
    enDescription: "SL-DRG07-A applies even stricter purity control than SL-DRG07 — a high-purity epoxy-silane surface-modified silica with SiO₂ typical 99.80%, Fe₂O₃ 30 ppm-class ultra-low iron and fine, uniform D50 of about 6.4 µm. Designed for HBM/AI semiconductor EMC and high-reliability underfill. Particle size distribution can be adjusted per customer requirement.",
    jaDescription: "SL-DRG07-AはSL-DRG07よりさらに厳格な純度管理を適用した高純度グレードの表面改質(エポキシシラン)シリカです。SiO₂代表値99.80%、Fe₂O₃ 30ppm級の超低鉄分、D50約6.4μmの微細均一粒度でHBM・AI半導体用EMCおよび高信頼性アンダーフィルに対応します。粒度分布はお客様のご要求に応じて調整可能です。",
    specs: [
      { label: "품번 (Code)", value: "SL-DRG07-A", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "외관", value: "백색 표면개질 분말", enValue: "White surface-modified powder", jaValue: "白色表面改質粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "표면 처리제", value: "에폭시 실란 (Epoxy silane)", enValue: "Epoxy silane", jaValue: "エポキシシラン (Epoxy silane)", enLabel: "Surface Treatment", jaLabel: "表面処理剤" },
      { label: "SiO₂", value: "≥ 99.7 % (대표치 99.80)", enValue: "≥ 99.7 % (typ. 99.80)", jaValue: "≥ 99.7 % (代表値 99.80)", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "Al₂O₃", value: "≤ 0.3 % (대표치 0.08)", enValue: "≤ 0.3 % (typ. 0.08)", jaValue: "≤ 0.3 % (代表値 0.08)", enLabel: "Al₂O₃", jaLabel: "Al₂O₃" },
      { label: "Fe₂O₃", value: "≤ 0.01 % (대표치 0.003)", enValue: "≤ 0.01 % (typ. 0.003)", jaValue: "≤ 0.01 % (代表値 0.003)", enLabel: "Fe₂O₃", jaLabel: "Fe₂O₃" },
      { label: "수용액 EC", value: "< 10 μs/cm (대표치 6.2)", enValue: "< 10 μs/cm (typ. 6.2)", jaValue: "< 10 μs/cm (代表値 6.2)", enLabel: "Aqueous EC", jaLabel: "水溶液 EC" },
      { label: "Cl⁻", value: "< 5 ppm (대표치 1.02)", enValue: "< 5 ppm (typ. 1.02)", jaValue: "< 5 ppm (代表値 1.02)", enLabel: "Cl⁻", jaLabel: "Cl⁻" },
      { label: "Na⁺", value: "< 5 ppm (대표치 1.13)", enValue: "< 5 ppm (typ. 1.13)", jaValue: "< 5 ppm (代表値 1.13)", enLabel: "Na⁺", jaLabel: "Na⁺" },
      { label: "D10", value: "1.788 μm", enLabel: "D10", jaLabel: "D10" },
      { label: "D50", value: "6.442 μm (범위 6-9)", enValue: "6.442 μm (range 6-9)", jaValue: "6.442 μm (範囲 6-9)", enLabel: "D50", jaLabel: "D50" },
      { label: "D90", value: "18.427 μm", enLabel: "D90", jaLabel: "D90" },
      { label: "비고", value: "입도 분포는 사용 환경·요구에 따라 조정 가능", enValue: "PSD adjustable per customer requirement", jaValue: "粒度分布はご要望に応じて調整可能", enLabel: "Remarks", jaLabel: "備考" },
    ],
  },
  // ===== Surface-Modified (Active) HJG / HRG series =====
  "sl-hjg": {
    tagline: "활성 결정형 실리카 (Active Crystalline) · 실란 커플링 표면개질 · D50 1~30μm",
    enTagline: "Active Crystalline Silica · Silane-Coupling Surface Modification · D50 1–30 µm",
    jaTagline: "活性結晶質シリカ · シランカップリング表面改質 · D50 1~30μm",
    description:
      "SL-HJG 시리즈 활성 결정형 실리카 분말은 결정형 실리카(SiO₂) 표면에 실란 커플링제를 화학적으로 결합시켜, 유기 수지 및 고분자 매트릭스와의 계면 친화성·분산성·접착력을 근본적으로 개선한 표면개질(활성) 필러입니다. 커플링제 종류와 처리량은 고객 배합/최종 제품의 특성에 맞추어 조정 가능하며, 저 Na⁺·Cl⁻·전기전도도(E/C) 관리와 균일한 초미세 입도를 통해 반도체·전자·정밀 세라믹 산업에서 안정된 공정성과 신뢰성을 제공합니다.\n\n주요 물성: SiO₂ 98.0~99.9%, 백도 90 이상, 모스경도 7, PH 5~8, 평균 입도 D50 1~30μm(맞춤). 실리카·유기 고분자 재료의 상용성을 향상시키고 이차 가공 제품의 물성 균일성을 개선하며, 충전 부피를 증가시켜 원가 절감과 기계적·전기적 특성 향상에 기여합니다.",
    enDescription:
      "SL-HJG series Active Crystalline Silica Powder is a surface-modified (active) filler in which a silane coupling agent is chemically bonded to the surface of crystalline SiO₂ — fundamentally improving interfacial compatibility, dispersion and adhesion with organic resins and polymer matrices. Coupling-agent type and loading are adjusted per the customer's formulation. Together with low Na⁺/Cl⁻/EC control and uniform ultra-fine particle size, it delivers stable processability and reliability across semiconductor, electronics and precision ceramics.\n\nKey properties: SiO₂ 98.0–99.9%, whiteness 90 min, Mohs 7, PH 5–8, D50 1–30 µm (customizable). Effectively improves the compatibility of silica with organic polymer materials, improves the performance uniformity of downstream products, increases filling volume, reduces cost and improves mechanical/electrical performance.",
    jaDescription:
      "SL-HJGシリーズ活性結晶質シリカ粉末は、結晶質シリカ(SiO₂)表面にシランカップリング剤を化学結合させ、有機樹脂・高分子マトリクスとの界面親和性・分散性・接着力を根本から改善した表面改質(活性)フィラーです。カップリング剤の種類・処理量はお客様の配合/最終製品の特性に合わせて調整可能で、低Na⁺・Cl⁻・電気伝導度(E/C)管理と均一な超微細粒度により、半導体・電子・精密セラミックス分野で安定した工程性と信頼性を提供します。\n\n主要物性: SiO₂ 98.0~99.9%、白度90以上、モース硬度7、PH 5~8、平均粒度 D50 1~30μm(カスタム)。シリカと有機高分子材料の相容性を向上させ、二次加工製品の物性均一性を改善し、充填体積を増加させることでコスト低減と機械的・電気的特性の向上に寄与します。",
    specs: [
      { label: "품번 (Code)", value: "SL-HJG", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "형태", value: "활성 결정형 (Active Crystalline)", enValue: "Active Crystalline", jaValue: "活性結晶質 (Active Crystalline)", enLabel: "Type", jaLabel: "形態" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂", value: "98.0 ~ 99.9 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "백도", value: "90 이상", enValue: "90 Min", jaValue: "90以上", enLabel: "Whiteness", jaLabel: "白度" },
      { label: "모스경도", value: "7", enLabel: "Mohs Hardness", jaLabel: "モース硬度" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "D50 (평균 입도)", value: "1 ~ 30 μm (맞춤)", enValue: "1–30 µm (customizable)", jaValue: "1~30 μm (カスタム)", enLabel: "D50 (Mean PSD)", jaLabel: "D50 (平均粒度)" },
      { label: "표면 처리제", value: "실란 커플링 (고객 배합에 맞춰 조정)", enValue: "Silane coupling (adjusted per customer formula)", jaValue: "シランカップリング (お客様の配合に合わせ調整)", enLabel: "Surface Treatment", jaLabel: "表面処理剤" },
      { label: "특성", value: "저 Na⁺·Cl⁻·E/C, 우수한 수지 친화성·분산성", enValue: "Low Na⁺/Cl⁻/E/C, excellent resin compatibility and dispersion", jaValue: "低Na⁺・Cl⁻・E/C, 優れた樹脂親和性・分散性", enLabel: "Features", jaLabel: "特性" },
    ],
    applications: [
      "에폭시 몰딩 컴파운드 (EMC)",
      "동박 적층판 (CCL) · 인쇄 회로 기판 (PCB)",
      "집적 회로 (IC) 봉지·언더필",
      "전자 포팅 컴파운드 · 에폭시 캐스팅",
      "열 계면 재료 (TIM)",
      "전기 절연 부품 · 접착제",
      "도료 · 코팅 · 잉크",
      "허니컴 세라믹 · 항공 우주 · 실리콘 산업",
    ],
  },
  "sl-hrg": {
    tagline: "활성 용융형 실리카 (Active Fused) · 실란 커플링 표면개질 · D50 1~30μm",
    enTagline: "Active Fused Silica · Silane-Coupling Surface Modification · D50 1–30 µm",
    jaTagline: "活性溶融質シリカ · シランカップリング表面改質 · D50 1~30μm",
    description:
      "SL-HRG 시리즈 활성 용융형 실리카 분말은 고순도 용융 실리카(SiO₂) 표면에 실란 커플링제를 화학적으로 결합시켜, 유기 수지·고분자와의 계면 접착력·분산성을 극대화한 표면개질(활성) 필러입니다. 커플링제의 종류와 처리량은 고객의 배합·최종 제품 요구에 따라 조정이 가능합니다. 저열팽창(0.5×10⁻⁶)·저열전도·저 Na⁺/Cl⁻/전기전도도(E/C) 특성과 함께 우수한 기계·화학적 성능을 동시에 제공하여, 반도체 EMC·언더필·고신뢰성 봉지재·5G 고주파 기판 등 최첨단 전자 부품용 필러로 사용됩니다.\n\n주요 물성: SiO₂ 98.0~99.95%, 외관 백색 분말, PH 5~8, 평균 입도 D50 1~30μm(맞춤). 실리카와 유기 고분자 재료의 상용성을 개선하고 하류 제품의 성능을 향상시키며, 충전 부피를 늘려 원가를 절감함과 동시에 기계적·전기적 특성을 향상시킵니다.",
    enDescription:
      "SL-HRG series Active Fused Silica Powder is a surface-modified (active) filler in which a silane coupling agent is chemically bonded to the surface of high-purity fused SiO₂ — maximizing interfacial adhesion and dispersion with organic resins and polymers. Coupling-agent type and loading are adjusted per the customer's formulation and end-product requirements. Combined with low CTE (0.5×10⁻⁶), low thermal conductivity, low Na⁺/Cl⁻/EC and excellent mechanical and chemical performance, it serves as a filler for semiconductor EMC, underfill, high-reliability encapsulants, 5G high-frequency substrates and other advanced electronic components.\n\nKey properties: SiO₂ 98.0–99.95%, white powder, PH 5–8, D50 1–30 µm (customizable). Effectively improves the compatibility of silica with organic polymer materials, improves the performance of downstream products, increases filling volume, reduces cost and improves mechanical/electrical performance.",
    jaDescription:
      "SL-HRGシリーズ活性溶融質シリカ粉末は、高純度溶融シリカ(SiO₂)表面にシランカップリング剤を化学結合させ、有機樹脂・高分子との界面接着力・分散性を最大化した表面改質(活性)フィラーです。カップリング剤の種類と処理量はお客様の配合・最終製品の要求に応じて調整可能です。低熱膨張(0.5×10⁻⁶)・低熱伝導・低Na⁺/Cl⁻/電気伝導度(E/C)特性と優れた機械的・化学的性能を兼ね備え、半導体EMC・アンダーフィル・高信頼性封止材・5G高周波基板など先端電子部品用フィラーとして使用されます。\n\n主要物性: SiO₂ 98.0~99.95%、外観 白色粉末、PH 5~8、平均粒度 D50 1~30μm(カスタム)。シリカと有機高分子材料の相容性を改善し、下流製品の性能を向上させ、充填体積を増加させることでコスト低減と機械的・電気的特性の向上を実現します。",
    specs: [
      { label: "품번 (Code)", value: "SL-HRG", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "형태", value: "활성 용융형 (Active Fused)", enValue: "Active Fused", jaValue: "活性溶融質 (Active Fused)", enLabel: "Type", jaLabel: "形態" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂", value: "98.0 ~ 99.95 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "열팽창계수 (CTE)", value: "0.5 × 10⁻⁶", enLabel: "CTE", jaLabel: "熱膨張係数 (CTE)" },
      { label: "D50 (평균 입도)", value: "1 ~ 30 μm (맞춤)", enValue: "1–30 µm (customizable)", jaValue: "1~30 μm (カスタム)", enLabel: "D50 (Mean PSD)", jaLabel: "D50 (平均粒度)" },
      { label: "표면 처리제", value: "실란 커플링 (고객 배합에 맞춰 조정)", enValue: "Silane coupling (adjusted per customer formula)", jaValue: "シランカップリング (お客様の配合に合わせ調整)", enLabel: "Surface Treatment", jaLabel: "表面処理剤" },
      { label: "특성", value: "저 Na⁺·Cl⁻·E/C, 저 열팽창·저 열전도, 우수한 기계·화학 성능", enValue: "Low Na⁺/Cl⁻/E/C, low CTE & thermal conductivity, excellent mechanical/chemical performance", jaValue: "低Na⁺・Cl⁻・E/C, 低熱膨張・低熱伝導, 優れた機械・化学性能", enLabel: "Features", jaLabel: "特性" },
    ],
    applications: [
      "에폭시 몰딩 컴파운드 (EMC)",
      "동박 적층판 (CCL) · 인쇄 회로 기판 (PCB)",
      "집적 회로 (IC) 봉지·언더필",
      "전자 포팅 컴파운드 · 에폭시 캐스팅",
      "열 계면 재료 (TIM) · 고열전도 소재",
      "전기 절연 부품 · 고성능 접착제",
      "도료 · 코팅 · 잉크",
      "허니컴 세라믹 · 항공 우주 · 실리콘 산업",
    ],
  },
  // ===== Spherical =====
  "sl-qg": {
    tagline: "SiO₂ 99.0 ~ 99.95% · D50 0.1 ~ 40μm · 화염 용융 일반 구상",
    enTagline: "SiO₂ 99.0–99.95% · D50 0.1–40 µm · Standard Flame-Fusion Spherical",
    jaTagline: "SiO₂ 99.0~99.95% · D50 0.1~40μm · 火炎溶融 一般球状",
    description: "SL-QG 시리즈 구상 실리카 분말은 고순도 이산화규소를 원료로 화염 용융법·금속 실리콘 폭연법·화학 합성법을 통해 가공된 구상 SiO₂ 분말 소재입니다. 저비표면적, 우수한 유동성, 저응력이 특징입니다.",
    enDescription: "SL-QG series Spherical Silica Powder is a spherical SiO₂ powder produced from high-purity silica by flame fusion, metallic silicon deflagration or chemical synthesis. Featured by small specific surface area, good liquidity and low stress.",
    jaDescription: "SL-QGシリーズ球状シリカ粉末は、高純度シリカを原料に火炎溶融法・金属Si爆燃法・化学合成法で加工した球状SiO₂粉末素材です。小比表面積・優れた流動性・低応力が特徴です。",
    specs: [
      { label: "품번 (Code)", value: "SL-QG", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "99.0 ~ 99.95 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "형상", value: "구상(Spherical)", enValue: "Spherical", jaValue: "球形(Spherical)", enLabel: "Morphology", jaLabel: "形状" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "D50 (입도)", value: "0.1 ~ 40 μm (맞춤)", enValue: "0.1–40 µm (customizable)", jaValue: "0.1~40 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
      { label: "특성", value: "저 Na⁺·Cl⁻·E/C, 고구상도, 저응력", enValue: "Low Na⁺/Cl⁻/E/C · high sphericity · low stress", jaValue: "低Na⁺・Cl⁻・E/C · 高球形度 · 低応力", enLabel: "Features", jaLabel: "特性" },
    ],
  },
  "sl-qg-l": {
    tagline: "SiO₂ 99.0 ~ 99.95% · D50 1 ~ 30μm · 저방사선(Low-α) 구상",
    enTagline: "SiO₂ 99.0–99.95% · D50 1–30 µm · Low-α Spherical",
    jaTagline: "SiO₂ 99.0~99.95% · D50 1~30μm · 低α線 球状",
    description: "SL-QG-L 시리즈 저방사선 구상 실리카 분말은 고순도·저방사성 이산화규소를 원료로 화염 용융법으로 가공된 구상 SiO₂ 소재입니다. 방사성 원소 함량이 낮아 첨단 메모리 반도체 EMC용으로 사용됩니다.",
    enDescription: "SL-QG-L series Low-α Spherical Silica Powder is made from high-purity, low-radiation silica by flame-fusion into spherical SiO₂ powder. Its low radioactive element content makes it suitable for advanced memory semiconductor EMC.",
    jaDescription: "SL-QG-Lシリーズ低α線球状シリカ粉末は、高純度・低放射性シリカを原料に火炎溶融法で加工した球状SiO₂素材です。放射性元素含有量が低く、先端メモリ半導体EMC用途に使用されます。",
    specs: [
      { label: "품번 (Code)", value: "SL-QG-L", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "99.0 ~ 99.95 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "형상", value: "구상(Spherical)", enValue: "Spherical", jaValue: "球形(Spherical)", enLabel: "Morphology", jaLabel: "形状" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "D50 (입도)", value: "1 ~ 30 μm (맞춤)", enValue: "1–30 µm (customizable)", jaValue: "1~30 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
      { label: "특성", value: "저 방사성 원소, 저 Na⁺·Cl⁻·E/C, 고구상도", enValue: "Low radioactive elements · low Na⁺/Cl⁻/E/C · high sphericity", jaValue: "低放射性元素 · 低Na⁺・Cl⁻・E/C · 高球形度", enLabel: "Features", jaLabel: "特性" },
    ],
  },
  // ===== Round Corner =====
  "sl-yjg": {
    tagline: "SiO₂ 98.0 ~ 99.9% · D50 10 ~ 50μm · 결정형 모서리 라운드",
    enTagline: "SiO₂ 98.0–99.9% · D50 10–50 µm · Crystalline Round-Corner",
    jaTagline: "SiO₂ 98.0~99.9% · D50 10~50μm · 結晶質 丸角",
    description: "SL-YJG 시리즈 결정형 모서리 라운드 실리카 분말은 고순도 결정형 이산화규소 분말을 원료로 정형 설비로 가공하여 입자 표면을 더욱 매끄럽고 유동성을 향상시킨 소재입니다.",
    enDescription: "SL-YJG series Round-Corner Crystalline Silica Powder is made from high-purity crystalline silica powder and processed by shaping equipment to make particle surfaces rounder and flowability better.",
    jaDescription: "SL-YJGシリーズ結晶質丸角シリカ粉末は、高純度結晶質シリカ粉末を原料に整形設備で加工し、粒子表面をより丸め流動性を向上させた素材です。",
    specs: [
      { label: "품번 (Code)", value: "SL-YJG", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "98.0 ~ 99.9 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "백도", value: "90 이상", enValue: "90 Min", jaValue: "90以上", enLabel: "Whiteness", jaLabel: "白度" },
      { label: "모스경도", value: "7", enLabel: "Mohs Hardness", jaLabel: "モース硬度" },
      { label: "D50 (입도)", value: "10 ~ 50 μm (맞춤)", enValue: "10–50 µm (customizable)", jaValue: "10~50 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
    ],
  },
  "sl-yrg": {
    tagline: "SiO₂ 99.0 ~ 99.95% · 팽창계수 0.5×10⁻⁶ · 용융형 모서리 라운드",
    enTagline: "SiO₂ 99.0–99.95% · Expansion 0.5×10⁻⁶ · Fused Round-Corner",
    jaTagline: "SiO₂ 99.0~99.95% · 膨張係数 0.5×10⁻⁶ · 溶融質 丸角",
    description: "SL-YRG 시리즈 용융형 모서리 라운드 실리카 분말은 고순도 용융 이산화규소 분말을 원료로 정형 설비로 가공하여 입자 표면을 더 매끄럽고 유동성을 개선한 소재입니다.",
    enDescription: "SL-YRG series Round-Corner Fused Silica Powder is made from high-purity fused silica powder and processed by shaping equipment to make particle surfaces rounder and flowability better.",
    jaDescription: "SL-YRGシリーズ溶融質丸角シリカ粉末は、高純度溶融シリカ粉末を原料に整形設備で加工し、粒子表面をより丸め流動性を改善した素材です。",
    specs: [
      { label: "품번 (Code)", value: "SL-YRG", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "99.0 ~ 99.95 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "팽창계수", value: "0.5×10⁻⁶", enLabel: "Expansion Coefficient", jaLabel: "膨張係数" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "D50 (입도)", value: "10 ~ 50 μm (맞춤)", enValue: "10–50 µm (customizable)", jaValue: "10~50 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
    ],
  },
  // ===== Angular =====
  "sl-rg": {
    tagline: "SiO₂ 99.0 ~ 99.95% · 팽창계수 0.5×10⁻⁶ · 용융형 각상",
    enTagline: "SiO₂ 99.0–99.95% · Expansion 0.5×10⁻⁶ · Fused Angular",
    jaTagline: "SiO₂ 99.0~99.95% · 膨張係数 0.5×10⁻⁶ · 溶融質 角形",
    description: "SL-RG 시리즈 용융 실리카 분말은 고순도 석영을 원료로 전기 용융을 통해 생산된 무정형 이산화규소를 분선·볼밀·분급 공정으로 가공한 무정형 SiO₂ 분체 소재입니다.",
    enDescription: "SL-RG series Fused Silica Powder is made from high-purity crystal silica by electrically fusing to amorphous silica, then processed by sorting, ball milling and air classifying into amorphous SiO₂ powder.",
    jaDescription: "SL-RGシリーズ溶融シリカ粉末は、高純度石英を原料に電気溶融で無定形二酸化ケイ素を生成し、分選・ボールミル・分級工程で加工した無定形SiO₂粉体素材です。",
    specs: [
      { label: "품번 (Code)", value: "SL-RG", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "99.0 ~ 99.95 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "팽창계수", value: "0.5×10⁻⁶", enLabel: "Expansion Coefficient", jaLabel: "膨張係数" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "D50 (입도)", value: "1 ~ 50 μm (맞춤)", enValue: "1–50 µm (customizable)", jaValue: "1~50 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
      { label: "특성", value: "저 Na⁺·Cl⁻·E/C · 저 열팽창·저 열전도 · 안정된 기계 물성", enValue: "Low Na⁺/Cl⁻/E/C · low CTE & thermal conductivity · stable mechanical properties", jaValue: "低Na⁺・Cl⁻・E/C · 低熱膨張・低熱伝導 · 安定した機械物性", enLabel: "Features", jaLabel: "特性" },
    ],
  },
  "sl-jg": {
    tagline: "SiO₂ 98.0 ~ 99.9% · 백도 90 이상 · 결정형 각상",
    enTagline: "SiO₂ 98.0–99.9% · Whiteness 90 Min · Crystalline Angular",
    jaTagline: "SiO₂ 98.0~99.9% · 白度90以上 · 結晶質 角形",
    description: "SL-JG 시리즈 결정 실리카 분말은 고순도 석영을 원료로 전문 정제 공정과 가공 설비를 통해 생산된 SiO₂ 분체 소재로, 균일하고 안정적인 초미세 입도가 특징입니다.",
    enDescription: "SL-JG series Crystalline Silica Powder is made from high-purity silica through professional purification and processing equipment, characterized by uniform, stable and ultra-fine particle size.",
    jaDescription: "SL-JGシリーズ結晶質シリカ粉末は、高純度石英を原料に専門的な精製工程と加工設備で生産したSiO₂粉体素材で、均一で安定した超微細粒度が特徴です。",
    specs: [
      { label: "품번 (Code)", value: "SL-JG", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "98.0 ~ 99.9 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "백도", value: "90 이상", enValue: "90 Min", jaValue: "90以上", enLabel: "Whiteness", jaLabel: "白度" },
      { label: "모스경도", value: "7", enLabel: "Mohs Hardness", jaLabel: "モース硬度" },
      { label: "D50 (입도)", value: "1 ~ 50 μm (맞춤)", enValue: "1–50 µm (customizable)", jaValue: "1~50 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
    ],
  },
  // ===== Low-α =====
  "sl-cl": {
    tagline: "SiO₂ 98.0 ~ 99.9% · 저방사선 결정형 · D50 1 ~ 30μm",
    enTagline: "SiO₂ 98.0–99.9% · Low-α Crystalline · D50 1–30 µm",
    jaTagline: "SiO₂ 98.0~99.9% · 低α線 結晶質 · D50 1~30μm",
    description: "SL-CL 시리즈 저방사선 결정 실리카 분말은 저방사성 결정 이산화규소를 원료로 자체 설계된 전문 설비로 가공된 SiO₂ 분체 소재입니다.",
    enDescription: "SL-CL series Low-α Crystalline Silica Powder is made from low-radiation crystalline silica processed to powder by proprietary professional equipment.",
    jaDescription: "SL-CLシリーズ低α線結晶質シリカ粉末は、低放射性結晶質シリカを原料に、自社設計の専門設備で加工したSiO₂粉体素材です。",
    specs: [
      { label: "품번 (Code)", value: "SL-CL", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "98.0 ~ 99.9 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "백도", value: "90 이상", enValue: "90 Min", jaValue: "90以上", enLabel: "Whiteness", jaLabel: "白度" },
      { label: "모스경도", value: "7", enLabel: "Mohs Hardness", jaLabel: "モース硬度" },
      { label: "D50 (입도)", value: "1 ~ 30 μm (맞춤)", enValue: "1–30 µm (customizable)", jaValue: "1~30 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
    ],
  },
  "sl-fl": {
    tagline: "SiO₂ 99.0 ~ 99.95% · 저방사선 용융형 · D50 1 ~ 30μm",
    enTagline: "SiO₂ 99.0–99.95% · Low-α Fused · D50 1–30 µm",
    jaTagline: "SiO₂ 99.0~99.95% · 低α線 溶融質 · D50 1~30μm",
    description: "SL-FL 시리즈 저방사선 용융 실리카 분말은 저방사성 결정 이산화규소를 원료로 고온 용융 및 전문 설비 가공을 거쳐 제조된 SiO₂ 분체 소재입니다.",
    enDescription: "SL-FL series Low-α Fused Silica Powder is made from low-radiation crystalline silica processed to powder by high-temperature smelting and professional equipment.",
    jaDescription: "SL-FLシリーズ低α線溶融シリカ粉末は、低放射性結晶質シリカを原料に高温溶融および専門設備で加工したSiO₂粉体素材です。",
    specs: [
      { label: "품번 (Code)", value: "SL-FL", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "99.0 ~ 99.95 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "백도", value: "90 이상", enValue: "90 Min", jaValue: "90以上", enLabel: "Whiteness", jaLabel: "白度" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "D50 (입도)", value: "1 ~ 30 μm (맞춤)", enValue: "1–30 µm (customizable)", jaValue: "1~30 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
    ],
  },
  // ===== Sand & Granule =====
  "sl-cs": {
    tagline: "SiO₂ 98.0 ~ 99.9% · 결정 석영사 · 6-8 ~ 70-120 mesh",
    enTagline: "SiO₂ 98.0–99.9% · Crystalline Quartz Sand · 6-8 to 70-120 mesh",
    jaTagline: "SiO₂ 98.0~99.9% · 結晶石英砂 · 6-8 ~ 70-120 mesh",
    description: "SL-CS 시리즈 결정 석영사는 고순도 석영을 원료로 수세·정제·파쇄·철분 제거·선별 등 다단계 공정을 거쳐 다양한 덩어리·입자·분말 형태로 가공됩니다.",
    enDescription: "SL-CS series Crystalline Quartz Sand is made from high-purity natural quartz through washing, purifying, crushing, iron removal and screening, producing lump, grain and powder products.",
    jaDescription: "SL-CSシリーズ結晶石英砂は、高純度石英を原料に水洗・精製・破砕・鉄分除去・選別など多段階工程を経て、様々な塊・粒子・粉末形態で加工されます。",
    specs: [
      { label: "품번 (Code)", value: "SL-CS", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "98.0 ~ 99.9 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 입자·분말", enValue: "White grain / powder", jaValue: "白色粒子・粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "입도", value: "6-8, 8-16, 16-26, 26-40, 40-70, 70-120 mesh 등 (맞춤)", enValue: "6-8, 8-16, 16-26, 26-40, 40-70, 70-120 mesh, etc. (custom)", jaValue: "6-8, 8-16, 16-26, 26-40, 40-70, 70-120 mesh 等 (カスタム)", enLabel: "Grain Size", jaLabel: "粒度" },
    ],
  },
  "sl-fs": {
    tagline: "SiO₂ 99.0 ~ 99.99% · 팽창계수 0.5×10⁻⁶ · 용융 석영사",
    enTagline: "SiO₂ 99.0–99.99% · Expansion 0.5×10⁻⁶ · Fused Quartz Sand",
    jaTagline: "SiO₂ 99.0~99.99% · 膨張係数 0.5×10⁻⁶ · 溶融石英砂",
    description: "SL-FS 시리즈 용융 석영사는 고순도 석영을 원료로 전기 용융을 통해 생산된 무정형 이산화규소를 전용 기계로 가공하여 덩어리·입자·분말 제품으로 공급됩니다.",
    enDescription: "SL-FS series Fused Silica Sand is made from high-purity crystal silica by electrically fusing to amorphous silica, then machined into lump, grain and powder products.",
    jaDescription: "SL-FSシリーズ溶融石英砂は、高純度石英を原料に電気溶融で生成した無定形二酸化ケイ素を、専用機械で塊・粒子・粉末製品に加工して供給します。",
    specs: [
      { label: "품번 (Code)", value: "SL-FS", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "99.0 ~ 99.99 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 입자·분말", enValue: "White grain / powder", jaValue: "白色粒子・粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "팽창계수", value: "0.5×10⁻⁶", enLabel: "Expansion Coefficient", jaLabel: "膨張係数" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "입도", value: "0-60mm, 8-5mm, 5-3mm, 3-1mm, 1-0mm, 1-0.5mm, 1-0.2mm, 0-0.5mm, 0.5-0.2mm, 0.5-0.1mm, 0.2-0.1mm, -0.1mm, 4+10 mesh, -10+20, -20+50, -30+50, -30+60, -50+100, -60+120 mesh, 120F 등 (맞춤)", enValue: "0-60mm, 8-5mm, 5-3mm, 3-1mm, 1-0mm, 1-0.5mm, 1-0.2mm, 0-0.5mm, 0.5-0.2mm, 0.5-0.1mm, 0.2-0.1mm, -0.1mm, 4+10 mesh, -10+20, -20+50, -30+50, -30+60, -50+100, -60+120 mesh, 120F, etc. (custom)", jaValue: "0-60mm, 8-5mm, 5-3mm, 3-1mm, 1-0mm, 1-0.5mm, 1-0.2mm, 0-0.5mm, 0.5-0.2mm, 0.5-0.1mm, 0.2-0.1mm, -0.1mm, 4+10 mesh, -10+20, -20+50, -30+50, -30+60, -50+100, -60+120 mesh, 120F 等 (カスタム)", enLabel: "Grain Size", jaLabel: "粒度" },
    ],
  },
  // ===== Lead-Free Glass =====
  "sl-zt": {
    tagline: "산화납(Pb) 0 · 사용 온도 300 ~ 800℃ 조정 · 무연 유리 프릿",
    enTagline: "Lead Oxide 0 · Operating Temp 300–800℃ Adjustable · Lead-Free Glass Frit",
    jaTagline: "酸化鉛(Pb) 0 · 使用温度 300~800℃ 調整可 · 無鉛ガラスフリット",
    description: "SL-ZT 시리즈 무연 유리 분말은 환경 유해 물질인 납(Pb)을 완전히 배제하고, 친환경적인 조성으로 설계된 고순도 미세 유리 분말입니다. 본 제품은 기존 납계 유리 분말이 가지는 저온 소결성과 우수한 유전 특성을 그대로 유지하면서도, RoHS, REACH 등 글로벌 환경 규제를 완벽하게 충족하는 친환경 대체 소재입니다. 최첨단 용융-급냉 공정과 정밀 분쇄 기술을 통해 입도 분포가 균일하고, 비표면적이 일정하여 다양한 산업 현장에서 우수한 공정 안정성을 제공합니다. 특히, 유리 전이 온도(Tg)와 연화점(Sp)을 용도에 맞게 정밀 조절할 수 있어, 고온 공정이 필요한 전자 부품부터 정밀 코팅 재료까지 폭넓게 적용 가능합니다.",
    enDescription: "The SL-ZT series Lead-Free Glass Powder is a high-purity micro glass powder designed with an eco-friendly composition that completely eliminates lead (Pb). While preserving the low-temperature sinterability and excellent dielectric properties of conventional lead-based glass powders, this product fully satisfies global environmental regulations such as RoHS and REACH as a green alternative material. Manufactured through state-of-the-art melting-quenching and precision grinding technologies, it delivers uniform particle size distribution and consistent specific surface area for excellent process stability across diverse industrial sites. The glass transition temperature (Tg) and softening point (Sp) can be precisely tuned to the application, making it suitable for a wide range of uses from electronic components requiring high-temperature processes to precision coating materials.",
    jaDescription: "SL-ZTシリーズ無鉛ガラス粉末は、環境有害物質である鉛(Pb)を完全に排除し、環境配慮型の組成で設計された高純度微細ガラス粉末です。本製品は、従来の鉛系ガラス粉末が持つ低温焼結性と優れた誘電特性をそのまま維持しながら、RoHS、REACHなどのグローバル環境規制を完全に満たす環境配慮型代替素材です。最先端の溶融・急冷工程と精密粉砕技術を通じて粒度分布が均一で、比表面積が一定であり、様々な産業現場で優れた工程安定性を提供します。特に、ガラス転移温度(Tg)と軟化点(Sp)を用途に合わせて精密調整できるため、高温工程が必要な電子部品から精密コーティング材料まで幅広く適用可能です。",
    specs: [
      { label: "품번 (Code)", value: "SL-ZT", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "산화납 함량 (PbO)", value: "0", enLabel: "Lead Oxide Content (PbO)", jaLabel: "酸化鉛含有量 (PbO)" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "사용 온도", value: "300 ~ 800 ℃ 조정 가능", enValue: "300–800 ℃ adjustable", jaValue: "300~800 ℃ 調整可能", enLabel: "Operating Temperature", jaLabel: "使用温度" },
      { label: "D50 (입도)", value: "3-5 / 5-8 / 8-12 / 12-16 μm (맞춤)", enValue: "3-5 / 5-8 / 8-12 / 12-16 µm (customizable)", jaValue: "3-5 / 5-8 / 8-12 / 12-16 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
      { label: "특성", value: "무연·무해·친환경, EU 규제 부합, 우수한 전기 절연성, 고강도 결합성", enValue: "Lead-free / non-toxic / eco-friendly · EU compliant · good electrical insulation · high-strength bonding", jaValue: "無鉛・無害・環境配慮 · EU規制準拠 · 優れた電気絶縁性 · 高強度結合性", enLabel: "Features", jaLabel: "特性" },
    ],
  },
  // ===== Silica Powder & Granule — HF04 (High-purity fused silica micro-powder) =====
  "sl-hf04": {
    tagline: "SiO₂ 99.96% · D50 3.8µm — 반도체·전자소재용 초고순도 미분 용융 실리카 (SL-HF04)",
    enTagline: "SiO₂ 99.96% · D50 3.8 µm — Ultra-High-Purity Micronized Fused Silica for Semiconductor & Electronic Materials (SL-HF04)",
    jaTagline: "SiO₂ 99.96% · D50 3.8µm — 半導体・電子素材用 超高純度微粉溶融シリカ (SL-HF04)",
    description:
      "SL-HF04는 천연 고순도 석영을 초고온(약 2,000℃)에서 전용융(Fused)한 뒤 정밀 미분쇄 및 다단 분급을 통해 제조된 초고순도 무정형(Amorphous) 용융 실리카 분말입니다. SiO₂ 순도 대표치 99.96%(규격 ≥99.95%), Fe₂O₃ 12ppm 수준의 극저철분, 100ppm 이하의 Al₂O₃, 그리고 D10 1.6µm / D50 3.8µm / D90 6.6µm의 좁고 균일한 미분 입도 분포를 특징으로 합니다. 열팽창계수가 매우 낮고(약 0.5×10⁻⁶/℃), 유전율·유전손실이 낮으며, 화학적으로 극히 안정하여 반도체 EMC(Epoxy Molding Compound), 언더필, 봉지재, 어드밴스드 패키징(FO-WLP·FC-BGA), CCL·PCB 프리프레그, 5G/고주파 기판, 방열 실리콘, LED/OLED 봉지, 정밀 세라믹·석영 유리 원료 등 최고 수준의 신뢰성과 순도가 요구되는 첨단 전자·광학·에너지 소재에 최적화된 프리미엄 필러입니다.",
    enDescription:
      "SL-HF04 is an ultra-high-purity amorphous fused silica powder produced by melting selected high-grade quartz at approximately 2,000℃ and then precision-milling and classifying it into a narrow micronized particle size distribution. It offers a typical SiO₂ purity of 99.96% (spec ≥99.95%), extremely low iron content (Fe₂O₃ ~12 ppm), Al₂O₃ below 100 ppm, and a tightly controlled PSD of D10 1.6 µm / D50 3.8 µm / D90 6.6 µm. With a very low CTE (~0.5×10⁻⁶/℃), low dielectric constant and loss, and outstanding chemical stability, SL-HF04 is an optimized premium filler for the most demanding advanced electronic, optical and energy materials — including semiconductor EMC, underfill, encapsulants, advanced packaging (FO-WLP, FC-BGA), CCL / PCB prepreg, 5G / high-frequency substrates, thermally conductive silicones, LED / OLED encapsulation, and precision ceramics and quartz-glass raw material.",
    jaDescription:
      "SL-HF04は選別された高純度石英を約2,000℃で全溶融(Fused)し、精密微粉砕・多段分級を経て製造される超高純度非晶質(Amorphous)溶融シリカ粉末です。SiO₂純度は代表値99.96%(規格≥99.95%)、Fe₂O₃約12ppmの極低鉄分、Al₂O₃100ppm以下、そしてD10 1.6µm / D50 3.8µm / D90 6.6µmの狭く均一な微粉粒度分布を特徴とします。極めて低い熱膨張係数(約0.5×10⁻⁶/℃)、低誘電率・低誘電損失、優れた化学的安定性により、半導体EMC・アンダーフィル・封止材・先端パッケージ(FO-WLP・FC-BGA)・CCL/PCBプリプレグ・5G/高周波基板・放熱シリコーン・LED/OLED封止・精密セラミックス・石英ガラス原料など、最高水準の信頼性と純度が要求される先端電子・光学・エネルギー素材に最適化されたプレミアムフィラーです。",
    image: hf04Img,
    features: [
      { title: "🧪 초고순도 SiO₂ 99.96%", desc: "규격 ≥99.95%, 대표치 99.96% — 반도체 그레이드 순도", enTitle: "🧪 Ultra-High Purity SiO₂ 99.96%", jaTitle: "🧪 超高純度SiO₂ 99.96%", enDesc: "Spec ≥99.95%, typical 99.96% — semiconductor-grade purity", jaDesc: "規格≥99.95%、代表値99.96% — 半導体グレードの純度" },
      { title: "🧼 극저 금속 불순물", desc: "Fe₂O₃ ~12 ppm · Al₂O₃ ~100 ppm — 소프트에러·수율저하 요인 최소화", enTitle: "🧼 Ultra-Low Metallic Impurities", jaTitle: "🧼 極低金属不純物", enDesc: "Fe₂O₃ ~12 ppm · Al₂O₃ ~100 ppm — minimizes soft errors and yield loss", jaDesc: "Fe₂O₃ ~12 ppm · Al₂O₃ ~100 ppm — ソフトエラー・歩留低下要因を最小化" },
      { title: "🔬 100% 무정형 용융 구조", desc: "완전 비정질 · 저열팽창(~0.5×10⁻⁶/℃) · 열충격 내성 우수", enTitle: "🔬 Fully Amorphous Fused Structure", jaTitle: "🔬 100%非晶質溶融構造", enDesc: "Fully amorphous · low CTE (~0.5×10⁻⁶/℃) · excellent thermal-shock resistance", jaDesc: "完全非晶質 · 低熱膨張(~0.5×10⁻⁶/℃) · 熱衝撃耐性に優れる" },
      { title: "📐 정밀 미분 입도", desc: "D10 1.6 / D50 3.8 / D90 6.6 µm — 좁고 균일한 PSD, 고충전·저점도", enTitle: "📐 Precise Micronized PSD", jaTitle: "📐 精密な微粉粒度", enDesc: "D10 1.6 / D50 3.8 / D90 6.6 µm — narrow uniform PSD for high loading & low viscosity", jaDesc: "D10 1.6 / D50 3.8 / D90 6.6 µm — 狭く均一なPSDで高充填・低粘度" },
      { title: "⚡ 저유전·고절연", desc: "낮은 Dk/Df와 우수한 절연 특성으로 5G·고주파 기판에 최적", enTitle: "⚡ Low-Dk / High-Insulation", jaTitle: "⚡ 低誘電・高絶縁", enDesc: "Low Dk/Df and superior insulation — ideal for 5G / high-frequency substrates", jaDesc: "低Dk/Dfと優れた絶縁特性で5G・高周波基板に最適" },
      { title: "🛡️ 우수한 화학 안정성", desc: "HF 이외의 대부분의 산·알칼리·용제에 내식성", enTitle: "🛡️ Excellent Chemical Stability", jaTitle: "🛡️ 優れた化学安定性", enDesc: "Resistant to virtually all acids, alkalis and solvents except HF", jaDesc: "HFを除くほとんどの酸・アルカリ・溶剤に耐食性" },
      { title: "💧 저수분 관리", desc: "Moisture ≤ 0.2% (대표 0.13%) — 성형·경화 시 기포·크랙 억제", enTitle: "💧 Low Moisture Control", jaTitle: "💧 低水分管理", enDesc: "Moisture ≤ 0.2% (typ. 0.13%) — prevents voids/cracks during molding & curing", jaDesc: "Moisture ≤ 0.2% (代表0.13%) — 成形・硬化時の気泡・クラックを抑制" },
      { title: "🔧 맞춤 입도 대응", desc: "고객 공정에 따라 D50 및 분포 커스터마이징 가능", enTitle: "🔧 Customizable PSD", jaTitle: "🔧 カスタム粒度対応", enDesc: "D50 and distribution can be tailored to the customer's process", jaDesc: "顧客の工程に応じてD50および分布のカスタマイズ可能" },
    ],
    specs: [
      { label: "제품 코드", value: "SL-HF04", enLabel: "Product Code", jaLabel: "製品コード" },
      { label: "외관", value: "백색 미분말", enValue: "White fine powder", jaValue: "白色微粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "형상", value: "무정형 용융 (Amorphous Fused)", enValue: "Amorphous Fused", jaValue: "非晶質 溶融 (Amorphous Fused)", enLabel: "Morphology", jaLabel: "形状" },
      { label: "SiO₂ (순도)", value: "≥ 99.95 % (대표 99.96 %)", enValue: "≥ 99.95 % (typ. 99.96 %)", jaValue: "≥ 99.95 % (代表 99.96 %)", enLabel: "SiO₂ (Purity)", jaLabel: "SiO₂ (純度)" },
      { label: "Al₂O₃", value: "약 100 ppm", enValue: "~100 ppm", jaValue: "約100 ppm", enLabel: "Al₂O₃", jaLabel: "Al₂O₃" },
      { label: "Fe₂O₃", value: "약 12 ppm", enValue: "~12 ppm", jaValue: "約12 ppm", enLabel: "Fe₂O₃", jaLabel: "Fe₂O₃" },
      { label: "수분 (Moisture)", value: "≤ 0.2 % (대표 0.13 %)", enValue: "≤ 0.2 % (typ. 0.13 %)", jaValue: "≤ 0.2 % (代表 0.13 %)", enLabel: "Moisture", jaLabel: "水分 (Moisture)" },
      { label: "입도 D10", value: "1.6 µm", enLabel: "Particle Size D10", jaLabel: "粒度 D10" },
      { label: "입도 D50", value: "3.8 µm (규격 4 ± 1 µm)", enValue: "3.8 µm (spec 4 ± 1 µm)", jaValue: "3.8 µm (規格 4 ± 1 µm)", enLabel: "Particle Size D50", jaLabel: "粒度 D50" },
      { label: "입도 D90", value: "6.6 µm", enLabel: "Particle Size D90", jaLabel: "粒度 D90" },
      { label: "열팽창계수 (CTE)", value: "약 0.5 ×10⁻⁶ /℃", enValue: "~0.5 ×10⁻⁶ /℃", jaValue: "約 0.5 ×10⁻⁶ /℃", enLabel: "CTE", jaLabel: "熱膨張係数 (CTE)" },
      { label: "모스경도", value: "약 7", enValue: "~7", jaValue: "約 7", enLabel: "Mohs Hardness", jaLabel: "モース硬度" },
      { label: "밀도 (True Density)", value: "약 2.2 g/cm³", enValue: "~2.2 g/cm³", jaValue: "約 2.2 g/cm³", enLabel: "True Density", jaLabel: "真密度" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "특성", value: "저 Na⁺·Cl⁻·E/C · 저열팽창 · 저유전 · 고절연", enValue: "Low Na⁺/Cl⁻/E/C · low CTE · low-Dk · high insulation", jaValue: "低Na⁺・Cl⁻・E/C · 低熱膨張 · 低誘電 · 高絶縁", enLabel: "Features", jaLabel: "特性" },
      { label: "포장", value: "10 / 20 kg 지대 · OEM 대응", enValue: "10 / 20 kg bag · OEM available", jaValue: "10 / 20 kg 紙袋 · OEM対応", enLabel: "Packaging", jaLabel: "包装" },
      { label: "비고", value: "입도 분포는 고객 요구에 따라 조정 가능", enValue: "PSD can be adjusted upon customer request", jaValue: "粒度分布は顧客要求に応じて調整可能", enLabel: "Note", jaLabel: "備考" },
    ],
    applications: [
      "반도체 EMC",
      "언더필 / 봉지재",
      "어드밴스드 패키징",
      "CCL / PCB",
      "5G / 고주파 기판",
      "고열전도 소재",
      "LED / OLED 봉지",
      "정밀 세라믹",
      "석영 유리 원료",
    ],
  },
  "sl-sph-300": {
    tagline: "SiO₂ 99.98% · D50 0.38 µm — 화학합성 아미크론급 고순도 나노구상실리카 (SL-SPH-300)",
    enTagline: "SiO₂ 99.98% · D50 0.38 µm — Chemically Synthesized Submicron Ultra-High-Purity Nano Spherical Silica (SL-SPH-300)",
    jaTagline: "SiO₂ 99.98% · D50 0.38µm — 化学合成サブミクロン級 高純度ナノ球状シリカ (SL-SPH-300)",
    description:
      "SL-SPH-300 고순도 나노구상실리카는 졸-겔(Sol-Gel) 기반의 화학합성법으로 제조된 아미크론(submicron)급 완전 구상 SiO₂ 분말입니다. 평균 입경 D50 0.38 µm의 초미세 나노구상 형상과 SiO₂ 99.98%(대표치)의 초고순도를 동시에 만족하며, 100% 무정형(Amorphous) 구조로 열적·화학적 안정성이 뛰어납니다.\n\n첨단 반도체 패키징 분야, 특히 M7급 고밀도 배선 기판, EMC(Epoxy Molding Compound), 언더필(Underfill), FO-WLP·FC-BGA 등 어드밴스드 패키징의 고신뢰성 충진재로 사용되며, 완전 구형에 가까운 입자 형상 덕분에 수지 대비 최대 충전율을 크게 높이면서도 슬러리·컴파운드 점도를 낮게 유지할 수 있습니다. Fe 1.5ppm, Cl⁻ 0.9ppm, Na⁺ 1.7ppm 수준의 극저 금속·이온 불순물은 α선 방출과 이온 마이그레이션을 억제하여 HBM, DDR5, AI 반도체의 소프트에러 저감과 장기 신뢰성 향상에 기여합니다.\n\n좁고 균일한 입도 분포(D100 ≤ 0.8 µm), 8.5 m²/g 수준의 안정된 비표면적, 그리고 세정 공정을 통해 관리된 낮은 전기전도도(EC 8.9 µS/cm)는 5G / 밀리미터파 고주파 기판, 저유전 CCL·프리프레그, 방열 실리콘, 정밀 세라믹, 광학 필름, 리튬이온 이차전지 세라믹 코팅 세퍼레이터 등 최고 수준의 전기·전자·에너지 소재 응용에 최적화된 성능을 제공합니다.",
    enDescription:
      "SL-SPH-300 Ultra-High-Purity Nano Spherical Silica is a submicron perfectly spherical SiO₂ powder produced by a sol-gel-based chemical synthesis process. It simultaneously delivers an ultra-fine mean particle size of D50 0.38 µm and an ultra-high SiO₂ purity of 99.98% (typical), with a fully amorphous structure that ensures excellent thermal and chemical stability.\n\nIt is used as a high-reliability filler for the most advanced semiconductor packaging — including M7-class high-density substrates, EMC (Epoxy Molding Compound), underfill, and FO-WLP / FC-BGA advanced packaging. Its near-perfect spherical morphology enables significantly higher filler loading in resin systems while keeping slurry and compound viscosity low. Extremely low metallic and ionic impurities (Fe 1.5 ppm, Cl⁻ 0.9 ppm, Na⁺ 1.7 ppm) suppress alpha-particle emission and ionic migration, contributing to soft-error reduction and long-term reliability in HBM, DDR5 and AI semiconductor devices.\n\nWith a narrow, uniform particle size distribution (D100 ≤ 0.8 µm), a stable specific surface area (~8.5 m²/g), and washed-process-controlled low electrical conductivity (EC 8.9 µS/cm), SL-SPH-300 delivers optimized performance for the most demanding electrical, electronic and energy-material applications — including 5G / millimeter-wave high-frequency substrates, low-Dk CCL / prepregs, thermally conductive silicones, precision ceramics, optical films, and ceramic-coated separators for lithium-ion batteries.",
    jaDescription:
      "SL-SPH-300 高純度ナノ球状シリカは、ゾルゲル法をベースとした化学合成プロセスで製造されるサブミクロン級の完全球状SiO₂粉末です。平均粒径D50 0.38 µmの超微細ナノ球状形状と、SiO₂純度99.98%(代表値)の超高純度を同時に実現し、100%非晶質(Amorphous)構造で熱的・化学的安定性に優れます。\n\n先端半導体パッケージ分野、特にM7級高密度配線基板、EMC(封止材)、アンダーフィル、FO-WLP・FC-BGAなどのアドバンスドパッケージにおける高信頼性充填材として使用され、ほぼ完全な球形状により樹脂への最大充填率を大幅に高めながらスラリー・コンパウンド粘度を低く保つことができます。Fe 1.5ppm・Cl⁻ 0.9ppm・Na⁺ 1.7ppmという極めて低い金属・イオン不純物レベルは、α線放出およびイオンマイグレーションを抑制し、HBM・DDR5・AI半導体のソフトエラー低減と長期信頼性向上に貢献します。\n\n狭く均一な粒度分布(D100 ≤ 0.8 µm)、8.5 m²/g水準の安定した比表面積、洗浄工程で管理された低電気伝導度(EC 8.9 µS/cm)により、5G/ミリ波高周波基板、低誘電CCL・プリプレグ、放熱シリコーン、精密セラミックス、光学フィルム、リチウムイオン二次電池のセラミックコーティングセパレーターなど、最高水準の電気・電子・エネルギー素材応用に最適化された性能を提供します。",
    image: sphSemImg,
    features: [
      { title: "🧪 초고순도 SiO₂ 99.98%", desc: "화학합성 공정 · 반도체 그레이드 이상의 초고순도", enTitle: "🧪 Ultra-High Purity SiO₂ 99.98%", jaTitle: "🧪 超高純度SiO₂ 99.98%", enDesc: "Chemically synthesized — beyond semiconductor-grade purity", jaDesc: "化学合成プロセス · 半導体グレードを超える超高純度" },
      { title: "⚪ 완전 구상 · 아미크론급", desc: "D50 0.38 µm · D100 ≤ 0.8 µm — 최고 수준의 구상도와 미세 입도", enTitle: "⚪ Perfectly Spherical · Submicron", jaTitle: "⚪ 完全球状 · サブミクロン級", enDesc: "D50 0.38 µm · D100 ≤ 0.8 µm — top-class sphericity and fineness", jaDesc: "D50 0.38 µm · D100 ≤ 0.8 µm — 最高水準の球形度と微細粒度" },
      { title: "🧼 극저 이온·금속 불순물", desc: "Fe 1.5 ppm · Na⁺ 1.7 ppm · Cl⁻ 0.9 ppm — 소프트에러/마이그레이션 억제", enTitle: "🧼 Ultra-Low Ionic / Metallic Impurities", jaTitle: "🧼 極低イオン・金属不純物", enDesc: "Fe 1.5 ppm · Na⁺ 1.7 ppm · Cl⁻ 0.9 ppm — suppresses soft errors & migration", jaDesc: "Fe 1.5 ppm · Na⁺ 1.7 ppm · Cl⁻ 0.9 ppm — ソフトエラー・マイグレーションを抑制" },
      { title: "🔬 100% 무정형(Amorphous)", desc: "저열팽창 · 우수한 열충격·화학 안정성", enTitle: "🔬 Fully Amorphous", jaTitle: "🔬 100%非晶質", enDesc: "Low CTE · excellent thermal-shock and chemical stability", jaDesc: "低熱膨張 · 優れた熱衝撃・化学安定性" },
      { title: "💧 저 전기전도도 (EC 8.9 µS/cm)", desc: "정밀 세정 공정 관리 — 고신뢰성 전자 소재 최적", enTitle: "💧 Low Electrical Conductivity", jaTitle: "💧 低電気伝導度 (EC 8.9 µS/cm)", enDesc: "Controlled by precision washing — ideal for high-reliability electronics", jaDesc: "精密洗浄工程で管理 — 高信頼性電子素材に最適" },
      { title: "⚡ 저유전·저점도 충전", desc: "고충전율 유지하며 낮은 유전율/점도 구현 — 5G·AI 반도체용", enTitle: "⚡ Low-Dk / Low-Viscosity Filling", jaTitle: "⚡ 低誘電・低粘度充填", enDesc: "High loading with low dielectric constant and viscosity — for 5G / AI semis", jaDesc: "高充填率を維持しつつ低誘電率/低粘度を実現 — 5G・AI半導体向け" },
    ],
    specs: [
      { label: "제품 코드", value: "SL-SPH-300", enLabel: "Product Code", jaLabel: "製品コード" },
      { label: "외관", value: "백색 나노 미분말", enValue: "White nano-fine powder", jaValue: "白色ナノ微粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "형상", value: "완전 구상 (Spherical, Amorphous)", enValue: "Perfectly spherical (Amorphous)", jaValue: "完全球状 (非晶質)", enLabel: "Morphology", jaLabel: "形状" },
      { label: "제조 공정", value: "화학합성 (Sol-Gel)", enValue: "Chemical Synthesis (Sol-Gel)", jaValue: "化学合成 (ゾルゲル法)", enLabel: "Process", jaLabel: "製造工程" },
      { label: "SiO₂ (순도)", value: "99.98 % (대표치)", enValue: "99.98 % (typical)", jaValue: "99.98 % (代表値)", enLabel: "SiO₂ (Purity)", jaLabel: "SiO₂ (純度)" },
      { label: "Fe", value: "1.5 ppm", enLabel: "Fe", jaLabel: "Fe" },
      { label: "Cl⁻", value: "0.9 ppm", enLabel: "Cl⁻", jaLabel: "Cl⁻" },
      { label: "Na⁺", value: "1.7 ppm", enLabel: "Na⁺", jaLabel: "Na⁺" },
      { label: "평균 입도 D50", value: "0.38 µm", enLabel: "Mean Particle Size D50", jaLabel: "平均粒度 D50" },
      { label: "최대 입도 D100", value: "≤ 0.8 µm", enValue: "≤ 0.8 µm", jaValue: "≤ 0.8 µm", enLabel: "Max Particle Size D100", jaLabel: "最大粒度 D100" },
      { label: "비표면적 (SSA)", value: "8.5 m²/g", enLabel: "Specific Surface Area", jaLabel: "比表面積 (SSA)" },
      { label: "수분 (Moisture)", value: "0.12 %", enLabel: "Moisture", jaLabel: "水分 (Moisture)" },
      { label: "PH", value: "6.1", enLabel: "PH", jaLabel: "PH" },
      { label: "전기전도도 (EC)", value: "8.9 µS/cm", enLabel: "Electrical Conductivity (EC)", jaLabel: "電気伝導度 (EC)" },
      { label: "포장", value: "5 / 10 kg 지대 · OEM 대응", enValue: "5 / 10 kg bag · OEM available", jaValue: "5 / 10 kg 紙袋 · OEM対応", enLabel: "Packaging", jaLabel: "包装" },
      { label: "비고", value: "입도 및 표면처리 사양은 고객 요구에 따라 맞춤 대응", enValue: "PSD and surface treatment can be customized upon request", jaValue: "粒度および表面処理仕様は顧客要求に応じてカスタム対応", enLabel: "Note", jaLabel: "備考" },
    ],
    applications: [
      "M7급 반도체 기판",
      "반도체 EMC (Epoxy Molding Compound)",
      "언더필 / 봉지재",
      "어드밴스드 패키징 (FO-WLP · FC-BGA)",
      "5G / 밀리미터파 고주파 기판",
      "저유전 CCL / 프리프레그",
      "고열전도 실리콘",
      "정밀 세라믹 · 광학 필름",
      "리튬이온 이차전지 세라믹 코팅 세퍼레이터",
    ],
  },
};


const generatedChildren: ProductDetail[] = [];
const generatedSeen = new Set<string>();
for (const parent of advSeriesProducts) {
  if (!parent.subModels) continue;
  for (const sm of parent.subModels) {
    if (!sm.slug) continue;
    if (generatedSeen.has(sm.slug)) continue;
    generatedSeen.add(sm.slug);
    const override = surfaceModelOverrides[sm.slug];
    const childName = sm.name ?? `${sm.code} ${parent.name}`;
    const childEnName = sm.enName ?? `${sm.code} · ${parent.enName}`;
    const childJaName = sm.jaName ?? `${sm.code} ${parent.jaName ?? parent.enName}`;
    generatedChildren.push({
      slug: sm.slug,
      name: childName,
      enName: childEnName,
      jaName: childJaName,
      tagline: override?.tagline ?? `${sm.code} — ${sm.spec}`,
      enTagline: override?.enTagline ?? `${sm.code} — ${sm.enSpec ?? sm.spec}`,
      jaTagline: override?.jaTagline ?? `${sm.code} — ${sm.jaSpec ?? sm.spec}`,
      description: override?.description ?? parent.description,
      enDescription: override?.enDescription ?? parent.enDescription,
      jaDescription: override?.jaDescription ?? parent.jaDescription,
      image: override?.image ?? parent.image,
      category: parent.category,
      parentSlug: parent.slug,
      features: override?.features ?? parent.features,
      specs: override?.specs ?? parent.specs,
      applications: override?.applications ?? parent.applications,
    });
  }
}
productCatalog.push(...generatedChildren);

// ============= Aggregated Category: All Fused Silica =============
// Virtual category grouping every fused-silica product (A/B/C grades + all
// SL-series fused variants). Each member also keeps its original category.
export const fusedSilicaCategoryMembers = [
  "fused-silica-a-grade",
  "fused-silica-b-grade",
  "fused-silica-c-grade",
  "sl-qg",
  "sl-qg-l",
  "sl-yrg",
  "sl-rg",
  "sl-fl",
  "sl-hrg",
  "sl-fs",
  "sl-hf04",
];

productCatalog.push({
  slug: "fused-silica",
  name: "용융실리카",
  enName: "Fused Silica",
  jaName: "溶融シリカ",
  tagline: "A · B · C 등급 + 전 SL 시리즈 용융실리카를 한 곳에서 — 반도체·광학·EMC·정밀 주조·첨단 패키징 전용",
  enTagline: "A · B · C grades and every SL-series fused silica in one place — for semiconductor, optics, EMC, precision casting and advanced packaging",
  jaTagline: "A・B・Cグレード+全SLシリーズ溶融シリカを一箇所で — 半導体・光学・EMC・精密鋳造・先端パッケージング向け",
  description:
    "용융실리카(Fused Silica)는 천연 석영을 1,800℃ 이상의 초고온에서 용융·급냉하여 얻어지는 비정질(Amorphous) 이산화규소(SiO₂) 소재로, 극저 열팽창(0.5~0.6 ×10⁻⁶/℃)·우수한 열충격 저항성·높은 화학적 안정성·뛰어난 전기 절연성을 동시에 갖춘 첨단 산업의 핵심 원료입니다. SiLiCA는 순도·용도별로 A등급(SiO₂ ≥99.9%, 100% 무정형)·B등급(≥99.5%)·C등급(≥99%)의 세 가지 대표 등급과 함께, 반도체 EMC·언더필·CCL·저방사선(Low-α)·표면개질·모서리 라운드·각상·미분·석영사 등 형상·기능별 전 SL 시리즈 용융실리카 라인업을 중심으로 맞춤 가공 공급 합니다.",
  enDescription:
    "Fused Silica is an amorphous SiO₂ material made by melting natural quartz at over 1,800°C and rapidly quenching it. It delivers ultra-low CTE (0.5–0.6 ×10⁻⁶/°C), excellent thermal-shock resistance, chemical stability and electrical insulation — a core raw material for advanced industries. SiLiCA supplies Grade A (SiO₂ ≥99.9%, 100% amorphous), Grade B (≥99.5%) and Grade C (≥99%) as flagship purity tiers, together with the full SL-series fused-silica lineup by shape/function: spherical (SL-QG), low-α spherical (SL-QG-L), round-corner (SL-YRG), angular (SL-RG), low-radiation (SL-FL), surface-modified (SL-HRG), fused quartz sand (SL-FS) and ultra-high-purity fine powder (SL-HF04). We supply these as custom-processed products centered on the fused-silica lineup.",
  jaDescription:
    "溶融シリカ(Fused Silica)は、天然石英を1,800℃以上の超高温で溶融・急冷して得られる非晶質(Amorphous)二酸化ケイ素(SiO₂)素材で、極低熱膨張(0.5~0.6 ×10⁻⁶/℃)・優れた耐熱衝撃性・高い化学的安定性・優れた電気絶縁性を兼ね備えた先端産業の核心原料です。SiLiCAはAグレード(SiO₂ ≥99.9%、100%非晶質)、Bグレード(≥99.5%)、Cグレード(≥99%)の代表3グレードに加え、半導体EMC・アンダーフィル・CCL・低α線・表面改質・丸角・角形・微粉・石英砂など、形状/機能別のSLシリーズ溶融シリカラインアップを中心に、カスタム加工で供給します。",
  image: fusedSilicaCategoryImg,
  category: "advanced-series",
  isCategoryIndex: true,
  features: [
    { title: "🏅 A · B · C 3등급 순도 라인업", desc: "SiO₂ 99% / 99.5% / 99.9% 이상 — 용도·예산별 최적 등급 선택", enTitle: "🏅 A/B/C 3-Tier Purity Lineup", jaTitle: "🏅 A・B・C 3等級純度ラインアップ", enDesc: "SiO₂ ≥99% / ≥99.5% / ≥99.9% — pick the tier matching your process and budget", jaDesc: "SiO₂ 99% / 99.5% / 99.9%以上 — 用途・予算に合わせて選択" },
    { title: "🌡️ 극저 열팽창 & 열충격 저항", desc: "CTE 0.5~0.6 ×10⁻⁶/℃ — 급열/급냉 반복 공정에서도 크랙·변형 최소화", enTitle: "🌡️ Ultra-Low CTE & Thermal Shock Resistance", jaTitle: "🌡️ 極低熱膨張と耐熱衝撃性", enDesc: "CTE 0.5–0.6 ×10⁻⁶/°C — minimal cracking/warping under rapid heat cycles", jaDesc: "CTE 0.5~0.6 ×10⁻⁶/℃ — 急熱・急冷サイクルでもクラック/変形を最小化" },
    { title: "🔷 전 SL 시리즈 형상 라인업", desc: "구상(SL-QG)·모서리 라운드(SL-YRG)·각상(SL-RG)·미분(SL-HF04)·석영사(SL-FS) 등 형상·입도·기능별 커버", enTitle: "🔷 Full SL-Series Shape Lineup", jaTitle: "🔷 全SLシリーズ形状ラインアップ", enDesc: "Spherical (SL-QG), round-corner (SL-YRG), angular (SL-RG), fine powder (SL-HF04), quartz sand (SL-FS) and more", jaDesc: "球状(SL-QG)・丸角(SL-YRG)・角形(SL-RG)・微粉(SL-HF04)・石英砂(SL-FS)など形状・粒度・機能別に対応" },
    { title: "☢️ 저방사선(Low-α) 대응", desc: "SL-QG-L / SL-FL — HBM·DDR5·AI 반도체 소프트에러 방지용 α선 ≤ 0.001 cph/cm²", enTitle: "☢️ Low-α Options", jaTitle: "☢️ 低α線対応", enDesc: "SL-QG-L / SL-FL — α ≤ 0.001 cph/cm² for HBM, DDR5, AI-semiconductor soft-error suppression", jaDesc: "SL-QG-L / SL-FL — HBM・DDR5・AI半導体のソフトエラー抑制用 α線 ≤ 0.001 cph/cm²" },
    { title: "⚗️ 표면개질(활성) 그레이드", desc: "SL-HRG — 실란 커플링 처리로 유기 매트릭스와의 접착·분산성 극대화", enTitle: "⚗️ Surface-Modified Grade", jaTitle: "⚗️ 表面改質(活性)グレード", enDesc: "SL-HRG — silane-coupled treatment maximizes adhesion and dispersion in organic matrices", jaDesc: "SL-HRG — シランカップリング処理で有機マトリクスとの接着・分散性を最大化" },
    { title: "📐 광범위 입도 · 맞춤 공급", desc: "60mm 과립부터 1µm(D50) 미분까지 고객 요구사양별 커스텀 생산", enTitle: "📐 Wide PSD & Custom Supply", jaTitle: "📐 広範な粒度・カスタム供給", enDesc: "From 60 mm granules down to 1 µm (D50) fine powder — custom per requirement", jaDesc: "60mm顆粒から1µm(D50)微粉までカスタム生産" },
  ],
  specs: [
    { label: "제품 라인업", value: "A / B / C 등급 + SL-QG · SL-QG-L · SL-YRG · SL-RG · SL-FL · SL-HRG · SL-FS · SL-HF04", enValue: "A/B/C grades + SL-QG · SL-QG-L · SL-YRG · SL-RG · SL-FL · SL-HRG · SL-FS · SL-HF04", jaValue: "A/B/Cグレード + SL-QG · SL-QG-L · SL-YRG · SL-RG · SL-FL · SL-HRG · SL-FS · SL-HF04", enLabel: "Product Lineup", jaLabel: "製品ラインアップ" },
    { label: "SiO₂ 순도 범위", value: "≥ 99.0 % ~ ≥ 99.99 % (등급별)", enValue: "≥99.0% – ≥99.99% (by grade)", jaValue: "≥99.0% ~ ≥99.99% (グレード別)", enLabel: "SiO₂ Purity Range", jaLabel: "SiO₂純度範囲" },
    { label: "구조", value: "비정형(Amorphous) 95 ~ 100 %", enValue: "Amorphous 95–100%", jaValue: "非晶質 95~100%", enLabel: "Structure", jaLabel: "構造" },
    { label: "열팽창계수 (CTE)", value: "0.5 ~ 0.8 ×10⁻⁶/℃", enLabel: "CTE", jaLabel: "熱膨張係数 (CTE)" },
    { label: "형상 옵션", value: "구상 · 모서리 라운드 · 각상 · 미분 · 과립 · 석영사", enValue: "Spherical · round-corner · angular · fine · granular · quartz sand", jaValue: "球状 · 丸角 · 角形 · 微粉 · 顆粒 · 石英砂", enLabel: "Shape Options", jaLabel: "形状オプション" },
    { label: "입도 범위", value: "1 µm ~ 60 mm (D50 · 맞춤)", enValue: "1 µm – 60 mm (D50 · customizable)", jaValue: "1µm~60mm (D50·カスタム)", enLabel: "PSD Range", jaLabel: "粒度範囲" },
    { label: "저방사선(Low-α)", value: "SL-QG-L / SL-FL 그레이드 — α ≤ 0.001 cph/cm²", enValue: "SL-QG-L / SL-FL grades — α ≤ 0.001 cph/cm²", jaValue: "SL-QG-L / SL-FLグレード — α ≤ 0.001 cph/cm²", enLabel: "Low-α Option", jaLabel: "低α線オプション" },
    { label: "표면개질", value: "SL-HRG (실란 커플링) 그레이드 별도 공급", enValue: "SL-HRG (silane-coupled) grade available", jaValue: "SL-HRG (シランカップリング)グレード供給可", enLabel: "Surface Modification", jaLabel: "表面改質" },
    { label: "포장", value: "10 / 20 kg 지대 · 500 kg 벌크백 · OEM", enValue: "10 / 20 kg bag · 500 kg bulk · OEM", jaValue: "10 / 20 kg 紙袋 · 500 kg バルク · OEM", enLabel: "Packaging", jaLabel: "包装" },
  ],
  subModelsColumnLabel: { ko: "등급 / 형상", en: "Grade / Shape", ja: "グレード/形状" },
  subModels: [
    { code: "GRADE-A", slug: "fused-silica-a-grade", spec: "A등급 · SiO₂ ≥99.9% · 100% 무정형", enSpec: "Grade A · SiO₂ ≥99.9% · 100% amorphous", jaSpec: "Aグレード · SiO₂ ≥99.9% · 100%非晶質" },
    { code: "GRADE-B", slug: "fused-silica-b-grade", spec: "B등급 · SiO₂ ≥99.5% · ≥98% 무정형", enSpec: "Grade B · SiO₂ ≥99.5% · ≥98% amorphous", jaSpec: "Bグレード · SiO₂ ≥99.5% · ≥98%非晶質" },
    { code: "GRADE-C", slug: "fused-silica-c-grade", spec: "C등급 · SiO₂ ≥99% · ≥95% 무정형", enSpec: "Grade C · SiO₂ ≥99% · ≥95% amorphous", jaSpec: "Cグレード · SiO₂ ≥99% · ≥95%非晶質" },
    { code: "SL-QG", slug: "sl-qg", spec: "구상 (화염 용융)", enSpec: "Spherical (flame-fusion)", jaSpec: "球状 (火炎溶融)" },
    { code: "SL-QG-L", slug: "sl-qg-l", spec: "저방사선(Low-α) 구상", enSpec: "Low-α Spherical", jaSpec: "低α線 球状" },
    { code: "SL-YRG", slug: "sl-yrg", spec: "용융형 모서리 라운드", enSpec: "Fused Round-Corner", jaSpec: "溶融質 丸角" },
    { code: "SL-RG", slug: "sl-rg", spec: "용융형 각상", enSpec: "Fused Angular", jaSpec: "溶融質 角形" },
    { code: "SL-FL", slug: "sl-fl", spec: "저방사선 용융", enSpec: "Low-Alpha Fused", jaSpec: "低α線 溶融質" },
    { code: "SL-HRG", slug: "sl-hrg", spec: "표면개질 용융", enSpec: "Surface-Modified Fused", jaSpec: "活性(表面改質) 溶融" },
    { code: "SL-FS", slug: "sl-fs", spec: "용융 석영사", enSpec: "Fused Quartz Sand", jaSpec: "溶融石英砂" },
    { code: "SL-HF04", slug: "sl-hf04", spec: "초고순도 미분 용융 (SiO₂ 99.96% · D50 3.8µm)", enSpec: "Ultra-High-Purity Fine Fused (SiO₂ 99.96% · D50 3.8µm)", jaSpec: "超高純度微粉溶融 (SiO₂ 99.96% · D50 3.8µm)" },
  ],
  applications: [
    "반도체 EMC · 언더필 · 어드밴스드 패키징",
    "CCL / PCB · 5G 고주파 기판",
    "HBM · DDR5 · AI 반도체 (저방사선 그레이드)",
    "광학 렌즈 · 정밀 광학 부품",
    "항공 · 방산 · 우주 소재",
    "정밀 주조 · 세라믹 코어",
    "고온 내화 · 특수 유리",
    "태양광 · 에너지",
  ],
});


// ============= Aggregated Category: Quartz · Crystalline Silica (α-Quartz) =============
productCatalog.push({
  slug: "crystalline-silica",
  name: "쿼츠 · 결정질 실리카",
  enName: "Quartz · Crystalline Silica (α-Quartz)",
  jaName: "クォーツ・結晶質シリカ (α-石英)",
  tagline: "구상·모서리 라운드·각상·저방사선·표면개질·석영사 전 결정질(α-Quartz) 실리카 라인업 통합 카테고리",
  enTagline: "Unified α-quartz crystalline silica lineup — spherical, round-corner, angular, low-α, surface-modified and quartz sand grades in one place",
  jaTagline: "球状・丸角・角形・低α線・表面改質・石英砂まで、全結晶質(α-Quartz)シリカラインアップを一箇所で",
  description:
    "쿼츠(Quartz) · 결정질 실리카(Crystalline Silica, α-Quartz)는 천연 수정 광석을 기반으로 정제·분급·결정 형상 제어를 거쳐 제조되는 고순도 α상 SiO₂ 소재로, 용융(Amorphous) 실리카 대비 높은 경도(Mohs 7)·우수한 화학적 안정성·낮은 단가·풍부한 원료 공급성을 갖춘 산업용 대표 실리카입니다. SiLiCA는 결정질 실리카 라인업을 하나의 카테고리로 통합하여, 모서리 라운드 결정형(SL-YJG)·각상 결정형(SL-JG)·저방사선 결정형(SL-CL)·표면개질 결정형(SL-HJG)·결정 석영사(SL-CS) 등 형상·기능·순도별 전 라인업을 CCL/PCB, 반도체 EMC, 정밀 주조, 세라믹, 산업용 코팅, 고내마모 복합재 등 다양한 산업 요구에 맞춰 커스텀 가공 공급합니다.\n\n각 제품은 원래 소속 카테고리(구상·모서리 라운드·각상·저방사선·표면개질·실리카 분말·입자)에도 그대로 유지되므로, 형상·기능별로도 자유롭게 탐색 가능합니다.",
  enDescription:
    "Quartz · Crystalline Silica (α-Quartz) is a high-purity α-phase SiO₂ material refined from natural quartz ore through classification and crystal-shape control. Compared with amorphous fused silica, it offers superior hardness (Mohs 7), excellent chemical stability, cost-competitive pricing and abundant raw-material availability, making it the industrial workhorse silica. SiLiCA consolidates its crystalline lineup — round-corner crystalline (SL-YJG), angular crystalline (SL-JG), low-α crystalline (SL-CL), surface-modified crystalline (SL-HJG) and crystalline quartz sand (SL-CS) — under one category, custom-processed for CCL/PCB, semiconductor EMC, precision casting, ceramics, industrial coatings and high-wear composites.\n\nEach product also remains listed under its original shape/function category (spherical, round-corner, angular, low-α, surface-modified, silica powder & granule), so you can navigate by form factor as well.",
  jaDescription:
    "クォーツ(Quartz)・結晶質シリカ(Crystalline Silica, α-Quartz)は、天然石英原石を精製・分級・結晶形状制御して製造される高純度α相SiO₂素材で、溶融(非晶質)シリカに比べ高硬度(モース7)・優れた化学安定性・低コスト・豊富な原料供給性を兼ね備えた産業用の代表的シリカです。SiLiCAは結晶質ラインアップを一つのカテゴリに統合し、丸角結晶質(SL-YJG)・角形結晶質(SL-JG)・低α線結晶質(SL-CL)・表面改質結晶質(SL-HJG)・結晶石英砂(SL-CS)を、CCL/PCB・半導体EMC・精密鋳造・セラミックス・産業用コーティング・高耐摩耗複合材など多様な用途向けにカスタム加工で供給します。\n\n各製品は元の所属カテゴリ(球状・丸角・角形・低α線・表面改質・シリカ粉末/粒)にもそのまま掲載されるため、形状・機能別にも自由に閲覧できます。",
  image: crystallineSilicaImg,
  category: "advanced-series",
  isCategoryIndex: true,
  features: [
    { title: "💎 α-Quartz 결정 구조", desc: "천연 석영 기반의 α상 결정질 SiO₂ — 높은 경도(Mohs 7)와 우수한 화학적 안정성", enTitle: "💎 α-Quartz Crystal Structure", jaTitle: "💎 α-Quartz 結晶構造", enDesc: "α-phase crystalline SiO₂ from natural quartz — high hardness (Mohs 7) and excellent chemical stability", jaDesc: "天然石英ベースのα相結晶質SiO₂ — 高硬度(モース7)と優れた化学安定性" },
    { title: "🔷 전 형상 라인업 통합", desc: "모서리 라운드(SL-YJG)·각상(SL-JG)·저방사선(SL-CL)·표면개질(SL-HJG)·석영사(SL-CS)", enTitle: "🔷 Full Shape Lineup", jaTitle: "🔷 全形状ラインアップ", enDesc: "Round-corner (SL-YJG), angular (SL-JG), low-α (SL-CL), surface-modified (SL-HJG), quartz sand (SL-CS)", jaDesc: "丸角(SL-YJG)・角形(SL-JG)・低α線(SL-CL)・表面改質(SL-HJG)・石英砂(SL-CS)" },
    { title: "☢️ 저방사선(Low-α) 대응", desc: "SL-CL — HBM·DDR5·AI 반도체 소프트에러 방지용 α선 ≤ 0.001 cph/cm²", enTitle: "☢️ Low-α Grade Available", jaTitle: "☢️ 低α線対応", enDesc: "SL-CL — α ≤ 0.001 cph/cm² for HBM, DDR5, AI-semiconductor soft-error suppression", jaDesc: "SL-CL — HBM・DDR5・AI半導体のソフトエラー抑制用 α線 ≤ 0.001 cph/cm²" },
    { title: "⚗️ 표면개질(활성) 결정형", desc: "SL-HJG — 실란 커플링 처리로 유기 매트릭스와의 접착·분산성 극대화", enTitle: "⚗️ Surface-Modified Crystalline", jaTitle: "⚗️ 表面改質(活性)結晶質", enDesc: "SL-HJG — silane-coupled to maximize adhesion and dispersion in organic matrices", jaDesc: "SL-HJG — シランカップリング処理で有機マトリクスとの接着・分散性を最大化" },
    { title: "💰 경제성 & 안정 공급", desc: "용융 대비 낮은 단가와 풍부한 원료 공급성 — 대량 수요·산업용 표준 필러에 최적", enTitle: "💰 Cost-Competitive & Stable Supply", jaTitle: "💰 経済性と安定供給", enDesc: "Lower cost than fused variants with abundant raw-material supply — ideal for high-volume industrial fillers", jaDesc: "溶融品対比の低コストと豊富な原料供給性 — 大量需要・産業用標準フィラーに最適" },
    { title: "📐 광범위 입도 · 맞춤 공급", desc: "미분(D50 µm)부터 석영사 과립까지 고객 요구 사양별 커스텀 생산", enTitle: "📐 Wide PSD & Custom Supply", jaTitle: "📐 広範な粒度・カスタム供給", enDesc: "From fine powder (D50 µm) to quartz sand granules — custom per requirement", jaDesc: "微粉(D50 µm)から石英砂顆粒までカスタム生産" },
  ],
  specs: [
    { label: "제품 라인업", value: "SL-YJG · SL-JG · SL-CL · SL-HJG · SL-CS", enValue: "SL-YJG · SL-JG · SL-CL · SL-HJG · SL-CS", jaValue: "SL-YJG · SL-JG · SL-CL · SL-HJG · SL-CS", enLabel: "Product Lineup", jaLabel: "製品ラインアップ" },
    { label: "결정 구조", value: "α-Quartz (Trigonal, 결정질)", enValue: "α-Quartz (Trigonal, crystalline)", jaValue: "α-Quartz (三方晶系、結晶質)", enLabel: "Crystal Structure", jaLabel: "結晶構造" },
    { label: "SiO₂ 순도 범위", value: "≥ 99.5 % ~ ≥ 99.9 % (등급별)", enValue: "≥99.5% – ≥99.9% (by grade)", jaValue: "≥99.5% ~ ≥99.9% (グレード別)", enLabel: "SiO₂ Purity Range", jaLabel: "SiO₂純度範囲" },
    { label: "경도 (Mohs)", value: "7", enLabel: "Hardness (Mohs)", jaLabel: "硬度 (モース)" },
    { label: "형상 옵션", value: "모서리 라운드 · 각상 · 저방사선 · 표면개질 · 석영사", enValue: "Round-corner · angular · low-α · surface-modified · quartz sand", jaValue: "丸角 · 角形 · 低α線 · 表面改質 · 石英砂", enLabel: "Shape Options", jaLabel: "形状オプション" },
    { label: "저방사선(Low-α)", value: "SL-CL 그레이드 — α ≤ 0.001 cph/cm²", enValue: "SL-CL grade — α ≤ 0.001 cph/cm²", jaValue: "SL-CLグレード — α ≤ 0.001 cph/cm²", enLabel: "Low-α Option", jaLabel: "低α線オプション" },
    { label: "표면개질", value: "SL-HJG (실란 커플링) 그레이드 별도 공급", enValue: "SL-HJG (silane-coupled) grade available", jaValue: "SL-HJG (シランカップリング)グレード供給可", enLabel: "Surface Modification", jaLabel: "表面改質" },
    { label: "포장", value: "10 / 20 kg 지대 · 500 kg 벌크백 · OEM", enValue: "10 / 20 kg bag · 500 kg bulk · OEM", jaValue: "10 / 20 kg 紙袋 · 500 kg バルク · OEM", enLabel: "Packaging", jaLabel: "包装" },
  ],
  subModelsColumnLabel: { ko: "형상 / 기능", en: "Shape / Function", ja: "形状/機能" },
  subModels: [
    { code: "SL-YJG", slug: "sl-yjg", spec: "결정형 모서리 라운드 (CCL·도전성 페이스트·산업 코팅)", enSpec: "Crystalline Round-Corner (CCL, conductive paste, industrial coatings)", jaSpec: "結晶質 丸角 (CCL・導電性ペースト・産業用コーティング)" },
    { code: "SL-JG", slug: "sl-jg", spec: "결정형 각상 (표준 필러·고내마모 복합재)", enSpec: "Crystalline Angular (standard filler, high-wear composites)", jaSpec: "結晶質 角形 (標準フィラー・高耐摩耗複合材)" },
    { code: "SL-CL", slug: "sl-cl", spec: "저방사선(Low-α) 결정형 — α ≤ 0.001 cph/cm²", enSpec: "Low-α Crystalline — α ≤ 0.001 cph/cm²", jaSpec: "低α線 結晶質 — α ≤ 0.001 cph/cm²" },
    { code: "SL-HJG", slug: "sl-hjg", spec: "표면개질(활성) 결정형 — 실란 커플링 처리", enSpec: "Surface-Modified Crystalline — silane-coupled", jaSpec: "表面改質(活性) 結晶質 — シランカップリング処理" },
    { code: "SL-CS", slug: "sl-cs", spec: "결정 석영사 (유리 원료·정밀 주조·연마재)", enSpec: "Crystalline Quartz Sand (glass raw material, precision casting, abrasives)", jaSpec: "結晶石英砂 (ガラス原料・精密鋳造・研磨材)" },
    { code: "SL-HS12", slug: "sl-hs12", spec: "고순도 결정질 실리카 미분 (SiO₂ ≥99.85% · D50 12±2µm)", enSpec: "High-Purity Crystalline Silica Micro-Powder (SiO₂ ≥99.85% · D50 12±2 µm)", jaSpec: "高純度結晶質シリカ微粉 (SiO₂ ≥99.85% · D50 12±2µm)" },
  ],
  applications: [
    "CCL / PCB · 5G 고주파 기판 (결정형 필러)",
    "반도체 EMC · 언더필 (저방사선 결정형)",
    "HBM · DDR5 · AI 반도체 (Low-α 결정형)",
    "도전성 페이스트 · 산업용 코팅",
    "고내마모 복합재 · 엔지니어링 플라스틱 필러",
    "정밀 주조 · 세라믹 코어",
    "유리 원료 · 특수 유리 · 광학 유리",
    "연마재 · 워터필터 · 스포츠 표면재",
  ],
});

// ============= SL-HS12 · High-Purity Crystalline Silica Micro-Powder =============
productCatalog.push({
  slug: "sl-hs12",
  name: "SL-HS12 고순도 결정질 실리카 미분",
  enName: "SL-HS12 · High-Purity Crystalline Silica Micro-Powder",
  jaName: "SL-HS12 高純度結晶質シリカ微粉",
  tagline: "SiO₂ ≥99.85%(대표 99.92%) · D50 12±2 µm — 고순도 석영 원료 기반 결정질 실리카 미분",
  enTagline: "SiO₂ ≥99.85% (typ. 99.92%) · D50 12±2 µm — crystalline silica micro-powder from high-purity quartz",
  jaTagline: "SiO₂ ≥99.85%(代表値99.92%) · D50 12±2µm — 高純度石英原料ベースの結晶質シリカ微粉",
  description:
    "SL-HS12은 고순도 석영(α-Quartz) 원료를 파쇄·분급 등의 정밀 가공 공정을 거쳐 제조한 결정질 이산화규소(SiO₂) 미분입니다. 규격 SiO₂ ≥99.85%(대표치 99.92%)의 고순도를 확보하면서 Al 35 ppm, Ca 5 ppm, Fe 3 ppm, K 6 ppm, Mg 0.5 ppm, Na 7 ppm 수준의 극저 금속 불순물 대표치를 유지하여, 절연 신뢰성과 색상 안정성이 동시에 요구되는 전자·화학 소재 배합에 적합합니다.\n\n입도는 D50 12±2 µm를 기준으로 관리되며 대표 분포는 D10 2.4 µm · D50 12.1 µm · D100 28.6 µm입니다. 좁고 균일한 입도 분포는 수지 대비 고충전 시에도 안정적인 유동성과 낮은 점도를 유지하게 하여 성형성과 표면 품질을 개선합니다. 수분 함량은 ≤0.2%(대표 0.1%)로 관리되어 보관·혼련 과정에서의 응집과 기포 발생을 억제합니다.\n\n입도 분포(PSD)는 고객의 실제 사용 조건과 요구 사양에 맞추어 조정 가능하며, 결정질 실리카 특유의 높은 경도(Mohs 7)·우수한 화학적 안정성·경제성을 바탕으로 다양한 산업용 충진재 용도에 안정적으로 공급됩니다.",
  enDescription:
    "SL-HS12 is a crystalline silicon dioxide (SiO₂) micro-powder manufactured from high-purity quartz raw material through precision crushing and grading. It secures a specification purity of SiO₂ ≥99.85% (typical 99.92%) while maintaining ultra-low typical metallic impurities — Al 35 ppm, Ca 5 ppm, Fe 3 ppm, K 6 ppm, Mg 0.5 ppm, Na 7 ppm — making it suitable for electronic and chemical formulations that demand both insulation reliability and color stability.\n\nParticle size is controlled to D50 12±2 µm, with a typical distribution of D10 2.4 µm, D50 12.1 µm and D100 28.6 µm. The narrow, uniform distribution sustains stable flow and low viscosity even at high filler loading, improving moldability and surface quality. Moisture is held at ≤0.2% (typical 0.1%), suppressing agglomeration and void formation during storage and compounding.\n\nThe particle size distribution (PSD) can be adjusted according to the actual usage situation or user demand. With the high hardness (Mohs 7), excellent chemical stability and cost efficiency characteristic of crystalline silica, SL-HS12 is supplied reliably for a wide range of industrial filler applications.",
  jaDescription:
    "SL-HS12は、高純度石英(α-Quartz)原料を破砕・分級などの精密加工工程を経て製造した結晶質二酸化ケイ素(SiO₂)微粉です。規格SiO₂ ≥99.85%(代表値99.92%)の高純度を確保しつつ、Al 35 ppm・Ca 5 ppm・Fe 3 ppm・K 6 ppm・Mg 0.5 ppm・Na 7 ppmという極めて低い金属不純物代表値を維持し、絶縁信頼性と色調安定性が同時に求められる電子・化学素材配合に適しています。\n\n粒度はD50 12±2 µmを基準に管理され、代表分布はD10 2.4 µm・D50 12.1 µm・D100 28.6 µmです。狭く均一な粒度分布により、樹脂への高充填時でも安定した流動性と低粘度を維持し、成形性と表面品位を向上させます。水分は≤0.2%(代表値0.1%)に管理され、保管・混練時の凝集や気泡発生を抑制します。\n\n粒度分布(PSD)はお客様の実際の使用状況・要求仕様に応じて調整可能です。結晶質シリカ特有の高硬度(モース7)・優れた化学安定性・経済性を基盤に、多様な産業用フィラー用途へ安定供給します。",
  image: slHs12Img,
  category: "advanced-series",
  features: [
    { title: "🧪 SiO₂ ≥99.85% (대표 99.92%)", desc: "고순도 석영 원료 기반 — 규격 대비 여유 있는 대표 순도 확보", enTitle: "🧪 SiO₂ ≥99.85% (typ. 99.92%)", jaTitle: "🧪 SiO₂ ≥99.85% (代表値99.92%)", enDesc: "From high-purity quartz — typical purity comfortably above specification", jaDesc: "高純度石英原料ベース — 規格に対し余裕のある代表純度" },
    { title: "🧼 극저 금속 불순물", desc: "Al 35 · Ca 5 · Fe 3 · K 6 · Mg 0.5 · Na 7 ppm (대표치)", enTitle: "🧼 Ultra-Low Metallic Impurities", jaTitle: "🧼 極低金属不純物", enDesc: "Al 35 · Ca 5 · Fe 3 · K 6 · Mg 0.5 · Na 7 ppm (typical)", jaDesc: "Al 35 · Ca 5 · Fe 3 · K 6 · Mg 0.5 · Na 7 ppm (代表値)" },
    { title: "📐 정밀 입도 D50 12±2 µm", desc: "D10 2.4 · D50 12.1 · D100 28.6 µm — 좁고 균일한 분포", enTitle: "📐 Precise PSD · D50 12±2 µm", jaTitle: "📐 精密粒度 D50 12±2 µm", enDesc: "D10 2.4 · D50 12.1 · D100 28.6 µm — narrow, uniform distribution", jaDesc: "D10 2.4 · D50 12.1 · D100 28.6 µm — 狭く均一な分布" },
    { title: "💧 저수분 ≤0.2% (대표 0.1%)", desc: "응집·기포 억제로 안정적인 혼련·성형 품질 확보", enTitle: "💧 Low Moisture ≤0.2% (typ. 0.1%)", jaTitle: "💧 低水分 ≤0.2% (代表値0.1%)", enDesc: "Suppresses agglomeration and voids for stable compounding and molding", jaDesc: "凝集・気泡を抑制し安定した混練・成形品質を確保" },
    { title: "💎 α-Quartz 결정 구조", desc: "Mohs 7의 높은 경도와 우수한 화학적 안정성", enTitle: "💎 α-Quartz Crystal Structure", jaTitle: "💎 α-Quartz 結晶構造", enDesc: "Mohs 7 hardness with excellent chemical stability", jaDesc: "モース7の高硬度と優れた化学安定性" },
    { title: "🔧 PSD 맞춤 조정", desc: "입도 분포는 고객 사용 조건·요구 사양에 따라 조정 가능", enTitle: "🔧 Customizable PSD", jaTitle: "🔧 PSDカスタム調整", enDesc: "Particle size distribution adjustable per actual usage or user demand", jaDesc: "粒度分布は使用状況・要求仕様に応じて調整可能" },
  ],
  specs: [
    { label: "제품 코드", value: "SL-HS12", enLabel: "Product Code", jaLabel: "製品コード" },
    { label: "제조 공정", value: "고순도 석영 원료 파쇄 · 분급", enValue: "Crushing & grading of high-purity quartz", jaValue: "高純度石英原料の破砕・分級", enLabel: "Process", jaLabel: "製造工程" },
    { label: "SiO₂", value: "규격 ≥99.85 % · 대표 99.92 %", enValue: "Spec ≥99.85 % · Typical 99.92 %", jaValue: "規格 ≥99.85 % · 代表値 99.92 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
    { label: "Al", value: "규격 ≤100 ppm · 대표 35 ppm", enValue: "Spec ≤100 ppm · Typical 35 ppm", jaValue: "規格 ≤100 ppm · 代表値 35 ppm", enLabel: "Al", jaLabel: "Al" },
    { label: "Ca", value: "규격 ≤50 ppm · 대표 5 ppm", enValue: "Spec ≤50 ppm · Typical 5 ppm", jaValue: "規格 ≤50 ppm · 代表値 5 ppm", enLabel: "Ca", jaLabel: "Ca" },
    { label: "Fe", value: "규격 ≤50 ppm · 대표 3 ppm", enValue: "Spec ≤50 ppm · Typical 3 ppm", jaValue: "規格 ≤50 ppm · 代表値 3 ppm", enLabel: "Fe", jaLabel: "Fe" },
    { label: "K", value: "규격 ≤50 ppm · 대표 6 ppm", enValue: "Spec ≤50 ppm · Typical 6 ppm", jaValue: "規格 ≤50 ppm · 代表値 6 ppm", enLabel: "K", jaLabel: "K" },
    { label: "Mg", value: "규격 ≤50 ppm · 대표 0.5 ppm", enValue: "Spec ≤50 ppm · Typical 0.5 ppm", jaValue: "規格 ≤50 ppm · 代表値 0.5 ppm", enLabel: "Mg", jaLabel: "Mg" },
    { label: "Na", value: "규격 ≤50 ppm · 대표 7 ppm", enValue: "Spec ≤50 ppm · Typical 7 ppm", jaValue: "規格 ≤50 ppm · 代表値 7 ppm", enLabel: "Na", jaLabel: "Na" },
    { label: "수분 (Moisture)", value: "규격 ≤0.2 % · 대표 0.1 %", enValue: "Spec ≤0.2 % · Typical 0.1 %", jaValue: "規格 ≤0.2 % · 代表値 0.1 %", enLabel: "Moisture", jaLabel: "水分 (Moisture)" },
    { label: "입도 D10", value: "대표 2.4 µm", enValue: "Typical 2.4 µm", jaValue: "代表値 2.4 µm", enLabel: "Particle Size D10", jaLabel: "粒度 D10" },
    { label: "입도 D50", value: "규격 12±2 µm · 대표 12.1 µm", enValue: "Spec 12±2 µm · Typical 12.1 µm", jaValue: "規格 12±2 µm · 代表値 12.1 µm", enLabel: "Particle Size D50", jaLabel: "粒度 D50" },
    { label: "입도 D100", value: "대표 28.6 µm", enValue: "Typical 28.6 µm", jaValue: "代表値 28.6 µm", enLabel: "Particle Size D100", jaLabel: "粒度 D100" },
    { label: "비고", value: "입도 분포(PSD)는 고객의 사용 조건 및 요구에 따라 조정 가능", enValue: "The particle size distribution (PSD) can be adjusted according to the actual usage situation or user demand", jaValue: "粒度分布(PSD)は使用状況・お客様のご要望に応じて調整可能", enLabel: "Remark", jaLabel: "備考" },
    { label: "원산지", value: "중국 (China)", enValue: "China", jaValue: "中国", enLabel: "Country of Origin", jaLabel: "原産地" },
  ],
  applications: [],
});





// ============= Silica Sol (Colloidal Silica) — category index + 2 children =============
const silicaSolCommonApps = [
  "정밀 주조 (인베스트먼트 캐스팅) 셸 몰드",
  "내화·불소계 코팅 및 도료 바인더",
  "제지·섬유·부직포 표면 개질",
  "촉매 담체 및 촉매 바인더",
  "리튬이온 이차전지 세라믹 코팅 세퍼레이터",
  "반도체 CMP 슬러리 원료",
  "실리카·알루미나·지르코니아 세라믹 결합제",
  "친환경 무기 접착제·경화제",
  "표면 하드코팅·안티슬립·안티글레어 코팅",
];
const silicaSolCommonAppsEn = [
  "Investment-casting shell binder",
  "Refractory and inorganic coating binder",
  "Paper / textile / nonwoven surface modification",
  "Catalyst support and catalyst binder",
  "Ceramic-coated separators for lithium-ion batteries",
  "Feedstock for semiconductor CMP slurry",
  "Ceramic binder for silica / alumina / zirconia bodies",
  "Eco-friendly inorganic adhesive and hardener",
  "Hard, anti-slip and anti-glare surface coatings",
];

productCatalog.push({
  slug: "silica-sol",
  name: "실리카졸 (콜로이달 실리카)",
  enName: "Silica Sol (Colloidal Silica)",
  jaName: "シリカゾル (コロイダルシリカ)",
  tagline: "10 ~ 12 nm 초미립 · 암모니아 안정형 고순도 콜로이달 실리카 라인업",
  enTagline: "10–12 nm Ultrafine, Ammonia-Stabilized High-Purity Colloidal Silica Lineup",
  jaTagline: "10~12 nm 超微粒 · アンモニア安定型 高純度コロイダルシリカラインアップ",
  description:
    "SL 실리카졸은 물속에 10~12 nm 크기의 초미립 비정질 SiO₂ 나노 입자가 균일하게 분산된 유백색 반투명 콜로이드 용액으로, 암모니아(NH₃) 계열로 안정화된 신형(New Type) 라인업입니다. 넓은 비표면적(약 200~260 m²/g)과 우수한 콜로이드 안정성을 바탕으로 정밀 주조(인베스트먼트 캐스팅)의 셸 몰드 바인더, 내화·세라믹 코팅제, 촉매 담체, 제지·섬유 표면 개질, 반도체 CMP 슬러리 원료, 리튬이온 이차전지 세라믹 코팅 세퍼레이터 등 첨단·전통 산업을 폭넓게 커버합니다.\n\nSiLiCA는 SiO₂ 함량과 알칼리(Na₂O) 수준에 따라 SL-JA25(25~26%)와 SL-JA30(30~31%) 두 가지 표준 그레이드를 공급하며, 고객의 슬러리 배합·바인더 함량·pH 요구에 맞추어 농도, 입자경, 안정제 계열(NH₃/Na)까지 맞춤 대응이 가능합니다.",
  enDescription:
    "SL Silica Sol is a milky-white translucent colloidal solution in which 10–12 nm ultrafine amorphous SiO₂ nanoparticles are uniformly dispersed in water, stabilized with an ammonia (NH₃) system as a New-Type product line. Its very large specific surface area (~200–260 m²/g) and excellent colloidal stability make it suitable for investment-casting shell binders, refractory and ceramic coatings, catalyst supports, paper and textile surface modification, semiconductor CMP slurry feedstock and ceramic-coated separators for lithium-ion batteries.\n\nSiLiCA offers two standard grades — SL-JA25 (SiO₂ 25–26%) and SL-JA30 (SiO₂ 30–31%) — with customizable concentration, particle size and stabilizer system (NH₃/Na) to match customer slurry, binder and pH requirements.",
  jaDescription:
    "SLシリカゾルは、水中に10~12 nmの超微粒非晶質SiO₂ナノ粒子を均一に分散させた乳白色半透明のコロイド溶液で、アンモニア(NH₃)系で安定化した新型(New Type)ラインアップです。約200~260 m²/gの大きな比表面積と優れたコロイド安定性を活かし、精密鋳造(インベストメント鋳造)のシェルバインダー、耐火・セラミックコーティング、触媒担体、製紙・繊維の表面改質、半導体CMPスラリー原料、リチウムイオン二次電池のセラミックコーティングセパレーターなど、先端・伝統産業を幅広くカバーします。\n\nSiLiCAはSiO₂濃度とアルカリ(Na₂O)レベルに応じてSL-JA25(25~26%)およびSL-JA30(30~31%)の2種標準グレードを供給し、スラリー配合・バインダー含量・pH要求に合わせて濃度・粒子径・安定剤系(NH₃/Na)までカスタム対応が可能です。",
  image: silicaSolImg,
  detailImage: silicaSolImg,
  category: "quartz",
  isCategoryIndex: true,
  features: [
    { title: "💧 10~12 nm 초미립 나노 실리카", desc: "균일한 나노 입자경으로 미세 기공 침투·박막 코팅 최적", enTitle: "💧 10–12 nm Ultrafine Nano Silica", jaTitle: "💧 10~12 nm 超微粒ナノシリカ", enDesc: "Uniform nano particle size — ideal for fine-pore penetration and thin-film coating", jaDesc: "均一なナノ粒子径で微細細孔浸透・薄膜コーティングに最適" },
    { title: "🧪 암모니아 안정형(New Type)", desc: "NH₃ 안정화로 저 Na⁺·저 이온성 — 반도체·전지용 세라믹 코팅 대응", enTitle: "🧪 Ammonia-Stabilized (New Type)", jaTitle: "🧪 アンモニア安定型 (New Type)", enDesc: "NH₃ system — low Na⁺ / low ionic content for semiconductor and battery ceramic coating", jaDesc: "NH₃安定化で低Na⁺・低イオン性 — 半導体・電池向けセラミックコーティングに対応" },
    { title: "🌡️ 우수한 내열성·소결성", desc: "고온 소성 시 잔류물 최소 · 순수 SiO₂ 결합제 형성", enTitle: "🌡️ Excellent Heat & Sintering Performance", jaTitle: "🌡️ 優れた耐熱性・焼結性", enDesc: "Minimal residue on firing — forms a pure SiO₂ binder network", jaDesc: "高温焼成時の残留物が最少 · 純粋SiO₂結合ネットワークを形成" },
    { title: "🧱 강력한 결합력", desc: "정밀 주조 셸 강도·내화 코팅 밀착력 극대화", enTitle: "🧱 Strong Binding Power", jaTitle: "🧱 強力な結合力", enDesc: "Maximizes investment-shell strength and refractory-coating adhesion", jaDesc: "精密鋳造シェル強度・耐火コーティング密着力を極大化" },
    { title: "🌿 친환경 · 무기 · 무독성", desc: "VOC-Free · 유기 바인더 대체 친환경 무기 소재", enTitle: "🌿 Eco-Friendly · Inorganic · Non-Toxic", jaTitle: "🌿 環境配慮 · 無機 · 無毒性", enDesc: "VOC-free — inorganic replacement for organic binders", jaDesc: "VOCフリー · 有機バインダー代替の環境配慮型無機素材" },
    { title: "🎛️ 2종 표준 그레이드 · 맞춤 대응", desc: "SL-JA25 / SL-JA30 표준 + 농도·입자경·안정제 커스텀", enTitle: "🎛️ Two Standard Grades · Custom Supply", jaTitle: "🎛️ 2種標準グレード · カスタム対応", enDesc: "SL-JA25 / SL-JA30 standard + custom concentration / particle size / stabilizer", jaDesc: "SL-JA25 / SL-JA30 標準 + 濃度・粒子径・安定剤カスタム" },
  ],
  specs: [
    { label: "제품 라인업", value: "SL-JA25 / SL-JA30 (신형·NH₃ 안정형)", enValue: "SL-JA25 / SL-JA30 (New Type · NH₃-stabilized)", jaValue: "SL-JA25 / SL-JA30 (新型・NH₃安定型)", enLabel: "Product Lineup", jaLabel: "製品ラインアップ" },
    { label: "외관", value: "유백색 반투명 콜로이드 액", enValue: "Milky-white translucent colloidal liquid", jaValue: "乳白色半透明のコロイド液", enLabel: "Appearance", jaLabel: "外観" },
    { label: "SiO₂ 함량", value: "25 ~ 31 %", enLabel: "SiO₂ Content", jaLabel: "SiO₂含有量" },
    { label: "평균 입자경", value: "10 ~ 12 nm", enLabel: "Mean Particle Size", jaLabel: "平均粒子径" },
    { label: "비표면적 (SSA)", value: "약 200 ~ 260 m²/g", enValue: "~200–260 m²/g", jaValue: "約200~260 m²/g", enLabel: "Specific Surface Area", jaLabel: "比表面積 (SSA)" },
    { label: "pH", value: "9.0 ~ 9.8", enLabel: "pH", jaLabel: "pH" },
    { label: "밀도", value: "1.19 ~ 1.21 g/cm³", enLabel: "Density", jaLabel: "密度" },
    { label: "안정제", value: "NH₃ (신형) · Na 계열 커스텀 대응", enValue: "NH₃ (New Type) · Na-system on request", jaValue: "NH₃(新型) · Na系カスタム対応", enLabel: "Stabilizer", jaLabel: "安定剤" },
    { label: "원산지", value: "중국 (China)", enValue: "China", jaValue: "中国", enLabel: "Origin", jaLabel: "原産地" },
    { label: "포장", value: "25 kg 드럼 · 200 kg 드럼 · 1,000 kg IBC", enValue: "25 kg drum · 200 kg drum · 1,000 kg IBC", jaValue: "25 kg ドラム · 200 kg ドラム · 1,000 kg IBC", enLabel: "Packaging", jaLabel: "包装" },
  ],
  subModelsColumnLabel: { ko: "그레이드", en: "Grade", ja: "グレード" },
  subModels: [
    { code: "SL-JA25", slug: "sl-ja25", spec: "SiO₂ 25~26% · 10~12 nm · NH₃ 안정형", enSpec: "SiO₂ 25–26% · 10–12 nm · NH₃-stabilized", jaSpec: "SiO₂ 25~26% · 10~12 nm · NH₃安定型", name: "SL-JA25 실리카졸", enName: "SL-JA25 · Silica Sol", jaName: "SL-JA25 シリカゾル" },
    { code: "SL-JA30", slug: "sl-ja30", spec: "SiO₂ 30~31% · 10~11.5 nm · NH₃ 안정형", enSpec: "SiO₂ 30–31% · 10–11.5 nm · NH₃-stabilized", jaSpec: "SiO₂ 30~31% · 10~11.5 nm · NH₃安定型", name: "SL-JA30 실리카졸", enName: "SL-JA30 · Silica Sol", jaName: "SL-JA30 シリカゾル" },
    { code: "SL-SHS", slug: "sl-shs", spec: "14종 그레이드 · JN/SW/JA/ZX/JGC 시리즈 · 6~30 nm", enSpec: "14-grade lineup · JN/SW/JA/ZX/JGC series · 6–30 nm", jaSpec: "14グレード · JN/SW/JA/ZX/JGC シリーズ · 6~30 nm", name: "콜로이달 실리카 시리즈", enName: "Colloidal Silica Full Series", jaName: "コロイダルシリカ シリーズ" },
  ],
  applications: silicaSolCommonApps,
});

const silicaSolChildren: ProductDetail[] = [
  {
    slug: "sl-ja25",
    name: "SL-JA25 실리카졸",
    enName: "SL-JA25 · Silica Sol (New Type)",
    jaName: "SL-JA25 シリカゾル (新型)",
    tagline: "SiO₂ 25~26% · 10~12 nm · NH₃ 안정형 표준 콜로이달 실리카",
    enTagline: "SiO₂ 25–26% · 10–12 nm · NH₃-Stabilized Standard Colloidal Silica",
    jaTagline: "SiO₂ 25~26% · 10~12 nm · NH₃安定型 標準コロイダルシリカ",
    description:
      "SL-JA25는 SiO₂ 25~26% 농도, 평균 입경 10~12 nm의 암모니아(NH₃) 안정형 신형 콜로이달 실리카입니다. 낮은 알칼리(Na₂O ≤ 0.03%)와 우수한 콜로이드 안정성을 바탕으로 정밀 주조 셸 몰드 바인더, 내화 도료, 세라믹 코팅, 촉매 담체, 리튬 이차전지 세라믹 세퍼레이터 코팅 등 저 이온·저 잔류물이 요구되는 응용에 최적화된 표준 그레이드입니다.",
    enDescription:
      "SL-JA25 is an ammonia (NH₃) stabilized New-Type colloidal silica with SiO₂ 25–26% and a mean particle size of 10–12 nm. With low alkali (Na₂O ≤ 0.03%) and excellent colloidal stability, it is the standard grade for applications requiring low ionic content and low residue — investment-casting shell binders, refractory paints, ceramic coatings, catalyst supports and ceramic-coated separators for lithium-ion batteries.",
    jaDescription:
      "SL-JA25はSiO₂ 25~26%、平均粒子径10~12 nmのアンモニア(NH₃)安定型・新型コロイダルシリカです。低アルカリ(Na₂O ≤ 0.03%)と優れたコロイド安定性を活かし、精密鋳造シェルバインダー、耐火塗料、セラミックコーティング、触媒担体、リチウム二次電池のセラミックセパレーターコーティングなど低イオン・低残留物が求められる用途に最適な標準グレードです。",
    image: silicaSolImg,
    detailImage: silicaSolImg,
    category: "quartz",
    parentSlug: "silica-sol",
    features: [
      { title: "💧 SiO₂ 25 ~ 26 %", desc: "저농도·저점도 표준 그레이드 — 침투성·분산성 우수", enTitle: "💧 SiO₂ 25–26 %", jaTitle: "💧 SiO₂ 25 ~ 26 %", enDesc: "Low-concentration, low-viscosity standard grade — excellent penetration and dispersion", jaDesc: "低濃度・低粘度の標準グレード — 浸透性・分散性に優れる" },
      { title: "🧪 저 Na₂O ≤ 0.03 %", desc: "낮은 알칼리 · 저 이온성 — 전자·전지 코팅 대응", enTitle: "🧪 Low Na₂O ≤ 0.03 %", jaTitle: "🧪 低Na₂O ≤ 0.03 %", enDesc: "Low alkali / ionic content for electronics and battery coating", jaDesc: "低アルカリ・低イオン性で電子・電池コーティングに対応" },
      { title: "🔬 평균 입경 10 ~ 12 nm", desc: "초미립 · 넓은 비표면적 → 강한 결합력·소결성", enTitle: "🔬 Mean 10–12 nm", jaTitle: "🔬 平均粒子径 10 ~ 12 nm", enDesc: "Ultrafine, high SSA — strong binding and sintering", jaDesc: "超微粒・高比表面積 → 強い結合力・焼結性" },
      { title: "🌡️ 우수한 소결성", desc: "고온 소성 시 순수 SiO₂ 결합상 형성", enTitle: "🌡️ Excellent Sintering", jaTitle: "🌡️ 優れた焼結性", enDesc: "Pure SiO₂ binder phase upon firing", jaDesc: "高温焼成時に純粋SiO₂結合相を形成" },
      { title: "🏭 안정 대량 공급", desc: "IBC/드럼 다양한 포장 · 대량 프로젝트 대응", enTitle: "🏭 Mass Supply", jaTitle: "🏭 大量供給", enDesc: "IBC/drum packaging — supports large-volume projects", jaDesc: "IBC/ドラム多様な包装 · 大量プロジェクト対応" },
      { title: "🌿 VOC-Free 친환경 무기", desc: "유기 바인더 대체 · 환경 규제 대응", enTitle: "🌿 VOC-Free · Inorganic", jaTitle: "🌿 VOCフリー · 無機", enDesc: "Replaces organic binders — complies with environmental regulations", jaDesc: "有機バインダー代替 · 環境規制対応" },
    ],
    specs: [
      { label: "제품 코드", value: "SL-JA25", enLabel: "Product Code", jaLabel: "製品コード" },
      { label: "타입", value: "신형 (New Type) · NH₃ 안정형", enValue: "New Type · NH₃-stabilized", jaValue: "新型 (New Type) · NH₃安定型", enLabel: "Type", jaLabel: "タイプ" },
      { label: "외관", value: "유백색 반투명 콜로이드 액", enValue: "Milky-white translucent colloidal liquid", jaValue: "乳白色半透明のコロイド液", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂", value: "25 ~ 26 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "Na₂O", value: "≤ 0.03 %", enLabel: "Na₂O", jaLabel: "Na₂O" },
      { label: "pH", value: "9.0 ~ 9.6", enLabel: "pH", jaLabel: "pH" },
      { label: "점도 (Viscosity)", value: "≤ 7.0 mPa·s", enLabel: "Viscosity", jaLabel: "粘度 (Viscosity)" },
      { label: "밀도 (Density)", value: "1.19 ~ 1.21 g/cm³", enLabel: "Density", jaLabel: "密度 (Density)" },
      { label: "평균 입자경", value: "10 ~ 12 nm", enLabel: "Mean Particle Size", jaLabel: "平均粒子径" },
      { label: "안정제", value: "NH₃ (암모니아 안정형)", enValue: "NH₃ (ammonia-stabilized)", jaValue: "NH₃ (アンモニア安定型)", enLabel: "Stabilizer", jaLabel: "安定剤" },
      { label: "원산지", value: "중국 (China)", enValue: "China", jaValue: "中国", enLabel: "Origin", jaLabel: "原産地" },
      { label: "포장", value: "25 kg 드럼 · 200 kg 드럼 · 1,000 kg IBC", enValue: "25 kg drum · 200 kg drum · 1,000 kg IBC", jaValue: "25 kg ドラム · 200 kg ドラム · 1,000 kg IBC", enLabel: "Packaging", jaLabel: "包装" },
    ],
    applications: silicaSolCommonApps,
  },
  {
    slug: "sl-ja30",
    name: "SL-JA30 실리카졸",
    enName: "SL-JA30 · Silica Sol (New Type)",
    jaName: "SL-JA30 シリカゾル (新型)",
    tagline: "SiO₂ 30~31% · 10~11.5 nm · NH₃ 안정형 고농도 콜로이달 실리카",
    enTagline: "SiO₂ 30–31% · 10–11.5 nm · NH₃-Stabilized High-Concentration Colloidal Silica",
    jaTagline: "SiO₂ 30~31% · 10~11.5 nm · NH₃安定型 高濃度コロイダルシリカ",
    description:
      "SL-JA30은 SiO₂ 30~31% 고농도, 평균 입경 10~11.5 nm의 암모니아(NH₃) 안정형 신형 콜로이달 실리카로, 비표면적 198~258 m²/g 수준의 초미립 나노 입자를 균일하게 분산시킨 유백색 반투명 콜로이드 액입니다. 고농도 SiO₂ 특성 덕분에 동일 사용량 대비 더 강한 결합력·소결 강도를 확보할 수 있어 정밀 주조 셸 몰드, 내화 코팅, 세라믹 결합제, 촉매 담체, 이차전지 세라믹 세퍼레이터 코팅, CMP 슬러리 원료 등 고성능이 요구되는 응용에 특히 적합합니다.",
    enDescription:
      "SL-JA30 is an ammonia (NH₃) stabilized New-Type colloidal silica with high SiO₂ content of 30–31% and a mean particle size of 10–11.5 nm. Its ultrafine nanoparticles (SSA 198–258 m²/g) are uniformly dispersed in water as a milky-white translucent colloid. The higher SiO₂ concentration delivers greater binding force and sintering strength per unit dose, making SL-JA30 particularly suitable for investment-casting shell molds, refractory coatings, ceramic binders, catalyst supports, ceramic-coated separators for secondary batteries and CMP slurry feedstock.",
    jaDescription:
      "SL-JA30はSiO₂ 30~31%の高濃度、平均粒子径10~11.5 nmのアンモニア(NH₃)安定型・新型コロイダルシリカで、比表面積198~258 m²/gの超微粒ナノ粒子を均一に分散させた乳白色半透明のコロイド液です。高濃度SiO₂により同量使用時により強い結合力・焼結強度を確保でき、精密鋳造シェルバインダー、耐火コーティング、セラミック結合剤、触媒担体、二次電池セラミックセパレーターコーティング、CMPスラリー原料など高性能が求められる用途に特に適します。",
    image: silicaSolImg,
    detailImage: silicaSolImg,
    category: "quartz",
    parentSlug: "silica-sol",
    features: [
      { title: "💧 고농도 SiO₂ 30 ~ 31 %", desc: "동일 사용량 · 더 강한 결합력 및 소결 강도", enTitle: "💧 High SiO₂ 30–31 %", jaTitle: "💧 高濃度 SiO₂ 30 ~ 31 %", enDesc: "Stronger binding and sintering strength per unit dose", jaDesc: "同量使用でより強い結合力・焼結強度" },
      { title: "🔬 평균 입경 10 ~ 11.5 nm", desc: "초미립 나노 분산 · 미세 기공 침투성 우수", enTitle: "🔬 Mean 10–11.5 nm", jaTitle: "🔬 平均粒子径 10 ~ 11.5 nm", enDesc: "Ultrafine nano dispersion — excellent fine-pore penetration", jaDesc: "超微粒ナノ分散 · 微細細孔浸透性に優れる" },
      { title: "🧪 SSA 198 ~ 258 m²/g", desc: "매우 넓은 비표면적 · 강한 결합·촉매 담지력", enTitle: "🧪 SSA 198–258 m²/g", jaTitle: "🧪 SSA 198 ~ 258 m²/g", enDesc: "Very high SSA — strong binding and catalyst-loading capacity", jaDesc: "非常に大きい比表面積 · 強い結合・触媒担持力" },
      { title: "🌡️ 우수한 소결·내열", desc: "고온 소성 시 순수 SiO₂ 결합상 · 저 잔류물", enTitle: "🌡️ Excellent Sintering / Heat", jaTitle: "🌡️ 優れた焼結性・耐熱", enDesc: "Pure SiO₂ phase and low residue on firing", jaDesc: "高温焼成時に純粋SiO₂結合相・低残留物" },
      { title: "🧱 정밀 주조 셸 강도 극대화", desc: "고농도 실리카졸 → 셸 몰드 강도·박리 저항성 향상", enTitle: "🧱 Max Investment-Shell Strength", jaTitle: "🧱 精密鋳造シェル強度を最大化", enDesc: "High-concentration sol boosts shell strength and delamination resistance", jaDesc: "高濃度シリカゾルでシェル強度・剥離耐性を向上" },
      { title: "🏭 안정 대량 공급", desc: "IBC/드럼 다양한 포장으로 대형 프로젝트 대응", enTitle: "🏭 Mass Supply", jaTitle: "🏭 大量供給", enDesc: "IBC/drum packaging for large-scale projects", jaDesc: "IBC/ドラム多様な包装で大型プロジェクトに対応" },
    ],
    specs: [
      { label: "제품 코드", value: "SL-JA30", enLabel: "Product Code", jaLabel: "製品コード" },
      { label: "타입", value: "신형 (New Type) · NH₃ 안정형", enValue: "New Type · NH₃-stabilized", jaValue: "新型 (New Type) · NH₃安定型", enLabel: "Type", jaLabel: "タイプ" },
      { label: "외관", value: "유백색 반투명 콜로이드 액", enValue: "Milky-white translucent colloidal liquid", jaValue: "乳白色半透明のコロイド液", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂", value: "30 ~ 31 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "Na₂O", value: "≤ 0.06 %", enLabel: "Na₂O", jaLabel: "Na₂O" },
      { label: "pH", value: "9.5 ~ 9.8", enLabel: "pH", jaLabel: "pH" },
      { label: "점도 (Viscosity)", value: "≤ 7.0 mPa·s", enLabel: "Viscosity", jaLabel: "粘度 (Viscosity)" },
      { label: "밀도 (Density)", value: "1.19 ~ 1.21 g/cm³", enLabel: "Density", jaLabel: "密度 (Density)" },
      { label: "평균 입자경", value: "10 ~ 11.5 nm", enLabel: "Mean Particle Size", jaLabel: "平均粒子径" },
      { label: "비표면적 (SSA)", value: "198 ~ 258 m²/g", enLabel: "Specific Surface Area", jaLabel: "比表面積 (SSA)" },
      { label: "안정제", value: "NH₃ (암모니아 안정형)", enValue: "NH₃ (ammonia-stabilized)", jaValue: "NH₃ (アンモニア安定型)", enLabel: "Stabilizer", jaLabel: "安定剤" },
      { label: "원산지", value: "중국 (China)", enValue: "China", jaValue: "中国", enLabel: "Origin", jaLabel: "原産地" },
      { label: "포장", value: "25 kg 드럼 · 200 kg 드럼 · 1,000 kg IBC", enValue: "25 kg drum · 200 kg drum · 1,000 kg IBC", jaValue: "25 kg ドラム · 200 kg ドラム · 1,000 kg IBC", enLabel: "Packaging", jaLabel: "包装" },
    ],
    applications: silicaSolCommonApps,
  },
  {
    slug: "sl-shs",
    name: "콜로이달 실리카 시리즈",
    enName: "Colloidal Silica / Silica Sol Full Series",
    jaName: "コロイダルシリカ シリーズ",
    tagline: "JN · SW · JA · ZX · JGC 14종 그레이드 · SiO₂ 15~41% · 6~30 nm 풀 라인업",
    enTagline: "JN · SW · JA · ZX · JGC 14-Grade Lineup · SiO₂ 15–41% · 6–30 nm Full Range",
    jaTagline: "JN · SW · JA · ZX · JGC 14グレード · SiO₂ 15~41% · 6~30 nm フルラインアップ",
    description:
      "SL-SHS는 알칼리(JN)·산성(SW)·암모니아(JA)·저이온(ZX)·특수(JGC) 안정형 등 5개 계열 총 14종 그레이드를 아우르는 콜로이달 실리카(실리카졸) 풀 라인업입니다. SiO₂ 15~41%, 평균 입경 6~30 nm 범위에서 정밀 주조 셸 몰드 바인더, 제지·섬유 표면 개질, 도료·코팅, 내화·세라믹, 실리콘 시트 처리제, 이차전지 고체 전해질, 촉매 담체, 방활 처리제(anti-slip)까지 산업 전반의 요구 사양을 폭넓게 커버합니다.\n\n실리카졸은 물에 분산된 무취·무독·유백색의 나노 실리카 입자로, 10~20 nm 초미립 특성과 큰 비표면적 덕분에 매체의 색상에 영향을 주지 않고 다른 물질과 혼합해도 분산성·투과성이 매우 우수합니다. 수분 증발 후에는 실리카-산소(Si-O) 결합을 통해 소재 표면에 견고히 부착되어 우수한 접착 특성을 발현합니다. JN(알칼리)·SW(산성)·JA(암모니아)·ZX(저 Cl⁻)·JGC(초저 이온) 계열별로 pH·이온도·점도·입자경을 세밀하게 조정 공급하며, 25 kg 드럼 · 200 kg 드럼 · 1,000 kg IBC 등 다양한 포장으로 안정 대량 공급됩니다.",
    enDescription:
      "SL-SHS is a full-range colloidal silica (silica sol) lineup covering 14 grades across 5 stabilization systems: alkaline (JN), acidic (SW), ammonia (JA), low-ion (ZX) and specialty (JGC). Spanning SiO₂ 15–41% and mean particle size 6–30 nm, the range covers investment-casting shell binders, paper and textile surface modification, paints and coatings, refractories and ceramics, silicon-sheet treatment agents, solid electrolytes for secondary batteries, catalyst supports and anti-slip treatments.\n\nSilica sol is an odorless, non-toxic, milky-white colloid of amorphous SiO₂ nanoparticles dispersed in water. The 10–20 nm ultrafine particle size and high specific surface area allow it to blend with other substances without affecting color, offering excellent dispersibility and permeability. After water evaporation, the colloidal particles bond firmly to material surfaces through Si–O linkages, delivering strong adhesion. Grades in the JN (alkaline), SW (acidic), JA (ammonia), ZX (low-Cl⁻) and JGC (ultra-low-ion) series are supplied with fine adjustments of pH, ionic content, viscosity and particle size, packaged in 25 kg drums, 200 kg drums and 1,000 kg IBCs.",
    jaDescription:
      "SL-SHSは、アルカリ(JN)・酸性(SW)・アンモニア(JA)・低イオン(ZX)・特殊(JGC)の5つの安定化系にわたる14グレードを網羅するコロイダルシリカ(シリカゾル)のフルラインアップです。SiO₂ 15~41%、平均粒径6~30 nmの範囲で、精密鋳造シェルバインダー、製紙・繊維の表面改質、塗料・コーティング、耐火・セラミック、シリコンシート処理剤、二次電池固体電解質、触媒担体、防滑処理剤(anti-slip)まで、産業界の幅広い要求仕様をカバーします。\n\nシリカゾルは水中に分散した無臭・無毒・乳白色のナノシリカ粒子で、10~20 nmの超微粒特性と大きな比表面積により、媒体の色に影響を与えず他の物質と混合しても分散性・透過性に優れます。水分蒸発後はSi-O結合を介して素材表面に強固に付着し、優れた接着特性を発現します。JN(アルカリ)・SW(酸性)・JA(アンモニア)・ZX(低Cl⁻)・JGC(超低イオン)の各系列でpH・イオン度・粘度・粒径をきめ細かく調整して供給し、25 kg ドラム · 200 kg ドラム · 1,000 kg IBC など多様な包装で安定大量供給します。",
    image: slShsImg,
    detailImage: slShsImg,
    category: "quartz",
    parentSlug: "silica-sol",
    features: [
      { title: "🎛️ 14종 그레이드 풀 라인업", desc: "JN · SW · JA · ZX · JGC 5개 계열 · 14 그레이드 · 맞춤 대응", enTitle: "🎛️ 14-Grade Full Lineup", jaTitle: "🎛️ 14グレード フルラインアップ", enDesc: "JN · SW · JA · ZX · JGC — 5 series, 14 grades, custom-supply capable", jaDesc: "JN · SW · JA · ZX · JGC 5系列 · 14グレード · カスタム対応" },
      { title: "💧 6 ~ 30 nm 초미립 나노 입자", desc: "매우 큰 비표면적 · 미세 기공 침투 · 강한 결합력", enTitle: "💧 6–30 nm Ultrafine Nano", jaTitle: "💧 6~30 nm 超微粒ナノ粒子", enDesc: "Very high SSA · fine-pore penetration · strong binding", jaDesc: "非常に大きな比表面積 · 微細細孔浸透 · 強い結合力" },
      { title: "🧪 SiO₂ 15 ~ 41 % 폭넓은 농도", desc: "저농도 침투용부터 고농도 결합제까지 자유 선택", enTitle: "🧪 SiO₂ 15–41 % Wide Range", jaTitle: "🧪 SiO₂ 15~41 % 幅広い濃度", enDesc: "From low-conc. penetrants to high-conc. binders", jaDesc: "低濃度浸透用から高濃度バインダーまで自由に選択" },
      { title: "⚖️ pH 2 ~ 11 다중 안정계", desc: "산성(SW)·중성·알칼리(JN)·NH₃(JA) 다양한 시스템 대응", enTitle: "⚖️ Multi-pH Stabilization", jaTitle: "⚖️ pH 2~11 マルチ安定系", enDesc: "Acidic (SW), neutral, alkaline (JN), NH₃ (JA) systems", jaDesc: "酸性(SW)・中性・アルカリ(JN)・NH₃(JA) 各系統に対応" },
      { title: "🌿 무취·무독·친환경 무기 소재", desc: "VOC-Free · 유기 바인더 대체 · 환경 규제 부합", enTitle: "🌿 Odorless · Non-Toxic · Eco", jaTitle: "🌿 無臭 · 無毒 · 環境配慮型無機素材", enDesc: "VOC-free — replaces organic binders, meets environmental standards", jaDesc: "VOCフリー · 有機バインダー代替 · 環境規制適合" },
      { title: "🏭 안정 대량 공급 · IBC 대응", desc: "25 kg / 200 kg 드럼 · 1,000 kg IBC 다양한 포장", enTitle: "🏭 Mass Supply · IBC-Ready", jaTitle: "🏭 大量供給 · IBC対応", enDesc: "25 kg / 200 kg drums · 1,000 kg IBC packaging", jaDesc: "25 kg / 200 kg ドラム · 1,000 kg IBC 多様な包装" },
    ],
    specs: [
      { label: "제품 코드", value: "SL-SHS 시리즈", enValue: "SL-SHS Series", jaValue: "SL-SHS シリーズ", enLabel: "Product Code", jaLabel: "製品コード" },
      { label: "외관", value: "무취·무독 유백색 콜로이드 액", enValue: "Odorless, non-toxic, milky-white colloidal liquid", jaValue: "無臭・無毒 乳白色コロイド液", enLabel: "Appearance", jaLabel: "外観" },
      { label: "계열", value: "JN(알칼리) · SW(산성) · JA(NH₃) · ZX(저 Cl⁻) · JGC(초저 이온)", enValue: "JN (alkaline) · SW (acidic) · JA (NH₃) · ZX (low-Cl⁻) · JGC (ultra-low-ion)", jaValue: "JN(アルカリ) · SW(酸性) · JA(NH₃) · ZX(低Cl⁻) · JGC(超低イオン)", enLabel: "Stabilization Series", jaLabel: "安定化系列" },
      { label: "SiO₂ 함량", value: "15 ~ 41 %", enLabel: "SiO₂ Content", jaLabel: "SiO₂含有量" },
      { label: "평균 입자경", value: "6 ~ 30 nm", enLabel: "Mean Particle Size", jaLabel: "平均粒子径" },
      { label: "pH 범위", value: "2.0 ~ 11.0 (그레이드별)", enValue: "2.0 – 11.0 (grade-dependent)", jaValue: "2.0 ~ 11.0 (グレード別)", enLabel: "pH Range", jaLabel: "pH範囲" },
      { label: "밀도 (Density)", value: "1.09 ~ 1.30 g/cm³", enLabel: "Density", jaLabel: "密度" },
      { label: "점도 (Viscosity, 25℃)", value: "≤ 5 ~ 25 mPa·s", enLabel: "Viscosity (25 ℃)", jaLabel: "粘度 (25 ℃)" },
      { label: "원산지", value: "중국 (China)", enValue: "China", jaValue: "中国", enLabel: "Origin", jaLabel: "原産地" },
      { label: "포장", value: "25 kg 드럼 · 200 kg 드럼 · 1,000 kg IBC · 맞춤 포장", enValue: "25 kg drum · 200 kg drum · 1,000 kg IBC · custom", jaValue: "25 kg ドラム · 200 kg ドラム · 1,000 kg IBC · カスタム", enLabel: "Packaging", jaLabel: "包装" },
    ],
    applications: silicaSolCommonApps,
  },
];
productCatalog.push(...silicaSolChildren);

// ============= Extended Precipitated / Fumed Silica Catalog (China supplier) =============
// Assign useTags to legacy products so filters cover the full lineup
const _legacyTags: Record<string, string[]> = {
  "precipitated-silica-sl-a81": ["고무", "접착제"],
  "precipitated-silica-si-60": ["고무", "접착제"],
  "precipitated-silica-si-175": ["고무", "사료"],
  "fumed-silica-slh-380s": ["고무", "도료", "접착제", "의약"],
};
productCatalog.forEach((p) => { if (!p.useTags && _legacyTags[p.slug]) p.useTags = _legacyTags[p.slug]; });

type SpecRow = { label: string; value: string; note?: string; enLabel?: string; enValue?: string; enNote?: string; jaLabel?: string; jaValue?: string; jaNote?: string };

const mkPS = (
  code: string,
  koName: string, enName: string, jaName: string,
  koTag: string, enTag: string, jaTag: string,
  koDesc: string, enDesc: string, jaDesc: string,
  specs: SpecRow[],
  useTags: string[],
): ProductDetail => ({
  slug: `precipitated-silica-${code.toLowerCase()}`,
  name: `${code} ${koName}`,
  enName: `${code} · ${enName}`,
  jaName: `${code} ${jaName}`,
  tagline: koTag, enTagline: enTag, jaTagline: jaTag,
  description: koDesc, enDescription: enDesc, jaDescription: jaDesc,
  image: precipitatedSilica,
  category: "precipitated",
  features: PS_FEATURES,
  specs,
  applications: PS_APPS,
  useTags,
});

const mkFS = (
  code: string,
  koName: string, enName: string, jaName: string,
  koTag: string, enTag: string, jaTag: string,
  koDesc: string, enDesc: string, jaDesc: string,
  specs: SpecRow[],
  useTags: string[],
): ProductDetail => ({
  slug: `fumed-silica-${code.toLowerCase()}`,
  name: `${code} ${koName}`,
  enName: `${code} · ${enName}`,
  jaName: `${code} ${jaName}`,
  tagline: koTag, enTagline: enTag, jaTagline: jaTag,
  description: koDesc, enDescription: enDesc, jaDescription: jaDesc,
  image: fumedSilica,
  category: "fumed",
  features: FS_FEATURES,
  specs,
  applications: FS_APPS,
  useTags,
});

// —— 침전 실리카 확장 라인업 ——
const precipitatedExtProducts: ProductDetail[] = [
  // 소광제 (도료·코팅용)
  mkPS("SL-CT-102", "침전 실리카 (도료 소광 · 초미세 겸용)", "Precipitated Silica (Matting & Ultrafine Dual-Use)", "沈降シリカ(艶消し・超微粒兼用)",
    "BET 230–260 m²/g · DBP 220–320 · 도료 소광과 범용 보강을 겸비한 초미세 실리카",
    "BET 230–260 m²/g · DBP 220–320 — dual-use ultra-fine silica for paint matting and general-purpose reinforcement",
    "BET 230–260 m²/g · DBP 220–320 — 塗料艶消しと汎用補強を兼備した超微細シリカ",
    "SL-CT-102는 도료·잉크의 소광제와 초미세 이산화규소 두 용도를 겸비한 침전 실리카입니다. 5μm 평균 입경과 230–260 m²/g의 높은 비표면적, 1.4–1.5 ml/g의 공극 부피로 일반 장식페인트·목재·가구·분체도료의 소광 효과와 필름 형성 후 매끄러운 촉감을 동시에 구현합니다. SiO₂ 98.5% · 중성 pH(6.9–7.1)로 유·수성 도료 시스템 모두에서 안정적으로 분산됩니다.",
    "SL-CT-102 is a precipitated silica that combines paint/ink matting and general ultrafine SiO₂ functions. With an average particle size of 5 μm, high BET (230–260 m²/g) and 1.4–1.5 ml/g pore volume, it delivers matting and smooth-touch finishes in decorative, wood, furniture and powder coatings. SiO₂ 98.5% with neutral pH (6.9–7.1) enables stable dispersion in both solvent- and water-based systems.",
    "SL-CT-102は塗料・インキ用艶消し剤と超微細二酸化ケイ素の両用途を兼備した沈降シリカです。平均粒径5μm、BET 230–260 m²/g、細孔容積1.4–1.5 ml/gにより、装飾塗料・木材・家具・粉体塗料での艶消し効果と滑らかな仕上がりを同時に実現します。SiO₂ 98.5%・中性pH(6.9–7.1)で油性・水性塗料に安定分散します。",
    [
      { label: "외관", value: "백색 분말" },
      { label: "SiO₂", value: "98.5 %" },
      { label: "pH", value: "6.9–7.1" },
      { label: "BET", value: "230–260 m²/g" },
      { label: "DBP 흡유량", value: "220–320" },
      { label: "평균 입경", value: "5 μm" },
      { label: "공극 부피", value: "1.4–1.5 ml/g" },
      { label: "주용도", value: "장식페인트·목재·가구·분체도료" },
      { label: "원산지", value: "중국" },
    ],
    ["도료", "소광"]),

  mkPS("SL-CT-107", "침전 실리카 (도료 소광 · 젤법)", "Precipitated Silica Matting Agent (Gel Method)", "沈降シリカ 艶消し剤(ゲル法)",
    "BET 280 m²/g · DBP 360–400 · 젤법 제조 고분산 소광제",
    "BET 280 m²/g · DBP 360–400 — gel-method matting agent with high dispersibility",
    "BET 280 m²/g · DBP 360–400 · ゲル法製造の高分散艶消し剤",
    "SL-CT-107은 젤법으로 제조된 백색 침전 실리카 소광제입니다. 280 m²/g의 비표면적, DBP 360–400, 1.8 ml/g의 대공극 구조로 가구·목재·권강페인트에서 우수한 소광 성능과 부드러운 촉감을 동시에 제공합니다. 5μm 평균 입경으로 필름 표면 요철을 미세하게 형성해 눈부심 없는 무광 마감을 완성합니다.",
    "SL-CT-107 is a gel-method white precipitated silica matting agent. Its 280 m²/g surface area, DBP 360–400 and 1.8 ml/g high pore volume deliver strong matting and smooth touch in furniture, wood and coil coatings. The 5 μm average particle creates a fine micro-texture that produces glare-free matte finishes.",
    "SL-CT-107はゲル法で製造された白色沈降シリカ艶消し剤です。BET 280 m²/g、DBP 360–400、細孔容積1.8 ml/gの構造で家具・木材・コイル塗料に優れた艶消し性能と滑らかな触感を提供します。平均粒径5μmが微細な表面凹凸を形成し、まぶしさのないマット仕上げを実現します。",
    [
      { label: "외관", value: "백색 분말(젤법)" },
      { label: "SiO₂", value: "98.5 %" },
      { label: "pH", value: "6.9–7.1" },
      { label: "BET", value: "280 m²/g" },
      { label: "DBP", value: "360–400" },
      { label: "평균 입경", value: "5 μm" },
      { label: "공극 부피", value: "1.8 ml/g" },
      { label: "주용도", value: "가구·목재·권강페인트" },
      { label: "원산지", value: "중국" },
    ],
    ["도료", "소광"]),

  mkPS("SL-CT-1031", "침전 실리카 (도료 소광 · 잉크 흡착)", "Precipitated Silica (Matting & Ink Absorbing)", "沈降シリカ(艶消し・インキ吸着)",
    "미세 3μm 입자 · DBP 340–380 · 잉크 흡착과 도료 소광 겸용",
    "Fine 3 μm particle · DBP 340–380 — dual matting and ink-absorbing grade",
    "微細3μm粒子 · DBP 340–380 · 塗料艶消しとインキ吸着を兼備",
    "SL-CT-1031은 3μm 급 미세 입도와 DBP 340–380의 높은 흡유량으로 도료 소광과 인화지·잉크 흡착을 동시에 만족시키는 다기능 침전 실리카입니다. 98.6%의 SiO₂ 순도와 중성 pH로 유성·수성 시스템 모두에서 안정적으로 사용되며, 잉크젯 코팅·고흡착 도료·특수 인쇄용지에 최적화되어 있습니다.",
    "SL-CT-1031 delivers dual matting and ink/paper absorption performance with 3 μm fine particles and high DBP (340–380). SiO₂ 98.6% and neutral pH make it compatible with solvent- and water-based systems, optimized for inkjet coatings, high-absorption paints and specialty printing papers.",
    "SL-CT-1031は3μm級の微細粒度とDBP 340–380の高吸油量で塗料艶消しと印刷紙・インキ吸着を同時に満たす多機能沈降シリカです。SiO₂ 98.6%・中性pHで油性・水性系に安定使用でき、インクジェットコーティング・高吸着塗料・特殊印刷紙に最適化されています。",
    [
      { label: "외관", value: "백색 분말" },
      { label: "SiO₂", value: "98.6 %" },
      { label: "pH", value: "6.9–7.1" },
      { label: "BET", value: "250–270 m²/g" },
      { label: "DBP", value: "340–380" },
      { label: "평균 입경", value: "3 μm" },
      { label: "공극 부피", value: "1.2 ml/g" },
      { label: "주용도", value: "고흡착 도료·잉크·인화지" },
      { label: "원산지", value: "중국" },
    ],
    ["도료", "소광"]),

  mkPS("SL-CT-104", "침전 실리카 (도료 소광 · 실리콘고무 겸용)", "Precipitated Silica (Matting & Silicone Rubber Dual-Use)", "沈降シリカ(艶消し・シリコーンゴム兼用)",
    "고급 유성도료·잉크 소광과 실리콘고무 보강을 동시 지원",
    "Supports premium solvent-borne paint/ink matting and silicone rubber reinforcement",
    "高級油性塗料・インキ艶消しとシリコーンゴム補強を同時支援",
    "SL-CT-104는 도료용 등급(SiO₂ 98.6%)과 고무용 등급(SiO₂ 99.8%)이 함께 제공되는 이중 용도 침전 실리카입니다. BET 200 / 185 m²/g 수준으로 고급 유성도료·잉크의 소광 성능과 실리콘고무·엘라스토머의 인장·인열·경도 보강을 동시에 만족합니다. D50 3–4μm의 미세 입자로 매끄러운 마감과 균일 분산을 제공합니다.",
    "SL-CT-104 is a dual-purpose precipitated silica offered in a paint grade (SiO₂ 98.6%) and a silicone rubber grade (SiO₂ 99.8%). BET 200 / 185 m²/g simultaneously meets matting requirements for premium solvent paints/inks and reinforcement (tensile, tear, hardness) for silicone rubber. D50 3–4 μm delivers smooth finishes and uniform dispersion.",
    "SL-CT-104は塗料用グレード(SiO₂ 98.6%)とゴム用グレード(SiO₂ 99.8%)が提供されるデュアル用途の沈降シリカです。BET 200 / 185 m²/gで高級油性塗料・インキの艶消しとシリコーンゴム・エラストマーの引張・引裂・硬度補強を同時に実現。D50 3–4μmで滑らかな仕上がりと均一分散を提供します。",
    [
      { label: "외관", value: "백색 분말" },
      { label: "SiO₂", value: "98.6 % / 99.8 %(고무용)" },
      { label: "pH", value: "6.9–7.1 / 6.0" },
      { label: "BET", value: "200 / 185 m²/g" },
      { label: "DBP / 흡유값", value: "240 / 3.2 cm³/g" },
      { label: "평균 입경", value: "3 μm / D50 3–4 μm" },
      { label: "주용도", value: "고급 유성도료·잉크, 실리콘고무 보강" },
      { label: "원산지", value: "중국" },
    ],
    ["도료", "소광", "고무"]),

  mkPS("SL-CT-107L", "침전 실리카 (유기 표면처리 소광제)", "Precipitated Silica (Organic Surface-Treated Matting Agent)", "沈降シリカ(有機表面処理艶消し剤)",
    "SiO₂ 99.9% · BET 320 m²/g · 유기처리 프리미엄 소광제",
    "SiO₂ 99.9% · BET 320 m²/g — organically treated premium matting agent",
    "SiO₂ 99.9% · BET 320 m²/g · 有機処理プレミアム艶消し剤",
    "SL-CT-107L은 표면을 유기 처리한 고순도(99.9%) 침전 실리카로, 320 m²/g의 초고비표면적과 DBP 400의 대흡유량, 1.8 ml/g의 대공극을 갖춘 프리미엄 소광제입니다. 고급 가구도료·무광 자동차 클리어·가죽 조제·광택유 등 최고 등급 마감이 요구되는 분야에 사용되며, 유기 처리로 유성 시스템에서의 침강 방지 및 재분산성이 우수합니다.",
    "SL-CT-107L is an organically surface-treated high-purity (99.9%) precipitated silica — a premium matting agent with ultra-high 320 m²/g BET, DBP 400 and 1.8 ml/g pore volume. Designed for premium furniture coatings, matte automotive clears, leather chemicals and polish oils, its organic treatment provides excellent anti-settling and redispersibility in solvent systems.",
    "SL-CT-107Lは表面を有機処理した高純度(99.9%)沈降シリカで、BET 320 m²/g、DBP 400、細孔容積1.8 ml/gの超高性能艶消し剤です。高級家具塗料・マット自動車クリア・皮革薬剤・光沢油など最高級仕上げに使用され、有機処理により油性系での沈降防止・再分散性に優れます。",
    [
      { label: "외관", value: "백색 분말(유기처리)" },
      { label: "SiO₂", value: "99.9 %" },
      { label: "pH", value: "6.9–7.1" },
      { label: "BET", value: "320 m²/g" },
      { label: "DBP", value: "400" },
      { label: "평균 입경", value: "2 μm" },
      { label: "공극 부피", value: "1.8 ml/g" },
      { label: "주용도", value: "고급 가구도료·무광도료·가죽조제·광택유" },
      { label: "원산지", value: "중국" },
    ],
    ["도료", "소광"]),

  // 초미세 이산화규소 (범용 보강·증점)
  mkPS("SL-CT-101", "초미세 침전 실리카", "Ultrafine Precipitated Silica", "超微細沈降シリカ",
    "BET 185–205 m²/g · 실리콘고무·도료·접착제 범용 초미세 실리카",
    "BET 185–205 m²/g — general-purpose ultrafine silica for silicone rubber, paint, adhesives",
    "BET 185–205 m²/g · シリコーンゴム・塗料・接着剤汎用の超微細シリカ",
    "SL-CT-101은 실리콘고무·유성 도료·1액형 접착제 등에서 널리 쓰이는 범용 초미세 침전 실리카입니다. BET 185–205 m²/g, 흡유값 2.3–2.8 cm³/g로 안정된 보강·증점·요변성을 제공하며, 8–10μm의 균일 입자로 배합 안정성과 취급성이 우수합니다.",
    "SL-CT-101 is a general-purpose ultrafine precipitated silica widely used in silicone rubber, solvent-borne paints and one-part adhesives. BET 185–205 m²/g and oil absorption 2.3–2.8 cm³/g provide stable reinforcement, thickening and thixotropy; 8–10 μm particles ensure formulation stability and easy handling.",
    "SL-CT-101はシリコーンゴム・油性塗料・1液型接着剤で広く使用される汎用超微細沈降シリカです。BET 185–205 m²/g、吸油値2.3–2.8 cm³/gで安定した補強・増粘・チキソ性を提供し、8–10μmの均一粒子で配合安定性と取り扱い性に優れます。",
    [
      { label: "SiO₂", value: "98 %" },
      { label: "pH", value: "6.5–7.5" },
      { label: "BET", value: "185–205 m²/g" },
      { label: "평균 입경", value: "8–10 μm" },
      { label: "흡유값", value: "2.3–2.8 cm³/g" },
      { label: "강열감량", value: "4–6 %" },
      { label: "건조감량", value: "4–6 %" },
      { label: "원산지", value: "중국" },
    ],
    ["고무", "도료", "접착제"]),

  mkPS("SL-CT-101AH", "초미세 침전 실리카", "Ultrafine Precipitated Silica", "超微細沈降シリカ",
    "BET 180–200 m²/g · 실리콘고무·도료·접착제 고안정 등급",
    "BET 180–200 m²/g — high-stability grade for silicone rubber, paint, adhesives",
    "BET 180–200 m²/g · シリコーンゴム・塗料・接着剤の高安定グレード",
    "SL-CT-101AH는 SL-CT-101과 동일 계열의 초미세 침전 실리카로, 흡유값과 입도가 유사하면서도 배치 간 편차가 낮게 관리된 고안정성 등급입니다. 실리콘고무의 인장 강도·경도 부여, 유성 도료·잉크의 침강 방지·증점, RTV/1액형 접착제의 요변성 개선에 폭넓게 적용됩니다.",
    "SL-CT-101AH is an ultrafine precipitated silica in the same family as SL-CT-101, offering a high-stability grade with tightly controlled batch-to-batch variation. Broadly used for tensile/hardness reinforcement in silicone rubber, anti-settling and thickening in solvent paints/inks, and thixotropy in RTV and one-part adhesives.",
    "SL-CT-101AHはSL-CT-101と同系列の超微細沈降シリカで、吸油値と粒度は同等ながらバッチ間ばらつきを抑えた高安定グレードです。シリコーンゴムの引張強度・硬度付与、油性塗料・インキの沈降防止・増粘、RTV/1液型接着剤のチキソ性改善に幅広く適用されます。",
    [
      { label: "SiO₂", value: "98 %" },
      { label: "BET", value: "180–200 m²/g" },
      { label: "평균 입경", value: "7–10 μm" },
      { label: "흡유값", value: "2.3–2.8 cm³/g" },
      { label: "원산지", value: "중국" },
    ],
    ["고무", "도료", "접착제"]),

  mkPS("SL-CT-99", "초미세 침전 실리카", "Ultrafine Precipitated Silica", "超微細沈降シリカ",
    "45–70μm 조립형 · 취급 용이한 저비산 범용 실리카",
    "45–70 μm coarse grade — easy-to-handle, low-dust general silica",
    "45–70μm 粗粒型・取り扱い容易な低飛散汎用シリカ",
    "SL-CT-99는 평균 45–70μm의 조립형 침전 실리카로, 자동 계량·투입 라인에서 비산이 매우 적고 흐름성이 우수합니다. SiO₂ 96% · BET 165–200 m²/g · 흡유값 2.0–3.5 cm³/g로 범용 고무 보강·페인트 증점·접착제 필러 용도에 경제적으로 활용됩니다.",
    "SL-CT-99 is a coarse (45–70 μm) precipitated silica with very low dust and excellent flow in automatic weighing lines. SiO₂ 96%, BET 165–200 m²/g and oil absorption 2.0–3.5 cm³/g make it an economical choice for general rubber reinforcement, paint thickening and adhesive fillers.",
    "SL-CT-99は平均45–70μmの粗粒型沈降シリカで、自動計量・投入ラインでの飛散が非常に少なく流動性に優れます。SiO₂ 96%、BET 165–200 m²/g、吸油値2.0–3.5 cm³/gで汎用ゴム補強・塗料増粘・接着剤フィラーに経済的です。",
    [
      { label: "SiO₂", value: "96 %" },
      { label: "BET", value: "165–200 m²/g" },
      { label: "평균 입경", value: "45–70 μm" },
      { label: "흡유값", value: "2.0–3.5 cm³/g" },
      { label: "원산지", value: "중국" },
    ],
    ["고무", "도료", "접착제"]),

  mkPS("SL-CT-103", "초미세 침전 실리카 (고비표면적)", "Ultrafine Precipitated Silica (High SSA)", "超微細沈降シリカ(高比表面積)",
    "BET 240–380 m²/g · 고보강 · 고증점 요구 배합용",
    "BET 240–380 m²/g — for high-reinforcement, high-thickening formulations",
    "BET 240–380 m²/g · 高補強・高増粘用途向け",
    "SL-CT-103은 BET 240–380 m²/g의 초고비표면적을 갖춘 침전 실리카로, 소량 첨가로 강한 보강·증점 효과가 필요한 실리콘 고무·특수 접착제·프리미엄 도료에 적합합니다. 흡유값 3.0–4.0 cm³/g로 대량의 오일·수지를 흡수하여 요변성·처짐 방지 기능을 부여합니다.",
    "SL-CT-103 is a precipitated silica with ultra-high BET 240–380 m²/g, suitable for silicone rubber, specialty adhesives and premium coatings requiring strong reinforcement and thickening at low loadings. Oil absorption 3.0–4.0 cm³/g absorbs large amounts of oil/resin to impart thixotropy and anti-sagging.",
    "SL-CT-103はBET 240–380 m²/gの超高比表面積を持つ沈降シリカで、少量添加で強い補強・増粘効果を要するシリコーンゴム・特殊接着剤・プレミアム塗料に適合。吸油値3.0–4.0 cm³/gで大量のオイル・樹脂を吸収し、チキソ性と液だれ防止性を付与します。",
    [
      { label: "SiO₂", value: "98 %" },
      { label: "BET", value: "240–380 m²/g" },
      { label: "평균 입경", value: "6–8 μm" },
      { label: "흡유값", value: "3.0–4.0 cm³/g" },
      { label: "원산지", value: "중국" },
    ],
    ["고무", "도료", "접착제"]),

  // 담체·충전재용
  mkPS("SL-CT-601", "담체·충전재용 침전 실리카", "Precipitated Silica Carrier / Filler", "担体・充填剤用沈降シリカ",
    "BET 220–250 m²/g · 사료·농약·도자기 유약용 다공성 캐리어",
    "BET 220–250 m²/g — porous carrier for feed, agrochemicals and ceramic glaze",
    "BET 220–250 m²/g · 飼料・農薬・陶磁器釉薬用の多孔性担体",
    "SL-CT-601은 45μm 조립·다공성 침전 실리카로, 사료 첨가제·농약 원제·도자기 유약의 담체(carrier) 및 충전재로 사용됩니다. 220–250 m²/g의 높은 비표면적과 DBP 310–370의 흡유량이 유효 성분의 균일한 담지와 서방출 효과를 부여하며, 취급성이 우수한 조립형입니다.",
    "SL-CT-601 is a 45 μm porous precipitated silica used as a carrier and filler for feed additives, agrochemical actives and ceramic glazes. Its 220–250 m²/g BET and 310–370 DBP provide uniform loading and controlled release of actives while offering easy-handling coarse morphology.",
    "SL-CT-601は45μm粗粒・多孔性の沈降シリカで、飼料添加剤・農薬原体・陶磁器釉薬の担体(carrier)および充填剤として使用されます。BET 220–250 m²/g、DBP 310–370により有効成分の均一担持と徐放効果を付与し、取り扱い性に優れる粗粒型です。",
    [
      { label: "SiO₂(건품)", value: "93.0–99.0 %" },
      { label: "pH", value: "6.8–7.0" },
      { label: "BET", value: "220–250 m²/g" },
      { label: "DBP", value: "310–370 ml/100g" },
      { label: "입경", value: "45 μm" },
      { label: "원산지", value: "중국" },
    ],
    ["사료", "농약", "도자기"]),

  mkPS("SL-CT-602", "담체·충전재용 침전 실리카", "Precipitated Silica Carrier / Filler", "担体・充填剤用沈降シリカ",
    "BET 220–270 m²/g · 미세 6μm · 정밀 담지 및 균일 분산용",
    "BET 220–270 m²/g · fine 6 μm — for precise loading and uniform dispersion",
    "BET 220–270 m²/g · 微細6μm · 精密担持と均一分散用",
    "SL-CT-602는 6μm의 미세 입도를 가진 담체·충전재용 침전 실리카로, 유효 성분의 정밀 담지, 균일 분산과 함께 우수한 흡유·흡습 기능을 제공합니다. 사료·프리믹스·수용성 농약·유약 안료 분산에 최적화되어 있습니다.",
    "SL-CT-602 is a fine (6 μm) carrier/filler precipitated silica delivering precise active loading, uniform dispersion and strong oil/moisture absorption. Optimized for feed premixes, water-soluble agrochemicals and glaze pigment dispersion.",
    "SL-CT-602は6μmの微細粒度を持つ担体・充填剤用沈降シリカで、有効成分の精密担持・均一分散と優れた吸油・吸湿機能を提供します。飼料プレミックス・水溶性農薬・釉薬顔料分散に最適化されています。",
    [
      { label: "SiO₂(건품)", value: "93.0–99.0 %" },
      { label: "pH", value: "6.8–7.0" },
      { label: "BET", value: "220–270 m²/g" },
      { label: "DBP", value: "310–360 ml/100g" },
      { label: "입경", value: "6 μm" },
      { label: "원산지", value: "중국" },
    ],
    ["사료", "농약", "도자기"]),

  // 실리콘고무 보강용
  mkPS("SL-CT-30", "실리콘고무 보강용 침전 실리카", "Silicone Rubber Reinforcement Silica", "シリコーンゴム補強用沈降シリカ",
    "BET 120–170 m²/g · 투명 실리콘고무 제품용 저구조 실리카",
    "BET 120–170 m²/g — low-structure silica for transparent silicone rubber",
    "BET 120–170 m²/g · 透明シリコーンゴム製品用の低構造シリカ",
    "SL-CT-30은 실리콘 고무 전용으로 개발된 침전 실리카로, BET 120–170 m²/g의 중간 비표면적과 260 ml/100g의 DBP로 안정된 보강 성능을 제공합니다. SiO₂ ≥ 98%, pH ≥ 7의 저이온 등급으로 투명·반투명 실리콘고무 제품(케이블, 의료 튜브, 케이스류)의 광학적 특성과 물성을 동시에 만족시킵니다.",
    "SL-CT-30 is a precipitated silica developed for silicone rubber, offering stable reinforcement with BET 120–170 m²/g and 260 ml/100g DBP. SiO₂ ≥ 98% and pH ≥ 7 low-ionic grade satisfies both optical clarity and mechanical properties in transparent/semi-transparent silicone products (cables, medical tubing, cases).",
    "SL-CT-30はシリコーンゴム専用に開発された沈降シリカで、BET 120–170 m²/g、DBP 260 ml/100gで安定した補強性能を提供します。SiO₂ ≥ 98%、pH ≥ 7の低イオングレードで透明・半透明シリコーン製品(ケーブル、医療チューブ、ケース類)の光学特性と物性を同時に満たします。",
    [
      { label: "SiO₂", value: "≥ 98 %" },
      { label: "pH", value: "≥ 7" },
      { label: "BET", value: "120–170 m²/g" },
      { label: "평균 입경", value: "8 μm" },
      { label: "DBP", value: "260 ml/100g" },
      { label: "강열감량", value: "≤ 7.0 %" },
      { label: "원산지", value: "중국" },
    ],
    ["고무"]),

  // 기능성 마스터배치용
  mkPS("SL-CT-MB-107", "기능성 마스터배치용 침전 실리카", "Functional Masterbatch Silica", "機能性マスターバッチ用沈降シリカ",
    "BET 280–300 m²/g · PP/PE 필름·시트 마스터배치 전용 충전재",
    "BET 280–300 m²/g — dedicated filler for PP/PE film & sheet masterbatch",
    "BET 280–300 m²/g · PP/PE フィルム・シート用マスターバッチ専用充填剤",
    "SL-CT-MB-107은 PP·PE 필름·시트용 기능성 마스터배치 전용 침전 실리카입니다. SiO₂ ≥ 99% 고순도, BET 280–300 m²/g, DBP 170–180, <5μm의 미세 입도로 안티블로킹·매트·투명 필름 개질에 최적화되어 있으며, 수지 내 균일 분산과 낮은 겔·이물 발생률을 보장합니다.",
    "SL-CT-MB-107 is a functional-masterbatch precipitated silica dedicated to PP/PE films and sheets. SiO₂ ≥ 99% high purity, BET 280–300 m²/g, DBP 170–180 and <5 μm fine particles are optimized for anti-blocking, matte and transparent film modification, guaranteeing uniform dispersion and low gel/defect rates.",
    "SL-CT-MB-107はPP・PEフィルム・シート用機能性マスターバッチ専用の沈降シリカです。SiO₂ ≥ 99%高純度、BET 280–300 m²/g、DBP 170–180、<5μmの微細粒度でアンチブロッキング・マット・透明フィルム改質に最適化されており、樹脂内均一分散と低ゲル・欠陥率を保証します。",
    [
      { label: "외관", value: "백색 분말" },
      { label: "SiO₂", value: "≥ 99 %" },
      { label: "pH", value: "6.5–7.5" },
      { label: "BET", value: "280–300 m²/g" },
      { label: "DBP", value: "170–180" },
      { label: "평균 입경", value: "< 5 μm" },
      { label: "주용도", value: "PP/PE 필름·시트 마스터배치 충전재" },
      { label: "원산지", value: "중국" },
    ],
    ["플라스틱"]),

  // 일반 이산화규소 (백탄흑 · 고무보강)
  mkPS("SL-CT-199", "타이어·고무 보강용 백탄흑 (침전 실리카)", "White Carbon Black — Tire/Rubber Reinforcement", "白炭黒 — タイヤ・ゴム補強用",
    "BET 220–280 m²/g · DBP 300–370 · 그린타이어·산업고무 표준 보강용",
    "BET 220–280 m²/g · DBP 300–370 — standard reinforcement for green tires and industrial rubber",
    "BET 220–280 m²/g · DBP 300–370 · グリーンタイヤ・産業用ゴムの標準補強用",
    "SL-CT-199는 타이어·산업용 고무의 표준 보강용 백탄흑(침전 실리카)입니다. BET 220–280 m²/g의 고비표면적과 DBP 300–370의 대구조 특성으로 인장·인열 강도와 마모성을 크게 향상시키며, 그린타이어(연비 저감형)의 저저항·저발열 특성 구현에 핵심 소재로 사용됩니다.",
    "SL-CT-199 is a standard white carbon black (precipitated silica) for tire and industrial rubber reinforcement. BET 220–280 m²/g and 300–370 DBP significantly improve tensile/tear strength and abrasion, and it is a key material for green (low-rolling-resistance, low-heat-buildup) tires.",
    "SL-CT-199はタイヤ・産業用ゴムの標準補強用白炭黒(沈降シリカ)です。BET 220–280 m²/gの高比表面積とDBP 300–370の大構造特性で引張・引裂強度と耐摩耗性を大幅に向上させ、グリーンタイヤ(低燃費型)の低抵抗・低発熱化に核心素材として使用されます。",
    [
      { label: "SiO₂(건품)", value: "98.5–99.9 %" },
      { label: "pH", value: "6.0–7.0" },
      { label: "BET", value: "220–280 m²/g" },
      { label: "DBP", value: "300–370 ml/100g" },
      { label: "입경", value: "325 mesh" },
      { label: "원산지", value: "중국" },
    ],
    ["고무"]),

  mkPS("SL-CT-299", "타이어·고무 보강용 백탄흑 (침전 실리카)", "White Carbon Black — Tire/Rubber Reinforcement", "白炭黒 — タイヤ・ゴム補強用",
    "BET 175–220 m²/g · DBP 250–300 · 중저강도 고무 배합용 경제형",
    "BET 175–220 m²/g · DBP 250–300 — economical grade for medium-strength rubber",
    "BET 175–220 m²/g · DBP 250–300 · 中低強度ゴム配合の経済型",
    "SL-CT-299는 SL-CT-199 대비 중간 비표면적을 가진 경제형 백탄흑입니다. 200 mesh 조립 입도로 취급이 용이하며, 신발 밑창·산업용 벨트·컨베이어·호스 등 중강도 고무 제품에 폭넓게 적용됩니다.",
    "SL-CT-299 is an economical white carbon black with medium BET compared to SL-CT-199. 200 mesh coarse particles make it easy to handle and broadly applicable to shoe soles, industrial belts, conveyors and hoses.",
    "SL-CT-299はSL-CT-199に比べ中間比表面積の経済型白炭黒です。200 mesh粗粒で取り扱いやすく、靴底・産業ベルト・コンベア・ホースなど中強度ゴム製品に幅広く適用されます。",
    [
      { label: "SiO₂(건품)", value: "98.5–99.0 %" },
      { label: "pH", value: "6.0–7.0" },
      { label: "BET", value: "175–220 m²/g" },
      { label: "DBP", value: "250–300 ml/100g" },
      { label: "입경", value: "200 mesh" },
      { label: "원산지", value: "중국" },
    ],
    ["고무"]),

  // 소수성 백탄흑
  mkPS("SL-CT-HPB-001", "소수성 백탄흑 (침전법)", "Hydrophobic White Carbon Black (Precipitation)", "疎水性白炭黒(沈降法)",
    "표면 소수화 처리 · 유성 매체 내 분산성 강화 실리카",
    "Surface-hydrophobized silica with enhanced dispersion in oil-based media",
    "表面疎水化処理・油性媒体内の分散性強化シリカ",
    "SL-CT-HPB-001은 침전법으로 제조된 백탄흑을 실란/실록산으로 표면 소수화 처리한 등급으로, 유성 도료·잉크·실리콘 고무 등 비극성 매체에서 우수한 분산성과 침강 방지 효과를 나타냅니다. 상세 스펙은 요청 시 시트로 제공합니다.",
    "SL-CT-HPB-001 is a precipitated white carbon black surface-hydrophobized with silane/siloxane, providing excellent dispersion and anti-settling in non-polar media such as solvent paints, inks and silicone rubber. Detailed spec sheet available on request.",
    "SL-CT-HPB-001は沈降法白炭黒をシラン/シロキサンで疎水化処理したグレードで、油性塗料・インキ・シリコーンゴムなど非極性媒体で優れた分散性と沈降防止効果を示します。詳細スペックは要請時にシートで提供します。",
    [
      { label: "제조법", value: "침전법 + 표면 소수화" },
      { label: "주용도", value: "유성 도료·잉크·실리콘 고무" },
      { label: "포장", value: "10 kg / bag" },
      { label: "원산지", value: "중국" },
    ],
    ["고무", "도료"]),

  mkPS("SL-CT-HPB-002", "소수성 나노 백탄흑 (졸-겔법)", "Hydrophobic Nano White Carbon Black (Sol-Gel)", "疎水性ナノ白炭黒(ゾル-ゲル法)",
    "졸-겔법 나노 콜로이드 실리카 · 입경 <100 nm",
    "Sol-gel colloidal nano silica with particle size <100 nm",
    "ゾル-ゲル法によるナノコロイダルシリカ · 粒径<100 nm",
    "SL-CT-HPB-002는 졸-겔(Sol-Gel)법으로 제조된 투명 콜로이드 나노 입자(입경 100 nm 이하) 소수성 실리카입니다. 고급 잉크·투명 코팅·전자 소재의 나노 필러로 활용되며, 상세 스펙은 요청 시 시트로 제공합니다.",
    "SL-CT-HPB-002 is a hydrophobic silica composed of transparent colloidal nanoparticles (<100 nm) produced by the sol-gel method. Used as a nano filler in premium inks, transparent coatings and electronic materials. Detailed spec sheet available on request.",
    "SL-CT-HPB-002はゾル-ゲル(Sol-Gel)法で製造された透明コロイダルナノ粒子(粒径100 nm以下)の疎水性シリカです。高級インキ・透明コーティング・電子素材のナノフィラーとして活用され、詳細スペックは要請時にシートで提供します。",
    [
      { label: "제조법", value: "졸-겔법(Sol-Gel)" },
      { label: "입경", value: "< 100 nm" },
      { label: "주용도", value: "고급 잉크·투명 코팅·전자 소재" },
      { label: "원산지", value: "중국" },
    ],
    ["고무", "도료"]),

  mkPS("SL-DF-010", "소포제용 고소수성 침전 실리카", "Hydrophobic Silica for Defoamer", "消泡剤用高疎水性沈降シリカ",
    "광유·실리콘오일 기반 소포제용 · 강산·강알칼리 환경 대응",
    "For mineral- and silicone-oil based defoamers · works in strong acid/alkali environments",
    "鉱油・シリコーンオイル系消泡剤用 · 強酸・強アルカリ環境対応",
    "SL-DF-010은 광유·실리콘오일 기반 산업용 소포제 전용으로 개발된 고소수성 침전 실리카입니다. 광유 기반 소포제에서 소포 효율을 3~5배, 실리콘오일 기반에서 약 2배 개선하며, 강산·강알칼리 환경에서도 안정적으로 작동하는 것이 특징입니다.",
    "SL-DF-010 is a highly hydrophobic precipitated silica developed exclusively for mineral- and silicone-oil based industrial defoamers. It improves defoaming efficiency 3–5× in mineral-oil defoamers and ~2× in silicone-oil defoamers, and remains stable under strong acid/alkali environments.",
    "SL-DF-010は鉱油・シリコーンオイル系産業用消泡剤専用に開発された高疎水性沈降シリカです。鉱油系消泡剤で消泡効率を3~5倍、シリコーンオイル系で約2倍改善し、強酸・強アルカリ環境でも安定作動するのが特徴です。",
    [
      { label: "성질", value: "고소수성(Highly hydrophobic)" },
      { label: "주용도", value: "광유·실리콘오일 기반 소포제" },
      { label: "특성", value: "강산·강알칼리 안정" },
      { label: "원산지", value: "중국" },
    ],
    ["소포제"]),

  // 식품·사료·특수 용도
  mkPS("SL-FGD-001", "식품첨가물용 침전 실리카 (고결방지제)", "Food-Grade Precipitated Silica (Anti-Caking)", "食品添加物用沈降シリカ(固結防止剤)",
    "GB 25576-2020 부합 · 조미료·분유·시리얼 고결방지제",
    "Compliant with GB 25576-2020 — anti-caking for seasonings, milk powder, cereals",
    "GB 25576-2020適合 · 調味料・粉ミルク・シリアルの固結防止剤",
    "SL-FGD-001은 중국 식품안전 국가표준 GB 25576-2020에 부합하는 식품첨가물용 침전 실리카(고결방지제)입니다. Pb·As·중금속을 극도로 낮게 관리하여 조미료·분유·인스턴트 커피·시리얼·건강기능식품 등 다양한 식품에서 안전한 고결 방지·자유 흐름 효과를 제공합니다.",
    "SL-FGD-001 is a food-additive precipitated silica (anti-caking agent) compliant with China's GB 25576-2020 food-safety standard. Ultra-low Pb/As/heavy metals ensure safe anti-caking and free-flow performance in seasonings, milk powder, instant coffee, cereals and functional foods.",
    "SL-FGD-001は中国食品安全国家規格GB 25576-2020に適合する食品添加物用沈降シリカ(固結防止剤)です。Pb・As・重金属を極めて低く管理し、調味料・粉ミルク・インスタントコーヒー・シリアル・機能性食品に安全な固結防止・流動性付与効果を提供します。",
    [
      { label: "규격", value: "GB 25576-2020" },
      { label: "SiO₂(灼烧후)", value: "≥ 96.0 %" },
      { label: "건조감량", value: "≤ 7 %" },
      { label: "강열감량", value: "≤ 8.5 %" },
      { label: "Pb", value: "≤ 5 mg/kg" },
      { label: "As", value: "≤ 3 mg/kg" },
      { label: "중금속(Pb 환산)", value: "≤ 30 mg/kg" },
      { label: "원산지", value: "중국" },
    ],
    ["식품"]),

  mkPS("SL-TPS-001", "치약용 침전 실리카 (증점형)", "Toothpaste Silica (Thickening Type)", "歯磨き粉用沈降シリカ(増粘型)",
    "치약 페이스트 증점·구조 형성용 고흡수 실리카",
    "High-absorption silica for toothpaste paste thickening and structure",
    "歯磨きペーストの増粘・構造形成用の高吸収シリカ",
    "SL-TPS-001은 치약 페이스트의 증점(Thickening)과 요변성 부여를 담당하는 실리카로, 320목 이상의 미세 입도와 17~20 ml/20g의 흡수량으로 안정된 겔 구조를 형성합니다. 굴절률(1.435–1.460)이 치약 매트릭스와 일치하여 투명·반투명 치약 제형에 최적입니다.",
    "SL-TPS-001 is a thickening/thixotropic silica for toothpaste. Fine 320-mesh particles and 17–20 ml/20g absorption form a stable gel structure, and its refractive index (1.435–1.460) matches the toothpaste matrix, ideal for transparent and translucent pastes.",
    "SL-TPS-001は歯磨きペーストの増粘(Thickening)とチキソ性付与を担うシリカで、320メッシュ以上の微細粒度と17~20 ml/20gの吸収量で安定したゲル構造を形成します。屈折率(1.435–1.460)が歯磨きマトリックスと一致し、透明・半透明ペーストに最適です。",
    [
      { label: "pH(5%)", value: "6.5–8.5" },
      { label: "세도(320목 통과)", value: "≥ 98 %" },
      { label: "SiO₂", value: "≥ 96 %" },
      { label: "흡수량", value: "17–20 ml/20g" },
      { label: "굴절률(20℃)", value: "1.435–1.460" },
      { label: "겉보기밀도", value: "≥ 0.30 g/ml" },
      { label: "원산지", value: "중국" },
    ],
    ["치약"]),

  mkPS("SL-TPS-002", "치약용 침전 실리카 (마찰형)", "Toothpaste Silica (Abrasive Type)", "歯磨き粉用沈降シリカ(研磨型)",
    "적절한 RDA·부드러운 세정력의 치약 연마 실리카",
    "Toothpaste abrasive silica with appropriate RDA and gentle cleaning",
    "適切なRDA・優しい洗浄力の歯磨き研磨シリカ",
    "SL-TPS-002는 치약의 마찰·연마(Abrasive)를 담당하는 실리카로, 30–42 ml/20g의 중간 흡수량과 엄격히 관리된 입도로 부드러운 세정력을 유지하면서 치아 에나멜 손상을 최소화합니다. 굴절률과 pH가 조정되어 있어 안정된 페이스트를 형성합니다.",
    "SL-TPS-002 is an abrasive silica for toothpaste, with medium 30–42 ml/20g absorption and tightly controlled particle size that delivers gentle cleaning while minimizing enamel damage. Its refractive index and pH are tuned for stable paste formation.",
    "SL-TPS-002は歯磨きの摩擦・研磨(Abrasive)を担うシリカで、30–42 ml/20gの中間吸収量と厳密管理された粒度で優しい洗浄力を維持しつつエナメル質損傷を最小化します。屈折率とpHが調整され安定したペーストを形成します。",
    [
      { label: "pH(5%)", value: "6.5–8.5" },
      { label: "세도(320목 통과)", value: "≥ 98 %" },
      { label: "SiO₂", value: "≥ 96 %" },
      { label: "흡수량", value: "30–42 ml/20g" },
      { label: "굴절률(20℃)", value: "1.435–1.460" },
      { label: "겉보기밀도", value: "≥ 0.30 g/ml" },
      { label: "원산지", value: "중국" },
    ],
    ["치약"]),

  mkPS("SL-TPS-003", "치약용 침전 실리카 (증점+연마 혼합형)", "Toothpaste Silica (Thickening + Abrasive Hybrid)", "歯磨き粉用沈降シリカ(増粘+研磨複合型)",
    "증점과 연마를 동시에 만족하는 통합형 치약 실리카",
    "Hybrid silica delivering both thickening and abrasion in a single grade",
    "増粘と研磨を同時に満たす統合型歯磨きシリカ",
    "SL-TPS-003은 치약의 증점과 연마 기능을 단일 등급으로 통합한 실리카입니다. 54–60 ml/20g의 높은 흡수량과 0.15–0.20 g/ml의 저밀도로 페이스트의 볼륨감·부드러운 사용감을 부여하면서도 적절한 연마 성능을 보유합니다.",
    "SL-TPS-003 combines thickening and abrasion in a single toothpaste silica. Its high 54–60 ml/20g absorption and 0.15–0.20 g/ml low density provide paste volume and smooth feel while retaining appropriate abrasion.",
    "SL-TPS-003は歯磨きの増粘と研磨機能を単一グレードに統合したシリカです。54–60 ml/20gの高吸収量と0.15–0.20 g/mlの低密度でペーストのボリューム感と滑らかな使用感を付与しつつ、適切な研磨性能を保持します。",
    [
      { label: "pH(5%)", value: "5.5–7.5" },
      { label: "세도(320목 통과)", value: "≥ 98 %" },
      { label: "SiO₂", value: "≥ 96 %" },
      { label: "흡수량", value: "54–60 ml/20g" },
      { label: "겉보기밀도", value: "0.15–0.20 g/ml" },
      { label: "원산지", value: "중국" },
    ],
    ["치약"]),

  mkPS("SL-ADH-001", "접착제용 백탄흑 (침전 실리카)", "White Carbon Black for Adhesives", "接着剤用白炭黒",
    "BET ≥ 260 m²/g · DBP 380 · 실리콘 실란트·AB교 전용",
    "BET ≥ 260 m²/g · DBP 380 — for silicone sealants and AB epoxy adhesives",
    "BET ≥ 260 m²/g · DBP 380 · シリコーンシーラント・ABエポキシ専用",
    "SL-ADH-001은 유리 실란트·건축용 실리콘·AB형 에폭시 접착제 등 프리미엄 접착제 전용으로 개발된 침전 실리카입니다. BET 260 m²/g 이상, DBP 380의 대구조 특성으로 강력한 요변성과 처짐 방지, 접착 강도 향상을 동시에 부여합니다.",
    "SL-ADH-001 is a precipitated silica developed for premium adhesives such as glazing sealants, architectural silicones and AB epoxy adhesives. BET ≥ 260 m²/g and DBP 380 deliver strong thixotropy, anti-sagging and improved bond strength.",
    "SL-ADH-001はガラスシーラント・建築用シリコーン・AB型エポキシ接着剤などプレミアム接着剤専用に開発された沈降シリカです。BET 260 m²/g以上、DBP 380の大構造特性で強力なチキソ性と液だれ防止、接着強度向上を同時に付与します。",
    [
      { label: "SiO₂(건품)", value: "≥ 98 %" },
      { label: "pH", value: "≥ 6.8" },
      { label: "BET", value: "≥ 260 m²/g" },
      { label: "DBP", value: "380 ml/100g" },
      { label: "입경", value: "5 μm" },
      { label: "원산지", value: "중국" },
    ],
    ["접착제"]),

  mkPS("SL-INR-001", "식품급 불활성분 (곡물 저장 방충용)", "Food-Grade Inert Powder (Grain Storage Insect Control)", "食品級不活性粉末(穀物保管防虫用)",
    "화학 방제제 없이 물리적 방식으로 해충 방제 · 식품안전기준 부합",
    "Physical (not chemical) insect control — food-safety compliant",
    "化学薬剤不使用、物理的防虫 · 食品安全基準適合",
    "SL-INR-001은 곡물·저장 사료의 방충용으로 사용되는 식품급 불활성 실리카 분말입니다. 화학 방제제 없이 곤충 표피의 왁스층에 미세 상처를 내어 탈수·사멸을 유도하는 물리적 방제 방식으로, 잔류·독성 우려가 없으며 식품안전기준에 부합합니다.",
    "SL-INR-001 is a food-grade inert silica powder for insect control in stored grain and feed. It works physically by scratching the wax cuticle of insects to cause dehydration — no chemical residues or toxicity, fully compliant with food-safety standards.",
    "SL-INR-001は穀物・貯蔵飼料の防虫用に使用される食品級不活性シリカ粉末です。化学薬剤を使わず、昆虫表皮のワックス層に微細な傷をつけて脱水・致死させる物理的防除方式で、残留・毒性の懸念がなく食品安全基準に適合します。",
    [
      { label: "형태", value: "백색 미세분말" },
      { label: "방제 방식", value: "물리적(비화학) 방제" },
      { label: "안전성", value: "식품안전기준 부합" },
      { label: "원산지", value: "중국" },
    ],
    ["식품"]),

  mkPS("SL-VET-001", "수의약품용 건조분말", "Veterinary-Use Drying Powder", "動物薬用乾燥粉末",
    "수의약품 항결·수분흡수용 · 제립 건조시간 2/3 단축",
    "Anti-caking / moisture absorption for veterinary drugs — reduces granulation drying time by 1/3",
    "動物薬用の固結防止・水分吸収用 · 造粒乾燥時間を1/3短縮",
    "SL-VET-001은 항생제·비타민·중초약(中草藥) 등 수용성 동물약품의 제립·건조·저장 공정에서 사용되는 침전 실리카 기반 건조분말입니다. 우수한 흡습·항결 특성으로 제립 건조 시간을 약 2/3 수준으로 단축시키며, 최종 제제의 유동성과 저장 안정성을 향상시킵니다.",
    "SL-VET-001 is a precipitated-silica drying powder used in granulation, drying and storage of water-soluble veterinary drugs such as antibiotics, vitamins and Chinese herbal medicines. Strong moisture absorption and anti-caking properties cut granulation drying time to about 1/3, and improve flowability and storage stability of the final product.",
    "SL-VET-001は抗生物質・ビタミン・中草薬など水溶性動物薬品の造粒・乾燥・貯蔵工程で使用される沈降シリカ系乾燥粉末です。優れた吸湿・固結防止特性で造粒乾燥時間を約1/3に短縮し、最終製剤の流動性と貯蔵安定性を向上させます。",
    [
      { label: "형태", value: "백색 미세분말" },
      { label: "기능", value: "항결·수분흡수" },
      { label: "특징", value: "제립 건조시간 약 2/3 단축" },
      { label: "원산지", value: "중국" },
    ],
  ["수의약품"]),

  {
    slug: "precipitated-silica-sl-a81",
    name: "SL-A81 침전 실리카",
    enName: "SL-A81 · Precipitated Silica", jaName: "SL-A81 沈降シリカ",
    tagline: "BET 700–750 m²/g 초고비표면적의 보강용 침전 실리카",
    enTagline: "Reinforcement-Grade Precipitated Silica with Ultra-High BET 700–750 m²/g", jaTagline: "BET 700–750 m²/g 超高比表面積の補強用沈降シリカ",
    description:
      "SL-A81은 BET 비표면적 700~750 m²/g의 초고비표면적을 구현한 고순도 침전 실리카(Precipitated Silica)입니다. 일반적인 침전 실리카(150~250 m²/g) 대비 3~4배 수준의 극도로 넓은 표면적을 자랑하며, 이는 제품의 주요 경쟁력입니다.",
    enDescription:
      "SL-A81 is a high-purity precipitated silica achieving an ultra-high BET specific surface area of 700–750 m²/g. This is 3–4 times greater than typical precipitated silica (150–250 m²/g), which is the product's core competitive advantage.", jaDescription: "SL-A81はBET比表面積700~750 m²/gの超高比表面積を実現した高純度沈降シリカ(Precipitated Silica)です。一般的な沈降シリカ(150~250 m²/g)と比較して3~4倍の極めて広い表面積を誇り、これが製品の主な競争力となっています。",
    image: precipitatedSilica,
    category: "precipitated",
    features: [
      { title: "📊 극도로 넓은 비표면적", desc: "700~750 m²/g — 일반 실리카 대비 3~4배 높은 표면적으로 소량 첨가만으로도 높은 보강 효과 구현", enTitle: "📊 Extremely High Specific Surface Area", jaTitle: "📊 極めて広い比表面積", enDesc: "700–750 m²/g — 3–4× higher than conventional silica, enabling high reinforcement even at low loadings", jaDesc: "700~750 m²/g — 一般的なシリカの3~4倍高い表面積で、少量添加するだけでも高い補強効果を実現" },
      { title: "🧪 고순도(≥99%) 안정성", desc: "불순물(중금속, Na₂SO₄ 등) 함량이 극도로 낮아 화학적 안정성 우수. 전기적 특성(절연성)이나 열적 안정성이 요구되는 첨단 소재에 적합", enTitle: "🧪 High Purity (≥99%) Stability", jaTitle: "🧪 高純度(≥99%)の安定性", enDesc: "Extremely low impurities (heavy metals, Na₂SO₄, etc.) ensure excellent chemical stability — ideal for advanced materials requiring electrical insulation and thermal stability", jaDesc: "不純物(重金属、Na₂SO₄など)の含有量が極めて低く化学的安定性に優れる。電気的特性(絶縁性)や熱的安定性が要求される先端素材に適合" },
      { title: "⚙️ 미세하고 균일한 입도", desc: "7~8μm의 초미세 분말로 고무·수지·접착제 내 고른 분산성 확보. 표면 결함 없이 매끄러운 복합재 제조 가능", enTitle: "⚙️ Fine and Uniform Particle Size", jaTitle: "⚙️ 微細かつ均一な粒度", enDesc: "Ultra-fine 7–8 µm powder ensures uniform dispersion in rubber, resin, and adhesives — enabling smooth composite manufacturing without surface defects", jaDesc: "7~8μmの超微細粉末でゴム・樹脂・接着剤内における均一な分散性を確保。表面欠陥のない滑らかな複合材の製造が可能" },
      { title: "💧 적절한 DBP 흡수량", desc: "90~130 ml/100g — 과도한 오일 흡수 없이 적정 수준의 구조성 유지. 고충전(high loading) 배합 설계에도 적용 가능", enTitle: "💧 Optimal DBP Absorption", jaTitle: "💧 適切なDBP吸油量", enDesc: "90–130 ml/100g — maintains adequate structure without excessive oil absorption, applicable to high-loading formulations", jaDesc: "90~130 ml/100g — 過度なオイル吸収なしに適正なレベルの構造性を維持。高充填(high loading)配合設計にも適用可能" },
      { title: "⚖️ 중성 pH (6.5~7.5)", desc: "산성이나 알칼리성 실리카가 유기 바인더나 고무의 가교 구조를 손상시키는 현상 방지. 경화제, 가교제, 촉매와의 부반응 최소화", enTitle: "⚖️ Neutral pH (6.5–7.5)", jaTitle: "⚖️ 中性pH (6.5~7.5)", enDesc: "Prevents damage to crosslinking structures in organic binders and rubber caused by acidic or alkaline silica — minimizes side reactions with curing agents, crosslinkers, and catalysts", jaDesc: "酸性やアルカリ性のシリカが有機バインダーやゴムの架橋構造を損傷する現象を防止。硬化剤、架橋剤、触媒との副反応を最小化" },
      { title: "✨ 뛰어난 백색도 (≥95)", desc: "최종 제품의 색상이나 투명도를 해치지 않음. 착색이나 도장 공정에서 베이스 재료로 활용도 높음", enTitle: "✨ Outstanding Whiteness (≥95)", jaTitle: "✨ 優れた白色度 (≥95)", enDesc: "Does not affect the color or transparency of finished products — highly usable as a base material in coloring and coating processes", jaDesc: "最終製品の色合いや透明度を損なわない。着色や塗装工程でのベース材料としての活用度が高い" },
      { title: "🔥 우수한 열적 안정성", desc: "1000℃ 소성 감량 3~5%로 고온 공정에서도 무게 변화나 휘발 성분 방출이 적음. 고온 경화, 사출, 압출 공정에서도 물성 유지", enTitle: "🔥 Excellent Thermal Stability", jaTitle: "🔥 優れた熱的安定性", enDesc: "Ignition loss of only 3–5% at 1000°C — minimal weight change or volatile release during high-temperature processes; properties maintained through hot curing, injection, and extrusion", jaDesc: "1000℃焼成減量3~5%で、高温工程でも重量変化や揮発成分の放出が少ない。高温硬化、射出、押出工程でも物性を維持" },
    ],
    specs: [
      { label: "등급 (Grade)", value: "SL-A81", enLabel: "Grade", jaLabel: "グレード (Grade)" },
      { label: "외관 (Form)", value: "White powder", note: "순백색 분말", enLabel: "Form", jaLabel: "形態 (Form)", enNote: "Pure white powder", jaNote: "純白色粉末" },
      { label: "백색도 (Whiteness)", value: "≥ 95", enLabel: "Whiteness", jaLabel: "白色度 (Whiteness)" },
      { label: "SiO₂ (건조 기준)", value: "≥ 99%", note: "초고순도", enLabel: "SiO₂ (Dry Basis)", jaLabel: "SiO₂ (乾燥基準)", enNote: "Ultra-high purity", jaNote: "超高純度" },
      { label: "pH", value: "6.5 – 7.5", note: "중성", enLabel: "pH", enNote: "Neutral", jaNote: "中性" },
      { label: "BET 비표면적", value: "700 – 750 m²/g", note: "초고비표면적", enLabel: "BET Specific Surface Area", jaLabel: "BET比表面積", enNote: "Ultra-high SSA", jaNote: "超高比表面積" },
      { label: "DBP 흡유량", value: "90 – 130 ml/100g", enLabel: "DBP Oil Absorption", jaLabel: "DBP吸油量" },
      { label: "평균 입자 크기", value: "7 – 8 µm", enLabel: "Average Particle Size", jaLabel: "平均粒子径" },
      { label: "건조 감량 (105℃, 2hr)", value: "3.0 – 4.0 %", enLabel: "Loss on Drying (105℃, 2 hr)", jaLabel: "乾燥減量 (105℃, 2hr)" },
      { label: "강열 감량 (1000℃, 2hr)", value: "3.0 – 5.0 %", enLabel: "Ignition Loss (1000℃, 2 hr)", jaLabel: "強熱減量 (1000℃, 2hr)" },
    ],
    applications: PS_APPS,
  },
  {
    slug: "precipitated-silica-si-60",
    name: "SI-60 미립자 침전 실리카",
    enName: "SI-60 · Fine Particle Precipitated Silica", jaName: "SI-60 微粒子沈降シリカ",
    tagline: "입도 11–18µm·DBP 230–260의 범용 고무 보강·필러용 실리카",
    enTagline: "General-Purpose Rubber Reinforcement & Filler Silica with 11–18 µm Particle Size and DBP 230–260", jaTagline: "粒度 11–18µm・DBP 230–260の汎用ゴム補強・フィラー用シリカ",
    description:
      "SI-60은 평균 입도 11~18µm의 미립자 침전 실리카로, 우수한 분산성과 보강 성능을 갖춰 신발 밑창·산업용 고무·실리콘 고무·접착제·실란트 등에 폭넓게 사용됩니다. 높은 DBP 흡유량(230~260 ml/100g)으로 증점·요변성(thixotropy) 부여에도 적합합니다.",
    enDescription:
      "SI-60 is a fine-particle precipitated silica with an average particle size of 11–18 µm. It offers excellent dispersibility and reinforcement performance, and is widely used in shoe soles, industrial rubber, silicone rubber, adhesives, and sealants. Its high DBP oil absorption (230–260 ml/100g) also makes it suitable for thickening and thixotropy applications.", jaDescription: "SI-60は平均粒度11~18µmの微粒子沈降シリカで、優れた分散性と補強性能を備えており、靴底・産業ゴム・シリコーンゴム・接着剤・シーラントなどに幅広く使用されます。高いDBP吸油量(230~260 ml/100g)により、増粘・チキソ性(thixotropy)の付与にも適しています。",
    image: precipitatedSilica,
    category: "precipitated",
    features: PS_FEATURES,
    specs: [
      { label: "외관 (Form)", value: "White powder", enLabel: "Form", jaLabel: "形態 (Form)" },
      { label: "백색도 (Whiteness)", value: "97 – 98", enLabel: "Whiteness", jaLabel: "白色度 (Whiteness)" },
      { label: "SiO₂ (건조 기준)", value: "≥ 99%", enLabel: "SiO₂ (Dry Basis)", jaLabel: "SiO₂ (乾燥基準)" },
      { label: "pH", value: "6.5 – 7.5", enLabel: "pH" },
      { label: "DBP 흡유량", value: "230 – 260 ml/100g", enLabel: "DBP Oil Absorption", jaLabel: "DBP吸油量" },
      { label: "입자 크기", value: "11 – 18 µm", enLabel: "Particle Size", jaLabel: "粒子径" },
      { label: "벌크 밀도", value: "110 – 130 g/L", enLabel: "Bulk Density", jaLabel: "かさ密度" },
      { label: "건조 감량 (105℃, 2hr)", value: "4.0 – 6.0 %", enLabel: "Loss on Drying (105℃, 2 hr)", jaLabel: "乾燥減量 (105℃, 2hr)" },
      { label: "강열 감량 (1000℃, 2hr)", value: "3.0 – 5.0 %", enLabel: "Ignition Loss (1000℃, 2 hr)", jaLabel: "強熱減量 (1000℃, 2hr)" },
      { label: "가용성 염 (Na₂SO₄)", value: "≤ 1.5 %", enLabel: "Soluble Salts (Na₂SO₄)", jaLabel: "可溶性塩 (Na₂SO₄)" },
      { label: "납 함량 (Pb)", value: "≤ 0.0005 %", enLabel: "Lead Content (Pb)", jaLabel: "鉛含有量 (Pb)" },
      { label: "중금속 함량", value: "≤ 0.003 %", enLabel: "Heavy Metals", jaLabel: "重金属含有量" },
      { label: "비소 함량 (As)", value: "≤ 0.0003 %", enLabel: "Arsenic Content (As)", jaLabel: "ヒ素含有量 (As)" },
      { label: "포장 (Package)", value: "15 kg / bag", enLabel: "Package", jaLabel: "包装 (Package)" },
    ],
    applications: PS_APPS,
  },
  {
    slug: "precipitated-silica-si-175",
    name: "SI-175 침전 실리카",
    enName: "SI-175 · Precipitated Silica", jaName: "SI-175 沈降シリカ",
    tagline: "입도 45µm, 비산 적고 취급 용이한 고무·산업용 침전 실리카",
    enTagline: "45 µm Particle Size, Low Dust, Easy-to-Handle Rubber & Industrial Precipitated Silica", jaTagline: "粒度 45µm、飛散が少なく取り扱いが容易なゴム・産業用沈降シリカ",
    description:
      "SI-175는 평균 입도 45µm 수준의 침전 실리카로, 비산이 적고 흐름성이 우수하여 대량 자동 계량·혼합 공정에 적합합니다. 고무 보강용, 사료 첨가용 캐리어, 산업용 충진제 등 다양한 분야에 사용됩니다.",
    enDescription:
      "SI-175 is a precipitated silica with an average particle size of around 45 µm. It generates little dust and has excellent flowability, making it ideal for large-scale automatic weighing and mixing processes. It is used in various fields including rubber reinforcement, feed-additive carriers, and industrial fillers.", jaDescription: "SI-175は平均粒度45µmレベルの沈降シリカで、飛散が少なく流動性に優れているため、大量自動計量・混合工程に適しています。ゴム補強用、飼料添加用キャリア、産業用充填剤など多様な分野に使用されます。",
    image: precipitatedSilica,
    category: "precipitated",
    features: PS_FEATURES,
    specs: [
      { label: "외관 (Form)", value: "White powder", enLabel: "Form", jaLabel: "形態 (Form)" },
      { label: "백색도 (Whiteness)", value: "97 – 98", enLabel: "Whiteness", jaLabel: "白色度 (Whiteness)" },
      { label: "SiO₂ (건조 기준)", value: "≥ 98%", enLabel: "SiO₂ (Dry Basis)", jaLabel: "SiO₂ (乾燥基準)" },
      { label: "pH", value: "6.5 – 7.5", enLabel: "pH" },
      { label: "DBP 흡유량", value: "230 – 260 ml/100g", enLabel: "DBP Oil Absorption", jaLabel: "DBP吸油量" },
      { label: "입자 크기", value: "45 µm", enLabel: "Particle Size", jaLabel: "粒子径" },
      { label: "벌크 밀도", value: "230 – 250 g/L", enLabel: "Bulk Density", jaLabel: "かさ密度" },
      { label: "건조 감량 (105℃, 2hr)", value: "4.0 – 6.0 %", enLabel: "Loss on Drying (105℃, 2 hr)", jaLabel: "乾燥減量 (105℃, 2hr)" },
      { label: "강열 감량 (1000℃, 2hr)", value: "3.0 – 5.0 %", enLabel: "Ignition Loss (1000℃, 2 hr)", jaLabel: "強熱減量 (1000℃, 2hr)" },
      { label: "가용성 염 (Na₂SO₄)", value: "≤ 1.5 %", enLabel: "Soluble Salts (Na₂SO₄)", jaLabel: "可溶性塩 (Na₂SO₄)" },
      { label: "납 함량 (Pb)", value: "≤ 0.0005 %", enLabel: "Lead Content (Pb)", jaLabel: "鉛含有量 (Pb)" },
      { label: "중금속 함량", value: "≤ 0.003 %", enLabel: "Heavy Metals", jaLabel: "重金属含有量" },
      { label: "비소 함량 (As)", value: "≤ 0.0003 %", enLabel: "Arsenic Content (As)", jaLabel: "ヒ素含有量 (As)" },
      { label: "포장 (Package)", value: "20 kg / bag", enLabel: "Package", jaLabel: "包装 (Package)" },
    ],
    applications: PS_APPS,
  }
];
productCatalog.push(...precipitatedExtProducts);

// —— 흄드(기상법) 실리카 확장 라인업 ——
const fumedExtProducts: ProductDetail[] = [
  mkFS("SL-FCT-380", "기상법(흄드) 이산화규소", "Fumed Silica", "ヒュームド(気相法)シリカ",
    "BET 380 m²/g · 초고비표면적 친수성 흄드 실리카",
    "BET 380 m²/g — ultra-high SSA hydrophilic fumed silica",
    "BET 380 m²/g · 超高比表面積の親水性ヒュームドシリカ",
    "SL-FCT-380은 BET 380 ± 30 m²/g의 초고비표면적을 갖춘 친수성 흄드 실리카입니다. SiO₂ ≥ 99.8%의 고순도, 낮은 강열감량과 미세한 체잔사 관리로 실리콘 고무, 열경화성 도료, 반응성 접착제, 의약품 캐리어 등 정밀 산업에 사용되며, 소량으로도 강력한 요변성·증점·보강 효과를 발휘합니다.",
    "SL-FCT-380 is a hydrophilic fumed silica with ultra-high BET of 380 ± 30 m²/g. SiO₂ ≥ 99.8%, low ignition loss and tightly controlled 45 μm sieve residue make it suitable for silicone rubber, thermosetting paints, reactive adhesives and pharmaceutical carriers — delivering strong thixotropy, thickening and reinforcement at low loadings.",
    "SL-FCT-380はBET 380 ± 30 m²/gの超高比表面積を持つ親水性ヒュームドシリカです。SiO₂ ≥ 99.8%の高純度、低い強熱減量と微細な篩残管理により、シリコーンゴム、熱硬化性塗料、反応性接着剤、医薬品キャリアなど精密産業に使用され、少量で強力なチキソ性・増粘・補強効果を発揮します。",
    [
      { label: "BET", value: "380 ± 30 m²/g" },
      { label: "현탁액 pH(4%)", value: "3.7–4.5" },
      { label: "강열감량", value: "≤ 2.5 %" },
      { label: "체잔사(45μm)", value: "≤ 250 mg/kg" },
      { label: "충진밀도", value: "40–60 g/L" },
      { label: "SiO₂", value: "≥ 99.8 %" },
      { label: "탄소함량", value: "≤ 0.2 %" },
      { label: "원산지", value: "중국" },
    ],
    ["고무", "도료", "접착제", "의약"]),

  mkFS("SL-FCT-200", "기상법(흄드) 이산화규소", "Fumed Silica", "ヒュームド(気相法)シリカ",
    "BET 200 m²/g · 중간 비표면적의 범용 친수성 흄드 실리카",
    "BET 200 m²/g — medium SSA general-purpose hydrophilic fumed silica",
    "BET 200 m²/g · 中間比表面積の汎用親水性ヒュームドシリカ",
    "SL-FCT-200은 BET 200 ± 30 m²/g 의 중간 비표면적을 가진 범용 흄드 실리카로, 도료·잉크·접착제·실리콘 실란트·의약품·화장품 등 광범위한 산업에서 표준 등급으로 사용됩니다. 침전실리카 SL-CT-200(소광제)과는 공정·용도가 전혀 다른 별개 제품입니다.",
    "SL-FCT-200 is a general-purpose fumed silica with medium BET 200 ± 30 m²/g, used as a standard grade in paints, inks, adhesives, silicone sealants, pharmaceuticals and cosmetics. Note: this is a distinct product from precipitated SL-CT-200 (matting agent) — different process and applications.",
    "SL-FCT-200はBET 200 ± 30 m²/gの中間比表面積を持つ汎用ヒュームドシリカで、塗料・インキ・接着剤・シリコーンシーラント・医薬品・化粧品など幅広い産業で標準グレードとして使用されます。沈降シリカSL-CT-200(艶消し剤)とは工程・用途が異なる別製品です。",
    [
      { label: "BET", value: "200 ± 30 m²/g" },
      { label: "현탁액 pH(4%)", value: "3.7–4.5" },
      { label: "강열감량", value: "≤ 2.5 %" },
      { label: "SiO₂", value: "≥ 99.8 %" },
      { label: "탄소함량", value: "≤ 0.2 %" },
      { label: "원산지", value: "중국" },
    ],
    ["고무", "도료", "접착제", "의약"]),

  mkFS("SL-FCT-150", "기상법(흄드) 이산화규소", "Fumed Silica", "ヒュームド(気相法)シリカ",
    "BET 150 m²/g · 저구조 등급 친수성 흄드 실리카",
    "BET 150 m²/g — low-structure hydrophilic fumed silica",
    "BET 150 m²/g · 低構造グレードの親水性ヒュームドシリカ",
    "SL-FCT-150은 BET 150 ± 30 m²/g의 저구조 친수성 흄드 실리카로, 실리콘 고무 배합·투명 실란트·저점도 접착제 등 상대적으로 낮은 증점 효과와 우수한 광학 특성이 요구되는 배합에 적합합니다. 10 kg 다층 크라프트지 포대로 공급됩니다.",
    "SL-FCT-150 is a low-structure hydrophilic fumed silica (BET 150 ± 30 m²/g) suitable for silicone rubber compounds, transparent sealants and low-viscosity adhesives that require moderate thickening and excellent optical clarity. Supplied in 10 kg multi-layer kraft bags.",
    "SL-FCT-150はBET 150 ± 30 m²/gの低構造親水性ヒュームドシリカで、シリコーンゴム配合・透明シーラント・低粘度接着剤など相対的に低い増粘効果と優れた光学特性が要求される配合に適合します。10 kg多層クラフト紙袋で供給されます。",
    [
      { label: "BET", value: "150 ± 30 m²/g" },
      { label: "현탁액 pH(4%)", value: "3.7–4.5" },
      { label: "강열감량", value: "≤ 2.5 %" },
      { label: "SiO₂", value: "≥ 99.8 %" },
      { label: "탄소함량", value: "≤ 0.2 %" },
      { label: "포장", value: "다층 크라프트지 포대, 10 kg/포" },
      { label: "원산지", value: "중국" },
    ],
    ["고무", "도료", "접착제", "의약"]),

  mkFS("SL-FCT-151", "소수성 기상법 이산화규소", "Hydrophobic Fumed Silica", "疎水性ヒュームド(気相法)シリカ",
    "BET 150 m²/g · 소수성 표면처리 · 도료 침전방지 & 화장품용",
    "BET 150 m²/g · hydrophobic-treated — anti-settling in paints, cosmetics",
    "BET 150 m²/g · 疎水性表面処理 · 塗料沈降防止&化粧品用",
    "SL-FCT-151은 BET 150 ± 25 m²/g의 흄드 실리카를 소수화 처리한 소수성 등급으로, 유성·용제형 도료의 안료 침강 방지, 실리콘 고무·화장품의 요변성 부여에 사용됩니다. SiO₂ ≥ 99.98% · 탄소함량 0.6–1.2%로 우수한 소수성과 비극성 매체 내 분산성을 제공합니다.",
    "SL-FCT-151 is a hydrophobic-treated fumed silica grade (BET 150 ± 25 m²/g) used for anti-settling of pigments in solvent-borne paints, and thixotropy in silicone rubber and cosmetics. SiO₂ ≥ 99.98% and carbon content 0.6–1.2% provide strong hydrophobicity and dispersion in non-polar media.",
    "SL-FCT-151はBET 150 ± 25 m²/gのヒュームドシリカを疎水化処理した疎水性グレードで、油性・溶剤型塗料の顔料沈降防止、シリコーンゴム・化粧品のチキソ性付与に使用されます。SiO₂ ≥ 99.98%、炭素含有量0.6–1.2%で優れた疎水性と非極性媒体内分散性を提供します。",
    [
      { label: "BET", value: "150 ± 25 m²/g" },
      { label: "탄소함량", value: "0.6–1.2 %" },
      { label: "평균 원생입경", value: "7–40 nm" },
      { label: "압축밀도", value: "30–60 g/L" },
      { label: "함수량(105℃)", value: "≤ 0.5 %" },
      { label: "강열손실(1000℃)", value: "1.5–3.0 %" },
      { label: "pH(4% 분산액)", value: "3.6–4.5" },
      { label: "SiO₂", value: "≥ 99.98 %" },
      { label: "원산지", value: "중국" },
    ],
    ["도료", "고무"]),
];
productCatalog.push(...fumedExtProducts);



export const getProductBySlug = (slug: string) =>
  productCatalog.find((p) => p.slug === slug);

export const getProductsByCategory = (cat: ProductCategory) =>
  productCatalog.filter((p) => (p.category ?? "quartz") === cat);
