import { ArrowRight, CheckCircle2, Sparkles, FlaskConical, BarChart3, Layers, Droplets, Cpu, Disc3, Paintbrush, Link2, CircuitBoard, Atom, Factory, ShieldCheck } from "lucide-react";
import Prose from "@/components/Prose";
import { Link } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";
import { silicaAlt } from "@/lib/silicaAlt";
import sem100 from "@/assets/syn-sph-sem-100nm.jpg";
import sem150 from "@/assets/syn-sph-sem-150nm.jpg";
import sem400 from "@/assets/syn-sph-sem-400nm.jpg";

const useTri = () => {
  const { lang } = useLang();
  return (ko: string, en: string, ja: string) => (lang === "ja" ? ja : lang === "en" ? en : ko);
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
    {children}
  </span>
);

const InquireButton = () => {
  const { t } = useLang();
  return (
    <Link to="/#contact">
      <Button size="lg" className="h-12 rounded-full bg-primary px-8 text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90">
        {t("pd.inquire")} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  );
};

/* ---------------- Category page: what is chemically synthesized silica ---------------- */
export const SyntheticSilicaIntro = () => {
  const tri = useTri();

  const steps = [
    {
      n: "01",
      title: tri("고순도 전구체 정제", "Purify the Precursor", "高純度前駆体の精製"),
      desc: tri(
        "규소를 함유한 원료 화합물을 증류·정제해 금속 불순물과 방사성 원소를 원료 단계에서 제거합니다.",
        "Silicon-bearing precursor compounds are distilled and purified, removing metallic impurities and radioactive elements at the raw-material stage.",
        "ケイ素を含む原料化合物を蒸留・精製し、金属不純物と放射性元素を原料段階で除去します。",
      ),
    },
    {
      n: "02",
      title: tri("가수분해 · 축합 반응", "Hydrolysis & Condensation", "加水分解・縮合反応"),
      desc: tri(
        "액상에서 전구체를 반응시키면 SiO₂ 핵이 생기고, 그 핵이 사방으로 고르게 자라며 둥근 구형 입자가 됩니다.",
        "Reacting the precursor in the liquid phase creates SiO₂ nuclei that grow evenly in every direction into round, spherical particles.",
        "液相で前駆体を反応させるとSiO₂の核が生まれ、その核が全方向に均一に成長して球状粒子になります。",
      ),
    },
    {
      n: "03",
      title: tri("입경 제어", "Particle Size Control", "粒径制御"),
      desc: tri(
        "농도·온도·반응 시간을 조절해 20 nm부터 2 µm까지 원하는 크기에서 성장을 멈추고, 입경을 좁게 맞춥니다.",
        "Concentration, temperature and reaction time are tuned to stop growth at the target size — anywhere from 20 nm to 2 µm — with a tight distribution.",
        "濃度・温度・反応時間を調整し、20 nmから2 µmまでの目標サイズで成長を止め、粒径を狭く揃えます。",
      ),
    },
    {
      n: "04",
      title: tri("세정 · 건조 · 표면처리", "Wash, Dry & Functionalize", "洗浄・乾燥・表面処理"),
      desc: tri(
        "이온성 불순물을 세정한 뒤 분말 또는 실리카졸로 만들고, 필요에 따라 표면개질·소수화 처리를 더합니다.",
        "Ionic residues are washed out, then the particles are finished as powder or silica sol, with optional surface modification or hydrophobic treatment.",
        "イオン性不純物を洗浄した後、粉末またはシリカゾルに仕上げ、必要に応じて表面改質・疎水化処理を施します。",
      ),
    },
  ];

  const compare = [
    { item: tri("원료", "Raw material", "原料"), syn: tri("정제된 규소 화합물", "Purified silicon compounds", "精製ケイ素化合物"), fused: tri("천연 석영 광석 (용융)", "Natural quartz ore (melted)", "天然石英鉱石(溶融)"), cry: tri("천연 석영 광석 (분쇄)", "Natural quartz ore (ground)", "天然石英鉱石(粉砕)") },
    { item: tri("SiO₂ 순도", "SiO₂ purity", "SiO₂純度"), syn: "≥ 99.99 %", fused: "99.0 ~ 99.9 %", cry: "99.5 ~ 99.9 %" },
    { item: tri("방사성 원소 (U·Th)", "Radioactive elements (U/Th)", "放射性元素 (U・Th)"), syn: tri("ppb 미만 수준", "Sub-ppb", "ppb未満"), fused: tri("원광 의존 · 별도 관리", "Ore-dependent", "原鉱依存"), cry: tri("원광 의존 · 별도 관리", "Ore-dependent", "原鉱依存") },
    { item: tri("형상", "Shape", "形状"), syn: tri("완전 구형 (구상)", "Perfect spheres", "完全球状"), fused: tri("각상 · 구상(화염 처리)", "Angular · spherical (flame)", "角形・球状(火炎処理)"), cry: tri("각상 · 모서리 라운드", "Angular · round-corner", "角形・丸角") },
    { item: tri("입경 범위", "Particle size", "粒径範囲"), syn: "20 nm ~ 2 µm", fused: tri("µm ~ mm", "µm – mm", "µm ~ mm"), cry: tri("µm ~ mm", "µm – mm", "µm ~ mm") },
  ];

  return (
    <>
      <section className="border-t border-border bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>WHAT IS SYNTHETIC SILICA</Eyebrow>
          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            🧬 {tri("화학합성 실리카란?", "What Is Chemically Synthesized Silica?", "化学合成シリカとは?")}
          </h2>
          <Prose className="mt-4 max-w-3xl text-muted-foreground">
            {tri(
              "천연 광석을 깎고 녹여 만드는 실리카와 달리, 화학합성 실리카는 분자 단위의 원료에서 입자를 한 알씩 키워 냅니다. 그래서 순도·크기·모양을 처음부터 설계할 수 있습니다.",
              "Unlike silica made by grinding or melting natural ore, synthetic silica is grown particle by particle from molecular-level raw materials — so purity, size and shape can be designed from the start.",
              "天然鉱石を削り溶かして作るシリカと異なり、化学合成シリカは分子単位の原料から粒子を一つずつ成長させます。そのため純度・サイズ・形状を最初から設計できます。",
            )}
          </Prose>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
                <div className="font-mono text-3xl font-bold text-primary/30">{s.n}</div>
                <h3 className="mt-2 text-base font-bold">{s.title}</h3>
                <Prose className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</Prose>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Eyebrow>WHY SYNTHETIC</Eyebrow>
            <h2 className="mt-6 text-3xl font-bold">{tri("왜 화학합성인가", "Why Synthetic", "なぜ化学合成か")}</h2>
            <ul className="mt-6 space-y-4">
              {[
                { icon: ShieldCheck, t: tri("초고순도 · 초저방사선", "Ultra-pure, ultra-low-α", "超高純度・超低放射線"), d: tri("광석 유래 불순물이 없어 첨단 반도체 메모리의 소프트 에러 원인을 줄입니다.", "No ore-derived impurities, reducing a key cause of soft errors in advanced memory.", "鉱石由来の不純物がなく、先端メモリのソフトエラー要因を低減します。") },
                { icon: Atom, t: tri("완전 구형 · 균일 입경", "Perfect, uniform spheres", "完全球状・均一粒径"), d: tri("입자가 매끄럽게 굴러 수지에 많이 넣어도 점도가 낮게 유지됩니다.", "Spheres roll past each other, keeping viscosity low even at high loading.", "粒子が滑らかに転がり、樹脂に高充填しても粘度を低く保ちます。") },
                { icon: Factory, t: tri("용도 맞춤 설계", "Designed for your use", "用途に合わせた設計"), d: tri("입경·표면처리·분말/졸 형태를 고객 공정에 맞춰 생산합니다.", "Size, surface treatment and powder/sol form are produced to fit your process.", "粒径・表面処理・粉末/ゾル形態をお客様の工程に合わせて生産します。") },
              ].map((r) => (
                <li key={r.t} className="flex gap-3">
                  <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-semibold">{r.t}</div>
                    <Prose className="mt-1 text-sm text-muted-foreground">{r.d}</Prose>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="border-b border-border bg-primary/5 px-6 py-4">
                <h3 className="text-lg font-bold">⚖️ {tri("천연 기반 실리카와 비교", "Compared with Ore-Based Silica", "天然系シリカとの比較")}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-foreground text-background">
                      <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider">{tri("항목", "Item", "項目")}</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider">{tri("화학합성 실리카", "Synthetic", "化学合成")}</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider">{tri("용융실리카", "Fused", "溶融")}</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider">{tri("결정질 실리카", "Crystalline", "結晶質")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {compare.map((r) => (
                      <tr key={r.item} className="transition hover:bg-secondary/40">
                        <td className="px-4 py-3 font-medium">{r.item}</td>
                        <td className="px-4 py-3 font-semibold text-primary">{r.syn}</td>
                        <td className="px-4 py-3 text-muted-foreground">{r.fused}</td>
                        <td className="px-4 py-3 text-muted-foreground">{r.cry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Prose className="mt-3 text-xs text-muted-foreground">
              {tri("※ 비교 값은 일반적인 범위이며, 제품·등급에 따라 다를 수 있습니다.", "* Typical ranges; actual values vary by product and grade.", "※ 一般的な範囲であり、製品・グレードにより異なります。")}
            </Prose>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <InquireButton />
        </div>
      </section>
    </>
  );
};

/* ---------------- Product page: overview badges ---------------- */
export const SynSphBadges = () => {
  const tri = useTri();
  const items = [
    "SiO₂ ≥ 99.995%",
    tri("구상화율 ≥ 99%", "Spheroidization ≥ 99%", "球状化率 ≥ 99%"),
    "U · Th < 0.1 ppb",
    "D50 20 nm ~ 2 µm",
    "EC < 1.0 µS/cm",
    tri("표면개질 가능", "Surface-modifiable", "表面改質対応"),
  ];
  return (
    <div className="mt-8 grid grid-cols-2 gap-3">
      {items.map((b) => (
        <div key={b} className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-3 py-2.5 text-xs font-medium text-foreground">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
          {b}
        </div>
      ))}
    </div>
  );
};

/* ---------------- Product page: SEM gallery (all 3 photos) ---------------- */
export const SynSphSemGallery = () => {
  const tri = useTri();
  const shots = [
    {
      img: sem100,
      size: "100 nm",
      title: tri("초미세 · 최밀 충전", "Ultrafine · Close Packing", "超微細・最密充填"),
      desc: tri(
        "입경이 고르게 맞춰져 입자들이 벌집처럼 촘촘히 정렬됩니다. CMP 연마·나노 코팅·전자급 실리카졸 원료에 적합합니다.",
        "Sizes are so evenly matched that particles line up in a tight honeycomb. Suited to CMP polishing, nano coatings and electronic-grade silica sol.",
        "粒径が均一に揃い、粒子がハニカム状に密に整列します。CMP研磨・ナノコーティング・電子グレードシリカゾル原料に適しています。",
      ),
    },
    {
      img: sem150,
      size: "150 nm",
      title: tri("개별 분산 · 완전 구형", "Discrete · Perfectly Round", "個別分散・完全球状"),
      desc: tri(
        "한 알 한 알이 응집 없이 떨어져 있는 완전한 구형 입자입니다. 수지·용제 안에서 고르게 퍼져 분산성이 뛰어납니다.",
        "Each particle is a perfect sphere standing apart without agglomeration, spreading evenly through resins and solvents.",
        "一粒一粒が凝集せず離れた完全な球状粒子です。樹脂・溶剤中で均一に広がり分散性に優れます。",
      ),
    },
    {
      img: sem400,
      size: "400 nm",
      title: tri("서브미크론 구상 필러", "Submicron Spherical Filler", "サブミクロン球状フィラー"),
      desc: tri(
        "매끄러운 표면과 균일한 크기로 반도체 EMC·언더필·저유전 기판 등 고충전 배합에서도 낮은 점도를 유지합니다.",
        "Smooth surfaces and uniform size keep viscosity low in high-loading formulations such as semiconductor EMC, underfill and low-Dk substrates.",
        "滑らかな表面と均一なサイズで、半導体EMC・アンダーフィル・低誘電基板など高充填配合でも低粘度を維持します。",
      ),
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
      <Eyebrow>SEM IMAGES · PARTICLE SIZE LINEUP</Eyebrow>
      <h2 className="mt-6 text-3xl font-bold md:text-4xl">
        🔬 {tri("입경별 전자현미경(SEM) 이미지", "SEM Images by Particle Size", "粒径別 電子顕微鏡(SEM)画像")}
      </h2>
      <Prose className="mt-4 max-w-3xl text-muted-foreground">
        {tri(
          "같은 합성 공법으로 100 nm · 150 nm · 400 nm 입자를 만든 실제 SEM 사진입니다. 크기가 달라져도 구형과 균일함이 그대로 유지되며, 20 nm~2 µm 범위에서 원하는 입경으로 생산할 수 있습니다.",
          "Actual SEM photos of 100 nm, 150 nm and 400 nm particles made with the same synthesis route. Shape and uniformity hold at every size, and any D50 from 20 nm to 2 µm can be produced.",
          "同一の合成工法で製造した100 nm・150 nm・400 nm粒子の実際のSEM写真です。サイズが変わっても球状と均一性が保たれ、20 nm~2 µmの範囲で任意の粒径を生産できます。",
        )}
      </Prose>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {shots.map((s) => (
          <figure key={s.size} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]">
            <div className="relative aspect-square overflow-hidden bg-foreground">
              <img
                src={s.img}
                alt={silicaAlt(`합성 구형 실리카 SEM ${s.size}`)}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 font-mono text-sm font-bold text-primary-foreground shadow">
                D50 ≈ {s.size}
              </span>
            </div>
            <figcaption className="p-6">
              <h3 className="text-lg font-bold">{s.title}</h3>
              <Prose className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</Prose>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* size scale */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center justify-between text-xs font-semibold tracking-widest text-muted-foreground">
          <span>20 nm</span>
          <span>{tri("맞춤 입경 범위", "Customizable range", "カスタム粒径範囲")}</span>
          <span>2 µm</span>
        </div>
        <div className="relative mt-3 h-3 rounded-full bg-gradient-to-r from-primary/20 via-primary/50 to-primary">
          {[
            { label: "100 nm", pos: "23%" },
            { label: "150 nm", pos: "31%" },
            { label: "400 nm", pos: "54%" },
          ].map((m) => (
            <div key={m.label} className="absolute -top-1.5 -translate-x-1/2" style={{ left: m.pos }}>
              <div className="h-6 w-6 rounded-full border-4 border-card bg-primary shadow" />
              <div className="mt-1 whitespace-nowrap text-center font-mono text-[11px] font-semibold text-primary">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="h-6" />
      </div>
    </section>
  );
};

/* ---------------- Product page: detailed technical profile ---------------- */
export const SynSphTechProfile = () => {
  const tri = useTri();

  const stats = [
    { icon: "🧪", title: tri("SiO₂ 순도", "SiO₂ Purity", "SiO₂純度"), value: "≥ 99.995", unit: "%", note: tri("화학합성 초고순도 (4N5 이상)", "Chemically synthesized, 4N5+", "化学合成 超高純度(4N5以上)") },
    { icon: "🔵", title: tri("구상화율 · 구형도", "Spheroidization · Sphericity", "球状化率・球形度"), value: "≥ 99.0", unit: "%", note: tri("응집 없는 완전 구형 입자", "Perfect, non-agglomerated spheres", "凝集のない完全球状粒子") },
    { icon: "☢️", title: tri("방사성 원소", "Radioactive Elements", "放射性元素"), value: "< 0.1", unit: "ppb", note: tri("U · Th 각각 — 초저방사선", "U and Th each — ultra-low-α", "U・Thそれぞれ — 超低放射線") },
    { icon: "📐", title: tri("입경 (D50)", "Particle Size (D50)", "粒径 (D50)"), value: "20 nm–2", unit: "µm", note: tri("고객 맞춤 생산", "Produced to order", "カスタム生産") },
  ];

  const tds = [
    { item: tri("순도 SiO₂", "Purity SiO₂", "純度 SiO₂"), val: "≥ 99.995 %" },
    { item: tri("구상화율 (Spheroidization)", "Spheroidization", "球状化率"), val: "≥ 99.0 %" },
    { item: tri("입경 (D50)", "Particle Size (D50)", "粒径 (D50)"), val: "20 nm ~ 2 µm" },
    { item: tri("전기전도도", "Electrical Conductivity", "電気伝導率"), val: "< 1.0 µS/cm" },
    { item: tri("구형도 (Sphericity)", "Sphericity", "球形度"), val: "≥ 99.0 %" },
    { item: tri("방사성 원소", "Radioactive Elements", "放射性元素"), val: "U < 0.1 ppb · Th < 0.1 ppb" },
    { item: tri("표면개질", "Surface Modification", "表面改質"), val: tri("아미노기 · 메르캅토기 개질 가능 / 소수화 처리 시 접촉각 150° 이상", "Amino / mercapto modification available · hydrophobic treatment, contact angle above 150°", "アミノ基・メルカプト基改質可 / 疎水化処理で接触角150°以上") },
  ];

  const profile = [
    {
      icon: Sparkles,
      tag: "01",
      title: tri("구형(구상) 품질", "Spherical Quality", "球状品質"),
      intro: tri(
        "구상화율과 구형도를 모두 99.0% 이상으로 관리해, 입자 하나하나가 거의 완벽한 공 모양을 이룹니다.",
        "Spheroidization and sphericity are both held at ≥99.0%, so every particle is an almost perfect ball.",
        "球状化率と球形度をともに99.0%以上で管理し、一粒一粒がほぼ完璧な球形です。",
      ),
      points: [
        tri("구상화율 ≥ 99.0 % · 구형도 ≥ 99.0 %", "Spheroidization ≥99.0% · sphericity ≥99.0%", "球状化率 ≥99.0 % · 球形度 ≥99.0 %"),
        tri("입자끼리 매끄럽게 미끄러져 고충전해도 점도 상승이 적음", "Particles glide past each other — little viscosity rise even at high loading", "粒子同士が滑らかに動き、高充填でも粘度上昇が小さい"),
        tri("모서리가 없어 장비 마모·칩 손상 위험 감소", "No sharp edges — less equipment wear and chip damage", "角がなく設備摩耗・チップ損傷リスクを低減"),
        tri("균일한 형상으로 배합 결과의 재현성 향상", "Uniform shape gives reproducible formulations", "均一な形状で配合結果の再現性が向上"),
      ],
    },
    {
      icon: FlaskConical,
      tag: "02",
      title: tri("초고순도 · 초저방사선", "Ultra-High Purity · Ultra-Low-α", "超高純度・超低放射線"),
      intro: tri(
        "정제된 전구체에서 합성해 SiO₂ 99.995% 이상, 우라늄·토륨 0.1 ppb 미만을 동시에 달성합니다.",
        "Synthesis from purified precursors delivers SiO₂ ≥99.995% together with U and Th below 0.1 ppb.",
        "精製前駆体から合成し、SiO₂ 99.995%以上とU・Th 0.1 ppb未満を同時に実現します。",
      ),
      points: [
        tri("SiO₂ ≥ 99.995 %", "SiO₂ ≥99.995%", "SiO₂ ≥ 99.995 %"),
        tri("U < 0.1 ppb · Th < 0.1 ppb — 알파선 방출 극소화", "U <0.1 ppb · Th <0.1 ppb — minimal alpha emission", "U < 0.1 ppb · Th < 0.1 ppb — α線放出を極小化"),
        tri("HBM · DDR5 · AI 반도체 패키지의 소프트 에러 억제", "Suppresses soft errors in HBM, DDR5 and AI chip packages", "HBM・DDR5・AI半導体パッケージのソフトエラーを抑制"),
        tri("전기전도도 < 1.0 µS/cm — 이온 마이그레이션·부식 위험 저감", "Conductivity <1.0 µS/cm — lower ion-migration and corrosion risk", "電気伝導率 <1.0 µS/cm — イオンマイグレーション・腐食リスクを低減"),
      ],
    },
    {
      icon: BarChart3,
      tag: "03",
      title: tri("나노~서브미크론 입경 설계", "Nano-to-Submicron Size Design", "ナノ~サブミクロン粒径設計"),
      intro: tri(
        "합성 조건을 조절해 D50 20 nm부터 2 µm까지 목표 입경으로 생산하며, 입경 분포를 좁게 유지합니다.",
        "Synthesis conditions are tuned to hit any target D50 from 20 nm to 2 µm while keeping the distribution narrow.",
        "合成条件を調整しD50 20 nmから2 µmまで目標粒径で生産し、粒度分布を狭く保ちます。",
      ),
      points: [
        tri("D50 20 nm ~ 2 µm 고객 맞춤 생산", "Custom D50 from 20 nm to 2 µm", "D50 20 nm ~ 2 µm カスタム生産"),
        tri("대표 SEM 확인 입경: 100 nm · 150 nm · 400 nm", "SEM-verified examples: 100 nm, 150 nm, 400 nm", "SEM確認例: 100 nm · 150 nm · 400 nm"),
        tri("미세 갭 충진 · 박막 코팅에 유리한 나노 입경", "Nano sizes for fine-gap filling and thin coatings", "微細ギャップ充填・薄膜コーティングに有利なナノ粒径"),
        tri("서로 다른 입경을 섞어 충전 밀도를 높이는 배합 설계 지원", "Supports blending sizes to raise packing density", "異なる粒径の混合で充填密度を高める配合設計を支援"),
      ],
    },
    {
      icon: Layers,
      tag: "04",
      title: tri("표면개질 · 기능화", "Surface Modification", "表面改質・機能化"),
      intro: tri(
        "용도에 맞춰 입자 표면에 기능기를 붙이거나 물을 밀어내는 소수성 표면으로 바꿀 수 있습니다.",
        "Functional groups can be attached to the surface, or it can be made water-repellent, to suit each application.",
        "用途に合わせて粒子表面に官能基を付与したり、撥水性の疎水表面に変えたりできます。",
      ),
      points: [
        tri("아미노기(-NH₂) 개질 — 에폭시 등 수지와의 결합력 향상", "Amino (-NH₂) modification — stronger bonding with epoxy and other resins", "アミノ基(-NH₂)改質 — エポキシ等樹脂との結合力向上"),
        tri("메르캅토기(-SH) 개질 — 고무·금속 계면 접착 개선", "Mercapto (-SH) modification — better rubber/metal interface adhesion", "メルカプト基(-SH)改質 — ゴム・金属界面の接着改善"),
        tri("소수화 처리 — 접촉각 150° 이상의 초발수 표면", "Hydrophobic treatment — super-repellent surface, contact angle >150°", "疎水化処理 — 接触角150°以上の超撥水表面"),
        tri("흡습 억제로 보관·배합 안정성 확보", "Lower moisture uptake for stable storage and compounding", "吸湿抑制で保管・配合安定性を確保"),
      ],
    },
  ];

  const apps = [
    { icon: Cpu, ko: "반도체 EMC · 언더필", en: "Semiconductor EMC · Underfill", ja: "半導体EMC・アンダーフィル", dko: "저방사선 고충전 필러로 HBM·AI 반도체 패키지 신뢰성 향상", den: "Low-α, high-loading filler for reliable HBM and AI chip packages", dja: "低α線・高充填フィラーでHBM・AI半導体パッケージの信頼性向上" },
    { icon: Disc3, ko: "CMP 연마 슬러리", en: "CMP Polishing Slurry", ja: "CMP研磨スラリー", dko: "균일한 나노 구형 입자로 스크래치 없는 정밀 평탄화", den: "Uniform nano spheres for scratch-free precision planarization", dja: "均一なナノ球状粒子でスクラッチのない精密平坦化" },
    { icon: Paintbrush, ko: "도료 · 정밀 코팅", en: "Coatings · Precision Coating", ja: "塗料・精密コーティング", dko: "투명성·내스크래치성·초발수 기능 부여", den: "Adds transparency, scratch resistance and super-hydrophobicity", dja: "透明性・耐スクラッチ性・超撥水機能を付与" },
    { icon: Link2, ko: "수지 하이브리드 · 복합재", en: "Resin Hybrids · Composites", ja: "樹脂ハイブリッド・複合材", dko: "표면개질 입자로 유·무기 하이브리드 소재의 강도와 내열성 향상", den: "Surface-modified particles raise strength and heat resistance of hybrids", dja: "表面改質粒子で有機・無機ハイブリッド材の強度と耐熱性を向上" },
    { icon: CircuitBoard, ko: "저유전 CCL / PCB", en: "Low-Dk CCL / PCB", ja: "低誘電CCL / PCB", dko: "고순도·저이온 필러로 고주파 기판의 전기 특성 안정화", den: "High-purity, low-ion filler stabilizes high-frequency boards", dja: "高純度・低イオンフィラーで高周波基板の電気特性を安定化" },
    { icon: Droplets, ko: "전자급 실리카졸", en: "Electronic-Grade Silica Sol", ja: "電子グレードシリカゾル", dko: "6N급 수계 · 맞춤 용제형 콜로이달 실리카로 공급", den: "Supplied as 6N water-based or custom-solvent colloidal silica", dja: "6N級の水系・カスタム溶剤系コロイダルシリカとして供給" },
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Eyebrow>TECHNICAL DEEP-DIVE · SYNTHETIC SPHERICAL SILICA</Eyebrow>
        <h2 className="mt-6 text-3xl font-bold md:text-4xl">🔍 {tri("상세 기술 프로파일", "Detailed Technical Profile", "詳細技術プロファイル")}</h2>
        <Prose className="mt-4 max-w-3xl text-muted-foreground">
          {tri(
            "합성 구형 실리카의 핵심 품질 지표를 TDS 기준으로 정리했습니다. 구형 품질, 순도와 방사선, 입경 설계, 표면개질까지 한눈에 확인하세요.",
            "Key quality indicators of Synthetic Spherical Silica, organized from the TDS — spherical quality, purity and radioactivity, size design and surface modification at a glance.",
            "合成球状シリカの主要品質指標をTDS基準で整理しました。球状品質、純度と放射線、粒径設計、表面改質まで一目で確認できます。",
          )}
        </Prose>

        {/* Stat cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((c) => (
            <div key={c.title} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative">
                <div className="text-2xl">{c.icon}</div>
                <div className="mt-2 text-xs font-semibold tracking-widest text-muted-foreground">{c.title}</div>
                <div className="mt-1 text-3xl font-bold text-primary" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {c.value} <span className="text-sm font-medium text-muted-foreground">{c.unit}</span>
                </div>
                <Prose className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.note}</Prose>
              </div>
            </div>
          ))}
        </div>

        {/* TDS table + featured SEM */}
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:col-span-3">
            <div className="border-b border-border bg-primary/5 px-6 py-4">
              <h3 className="text-lg font-bold">📋 {tri("검사 항목 · 대표값 (TDS)", "Test Items · Typical Values (TDS)", "検査項目・代表値 (TDS)")}</h3>
            </div>
            <table className="w-full text-sm" style={{ fontVariantNumeric: "tabular-nums" }}>
              <thead>
                <tr className="bg-foreground text-background">
                  <th className="w-2/5 px-6 py-3 text-left text-xs font-semibold tracking-[0.2em]">{tri("검사 항목", "Test Item", "検査項目")}</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold tracking-[0.2em]">{tri("대표값", "Typical Value", "代表値")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {tds.map((r, i) => (
                  <tr key={r.item} className={`transition hover:bg-secondary/40 ${i % 2 ? "bg-secondary/20" : ""}`}>
                    <td className="px-6 py-3 font-medium">{r.item}</td>
                    <td className="px-6 py-3 font-semibold text-primary">{r.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
              <img src={sem150} alt={silicaAlt("합성 구형 실리카 150nm SEM 확대")} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 font-mono text-xs font-semibold text-foreground backdrop-blur">SEM · 150 nm</span>
            </div>
            <div className="p-6">
              <h4 className="font-bold">{tri("응집 없는 개별 구형 입자", "Discrete, non-agglomerated spheres", "凝集のない個別の球状粒子")}</h4>
              <Prose className="mt-2 text-sm text-muted-foreground">
                {tri(
                  "입자 크기가 고르고 서로 엉겨 붙지 않아, 수지·용제에 넣었을 때 균일하게 퍼집니다.",
                  "Even sizes and no clumping mean particles spread uniformly in resins and solvents.",
                  "粒子サイズが揃い互いに凝集しないため、樹脂・溶剤中で均一に広がります。",
                )}
              </Prose>
            </div>
          </div>
        </div>

        {/* Numbered profile cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {profile.map((c) => (
            <div key={c.tag} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 border-b border-border bg-secondary/30 px-6 py-4">
                <c.icon className="h-5 w-5 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">{c.tag}</span>
                <h3 className="font-bold">{c.title}</h3>
              </div>
              <div className="p-6">
                <Prose className="text-sm text-muted-foreground">{c.intro}</Prose>
                <ul className="mt-4 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 6N silica sol callout */}
        <div className="mt-10 grid items-center gap-6 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 md:grid-cols-[auto_1fr] md:p-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
            <Droplets className="h-8 w-8" />
          </div>
          <div>
            <div className="text-xs font-semibold tracking-[0.3em] text-primary">ELECTRONIC-GRADE SILICA SOL · 6N</div>
            <h3 className="mt-2 text-2xl font-bold">{tri("전자급 실리카졸(6N급)로도 공급합니다", "Also Available as Electronic-Grade 6N Silica Sol", "電子グレードシリカゾル(6N級)でも供給します")}</h3>
            <Prose className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {tri(
                "고객 요청에 따라 합성 구형 실리카를 액상의 실리카졸 형태로 생산합니다. 수계(水系)와 고객 공정에 맞춘 용제형 두 가지로 공급하며, CMP 연마·도료·수지 하이브리드 등에 바로 투입할 수 있습니다.",
                "On request, the particles are produced as liquid silica sol — water-based or in a solvent matched to your process — ready to use in CMP polishing, coatings and resin hybrids.",
                "ご要望に応じて合成球状シリカを液状のシリカゾルとして生産します。水系とお客様の工程に合わせた溶剤系の2種で供給し、CMP研磨・塗料・樹脂ハイブリッドなどにそのまま投入できます。",
              )}
            </Prose>
            <div className="mt-4 flex flex-wrap gap-2">
              {[tri("수계형", "Water-based", "水系"), tri("맞춤 용제형", "Custom solvent", "カスタム溶剤系"), "CMP", tri("도료", "Coatings", "塗料"), tri("수지 하이브리드", "Resin hybrid", "樹脂ハイブリッド")].map((t) => (
                <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="bg-secondary/40 py-20 md:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Eyebrow>APPLICATIONS</Eyebrow>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">🎯 {tri("주요 응용 분야", "Key Applications", "主な応用分野")}</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((a) => (
              <div key={a.en} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{tri(a.ko, a.en, a.ja)}</h3>
                <Prose className="mt-2 text-sm text-muted-foreground">{tri(a.dko, a.den, a.dja)}</Prose>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <InquireButton />
          </div>
        </div>
      </section>
    </>
  );
};
