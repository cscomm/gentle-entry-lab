// Post-build prerender: generates a static HTML file per route under dist/<route>/index.html
// Each file inherits the built index.html (with hashed JS/CSS) and injects route-specific
// <title>, <meta name="description">, <link rel="canonical">, og:* tags, and SEO body content
// inside <div id="root">. When a crawler hits /about, Lovable static hosting serves
// dist/about/index.html (a real file with unique text). React then hydrates and replaces #root
// for human visitors — they see the normal SPA experience.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";

const BASE_URL = "https://silica.co.kr";
const DIST = resolve("dist");
const SOURCE = resolve(DIST, "index.html");

type LangCode = "ko" | "en" | "ja";
type I18n = Partial<Record<LangCode, string>>;
type Route = {
  path: string;        // url path, e.g. "/about"
  title: string;                 // Korean (default)
  description: string;           // Korean (default)
  titleI18n?: I18n;              // per-language override (en/ja)
  descriptionI18n?: I18n;        // per-language override (en/ja)
  h1: string;
  body: string;        // inner HTML for SEO content
};

export const productRoutes: Route[] = [
  {
    path: "/products/crystalline-silica",
    title: "쿼츠 · 결정질 실리카(Crystalline Silica, α-Quartz) 통합 카테고리 | SILICA",
    description:
      "SL-YJG · SL-JG · SL-CL · SL-HJG · SL-CS — 모서리 라운드·각상·저방사선·표면개질·석영사까지 결정질(α-Quartz) 실리카 전 라인업을 통합 공급. CCL·반도체 EMC·정밀 주조·세라믹·산업 코팅용.",
    titleI18n: {
      en: "Quartz · Crystalline Silica (α-Quartz) — Unified Category | SILICA",
      ja: "クォーツ・結晶質シリカ (α-Quartz) 統合カテゴリ | SILICA",
    },
    descriptionI18n: {
      en: "Unified crystalline silica (α-quartz) category: SL-YJG round-corner, SL-JG angular, SL-CL low-α, SL-HJG surface-modified, SL-CS quartz sand — for CCL, semiconductor EMC, precision casting, ceramics and industrial coatings.",
      ja: "SL-YJG丸角・SL-JG角形・SL-CL低α線・SL-HJG表面改質・SL-CS結晶石英砂まで、結晶質(α-Quartz)シリカの全ラインアップを統合。CCL・半導体EMC・精密鋳造・セラミックス・産業用コーティング向け。",
    },
    h1: "쿼츠 · 결정질 실리카 — Quartz · Crystalline Silica (α-Quartz) 통합 카테고리",
    body: `
      <p><strong>쿼츠(Quartz) · 결정질 실리카(Crystalline Silica, α-Quartz)</strong>는 천연 수정 광석을 기반으로 정제·분급·결정 형상 제어를 거쳐 제조되는 고순도 α상 SiO₂ 소재입니다. 용융(비정질) 실리카 대비 높은 경도(Mohs 7), 우수한 화학적 안정성, 낮은 단가, 풍부한 원료 공급성을 갖춘 산업용 대표 실리카입니다.</p>
      <h2>결정질 실리카 라인업</h2>
      <ul>
        <li><strong>SL-YJG</strong> — 결정형 모서리 라운드 실리카 (CCL·도전성 페이스트·산업 코팅)</li>
        <li><strong>SL-JG</strong> — 결정형 각상 실리카 (표준 필러·고내마모 복합재)</li>
        <li><strong>SL-CL</strong> — 저방사선(Low-α) 결정형 실리카 (α ≤ 0.001 cph/cm², HBM/DDR5/AI 반도체용)</li>
        <li><strong>SL-HJG</strong> — 표면개질(활성) 결정형 실리카 (실란 커플링, 유기 매트릭스 상용성)</li>
        <li><strong>SL-CS</strong> — 결정 석영사 (유리 원료·정밀 주조·연마재·워터필터)</li>
      </ul>
      <h2>주요 응용 분야</h2>
      <p>CCL/PCB · 5G 고주파 기판, 반도체 EMC · 언더필, HBM/DDR5/AI 반도체(저방사선), 도전성 페이스트 · 산업용 코팅, 고내마모 복합재 · 엔지니어링 플라스틱 필러, 정밀 주조 · 세라믹 코어, 유리 원료 · 특수/광학 유리, 연마재 · 워터필터 · 스포츠 표면재.</p>
      <h2>공급 & 커스텀</h2>
      <p>각 제품은 원래 소속 카테고리(구상·모서리 라운드·각상·저방사선·표면개질·실리카 분말·입자)에도 그대로 유지되어 형상·기능별로도 탐색 가능합니다. 입도·순도·표면처리·포장 등 고객 요구 사양에 맞춘 커스텀 생산이 가능합니다.</p>`,
  },
  {
    path: "/products/fused-silica",
    title: "용융실리카(Fused Silica) — A·B·C 등급 + 전 SL 시리즈 통합 카테고리 | SILICA",
    description:
      "A·B·C 등급 고순도 용융실리카(Fused Silica)와 SL-QG·SL-QG-L·SL-YRG·SL-RG·SL-FL·SL-HRG·SL-FS·SL-HF04 전 SL 시리즈를 통합 공급. 반도체 EMC·언더필·CCL·저방사선(Low-α)·정밀 주조·광학·항공/방산용.",
    titleI18n: {
      en: "Fused Silica — Grades A/B/C + Full SL-Series Unified Category | SILICA",
      ja: "溶融シリカ(Fused Silica) — A・B・Cグレード+全SLシリーズ統合カテゴリ | SILICA",
    },
    descriptionI18n: {
      en: "Unified fused silica category: high-purity Grade A/B/C plus every SL-series fused variant (SL-QG, SL-QG-L, SL-YRG, SL-RG, SL-FL, SL-HRG, SL-FS, SL-HF04) — for semiconductor EMC, underfill, CCL, low-α, precision casting, optics and aerospace/defense.",
      ja: "A・B・Cグレードの高純度溶融シリカと、SL-QG・SL-QG-L・SL-YRG・SL-RG・SL-FL・SL-HRG・SL-FS・SL-HF04の全SLシリーズ溶融シリカを統合。半導体EMC・アンダーフィル・CCL・低α線・精密鋳造・光学・航空/防衛向け。",
    },
    h1: "용융실리카 — Fused Silica 통합 카테고리",
    body: `
      <p><strong>용융실리카(Fused Silica)</strong>는 천연 석영을 1,800℃ 이상의 초고온에서 용융·급냉하여 얻는 비정질(Amorphous) 이산화규소(SiO₂) 소재로, 극저 열팽창·우수한 열충격 저항·화학적 안정성·전기 절연성을 동시에 갖춘 첨단 산업의 핵심 원료입니다.</p>
      <h2>대표 등급 (A · B · C)</h2>
      <ul>
        <li><strong>A등급</strong> — SiO₂ ≥ 99.9%, 100% 무정형, CTE &lt; 0.6 ×10⁻⁶/℃ (반도체·광학·항공/방산·의료용)</li>
        <li><strong>B등급</strong> — SiO₂ ≥ 99.5%, ≥98% 무정형 (태양광·전자/반도체·정밀 주조)</li>
        <li><strong>C등급</strong> — SiO₂ ≥ 99%, ≥95% 무정형 (건축·코팅·플라스틱·연마재)</li>
      </ul>
      <h2>전 SL 시리즈 용융 라인업</h2>
      <ul>
        <li><strong>SL-QG</strong> — 화염 용융 구상, 저응력·고구상도</li>
        <li><strong>SL-QG-L</strong> — 저방사선(Low-α) 구상, HBM/DDR5/AI 반도체용</li>
        <li><strong>SL-YRG</strong> — 용융형 모서리 라운드, 구상에 근접한 유동성 + 경제성</li>
        <li><strong>SL-RG</strong> — 용융형 각상, 고강도·고내마모 표준 필러</li>
        <li><strong>SL-FL</strong> — 저방사선 용융 (α ≤ 0.001 cph/cm²)</li>
        <li><strong>SL-HRG</strong> — 표면개질(실란) 용융, 유기 매트릭스 상용성</li>
        <li><strong>SL-FS</strong> — 용융 석영사, 내화·정밀 주조·특수 유리 원료</li>
        <li><strong>SL-HF04</strong> — SiO₂ 99.96% · D50 3.8µm 초고순도 미분 용융 (반도체 EMC·언더필·5G 기판)</li>
      </ul>
      <h2>주요 응용 분야</h2>
      <p>반도체 EMC · 언더필 · 어드밴스드 패키징, CCL/PCB · 5G 고주파 기판, HBM · DDR5 · AI 반도체(저방사선), 광학 렌즈 · 정밀 광학 부품, 항공·방산·우주 소재, 정밀 주조·세라믹 코어, 고온 내화·특수 유리, 태양광·에너지.</p>
      <h2>공급 & 커스텀</h2>
      <p>입도(1 µm ~ 60 mm), 순도, 표면처리, 포장(10/20 kg 지대 · 500 kg 벌크백 · OEM) 등 고객 요구 사양에 맞춰 커스텀 생산이 가능합니다.</p>`,
  },
  {
    path: "/products/fused-silica-a-grade",
    title: "A등급 고순도 용융 실리카 (Fused Silica) | SILICA",
    description:
      "SiO₂ 99.9% 이상·100% 무정형의 A등급 고순도 용융 실리카(Fused Silica). 반도체·광학·항공/방산·의료용 산업용 실리카 소재를 공급합니다.",
    titleI18n: {
      en: "Grade A Ultra-High Purity Fused Silica (SiO₂ ≥99.9%) | SILICA",
      ja: "Aグレード 高純度溶融シリカ(Fused Silica, SiO₂ 99.9%以上) | SILICA",
    },
    descriptionI18n: {
      en: "Ultra-high purity fused silica, Grade A — SiO₂ ≥99.9%, 100% amorphous, ultra-low CTE <0.6×10⁻⁶/°C. Supplied to semiconductor, optics, aerospace/defense and medical industries. Custom particle size 1µm–60mm.",
      ja: "SiO₂ 99.9%以上・100%非晶質のAグレード高純度溶融シリカ(Fused Silica)。極低熱膨張、半導体・光学・航空宇宙・医療向け高純度シリカ素材を1µm〜60mmの粒度で供給。",
    },
    h1: "A등급 용융실리카 — 초고순도 (Grade A · Ultra-High Purity Fused Silica)",
    body: `
      <p><strong>A등급 용융실리카(Grade A · Ultra-High Purity Fused Silica)</strong>는 SiLiCA가 공급하는 최상위 등급의 용융실리카로, SiO₂ 순도 99.9% 이상과 100% 무정형 구조를 보유합니다. 자체 광산(장수백암광산)에서 채광한 고품위 규석을 원료로 전기 아크 용융 후 정밀 분쇄·등급화하여 생산하며, 반도체·광학·항공/방산·의료·에너지 등 최고 수준의 신뢰성과 순도가 요구되는 첨단 산업에 공급됩니다.</p>

      <h2>제품 개요</h2>
      <p>완전 무정형(amorphous) 구조 덕분에 1000°C 이상의 고온 환경에서도 결정화(devitrification)나 부피 변화가 사실상 발생하지 않으며, 0.6×10⁻⁶/°C 이하의 극저 열팽창계수로 급격한 열충격에서도 치수 안정성을 유지합니다. 금속 불순물 합계 0.03% 미만, 수성추출액 EC 3µs/cm 미만, Cl 3ppm 미만으로 반도체 공정 오염 및 절연 저하 요인을 원천 차단합니다.</p>

      <h2>주요 특징</h2>
      <ul>
        <li><strong>100% 무정형 구조</strong> — 고온 결정화·수축·균열 없음</li>
        <li><strong>극저 열팽창</strong> — 0.6 × 10⁻⁶/°C 이하, 열충격 내성 최상급</li>
        <li><strong>초고순도 관리</strong> — Al &lt; 0.01%, Fe &lt; 0.005%, Na/K/Ca &lt; 0.003%</li>
        <li><strong>고전기절연성</strong> — EC &lt; 3 µs/cm, Cl &lt; 3 ppm</li>
        <li><strong>맞춤 입도</strong> — 60mm 과립부터 1µm(12,500 메쉬) 미분까지</li>
        <li><strong>안정 공급</strong> — 자체 광산 + ISO 9001·22000 기반 일관 QC</li>
      </ul>

      <h2>대표 화학·물리 스펙</h2>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%; margin:12px 0;">
        <thead><tr><th>항목</th><th>값</th><th>비고</th></tr></thead>
        <tbody>
          <tr><td>SiO₂ (순도)</td><td>≥ 99.9%</td><td>초고순도</td></tr>
          <tr><td>Al (알루미늄)</td><td>&lt; 0.01%</td><td>극미량</td></tr>
          <tr><td>Fe (철)</td><td>&lt; 0.005%</td><td>극미량</td></tr>
          <tr><td>K / Na / Ca</td><td>&lt; 0.003%</td><td>알칼리·알칼리토 최소화</td></tr>
          <tr><td>Mg (마그네슘)</td><td>&lt; 0.001%</td><td>극미량</td></tr>
          <tr><td>무정형상 (Amorphous)</td><td>100%</td><td>완전 무정형</td></tr>
          <tr><td>열팽창계수</td><td>&lt; 0.6 × 10⁻⁶/°C</td><td>초저팽창</td></tr>
          <tr><td>밀도 (Density)</td><td>1.8 – 2.4 × 10³ kg/m³</td><td>균일</td></tr>
          <tr><td>모스경도 (Mohs)</td><td>7</td><td>내마모성</td></tr>
          <tr><td>수성추출액 EC / Cl / pH</td><td>&lt; 3 µs/cm / &lt; 3 ppm / 6.5 ± 1</td><td>고절연·중성 안정</td></tr>
          <tr><td>수분 (Moisture)</td><td>&lt; 0.1%</td><td>건조 관리</td></tr>
        </tbody>
      </table>

      <h2>적용 분야 (Applications)</h2>
      <ul>
        <li><strong>반도체</strong> — 확산/산화용 보트, 웨이퍼 캐리어, RTP 챔버 부품, 플라즈마 에칭 윈도우, 고순도 웨이퍼 카세트</li>
        <li><strong>광학</strong> — UV~IR 광학 윈도우, 고출력 레이저 거울, 리소그래피 렌즈, 광섬유 프리폼, 우주망원경 광학계</li>
        <li><strong>디스플레이</strong> — OLED 증착 마스크 지지대, 유리 기판 반송 부품, 건식 에칭 챔버 부품</li>
        <li><strong>항공/방산</strong> — 위성 광학 부품, 미사일 돔, 적외선 탐지기 윈도우, 열충격 보호 커버</li>
        <li><strong>의료</strong> — 분석용 큐벳, 생물반응기 윈도우, 진단 장비 부품, 의료용 광섬유 부품</li>
        <li><strong>에너지</strong> — 고온 수소 연료전지, 태양광 확산관, 고온 절연 부품</li>
      </ul>

      <h2>품질 보증 및 공급</h2>
      <p>SiLiCA는 자체 광산 채광 → 1차 가공 → 전기 아크 용융 → 정밀 분쇄 → 등급화 → 출하의 전 공정을 자체적으로 수행하며, ISO 9001 및 ISO 22000 품질 관리 시스템과 자체 분석실(XRF·ICP·입도분석)을 기반으로 lot 단위 성적서를 제공합니다. 입도·포장(25kg 크라프트, 500/1000kg 톤백) 및 OEM 사양 대응이 가능합니다.</p>`,
  },
  {
    path: "/products/fused-silica-b-grade",
    title: "B등급 프리미엄 용융 실리카 Fused Silica | SILICA",
    description:
      "SiO₂ 99.5%·무정형 98% 이상의 B등급 프리미엄 용융 실리카(Fused Silica). 태양광·전자/반도체·정밀 주조용 고순도 실리카 소재.",
    titleI18n: {
      en: "Grade B Premium Fused Silica (SiO₂ ≥99.5%, ≥98% amorphous) | SILICA",
      ja: "Bグレード プレミアム溶融シリカ Fused Silica (SiO₂ 99.5%以上) | SILICA",
    },
    descriptionI18n: {
      en: "Premium fused silica, Grade B — SiO₂ ≥99.5%, ≥98% amorphous, CTE <0.8×10⁻⁶/°C. Optimized for solar, electronics/semiconductor and precision investment casting. ppm-level Al/Fe control, custom grading 1µm–60mm.",
      ja: "SiO₂ 99.5%以上・非晶質98%以上のBグレード プレミアム溶融シリカ。太陽光・電子/半導体・精密鋳造向けに最適な高純度Fused Silica素材。ppmレベルの不純物管理と1µm〜60mmのカスタム粒度。",
    },
    h1: "B등급 용융실리카 — 프리미엄 (Premium Fused Silica)",
    body: `
      <p>프리미엄 용융실리카 B등급은 99.5% 이상의 SiO₂ 순도와 98% 이상의 무정형 구조를 갖춘 고품질 소재입니다. 열적 안정성과 화학적 안정성의 최적 균형을 제공합니다.</p>
      <h2>주요 특징</h2>
      <ul>
        <li>98% 이상 무정형 + 열팽창 0.8 미만으로 고온 환경 균일 성능</li>
        <li>Al, Fe 등 ppm 단위 불순물 제어</li>
        <li>60mm 과립부터 1µm 미분까지 맞춤 입도</li>
      </ul>
      <h2>적용 분야</h2>
      <p>태양광, 전자/반도체, 정밀 주조, 특수 소재.</p>`,
  },
  {
    path: "/products/fused-silica-c-grade",
    title: "C등급 산업용 용융 실리카 Fused Silica | SILICA",
    description:
      "SiO₂ 99% 이상의 산업용 용융 실리카(Fused Silica) C등급. 건축·페인트·플라스틱·연마재 등 산업용 실리카 소재를 경제적으로 공급합니다.",
    titleI18n: {
      en: "Grade C Standard Industrial Fused Silica (SiO₂ ≥99%) | SILICA",
      ja: "Cグレード 産業用 溶融シリカ Fused Silica (SiO₂ 99%以上) | SILICA",
    },
    descriptionI18n: {
      en: "Standard industrial fused silica, Grade C — SiO₂ ≥99%, stable thermal/chemical performance with excellent cost efficiency. For construction, paints & coatings, plastics/rubber and abrasives. Reliable bulk supply.",
      ja: "SiO₂ 99%以上の産業用溶融シリカ Cグレード。安定した熱・化学特性と優れた経済性を両立。建築・塗料・プラスチック・研磨材向けにコストパフォーマンスの高いFused Silica素材を安定供給。",
    },
    h1: "C등급 용융실리카 — 스탠다드 (Standard Fused Silica)",
    body: `
      <p>스탠다드 용융실리카 C등급은 99.0% 이상의 SiO₂ 순도를 갖춘 산업 표준 소재로, 안정적인 열적·화학적 성능과 우수한 경제성을 동시에 제공합니다.</p>
      <h2>적용 분야</h2>
      <p>건축 및 건자재, 페인트 및 코팅, 플라스틱/고무, 연마 및 내마모재, 기타 산업용.</p>`,
  },
  {
    path: "/products/silica-sand",
    title: "규사 Silica Sand — 고순도 산업용 규사 카테고리 | SILICA",
    description:
      "SL-S 시리즈 등 고순도 산업 규사(Silica Sand) 라인업. 유리·주조·여과·인조잔디·건축·골프장용 입도 맞춤 공급.",
    titleI18n: {
      en: "Silica Sand Category — SL-S Series & More | SILICA",
      ja: "珪砂カテゴリ — SL-Sシリーズ他 | SILICA",
    },
    descriptionI18n: {
      en: "High-purity industrial silica sand lineup including the SL-S series — for glass, foundry, water filtration, artificial turf, construction and golf courses.",
      ja: "SL-Sシリーズ他、高純度産業用珪砂ラインアップ — ガラス・鋳造・濾過・人工芝・建築・ゴルフ場向け。",
    },
    h1: "규사 (Silica Sand)",
    body: `<p>SiLiCA의 규사 카테고리는 SL-S 표준 시리즈를 중심으로 유리·주조·여과·인조잔디·건축 등 광범위한 산업 분야에 고순도 SiO₂ 규사를 공급합니다.</p><h2>주요 시리즈</h2><p>SL-S 시리즈 (SLS20 / SLS40 / SLS70 / SLS100 — 20~200 Mesh 맞춤 입도).</p>`,
  },
  {
    path: "/products/sls-series",
    title: "SL-S 시리즈 규사 — 고순도 산업용 Silica Sand | SILICA",
    description:
      "SL-S 시리즈는 SiO₂ 99.5~99.8%, 저철·고백색 사양의 산업 표준 규사. SLS20~SLS100 맞춤 입도 공급.",
    titleI18n: {
      en: "SL-S Series Silica Sand — High-Purity Industrial Sand | SILICA",
      ja: "SL-Sシリーズ 珪砂 — 高純度産業用シリカサンド | SILICA",
    },
    descriptionI18n: {
      en: "SL-S Series industrial silica sand — SiO₂ 99.5–99.8%, low iron, high whiteness. SLS20 to SLS100 custom grain sizes.",
      ja: "SL-Sシリーズ 産業用珪砂 — SiO₂ 99.5〜99.8%、低鉄・高白色度。SLS20〜SLS100のカスタム粒度対応。",
    },
    h1: "SL-S 시리즈 규사",
    body: `<p>SL-S 시리즈는 천연 규석을 원료로 선별·세척·산처리 공정을 거쳐 생산한 고순도 산업용 규사 표준 라인업입니다.</p><h2>주요 등급</h2><p>SLS20 (20~40 Mesh) / SLS40 (40~70 Mesh) / SLS70 (70~140 Mesh) / SLS100 (100~200 Mesh).</p>`,
  },
  {
    path: "/applications/silica-sand",
    title: "규사 · 규사분말 응용분야 Silica Sand & Powder Applications | SILICA",
    description:
      "고순도 규사(Silica Sand)와 규사분말(Silica Powder)의 산업별 응용 분야 — 유리 제조, 특수 유리, 주조, 수처리, 페인트·플라스틱, 인조대리석, 화학 원료 등.",
    titleI18n: {
      en: "Silica Sand & Silica Powder Applications — Glass, Foundry, Coatings | SILICA",
      ja: "珪砂・珪砂粉末の用途分野 — ガラス・鋳造・塗料・人工大理石 | SILICA",
    },
    descriptionI18n: {
      en: "Industrial applications of high-purity silica sand (SiO₂ ≥99.5%) and silica powder — flat/tempered/optical/solar glass, foundry molds, water filtration, paints & plastics fillers, engineered stone and silica chemistry.",
      ja: "SiO₂ 99.5%以上の高純度珪砂・珪砂粉末の産業別用途 — 板ガラス/強化/光学/太陽光ガラス、鋳型、水処理、塗料・プラスチック充填材、人工大理石、水ガラス等シリカ化学原料まで。",
    },
    h1: "규사 · 규사분말 응용분야",
    body: `<p>SiO₂ 99.5% 이상의 고순도 규사와 규사분말은 건축·특수 유리, 주조, 수처리, 페인트·코팅·플라스틱, 인조대리석, 실리카 화학 원료 등 광범위한 산업 분야의 핵심 원료로 사용됩니다.</p><h2>주요 응용 산업</h2><p>유리 제조(평판/강화/복층/광학/태양광/의료), 주조(사형/수지사/정밀 인베스트먼트), 수처리 여과, 페인트·플라스틱 기능성 필러, 인조대리석 및 건축 몰탈, 화학 원료(물유리·백탄·실리콘·실리카겔), 샌드블라스팅 및 스포츠 규사.</p>`,
  },
  {
    path: "/products/silica-powder",
    title: "규사분말 Silica Powder — 고백색 미분 실리카 충진재 | SILICA",
    description:
      "도료·플라스틱·인조대리석·건축 자재용 고백색·고순도 미분 실리카 규사분말(Silica Powder). SiLiCA 기능성 충진재 라인업.",
    titleI18n: {
      en: "High-Whiteness Silica Powder for Coatings, Plastics & Engineered Stone | SILICA",
      ja: "高白色 珪砂粉末 Silica Powder — 塗料・プラスチック・人工大理石用 | SILICA",
    },
    descriptionI18n: {
      en: "High-whiteness, high-purity micronized silica powder (SLP200/SLP325) for paints & coatings, plastics/rubber, engineered stone/artificial marble, putties and sealants. Functional filler with stable particle distribution.",
      ja: "塗料・コーティング、プラスチック/ゴム、人工大理石、パテ・シーラント向けの高白色・高純度 微粉シリカ(SLP200/SLP325)。安定した粒度分布の機能性フィラー。",
    },
    h1: "규사분말 (Silica Powder)",
    body: `<p>SiLiCA의 규사분말(Silica Powder)은 도료·코팅·플라스틱·인조대리석·건축 자재에 사용되는 고백색·고순도 미분 실리카 기능성 충진재입니다.</p><h2>주요 용도</h2><p>페인트/코팅 필러, 플라스틱·고무 충진재, 인조대리석·엔지니어드 스톤, 퍼티·실란트, 건축 자재.</p>`,
  },
  {
    path: "/products/slp-series",
    title: "SL-P 시리즈 규사분말 — 고백색 미분 실리카 | SILICA",
    description:
      "SL-P 시리즈는 SiO₂ 99.5~99.8%, 저철·고백색 미분 실리카 분말. SLP200 / SLP325 맞춤 입도 공급.",
    titleI18n: {
      en: "SL-P Series Silica Powder — High-Whiteness Micronized Silica | SILICA",
      ja: "SL-Pシリーズ 珪砂粉末 — 高白色微粉シリカ | SILICA",
    },
    descriptionI18n: {
      en: "SL-P Series micronized silica powder — SiO₂ 99.5–99.8%, low iron, high whiteness. SLP200 / SLP325 custom grain sizes.",
      ja: "SL-Pシリーズ 微粉シリカ — SiO₂ 99.5〜99.8%、低鉄・高白色度。SLP200 / SLP325のカスタム粒度対応。",
    },
    h1: "SL-P 시리즈 규사분말",
    body: `<p>SL-P 시리즈는 고순도 규사를 정밀 미세 분쇄하여 생산한 산업용 실리카 분말 표준 라인업입니다.</p><h2>주요 등급</h2><p>SLP200 (약 200 Mesh) / SLP325 (325~1000 Mesh 고미분).</p>`,
  },
  {
    path: "/products/high-purity-quartz",
    title: "고순도 천연 규석 High-Purity Quartz | SILICA",
    description:
      "SiO₂ 99.77%, Fe₂O₃ 5ppm급 고순도 천연 규석(High-Purity Quartz). EGS·인조대리석·고급 유리·전자재료·나노 가공용 고순도 실리카 원료.",
    titleI18n: {
      en: "High-Purity Quartz (SiO₂ 99.77%, Fe₂O₃ 5ppm) for Semiconductor & EGS | SILICA",
      ja: "高純度石英 High-Purity Quartz (SiO₂ 99.77%・Fe₂O₃ 5ppm級) | SILICA",
    },
    descriptionI18n: {
      en: "Natural high-purity quartz — SiO₂ 99.77%, Fe₂O₃ 5 ppm class. Feedstock for engineered/quartz stone (EGS), premium glass, electronic materials and nano-grade processing. Consistent batch-to-batch purity.",
      ja: "SiO₂ 99.77%、Fe₂O₃ 5ppm級の天然高純度石英(High-Purity Quartz)。人工大理石(EGS)、高級ガラス、電子材料、ナノ加工向け高純度シリカ原料。ロット間ばらつきの少ない安定品質。",
    },
    h1: "고품위 규석 (High-Purity Quartz)",
    body: `
      <p>당사는 국내 유일 고품위 규석 광산인 장수백암광산(BAR)을 직접 운영하여, 최저 99.5% 이상의 편차 없는 순도를 보장하는 고품위 규석을 공급합니다.</p>
      <h2>적용 분야</h2>
      <p>EGS / 인조대리석, 고급 유리, 전자재료, 나노 가공.</p>`,
  },
  {
    path: "/products/silica-gel",
    title: "실리카 겔 Silica Gel 공급 전문 — 8종 라인업 | SILICA",
    description:
      "고순도 실리카 겔(Silica Gel) 8종 — 미분 실리카·안티블로킹제·소광제·A형/B형 실리카 겔까지 산업용 실리카 소재를 한곳에서 공급합니다.",
    titleI18n: {
      en: "Silica Gel Supplier — 8 Grades (Type A/B, Anti-blocking, Matting) | SILICA",
      ja: "シリカゲル Silica Gel 供給専門 — 8種ラインアップ | SILICA",
    },
    descriptionI18n: {
      en: "Full silica gel line-up — 8 grades including micronized silica, anti-blocking agent, matting agent, large/coarse-pore gels, water-resistant FNG, and Type A/B desiccants. High-purity SiO₂ industrial silica from one supplier.",
      ja: "高純度SiO₂系シリカゲル8種 — 微粉シリカ、アンチブロッキング剤、艶消し剤、大細孔/粗細孔ゲル、耐水性FNG、A型/B型乾燥剤まで産業用シリカ素材をワンストップ供給。",
    },
    h1: "실리카겔 · Silica Gel — 8종 제품 라인업",
    body: `
      <p>SiLiCA의 실리카겔(Silica Gel) 라인업은 고순도 이산화규소(SiO₂) 기반의 정밀 무기 소재로, 흡착·건조·소광·안티블로킹·미분 충진재 등 광범위한 산업 공정에서 사용됩니다.</p>
      <h2>제품 라인업 (총 8종)</h2>
      <ul>
        <li>미분 실리카 (Micronized Silica Powder) — 입자 3–10 µm</li>
        <li>안티블로킹제 (Anti-blocking Agent) — 입자 2–10 µm, SiO₂ 99%</li>
        <li>소광제 (Matting Agent) — 입자 D50 3.5–10 µm</li>
        <li>대공극 실리카겔 (Large Pore Silica Gel) — 기공 16–25 nm</li>
        <li>내수 실리카겔 FNG (Water-Resistant) — 가혹 환경 전용</li>
        <li>조공극 실리카겔 (Coarse Pore Silica Gel) — 기공 8–12.5 nm</li>
        <li>A형 실리카겔 (Type A) — 비표면적 650–800 m²/g</li>
        <li>B형 실리카겔 (Type B) — 기공 4.5–7.0 nm</li>
      </ul>`,
  },
  // ───────── 실리카겔 하위 제품 (각 페이지 고유 canonical/title/description) ─────────
  ...(
    [
      {
        slug: "silica-gel-microsilica",
        ko: "미분 실리카 (Microsilica)",
        en: "Micronized Silica Powder",
        ja: "微粉シリカ (Microsilica)",
        desc: "고순도 SiO₂ 기반 초미세 분말(3–10µm). 충진재·보강재·고활성 무기 정밀 소재로 사용되는 SiLiCA 미분 실리카(Microsilica).",
        descEn: "High-purity SiO₂ ultra-fine powder (3–10 µm) — micronized silica for polymer filler/reinforcement, functional coatings and precision inorganic materials.",
        descJa: "高純度SiO₂系の超微粉末(3–10µm)。高分子充填・補強、機能性コーティング、精密無機素材向けの微粉シリカ(Microsilica)。",
        body: `<p>미분 실리카(Micronized Silica Powder)는 고순도 이산화규소(SiO₂)를 특수 공정으로 가공한 초미세 분말로, 입자 크기 3–10µm의 고활성·다공성 무기 정밀 소재입니다.</p><h2>주요 스펙</h2><ul><li>입자 크기: 3 – 10 µm</li><li>포장/규격: 고객 맞춤 제작</li></ul><h2>주요 용도</h2><p>고분자 충진·보강재, 고기능성 코팅, 정밀 무기 소재.</p>`,
      },
      {
        slug: "silica-gel-anti-blocking",
        ko: "플라스틱 안티블로킹제 (Anti-blocking Agent)",
        en: "Anti-blocking Agent",
        ja: "プラスチック用アンチブロッキング剤 (Anti-blocking Agent)",
        desc: "SiO₂ 99% 고순도 실리카 기반 안티블로킹제. 입자 2–10µm, 비표면적 20–380 m²/g로 필름·시트의 블로킹을 방지합니다.",
        descEn: "SiO₂ 99% high-purity silica anti-blocking agent (2–10 µm, BET 20–380 m²/g) — prevents blocking in PE/PP/PET films while preserving optical clarity.",
        descJa: "SiO₂ 99% 高純度シリカ系アンチブロッキング剤。粒径2–10µm、比表面積20–380 m²/gでPE/PP/PETフィルムのブロッキングを防止、光学透明性も維持。",
        body: `<p>플라스틱 안티블로킹제(Anti-blocking Agent)는 고순도 실리카 기반으로 필름·시트의 접착(블로킹)을 방지하면서 우수한 광학 투명성을 유지합니다.</p><h2>주요 스펙</h2><ul><li>입자 크기: 2 – 10 µm</li><li>비표면적: 20 – 380 m²/g</li><li>흡유량: 150 – 300 ml/100g</li><li>벌크 밀도: 50 – 300 kg/m³</li><li>SiO₂ 순도: 99%</li></ul><h2>주요 용도</h2><p>PE/PP/PET 필름, 라미네이션 필름, 포장재 안티블로킹.</p>`,
      },
      {
        slug: "silica-gel-matting",
        ko: "소광제 (Matting Agent)",
        en: "Matting Agent",
        ja: "艶消し剤 (Matting Agent)",
        desc: "도료·코팅용 소광제. D50 3.5–10µm, 흡유량 100–330 ml/100g, 왁스 처리/무처리 옵션의 SiLiCA Matting Agent.",
        descEn: "Silica matting agent for coatings & inks — D50 3.5–10 µm, oil absorption 100–330 ml/100g, wax-treated or untreated. Uniform matte finish for UV/wood/automotive coatings.",
        descJa: "塗料・コーティング用艶消し剤。D50 3.5–10µm、吸油量100–330 ml/100g、ワックス処理/未処理から選択可能。UV塗料・木工塗装・自動車補修用に均一な艶消し効果。",
        body: `<p>소광제(Matting Agent)는 도료·코팅 시스템에 균일한 무광 효과와 우수한 분산성을 제공하는 실리카 기반 첨가제입니다.</p><h2>주요 스펙</h2><ul><li>입자 크기 D50: 3.5 – 10 µm</li><li>흡유량: 100 – 330 ml/100g</li><li>pH: 3.5 – 8</li><li>기공 부피: 0.4 – 2.2 ml/g</li><li>표면 처리: 왁스 처리 / 무처리</li><li>건조 감량(105℃): ≤ 5% / 강열 감량(1000℃): ≤ 6%</li></ul><h2>주요 용도</h2><p>UV 도료, 우드 코팅, 자동차 보수도료, 인쇄 잉크.</p>`,
      },
      {
        slug: "silica-gel-large-pore",
        ko: "대공극 실리카겔 (Large Pore Silica Gel)",
        en: "Large Pore Volume Silica Gel",
        ja: "大細孔シリカゲル (Large Pore Silica Gel)",
        desc: "기공 직경 16–25 nm, 기공 부피 1.2–2.2 ml/g의 대공극·고비표면적 실리카겔. 분자 흡착·촉매 담체용 최적화.",
        descEn: "Large-pore silica gel — pore diameter 16–25 nm, pore volume 1.2–2.2 ml/g, BET 200–350 m²/g. Optimized for catalyst supports, large-molecule adsorption and chromatography.",
        descJa: "細孔径16–25 nm・細孔容積1.2–2.2 ml/g・比表面積200–350 m²/gの大細孔シリカゲル。触媒担体、大分子吸着、クロマトグラフィー充填材に最適化。",
        body: `<p>대공극 실리카겔(Large Pore Volume Silica Gel)은 큰 기공 직경과 높은 기공 부피로 분자 흡착·촉매 담체용에 최적화된 실리카겔입니다.</p><h2>주요 스펙</h2><ul><li>기공 직경: 16 – 25 nm</li><li>비표면적: 200 – 350 m²/g</li><li>기공 부피: 1.2 – 2.2 ml/g</li></ul><h2>주요 용도</h2><p>촉매 담체, 대분자 흡착, 크로마토그래피 충전재.</p>`,
      },
      {
        slug: "silica-gel-fng",
        ko: "내수 실리카겔 FNG (Water-Resistant)",
        en: "FNG Water-Resistant Silica Gel",
        ja: "耐水性シリカゲル FNG (Water-Resistant)",
        desc: "가혹 환경 전용 고성능 내수 실리카겔 FNG. 우수한 내수성·내후성·화학적 안정성을 갖춘 SiLiCA 특수 흡습 소재.",
        descEn: "FNG water-resistant silica gel — engineered for harsh, high-humidity environments. Superior water/weather resistance and chemical stability for marine shipping, defense and industrial desiccation.",
        descJa: "高温多湿など過酷環境向けの高性能耐水シリカゲル FNG。優れた耐水性・耐候性・化学的安定性を備え、海上輸送・防衛・産業用防湿に対応。",
        body: `<p>내수 실리카겔 FNG(Water-Resistant Silica Gel)는 고온·고습 등 가혹 환경에서도 안정적으로 동작하도록 설계된 고성능 내수 실리카 소재입니다.</p><h2>주요 특성</h2><ul><li>내수성 · 내후성 · 화학적 안정성</li><li>포장/규격: 고객 맞춤 제작</li></ul><h2>주요 용도</h2><p>해상 운송 컨테이너, 군수·산업 장비 방습, 고온다습 환경 흡습.</p>`,
      },
      {
        slug: "silica-gel-coarse",
        ko: "조공극 실리카겔 (Coarse Pore Silica Gel)",
        en: "Coarse Pore Silica Gel",
        ja: "粗細孔シリカゲル (Coarse Pore Silica Gel)",
        desc: "기공 8–12.5 nm, 비표면적 300–400 m²/g의 중간 기공 범용 흡착 실리카겔. 산업용 흡착·건조·정제 공정에 최적.",
        descEn: "Coarse-pore silica gel — pore 8–12.5 nm, BET 300–400 m²/g, pore volume 0.8–1.0 ml/g. Balanced medium-pore structure for gas drying, solvent purification and industrial adsorption.",
        descJa: "細孔径8–12.5 nm・比表面積300–400 m²/g・細孔容積0.8–1.0 ml/gの中間細孔シリカゲル。ガス乾燥、溶剤精製、産業用吸着プロセスに最適。",
        body: `<p>조공극 실리카겔(Coarse Pore Silica Gel)은 균형 잡힌 중간 기공 구조로 다양한 산업용 흡착·건조·정제 공정에 사용됩니다.</p><h2>주요 스펙</h2><ul><li>기공 직경: 8 – 12.5 nm</li><li>비표면적: 300 – 400 m²/g</li><li>기공 부피: 0.8 – 1.0 ml/g</li></ul><h2>주요 용도</h2><p>가스 건조, 용제 정제, 산업용 흡착 공정.</p>`,
      },
      ...([
        ["silica-gel-sl-chr-01","SL-CHR-01 컬럼크로마토그래피용 실리카겔","SL-CHR-01 Column Chromatography Silica Gel","SL-CHR-01 カラムクロマトグラフィー用シリカゲル"],
        ["silica-gel-sl-chr-02","SL-CHR-02 TLC 실리카겔 분말","SL-CHR-02 TLC Silica Gel Powder","SL-CHR-02 TLCシリカゲル粉末"],
        ["silica-gel-sl-chr-03","SL-CHR-03 TLC 플레이트","SL-CHR-03 TLC Plate","SL-CHR-03 TLCプレート"],
        ["silica-gel-sl-ind-01","SL-IND-01 촉매용 미분 실리카겔","SL-IND-01 Micro-powder Silica Gel for Catalyst","SL-IND-01 触媒用微粉シリカゲル"],
        ["silica-gel-sl-ind-02","SL-IND-02 유로키나제 흡착용","SL-IND-02 Urokinase Adsorbent","SL-IND-02 ウロキナーゼ吸着"],
        ["silica-gel-sl-ind-03","SL-IND-03 맥주 여과용","SL-IND-03 Beer Filtration","SL-IND-03 ビール濾過"],
        ["silica-gel-sl-ind-04","SL-IND-04 대공극 실리카겔","SL-IND-04 Wide Pore Silica Gel","SL-IND-04 大孔径シリカゲル"],
        ["silica-gel-sl-ind-05","SL-IND-05 오일 탈색 샌드","SL-IND-05 Oil Bleaching Sand","SL-IND-05 オイル脱色サンド"],
        ["silica-gel-sl-ind-06","SL-IND-06 마이크로구형 실리카겔","SL-IND-06 Micro-spherical Silica Gel","SL-IND-06 マイクロ球状シリカゲル"],
        ["silica-gel-sl-ind-07","SL-IND-07 폐엔진오일 정제 촉매","SL-IND-07 Waste Engine Oil Catalyst","SL-IND-07 廃エンジンオイル触媒"],
        ["silica-gel-sl-des-01","SL-DES-01 세공형 A형","SL-DES-01 Fine-pored Type A","SL-DES-01 細孔型A型"],
        ["silica-gel-sl-des-02","SL-DES-02 PSA용 A형","SL-DES-02 PSA Type A","SL-DES-02 PSA用A型"],
        ["silica-gel-sl-des-03","SL-DES-03 블루 실리카겔","SL-DES-03 Blue Silica Gel","SL-DES-03 ブルーシリカゲル"],
        ["silica-gel-sl-des-04","SL-DES-04 오렌지 실리카겔","SL-DES-04 Orange Silica Gel","SL-DES-04 オレンジシリカゲル"],
        ["silica-gel-sl-des-05","SL-DES-05 B형 실리카겔","SL-DES-05 B Type Silica Gel","SL-DES-05 B型シリカゲル"],
        ["silica-gel-sl-des-06","SL-DES-06 실리카겔 고양이모래","SL-DES-06 Silica Gel Cat Litter","SL-DES-06 シリカゲル猫砂"],
        ["silica-gel-sl-des-07","SL-DES-07 FNG 내수성","SL-DES-07 FNG Water-Resistant","SL-DES-07 FNG耐水性"],
        ["silica-gel-sl-als-01","SL-ALS-01 실리카알루미나겔","SL-ALS-01 Silica Alumina Gel","SL-ALS-01 シリカアルミナゲル"],
        ["silica-gel-sl-als-03","SL-ALS-03 활성알루미나볼","SL-ALS-03 Activated Alumina Ball","SL-ALS-03 活性アルミナボール"],
        ["silica-gel-sl-als-04","SL-ALS-04 분자체 4A","SL-ALS-04 Molecular Sieve 4A","SL-ALS-04 分子篩 4A"],
      ] as const).map(([slug, ko, en, ja]) => ({
        slug, ko, en, ja,
        desc: `${ko} — 고순도 SiO₂ 기반 SL 시리즈 실리카겔. 스펙·용도·응용 분야 상세 정보.`,
        descEn: `${en} — SL series silica gel with high-purity SiO₂. Detailed specs, uses and applications.`,
        descJa: `${ja} — 高純度SiO₂ベースのSLシリーズシリカゲル。仕様・用途・応用分野の詳細情報。`,
        body: `<p>${ko}는 고순도 이산화규소(SiO₂)를 기반으로 하는 SL 시리즈 실리카겔입니다. 자세한 스펙, 용도, 응용 분야는 상세 페이지를 확인하세요.</p>`,
      })),
    ] as const
  ).map((p) => ({
    path: `/products/${p.slug}`,
    title: `${p.ko} — 실리카 겔 Silica Gel | SILICA`,
    description: p.desc,
    titleI18n: {
      en: `${p.en} — Silica Gel Grade | SILICA`,
      ja: `${p.ja} — シリカゲル Silica Gel | SILICA`,
    },
    descriptionI18n: {
      en: p.descEn,
      ja: p.descJa,
    },
    h1: `${p.ko} · ${p.en}`,
    body: p.body,
  })),

  // ============= Advanced SL Series (7 new categories) =============
  ...(
    [
      {
        slug: "spherical-silica-powder",
        ko: "구상 실리카 분말 (SL-QG / SL-QG-L)",
        en: "Spherical Silica Powder (SL-QG / SL-QG-L)",
        ja: "球状シリカ粉末 (SL-QG / SL-QG-L)",
        desc: "고구상도(>95%)·저열팽창의 반도체 EMC용 프리미엄 구상 실리카. 일반(SL-QG)·저방사선(SL-QG-L) 2종 라인업.",
        descEn: "Premium spherical silica for semiconductor EMC — high sphericity (>95%), low CTE. Two grades: standard SL-QG and low-alpha SL-QG-L.",
        descJa: "高球形度(>95%)・低熱膨張の半導体EMC用プレミアム球状シリカ。標準SL-QG・低α線SL-QG-Lの2種ラインアップ。",
      },
      {
        slug: "round-corner-silica-powder",
        ko: "모서리 라운드 실리카 분말 (SL-YJG / SL-YRG)",
        en: "Round Corner Silica Powder (SL-YJG / SL-YRG)",
        ja: "丸角シリカ粉末 (SL-YJG / SL-YRG)",
        desc: "각상과 구상의 장점을 겸비한 모서리 라운드 실리카. 결정형(SL-YJG)·용융형(SL-YRG) 2종 공급.",
        descEn: "Round-corner hybrid silica combining angular strength and spherical flow. Supplied as crystalline SL-YJG and fused SL-YRG.",
        descJa: "角形と球状の長所を兼備した丸角シリカ。結晶質(SL-YJG)・溶融質(SL-YRG)の2種供給。",
      },
      {
        slug: "angular-silica-powder",
        ko: "각상 실리카 분말 (SL-RG / SL-JG)",
        en: "Angular Silica Powder (SL-RG / SL-JG)",
        ja: "角形シリカ粉末 (SL-RG / SL-JG)",
        desc: "고강도·고내마모의 산업 표준 각상 실리카. 용융형(SL-RG)·결정형(SL-JG).",
        descEn: "Industry-standard angular silica with high strength and wear resistance. Fused SL-RG and crystalline SL-JG.",
        descJa: "高強度・高耐摩耗の産業標準角形シリカ。溶融質(SL-RG)・結晶質(SL-JG)。",
      },
      {
        slug: "low-radiation-silica-powder",
        ko: "저방사선 실리카 분말 (SL-CL / SL-FL)",
        en: "Low-Alpha Silica Powder (SL-CL / SL-FL)",
        ja: "低α線シリカ粉末 (SL-CL / SL-FL)",
        desc: "α선 ≤ 0.001 cph/cm²의 HBM·AI 반도체용 저방사선 실리카. 결정형(SL-CL)·용융형(SL-FL).",
        descEn: "Low-radiation silica for HBM and AI semiconductors — α-emission ≤ 0.001 cph/cm². Crystalline SL-CL and fused SL-FL.",
        descJa: "α線 ≤ 0.001 cph/cm²のHBM・AI半導体用低α線シリカ。結晶質(SL-CL)・溶融質(SL-FL)。",
      },
      {
        slug: "surface-modified-silica-powder",
        ko: "표면개질 실리카 분말 (SL-HJG / SL-HRG)",
        en: "Surface-Modified Silica Powder (SL-HJG / SL-HRG)",
        ja: "表面改質シリカ粉末 (SL-HJG / SL-HRG)",
        desc: "실란 커플링 표면개질로 수지 친화성·분산성 극대화. 결정형(SL-HJG)·용융형(SL-HRG).",
        descEn: "Silane-coupling surface modification maximizes resin compatibility and dispersion. Crystalline SL-HJG and fused SL-HRG.",
        descJa: "シランカップリング表面改質で樹脂親和性・分散性を極大化。結晶質(SL-HJG)・溶融質(SL-HRG)。",
      },
      {
        slug: "silica-sand-granule",
        ko: "실리카 분말·입자 (SL-CS / SL-FS)",
        en: "Silica Powder & Granule (SL-CS / SL-FS)",
        ja: "シリカパウダー・粒 (SL-CS / SL-FS)",
        desc: "고순도 결정 석영사(SL-CS)·용융 석영사(SL-FS) 산업 표준 소재. 유리·주조·연마·필터용.",
        descEn: "High-purity crystalline (SL-CS) and fused (SL-FS) quartz sand. For glass, casting, abrasives and filtration.",
        descJa: "高純度結晶石英砂(SL-CS)・溶融石英砂(SL-FS)の産業標準素材。ガラス・鋳造・研磨・フィルター用。",
      },
      {
        slug: "lead-free-glass-powder",
        ko: "무연유리분말 (SL-ZT)",
        en: "Lead-Free Glass Powder (SL-ZT)",
        ja: "無鉛ガラス粉末 (SL-ZT)",
        desc: "친환경 무연 조성 · 400~550℃ 저융점 봉착 유리 프릿. RoHS·REACH 완전 부합.",
        descEn: "Eco-friendly lead-free sealing glass frit — 400–550℃ low melting point, fully RoHS/REACH compliant.",
        descJa: "環境配慮型無鉛組成 · 400~550℃低融点封着ガラスフリット。RoHS・REACH完全準拠。",
      },
    ] as const
  ).map((p) => ({
    path: `/products/${p.slug}`,
    title: `${p.ko} | SILICA`,
    description: p.desc,
    titleI18n: { en: `${p.en} | SILICA`, ja: `${p.ja} | SILICA` },
    descriptionI18n: { en: p.descEn, ja: p.descJa },
    h1: `${p.ko} · ${p.en}`,
    body: `<p>${p.desc}</p><h2>${p.en}</h2><p>${p.descEn}</p>`,
  })),

  // ============= Advanced SL Series — Sub-Model Detail Pages (13) =============
  ...(
    [
      { slug: "sl-qg", parent: "spherical-silica-powder", ko: "SL-QG 일반 구상 실리카 분말", en: "SL-QG · Standard Spherical Silica Powder", ja: "SL-QG 一般球状シリカ粉末", desc: "고구상도(>95%) 표준 등급 구상 실리카 SL-QG. 반도체 EMC·CCL·언더필용 프리미엄 필러.", descEn: "SL-QG standard-grade spherical silica with >95% sphericity — premium filler for semiconductor EMC, CCL and underfill.", descJa: "球形度>95%の標準グレード球状シリカSL-QG。半導体EMC・CCL・アンダーフィル用プレミアムフィラー。" },
      { slug: "sl-qg-l", parent: "spherical-silica-powder", ko: "SL-QG-L 저방사선 구상 실리카 분말", en: "SL-QG-L · Low-Alpha Spherical Silica Powder", ja: "SL-QG-L 低α線球状シリカ粉末", desc: "α선 ≤0.001 cph/cm²의 저방사선 구상 실리카 SL-QG-L. HBM·AI 반도체용.", descEn: "SL-QG-L low-alpha spherical silica (α ≤0.001 cph/cm²) for HBM and AI semiconductor applications.", descJa: "α線 ≤0.001 cph/cm²の低α線球状シリカSL-QG-L。HBM・AI半導体向け。" },
      { slug: "sl-yjg", parent: "round-corner-silica-powder", ko: "SL-YJG 결정형 모서리 라운드 실리카 분말", en: "SL-YJG · Crystalline Round-Corner Silica Powder", ja: "SL-YJG 結晶質丸角シリカ粉末", desc: "결정형 모서리 라운드 실리카 SL-YJG. 구상에 근접한 유동성과 경제성을 겸비.", descEn: "SL-YJG crystalline round-corner silica combining near-spherical flow with cost efficiency.", descJa: "結晶質丸角シリカSL-YJG。球状に近い流動性と経済性を兼備。" },
      { slug: "sl-yrg", parent: "round-corner-silica-powder", ko: "SL-YRG 용융형 모서리 라운드 실리카 분말", en: "SL-YRG · Fused Round-Corner Silica Powder", ja: "SL-YRG 溶融質丸角シリカ粉末", desc: "용융형 모서리 라운드 실리카 SL-YRG. 저열팽창·저점도의 하이브리드 필러.", descEn: "SL-YRG fused round-corner silica — hybrid filler with low CTE and low viscosity.", descJa: "溶融質丸角シリカSL-YRG。低熱膨張・低粘度のハイブリッドフィラー。" },
      { slug: "sl-rg", parent: "angular-silica-powder", ko: "SL-RG 용융형 각상 실리카 분말", en: "SL-RG · Fused Angular Silica Powder", ja: "SL-RG 溶融質角形シリカ粉末", desc: "용융형 각상 실리카 SL-RG. 고강도·고내마모 산업 표준 필러.", descEn: "SL-RG fused angular silica — industry-standard filler with high strength and wear resistance.", descJa: "溶融質角形シリカSL-RG。高強度・高耐摩耗の産業標準フィラー。" },
      { slug: "sl-jg", parent: "angular-silica-powder", ko: "SL-JG 결정형 각상 실리카 분말", en: "SL-JG · Crystalline Angular Silica Powder", ja: "SL-JG 結晶質角形シリカ粉末", desc: "결정형 각상 실리카 SL-JG. 경제성과 성능을 겸비한 범용 필러.", descEn: "SL-JG crystalline angular silica — general-purpose filler balancing cost and performance.", descJa: "結晶質角形シリカSL-JG。経済性と性能を兼備した汎用フィラー。" },
      { slug: "sl-cl", parent: "low-radiation-silica-powder", ko: "SL-CL 저방사선 결정형 실리카 분말", en: "SL-CL · Low-Alpha Crystalline Silica Powder", ja: "SL-CL 低α線結晶質シリカ粉末", desc: "저방사선 결정형 실리카 SL-CL. U/Th ppb급 관리로 HBM/AI 반도체 대응.", descEn: "SL-CL low-radiation crystalline silica with ppb-level U/Th control for HBM and AI semiconductors.", descJa: "低α線結晶質シリカSL-CL。U/Th ppb級管理でHBM・AI半導体対応。" },
      { slug: "sl-fl", parent: "low-radiation-silica-powder", ko: "SL-FL 저방사선 용융형 실리카 분말", en: "SL-FL · Low-Alpha Fused Silica Powder", ja: "SL-FL 低α線溶融質シリカ粉末", desc: "저방사선 용융형 실리카 SL-FL. 어드밴스드 패키징용 필수 소재.", descEn: "SL-FL low-radiation fused silica — essential material for advanced semiconductor packaging.", descJa: "低α線溶融質シリカSL-FL。アドバンスドパッケージング用必須素材。" },
      { slug: "sl-drg07", parent: "surface-modified-silica-powder", ko: "SL-DRG07 표면개질(에폭시 실란) 실리카 분말", en: "SL-DRG07 · Surface-Modified (Epoxy-Silane) Silica Powder", ja: "SL-DRG07 表面改質(エポキシシラン)シリカ粉末", desc: "SiO₂ ≥99.7%·D50 6-9μm·에폭시 실란 표면처리 표준 등급 표면개질 실리카 SL-DRG07.", descEn: "SL-DRG07 standard-grade surface-modified silica — SiO₂ ≥99.7%, D50 6–9 µm, epoxy-silane treated.", descJa: "SiO₂ ≥99.7%・D50 6-9μm・エポキシシラン表面処理標準グレードの表面改質シリカSL-DRG07。" },
      { slug: "sl-drg07-a", parent: "surface-modified-silica-powder", ko: "SL-DRG07-A 표면개질(에폭시 실란) 실리카 분말 고순도 등급", en: "SL-DRG07-A · High-Purity Surface-Modified Silica Powder", ja: "SL-DRG07-A 表面改質(エポキシシラン)シリカ粉末 高純度グレード", desc: "SiO₂ 대표치 99.80%·Fe₂O₃ 30ppm급 고순도 표면개질 실리카 SL-DRG07-A. HBM/AI EMC 대응.", descEn: "SL-DRG07-A high-purity surface-modified silica — SiO₂ typ. 99.80%, Fe₂O₃ 30 ppm-class, for HBM/AI EMC.", descJa: "SiO₂代表値99.80%・Fe₂O₃ 30ppm級の高純度表面改質シリカSL-DRG07-A。HBM/AI EMC対応。" },
      { slug: "sl-hjg", parent: "surface-modified-silica-powder", ko: "SL-HJG 표면개질 결정형 실리카 분말 (활성 결정)", en: "SL-HJG · Surface-Modified Crystalline Silica Powder (Active Crystalline)", ja: "SL-HJG 表面改質 結晶質シリカ粉末 (活性結晶)", desc: "실란 커플링 표면개질 결정형 실리카 SL-HJG. SiO₂ 98.0~99.9%·D50 1~30μm·저 Na⁺/Cl⁻/E/C. EMC·CCL·PCB·IC용.", descEn: "SL-HJG active crystalline silica with silane-coupling surface treatment — SiO₂ 98.0–99.9%, D50 1–30 µm, low Na⁺/Cl⁻/EC. For EMC, CCL, PCB and IC.", descJa: "シランカップリング表面改質の結晶質シリカSL-HJG。SiO₂ 98.0~99.9%・D50 1~30μm・低Na⁺/Cl⁻/E/C。EMC・CCL・PCB・IC用。" },
      { slug: "sl-hrg", parent: "surface-modified-silica-powder", ko: "SL-HRG 표면개질 용융형 실리카 분말 (활성 용융)", en: "SL-HRG · Surface-Modified Fused Silica Powder (Active Fused)", ja: "SL-HRG 表面改質 溶融質シリカ粉末 (活性溶融)", desc: "실란 커플링 표면개질 용융형 실리카 SL-HRG. SiO₂ 98.0~99.95%·CTE 0.5×10⁻⁶·D50 1~30μm. 반도체 EMC·언더필·5G 기판용.", descEn: "SL-HRG active fused silica with silane-coupling surface treatment — SiO₂ 98.0–99.95%, CTE 0.5×10⁻⁶, D50 1–30 µm. For semiconductor EMC, underfill and 5G substrates.", descJa: "シランカップリング表面改質の溶融質シリカSL-HRG。SiO₂ 98.0~99.95%・CTE 0.5×10⁻⁶・D50 1~30μm。半導体EMC・アンダーフィル・5G基板用。" },
      { slug: "sl-cs", parent: "silica-sand-granule", ko: "SL-CS 결정 석영사", en: "SL-CS · Crystalline Quartz Sand", ja: "SL-CS 結晶石英砂", desc: "고순도 결정 석영사 SL-CS. 유리·정밀 주조·연마·워터 필터용 산업 표준.", descEn: "SL-CS high-purity crystalline quartz sand for glass, precision casting, abrasives and water filtration.", descJa: "高純度結晶石英砂SL-CS。ガラス・精密鋳造・研磨・浄水フィルター用産業標準。" },
      { slug: "sl-fs", parent: "silica-sand-granule", ko: "SL-FS 용융 석영사", en: "SL-FS · Fused Quartz Sand", ja: "SL-FS 溶融石英砂", desc: "초고온 용융 석영사 SL-FS. 고온 공정·정밀 주조용 프리미엄 소재.", descEn: "SL-FS fused quartz sand processed at ultra-high temperature — premium material for high-temperature and precision casting.", descJa: "超高温溶融石英砂SL-FS。高温工程・精密鋳造用プレミアム素材。" },
      { slug: "sl-hf04", parent: "silica-sand-granule", ko: "SL-HF04 고순도 용융 실리카 분말", en: "SL-HF04 · Ultra-High-Purity Fused Silica Powder", ja: "SL-HF04 高純度溶融シリカ粉末", desc: "SiO₂ 99.96%·D50 3.8µm 초고순도 미분 용융 실리카 SL-HF04. 반도체 EMC·언더필·CCL·5G 기판·어드밴스드 패키징용 프리미엄 필러.", descEn: "SL-HF04 ultra-high-purity micronized fused silica — SiO₂ 99.96%, D50 3.8 µm. Premium filler for semiconductor EMC, underfill, CCL, 5G substrates and advanced packaging.", descJa: "SL-HF04 SiO₂ 99.96%・D50 3.8µmの超高純度微粉溶融シリカ。半導体EMC・アンダーフィル・CCL・5G基板・先端パッケージ用プレミアムフィラー。" },
      { slug: "sl-sph-300", parent: "spherical-silica-powder", ko: "SL-SPH-300 고순도 나노구상실리카", en: "SL-SPH-300 · Ultra-High-Purity Nano Spherical Silica", ja: "SL-SPH-300 高純度ナノ球状シリカ", desc: "화학합성 아미크론급 SiO₂ 99.98%·D50 0.38µm·D100 ≤0.8µm 나노구상 실리카 SL-SPH-300. M7 반도체 기판·EMC·언더필·어드밴스드 패키징용 고신뢰성 필러.", descEn: "SL-SPH-300 chemically synthesized submicron nano-spherical silica — SiO₂ 99.98%, D50 0.38 µm, D100 ≤ 0.8 µm. High-reliability filler for M7 substrates, EMC, underfill and advanced semiconductor packaging.", descJa: "化学合成サブミクロン級 SiO₂ 99.98%・D50 0.38µm・D100 ≤0.8µmのナノ球状シリカ SL-SPH-300。M7半導体基板・EMC・アンダーフィル・先端パッケージ用高信頼性フィラー。" },
      { slug: "sl-spj-300", parent: "spherical-silica-powder", ko: "SL-SPJ-300 아미크론 구상 실리카", en: "SL-SPJ-300 · Submicron Spherical Silica", ja: "SL-SPJ-300 サブミクロン球状シリカ", desc: "구상화율 98%·SiO₂ >99.9%·D50 0.3±0.1µm 아미크론 구상 실리카 SL-SPJ-300. SSA 11.1 m²/g·EC 14.36 µS/cm, 반도체 EMC·CCL·페이스트·정밀 코팅용. 원산지 중국.", descEn: "SL-SPJ-300 submicron spherical silica — 98% spheroidization, SiO₂ >99.9%, D50 0.3±0.1 µm, SSA 11.1 m²/g, EC 14.36 µS/cm. For semiconductor EMC, CCL, pastes and precision coatings. Origin: China.", descJa: "球状化率98%・SiO₂ >99.9%・D50 0.3±0.1µmのサブミクロン球状シリカ SL-SPJ-300。SSA 11.1 m²/g・EC 14.36 µS/cm、半導体EMC・CCL・ペースト・精密コーティング用。原産国:中国。" },
      { slug: "sl-zt", parent: "lead-free-glass-powder", ko: "SL-ZT 무연 봉착 유리 프릿", en: "SL-ZT · Lead-Free Sealing Glass Frit", ja: "SL-ZT 無鉛封着ガラスフリット", desc: "친환경 무연 저융점(400~550℃) 봉착 유리 프릿 SL-ZT. RoHS·REACH 완전 부합.", descEn: "SL-ZT eco-friendly lead-free low-melting (400–550℃) sealing glass frit, fully RoHS/REACH compliant.", descJa: "環境配慮型無鉛低融点(400~550℃)封着ガラスフリットSL-ZT。RoHS・REACH完全準拠。" },
      { slug: "silica-sol", parent: "silica-sol", ko: "실리카졸 (콜로이달 실리카) SL-JA25 / SL-JA30", en: "Silica Sol (Colloidal Silica) · SL-JA25 / SL-JA30", ja: "シリカゾル (コロイダルシリカ) SL-JA25 / SL-JA30", desc: "10~12 nm 초미립·NH₃ 안정형 고순도 콜로이달 실리카. 정밀 주조·세라믹 코팅·촉매·2차전지 세퍼레이터용. 중국 원산.", descEn: "10–12 nm ultrafine, ammonia-stabilized high-purity colloidal silica for investment casting, ceramic coatings, catalysts and battery separators. Made in China.", descJa: "10~12 nm 超微粒·NH₃安定型の高純度コロイダルシリカ。精密鋳造・セラミックコーティング・触媒・二次電池セパレーター用。中国原産。" },
      { slug: "sl-ja25", parent: "silica-sol", ko: "SL-JA25 실리카졸", en: "SL-JA25 · Silica Sol (New Type)", ja: "SL-JA25 シリカゾル (新型)", desc: "SiO₂ 25~26% · 10~12 nm · NH₃ 안정형 표준 콜로이달 실리카 SL-JA25. Na₂O ≤0.03%, pH 9.0~9.6.", descEn: "SL-JA25 ammonia-stabilized standard colloidal silica — SiO₂ 25–26%, 10–12 nm, Na₂O ≤0.03%, pH 9.0–9.6.", descJa: "SL-JA25 SiO₂ 25~26%·10~12 nm·NH₃安定型の標準コロイダルシリカ。Na₂O ≤0.03%, pH 9.0~9.6。" },
      { slug: "sl-ja30", parent: "silica-sol", ko: "SL-JA30 실리카졸", en: "SL-JA30 · Silica Sol (New Type)", ja: "SL-JA30 シリカゾル (新型)", desc: "SiO₂ 30~31% · 10~11.5 nm · NH₃ 안정형 고농도 콜로이달 실리카 SL-JA30. SSA 198~258 m²/g.", descEn: "SL-JA30 ammonia-stabilized high-concentration colloidal silica — SiO₂ 30–31%, 10–11.5 nm, SSA 198–258 m²/g.", descJa: "SL-JA30 SiO₂ 30~31%·10~11.5 nm·NH₃安定型の高濃度コロイダルシリカ。SSA 198~258 m²/g。" },
      { slug: "sl-shs", parent: "silica-sol", ko: "SL-SHS 콜로이달 실리카 시리즈", en: "SL-SHS · Colloidal Silica / Silica Sol Full Series", ja: "SL-SHS コロイダルシリカ シリーズ", desc: "SL-SHS 실리카졸 풀 라인업 — JN·SW·JA·ZX·JGC 14종 그레이드 · SiO₂ 15~41% · 6~30 nm. 정밀 주조·제지·도료·이차전지·촉매용 콜로이달 실리카.", descEn: "SL-SHS silica sol full lineup — 14 grades across JN/SW/JA/ZX/JGC series, SiO₂ 15–41%, 6–30 nm. Colloidal silica for investment casting, paper, coatings, secondary batteries and catalysts.", descJa: "SL-SHS シリカゾル フルラインアップ — JN·SW·JA·ZX·JGC 14グレード · SiO₂ 15~41% · 6~30 nm。精密鋳造・製紙・塗料・二次電池・触媒用コロイダルシリカ。" },
      { slug: "sl-hs12", parent: "crystalline-silica", ko: "SL-HS12 고순도 결정질 실리카 미분", en: "SL-HS12 · High-Purity Crystalline Silica Micro-Powder", ja: "SL-HS12 高純度結晶質シリカ微粉", desc: "SiO₂ ≥99.85%(대표 99.92%)·D50 12±2µm 고순도 결정질 실리카 미분 SL-HS12. Fe 3ppm·Na 7ppm급 저불순물, PSD 맞춤 조정 가능.", descEn: "SL-HS12 high-purity crystalline silica micro-powder — SiO₂ ≥99.85% (typ. 99.92%), D50 12±2 µm, Fe 3 ppm / Na 7 ppm class low impurities, customizable PSD.", descJa: "SL-HS12 SiO₂ ≥99.85%(代表値99.92%)・D50 12±2µmの高純度結晶質シリカ微粉。Fe 3ppm・Na 7ppm級の低不純物、PSDカスタム調整可能。" },
      { slug: "applied-silica-materials", parent: "applied-silica-materials", ko: "실리카 응용 · 연관 소재 (Applied & Related Silica Materials)", en: "Applied & Related Silica Materials", ja: "シリカ応用・関連素材", desc: "고온 용융·화학 반응·특수 공정을 거친 실리카 기반 응용 및 연관 소재 전문 카테고리. 건축·세라믹·내화물·화학 바인더용 기능성 강화 고품질 원료. 비정질 세라믹 프리트 등.", descEn: "A dedicated category of silica-based applied and related materials produced through high-temperature melting, chemical reaction and special processing — functionally enhanced raw materials for construction, ceramics, refractories and chemical binders, including amorphous ceramic frit.", descJa: "高温溶融・化学反応・特殊工程を経たシリカベース応用・関連素材の専門カテゴリ。建築・セラミックス・耐火物・化学バインダー向けの機能性強化原料。非晶質セラミックフリットなど。" },
      { slug: "amorphous-ceramic-frit", parent: "applied-silica-materials", ko: "비정질 세라믹 프리트 (Amorphous Ceramic Frit)", en: "Amorphous Ceramic Frit / Ceramic Glass Frit", ja: "非晶質セラミックフリット", desc: "칼슘-알루미노실리케이트계 무붕소 유리 프리트. SiO₂ 65.68%·CaO 12.90%·Al₂O₃ 10.00%·Fe₂O₃ 0.09%·B₂O₃ <0.05%, 입도 0.1~0.35 / 0.35~0.7 mm 과립. 위생도기·타일 유약·세라믹 바인더·내화물용. 중국 원산.", descEn: "Calcium aluminosilicate boron-free glass frit — SiO₂ 65.68%, CaO 12.90%, Al₂O₃ 10.00%, Fe₂O₃ 0.09%, B₂O₃ <0.05%, granules 0.1–0.35 / 0.35–0.7 mm. For sanitaryware and tile glazes, ceramic binders and refractories. Made in China.", descJa: "カルシウムアルミノシリケート系無ホウ素ガラスフリット。SiO₂ 65.68%・CaO 12.90%・Al₂O₃ 10.00%・Fe₂O₃ 0.09%・B₂O₃ <0.05%、粒度0.1~0.35 / 0.35~0.7 mm顆粒。衛生陶器・タイル釉薬・セラミックバインダー・耐火物用。中国原産。" },
    ] as const
  ).map((p) => ({
    path: `/products/${p.slug}`,
    title: `${p.ko} | SILICA`,
    description: p.desc,
    titleI18n: { en: `${p.en} | SILICA`, ja: `${p.ja} | SILICA` },
    descriptionI18n: { en: p.descEn, ja: p.descJa },
    h1: `${p.ko} · ${p.en}`,
    body: `<p>${p.desc}</p><h2>${p.en}</h2><p>${p.descEn}</p>`,
  })),

  // ============= All Products (paginated index) =============
  {
    path: "/products/all",
    title: "전체 제품 All Products — 실리카 종합 라인업 | SILICA",
    description:
      "실리원의 전체 실리카 제품 라인업 — 용융실리카, 구상·각상·모서리 라운드·저방사선·표면개질 실리카 분말, 침전·흄드·나노 실리카, 실리카겔, 실리카졸, 규사, 무연유리분말, 천연 고순도 규석까지.",
    titleI18n: {
      en: "All Products — Complete Silica Lineup | SILICA",
      ja: "全製品 All Products — シリカ総合ラインアップ | SILICA",
    },
    descriptionI18n: {
      en: "Silione's complete silica lineup — fused silica, spherical / angular / round-corner / low-alpha / surface-modified silica powders, precipitated, fumed and nano silica, silica gel, silica sol, silica sand, lead-free glass powder and natural high-purity quartz.",
      ja: "Silione の全シリカ製品ラインアップ — 溶融シリカ、球状・角形・丸角・低α線・表面改質シリカ粉末、沈降・ヒュームド・ナノシリカ、シリカゲル、シリカゾル、珪砂、無鉛ガラス粉末、天然高純度石英まで。",
    },
    h1: "전체 제품 · All Products",
    body: `<p>SILICA(실리원)의 전 제품군을 한 페이지에서 탐색할 수 있는 통합 인덱스입니다. 용융실리카(A/B/C 등급, 구상, 각상, 모서리 라운드, 저방사선, 표면개질), 침전/흄드/나노 실리카, 실리카겔, 실리카졸, 규사·규사분말, 무연유리분말, 천연 고순도규석까지 모든 라인업을 카테고리·용도별로 확인하실 수 있습니다.</p>`,
  },

  // ============= Category & Application pages (SSR completeness) =============

  {
    path: "/products/precipitated-silica",
    title: "침전 실리카 Precipitated Silica — 고무·식의약·치약용 | SILICA",
    description:
      "고무 보강·식의약 고결방지·치약 연마제용 고순도 침전 실리카(Precipitated Silica). BET 100–250 m²/g, 흡유량 200–320 ml/100g 규격의 SiLiCA 침전실리카 라인업.",
    titleI18n: {
      en: "Precipitated Silica — Rubber Reinforcement, Food & Dental | SILICA",
      ja: "沈降シリカ Precipitated Silica — ゴム補強・食品/医薬品・歯磨き用 | SILICA",
    },
    descriptionI18n: {
      en: "High-purity precipitated silica for rubber (tire, footwear) reinforcement, food/pharma anti-caking and dental abrasives. BET 100–250 m²/g, oil absorption 200–320 ml/100g.",
      ja: "タイヤ・靴底などのゴム補強、食品/医薬品固結防止、歯磨き用研磨剤向けの高純度沈降シリカ。BET 100–250 m²/g、吸油量200–320 ml/100g。",
    },
    h1: "침전 실리카 · Precipitated Silica",
    body: `
      <p>SiLiCA의 침전 실리카(Precipitated Silica)는 규산나트륨과 산의 습식 반응으로 제조되는 다공성 고순도 SiO₂ 분말로, 고무 보강·식품/의약 고결방지·치약 연마제·사료·농약 담체 등 광범위한 산업에서 사용됩니다.</p>
      <h2>주요 특성</h2>
      <ul>
        <li>SiO₂ 순도: ≥ 98%</li>
        <li>BET 비표면적: 100 – 250 m²/g</li>
        <li>흡유량(DBP): 200 – 320 ml/100g</li>
        <li>평균 입도: 3 – 25 µm</li>
        <li>pH: 6 – 8 (중성 안정)</li>
      </ul>
      <h2>주요 응용 분야</h2>
      <ul>
        <li>타이어·신발창·컨베이어벨트 등 <strong>고무 보강재</strong></li>
        <li>분유·조미료·비타민 등 <strong>식·의약 고결방지제</strong></li>
        <li><strong>치약 연마제</strong> 및 구강 케어 제품</li>
        <li>사료·농약·비료 담체(캐리어)</li>
        <li>페인트·잉크 소광제 및 증점제</li>
      </ul>`,
  },
  {
    path: "/applications/precipitated-silica",
    title: "침전 실리카 응용분야 — 고무·식품·치약·사료 | SILICA",
    description:
      "침전 실리카(Precipitated Silica)의 산업별 응용 분야 — 그린 타이어, 신발창, 식품 고결방지제, 치약 연마제, 사료·농약 담체, 배터리 세퍼레이터까지.",
    titleI18n: {
      en: "Precipitated Silica Applications — Tires, Food, Dental, Battery | SILICA",
      ja: "沈降シリカの用途分野 — グリーンタイヤ・食品・歯磨き・電池 | SILICA",
    },
    descriptionI18n: {
      en: "Industrial applications of precipitated silica — green tires, footwear soles, food anti-caking, toothpaste abrasive, feed/pesticide carriers, battery separators and paint matting.",
      ja: "沈降シリカの産業別用途 — グリーンタイヤ、靴底、食品固結防止、歯磨き研磨剤、飼料・農薬担体、電池セパレーター、塗料艶消し。",
    },
    h1: "침전 실리카 응용분야 · Precipitated Silica Applications",
    body: `
      <p>침전 실리카는 높은 비표면적과 흡유량, 우수한 보강·분산 특성으로 자동차·소비재·식품·의약·에너지 등 다양한 산업의 핵심 기능성 소재로 사용됩니다.</p>
      <h2>주요 응용 산업</h2>
      <ul>
        <li><strong>그린 타이어</strong> — 저연비·저소음 타이어의 보강 필러</li>
        <li><strong>신발/컨베이어 고무</strong> — 인장강도 및 내마모성 향상</li>
        <li><strong>식품·의약</strong> — 분말 제품의 고결방지·유동성 개선</li>
        <li><strong>치약</strong> — 저마모 연마제 및 증점제</li>
        <li><strong>사료·농약</strong> — 액상 원료의 분말화 담체</li>
        <li><strong>이차전지</strong> — 세퍼레이터 코팅용 무기 필러</li>
      </ul>`,
  },
  {
    path: "/products/fumed-silica",
    title: "흄드 실리카 Fumed Silica — 실리콘·실란트·도료 첨가제 | SILICA",
    description:
      "SiO₂ ≥99.8%, BET 100–400 m²/g 고순도 흄드 실리카(Fumed Silica). 실리콘 고무·실란트·도료·잉크의 증점·틱소트로피·보강용 나노 실리카 소재.",
    titleI18n: {
      en: "Fumed Silica — Silicone, Sealant, Coatings Additive | SILICA",
      ja: "ヒュームドシリカ Fumed Silica — シリコーン・シーラント・塗料添加剤 | SILICA",
    },
    descriptionI18n: {
      en: "High-purity fumed silica (SiO₂ ≥99.8%, BET 100–400 m²/g) — nano-silica thickener, thixotrope and reinforcement for silicone rubber, sealants, coatings and inks. Hydrophilic and hydrophobic grades.",
      ja: "SiO₂≥99.8%・BET 100–400 m²/gの高純度ヒュームドシリカ。シリコーンゴム・シーラント・塗料・インキ用の増粘・チキソ性・補強ナノシリカ。親水性/疎水性グレード対応。",
    },
    h1: "흄드 실리카 · Fumed Silica",
    body: `
      <p>흄드 실리카(Fumed Silica)는 SiCl₄를 고온 화염 가수분해하여 제조되는 나노급 무정형 SiO₂ 분말입니다. 1차 입자 7–40 nm, 비표면적 100–400 m²/g의 초미세 구조로 뛰어난 증점·틱소트로피·보강·유동성 개선 효과를 제공합니다.</p>
      <h2>주요 특성</h2>
      <ul>
        <li>SiO₂ 순도: ≥ 99.8% (초고순도 무정형)</li>
        <li>1차 입자: 7 – 40 nm</li>
        <li>BET 비표면적: 100 – 400 m²/g</li>
        <li>친수성(Hydrophilic) / 소수성(Hydrophobic) 그레이드</li>
        <li>탭 밀도: 40 – 60 g/L</li>
      </ul>
      <h2>주요 응용 분야</h2>
      <ul>
        <li>실리콘 고무·실란트 <strong>보강 필러</strong></li>
        <li>페인트·잉크·접착제 <strong>증점·틱소성 부여제</strong></li>
        <li>불포화 폴리에스터·에폭시 수지 <strong>흐름 조절</strong></li>
        <li>분체 유동성 개선 및 <strong>고결방지제</strong></li>
        <li>화장품·의약 제제용 <strong>기능성 첨가제</strong></li>
      </ul>`,
  },
  {
    path: "/applications/fumed-silica",
    title: "흄드 실리카 응용분야 — 실리콘·도료·접착제·CMP | SILICA",
    description:
      "흄드 실리카(Fumed Silica)의 산업별 응용 분야 — 실리콘 고무, 실란트/접착제, 도료·잉크, 불포화 폴리에스터, 반도체 CMP 슬러리, 화장품·의약 등.",
    titleI18n: {
      en: "Fumed Silica Applications — Silicone, Coatings, CMP Slurry | SILICA",
      ja: "ヒュームドシリカの用途分野 — シリコーン・塗料・CMPスラリー | SILICA",
    },
    descriptionI18n: {
      en: "Industrial applications of fumed silica — silicone rubber reinforcement, sealants/adhesives thixotropy, paints & inks, unsaturated polyester, semiconductor CMP slurry, cosmetics and pharma.",
      ja: "ヒュームドシリカの産業別用途 — シリコーンゴム補強、シーラント・接着剤のチキソ化、塗料・インキ、不飽和ポリエステル、半導体CMPスラリー、化粧品・医薬品。",
    },
    h1: "흄드 실리카 응용분야 · Fumed Silica Applications",
    body: `
      <p>흄드 실리카는 초미세 나노 SiO₂ 구조를 기반으로 증점·틱소성·보강·유동성 개선 효과를 제공하여 자동차·건축·전자·에너지·소비재 등 광범위한 산업에서 사용됩니다.</p>
      <h2>주요 응용 산업</h2>
      <ul>
        <li><strong>실리콘 고무·실란트</strong> — 인장·인열 강도 향상</li>
        <li><strong>도료·잉크·접착제</strong> — 흐름 억제 및 침강 방지</li>
        <li><strong>불포화 폴리에스터·에폭시</strong> — 요변성 부여</li>
        <li><strong>반도체 CMP 슬러리</strong> — 웨이퍼 평탄화 연마재</li>
        <li><strong>화장품·의약</strong> — 유동성·질감 개선</li>
        <li><strong>이차전지·에너지</strong> — 전해질 겔화 및 세퍼레이터 첨가제</li>
      </ul>`,
  },
  {
    path: "/applications/fused-silica",
    title: "용융실리카 응용분야 — 반도체 EMC·광학·항공/방산·정밀 주조 | SILICA",
    description:
      "용융실리카(Fused Silica)의 산업별 응용 분야 — 반도체 EMC·언더필·어드밴스드 패키징, CCL·PCB·5G 고주파 기판, 정밀 주조, 광학·광섬유, 항공·방산·우주, 태양광·에너지, 특수 유리·세라믹, 인조 대리석·건축 자재.",
    titleI18n: {
      en: "Fused Silica Applications — Semiconductor EMC, Optics, Aerospace, Casting | SILICA",
      ja: "溶融シリカの用途分野 — 半導体EMC・光学・航空/防衛・精密鋳造 | SILICA",
    },
    descriptionI18n: {
      en: "Industrial applications of fused silica — semiconductor EMC/underfill/advanced packaging, CCL/PCB/5G substrates, precision investment casting, optics & optical fiber, aerospace/defense/space, solar & energy, specialty glass & ceramics, engineered stone & construction.",
      ja: "溶融シリカの産業別用途 — 半導体EMC/アンダーフィル/先端パッケージング、CCL/PCB/5G基板、精密鋳造、光学・光ファイバー、航空/防衛/宇宙、太陽光・エネルギー、特殊ガラス・セラミックス、人造大理石・建築材料。",
    },
    h1: "용융실리카 응용분야 · Fused Silica Applications",
    body: `
      <p>용융실리카(Fused Silica)는 극저 열팽창(0.5~0.6 ×10⁻⁶/℃)·초고온 안정성·저 유전율·고 절연·우수한 화학적 내구성을 동시에 갖춘 첨단 산업의 핵심 원료입니다. A · B · C 등급과 전 SL 시리즈(SL-QG · SL-QG-L · SL-YRG · SL-RG · SL-FL · SL-HRG · SL-FS · SL-HF04) 라인업이 국가 기간산업 전반에 사용됩니다.</p>
      <h2>주요 응용 산업</h2>
      <ul>
        <li><strong>반도체 EMC · 언더필 · 어드밴스드 패키징</strong> — FC-BGA, 2.5D/3D, WLP, Fan-Out, HBM/DDR5/AI 저방사선(Low-α)</li>
        <li><strong>CCL · PCB · 5G 고주파 기판</strong> — HDI, IC 기판, ABF, AiP, mmWave, 자율주행 레이더</li>
        <li><strong>정밀 주조 · 세라믹 코어</strong> — 항공기·발전용 가스터빈 블레이드, 니켈/티타늄 초합금</li>
        <li><strong>광학 · 광섬유 · 정밀 광학</strong> — 광섬유 프리폼, UV/DUV/EUV 렌즈, 우주망원경 미러</li>
        <li><strong>항공 · 방산 · 우주</strong> — 재돌입체 노즈콘, 극초음속 리딩엣지, 레이돔, TPS</li>
        <li><strong>고온 내화 · 특수 유리 · 세라믹</strong> — 슬라이딩 게이트 노즐, 석영 유리, LAS 저열팽창 세라믹</li>
        <li><strong>태양광 · 에너지 · 리튬 배터리</strong> — 단결정 Si 성장용 석영 도가니, SiO/SiOx 음극재</li>
        <li><strong>산업용 도료 · 접착제 · 실란트</strong> — 저 CTE 고성능 컴파운드, 전기 절연, UV 경화 접착제</li>
        <li><strong>인조 대리석 · 엔지니어드 스톤 · 건축 자재</strong> — 쿼츠 카운터탑, HPC/UHPC 포졸란 첨가제</li>
      </ul>`,
  },
  {
    path: "/applications/quartz",
    title: "쿼츠 · 결정질 실리카 응용분야 — 반도체·인조대리석·유리·연마 | SILICA",
    description:
      "쿼츠(Quartz) · 결정질 실리카(α-Quartz)의 산업별 응용 분야 — 반도체 EMC·CCL/PCB, 인조 대리석·엔지니어드 스톤, 유리·도자기, 정밀 주조, 연마·워터젯, 태양광 잉곳·석영 도가니, 스포츠 표면재.",
    titleI18n: {
      en: "Quartz & Crystalline Silica Applications — Semiconductor, Engineered Stone, Glass, Abrasives | SILICA",
      ja: "クォーツ・結晶質シリカ用途 — 半導体・人造大理石・ガラス・研磨 | SILICA",
    },
    descriptionI18n: {
      en: "Industrial applications of quartz and crystalline silica (α-quartz) — semiconductor EMC & CCL/PCB fillers, engineered stone & quartz countertops, glass & ceramics, precision casting, abrasives & waterjet, solar/semiconductor quartz crucibles, sports surfacing.",
      ja: "クォーツ・結晶質シリカ(α-クォーツ)の産業別用途 — 半導体EMC・CCL/PCB、人造大理石・エンジニアードストーン、ガラス・陶磁器、精密鋳造、研磨・ウォータージェット、太陽光/半導体用石英ルツボ、スポーツ表面材。",
    },
    h1: "쿼츠 · 결정질 실리카 응용분야 · Quartz & Crystalline Silica Applications",
    body: `
      <p>쿼츠(Quartz) · 결정질 실리카(α-Quartz)는 SiO₂가 규칙적으로 배열된 결정 구조 소재로, 모스 경도 7의 높은 기계적 강도·1670℃의 뛰어난 내화도·화학적 안정성·풍부한 매장량을 갖춘 산업의 기본 원료입니다. 결정형 구상(SL-QJG)·모서리 라운드(SL-YJG)·각상(SL-JG)·저방사선(SL-CL) 등 형상과 순도별 라인업이 국가 기간산업 전반에 사용됩니다.</p>
      <h2>주요 응용 산업</h2>
      <ul>
        <li><strong>반도체 EMC · 언더필 · 어드밴스드 패키징</strong> — 결정형 구상/각상 필러, 저방사선(Low-α) 결정형</li>
        <li><strong>CCL · PCB · 고밀도 실장 기판</strong> — FR-4, HDI, IC 기판, 도전성 페이스트</li>
        <li><strong>인조 대리석 · 엔지니어드 스톤 · 건축 자재</strong> — 쿼츠 카운터탑, UHPC, 타일·바닥재</li>
        <li><strong>유리 · 특수 유리 · 도자기</strong> — 판유리, 태양광 커버 유리, LCD/OLED 백플레인, 위생도기</li>
        <li><strong>정밀 주조 · 파운드리</strong> — 그린 샌드, 수지 코어, 인베스트먼트 캐스팅</li>
        <li><strong>연마재 · 워터젯 · 표면 처리</strong> — 샌드블라스팅, 워터젯 커팅, 연마 페이스트, 필터 미디어</li>
        <li><strong>태양광 · 반도체 · 웨이퍼 원료</strong> — 석영 도가니, 확산로 튜브, 합성 석영 출발 원료</li>
        <li><strong>스포츠 표면재 · 인조잔디 · 골프 벙커</strong> — 인조잔디 인필, 승마장, 조경 자재</li>
      </ul>`,
  },
  {
    path: "/applications/silica-gel",
    title: "실리카 겔 응용분야 — 흡습·촉매·코팅·필름 | SILICA",
    description:
      "실리카 겔(Silica Gel)의 산업별 응용 분야 — 식품/전자 방습제, 촉매 담체, 도료 소광제, 안티블로킹, 크로마토그래피 충전재, 정밀 무기 소재.",
    titleI18n: {
      en: "Silica Gel Applications — Desiccant, Catalyst, Matting, Film | SILICA",
      ja: "シリカゲルの用途分野 — 乾燥剤・触媒・艶消し・フィルム | SILICA",
    },
    descriptionI18n: {
      en: "Industrial applications of silica gel — food/electronic desiccant, catalyst supports, coating matting agents, film anti-blocking, chromatography media and precision inorganic fillers.",
      ja: "シリカゲルの産業別用途 — 食品/電子製品乾燥剤、触媒担体、塗料艶消し剤、フィルムアンチブロッキング、クロマトグラフィー充填材、精密無機フィラー。",
    },
    h1: "실리카 겔 응용분야 · Silica Gel Applications",
    body: `
      <p>고순도 SiO₂ 기반 실리카 겔은 다공성 구조와 넓은 비표면적을 이용해 흡착·건조·촉매 담체·소광·안티블로킹 등 다양한 산업 공정에 사용됩니다.</p>
      <h2>주요 응용 산업</h2>
      <ul>
        <li><strong>방습·건조제</strong> — 식품, 전자, 의약, 정밀기기 포장</li>
        <li><strong>도료·잉크 소광제</strong> — 균일한 무광 효과</li>
        <li><strong>필름 안티블로킹</strong> — PE/PP/PET 필름 표면 처리</li>
        <li><strong>촉매 담체</strong> — 화학·정유·수소 공정</li>
        <li><strong>크로마토그래피</strong> — 정제·분리 충전재</li>
        <li><strong>정밀 무기 소재</strong> — 반도체·디스플레이 공정 첨가제</li>
      </ul>`,
  },
  {
    path: "/applications/silica-sol",
    title: "콜로이달 실리카 시리즈 응용분야 — 정밀주조·이차전지·CMP·내화 | SILICA",
    description:
      "SL-SHS 콜로이달 실리카(실리카졸) 5개 계열 14종 그레이드의 산업별 응용 분야 — 정밀 주조 셸 몰드, 이차전지 세라믹 세퍼레이터, 반도체 CMP, 내화·세라믹, 제지·잉크젯, 촉매 담체, 방활 처리.",
    titleI18n: {
      en: "Colloidal Silica Applications — Investment Casting, Battery Separator, CMP, Refractory | SILICA",
      ja: "コロイダルシリカ用途分野 — 精密鋳造・二次電池・CMP・耐火 | SILICA",
    },
    descriptionI18n: {
      en: "Industrial applications of SL-SHS colloidal silica (silica sol) across 14 grades and 5 stabilization systems — investment-casting shell binder, Li-ion battery ceramic separator, semiconductor CMP, refractory & ceramic binder, paper/inkjet coating, catalyst supports and anti-slip treatments.",
      ja: "SL-SHSコロイダルシリカ(シリカゾル)5系列14グレードの産業別用途 — 精密鋳造シェル、二次電池セラミックセパレーター、半導体CMP、耐火・セラミック、製紙・インクジェット、触媒担体、防滑処理。",
    },
    h1: "콜로이달 실리카 시리즈 응용분야 · Colloidal Silica Applications",
    body: `
      <p>SL-SHS 콜로이달 실리카(실리카졸)는 물속에 균일 분산된 6~30 nm 나노 SiO₂ 입자가 건조 후 Si–O 결합을 통해 소재 표면에 견고히 부착되는 특성을 이용, 정밀 주조부터 첨단 이차전지·반도체까지 광범위 산업에 사용됩니다.</p>
      <h2>주요 응용 산업</h2>
      <ul>
        <li><strong>정밀 주조 (인베스트먼트 캐스팅)</strong> — 항공기 터빈 블레이드·의료 임플란트·골프 헤드용 셸 몰드 바인더</li>
        <li><strong>리튬 이차전지 · 전고체 전지</strong> — 세라믹 코팅 세퍼레이터, 고체 전해질 성형 바인더 (저 Na⁺ NH₃형 필수)</li>
        <li><strong>반도체 CMP · 정밀 폴리싱</strong> — Si/SiC/GaN 웨이퍼, 사파이어, LCD/OLED 유리, HDD 기판</li>
        <li><strong>내화·세라믹·불연 코팅</strong> — 캐스터블 내화물, 모노리식 라이닝, 세라믹 섬유 결합제, 방화문 코팅</li>
        <li><strong>제지·인쇄·잉크젯</strong> — 표면 강도·마찰계수 향상, 잉크젯 흡수·발색성 최적화</li>
        <li><strong>촉매 담체·화학 공정</strong> — 정유·석유화학·수소·자동차 배기가스 정화 촉매</li>
        <li><strong>도료·잉크·수성 코팅</strong> — 무기 하이브리드 도료의 경도·내마모성·요변성·불연성 강화</li>
        <li><strong>섬유·카펫 방활 (Anti-slip)</strong> — 카펫·러그·양말·요가 매트 뒷면 미끄럼 방지 코팅</li>
        <li><strong>콘크리트·석재 표면 경화</strong> — Ca(OH)₂와 CSH 결합 형성, 산업용 바닥재·주차장 마감</li>
        <li><strong>실리콘·이형지·표면 처리</strong> — 실리콘 이형지 박리 조정, 방오·발수 하이브리드 코팅</li>
      </ul>`,
  },
  {
    path: "/applications/silica-powder",
    title: "규사분말 응용분야 — 도료·플라스틱·인조대리석·건축 | SILICA",
    description:
      "고백색·고순도 규사분말(Silica Powder)의 산업별 응용 분야 — 페인트·코팅 필러, 플라스틱·고무 충진재, 인조대리석, 퍼티·실란트, 건축 자재.",
    titleI18n: {
      en: "Silica Powder Applications — Coatings, Plastics, Engineered Stone | SILICA",
      ja: "珪砂粉末の用途分野 — 塗料・プラスチック・人工大理石・建築 | SILICA",
    },
    descriptionI18n: {
      en: "Applications of high-whiteness silica powder — paint/coating fillers, plastic and rubber reinforcement, engineered stone/artificial marble, putties, sealants and construction materials.",
      ja: "高白色・高純度珪砂粉末の産業別用途 — 塗料/コーティングフィラー、プラスチック・ゴム補強、人工大理石、パテ・シーラント、建築材料。",
    },
    h1: "규사분말 응용분야 · Silica Powder Applications",
    body: `
      <p>SiLiCA의 규사분말은 SiO₂ 99.5% 이상의 고백색·고순도 미분 실리카로, 도료·플라스틱·인조대리석·건축 자재 등에 기능성 충진재로 광범위하게 사용됩니다.</p>
      <h2>주요 응용 산업</h2>
      <ul>
        <li><strong>페인트·코팅</strong> — 은폐력·내마모성 향상 필러</li>
        <li><strong>플라스틱·고무</strong> — 강도·치수안정성 보강</li>
        <li><strong>인조대리석·엔지니어드 스톤</strong> — 고백색 무기 필러</li>
        <li><strong>퍼티·실란트</strong> — 요변성 및 표면 강도 개선</li>
        <li><strong>건축 자재</strong> — 몰탈·타일·바닥재 기능성 원료</li>
      </ul>`,
  },
];


export const routes: Route[] = [
  {
    path: "/",
    title: "용융실리카·규사·흄드.침전실리카.실리카졸겔 전문|SILICA",
    description:
      "실리카는 용융실리카,실리카샌드.규사.침전실리카,흄드실리카.실리카 졸,실리카겔 등 다양한 실리카 소재 전문기업입니다./SILICA",
    titleI18n: {
      en: "High-Purity Fused Silica, Silica Sand, Fumed & Precipitated Silica Supplier | SILICA",
      ja: "溶融シリカ・珪砂・ヒュームド/沈降シリカ・シリカゲル 専門メーカー | SILICA",
    },
    descriptionI18n: {
      en: "Korean industrial silica manufacturer supplying fused silica (Grade A/B/C), high-purity quartz, silica sand & powder, silica gel, fumed and precipitated silica for semiconductor, optics, solar, refractory and medical industries.",
      ja: "溶融シリカ(A/B/Cグレード)、高純度石英、珪砂・珪砂粉末、シリカゲル、ヒュームドシリカ、沈降シリカを半導体・光学・太陽光・耐火・医療向けに安定供給する韓国のシリカ専門メーカー。",
    },
    h1: "SiLiCA · 용융 실리카·실리카 겔·흄드 실리카·침전 실리카·고순도 규석 전문 기업",
    body: `
      <p>SiLiCA는 용융 실리카(Fused Silica), 침전 실리카(Precipitated Silica), 흄드 실리카(Fumed Silica), 실리카 겔(Silica Gel), 실리카 졸겔 등 다양한 고순도 실리카 소재를 반도체·광학·태양광·내화재·의료 산업에 안정적으로 공급합니다.</p>
      <h2>핵심 제품</h2>
      <ul>
        <li><strong>용융 실리카 (Fused Silica)</strong> — A·B·C 등급, 반도체·광학·정밀 주조용</li>
        <li><strong>실리카 겔 (Silica Gel)</strong> — 흡착·건조·소광·안티블로킹 8종</li>
        <li><strong>침전 실리카 (Precipitated Silica)</strong> — 고무 보강·식의약 고결방지</li>
        <li><strong>흄드 실리카 (Fumed Silica)</strong> — 실리콘 고무·실란트·도료 첨가제</li>
        <li><strong>천연 고순도 규석 (High-Purity Quartz)</strong> — EGS·고급 유리·전자재료용</li>
      </ul>`,
  },
  {
    path: "/about",
    title: "회사소개 — 고품위 규석 광산 직영 실리카 기업 | SILICA",
    description:
      "SILICA는 국내 유일 고품위 규석 광산을 직접 운영하며 용융 실리카·실리카 겔·고순도 실리카 소재의 채광부터 가공까지 일관 공정을 수행하는 전문 기업입니다.",
    titleI18n: {
      en: "About SILICA — Integrated High-Purity Quartz & Fused Silica Manufacturer | SILICA",
      ja: "会社案内 — 高品位石英原料から加工まで一貫生産のシリカ専門メーカー | SILICA",
    },
    descriptionI18n: {
      en: "SILICA operates an integrated supply chain — from a Korean high-purity quartz source to fused silica melting, milling and grading — with ISO 9001 / 22000 QC for semiconductor, optics and industrial customers worldwide.",
      ja: "SILICAは韓国の高品位石英原料から溶融・粉砕・等級化までを一貫生産。ISO 9001/22000品質管理体制のもと、半導体・光学・産業分野の顧客に高純度シリカ素材を安定供給します。",
    },
    h1: "회사소개 · 국내 유일의 고품위 규석 광산을 직접 개발합니다",
    body: `
      <p>당사는 국내 유일의 고품위 규석 광산을 직접 개발·운영하며, 탐사부터 채광·1차 가공까지 자체 수행하여 최고 품질의 고품위 석영을 생산합니다. 원료 선별부터 완제품까지 각 단계의 차별화된 QC 시스템을 통해 고객의 기대를 충족합니다.</p>
      <h2>장수백암광산 (BAR)</h2>
      <p>전라북도 진안군에 위치한 현존 국내 유일의 고품위 규석 광산으로, 최저 99.5%를 유지하는 편차 없는 순도를 보장합니다.</p>
      <h2>SDR Quartz · 글로벌 파트너십</h2>
      <p>중국 장수성의 SDR Quartz는 ISO 9001 및 ISO 14001 인증을 보유하고 석영 용해·원석 선별·분쇄·미분말 가공의 4단계 전 공정을 자체 생산합니다.</p>`,
  },
  ...productRoutes,
  {
    path: "/board",
    title: "공지·기술 자료 — 용융 실리카·실리카 겔 소식 | SILICA",
    description:
      "SILICA 공식 게시판. 용융 실리카(Fused Silica), 실리카 겔(Silica Gel), 고순도 실리카 소재 관련 공지·업계 소식·기술 자료를 공유합니다.",
    titleI18n: {
      en: "News & Technical Notes — Fused Silica, Silica Gel Updates | SILICA",
      ja: "お知らせ・技術資料 — 溶融シリカ・シリカゲル最新情報 | SILICA",
    },
    descriptionI18n: {
      en: "Official SILICA board — announcements, industry news and technical notes on fused silica, silica gel and high-purity silica materials.",
      ja: "SILICA公式掲示板。溶融シリカ、シリカゲル、高純度シリカ素材に関するお知らせ・業界情報・技術資料を公開しています。",
    },
    h1: "SiLiCA 게시판",
    body: `<p>공지사항, 업계 소식, 용융 실리카·실리카 겔·고순도 규석 관련 기술 정보를 공유하는 SILICA 공식 게시판입니다.</p>`,
  },
  {
    path: "/terms",
    title: "이용약관 — 산업용 실리카 소재 공급 | SILICA",
    description:
      "SILICA 웹사이트 이용약관. 용융 실리카·실리카 겔 등 산업용 실리카 소재 공급에 관한 회원과 회사의 권리·의무를 안내합니다.",
    titleI18n: {
      en: "Terms of Service — Industrial Silica Materials Supply | SILICA",
      ja: "利用規約 — 産業用シリカ素材の供給 | SILICA",
    },
    descriptionI18n: {
      en: "SILICA website terms of service governing the supply of industrial silica materials including fused silica and silica gel.",
      ja: "溶融シリカ・シリカゲル等 産業用シリカ素材の供給に関するSILICAウェブサイト利用規約。",
    },
    h1: "이용약관",
    body: `<p>본 약관은 SiLiCA 웹사이트 이용에 관한 조건과 절차, 회원과 회사의 권리·의무 및 책임사항을 규정합니다.</p>`,
  },
  {
    path: "/privacy",
    title: "개인정보처리방침 — SILICA 실리카 소재 공급",
    description:
      "SILICA의 개인정보 수집·이용·보관·파기 절차를 안내하는 개인정보처리방침입니다. 용융 실리카·실리카 겔 공급 문의에 따른 처리 기준을 포함합니다.",
    titleI18n: {
      en: "Privacy Policy — SILICA Industrial Silica Materials",
      ja: "プライバシーポリシー — SILICA シリカ素材供給",
    },
    descriptionI18n: {
      en: "SILICA privacy policy — how we collect, use, store and dispose of personal information, including inquiries related to fused silica and silica gel supply.",
      ja: "溶融シリカ・シリカゲル供給に関するお問い合わせを含む個人情報の収集・利用・保管・廃棄に関するSILICAのプライバシーポリシー。",
    },
    h1: "개인정보처리방침",
    body: `<p>SiLiCA는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 고충을 신속히 처리하기 위해 본 처리방침을 수립·공개합니다.</p>`,
  },
];

const LANGS = ["ko", "en", "ja"] as const satisfies readonly LangCode[];

const HTML_LANG: Record<LangCode, string> = { ko: "ko-KR", en: "en", ja: "ja" };

const langPath = (lang: LangCode, routePath: string): string => {
  const base = routePath === "/" ? "" : routePath;
  return `/${lang}${base}/`;
};

function buildHtml(template: string, route: Route, lang: LangCode): string {
  const path = langPath(lang, route.path);
  const url = `${BASE_URL}${path}`;
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const localTitle = route.titleI18n?.[lang] ?? route.title;
  const localDesc = route.descriptionI18n?.[lang] ?? route.description;
  const escTitle = escape(localTitle);
  const escDesc = escape(localDesc);

  let html = template;

  // <html lang="...">
  html = html.replace(/<html\b[^>]*\blang="[^"]*"/, `<html lang="${HTML_LANG[lang]}"`);

  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escTitle}</title>`);

  // meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escDesc}" />`,
  );

  // canonical → self-referential, lang-prefixed
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`,
  );

  // og + twitter
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}">`);
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escTitle}">`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escDesc}">`);
  html = html.replace(/<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/, `<meta property="og:locale" content="${HTML_LANG[lang].replace("-", "_")}">`);
  html = html.replace(/<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:url" content="${url}" />`);
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${escTitle}">`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${escDesc}">`);

  // hreflang alternates — emit one per language plus x-default → Korean
  const altTags = [
    ...LANGS.map(
      (l) => `<link rel="alternate" hreflang="${l}" href="${BASE_URL}${langPath(l, route.path)}" />`,
    ),
    `<link rel="alternate" hreflang="x-default" href="${BASE_URL}${langPath("ko", route.path)}" />`,
  ].join("\n    ");
  // Strip any prior alternate tags from the template, then inject ours before </head>.
  html = html.replace(/\s*<link\s+rel="alternate"[^>]*>/g, "");
  html = html.replace(/<\/head>/, `    ${altTags}\n  </head>`);

  // SEO body block (Korean source content for all langs — SPA replaces on hydration).
  const seoBlock = `
      <noscript><p>이 사이트를 보시려면 JavaScript를 활성화해 주세요.</p></noscript>
      <div style="max-width: 960px; margin: 0 auto; padding: 40px 20px; font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; color: #1a1a1a; line-height: 1.7;">
        <header><h1>${escape(route.h1)}</h1></header>
        <section>${route.body}</section>
        <footer><p>SiLiCA · 주식회사 비에이알 · 경기도 화성시 마도면 마도공단로 202 1F · 전화 031-356-5682</p></footer>
      </div>`;

  html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*<script/, `<div id="root">${seoBlock}\n    </div>\n    <script`);

  return html;
}

function priorityFor(path: string): { changefreq: string; priority: string } {
  if (path === "/") return { changefreq: "weekly", priority: "1.0" };
  if (path === "/about") return { changefreq: "weekly", priority: "0.9" };
  if (path.startsWith("/products/")) return { changefreq: "monthly", priority: "0.8" };
  if (path.startsWith("/applications/")) return { changefreq: "monthly", priority: "0.7" };
  if (path === "/board") return { changefreq: "daily", priority: "0.7" };
  return { changefreq: "yearly", priority: "0.3" };
}

function generateSitemap(): string {
  const today = new Date().toISOString().slice(0, 10);
  const blocks: string[] = [];
  for (const r of routes) {
    const { changefreq, priority } = priorityFor(r.path);
    for (const lang of LANGS) {
      const loc = `${BASE_URL}${langPath(lang, r.path)}`;
      const alternates = [
        ...LANGS.map(
          (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE_URL}${langPath(l, r.path)}" />`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${langPath("ko", r.path)}" />`,
      ].join("\n");
      blocks.push(
        [
          `  <url>`,
          `    <loc>${loc}</loc>`,
          `    <lastmod>${today}</lastmod>`,
          `    <changefreq>${changefreq}</changefreq>`,
          `    <priority>${priority}</priority>`,
          alternates,
          `  </url>`,
        ].join("\n"),
      );
    }
  }
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...blocks,
    `</urlset>`,
    ``,
  ].join("\n");
}

function main() {
  if (!existsSync(SOURCE)) {
    console.error(`[prerender] dist/index.html not found at ${SOURCE} — skipping.`);
    return;
  }
  const template = readFileSync(SOURCE, "utf-8");
  let count = 0;
  for (const route of routes) {
    for (const lang of LANGS) {
      const relPath = route.path === "/" ? lang : `${lang}${route.path}`;
      const out = resolve(DIST, relPath, "index.html");
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, buildHtml(template, route, lang));
      count++;
    }
  }
  console.log(`[prerender] generated ${count} static HTML files (3 langs × ${routes.length} routes).`);

  // Auto-generate sitemap.xml — emits one entry per (lang, route) with hreflang alternates.
  const sitemapXml = generateSitemap();
  writeFileSync(resolve(DIST, "sitemap.xml"), sitemapXml);
  try {
    writeFileSync(resolve("public/sitemap.xml"), sitemapXml);
  } catch {
    /* ignore in read-only CI */
  }
  console.log(`[prerender] generated sitemap.xml with ${routes.length * LANGS.length} URLs.`);

  // ── IndexNow: notify Naver (and other participating engines) of all URLs ──
  void notifyIndexNow();
}

const INDEXNOW_KEY = "550e8400e29b41d4a716446655440000";
const INDEXNOW_HOST = "silica.co.kr";

async function notifyIndexNow() {
  if (process.env.SKIP_INDEXNOW === "1") {
    console.log("[indexnow] skipped (SKIP_INDEXNOW=1).");
    return;
  }
  const urlList: string[] = [];
  for (const r of routes) for (const l of LANGS) urlList.push(`${BASE_URL}${langPath(l, r.path)}`);
  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };
  const endpoints = [
    "https://searchadvisor.naver.com/indexnow",
    "https://api.indexnow.org/indexnow",
  ];
  for (const ep of endpoints) {
    try {
      const res = await fetch(ep, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      console.log(`[indexnow] ${ep} -> ${res.status} (${urlList.length} URLs)`);
    } catch (e) {
      console.warn(`[indexnow] ${ep} failed:`, (e as Error).message);
    }
  }
}

if (import.meta.main) {
  main();
}
