import gradeA from "@/assets/grade-a-silica.png";
import gradeADetail from "@/assets/grade-a-detail.png";
import gradeB from "@/assets/grade-b-silica.png";
import gradeBDetail from "@/assets/grade-b-detail.png";
import gradeC from "@/assets/grade-c-silica.png";
import gradeCDetail from "@/assets/grade-c-detail.png";
import pProcess from "@/assets/p-process.jpg";
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

export type ProductCategory = "quartz" | "silica-gel" | "precipitated";

export type ProductDetail = {
  slug: string;
  name: string;
  enName: string;
  tagline: string;
  enTagline?: string;
  description: string;
  enDescription?: string;
  image: string;
  detailImage?: string;
  category?: ProductCategory;
  features: { title: string; desc: string; enTitle?: string; enDesc?: string }[];
  specs: { label: string; value: string; note?: string; enLabel?: string; enNote?: string }[];
  applications: string[];
};

export const productCatalog: ProductDetail[] = [
  {
    slug: "fused-silica-a-grade",
    name: "A등급 용융실리카",
    enName: "Grade A · Ultra-High Purity Fused Silica",
    tagline: "반도체 공정의 신뢰를 완성하는 100% 무정형 초정밀 소재",
    enTagline: "100% Amorphous Ultra-Precision Material That Delivers Semiconductor-Grade Reliability",
    description:
      "초고순도 용융 실리카 A등급은 99.9% 이상의 SiO₂ 순도와 100% 무정형 구조를 갖춘 최고 등급의 용융 실리카입니다. 반도체·광학·항공/방산·의료·에너지 등 최고 수준의 신뢰성이 요구되는 첨단 산업에 공급됩니다.",
    enDescription:
      "Grade A Ultra-High Purity Fused Silica is the highest-grade fused silica with ≥99.9% SiO₂ purity and a 100% amorphous structure. It is supplied to cutting-edge industries demanding the utmost reliability, including semiconductors, optics, aerospace/defense, medical, and energy.",
    image: gradeA,
    detailImage: gradeADetail,
    features: [
      { title: "🔬 완벽한 무정형 구조", desc: "100% 무정형으로 고온에서도 결정화·변형 제로", enTitle: "🔬 Perfect Amorphous Structure", enDesc: "100% amorphous — zero crystallization or deformation even at high temperatures" },
      { title: "🌡️ 극저열팽창", desc: "열팽창계수 < 0.6 (×10⁻⁶/°C) — 열충격에 매우 강함", enTitle: "🌡️ Ultra-Low Thermal Expansion", enDesc: "Coefficient of thermal expansion < 0.6 (×10⁻⁶/°C) — highly resistant to thermal shock" },
      { title: "🧼 초고순도 관리", desc: "금속 불순물 합계 < 0.03%, 반도체 수율 저하 요인 차단", enTitle: "🧼 Ultra-High Purity Management", enDesc: "Total metallic impurities < 0.03% — eliminates yield-loss factors in semiconductor production" },
      { title: "⚡ 고전기절연성", desc: "EC < 3 µs/cm, Cl < 3 ppm — 전자 부품 절연 최적화", enTitle: "⚡ Superior Electrical Insulation", enDesc: "EC < 3 µs/cm, Cl < 3 ppm — optimized insulation for electronic components" },
      { title: "🔧 맞춤형 입도", desc: "60mm 과립부터 1µm(12500 메쉬) 미분까지 가공 가능", enTitle: "🔧 Custom Particle Sizes", enDesc: "Processable from 60 mm granules down to 1 µm (12,500 mesh) fine powder" },
      { title: "✅ 안정 공급", desc: "엄격한 QC와 자체 광산 기반의 안정적 공급망", enTitle: "✅ Stable Supply", enDesc: "Stable supply chain backed by strict QC and our own silica mine" },
    ],
    specs: [
      { label: "SiO₂ (순도)", value: "≥ 99.9%", note: "초고순도", enLabel: "SiO₂ (Purity)", enNote: "Ultra-high purity" },
      { label: "Al (알루미늄)", value: "< 0.01%", note: "극미량", enLabel: "Al (Aluminum)", enNote: "Trace amount" },
      { label: "Fe (철)", value: "< 0.005%", note: "극미량", enLabel: "Fe (Iron)", enNote: "Trace amount" },
      { label: "K (칼륨)", value: "< 0.003%", note: "극미량", enLabel: "K (Potassium)", enNote: "Trace amount" },
      { label: "Na (나트륨)", value: "< 0.003%", note: "극미량", enLabel: "Na (Sodium)", enNote: "Trace amount" },
      { label: "Ca (칼슘)", value: "< 0.003%", note: "극미량", enLabel: "Ca (Calcium)", enNote: "Trace amount" },
      { label: "Mg (마그네슘)", value: "< 0.001%", note: "극미량", enLabel: "Mg (Magnesium)", enNote: "Trace amount" },
      { label: "무정형상 (Amorphous)", value: "100%", note: "완전 무정형", enLabel: "Amorphous", enNote: "Fully amorphous" },
      { label: "열팽창계수", value: "< 0.6 (×10⁻⁶/°C)", note: "초저팽창", enLabel: "Thermal Expansion Coefficient", enNote: "Ultra-low expansion" },
      { label: "수분 (Moisture)", value: "< 0.1%", note: "건조 관리", enLabel: "Moisture", enNote: "Dry controlled" },
      { label: "밀도 (Density)", value: "1.8 – 2.4 ×10³ kg/m³", note: "균일", enLabel: "Density", enNote: "Uniform" },
      { label: "모스경도 (Mohs)", value: "7", note: "내마모성", enLabel: "Mohs Hardness", enNote: "Wear-resistant" },
      { label: "수성추출액 EC", value: "< 3 µs/cm", note: "고절연", enLabel: "Aqueous Extract EC", enNote: "High insulation" },
      { label: "수성추출액 Cl", value: "< 3 ppm", note: "초저염소", enLabel: "Aqueous Extract Cl", enNote: "Ultra-low chlorine" },
      { label: "수성추출액 pH", value: "6.5 ± 1", note: "중성 안정", enLabel: "Aqueous Extract pH", enNote: "Neutral stability" },
    ],
    applications: ["반도체", "광학", "디스플레이", "항공/방산", "의료", "에너지"],
  },
  {
    slug: "fused-silica-b-grade",
    name: "B등급 용융실리카",
    enName: "Grade B · Premium Fused Silica",
    tagline: "고순도와 열적 안정성의 최적 균형, 에너지 및 정밀 산업의 표준",
    enTagline: "Optimal Balance of High Purity and Thermal Stability — The Standard for Energy and Precision Industries",
    description:
      "프리미엄 용융 실리카 B등급은 99.5% 이상의 SiO₂ 순도와 98% 이상의 무정형 구조를 갖춘 고품질 소재입니다. 태양광·전자/반도체·정밀 주조·특수 소재 등 고신뢰성이 요구되는 산업에 폭넓게 공급됩니다.",
    enDescription:
      "Grade B Premium Fused Silica is a high-quality material with ≥99.5% SiO₂ purity and ≥98% amorphous structure. It is widely supplied to industries requiring high reliability, including solar, electronics/semiconductor, precision casting, and specialty materials.",
    image: gradeB,
    detailImage: gradeBDetail,
    features: [
      { title: "🔥 우수한 열적 안정성", desc: "98% 이상 무정형 + 열팽창 < 0.8 → 고온 환경 균일 성능 보장", enTitle: "🔥 Excellent Thermal Stability", enDesc: "≥98% amorphous + thermal expansion < 0.8 → uniform performance in high-temperature environments" },
      { title: "🧪 철저한 불순물 관리", desc: "Al, Fe 등 ppm 단위 제어 → 화학적 부식 및 변색 방지", enTitle: "🧪 Strict Impurity Control", enDesc: "Al, Fe, etc. controlled at ppm levels → prevents chemical corrosion and discoloration" },
      { title: "✨ 고품질 외관", desc: "무색 투명 또는 고순도 백색 분말 → 최종 제품 신뢰성 향상", enTitle: "✨ High-Quality Appearance", enDesc: "Colorless transparent or high-purity white powder → enhances finished product reliability" },
      { title: "⚙️ 맞춤형 입도 제어", desc: "60mm 과립 ~ 1µm(12500 메쉬) 미분 → 공정 최적화 가능", enTitle: "⚙️ Custom Particle-Size Control", enDesc: "60 mm granules to 1 µm (12,500 mesh) fine powder → process optimization available" },
    ],
    specs: [
      { label: "SiO₂ (순도)", value: "> 99.5%", note: "고순도 정제", enLabel: "SiO₂ (Purity)", enNote: "High-purity refined" },
      { label: "Al (알루미늄)", value: "< 0.03%", note: "화학적 안정성", enLabel: "Al (Aluminum)", enNote: "Chemical stability" },
      { label: "Fe (철)", value: "< 0.02%", note: "저철분 관리", enLabel: "Fe (Iron)", enNote: "Low-iron management" },
      { label: "K (칼륨)", value: "< 0.01%", note: "알칼리 최소화", enLabel: "K (Potassium)", enNote: "Alkali minimized" },
      { label: "Na (나트륨)", value: "< 0.01%", note: "알칼리 최소화", enLabel: "Na (Sodium)", enNote: "Alkali minimized" },
      { label: "Ca (칼슘)", value: "< 0.01%", note: "불순물 제어", enLabel: "Ca (Calcium)", enNote: "Impurity controlled" },
      { label: "Mg (마그네슘)", value: "< 0.003%", note: "미량 관리", enLabel: "Mg (Magnesium)", enNote: "Trace management" },
      { label: "무정형상 (Amorphous)", value: "> 98%", note: "우수한 열적 특성", enLabel: "Amorphous", enNote: "Excellent thermal properties" },
      { label: "열팽창계수", value: "< 0.8 (×10⁻⁶/°C)", note: "내열충격성 우수", enLabel: "Thermal Expansion Coefficient", enNote: "Excellent thermal-shock resistance" },
      { label: "수분 (Moisture)", value: "< 0.1%", note: "초건조 상태", enLabel: "Moisture", enNote: "Ultra-dry state" },
      { label: "밀도 (Density)", value: "1.8 – 2.4 ×10³ kg/m³", note: "표준 밀도", enLabel: "Density", enNote: "Standard density" },
    ],
    applications: ["태양광", "전자/반도체", "정밀 주조", "특수 소재"],
  },
  {
    slug: "fused-silica-c-grade",
    name: "C등급 용융실리카",
    enName: "Grade C · Industrial Fused Silica",
    tagline: "경제성과 실용성을 갖춘 범용 산업 소재",
    enTagline: "General-Purpose Industrial Material with Cost Efficiency and Practical Performance",
    description:
      "산업용 용융 실리카 C등급은 99% 이상의 SiO₂ 순도와 95% 이상의 무정형 구조를 갖춘 경제형 소재입니다. 건축·코팅·플라스틱·연마 등 광범위한 산업 영역에서 안정적인 성능을 발휘합니다.",
    enDescription:
      "Grade C Industrial Fused Silica is an economical material with ≥99% SiO₂ purity and ≥95% amorphous structure. It delivers stable performance across a wide range of industrial areas including construction, coatings, plastics, and abrasives.",
    image: gradeC,
    detailImage: gradeCDetail,
    features: [
      { title: "🧱 안정적 무정형 구조", desc: "95% 이상 무정형상 → 열적·화학적 안정성 확보", enTitle: "🧱 Stable Amorphous Structure", enDesc: "≥95% amorphous → ensures thermal and chemical stability" },
      { title: "💰 경제적 원가 구조", desc: "대량 산업용으로 최적화된 가격 경쟁력", enTitle: "💰 Cost-Effective Structure", enDesc: "Price-competitive for large-scale industrial applications" },
      { title: "🧪 우수한 내화학성", desc: "산·알칼리·유기용제에 대한 높은 내구성", enTitle: "🧪 Excellent Chemical Resistance", enDesc: "High durability against acids, alkalis, and organic solvents" },
      { title: "⚙️ 폭넓은 입도 지원", desc: "과립(60mm) ~ 미분(1µm) 고객 맞춤 생산 가능", enTitle: "⚙️ Wide Particle-Size Support", enDesc: "Custom production from granules (60 mm) to fine powder (1 µm)" },
    ],
    specs: [
      { label: "SiO₂ (순도)", value: "> 99%", note: "일반 산업용", enLabel: "SiO₂ (Purity)", enNote: "General industrial" },
      { label: "Al (알루미늄)", value: "< 0.1%", note: "허용 범위", enLabel: "Al (Aluminum)", enNote: "Acceptable range" },
      { label: "Fe (철)", value: "< 0.04%", note: "허용 범위", enLabel: "Fe (Iron)", enNote: "Acceptable range" },
      { label: "K (칼륨)", value: "< 0.05%", note: "허용 범위", enLabel: "K (Potassium)", enNote: "Acceptable range" },
      { label: "Na (나트륨)", value: "< 0.05%", note: "허용 범위", enLabel: "Na (Sodium)", enNote: "Acceptable range" },
      { label: "Ca (칼슘)", value: "< 0.05%", note: "허용 범위", enLabel: "Ca (Calcium)", enNote: "Acceptable range" },
      { label: "Mg (마그네슘)", value: "< 0.01%", note: "허용 범위", enLabel: "Mg (Magnesium)", enNote: "Acceptable range" },
      { label: "무정형상 (Amorphous)", value: "> 95%", note: "안정적 무정형", enLabel: "Amorphous", enNote: "Stable amorphous" },
      { label: "열팽창계수", value: "< 1.2 (×10⁻⁶/°C)", note: "내열충격성 확보", enLabel: "Thermal Expansion Coefficient", enNote: "Thermal-shock resistance assured" },
      { label: "수분 (Moisture)", value: "< 0.1%", note: "건조 관리", enLabel: "Moisture", enNote: "Dry controlled" },
      { label: "밀도 (Density)", value: "1.8 – 2.4 ×10³ kg/m³", note: "균일", enLabel: "Density", enNote: "Uniform" },
      { label: "모스경도 (Mohs)", value: "7", note: "내마모성", enLabel: "Mohs Hardness", enNote: "Wear-resistant" },
    ],
    applications: ["건축 및 건자재", "페인트 및 코팅", "플라스틱/고무", "연마 및 내마모재", "기타 산업용"],
  },
  {
    slug: "high-purity-quartz",
    name: "천연 고순도규석",
    enName: "Natural High-Purity Quartz",
    tagline: "SiO₂ 99.77%, Fe₂O₃ 5ppm, 백색도 L 97.92 — EGS 및 고급 유리의 기준",
    enTagline: "SiO₂ 99.77%, Fe₂O₃ 5 ppm, Whiteness L 97.92 — The Benchmark for EGS and Premium Glass",
    description:
      "프리미엄 천연 고순도 쿼츠는 엄격한 광맥 선별과 정제 공정을 거쳐 SiO₂ 99.77%, Fe₂O₃ 5ppm 수준의 초고순도와 L 97.92의 최상급 백색도를 달성합니다. EGS·인조대리석, 고급 유리, 전자재료, 정밀 주조, 나노 가공 등 부가가치가 높은 산업의 기초 소재로 사용됩니다.",
    enDescription:
      "Premium Natural High-Purity Quartz achieves ultra-high purity of SiO₂ 99.77% and Fe₂O₃ 5 ppm, along with top-grade whiteness of L 97.92, through rigorous vein selection and refining processes. It serves as a foundational material for high-value-added industries such as EGS/engineered stone, premium glass, electronic materials, precision casting, and nano processing.",
    image: pProcess,
    detailImage: hpqDetail,
    features: [
      { title: "🧱 압도적 순도", desc: "SiO₂ 99.773% — EGS·특수 유리·전자재료 기초 소재로 적합", enTitle: "🧱 Overwhelming Purity", enDesc: "SiO₂ 99.773% — ideal base material for EGS, specialty glass, and electronic materials" },
      { title: "🧼 초저 철분", desc: "Fe₂O₃ 5ppm — 황변 없이 투명도 및 백색도 핵심 유지", enTitle: "🧼 Ultra-Low Iron Content", enDesc: "Fe₂O₃ 5 ppm — maintains transparency and whiteness without yellowing" },
      { title: "⚡ 우수한 절연 성능", desc: "EC 2.12 µs/cm — 전자재료 충진재(Filler) 신뢰성 확보", enTitle: "⚡ Excellent Insulation Performance", enDesc: "EC 2.12 µs/cm — ensures reliability as an electronic-material filler" },
      { title: "✨ 최상급 백색도", desc: "L 97.92 — 고급 인조대리석·건축 내외장재 최적", enTitle: "✨ Top-Grade Whiteness", enDesc: "L 97.92 — optimal for premium engineered stone and architectural interior/exterior materials" },
      { title: "📐 균일 입도", desc: "1~10mm 균일 입도로 후속 공정 효율 극대화", enTitle: "📐 Uniform Particle Size", enDesc: "Uniform 1–10 mm grain size maximizes downstream process efficiency" },
      { title: "🧪 중성 안정", desc: "pH 6.73 — 다양한 화학 공정에 적용 가능", enTitle: "🧪 Neutral Stability", enDesc: "pH 6.73 — applicable to diverse chemical processes" },
    ],
    specs: [
      { label: "SiO₂ (이산화규소)", value: "99.773%", note: "초고순도", enLabel: "SiO₂ (Silicon Dioxide)", enNote: "Ultra-high purity" },
      { label: "Fe₂O₃ (산화철)", value: "5 ppm", note: "극저 철분 (핵심)", enLabel: "Fe₂O₃ (Iron Oxide)", enNote: "Ultra-low iron (key)" },
      { label: "TiO₂ (산화타이타늄)", value: "9 ppm", note: "미량", enLabel: "TiO₂ (Titanium Oxide)", enNote: "Trace" },
      { label: "Al₂O₃ (산화알루미늄)", value: "1053 ppm", note: "일반 수준", enLabel: "Al₂O₃ (Aluminum Oxide)", enNote: "General level" },
      { label: "백색도 (Whiteness L)", value: "97.92", note: "최상급 백색도", enLabel: "Whiteness (L)", enNote: "Top-grade whiteness" },
      { label: "전기전도도 (E.C)", value: "2.12 µs/cm", note: "절연성 우수", enLabel: "Electrical Conductivity (E.C)", enNote: "Excellent insulation" },
      { label: "pH (수소이온농도)", value: "6.73", note: "중성 안정", enLabel: "pH", enNote: "Neutral stability" },
      { label: "입도 (Grain Size)", value: "1 ~ 10 mm", note: "균일 입도", enLabel: "Grain Size", enNote: "Uniform" },
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
  { title: "🔬 고순도 SiO₂", desc: "고순도 이산화규소 기반 — 안정적인 화학·열적 성능", enTitle: "🔬 High-Purity SiO₂", enDesc: "Based on high-purity silicon dioxide — stable chemical and thermal performance" },
  { title: "🧪 맞춤형 생산", desc: "포장 및 규격은 고객 요구에 따라 맞춤 제작", enTitle: "🧪 Custom Production", enDesc: "Packaging and specifications tailored to customer requirements" },
];

const silicaGelProducts: ProductDetail[] = [
  {
    slug: "silica-gel-microsilica",
    name: "미분 실리카 (Microsilica)",
    enName: "Micronized Silica Powder",
    tagline: "고순도 이산화규소 기반 초미세 분말 — 고활성·다공성 무기 정밀 소재",
    enTagline: "Ultra-Fine Powder Based on High-Purity Silicon Dioxide — A Highly Active, Porous Inorganic Precision Material",
    description:
      "미분 실리카는 고순도 이산화규소(SiO₂)를 핵심 성분으로 하여 특수 공정을 통해 초미세 분말 형태로 가공된 고활성·다공성 무기 정밀 소재입니다.",
    enDescription:
      "Micronized Silica Powder is a highly active, porous inorganic precision material processed into ultra-fine powder form through a special process, with high-purity silicon dioxide (SiO₂) as its core component.",
    image: sgMicrosilica,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "입자 크기 (Particle Size)", value: "3 – 10 µm", enLabel: "Particle Size" },
      { label: "포장 / 규격 (Packing)", value: "맞춤 제작 가능", enLabel: "Packing / Spec", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-anti-blocking",
    name: "플라스틱 안티블로킹제",
    enName: "Anti-blocking Agent",
    tagline: "필름·시트 안티블로킹용 고순도 실리카",
    enTagline: "High-Purity Silica for Anti-Blocking in Films and Sheets",
    description:
      "고순도 실리카 기반의 안티블로킹제로, 플라스틱 필름·시트의 접착(블로킹)을 효과적으로 방지하며 우수한 광학적 투명성을 유지합니다.",
    enDescription:
      "An anti-blocking agent based on high-purity silica that effectively prevents adhesion (blocking) of plastic films and sheets while maintaining excellent optical transparency.",
    image: sgAntiblocking,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "입자 크기", value: "2 – 10 µm", enLabel: "Particle Size" },
      { label: "비표면적", value: "20 – 380 m²/g", enLabel: "Specific Surface Area" },
      { label: "흡유량", value: "150 – 300 ml/100g", enLabel: "Oil Absorption" },
      { label: "벌크 밀도", value: "50 – 300 kg/m³", enLabel: "Bulk Density" },
      { label: "SiO₂ 순도", value: "99%", enLabel: "SiO₂ Purity" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-matting",
    name: "소광제 (Matting Agent)",
    enName: "Matting Agent",
    tagline: "도료·코팅용 무광 효과 실리카",
    enTagline: "Silica Matting Agent for Paints and Coatings",
    description:
      "도료 및 코팅 시스템에 사용되는 소광제(Matting Agent)로, 균일한 무광 효과와 우수한 분산성을 제공합니다.",
    enDescription:
      "A matting agent used in paint and coating systems, providing uniform matte effects and excellent dispersibility.",
    image: sgMatting,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "입자 크기 D50", value: "3.5 – 10 µm", enLabel: "Particle Size D50" },
      { label: "흡유량", value: "100 – 330 ml/100g", enLabel: "Oil Absorption" },
      { label: "pH", value: "3.5 – 8", enLabel: "pH" },
      { label: "기공 부피 (Pore Volume)", value: "0.4 – 2.2 ml/g", enLabel: "Pore Volume" },
      { label: "표면 처리", value: "왁스 처리 / 무처리", enLabel: "Surface Treatment", enNote: "Wax-treated / Untreated" },
      { label: "건조 감량 (105℃)", value: "≤ 5%", enLabel: "Loss on Drying (105℃)" },
      { label: "강열 감량 (1000℃)", value: "≤ 6%", enLabel: "Ignition Loss (1000℃)" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-large-pore",
    name: "대공극 실리카겔",
    enName: "Large Pore Volume Silica Gel",
    tagline: "대공극·고비표면적의 흡착 전용 실리카겔",
    enTagline: "Adsorption-Grade Silica Gel with Large Pores and High Specific Surface Area",
    description:
      "대공극 실리카겔은 큰 기공 직경과 높은 기공 부피를 가져 분자 흡착·촉매 담체용으로 최적화된 실리카겔입니다.",
    enDescription:
      "Large Pore Volume Silica Gel features large pore diameters and high pore volume, making it an optimized silica gel for molecular adsorption and catalyst support applications.",
    image: sgLargePore,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "기공 직경 (Pore Diameter)", value: "16 – 25 nm", enLabel: "Pore Diameter" },
      { label: "비표면적", value: "200 – 350 m²/g", enLabel: "Specific Surface Area" },
      { label: "기공 부피", value: "1.2 – 2.2 ml/g", enLabel: "Pore Volume" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-fng",
    name: "내수 실리카겔 (FNG)",
    enName: "FNG Water-Resistant Silica Gel",
    tagline: "가혹 환경 전용 고성능 내수 실리카겔",
    enTagline: "High-Performance Water-Resistant Silica Gel for Harsh Environments",
    description:
      "내수 실리카겔 FNG는 가혹한 환경에서도 안정적으로 동작하도록 설계된 고성능 실리카 소재로, 우수한 내수성·내후성·화학적 안정성을 갖추고 있습니다.",
    enDescription:
      "FNG Water-Resistant Silica Gel is a high-performance silica material designed to operate stably in harsh environments, featuring excellent water resistance, weather resistance, and chemical stability.",
    image: sgFng,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "특성", value: "내수성 · 내후성 · 화학적 안정성", enLabel: "Characteristics", enNote: "Water resistance · Weather resistance · Chemical stability" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-coarse",
    name: "조공극 실리카겔",
    enName: "Coarse Pore Silica Gel",
    tagline: "중간 기공 크기의 범용 흡착 실리카겔",
    enTagline: "General-Purpose Adsorption Silica Gel with Medium Pore Size",
    description:
      "조공극 실리카겔(Coarse Pore Silica Gel)은 균형 잡힌 기공 구조로 다양한 산업용 흡착·건조·정제 공정에 사용됩니다.",
    enDescription:
      "Coarse Pore Silica Gel features a balanced pore structure and is used in various industrial adsorption, drying, and purification processes.",
    image: sgCoarse,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "기공 직경", value: "8 – 12.5 nm", enLabel: "Pore Diameter" },
      { label: "비표면적", value: "300 – 400 m²/g", enLabel: "Specific Surface Area" },
      { label: "기공 부피", value: "0.8 – 1.0 ml/g", enLabel: "Pore Volume" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-type-a",
    name: "A형 실리카겔",
    enName: "Silica Gel Type A",
    tagline: "고비표면적 · 미세기공 흡착용 실리카겔",
    enTagline: "High Specific Surface Area · Fine-Pore Adsorption Silica Gel",
    description:
      "A형 실리카겔은 미세기공(2–3 nm)과 매우 높은 비표면적을 가진 표준 흡착용 실리카겔로, 건조제·흡습제 등에 폭넓게 사용됩니다.",
    enDescription:
      "Silica Gel Type A is a standard adsorption silica gel with micropores (2–3 nm) and very high specific surface area, widely used as a desiccant and moisture absorber.",
    image: sgTypeA,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "기공 직경", value: "2.0 – 3.0 nm", enLabel: "Pore Diameter" },
      { label: "비표면적", value: "650 – 800 m²/g", enLabel: "Specific Surface Area" },
      { label: "기공 부피", value: "0.4 – 0.5 ml/g", enLabel: "Pore Volume" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
  {
    slug: "silica-gel-type-b",
    name: "B형 실리카겔",
    enName: "Silica Gel Type B",
    tagline: "중간 기공·균형 특성의 다용도 실리카겔",
    enTagline: "Multipurpose Silica Gel with Medium Pores and Balanced Properties",
    description:
      "B형 실리카겔은 중간 크기 기공(4.5–7 nm)과 적정한 비표면적을 갖춘 다목적 실리카겔로, 습도 변화가 큰 환경의 흡습 용도에 적합합니다.",
    enDescription:
      "Silica Gel Type B is a multipurpose silica gel with medium-sized pores (4.5–7 nm) and moderate specific surface area, suitable for moisture absorption in environments with large humidity fluctuations.",
    image: sgTypeB,
    category: "silica-gel",
    features: SG_FEATURES,
    specs: [
      { label: "기공 직경", value: "4.5 – 7.0 nm", enLabel: "Pore Diameter" },
      { label: "비표면적", value: "450 – 650 m²/g", enLabel: "Specific Surface Area" },
      { label: "기공 부피", value: "0.6 – 0.85 ml/g", enLabel: "Pore Volume" },
      { label: "포장 / 규격", value: "맞춤 제작 가능", enLabel: "Packing / Spec", enNote: "Customizable" },
    ],
    applications: SG_APPS,
  },
];

productCatalog.push(...silicaGelProducts);

const PS_APPS = ["침전/침강실리카"];
const PS_FEATURES = [
  { title: "🧱 합성 무정형 SiO₂", desc: "수용성 규산염과 산의 반응으로 제조된 순백색 무정형 분말", enTitle: "🧱 Synthetic Amorphous SiO₂", enDesc: "Pure white amorphous powder produced by reacting soluble silicate with acid" },
  { title: "🧪 고순도 관리", desc: "SiO₂ ≥ 98~99%, 중금속·납·비소 등 유해 성분 엄격 관리", enTitle: "🧪 High-Purity Management", enDesc: "SiO₂ ≥ 98–99%, with strict control of harmful components such as heavy metals, lead, and arsenic" },
  { title: "⚙️ 다공성 구조", desc: "높은 비표면적과 흡유량으로 보강·증점·소광·흡착 성능 발휘", enTitle: "⚙️ Porous Structure", enDesc: "High specific surface area and oil absorption deliver reinforcement, thickening, matting, and adsorption performance" },
  { title: "🌿 광범위 응용", desc: "고무·페인트·플라스틱·식의약·치약·화장품 등 산업 전반 적용", enTitle: "🌿 Wide Applications", enDesc: "Applied across industries: rubber, paint, plastics, food/pharma, toothpaste, cosmetics, and more" },
];

const precipitatedProducts: ProductDetail[] = [
  {
    slug: "precipitated-silica-sl-a81",
    name: "SL-A81 침전 실리카",
    enName: "SL-A81 · Precipitated Silica",
    tagline: "BET 700–750 m²/g 초고비표면적의 보강용 침전 실리카",
    enTagline: "Reinforcement-Grade Precipitated Silica with Ultra-High BET 700–750 m²/g",
    description:
      "SL-A81은 BET 비표면적 700~750 m²/g의 초고비표면적을 구현한 고순도 침전 실리카(Precipitated Silica)입니다. 일반적인 침전 실리카(150~250 m²/g) 대비 3~4배 수준의 극도로 넓은 표면적을 자랑하며, 이는 제품의 주요 경쟁력입니다.",
    enDescription:
      "SL-A81 is a high-purity precipitated silica achieving an ultra-high BET specific surface area of 700–750 m²/g. This is 3–4 times greater than typical precipitated silica (150–250 m²/g), which is the product's core competitive advantage.",
    image: precipitatedSilica,
    category: "precipitated",
    features: [
      { title: "📊 극도로 넓은 비표면적", desc: "700~750 m²/g — 일반 실리카 대비 3~4배 높은 표면적으로 소량 첨가만으로도 높은 보강 효과 구현", enTitle: "📊 Extremely High Specific Surface Area", enDesc: "700–750 m²/g — 3–4× higher than conventional silica, enabling high reinforcement even at low loadings" },
      { title: "🧪 고순도(≥99%) 안정성", desc: "불순물(중금속, Na₂SO₄ 등) 함량이 극도로 낮아 화학적 안정성 우수. 전기적 특성(절연성)이나 열적 안정성이 요구되는 첨단 소재에 적합", enTitle: "🧪 High Purity (≥99%) Stability", enDesc: "Extremely low impurities (heavy metals, Na₂SO₄, etc.) ensure excellent chemical stability — ideal for advanced materials requiring electrical insulation and thermal stability" },
      { title: "⚙️ 미세하고 균일한 입도", desc: "7~8μm의 초미세 분말로 고무·수지·접착제 내 고른 분산성 확보. 표면 결함 없이 매끄러운 복합재 제조 가능", enTitle: "⚙️ Fine and Uniform Particle Size", enDesc: "Ultra-fine 7–8 µm powder ensures uniform dispersion in rubber, resin, and adhesives — enabling smooth composite manufacturing without surface defects" },
      { title: "💧 적절한 DBP 흡수량", desc: "90~130 ml/100g — 과도한 오일 흡수 없이 적정 수준의 구조성 유지. 고충전(high loading) 배합 설계에도 적용 가능", enTitle: "💧 Optimal DBP Absorption", enDesc: "90–130 ml/100g — maintains adequate structure without excessive oil absorption, applicable to high-loading formulations" },
      { title: "⚖️ 중성 pH (6.5~7.5)", desc: "산성이나 알칼리성 실리카가 유기 바인더나 고무의 가교 구조를 손상시키는 현상 방지. 경화제, 가교제, 촉매와의 부반응 최소화", enTitle: "⚖️ Neutral pH (6.5–7.5)", enDesc: "Prevents damage to crosslinking structures in organic binders and rubber caused by acidic or alkaline silica — minimizes side reactions with curing agents, crosslinkers, and catalysts" },
      { title: "✨ 뛰어난 백색도 (≥95)", desc: "최종 제품의 색상이나 투명도를 해치지 않음. 착색이나 도장 공정에서 베이스 재료로 활용도 높음", enTitle: "✨ Outstanding Whiteness (≥95)", enDesc: "Does not affect the color or transparency of finished products — highly usable as a base material in coloring and coating processes" },
      { title: "🔥 우수한 열적 안정성", desc: "1000℃ 소성 감량 3~5%로 고온 공정에서도 무게 변화나 휘발 성분 방출이 적음. 고온 경화, 사출, 압출 공정에서도 물성 유지", enTitle: "🔥 Excellent Thermal Stability", enDesc: "Ignition loss of only 3–5% at 1000°C — minimal weight change or volatile release during high-temperature processes; properties maintained through hot curing, injection, and extrusion" },
    ],
    specs: [
      { label: "등급 (Grade)", value: "SL-A81", enLabel: "Grade" },
      { label: "외관 (Form)", value: "White powder", note: "순백색 분말", enLabel: "Form", enNote: "Pure white powder" },
      { label: "백색도 (Whiteness)", value: "≥ 95", enLabel: "Whiteness" },
      { label: "SiO₂ (건조 기준)", value: "≥ 99%", note: "초고순도", enLabel: "SiO₂ (Dry Basis)", enNote: "Ultra-high purity" },
      { label: "pH", value: "6.5 – 7.5", note: "중성", enLabel: "pH", enNote: "Neutral" },
      { label: "BET 비표면적", value: "700 – 750 m²/g", note: "초고비표면적", enLabel: "BET Specific Surface Area", enNote: "Ultra-high SSA" },
      { label: "DBP 흡유량", value: "90 – 130 ml/100g", enLabel: "DBP Oil Absorption" },
      { label: "평균 입자 크기", value: "7 – 8 µm", enLabel: "Average Particle Size" },
      { label: "건조 감량 (105℃, 2hr)", value: "3.0 – 4.0 %", enLabel: "Loss on Drying (105℃, 2 hr)" },
      { label: "강열 감량 (1000℃, 2hr)", value: "3.0 – 5.0 %", enLabel: "Ignition Loss (1000℃, 2 hr)" },
    ],
    applications: PS_APPS,
  },
  {
    slug: "precipitated-silica-si-60",
    name: "SI-60 미립자 침전 실리카",
    enName: "SI-60 · Fine Particle Precipitated Silica",
    tagline: "입도 11–18µm·DBP 230–260의 범용 고무 보강·필러용 실리카",
    enTagline: "General-Purpose Rubber Reinforcement & Filler Silica with 11–18 µm Particle Size and DBP 230–260",
    description:
      "SI-60은 평균 입도 11~18µm의 미립자 침전 실리카로, 우수한 분산성과 보강 성능을 갖춰 신발 밑창·산업용 고무·실리콘 고무·접착제·실란트 등에 폭넓게 사용됩니다. 높은 DBP 흡유량(230~260 ml/100g)으로 증점·요변성(thixotropy) 부여에도 적합합니다.",
    enDescription:
      "SI-60 is a fine-particle precipitated silica with an average particle size of 11–18 µm. It offers excellent dispersibility and reinforcement performance, and is widely used in shoe soles, industrial rubber, silicone rubber, adhesives, and sealants. Its high DBP oil absorption (230–260 ml/100g) also makes it suitable for thickening and thixotropy applications.",
    image: precipitatedSilica,
    category: "precipitated",
    features: PS_FEATURES,
    specs: [
      { label: "외관 (Form)", value: "White powder", enLabel: "Form" },
      { label: "백색도 (Whiteness)", value: "97 – 98", enLabel: "Whiteness" },
      { label: "SiO₂ (건조 기준)", value: "≥ 99%", enLabel: "SiO₂ (Dry Basis)" },
      { label: "pH", value: "6.5 – 7.5", enLabel: "pH" },
      { label: "DBP 흡유량", value: "230 – 260 ml/100g", enLabel: "DBP Oil Absorption" },
      { label: "입자 크기", value: "11 – 18 µm", enLabel: "Particle Size" },
      { label: "벌크 밀도", value: "110 – 130 g/L", enLabel: "Bulk Density" },
      { label: "건조 감량 (105℃, 2hr)", value: "4.0 – 6.0 %", enLabel: "Loss on Drying (105℃, 2 hr)" },
      { label: "강열 감량 (1000℃, 2hr)", value: "3.0 – 5.0 %", enLabel: "Ignition Loss (1000℃, 2 hr)" },
      { label: "가용성 염 (Na₂SO₄)", value: "≤ 1.5 %", enLabel: "Soluble Salts (Na₂SO₄)" },
      { label: "납 함량 (Pb)", value: "≤ 0.0005 %", enLabel: "Lead Content (Pb)" },
      { label: "중금속 함량", value: "≤ 0.003 %", enLabel: "Heavy Metals" },
      { label: "비소 함량 (As)", value: "≤ 0.0003 %", enLabel: "Arsenic Content (As)" },
      { label: "포장 (Package)", value: "15 kg / bag", enLabel: "Package" },
    ],
    applications: PS_APPS,
  },
  {
    slug: "precipitated-silica-si-175",
    name: "SI-175 침전 실리카",
    enName: "SI-175 · Precipitated Silica",
    tagline: "입도 45µm, 비산 적고 취급 용이한 고무·산업용 침전 실리카",
    enTagline: "45 µm Particle Size, Low Dust, Easy-to-Handle Rubber & Industrial Precipitated Silica",
    description:
      "SI-175는 평균 입도 45µm 수준의 침전 실리카로, 비산이 적고 흐름성이 우수하여 대량 자동 계량·혼합 공정에 적합합니다. 고무 보강용, 사료 첨가용 캐리어, 산업용 충진제 등 다양한 분야에 사용됩니다.",
    enDescription:
      "SI-175 is a precipitated silica with an average particle size of around 45 µm. It generates little dust and has excellent flowability, making it ideal for large-scale automatic weighing and mixing processes. It is used in various fields including rubber reinforcement, feed-additive carriers, and industrial fillers.",
    image: precipitatedSilica,
    category: "precipitated",
    features: PS_FEATURES,
    specs: [
      { label: "외관 (Form)", value: "White powder", enLabel: "Form" },
      { label: "백색도 (Whiteness)", value: "97 – 98", enLabel: "Whiteness" },
      { label: "SiO₂ (건조 기준)", value: "≥ 98%", enLabel: "SiO₂ (Dry Basis)" },
      { label: "pH", value: "6.5 – 7.5", enLabel: "pH" },
      { label: "DBP 흡유량", value: "230 – 260 ml/100g", enLabel: "DBP Oil Absorption" },
      { label: "입자 크기", value: "45 µm", enLabel: "Particle Size" },
      { label: "벌크 밀도", value: "230 – 250 g/L", enLabel: "Bulk Density" },
      { label: "건조 감량 (105℃, 2hr)", value: "4.0 – 6.0 %", enLabel: "Loss on Drying (105℃, 2 hr)" },
      { label: "강열 감량 (1000℃, 2hr)", value: "3.0 – 5.0 %", enLabel: "Ignition Loss (1000℃, 2 hr)" },
      { label: "가용성 염 (Na₂SO₄)", value: "≤ 1.5 %", enLabel: "Soluble Salts (Na₂SO₄)" },
      { label: "납 함량 (Pb)", value: "≤ 0.0005 %", enLabel: "Lead Content (Pb)" },
      { label: "중금속 함량", value: "≤ 0.003 %", enLabel: "Heavy Metals" },
      { label: "비소 함량 (As)", value: "≤ 0.0003 %", enLabel: "Arsenic Content (As)" },
      { label: "포장 (Package)", value: "20 kg / bag", enLabel: "Package" },
    ],
    applications: PS_APPS,
  },
];

productCatalog.push(...precipitatedProducts);

export const getProductBySlug = (slug: string) =>
  productCatalog.find((p) => p.slug === slug);

export const getProductsByCategory = (cat: ProductCategory) =>
  productCatalog.filter((p) => (p.category ?? "quartz") === cat);
