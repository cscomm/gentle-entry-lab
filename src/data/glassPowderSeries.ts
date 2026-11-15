export type GlassLang = "ko" | "en" | "ja";
export type GlassText = readonly [string, string, string];
export const glassText = (text: GlassText, lang: GlassLang) => text[lang === "ko" ? 0 : lang === "en" ? 1 : 2];
type Cell = string | number | GlassText;
export type GlassGrade = { code: string; caution?: "lead" | "heavy"; values: Cell[] };
export type GlassSeries = { id: string; title: GlassText; description: GlassText; headers: GlassText[]; grades: GlassGrade[] };
const onset: GlassText = ["용융 개시 온도 ℃", "Melt onset ℃", "溶融開始温度 ℃"];
const thermal: GlassText = ["열 특성 온도* ℃", "Thermal reference* ℃", "熱特性参考温度* ℃"];
const cte: GlassText = ["선팽창계수 ×10⁻⁷", "Linear expansion ×10⁻⁷", "線膨張係数 ×10⁻⁷"];
const particle: GlassText = ["평균 입경 µm", "Mean particle size µm", "平均粒径 µm"];
const bulk: GlassText = ["벌크 밀도", "Bulk density", "かさ密度"];
const hardness: GlassText = ["모스 경도", "Mohs hardness", "モース硬度"];
const oil: GlassText = ["흡유량", "Oil absorption", "吸油量"];
const color: GlassText = ["용융 색상", "Fused color", "溶融色相"];
const clear: GlassText = ["투명", "Clear", "透明"];
const white: GlassText = ["백색 투명상", "White translucent phase", "白色透明相"];
const yellow: GlassText = ["황색 투명", "Yellow clear", "黄透明"];
const none: GlassText = ["불검출", "Not detected", "未検出"];
const lead: GlassText = ["납 함유", "Contains lead", "鉛含有"];
const heavy: GlassText = ["함유 (성분 미기재)", "Present (unspecified)", "含有 (成分未記載)"];
const absent: GlassText = ["없음 (자료 표기)", "No (per source)", "なし (資料記載)"];
const missing: GlassText = ["정확한 수치 미기재", "Exact value unavailable", "正確な数値未記載"];
const metals: GlassText = ["중금속", "Heavy metals", "重金属"];
const application: GlassText = ["권장 용도", "Suggested application", "推奨用途"];
const normal: GlassText = ["일반", "Standard", "一般"];
const good: GlassText = ["양호", "Good", "良好"];
const veryGood: GlassText = ["우수", "Very good", "優良"];
const grade = (code: string, values: Cell[], caution?: GlassGrade["caution"]): GlassGrade => ({ code: `SN-${code}`, values, ...(caution ? { caution } : {}) });

export const GLASS_POWDER_SERIES: GlassSeries[] = [
  {
    id: "G", title: ["SN-MZ-G · 범용 저융점 유리 분말", "SN-MZ-G · General-Purpose Low-Melting Glass Powder", "SN-MZ-G · 汎用低融点ガラス粉末"],
    description: ["코팅·접착제·고온 기능성 필러용 유리 분말(Glass Powder)입니다. 용융 개시 온도 326~900℃의 8개 품번으로 구성되며, SN-MZ-G3는 납 함유 등급으로 별도 구분합니다.", "Glass powder for coatings, adhesives and high-temperature functional fillers. Eight grades cover melt onset from 326 to 900℃; SN-MZ-G3 is a separate leaded grade.", "コーティング・接着剤・高温機能性フィラー用ガラス粉末です。溶融開始温度326~900℃の8品番で、SN-MZ-G3は有鉛グレードとして別掲します。"],
    headers: [onset, cte, bulk, particle, hardness, ["pH", "pH", "pH"], ["백색도", "Whiteness", "白色度"], metals],
    grades: [
      grade("MZ-G1", [326, 125, 1.62, 8.0, 4.9, "7.0–9.0", ">94", none]),
      grade("MZ-G2", [350, 136, 1.29, 7.2, 5.5, "7.0–9.0", ">96", none]),
      grade("MZ-G3", [400, 85, 1.23, 7.1, 6.3, "7.0", ">93", lead], "lead"),
      grade("MZ-G4", [450, 90, 0.75, 6.7, 6.3, "7.0", ">94", none]),
      grade("MZ-G5", [500, 80, 0.81, 6.4, 6.3, "7.0", ">95", none]),
      grade("MZ-G6", [550, 85, 0.61, 6.4, 6.3, "7.0", ">94", none]),
      grade("MZ-G7", [700, 90, 0.57, 7.0, 6.3, "7.0", ">90", none]),
      grade("MZ-G8", [900, 73, 0.60, 8.2, 6.3, "7.0", ">93", none]),
    ],
  },
  {
    id: "FR", title: ["SN-MZ-FR · 세라믹화 난연용 유리 프리트", "SN-MZ-FR · Ceramifying Flame-Retardant Glass Frit", "SN-MZ-FR · セラミック化難燃用ガラスフリット"],
    description: ["전선·케이블, 배터리 방화 소재, 고무·플라스틱·접착제의 세라믹화 난연 배합용 유리 프리트(Glass Frit)입니다. 용융 개시 330~700℃, 공정 온도 580~900℃이며 SN-MZ-FR1의 권장 첨가량은 총 배합의 8~18%입니다. 최종 난연 성능은 배합과 시험 조건에 따라 확인해야 합니다.", "Glass frit for ceramifying flame-retardant formulations in cables, battery fire protection, rubber, plastics and adhesives. Melt onset is 330–700℃ and process temperature 580–900℃. The suggested SN-MZ-FR1 loading is 8–18% of the total formulation. Final fire performance requires formulation-specific testing.", "電線・ケーブル、電池防火材、ゴム・プラスチック・接着剤のセラミック化難燃配合用ガラスフリットです。溶融開始330~700℃、工程温度580~900℃。SN-MZ-FR1の推奨添加量は全配合の8~18%です。最終難燃性能は配合・試験条件に応じて確認が必要です。"],
    headers: [onset, ["공정 온도 ℃", "Process temperature ℃", "工程温度 ℃"], hardness, ["pH", "pH", "pH"], particle, bulk, oil, color],
    grades: [
      grade("MZ-FR1", [330, 580, 5, 7.8, 7, 1.72, 16, white]),
      grade("MZ-FR2", [430, 670, 6.3, 7.9, 8, 1.73, 15, white]),
      grade("MZ-FR3", [530, 750, 6.3, 7.0, 8, 1.76, 15, white]),
      grade("MZ-FR4", [700, 900, 6.3, 7.0, 8, 1.76, 15, white]),
    ],
  },
  {
    id: "H", title: ["SN-MZ-H · 내열·방식 코팅용 유리 분말", "SN-MZ-H · Glass Powder for Heat-Resistant & Anticorrosion Coatings", "SN-MZ-H · 耐熱・防食コーティング用ガラス粉末"],
    description: ["실리콘계 코팅, 무기 고온 코팅, 세라믹 코팅 및 실리카졸 코팅에 사용하는 기능성 유리 분말·유리 프릿입니다. 금속·유리·세라믹 기재의 내열·방식 코팅 용도에 맞춰 품번을 선택합니다. SN-MZ-H2는 납 함유 제품이며, SN-MZ-H6의 선팽창계수는 자료에 정확한 수치가 없습니다.", "Functional glass powder / glass frit for silicone, inorganic high-temperature, ceramic and silica-sol coatings. Select a grade for heat-resistant and anticorrosion coatings on metal, glass or ceramic substrates. SN-MZ-H2 contains lead; an exact expansion value is not supplied for SN-MZ-H6.", "シリコーン系、無機高温、セラミック、シリカゾルコーティング用の機能性ガラス粉末・ガラスフリットです。金属・ガラス・セラミック基材の耐熱・防食用途に合わせて選択します。SN-MZ-H2は鉛含有で、SN-MZ-H6の線膨張係数は正確な数値が未記載です。"],
    headers: [onset, thermal, particle, cte, color, ["유효 성분 %", "Active content %", "有効成分 %"], bulk, oil, ["pH", "pH", "pH"], metals, application],
    grades: [
      grade("MZ-H1", [350, 463, 8.5, 130, clear, "≥97.6", 0.61, 15, 7.8, none, ["상업용 조리기구·자동차 배기관", "Commercial cookers / exhaust pipes", "業務用調理器・自動車排気管"]]),
      grade("MZ-H2", [400, 595, 8, 89, yellow, "≥97.6", 1.16, 13, 7.2, lead, ["아연도금관·주철 기재·고온 잉크", "Galvanized pipes / cast iron / high-temperature inks", "亜鉛めっき管・鋳鉄基材・高温インク"]], "lead"),
      grade("MZ-H3", [450, 635, 8, 95, white, "≥97.6", 0.77, 16, 7.8, none, ["보일러 외벽·엔진 보호 코팅", "Boiler exterior / engine protection coatings", "ボイラー外壁・エンジン保護塗料"]]),
      grade("MZ-H4", [500, 655, 8, 93, clear, "≥97.6", 0.80, 16, 7.9, none, ["고온 분체도료·저온 색유약", "High-temperature powder coatings / low-temperature colored glazes", "高温粉体塗料・低温色釉"]]),
      grade("MZ-H5", [550, 765, 8, 80, clear, "≥97.6", 0.66, 16, 7.7, none, ["특수 유리 접착·방식 코팅", "Specialty glass bonding / anticorrosion coatings", "特殊ガラス接着・防食塗膜"]]),
      grade("MZ-H6", [650, 765, 8.5, missing, white, "≥97.6", 0.81, 14, 7.2, none, ["고온 장비 방식", "High-temperature equipment corrosion protection", "高温設備防食"]]),
      grade("MZ-H7", [700, 835, 8, 55, white, "≥97.6", 0.57, 16, 7.5, none, ["특수 고온 유리 잉크", "Specialty high-temperature glass inks", "特殊高温ガラスインク"]]),
      grade("MZ-H8", [900, 1125, 8, 50, clear, "≥97.6", 0.63, 16, 7.2, none, ["산업용 고온로·원전 장비 방식", "Industrial furnaces / nuclear equipment corrosion protection", "工業高温炉・原子力設備防食"]]),
    ],
  },
  {
    id: "E", title: ["SN-MZ-E · 전자 봉착·소결용 유리 프리트", "SN-MZ-E · Sealing Glass Frit for Electronics & Sintering", "SN-MZ-E · 電子封着・焼結用ガラスフリット"],
    description: ["전자 패키징·전자 세라믹 소결·금속 및 세라믹 봉착·전도성 은 페이스트에 사용하는 봉착 유리 프리트(Sealing Glass Frit)입니다. 11개 품번의 용융 개시 온도는 330~1100℃입니다. SN-MZ-E2는 자료에 중금속 함유로 표시되어 있어 무연 제품으로 분류하지 않습니다.", "Sealing glass frit for electronic packaging, electronic ceramic sintering, metal/ceramic joining and conductive silver pastes. Eleven grades cover melt onset from 330 to 1100℃. SN-MZ-E2 is marked as containing heavy metals and is not classified as lead-free.", "電子封装・電子セラミック焼結・金属/セラミック封着・導電性銀ペースト用の封着ガラスフリットです。11品番の溶融開始温度は330~1100℃。SN-MZ-E2は重金属含有と記載されており、無鉛製品には分類しません。"],
    headers: [onset, thermal, cte, ["비중", "Specific gravity", "比重"], ["입도 (mesh)", "Particle size (mesh)", "粒度 (mesh)"], metals, ["내식성", "Corrosion resistance", "耐食性"], color, application],
    grades: [
      grade("MZ-E1", [330, 500, 135, "1.7–1.9", 1500, absent, normal, clear, ["전자 봉착·세라믹 소결", "Electronic packaging / ceramic sintering", "電子封装・セラミック焼結"]]),
      grade("MZ-E2", [400, 550, 99, "4.3–4.5", 1500, heavy, good, clear, ["전자 페이스트·봉착·세라믹 소결", "Electronic pastes / packaging / ceramic sintering", "電子ペースト・封装・セラミック焼結"]], "heavy"),
      grade("MZ-E3", [450, 650, 110, "1.7–1.9", 1500, absent, normal, clear, ["전자 봉착·세라믹 소결", "Electronic packaging / ceramic sintering", "電子封装・セラミック焼結"]]),
      grade("MZ-E4", [450, 650, 101, "1.7–1.9", 2000, absent, normal, clear, ["전자 봉착·세라믹 소결", "Electronic packaging / ceramic sintering", "電子封装・セラミック焼結"]]),
      grade("MZ-E5", [500, 700, 93, "1.7–1.9", 1500, absent, veryGood, clear, ["전자 봉착·세라믹 소결", "Electronic packaging / ceramic sintering", "電子封装・セラミック焼結"]]),
      grade("MZ-E6", [600, 750, 93, "2.9–3.1", 6000, absent, veryGood, ["백색상", "White phase", "白色相"], ["전자 페이스트·봉착·세라믹 소결", "Electronic pastes / packaging / ceramic sintering", "電子ペースト・封装・セラミック焼結"]]),
      grade("MZ-E7", [650, 760, 70, "3.4–3.8", 1500, absent, veryGood, ["황색을 띤 상", "Yellowish phase", "黄味相"], ["전자 페이스트·전자 봉착", "Electronic pastes / packaging", "電子ペースト・電子封装"]]),
      grade("MZ-E8", [650, 800, 85, "2.9–3.1", 3000, absent, normal, ["백색상", "White phase", "白色相"], ["전자 페이스트·봉착·세라믹 소결", "Electronic pastes / packaging / ceramic sintering", "電子ペースト・封装・セラミック焼結"]]),
      grade("MZ-E9", [680, 950, 57, "1.7–1.9", 1500, absent, veryGood, ["고백색", "Ultra-white", "高白色"], ["전자 봉착·전자 세라믹 소결", "Electronic packaging / electronic ceramic sintering", "電子封装・電子セラミック焼結"]]),
      grade("MZ-E10", [950, 1100, 56, "1.7–1.9", 1500, absent, normal, ["백색을 띤 투명상", "Clear with white tint", "白味透明相"], ["전자 봉착·전자 세라믹 소결", "Electronic packaging / electronic ceramic sintering", "電子封装・電子セラミック焼結"]]),
      grade("MZ-E11", [1100, 1300, 52, "1.7–1.9", 1500, absent, normal, ["백색을 띤 투명상", "Clear with white tint", "白味透明相"], ["전자 봉착·전자 세라믹 소결", "Electronic packaging / electronic ceramic sintering", "電子封装・電子セラミック焼結"]]),
    ],
  },
  {
    id: "LC", title: ["SN-MZ-LC · 고온 코팅용 세라믹화 복합 분말", "SN-MZ-LC · Ceramifying Composite Powder for High-Temperature Coatings", "SN-MZ-LC · 高温塗料用セラミック化複合粉末"],
    description: ["서로 다른 용융 온도의 유리 분말에 난연제·특수 판상 분말·방청제 등을 복합 배합한 기능성 분말입니다. 단일 유리 프리트가 아닌 고온 실리콘 코팅용 복합 소재로, 단계적 피막 형성·방식·단열 용도로 선택합니다.", "A functional blend of glass powders with different melt temperatures, flame retardants, specialty plate-like powders and corrosion inhibitors. This is a composite material, not a single glass frit, for staged film formation, corrosion protection and insulation in high-temperature silicone coatings.", "溶融温度の異なるガラス粉末に難燃剤・特殊板状粉末・防錆剤などを複合配合した機能性粉末です。単一ガラスフリットではなく、高温シリコーン塗料で段階的皮膜形成・防食・断熱に用いる複合材です。"],
    headers: [["내열 범위 ℃", "Heat-resistance range ℃", "耐熱範囲 ℃"], onset, particle, ["pH", "pH", "pH"], hardness, oil, ["핵심 특성", "Key property", "主要特性"]],
    grades: [
      grade("MZ-LC1", ["400–600", 500, 7.0, 7.0, 6.3, 19, ["높은 방식성", "High corrosion protection", "高防食性"]]),
      grade("MZ-LC2", ["600–800", 700, 7.0, 7.0, 6.3, 19, ["단계적 피막·산화 방지", "Staged film formation / oxidation protection", "段階的皮膜形成・酸化防止"]]),
      grade("MZ-LC3", ["800–1000", 900, 8.2, 7.0, 6.3, 19, ["내산·내알칼리·내열충격", "Acid / alkali / thermal-shock resistance", "耐酸・耐アルカリ・耐熱衝撃"]]),
      grade("MZ-LC4", ["<1100", 1100, 7.8, 7.0, 6.5, 12, ["노 라이닝 보호", "Furnace lining protection", "炉ライニング保護"]]),
    ],
  },
];

export const GLASS_SOURCE_NOTE: GlassText = [
  "첨부 제품 자료의 품번 앞에 SN-을 붙였습니다. 용융 개시 온도는 연화점·완전 용융 온도·사용 내열 온도와 동일한 값이 아닙니다. *H·E 표의 열 특성 온도는 원문 ‘围棋温度’ 표기를 구분해 옮긴 값이며, 시험 정의 확인이 필요합니다. 밀도·흡유량·선팽창계수의 단위 및 시험 조건이 명확하지 않은 항목은 원문 수치를 그대로 기재했습니다. mesh를 µm 또는 D50으로 환산하지 않았습니다. 인증·환경 적합성·최종 코팅 및 난연 성능은 등급별 시험자료와 실제 공정 시험으로 확인해야 합니다.",
  "SN- has been prefixed to each source grade. Melt onset is not the same as softening, full melting or service temperature. *The H/E thermal reference reproduces the source label ‘围棋温度’; its test definition needs confirmation. Density, oil absorption and expansion values retain the source notation where units or test conditions are unclear. Mesh has not been converted to µm or D50. Certification, environmental compliance and final coating/fire performance require grade-specific documents and process testing.",
  "資料の各品番にSN-を付けました。溶融開始温度は軟化点・完全溶融温度・使用耐熱温度とは異なります。*H・Eの熱特性参考温度は原文‘围棋温度’の値で、試験定義の確認が必要です。密度・吸油量・線膨張係数の単位や試験条件が不明な項目は原文の数値を記載し、meshをµmやD50に換算していません。認証・環境適合性・最終塗膜や難燃性能は品番別資料と実工程試験で確認が必要です。",
];
export const glassCell = (cell: Cell, lang: GlassLang): string => Array.isArray(cell) ? glassText(cell as GlassText, lang) : String(cell);
export const glassCaution = (caution: GlassGrade["caution"], lang: GlassLang): string => caution === "lead"
  ? glassText(["유연 (납 함유)", "Leaded", "有鉛 (鉛含有)"], lang)
  : caution === "heavy" ? glassText(["중금속 함유", "Contains heavy metals", "重金属含有"], lang) : "";