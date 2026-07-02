import gradeA from "@/assets/grade-a-silica.png";
import gradeADetail from "@/assets/grade-a-detail.png";
import gradeB from "@/assets/grade-b-silica.png";
import gradeBDetail from "@/assets/grade-b-detail.png";
import gradeC from "@/assets/grade-c-silica.png";
import gradeCDetail from "@/assets/grade-c-detail.png";
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

export type ProductCategory = "quartz" | "silica-gel" | "precipitated" | "fumed" | "advanced-series";

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
    slug: "silica-sand",
    name: "규사",
    enName: "Silica Sand", jaName: "珪砂 (シリカサンド)",
    tagline: "고순도 SiO₂·저철·고백색 — 선별·세척·산처리 공정의 산업용 규사",
    enTagline: "High-Purity SiO₂, Low Iron, High Whiteness — Industrial Silica Sand Processed by Screening, Washing, and Acid Treatment",
    jaTagline: "高純度SiO₂・低鉄・高白色度 — 選別・洗浄・酸処理工程による産業用シリカサンド",
    description:
      "규사는 천연 규석(Quartz)을 원료로 선별, 세척 및 산처리 공정을 거쳐 생산한 고품질 산업용 소재입니다. 높은 이산화규소(SiO₂) 함량과 낮은 철(Fe) 함량, 우수한 백색도를 갖추고 있으며, 균일한 입도와 뛰어난 화학적 안정성으로 다양한 산업 분야에서 안정적인 품질을 제공합니다.",
    enDescription:
      "Silica Sand is a high-quality industrial material produced from natural quartz through screening, washing, and acid-treatment processes. With high silicon dioxide (SiO₂) content, low iron (Fe) content, and excellent whiteness, it delivers consistent quality across a wide range of industries thanks to its uniform grain size and outstanding chemical stability.",
    jaDescription:
      "珪砂(シリカサンド)は、天然石英(Quartz)を原料に選別・洗浄および酸処理工程を経て生産する高品質な産業用素材です。高い二酸化ケイ素(SiO₂)含有量と低い鉄(Fe)含有量、優れた白色度を備えており、均一な粒度と優れた化学的安定性により、多様な産業分野で安定した品質を提供します。",
    image: silicaSandImg,
    category: "quartz",
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
    slug: "silica-powder",

    name: "규사분말",
    enName: "Silica Powder", jaName: "珪砂粉末 (シリカパウダー)",
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
    category: "quartz",
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
    tagline: "SiO₂ 99.77%, Fe₂O₃ 5ppm, 백색도 L 97.92 — EGS 및 고급 유리의 기준",
    enTagline: "SiO₂ 99.77%, Fe₂O₃ 5 ppm, Whiteness L 97.92 — The Benchmark for EGS and Premium Glass", jaTagline: "SiO₂ 99.77%、Fe₂O₃ 5ppm、白色度 L 97.92 — EGSおよび高級ガラスの基準",
    description:
      "프리미엄 천연 고순도 쿼츠는 엄격한 광맥 선별과 정제 공정을 거쳐 SiO₂ 99.77%, Fe₂O₃ 5ppm 수준의 초고순도와 L 97.92의 최상급 백색도를 달성합니다. EGS·인조대리석, 고급 유리, 전자재료, 정밀 주조, 나노 가공 등 부가가치가 높은 산업의 기초 소재로 사용됩니다.",
    enDescription:
      "Premium Natural High-Purity Quartz achieves ultra-high purity of SiO₂ 99.77% and Fe₂O₃ 5 ppm, along with top-grade whiteness of L 97.92, through rigorous vein selection and refining processes. It serves as a foundational material for high-value-added industries such as EGS/engineered stone, premium glass, electronic materials, precision casting, and nano processing.", jaDescription: "プレミアム天然高純度石英は、厳格な鉱脈選別と精製工程を経て、SiO₂ 99.77%、Fe₂O₃ 5ppmレベルの超高純度とL 97.92の最上級の白色度を達成します。EGS・人造大理石、高級ガラス、電子材料、精密鋳造、ナノ加工など付加価値の高い産業の基礎素材として使用されます。",
    image: pProcess,
    detailImage: hpqDetail,
    features: [
      { title: "🧱 압도적 순도", desc: "SiO₂ 99.773% — EGS·특수 유리·전자재료 기초 소재로 적합", enTitle: "🧱 Overwhelming Purity", jaTitle: "🧱 圧倒的な純度", enDesc: "SiO₂ 99.773% — ideal base material for EGS, specialty glass, and electronic materials", jaDesc: "SiO₂ 99.773% — EGS・特殊ガラス・電子材料の基礎素材に最適" },
      { title: "🧼 초저 철분", desc: "Fe₂O₃ 5ppm — 황변 없이 투명도 및 백색도 핵심 유지", enTitle: "🧼 Ultra-Low Iron Content", jaTitle: "🧼 超低鉄分", enDesc: "Fe₂O₃ 5 ppm — maintains transparency and whiteness without yellowing", jaDesc: "Fe₂O₃ 5ppm — 黄変なしに透明度および白色度を中核的に維持" },
      { title: "⚡ 우수한 절연 성능", desc: "EC 2.12 µs/cm — 전자재료 충진재(Filler) 신뢰성 확보", enTitle: "⚡ Excellent Insulation Performance", jaTitle: "⚡ 優れた絶縁性能", enDesc: "EC 2.12 µs/cm — ensures reliability as an electronic-material filler", jaDesc: "EC 2.12 µs/cm — 電子材料用充填材(Filler)の信頼性確保" },
      { title: "✨ 최상급 백색도", desc: "L 97.92 — 고급 인조대리석·건축 내외장재 최적", enTitle: "✨ Top-Grade Whiteness", jaTitle: "✨ 最上級の白色度", enDesc: "L 97.92 — optimal for premium engineered stone and architectural interior/exterior materials", jaDesc: "L 97.92 — 高級人造大理石・建築内外装材に最適" },
      { title: "📐 균일 입도", desc: "고객 맞춤 입도 가공", enTitle: "📐 Uniform Particle Size", jaTitle: "📐 均一な粒度", enDesc: "Custom particle-size processing tailored to customer requirements", jaDesc: "お客様に合わせたカスタム粒度加工" },
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
      { label: "입도 (Grain Size)", value: "고객 맞춤 입도 가공", enValue: "Custom particle-size processing tailored to customer requirements", jaValue: "お客様に合わせたカスタム粒度加工", note: "균일 입도", enLabel: "Grain Size", jaLabel: "粒度 (Grain Size)", enNote: "Uniform", jaNote: "均一粒度" },
    ],
    applications: ["EGS / 인조대리석", "고급 유리", "전자재료", "정밀 주조", "나노 가공"],
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

const silicaGelProducts: ProductDetail[] = [
  {
    slug: "silica-gel-microsilica",
    name: "미분 실리카 (Microsilica)",
    enName: "Micronized Silica Powder", jaName: "微粉シリカ (Microsilica)",
    tagline: "고순도 이산화규소 기반 초미세 분말 — 고활성·다공성 무기 정밀 소재",
    enTagline: "Ultra-Fine Powder Based on High-Purity Silicon Dioxide — A Highly Active, Porous Inorganic Precision Material", jaTagline: "高純度二酸化ケイ素ベースの超微細粉末 — 高活性・多孔性の無機精密素材",
    description:
      "미분 실리카는 고순도 이산화규소(SiO₂)를 핵심 성분으로 하여 특수 공정을 통해 초미세 분말 형태로 가공된 고활성·다공성 무기 정밀 소재입니다.",
    enDescription:
      "Micronized Silica Powder is a highly active, porous inorganic precision material processed into ultra-fine powder form through a special process, with high-purity silicon dioxide (SiO₂) as its core component.", jaDescription: "微粉シリカは高純度二酸化ケイ素(SiO₂)を核心成分とし、特殊な工程を経て超微細粉末の形態に加工された高活性・多孔質の無機精密素材です。",
    image: sgMicrosilica,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "입자 크기 (Particle Size)", value: "3 – 10 µm", enLabel: "Particle Size", jaLabel: "粒子径 (Particle Size)" },
      { label: "포장 / 규격 (Packing)", value: "맞춤 제작 가능", enLabel: "Packing / Spec", jaLabel: "包装 / 規格 (Packing)", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-anti-blocking",
    name: "플라스틱 안티블로킹제",
    enName: "Anti-blocking Agent", jaName: "プラスチック用アンチブロッキング剤",
    tagline: "필름·시트 안티블로킹용 고순도 실리카",
    enTagline: "High-Purity Silica for Anti-Blocking in Films and Sheets", jaTagline: "フィルム・シートのアンチブロッキング用高純度シリカ",
    description:
      "고순도 실리카 기반의 안티블로킹제로, 플라스틱 필름·시트의 접착(블로킹)을 효과적으로 방지하며 우수한 광학적 투명성을 유지합니다.",
    enDescription:
      "An anti-blocking agent based on high-purity silica that effectively prevents adhesion (blocking) of plastic films and sheets while maintaining excellent optical transparency.", jaDescription: "高純度シリカベースのアンチブロッキング剤で、プラスチックフィルム・シートの接着(ブロッキング)を効果的に防止し、優れた光学的透明性を維持します。",
    image: sgAntiblocking,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "입자 크기", value: "2 – 10 µm", enLabel: "Particle Size", jaLabel: "粒子径" },
      { label: "비표면적", value: "20 – 380 m²/g", enLabel: "Specific Surface Area", jaLabel: "比表面積" },
      { label: "흡유량", value: "150 – 300 ml/100g", enLabel: "Oil Absorption", jaLabel: "吸油量" },
      { label: "벌크 밀도", value: "50 – 300 kg/m³", enLabel: "Bulk Density", jaLabel: "かさ密度" },
      { label: "SiO₂ 순도", value: "99%", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", jaLabel: "包装 / 規格", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-matting",
    name: "소광제 (Matting Agent)",
    enName: "Matting Agent", jaName: "艶消し剤 (Matting Agent)",
    tagline: "도료·코팅용 무광 효과 실리카",
    enTagline: "Silica Matting Agent for Paints and Coatings", jaTagline: "塗料・コーティング用マット効果シリカ",
    description:
      "도료 및 코팅 시스템에 사용되는 소광제(Matting Agent)로, 균일한 무광 효과와 우수한 분산성을 제공합니다.",
    enDescription:
      "A matting agent used in paint and coating systems, providing uniform matte effects and excellent dispersibility.", jaDescription: "塗料およびコーティングシステムに使用される艶消し剤(Matting Agent)であり、均一なマット効果と優れた分散性を提供します。",
    image: sgMatting,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "입자 크기 D50", value: "3.5 – 10 µm", enLabel: "Particle Size D50", jaLabel: "粒子径 D50" },
      { label: "흡유량", value: "100 – 330 ml/100g", enLabel: "Oil Absorption", jaLabel: "吸油量" },
      { label: "pH", value: "3.5 – 8", enLabel: "pH" },
      { label: "기공 부피 (Pore Volume)", value: "0.4 – 2.2 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積 (Pore Volume)" },
      { label: "표면 처리", value: "왁스 처리 / 무처리", enLabel: "Surface Treatment", jaLabel: "表面処理", enNote: "Wax-treated / Untreated" },
      { label: "건조 감량 (105℃)", value: "≤ 5%", enLabel: "Loss on Drying (105℃)", jaLabel: "乾燥減量 (105℃)" },
      { label: "강열 감량 (1000℃)", value: "≤ 6%", enLabel: "Ignition Loss (1000℃)", jaLabel: "強熱減量 (1000℃)" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", jaLabel: "包装 / 規格", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-large-pore",
    name: "대공극 실리카겔",
    enName: "Large Pore Volume Silica Gel", jaName: "大孔径シリカゲル",
    tagline: "대공극·고비표면적의 흡착 전용 실리카겔",
    enTagline: "Adsorption-Grade Silica Gel with Large Pores and High Specific Surface Area", jaTagline: "大孔径・高比表面積の吸着専用シリカゲル",
    description:
      "대공극 실리카겔은 큰 기공 직경과 높은 기공 부피를 가져 분자 흡착·촉매 담체용으로 최적화된 실리카겔입니다.",
    enDescription:
      "Large Pore Volume Silica Gel features large pore diameters and high pore volume, making it an optimized silica gel for molecular adsorption and catalyst support applications.", jaDescription: "大孔径シリカゲルは、大きな細孔径と高い細孔容積を持ち、分子吸着や触媒担体用に最適化されたシリカゲルです。",
    image: sgLargePore,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "기공 직경 (Pore Diameter)", value: "16 – 25 nm", enLabel: "Pore Diameter", jaLabel: "細孔径 (Pore Diameter)" },
      { label: "비표면적", value: "200 – 350 m²/g", enLabel: "Specific Surface Area", jaLabel: "比表面積" },
      { label: "기공 부피", value: "1.2 – 2.2 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", jaLabel: "包装 / 規格", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-fng",
    name: "내수 실리카겔 (FNG)",
    enName: "FNG Water-Resistant Silica Gel", jaName: "耐水シリカゲル (FNG)",
    tagline: "가혹 환경 전용 고성능 내수 실리카겔",
    enTagline: "High-Performance Water-Resistant Silica Gel for Harsh Environments", jaTagline: "過酷環境専用の高性能耐水シリカゲル",
    description:
      "내수 실리카겔 FNG는 가혹한 환경에서도 안정적으로 동작하도록 설계된 고성능 실리카 소재로, 우수한 내수성·내후성·화학적 안정성을 갖추고 있습니다.",
    enDescription:
      "FNG Water-Resistant Silica Gel is a high-performance silica material designed to operate stably in harsh environments, featuring excellent water resistance, weather resistance, and chemical stability.", jaDescription: "耐水シリカゲルFNGは過酷な環境でも安定して機能するように設計された高性能シリカ素材で、優れた耐水性・耐候性・化学的安定性を備えています。",
    image: sgFng,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "특성", value: "내수성 · 내후성 · 화학적 안정성", enLabel: "Characteristics", jaLabel: "特性", enNote: "Water resistance · Weather resistance · Chemical stability" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", jaLabel: "包装 / 規格", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-coarse",
    name: "조공극 실리카겔",
    enName: "Coarse Pore Silica Gel", jaName: "粗孔シリカゲル",
    tagline: "중간 기공 크기의 범용 흡착 실리카겔",
    enTagline: "General-Purpose Adsorption Silica Gel with Medium Pore Size", jaTagline: "中孔径の汎用吸着シリカゲル",
    description:
      "조공극 실리카겔(Coarse Pore Silica Gel)은 균형 잡힌 기공 구조로 다양한 산업용 흡착·건조·정제 공정에 사용됩니다.",
    enDescription:
      "Coarse Pore Silica Gel features a balanced pore structure and is used in various industrial adsorption, drying, and purification processes.", jaDescription: "粗孔シリカゲル(Coarse Pore Silica Gel)は、バランスの取れた細孔構造により、多様な産業用の吸着・乾燥・精製工程に使用されます。",
    image: sgCoarse,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "기공 직경", value: "8 – 12.5 nm", enLabel: "Pore Diameter", jaLabel: "細孔径" },
      { label: "비표면적", value: "300 – 400 m²/g", enLabel: "Specific Surface Area", jaLabel: "比表面積" },
      { label: "기공 부피", value: "0.8 – 1.0 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", jaLabel: "包装 / 規格", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-type-a",
    name: "A형 실리카겔",
    enName: "Silica Gel Type A", jaName: "A型シリカゲル",
    tagline: "고비표면적 · 미세기공 흡착용 실리카겔",
    enTagline: "High Specific Surface Area · Fine-Pore Adsorption Silica Gel", jaTagline: "高比表面積・微細気孔の吸着用シリカゲル",
    description:
      "A형 실리카겔은 미세기공(2–3 nm)과 매우 높은 비표면적을 가진 표준 흡착용 실리카겔로, 건조제·흡습제 등에 폭넓게 사용됩니다.",
    enDescription:
      "Silica Gel Type A is a standard adsorption silica gel with micropores (2–3 nm) and very high specific surface area, widely used as a desiccant and moisture absorber.", jaDescription: "A型シリカゲルは微細気孔(2–3 nm)と非常に高い比表面積を持つ標準吸着用のシリカゲルであり、乾燥剤・吸湿剤などに幅広く使用されます。",
    image: sgTypeA,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "기공 직경", value: "2.0 – 3.0 nm", enLabel: "Pore Diameter", jaLabel: "細孔径" },
      { label: "비표면적", value: "650 – 800 m²/g", enLabel: "Specific Surface Area", jaLabel: "比表面積" },
      { label: "기공 부피", value: "0.4 – 0.5 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", jaLabel: "包装 / 規格", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-type-b",
    name: "B형 실리카겔",
    enName: "Silica Gel Type B", jaName: "B型シリカゲル",
    tagline: "중간 기공·균형 특성의 다용도 실리카겔",
    enTagline: "Multipurpose Silica Gel with Medium Pores and Balanced Properties", jaTagline: "中孔径・バランス特性の多用途シリカゲル",
    description:
      "B형 실리카겔은 중간 크기 기공(4.5–7 nm)과 적정한 비표면적을 갖춘 다목적 실리카겔로, 습도 변화가 큰 환경의 흡습 용도에 적합합니다.",
    enDescription:
      "Silica Gel Type B is a multipurpose silica gel with medium-sized pores (4.5–7 nm) and moderate specific surface area, suitable for moisture absorption in environments with large humidity fluctuations.", jaDescription: "B型シリカゲルは中程度の気孔(4.5–7 nm)と適正な比表面積を備えた多目的シリカゲルで、湿度変化の大きい環境での吸湿用途に適しています。",
    image: sgTypeB,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "기공 직경", value: "4.5 – 7.0 nm", enLabel: "Pore Diameter", jaLabel: "細孔径" },
      { label: "비표면적", value: "450 – 650 m²/g", enLabel: "Specific Surface Area", jaLabel: "比表面積" },
      { label: "기공 부피", value: "0.6 – 0.85 ml/g", enLabel: "Pore Volume", jaLabel: "細孔容積" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", jaLabel: "包装 / 規格", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
];

productCatalog.push(...silicaGelProducts);

const PS_APPS = ["침전/침강실리카"];
const PS_FEATURES = [
  { title: "🧱 합성 무정형 SiO₂", desc: "수용성 규산염과 산의 반응으로 제조된 순백색 무정형 분말", enTitle: "🧱 Synthetic Amorphous SiO₂", jaTitle: "🧱 合成非晶質SiO₂", enDesc: "Pure white amorphous powder produced by reacting soluble silicate with acid", jaDesc: "水溶性ケイ酸塩と酸の反応により製造される純白色の非晶質粉末" },
  { title: "🧪 고순도 관리", desc: "SiO₂ ≥ 98~99%, 중금속·납·비소 등 유해 성분 엄격 관리", enTitle: "🧪 High-Purity Management", jaTitle: "🧪 高純度管理", enDesc: "SiO₂ ≥ 98–99%, with strict control of harmful components such as heavy metals, lead, and arsenic", jaDesc: "SiO₂ ≥ 98~99%、重金属・鉛・ヒ素などの有害成分を厳格管理" },
  { title: "⚙️ 다공성 구조", desc: "높은 비표면적과 흡유량으로 보강·증점·소광·흡착 성능 발휘", enTitle: "⚙️ Porous Structure", jaTitle: "⚙️ 多孔質構造", enDesc: "High specific surface area and oil absorption deliver reinforcement, thickening, matting, and adsorption performance", jaDesc: "高い比表面積と吸油量により、補強・増粘・艶消し・吸着性能を発揮" },
  { title: "🌿 광범위 응용", desc: "고무·페인트·플라스틱·식의약·치약·화장품 등 산업 전반 적용", enTitle: "🌿 Wide Applications", jaTitle: "🌿 広範な応用", enDesc: "Applied across industries: rubber, paint, plastics, food/pharma, toothpaste, cosmetics, and more", jaDesc: "ゴム・塗料・プラスチック・食品医薬品・歯磨き粉・化粧品など産業全般に適用" },
];

const precipitatedProducts: ProductDetail[] = [
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
  },
];

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
    name: "구형 실리카 분말",
    enName: "Spherical Silica Powder",
    jaName: "球状シリカ粉末",
    tagline: "고구형도·저점도·저열팽창의 반도체·EMC용 프리미엄 구형 실리카",
    enTagline: "High Sphericity · Low Viscosity · Low CTE — Premium Spherical Silica for Semiconductor EMC",
    jaTagline: "高球形度・低粘度・低熱膨張の半導体・EMC用プレミアム球状シリカ",
    description:
      "구형 실리카 분말은 화염 용융 공정을 통해 완전한 구(球) 형태로 성형된 고순도 무정형 SiO₂ 분말입니다. 낮은 수지 점도, 우수한 유동성, 낮은 열팽창계수를 바탕으로 반도체 EMC(Epoxy Molding Compound), CCL(Copper Clad Laminate), 언더필, 봉지재 등 첨단 전자 소재의 핵심 필러로 사용됩니다. 일반 구형(SL-QG)과 저방사(Low-α) 구형(SL-QG-L) 2종 라인업으로 공급됩니다.",
    enDescription:
      "Spherical Silica Powder is a high-purity amorphous SiO₂ powder formed into perfect spheres via a flame-fusion process. Thanks to its low resin viscosity, excellent flowability and low CTE, it is used as a key filler in advanced electronic materials such as semiconductor EMC (Epoxy Molding Compound), CCL, underfill and encapsulants. Supplied in two grades: standard SL-QG and low-alpha SL-QG-L.",
    jaDescription:
      "球状シリカ粉末は火炎溶融工程を経て完全な球形に成形された高純度非晶質SiO₂粉末です。低粘度・優れた流動性・低熱膨張係数により、半導体EMC(エポキシ封止材)・CCL・アンダーフィル・封止材など先端電子素材の主要フィラーとして使用されます。標準品SL-QGおよび低α線グレードSL-QG-Lの2種を供給します。",
    image: sphericalImg,
    category: "advanced-series",
    features: [
      { title: "🔵 고구형도", desc: "화염 용융/금속 실리콘 폭연/화학 합성 공법으로 완전 구형에 가까운 입자 성형", enTitle: "🔵 High Sphericity", jaTitle: "🔵 高球形度", enDesc: "Flame-fusion / Si-deflagration / chemical synthesis produces near-perfect spheres", jaDesc: "火炎溶融/金属Si爆燃/化学合成で完全球形に近い粒子を成形" },
      { title: "🧪 고순도 SiO₂ 99.0 ~ 99.95%", desc: "저 Na⁺·Cl⁻·E/C 관리로 반도체 EMC 신뢰성 확보", enTitle: "🧪 High-Purity SiO₂ 99.0–99.95%", jaTitle: "🧪 高純度SiO₂ 99.0~99.95%", enDesc: "Low Na⁺/Cl⁻/E/C ensures semiconductor EMC reliability", jaDesc: "低Na⁺・Cl⁻・E/C管理で半導体EMCの信頼性を確保" },
      { title: "🌡️ 저열팽창·저열전도", desc: "실리콘 웨이퍼와 열팽창 정합성 우수 — 크랙·박리 최소화", enTitle: "🌡️ Low CTE & Low Thermal Conductivity", jaTitle: "🌡️ 低熱膨張・低熱伝導", enDesc: "Excellent CTE match with silicon wafer — minimizes cracking and delamination", jaDesc: "シリコンウェハとの熱膨張整合性に優れ、クラック・剥離を最小化" },
      { title: "☢️ 저방사 등급(SL-QG-L)", desc: "저 방사성 원소 함량 — 첨단 메모리 소프트 에러 방지", enTitle: "☢️ Low-Alpha Grade (SL-QG-L)", jaTitle: "☢️ 低α線グレード(SL-QG-L)", enDesc: "Low radioactive element content — prevents soft errors in advanced memory", jaDesc: "低放射性元素含有量 — 先端メモリのソフトエラーを防止" },
      { title: "⚙️ 고충전율·저응력", desc: "구형·저비표면적으로 고충전 배합 시에도 저점도·저응력 유지", enTitle: "⚙️ High Loading & Low Stress", jaTitle: "⚙️ 高充填率・低応力", enDesc: "Spherical shape and low SSA maintain low viscosity/stress at high loading", jaDesc: "球状・低比表面積で高充填配合時も低粘度・低応力を維持" },
      { title: "📐 정밀 입도 관리", desc: "D50 0.1 ~ 40 µm 맞춤 공급 (SL-QG), D50 1 ~ 30 µm (SL-QG-L)", enTitle: "📐 Precise PSD Control", jaTitle: "📐 精密な粒度管理", enDesc: "D50 0.1–40 µm (SL-QG) or 1–30 µm (SL-QG-L) customizable", jaDesc: "D50 0.1~40 µm (SL-QG) / 1~30 µm (SL-QG-L) カスタム供給" },
    ],
    specs: [
      { label: "외관", value: "백색 구형 분말", enValue: "White spherical powder", jaValue: "白色球状粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂ 순도", value: "99.0 ~ 99.95 %", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
      { label: "형상", value: "구형(Spherical)", enValue: "Spherical", jaValue: "球形(Spherical)", enLabel: "Morphology", jaLabel: "形状" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "평균 입도 D50", value: "0.1 ~ 40 µm (SL-QG) / 1 ~ 30 µm (SL-QG-L)", enValue: "0.1–40 µm (SL-QG) / 1–30 µm (SL-QG-L)", jaValue: "0.1~40 µm (SL-QG) / 1~30 µm (SL-QG-L)", enLabel: "Mean Particle Size D50", jaLabel: "平均粒度 D50" },
      { label: "특성", value: "저 Na⁺·Cl⁻·E/C · 고구형도 · 저응력", enValue: "Low Na⁺/Cl⁻/E/C · high sphericity · low stress", jaValue: "低Na⁺・Cl⁻・E/C · 高球形度 · 低応力", enLabel: "Features", jaLabel: "特性" },
      { label: "포장", value: "10 / 20 kg 지대 · OEM", enValue: "10 / 20 kg bag · OEM", jaValue: "10 / 20 kg 紙袋 · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "특성", en: "Feature", ja: "特性" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-QG", slug: "sl-qg", spec: "일반 구형", enSpec: "Standard Spherical", jaSpec: "一般球状", name: "SL-QG 일반 구형 실리카 분말", enName: "SL-QG · Standard Spherical Silica Powder", jaName: "SL-QG 一般球状シリカ粉末" },
      { code: "SL-QG-L", slug: "sl-qg-l", spec: "저방사(Low-α) 구형", enSpec: "Low-Alpha Spherical", jaSpec: "低α線 球状", name: "SL-QG-L 저방사 구형 실리카 분말", enName: "SL-QG-L · Low-Alpha Spherical Silica Powder", jaName: "SL-QG-L 低α線球状シリカ粉末" },
    ],
    applications: ["반도체 EMC", "CCL / PCB", "언더필 / 봉지재", "고열전도 소재"],
  },
  {
    slug: "round-corner-silica-powder",
    name: "원각 실리카 분말",
    enName: "Round Corner Silica Powder",
    jaName: "丸角シリカ粉末",
    tagline: "각형과 구형의 장점을 겸비한 원각 실리카 — 우수한 유동성과 경제성",
    enTagline: "Combining Angular Strength with Spherical Flow — Balanced Round-Corner Silica",
    jaTagline: "角形と球状の長所を兼備した丸角シリカ — 優れた流動性と経済性",
    description:
      "원각 실리카 분말은 각형 실리카의 모서리를 라운딩(round-corner) 처리하여 구형에 근접한 유동성과 낮은 수지 점도, 우수한 충전성을 갖춘 하이브리드형 필러입니다. 구형 대비 경제성이 우수하며, 결정형 SL-YJG와 용융형 SL-YRG 2종으로 공급되어 CCL, 도전성 페이스트, 산업용 코팅, 고내마모 복합재 등에 폭넓게 사용됩니다.",
    enDescription:
      "Round Corner Silica Powder is a hybrid filler produced by rounding the corners of angular silica, delivering near-spherical flow, low resin viscosity, and excellent packing. It offers superior cost-performance compared to fully spherical grades, and is available in crystalline SL-YJG and fused SL-YRG grades — widely used in CCL, conductive pastes, industrial coatings, and high-wear composites.",
    jaDescription:
      "丸角シリカ粉末は角形シリカの角を丸め(round-corner)処理し、球状に近い流動性・低樹脂粘度・優れた充填性を備えたハイブリッド型フィラーです。球状品と比較して経済性に優れ、結晶質SL-YJGおよび溶融質SL-YRGの2種で供給され、CCL・導電性ペースト・産業用コーティング・高耐摩耗複合材などに幅広く使用されます。",
    image: roundCornerImg,
    category: "advanced-series",
    features: [
      { title: "🟢 원각 형상 (Round Corner)", desc: "각형의 모서리를 라운딩 처리하여 구형에 근접한 유동성 구현", enTitle: "🟢 Round-Corner Shape", jaTitle: "🟢 丸角形状 (Round Corner)", enDesc: "Rounded corners deliver near-spherical flow performance", jaDesc: "角形の角を丸め処理し、球状に近い流動性を実現" },
      { title: "💰 우수한 경제성", desc: "구형 실리카 대비 20~40% 낮은 원가로 유사 성능 확보", enTitle: "💰 Excellent Cost Efficiency", jaTitle: "💰 優れた経済性", enDesc: "20–40% cost reduction versus spherical silica with similar performance", jaDesc: "球状シリカ対比20~40%低いコストで同等性能を確保" },
      { title: "🔧 2종 라인업", desc: "결정형(SL-YJG)·용융형(SL-YRG) 선택 가능", enTitle: "🔧 Two Grade Lineup", jaTitle: "🔧 2種ラインアップ", enDesc: "Choice of crystalline SL-YJG and fused SL-YRG", jaDesc: "結晶質(SL-YJG)・溶融質(SL-YRG)の選択が可能" },
      { title: "🧬 고충전성", desc: "원각 구조로 고충전 배합 시에도 점도 상승 최소화", enTitle: "🧬 High Loading", jaTitle: "🧬 高充填性", enDesc: "Round-corner structure minimizes viscosity rise at high loading", jaDesc: "丸角構造で高充填配合時にも粘度上昇を最小化" },
      { title: "🛡️ 우수한 내마모성", desc: "각형의 강도와 구형의 매끄러움 동시 확보", enTitle: "🛡️ Excellent Wear Resistance", jaTitle: "🛡️ 優れた耐摩耗性", enDesc: "Angular strength combined with spherical smoothness", jaDesc: "角形の強度と球状の滑らかさを同時に確保" },
      { title: "📐 맞춤 입도", desc: "D50 1 ~ 40 µm 요구 사양별 공급", enTitle: "📐 Custom PSD", jaTitle: "📐 カスタム粒度", enDesc: "D50 1–40 µm supplied per requirements", jaDesc: "D50 1~40 µm 要求仕様別に供給" },
    ],
    specs: [
      { label: "외관", value: "백색 원각 분말", enValue: "White round-corner powder", jaValue: "白色丸角粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂ 순도", value: "98.0 ~ 99.9 % (SL-YJG) / 99.0 ~ 99.95 % (SL-YRG)", enValue: "98.0–99.9 % (SL-YJG) / 99.0–99.95 % (SL-YRG)", jaValue: "98.0~99.9 % (SL-YJG) / 99.0~99.95 % (SL-YRG)", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
      { label: "형상", value: "원각(Round Corner)", enValue: "Round Corner", jaValue: "丸角(Round Corner)", enLabel: "Shape", jaLabel: "形状" },
      { label: "백도 / 모스경도 (SL-YJG)", value: "90 이상 / 7", enValue: "90 Min / 7", jaValue: "90以上 / 7", enLabel: "Whiteness / Mohs (SL-YJG)", jaLabel: "白度 / モース硬度 (SL-YJG)" },
      { label: "팽창계수 / PH (SL-YRG)", value: "0.5×10⁻⁶ / 5 ~ 8", enValue: "0.5×10⁻⁶ / 5–8", jaValue: "0.5×10⁻⁶ / 5~8", enLabel: "Expansion / PH (SL-YRG)", jaLabel: "膨張係数 / PH (SL-YRG)" },
      { label: "평균 입도 D50", value: "10 ~ 50 µm (맞춤)", enValue: "10–50 µm (customizable)", jaValue: "10~50 µm (カスタム)", enLabel: "Mean D50", jaLabel: "平均粒度 D50" },
      { label: "포장", value: "20 kg 지대 · 500 kg 벌크백 · OEM", enValue: "20 kg bag · 500 kg bulk · OEM", jaValue: "20 kg 紙袋 · 500 kg バルク · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "타입", en: "Type", ja: "タイプ" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-YJG", slug: "sl-yjg", spec: "결정형 원각", enSpec: "Crystalline Round-Corner", jaSpec: "結晶質 丸角", name: "SL-YJG 결정형 원각 실리카 분말", enName: "SL-YJG · Crystalline Round-Corner Silica Powder", jaName: "SL-YJG 結晶質丸角シリカ粉末" },
      { code: "SL-YRG", slug: "sl-yrg", spec: "용융형 원각", enSpec: "Fused Round-Corner", jaSpec: "溶融質 丸角", name: "SL-YRG 용융형 원각 실리카 분말", enName: "SL-YRG · Fused Round-Corner Silica Powder", jaName: "SL-YRG 溶融質丸角シリカ粉末" },
    ],
    applications: ["CCL / PCB", "도전성 페이스트", "산업용 코팅", "고내마모 복합재"],
  },
  {
    slug: "angular-silica-powder",
    name: "각형 실리카 분말",
    enName: "Angular Silica Powder",
    jaName: "角形シリカ粉末",
    tagline: "고강도·고내마모의 각형 실리카 — 산업 전반의 표준 필러",
    enTagline: "High Strength · High Wear Resistance — Industry-Standard Angular Silica Filler",
    jaTagline: "高強度・高耐摩耗の角形シリカ — 産業全般の標準フィラー",
    description:
      "각형 실리카 분말은 고순도 SiO₂를 정밀 분쇄한 각진 형태의 무기 분체 필러로, 뛰어난 기계적 강도와 내마모성, 우수한 절연 특성을 제공합니다. 용융형(SL-RG)과 결정형(SL-JG) 2종으로 공급되며 EMC, 산업 도료, 접착제, 고무 보강, 인조 대리석, 전기 절연재 등 다양한 산업에서 표준 필러로 사용됩니다.",
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
      { title: "💰 경제적 가격", desc: "구형 대비 낮은 원가의 표준 필러", enTitle: "💰 Cost-Effective", jaTitle: "💰 経済的価格", enDesc: "Standard filler with lower cost than spherical grades", jaDesc: "球状品対比低コストの標準フィラー" },
      { title: "🔥 열적 안정성", desc: "고온 공정에서도 안정적 물성 유지", enTitle: "🔥 Thermal Stability", jaTitle: "🔥 熱的安定性", enDesc: "Maintains properties under high-temperature processes", jaDesc: "高温工程でも安定した物性を維持" },
    ],
    specs: [
      { label: "외관", value: "백색 각형 분말", enValue: "White angular powder", jaValue: "白色角形粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "SiO₂ 순도", value: "99.0 ~ 99.95 % (SL-RG) / 98.0 ~ 99.9 % (SL-JG)", enValue: "99.0–99.95 % (SL-RG) / 98.0–99.9 % (SL-JG)", jaValue: "99.0~99.95 % (SL-RG) / 98.0~99.9 % (SL-JG)", enLabel: "SiO₂ Purity", jaLabel: "SiO₂純度" },
      { label: "형상", value: "각형 (Angular)", enValue: "Angular", jaValue: "角形 (Angular)", enLabel: "Shape", jaLabel: "形状" },
      { label: "팽창계수 / PH (SL-RG)", value: "0.5×10⁻⁶ / 5 ~ 8", enValue: "0.5×10⁻⁶ / 5–8", jaValue: "0.5×10⁻⁶ / 5~8", enLabel: "Expansion / PH (SL-RG)", jaLabel: "膨張係数 / PH (SL-RG)" },
      { label: "백도 / 모스경도 (SL-JG)", value: "90 이상 / 7", enValue: "90 Min / 7", jaValue: "90以上 / 7", enLabel: "Whiteness / Mohs (SL-JG)", jaLabel: "白度 / モース硬度 (SL-JG)" },
      { label: "평균 입도 D50", value: "1 ~ 50 µm (맞춤)", enValue: "1–50 µm (customizable)", jaValue: "1~50 µm (カスタム)", enLabel: "Mean D50", jaLabel: "平均粒度 D50" },
      { label: "특성", value: "저 Na⁺·Cl⁻·E/C · 저열팽창 · 안정적 기계 물성", enValue: "Low Na⁺/Cl⁻/E/C · low CTE · stable mechanical performance", jaValue: "低Na⁺・Cl⁻・E/C · 低熱膨張 · 安定した機械物性", enLabel: "Features", jaLabel: "特性" },
      { label: "포장", value: "20 kg 지대 · 500 kg 벌크백 · OEM", enValue: "20 kg bag · 500 kg bulk · OEM", jaValue: "20 kg 紙袋 · 500 kg バルク · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "타입", en: "Type", ja: "タイプ" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-RG", slug: "sl-rg", spec: "용융형 각형", enSpec: "Fused Angular", jaSpec: "溶融質 角形", name: "SL-RG 용융형 각형 실리카 분말", enName: "SL-RG · Fused Angular Silica Powder", jaName: "SL-RG 溶融質角形シリカ粉末" },
      { code: "SL-JG", slug: "sl-jg", spec: "결정형 각형", enSpec: "Crystalline Angular", jaSpec: "結晶質 角形", name: "SL-JG 결정형 각형 실리카 분말", enName: "SL-JG · Crystalline Angular Silica Powder", jaName: "SL-JG 結晶質角形シリカ粉末" },
    ],
    applications: ["EMC / 봉지재", "산업 도료", "접착제 · 실란트", "고무 보강", "인조 대리석", "전기 절연재"],
  },
  {
    slug: "low-radiation-silica-powder",
    name: "저방사 실리카 분말",
    enName: "Low-Radiation Silica Powder",
    jaName: "低α線シリカ粉末",
    tagline: "α선 ≤ 0.001 cph/cm² — 첨단 메모리·HBM·AI 반도체용 저방사 실리카",
    enTagline: "α-Emission ≤ 0.001 cph/cm² — Low-Radiation Silica for Advanced Memory, HBM and AI Semiconductors",
    jaTagline: "α線 ≤ 0.001 cph/cm² — 先端メモリ・HBM・AI半導体用低α線シリカ",
    description:
      "저방사 실리카 분말은 우라늄(U)·토륨(Th) 등 방사성 불순물을 극한까지 제거하여 α선 방사량을 0.001 cph/cm² 이하로 관리한 초고순도 SiO₂ 필러입니다. HBM, DDR5, 어드밴스드 패키징 등 소프트 에러에 극도로 민감한 첨단 메모리 반도체 EMC·언더필의 필수 소재이며, 결정형(SL-CL)과 용융형(SL-FL) 2종으로 공급됩니다.",
    enDescription:
      "Low-Radiation Silica Powder is an ultra-high-purity SiO₂ filler in which radioactive impurities (U, Th) have been reduced to the ultimate level, keeping α-emission ≤ 0.001 cph/cm². It is an essential material for EMC and underfill of soft-error-sensitive advanced memory devices such as HBM, DDR5 and advanced packaging. Supplied as crystalline SL-CL and fused SL-FL grades.",
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
      { label: "α선 방사량", value: "저방사(Low-α) 관리", enValue: "Low-α controlled", jaValue: "低α線管理", enLabel: "α-Emission", jaLabel: "α線放射量" },
      { label: "평균 입도 D50", value: "1 ~ 30 µm (맞춤)", enValue: "1–30 µm (customizable)", jaValue: "1~30 µm (カスタム)", enLabel: "Mean D50", jaLabel: "平均粒度 D50" },
      { label: "포장", value: "10 / 20 kg 지대 · OEM", enValue: "10 / 20 kg bag · OEM", jaValue: "10 / 20 kg 紙袋 · OEM", enLabel: "Packaging", jaLabel: "包装" },
    ],
    subModelsColumnLabel: { ko: "타입", en: "Type", ja: "タイプ" },
    isCategoryIndex: true,
    subModels: [
      { code: "SL-CL", slug: "sl-cl", spec: "저방사 결정형", enSpec: "Low-Radiation Crystalline", jaSpec: "低α線 結晶質", name: "SL-CL 저방사 결정형 실리카 분말", enName: "SL-CL · Low-Radiation Crystalline Silica Powder", jaName: "SL-CL 低α線結晶質シリカ粉末" },
      { code: "SL-FL", slug: "sl-fl", spec: "저방사 용융형", enSpec: "Low-Radiation Fused", jaSpec: "低α線 溶融質", name: "SL-FL 저방사 용융형 실리카 분말", enName: "SL-FL · Low-Radiation Fused Silica Powder", jaName: "SL-FL 低α線溶融質シリカ粉末" },
    ],
    applications: ["HBM / DDR5", "AI 반도체 EMC", "언더필 / 봉지재", "어드밴스드 패키징"],
  },
  {
    slug: "surface-modified-silica-powder",
    name: "활성 실리카 분말",
    enName: "Surface-Modified Silica Powder",
    jaName: "活性(表面改質)シリカ粉末",
    tagline: "실란 커플링 표면개질로 수지 친화성·분산성 극대화",
    enTagline: "Silane-Coupling Surface Modification for Maximum Resin Compatibility and Dispersion",
    jaTagline: "シランカップリング表面改質で樹脂親和性・分散性を極大化",
    description:
      "활성(표면개질) 실리카 분말은 SiO₂ 표면에 실란 커플링제(에폭시 실란 등)를 화학적으로 결합시켜 수지와의 친화성, 분산성, 계면 접착력을 획기적으로 향상시킨 기능성 필러입니다. 표준 등급 SL-DRG07과 고순도 등급 SL-DRG07-A 2종으로 공급되며, 반도체 EMC·언더필, 에폭시·페놀·실리콘·아크릴 등 다양한 수지 매트릭스에 최적화됩니다.",
    enDescription:
      "Surface-Modified Silica Powder is a functional filler in which epoxy-silane coupling agent is chemically bonded to the SiO₂ surface, dramatically improving resin compatibility, dispersion and interfacial adhesion. Supplied as standard SL-DRG07 and high-purity SL-DRG07-A grades — optimized for semiconductor EMC/underfill and epoxy, phenolic, silicone and acrylic resin matrices.",
    jaDescription:
      "活性(表面改質)シリカ粉末は、SiO₂表面にシランカップリング剤(エポキシシラン)を化学結合させ、樹脂との親和性・分散性・界面接着力を飛躍的に向上させた機能性フィラーです。標準グレードSL-DRG07・高純度グレードSL-DRG07-Aの2種で供給され、半導体EMC・アンダーフィル、エポキシ・フェノール・シリコーン・アクリルなど多様な樹脂マトリックスに最適化されます。",
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
      { code: "SL-DRG07", slug: "sl-drg07", spec: "표준 등급 (에폭시 실란 표면처리)", enSpec: "Standard Grade (Epoxy-Silane Treated)", jaSpec: "標準グレード (エポキシシラン表面処理)", name: "SL-DRG07 활성 실리카 분말", enName: "SL-DRG07 · Surface-Modified Silica Powder", jaName: "SL-DRG07 活性シリカ粉末" },
      { code: "SL-DRG07-A", slug: "sl-drg07-a", spec: "고순도 등급 (에폭시 실란 표면처리)", enSpec: "High-Purity Grade (Epoxy-Silane Treated)", jaSpec: "高純度グレード (エポキシシラン表面処理)", name: "SL-DRG07-A 활성 실리카 분말", enName: "SL-DRG07-A · Surface-Modified Silica Powder", jaName: "SL-DRG07-A 活性シリカ粉末" },
    ],
    applications: ["에폭시 복합재", "실리콘 실란트", "고성능 접착제", "코팅 · 잉크"],
  },
  {
    slug: "silica-sand-granule",
    name: "실리카 사 · 입자",
    enName: "Silica Sand & Granule",
    jaName: "シリカサンド・粒",
    tagline: "고순도 결정·용융 석영사 — 유리·주조·연마·필터용 산업 표준 소재",
    enTagline: "High-Purity Crystalline & Fused Quartz Sand — Industrial Standard for Glass, Casting, Abrasives and Filtration",
    jaTagline: "高純度結晶・溶融石英砂 — ガラス・鋳造・研磨・フィルター用産業標準素材",
    description:
      "실리카 사 및 입자 시리즈는 고순도 석영을 선별·정제한 결정형 석영사(SL-CS)와 초고온 용융을 거친 용융형 석영사(SL-FS)로 구성됩니다. 유리 원료, 정밀 주조, 연마재, 워터필터, 스포츠 표면재 등 광범위한 산업 분야에 사용되며, 입도 20 mesh부터 200 mesh까지 맞춤 공급이 가능합니다.",
    enDescription:
      "The Silica Sand & Granule series consists of crystalline quartz sand (SL-CS) — purified from high-grade quartz — and fused quartz sand (SL-FS) processed at ultra-high temperature. Used across broad industries including glass raw material, precision casting, abrasives, water filtration and sports surface materials. Custom grain size available from 20 to 200 mesh.",
    jaDescription:
      "シリカサンド・粒シリーズは高純度石英を選別・精製した結晶質石英砂(SL-CS)と超高温溶融を経た溶融質石英砂(SL-FS)で構成されます。ガラス原料・精密鋳造・研磨材・浄水フィルター・スポーツ表面材など幅広い産業分野に使用され、粒度20 meshから200 meshまでカスタム供給が可能です。",
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
      "SL-ZT 무연유리분말은 납(Pb)을 사용하지 않는 친환경 저융점 봉착 유리 프릿으로, RoHS·REACH 규제에 완전 부합합니다. 400 ~ 550℃의 저융점 특성과 우수한 접착·봉착 성능을 통해 전자 부품, 디스플레이, 태양전지, 세라믹·금속 봉착 등 고부가가치 응용에 사용됩니다.",
    enDescription:
      "SL-ZT Lead-Free Glass Powder is an eco-friendly low-melting sealing glass frit that eliminates lead (Pb), fully compliant with RoHS and REACH. With a low melting range of 400–550℃ and excellent adhesion/sealing performance, it is used in high-value applications such as electronic components, displays, solar cells, and ceramic/metal sealing.",
    jaDescription:
      "SL-ZT無鉛ガラス粉末は鉛(Pb)を使用しない環境配慮型の低融点封着ガラスフリットで、RoHS・REACH規制に完全準拠します。400~550℃の低融点特性と優れた接着・封着性能により、電子部品・ディスプレイ・太陽電池・セラミック/金属封着など高付加価値用途に使用されます。",
    image: leadFreeGlassImg,
    category: "advanced-series",
    features: [
      { title: "🌿 완전 무연 조성", desc: "RoHS · REACH 규제 완전 부합의 친환경 소재", enTitle: "🌿 Fully Lead-Free", jaTitle: "🌿 完全無鉛組成", enDesc: "Eco-friendly material fully compliant with RoHS and REACH", jaDesc: "RoHS・REACH規制に完全準拠する環境配慮素材" },
      { title: "🔥 저융점 (400 ~ 550℃)", desc: "저온 봉착으로 기판·부품 열손상 최소화", enTitle: "🔥 Low Melting Point (400–550℃)", jaTitle: "🔥 低融点 (400~550℃)", enDesc: "Low-temperature sealing minimizes thermal damage to substrates and components", jaDesc: "低温封着で基板・部品の熱損傷を最小化" },
      { title: "🔗 우수한 봉착 성능", desc: "세라믹·금속·유리 이종 접합 안정성", enTitle: "🔗 Excellent Sealing", jaTitle: "🔗 優れた封着性能", enDesc: "Stable dissimilar bonding of ceramics, metals and glass", jaDesc: "セラミック・金属・ガラス異種接合の安定性" },
      { title: "🌡️ 열팽창 정합성", desc: "다양한 기판 CTE에 맞춘 조성 커스터마이징", enTitle: "🌡️ CTE Matching", jaTitle: "🌡️ 熱膨張整合性", enDesc: "Composition customized to match various substrate CTEs", jaDesc: "多様な基板CTEに合わせた組成カスタマイズ" },
      { title: "🧪 고순도 관리", desc: "중금속·염소·황 등 유해 성분 엄격 관리", enTitle: "🧪 High-Purity Control", jaTitle: "🧪 高純度管理", enDesc: "Strict control of heavy metals, chloride and sulfur", jaDesc: "重金属・塩素・硫黄など有害成分を厳格管理" },
      { title: "📐 미세 균일 분말", desc: "D50 3 ~ 15 µm 정밀 관리로 균일 도포성", enTitle: "📐 Fine Uniform Powder", jaTitle: "📐 微細均一粉末", enDesc: "Precise D50 3–15 µm control for uniform application", jaDesc: "D50 3~15 µmの精密管理で均一な塗布性" },
    ],
    specs: [
      { label: "외관", value: "미세 백색·담황색 분말", enValue: "Fine white / pale yellow powder", jaValue: "微細白色・淡黄色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "조성", value: "무연(Pb-Free) · Bi/Zn/B/Si 계", enValue: "Pb-Free · Bi/Zn/B/Si system", jaValue: "無鉛(Pb-Free) · Bi/Zn/B/Si系", enLabel: "Composition", jaLabel: "組成" },
      { label: "연화점(Ts)", value: "350 ~ 450 ℃", enLabel: "Softening Point (Ts)", jaLabel: "軟化点(Ts)" },
      { label: "봉착 온도", value: "400 ~ 550 ℃", enLabel: "Sealing Temperature", jaLabel: "封着温度" },
      { label: "열팽창계수 (CTE)", value: "6 ~ 11 ×10⁻⁶/℃ (조정 가능)", enValue: "6–11 ×10⁻⁶/℃ (adjustable)", jaValue: "6~11 ×10⁻⁶/℃ (調整可能)", enLabel: "CTE", jaLabel: "熱膨張係数 (CTE)" },
      { label: "평균 입도 D50", value: "3 ~ 15 µm (맞춤)", enValue: "3–15 µm (customizable)", jaValue: "3~15 µm (カスタム)", enLabel: "Mean D50", jaLabel: "平均粒度 D50" },
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
  // ===== Spherical =====
  "sl-qg": {
    tagline: "SiO₂ 99.0 ~ 99.95% · D50 0.1 ~ 40μm · 화염 용융 일반 구형",
    enTagline: "SiO₂ 99.0–99.95% · D50 0.1–40 µm · Standard Flame-Fusion Spherical",
    jaTagline: "SiO₂ 99.0~99.95% · D50 0.1~40μm · 火炎溶融 一般球状",
    description: "SL-QG 시리즈 구형 실리카 분말은 고순도 이산화규소를 원료로 화염 용융법·금속 실리콘 폭연법·화학 합성법을 통해 가공된 구형 SiO₂ 분말 소재입니다. 저비표면적, 우수한 유동성, 저응력이 특징입니다.",
    enDescription: "SL-QG series Spherical Silica Powder is a spherical SiO₂ powder produced from high-purity silica by flame fusion, metallic silicon deflagration or chemical synthesis. Featured by small specific surface area, good liquidity and low stress.",
    jaDescription: "SL-QGシリーズ球状シリカ粉末は、高純度シリカを原料に火炎溶融法・金属Si爆燃法・化学合成法で加工した球状SiO₂粉末素材です。小比表面積・優れた流動性・低応力が特徴です。",
    specs: [
      { label: "품번 (Code)", value: "SL-QG", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "99.0 ~ 99.95 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "형상", value: "구형(Spherical)", enValue: "Spherical", jaValue: "球形(Spherical)", enLabel: "Morphology", jaLabel: "形状" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "D50 (입도)", value: "0.1 ~ 40 μm (맞춤)", enValue: "0.1–40 µm (customizable)", jaValue: "0.1~40 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
      { label: "특성", value: "저 Na⁺·Cl⁻·E/C, 고구형도, 저응력", enValue: "Low Na⁺/Cl⁻/E/C · high sphericity · low stress", jaValue: "低Na⁺・Cl⁻・E/C · 高球形度 · 低応力", enLabel: "Features", jaLabel: "特性" },
    ],
  },
  "sl-qg-l": {
    tagline: "SiO₂ 99.0 ~ 99.95% · D50 1 ~ 30μm · 저방사(Low-α) 구형",
    enTagline: "SiO₂ 99.0–99.95% · D50 1–30 µm · Low-α Spherical",
    jaTagline: "SiO₂ 99.0~99.95% · D50 1~30μm · 低α線 球状",
    description: "SL-QG-L 시리즈 저방사 구형 실리카 분말은 고순도·저방사성 이산화규소를 원료로 화염 용융법으로 가공된 구형 SiO₂ 소재입니다. 방사성 원소 함량이 낮아 첨단 메모리 반도체 EMC용으로 사용됩니다.",
    enDescription: "SL-QG-L series Low-α Spherical Silica Powder is made from high-purity, low-radiation silica by flame-fusion into spherical SiO₂ powder. Its low radioactive element content makes it suitable for advanced memory semiconductor EMC.",
    jaDescription: "SL-QG-Lシリーズ低α線球状シリカ粉末は、高純度・低放射性シリカを原料に火炎溶融法で加工した球状SiO₂素材です。放射性元素含有量が低く、先端メモリ半導体EMC用途に使用されます。",
    specs: [
      { label: "품번 (Code)", value: "SL-QG-L", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "SiO₂", value: "99.0 ~ 99.95 %", enLabel: "SiO₂", jaLabel: "SiO₂" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "형상", value: "구형(Spherical)", enValue: "Spherical", jaValue: "球形(Spherical)", enLabel: "Morphology", jaLabel: "形状" },
      { label: "PH", value: "5 ~ 8", enLabel: "PH", jaLabel: "PH" },
      { label: "D50 (입도)", value: "1 ~ 30 μm (맞춤)", enValue: "1–30 µm (customizable)", jaValue: "1~30 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
      { label: "특성", value: "저 방사성 원소, 저 Na⁺·Cl⁻·E/C, 고구형도", enValue: "Low radioactive elements · low Na⁺/Cl⁻/E/C · high sphericity", jaValue: "低放射性元素 · 低Na⁺・Cl⁻・E/C · 高球形度", enLabel: "Features", jaLabel: "特性" },
    ],
  },
  // ===== Round Corner =====
  "sl-yjg": {
    tagline: "SiO₂ 98.0 ~ 99.9% · D50 10 ~ 50μm · 결정형 원각",
    enTagline: "SiO₂ 98.0–99.9% · D50 10–50 µm · Crystalline Round-Corner",
    jaTagline: "SiO₂ 98.0~99.9% · D50 10~50μm · 結晶質 丸角",
    description: "SL-YJG 시리즈 결정형 원각 실리카 분말은 고순도 결정형 이산화규소 분말을 원료로 정형 설비로 가공하여 입자 표면을 더욱 매끄럽고 유동성을 향상시킨 소재입니다.",
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
    tagline: "SiO₂ 99.0 ~ 99.95% · 팽창계수 0.5×10⁻⁶ · 용융형 원각",
    enTagline: "SiO₂ 99.0–99.95% · Expansion 0.5×10⁻⁶ · Fused Round-Corner",
    jaTagline: "SiO₂ 99.0~99.95% · 膨張係数 0.5×10⁻⁶ · 溶融質 丸角",
    description: "SL-YRG 시리즈 용융형 원각 실리카 분말은 고순도 용융 이산화규소 분말을 원료로 정형 설비로 가공하여 입자 표면을 더 매끄럽고 유동성을 개선한 소재입니다.",
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
    tagline: "SiO₂ 99.0 ~ 99.95% · 팽창계수 0.5×10⁻⁶ · 용융형 각형",
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
    tagline: "SiO₂ 98.0 ~ 99.9% · 백도 90 이상 · 결정형 각형",
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
    tagline: "SiO₂ 98.0 ~ 99.9% · 저방사 결정형 · D50 1 ~ 30μm",
    enTagline: "SiO₂ 98.0–99.9% · Low-α Crystalline · D50 1–30 µm",
    jaTagline: "SiO₂ 98.0~99.9% · 低α線 結晶質 · D50 1~30μm",
    description: "SL-CL 시리즈 저방사 결정 실리카 분말은 저방사성 결정 이산화규소를 원료로 자체 설계된 전문 설비로 가공된 SiO₂ 분체 소재입니다.",
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
    tagline: "SiO₂ 99.0 ~ 99.95% · 저방사 용융형 · D50 1 ~ 30μm",
    enTagline: "SiO₂ 99.0–99.95% · Low-α Fused · D50 1–30 µm",
    jaTagline: "SiO₂ 99.0~99.95% · 低α線 溶融質 · D50 1~30μm",
    description: "SL-FL 시리즈 저방사 용융 실리카 분말은 저방사성 결정 이산화규소를 원료로 고온 용융 및 전문 설비 가공을 거쳐 제조된 SiO₂ 분체 소재입니다.",
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
    description: "SL-ZT 시리즈 무연유리분말은 무연 배합 기술을 적용하여 고온 용융·연마·선별 공정을 통해 생산됩니다. 유리화 온도가 300~850℃ 범위이며 우수한 전기 절연성과 고강도 결합성을 제공합니다.",
    enDescription: "SL-ZT series Lead-Free Glass Powder is produced using lead-free formula technology through high-temperature melting, grinding and screening. It offers a vitrification temperature range of 300–850℃ with good electrical insulation and high-strength bonding.",
    jaDescription: "SL-ZTシリーズ無鉛ガラス粉末は無鉛配合技術を採用し、高温溶融・研磨・選別工程で生産されます。ガラス化温度が300~850℃の範囲で、優れた電気絶縁性と高強度結合性を提供します。",
    specs: [
      { label: "품번 (Code)", value: "SL-ZT", enLabel: "Code", jaLabel: "品番 (Code)" },
      { label: "산화납 함량 (PbO)", value: "0", enLabel: "Lead Oxide Content (PbO)", jaLabel: "酸化鉛含有量 (PbO)" },
      { label: "외관", value: "백색 분말", enValue: "White powder", jaValue: "白色粉末", enLabel: "Appearance", jaLabel: "外観" },
      { label: "사용 온도", value: "300 ~ 800 ℃ 조정 가능", enValue: "300–800 ℃ adjustable", jaValue: "300~800 ℃ 調整可能", enLabel: "Operating Temperature", jaLabel: "使用温度" },
      { label: "D50 (입도)", value: "3-5 / 5-8 / 8-12 / 12-16 μm (맞춤)", enValue: "3-5 / 5-8 / 8-12 / 12-16 µm (customizable)", jaValue: "3-5 / 5-8 / 8-12 / 12-16 μm (カスタム)", enLabel: "D50 (PSD)", jaLabel: "D50 (粒度)" },
      { label: "특성", value: "무연·무해·친환경, EU 규제 부합, 우수한 전기 절연성, 고강도 결합성", enValue: "Lead-free / non-toxic / eco-friendly · EU compliant · good electrical insulation · high-strength bonding", jaValue: "無鉛・無害・環境配慮 · EU規制準拠 · 優れた電気絶縁性 · 高強度結合性", enLabel: "Features", jaLabel: "特性" },
    ],
  },
};

const generatedChildren: ProductDetail[] = [];
for (const parent of advSeriesProducts) {
  if (!parent.subModels) continue;
  for (const sm of parent.subModels) {
    if (!sm.slug) continue;
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
      image: parent.image,
      category: parent.category,
      parentSlug: parent.slug,
      features: parent.features,
      specs: override?.specs ?? parent.specs,
      applications: parent.applications,
    });
  }
}
productCatalog.push(...generatedChildren);




export const getProductBySlug = (slug: string) =>
  productCatalog.find((p) => p.slug === slug);

export const getProductsByCategory = (cat: ProductCategory) =>
  productCatalog.filter((p) => (p.category ?? "quartz") === cat);
