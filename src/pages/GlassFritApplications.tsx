import { Link } from "@/lib/router";
import Prose from "@/components/Prose";
import { Sparkles, CheckCircle2, Layers, Flame, Snowflake, ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";
import heroImg from "@/assets/lead-free-glass-powder.jpg";
import sealingImg from "@/assets/frit-sealing-bonding.jpg";
import fireImg from "@/assets/frit-battery-fire.jpg";
import heatImg from "@/assets/frit-heat-coating.jpg";
import elecImg from "@/assets/frit-electronics.jpg";

const range = (p: string, n: number) => Array.from({ length: n }, (_, i) => `SN-MZ-${p}${i + 1}`);

const GlassFritApplications = () => {
  const { lang } = useLang();
  const t = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const steps = [
    { icon: Layers, title: t("① 혼합 · 도포", "① Mix & apply", "① 混合・塗布"), desc: t("유리 프리트 분말을 도료·접착제·페이스트에 섞어 바르거나 인쇄합니다.", "Glass frit powder is blended into coatings, adhesives or pastes and applied or printed.", "ガラスフリット粉末を塗料・接着剤・ペーストに混ぜて塗布・印刷します。") },
    { icon: Flame, title: t("② 가열 · 용융", "② Heat & melt", "② 加熱・溶融"), desc: t("제품별 온도(약 300~1,100℃)에 도달하면 입자가 부드러워지며 서로 붙습니다.", "At each grade's temperature (about 300–1,100 °C) particles soften and fuse together.", "製品ごとの温度(約300~1,100℃)で粒子が軟化し、互いに結合します。") },
    { icon: Snowflake, title: t("③ 냉각 · 유리막 형성", "③ Cool & form glass", "③ 冷却・ガラス膜形成"), desc: t("식으면서 단단하고 치밀한 유리질 막이나 접합층이 남습니다.", "On cooling a hard, dense glassy film or bonding layer remains.", "冷えると硬く緻密なガラス質膜・接合層が残ります。") },
    { icon: ShieldCheck, title: t("④ 기능 발휘", "④ Performance", "④ 機能発現"), desc: t("내열·밀봉·방청·방염·절연 기능으로 부품과 소재를 보호합니다.", "The layer protects parts with heat resistance, sealing, anti-corrosion, flame retardance and insulation.", "耐熱・封着・防錆・難燃・絶縁機能で部品と素材を守ります。") },
  ];

  const series = [
    {
      code: "SN-MZ-G", img: sealingImg, grades: range("G", 8),
      title: t("G 시리즈 — 범용 저융점 유리 프리트 (8종)", "G Series — General Low-Melting Glass Frit (8 grades)", "Gシリーズ — 汎用低融点ガラスフリット(8種)"),
      alt: t("유리 프리트 분말과 세라믹 접합 유리층", "Glass frit powder and a ceramic tile bonded with a glassy layer", "ガラスフリット粉末とセラミック接合ガラス層"),
      desc: t(
        "326℃부터 900℃까지 용융 시작 온도가 단계별로 나뉜 백색 미세 분말입니다. 공정 온도에 맞춰 등급을 고르면 유리·세라믹·금속을 붙이거나 표면에 얇은 유리막을 만들 수 있습니다. 평균 입경은 약 6~8㎛로 도료·접착제 안에서 고르게 퍼집니다.",
        "White fine powders with onset melting temperatures stepped from 326 °C to 900 °C. Choose the grade that matches your firing temperature to bond glass, ceramics and metals or to form a thin glassy surface film. Average particle size of about 6–8 µm disperses evenly in coatings and adhesives.",
        "溶融開始温度が326℃から900℃まで段階的に分かれた白色微粉末です。工程温度に合わせて選ぶことで、ガラス・セラミック・金属の接合や表面ガラス膜の形成に使えます。平均粒径約6~8µmで塗料・接着剤中に均一に分散します。"
      ),
      items: [
        t("유리 · 세라믹 저온 접합 및 밀봉", "Low-temperature glass & ceramic bonding and sealing", "ガラス・セラミックの低温接合・封着"),
        t("무기 내열 코팅 · 유리질 보호막", "Inorganic heat-resistant coatings & glassy films", "無機耐熱コーティング・ガラス質保護膜"),
        t("고온용 접착제의 기능성 충전재", "Functional filler for high-temperature adhesives", "高温接着剤の機能性フィラー"),
        t("열팽창 조절이 필요한 복합재료", "Composites needing CTE adjustment", "熱膨張調整が必要な複合材料"),
      ],
    },
    {
      code: "SN-MZ-FR", img: fireImg, grades: range("FR", 4),
      title: t("FR 시리즈 — 세라믹화 난연 분말 (4종)", "FR Series — Ceramifying Flame-Retardant Powder (4 grades)", "FRシリーズ — セラミック化難燃粉末(4種)"),
      alt: t("전기차 배터리 팩과 내화 케이블", "EV battery pack and fire-resistant cables", "EVバッテリーパックと耐火ケーブル"),
      desc: t(
        "불이나 고온을 만나면 녹아서 단단한 세라믹 보호층으로 바뀌는 분말입니다. 고무·플라스틱·실리콘에 섞어 두면 화재 시 재가 흘러내리지 않고 형태를 유지해 불길과 열이 퍼지는 것을 늦춰 줍니다.",
        "A powder that melts into a hard ceramic shield when exposed to fire or high heat. Blended into rubber, plastics or silicone, it keeps the material's shape during a fire instead of crumbling, slowing the spread of flame and heat.",
        "火や高温に触れると溶けて硬いセラミック保護層へ変化する粉末です。ゴム・プラスチック・シリコーンに配合すると、火災時に形状を保ち炎と熱の広がりを遅らせます。"
      ),
      items: [
        t("전기차 · ESS 배터리 방화 패드 및 시트", "EV & ESS battery fire-barrier pads and sheets", "EV・ESSバッテリー防火パッド・シート"),
        t("내화 전선 · 케이블 피복", "Fire-resistant wire & cable sheathing", "耐火電線・ケーブル被覆"),
        t("세라믹화 실리콘 고무", "Ceramifiable silicone rubber", "セラミック化シリコーンゴム"),
        t("난연 플라스틱 · 방화 실란트", "Flame-retardant plastics & fire sealants", "難燃プラスチック・防火シーラント"),
      ],
    },
    {
      code: "SN-MZ-H · LC", img: heatImg, grades: [...range("H", 8), ...range("LC", 4)],
      title: t("H · LC 시리즈 — 고온 내열 · 방청 코팅 (12종)", "H · LC Series — High-Temperature & Anti-Corrosion Coatings (12 grades)", "H・LCシリーズ — 高温耐熱・防錆コーティング(12種)"),
      alt: t("유리질 내열 코팅이 된 고온 배관과 로", "Furnace and pipes with glassy heat-resistant coating", "ガラス質耐熱コーティングを施した高温配管と炉"),
      desc: t(
        "H 시리즈는 내열 도료에 넣어 금속 표면에 단단한 유리막을 만들고, 산·알칼리와 고온 부식으로부터 보호합니다. LC 시리즈는 400℃부터 1,100℃급까지 온도 구간별로 나뉜 복합 분말로, 방청·방염·내화 기능을 한 번에 더해 줍니다.",
        "H Series grades go into heat-resistant paints to form a hard glass film on metal, protecting it from acids, alkalis and high-temperature corrosion. LC Series composite powders, split by temperature band from 400 °C up to the 1,100 °C class, add anti-rust, flame and fire protection in one step.",
        "Hシリーズは耐熱塗料に配合して金属表面に硬いガラス膜を形成し、酸・アルカリや高温腐食から守ります。LCシリーズは400℃から1,100℃級まで温度帯別の複合粉末で、防錆・難燃・耐火機能を一度に付与します。"
      ),
      items: [
        t("배기관 · 소각로 · 보일러 내열 도료", "Heat-resistant paints for exhausts, incinerators and boilers", "排気管・焼却炉・ボイラー用耐熱塗料"),
        t("철강 구조물 고온 방청 코팅", "High-temperature anti-rust coatings for steel", "鉄鋼構造物の高温防錆コーティング"),
        t("내산 · 내알칼리 표면 보호", "Acid- and alkali-resistant surface protection", "耐酸・耐アルカリ表面保護"),
        t("방화 · 내화 도료", "Fireproof and refractory coatings", "防火・耐火塗料"),
      ],
    },
    {
      code: "SN-MZ-E", img: elecImg, grades: range("E", 11),
      title: t("E 시리즈 — 전자재료용 유리 프리트 (11종)", "E Series — Electronic-Grade Glass Frit (11 grades)", "Eシリーズ — 電子材料用ガラスフリット(11種)"),
      alt: t("세라믹 기판 위 은 페이스트 전극", "Silver paste electrodes on a ceramic substrate", "セラミック基板上の銀ペースト電極"),
      desc: t(
        "330℃부터 1,100℃까지 11단계로 나뉜 전자 소재용 등급입니다. 은 페이스트 안에서 전극을 기판에 단단히 붙여 주는 결합제 역할을 하고, 전자 부품을 밀봉하거나 세라믹과 금속을 접합합니다. 등급마다 열팽창계수가 달라 기판에 맞춰 선택합니다.",
        "Electronic grades stepped in 11 levels from 330 °C to 1,100 °C. Inside silver paste the frit binds the electrode firmly to the substrate, and it also seals electronic components and joins ceramics to metals. Each grade has a different CTE so it can be matched to the substrate.",
        "330℃から1,100℃まで11段階に分かれた電子材料用グレードです。銀ペースト中で電極を基板に固着させる結合材として働き、電子部品の封着やセラミックと金属の接合にも使われます。グレードごとに熱膨張係数が異なり、基板に合わせて選択します。"
      ),
      items: [
        t("전도성 은 페이스트 · 전극 소성", "Conductive silver paste & electrode firing", "導電性銀ペースト・電極焼成"),
        t("후막 회로 · 전자 세라믹", "Thick-film circuits & electronic ceramics", "厚膜回路・電子セラミック"),
        t("센서 · 소자 기밀 밀봉", "Hermetic sealing of sensors and devices", "センサ・素子の気密封着"),
        t("세라믹-금속 접합", "Ceramic-to-metal joining", "セラミック-金属接合"),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <Link to="/#applications" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              ← {t("응용 분야", "Applications", "用途分野")}
            </Link>
            <span className="mt-6 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              LEAD-FREE GLASS FRIT · APPLICATIONS
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {t("무연 유리 프리트 응용 분야", "Lead-Free Glass Frit Applications", "無鉛ガラスフリット用途分野")}
            </h1>
            <Prose className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t(
                "유리 프리트(유리 분말)는 일반 유리보다 낮은 온도에서 녹는 무기질 미세 분말입니다. 가열하면 녹아서 서로 붙고, 식으면 단단한 유리막이나 접합층이 됩니다. SN-MZ 시리즈는 G·FR·H·E·LC 5개 시리즈, 35개 등급으로 접합·밀봉, 난연, 내열 코팅, 전자재료에 폭넓게 쓰입니다.",
                "Glass frit (glass powder) is a fine inorganic powder that melts at a lower temperature than ordinary glass. When heated it fuses together, and on cooling it becomes a hard glass film or bonding layer. The SN-MZ family — five series (G, FR, H, E, LC) and 35 grades — serves bonding and sealing, flame retardance, heat-resistant coatings and electronic materials.",
                "ガラスフリット(ガラス粉末)は一般のガラスより低い温度で溶ける無機質微粉末です。加熱すると溶けて互いに結合し、冷えると硬いガラス膜や接合層になります。SN-MZシリーズはG・FR・H・E・LCの5シリーズ35グレードで、接合・封着、難燃、耐熱コーティング、電子材料に幅広く使われます。"
              )}
            </Prose>
          </div>
          <img src={heroImg} alt={t("무연 유리 프리트 분말", "Lead-free glass frit powder", "無鉛ガラスフリット粉末")} width={1280} height={832} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{t("어떻게 작동하나요?", "How does it work?", "どのように働くのか？")}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <s.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{t("시리즈별 주요 용도", "Main uses by series", "シリーズ別の主な用途")}</h2>
        <div className="mt-8 space-y-10">
          {series.map((s, i) => (
            <article key={s.code} className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:grid-cols-2">
              <img src={s.img} alt={s.alt} width={1280} height={832} loading="lazy" className={`h-full min-h-64 w-full object-cover ${i % 2 ? "md:order-2" : ""}`} />
              <div className="p-7 md:p-10">
                <span className="text-xs font-semibold tracking-widest text-primary">{s.code}</span>
                <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">{s.title}</h3>
                <Prose className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{s.desc}</Prose>
                <ul className="mt-5 grid gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.grades.map((g) => (
                    <span key={g} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{g}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {t("SN-MZ-G3 · H2는 납 함유, SN-MZ-E2는 중금속 함유 등급입니다. 무연이 필요한 용도는 그 외 등급을 선택하세요.", "SN-MZ-G3 and H2 contain lead and SN-MZ-E2 contains heavy metals; choose other grades where lead-free is required.", "SN-MZ-G3・H2は鉛含有、SN-MZ-E2は重金属含有グレードです。無鉛が必要な用途ではその他のグレードをお選びください。")}
        </p>

        <div className="mt-8 text-center">
          <Link to="/products/sl-zt/" className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            {t("SN-MZ 전체 35개 등급 사양 보기", "View all 35 SN-MZ grade specs", "SN-MZ全35グレードの仕様を見る")}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default GlassFritApplications;
