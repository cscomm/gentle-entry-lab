// Translate a board post's title + content into English or Japanese via Lovable AI,
// cache the result in public.post_translations, and return it.
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const LANG_NAME: Record<string, string> = {
  en: "English",
  ja: "Japanese (natural business Japanese used in the Japanese industrial market)",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  try {
    const { post_id, lang } = await req.json();
    if (!post_id || (lang !== "en" && lang !== "ja")) {
      return json({ error: "invalid params" }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Return cached translation if it already exists
    const { data: cached } = await supabase
      .from("post_translations")
      .select("title, content")
      .eq("post_id", post_id)
      .eq("lang", lang)
      .maybeSingle();
    if (cached) return json({ ...cached, cached: true });

    const { data: post, error: postErr } = await supabase
      .from("posts")
      .select("title, content")
      .eq("id", post_id)
      .maybeSingle();
    if (postErr || !post) return json({ error: "post not found" }, 404);

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) return json({ error: "AI not configured" }, 500);

    const prompt = `Translate the following Korean community-board post into ${LANG_NAME[lang]}.
Preserve markdown, URLs, image tags (![](url)), line breaks, product names (SL-xxx) and technical terms.
Do NOT translate URLs or SL model codes. Return ONLY strict JSON with keys "title" and "content", no code fences.

TITLE:
${post.title}

CONTENT:
${post.content}`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: "You are a professional Korean→foreign-language translator for a B2B industrial-materials website." },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (aiRes.status === 429) return json({ error: "rate limited" }, 429);
    if (aiRes.status === 402) return json({ error: "AI credits exhausted" }, 402);
    if (!aiRes.ok) {
      const t = await aiRes.text();
      return json({ error: "AI error", detail: t }, 500);
    }
    const aiJson = await aiRes.json();
    const raw = aiJson.choices?.[0]?.message?.content ?? "{}";
    let parsed: { title?: string; content?: string };
    try {
      parsed = JSON.parse(raw);
    } catch {
      // strip fences if any
      const stripped = raw.replace(/^```json\s*|```$/g, "").trim();
      parsed = JSON.parse(stripped);
    }
    if (!parsed.title || !parsed.content) {
      return json({ error: "bad AI output" }, 500);
    }

    await supabase.from("post_translations").upsert({
      post_id,
      lang,
      title: parsed.title,
      content: parsed.content,
    }, { onConflict: "post_id,lang" });

    return json({ title: parsed.title, content: parsed.content, cached: false });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
