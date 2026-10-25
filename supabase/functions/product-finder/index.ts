// AI product finder: the customer describes their use case / desired effect,
// Lovable AI answers as a silica application engineer (own expertise first),
// then picks the closest products from this site's catalog.
//
// Response: a plain-text stream. Markdown analysis, then a line "[[RECOMMEND]]"
// followed by a JSON array [{slug, reason}]. Failures append "[[ERROR]]{json}".
import { createOpenAI } from "npm:@ai-sdk/openai@4";
import { streamText } from "npm:ai@7";
import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@4";
import { finderCatalog } from "./catalog.ts";
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "../_shared/run-id.ts";

const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1";
const MODEL = "openai/gpt-6-astra";

const Body = z.object({
  query: z.string().trim().min(4).max(2000),
  lang: z.enum(["ko", "en", "ja"]).default("ko"),
});

const LANG_NAME = { ko: "Korean", en: "English", ja: "Japanese (natural business Japanese)" } as const;

const HEADINGS = {
  ko: ["용도 분석", "추천 소재 및 핵심 사양", "선정 시 확인할 체크리스트", "더 정확한 추천을 위해 알려주시면 좋은 정보"],
  en: ["Use-case analysis", "Recommended materials & key specs", "Selection checklist", "Information that would sharpen this recommendation"],
  ja: ["用途分析", "推奨素材と主要スペック", "選定時のチェックリスト", "より正確なご提案のためにお知らせいただきたい情報"],
} as const;

function buildInstructions(lang: "ko" | "en" | "ja", catalogJson: string) {
  const h = HEADINGS[lang];
  return `You are a senior application engineer specialising in silica and related inorganic materials (fused silica, crystalline quartz, synthetic spherical silica, precipitated silica, fumed silica, silica gel, colloidal silica / silica sol, silica sand & powder, glass frit, hollow glass microspheres, etc.). You work for BAR Co., Ltd. (SILICA, silica.co.kr), a Korean B2B supplier.

A customer describes their application, process or the effect they want. Answer in ${LANG_NAME[lang]}.

Your OWN technical expertise is the core of the answer — explain from materials-science knowledge which material types and specifications suit the need, even if the site catalog does not carry them. Be concrete: typical particle size (D50 / nm range), purity, BET surface area, surface treatment (hydrophilic / hydrophobic, silane type), morphology (spherical / angular / round-corner), oil absorption, pH, dosage ranges, dispersion tips, and trade-offs or risks. Do not invent precise prices or lead times.

Format the answer as Markdown with exactly these sections:
## ${h[0]}
(2–4 bullets restating the key requirements you inferred)
## ${h[1]}
(the main and most detailed part: 1–3 material options, each with a bold name, why it fits, and key spec ranges; a compact table is welcome)
## ${h[2]}
(4–6 short checklist bullets)
## ${h[3]}
(2–4 short bullets)

Do not name specific site product models in those sections. After the last section output a line containing exactly [[RECOMMEND]] and then, on the next line, a JSON array (no code fences) of up to 4 objects {"slug": string, "reason": string} chosen ONLY from the slugs in the catalog below, closest match first. "reason" is one sentence in ${LANG_NAME[lang]} explaining the fit. Prefer specific products over entries whose group is "CATEGORY". If nothing is reasonably close, output [].

If the request is unrelated to materials, politely say so in one short paragraph, then output [[RECOMMEND]] and [].

SITE CATALOG (JSON; slug, name, en, group, tag, desc, apps, specs, models):
${catalogJson}`;
}

const enc = new TextEncoder();

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  let parsed;
  try {
    parsed = Body.safeParse(await req.json());
  } catch {
    return json({ error: "invalid json" }, 400);
  }
  if (!parsed.success) return json({ error: "invalid input", details: parsed.error.flatten().fieldErrors }, 400);
  const { query, lang } = parsed.data;

  const apiKey = Deno.env.get("LOVABLE_API_KEY");
  if (!apiKey) return json({ error: "AI not configured" }, 500);

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const startedAt = Date.now();

  // Log every request so the admin panel can review what visitors asked.
  let logId: string | null = null;
  try {
    const { data } = await sb
      .from("product_finder_logs")
      .insert({ query, lang, status: "pending", user_agent: (req.headers.get("user-agent") ?? "").slice(0, 300) || null })
      .select("id")
      .single();
    logId = data?.id ?? null;
  } catch (e) {
    console.error("finder log insert failed", e);
  }
  const finishLog = async (answer: string, status: string, errorMessage: string | null) => {
    if (!logId) return;
    const { analysis, recommended } = splitAnswer(answer);
    try {
      await sb
        .from("product_finder_logs")
        .update({ answer: analysis, recommended, status, error_message: errorMessage, duration_ms: Date.now() - startedAt })
        .eq("id", logId);
    } catch (e) {
      console.error("finder log update failed", e);
    }
  };

  // Respect admin show/hide switches.
  let hidden = new Set<string>();
  try {
    const { data } = await sb.from("product_visibility").select("slug, visible");
    hidden = new Set((data ?? []).filter((r) => !r.visible).map((r) => r.slug as string));
  } catch {
    /* fall back to full catalog */
  }
  const visible = finderCatalog.filter((p) => !hidden.has(p.slug) && !hidden.has(p.group));

  const runIdFetch = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(req));
  const provider = createOpenAI({
    baseURL: GATEWAY_URL,
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });

  const result = streamText({
    model: provider.responses(MODEL),
    instructions: buildInstructions(lang, JSON.stringify(visible)),
    messages: [{ role: "user", content: query }],
    abortSignal: req.signal,
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });

  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      let wrote = false;
      let errored = false;
      let full = "";
      let logStatus = "done";
      let logError: string | null = null;
      try {
        for await (const part of result.fullStream) {
          if (part.type === "text-delta") {
            // deno-lint-ignore no-explicit-any
            const t = (part as any).text ?? (part as any).delta ?? "";
            if (t) {
              wrote = true;
              full += t;
              controller.enqueue(enc.encode(t));
            }
          } else if (part.type === "error") {
            errored = true;
            const m = errorMarker(part.error);
            logStatus = "error";
            logError = m.replace("\n[[ERROR]]", "");
            controller.enqueue(enc.encode(m));
            break;
          }
        }
        if (!wrote && !errored) {
          logStatus = "error";
          logError = "empty response";
          controller.enqueue(enc.encode(`\n[[ERROR]]${JSON.stringify({ status: 502, message: "empty response" })}`));
        }
      } catch (e) {
        if ((e as Error)?.name === "AbortError" || req.signal.aborted) {
          logStatus = "aborted";
        } else {
          const m = errorMarker(e);
          logStatus = "error";
          logError = m.replace("\n[[ERROR]]", "");
          try {
            controller.enqueue(enc.encode(m));
          } catch { /* client gone */ }
        }
      } finally {
        if (req.signal.aborted && logStatus === "done") logStatus = "aborted";
        await finishLog(full, logStatus, logError);
        try {
          controller.close();
        } catch { /* already closed */ }
      }
    },
  });

  return withLovableAiGatewayRunIdHeader(
    new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" } }),
    runIdFetch,
    corsHeaders,
  );
});

/** Separates the markdown analysis from the trailing [[RECOMMEND]] JSON for the log. */
function splitAnswer(text: string): { analysis: string; recommended: unknown[] } {
  const i = text.indexOf("[[RECOMMEND]]");
  if (i < 0) return { analysis: text.trim(), recommended: [] };
  let recommended: unknown[] = [];
  try {
    const v = JSON.parse(text.slice(i + 13).trim().replace(/^```(json)?|```$/g, "").trim());
    if (Array.isArray(v)) recommended = v.slice(0, 8);
  } catch { /* malformed */ }
  return { analysis: text.slice(0, i).trim(), recommended };
}

function errorMarker(err: unknown) {
  // deno-lint-ignore no-explicit-any
  const e = err as any;
  const status = Number(e?.statusCode ?? e?.status ?? 500) || 500;
  let message = "AI error";
  try {
    const b = typeof e?.responseBody === "string" ? JSON.parse(e.responseBody) : null;
    message = b?.message ?? b?.error?.message ?? e?.message ?? message;
  } catch {
    message = e?.message ?? message;
  }
  console.error("product-finder error", status, message);
  return `\n[[ERROR]]${JSON.stringify({ status, message: String(message).slice(0, 300) })}`;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
