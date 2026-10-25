import { useMemo, useState } from "react";
import { Link } from "@/lib/router";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/contexts/LanguageContext";
import { FAQ_INTRO, FAQ_TOPICS, faqItems, type FaqTopic } from "@/data/faq";

const FaqAnswer = ({ lines }: { lines: string[] }) => {
  const blocks: (string | string[])[] = [];
  for (const l of lines) {
    if (l.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      if (Array.isArray(last)) last.push(l.slice(2));
      else blocks.push([l.slice(2)]);
    } else blocks.push(l);
  }
  return (
    <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
      {blocks.map((b, i) =>
        Array.isArray(b) ? (
          <ul key={i} className="space-y-2 rounded-xl border border-border bg-secondary/40 p-4">
            {b.map((li) => (
              <li key={li} className="flex gap-2.5 text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{li}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p key={i}>{b}</p>
        ),
      )}
    </div>
  );
};

const FaqSection = () => {
  const { lang } = useLang();
  const [topic, setTopic] = useState<FaqTopic | "all">("all");
  const items = useMemo(() => faqItems.filter((f) => topic === "all" || f.topic === topic), [topic]);
  const allLabel = { ko: "전체", en: "All", ja: "すべて" }[lang];

  return (
    <div>
      <p className="mb-6 text-muted-foreground">{FAQ_INTRO[lang]}</p>

      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="FAQ topics">
        {(["all", ...Object.keys(FAQ_TOPICS)] as (FaqTopic | "all")[]).map((k) => {
          const active = topic === k;
          const count = k === "all" ? faqItems.length : faqItems.filter((f) => f.topic === k).length;
          return (
            <button
              key={k}
              type="button"
              onClick={() => setTopic(k)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {k === "all" ? allLabel : FAQ_TOPICS[k][lang]}
              <span className={`ml-1.5 text-xs ${active ? "opacity-80" : "opacity-60"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <Accordion type="single" collapsible defaultValue={items[0]?.id} className="space-y-3">
        {items.map((f) => {
          const n = faqItems.indexOf(f) + 1;
          return (
            <AccordionItem
              key={f.id}
              value={f.id}
              className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-sm data-[state=open]:border-primary/40 md:px-6"
            >
              <AccordionTrigger className="gap-4 py-5 text-left hover:no-underline">
                <span className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    Q{n}
                  </span>
                  <span className="text-base font-semibold text-foreground md:text-lg">{f.q[lang]}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 md:pl-12">
                <span className="mb-2 inline-block text-xs font-bold tracking-widest text-primary">
                  {FAQ_TOPICS[f.topic][lang]}
                </span>
                <FaqAnswer lines={f.a[lang]} />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6 md:flex-row md:items-center">
        <div className="flex items-start gap-3">
          <MessageCircleQuestion className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
          <div>
            <p className="font-semibold text-foreground">
              {{ ko: "원하시는 답을 찾지 못하셨나요?", en: "Didn't find your answer?", ja: "お探しの回答が見つかりませんでしたか？" }[lang]}
            </p>
            <p className="text-sm text-muted-foreground">
              {{
                ko: "용도와 필요한 사양을 남겨주시면 담당자가 직접 안내해 드립니다.",
                en: "Tell us your application and required specs — our team will get back to you.",
                ja: "用途と必要なスペックをお知らせいただければ、担当者が直接ご案内いたします。",
              }[lang]}
            </p>
          </div>
        </div>
        <Link
          to="/#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          {{ ko: "문의하기", en: "Contact us", ja: "お問い合わせ" }[lang]}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default FaqSection;
