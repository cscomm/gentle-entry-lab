// Member-only actions. The caller sends the member access token from the
// external sign-up server in the body; it is verified there before anything runs.
import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@4";
import { getMember } from "../_shared/member-auth.ts";

// Product slug → file in the private "datasheets" bucket.
const DATASHEETS: Record<string, string> = {
  "fumed-silica-slh-380s": "SLH-380S.pdf",
};

const Body = z.discriminatedUnion("action", [
  z.object({ action: z.literal("my_inquiries"), memberToken: z.string() }),
  z.object({
    action: z.literal("create_post"),
    memberToken: z.string(),
    title: z.string().trim().min(1).max(120),
    content: z.string().trim().min(1).max(50000),
    author_name: z.string().trim().max(40).optional(),
    password: z.string().min(4).max(100),
    is_public: z.boolean(),
  }),
  z.object({ action: z.literal("datasheet"), memberToken: z.string(), slug: z.string().max(200) }),
]);

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
  const body = parsed.data;

  const member = await getMember(body.memberToken);
  if (!member) return json({ error: "login_required" }, 401);

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  try {
    if (body.action === "my_inquiries") {
      // Kakao accounts may have no email; there is nothing verified to match inquiries against.
      if (!member.email) return json({ rows: [], reason: "no_email" });
      if (!member.emailConfirmed) return json({ error: "email_not_confirmed" }, 403);
      const pattern = member.email.replace(/[\\%_]/g, (c) => `\\${c}`);
      const { data, error } = await sb
        .from("inquiries")
        .select("id, created_at, company, message, status")
        .ilike("email", pattern)
        .order("created_at", { ascending: false })
        .limit(200);
      if (error) throw error;
      return json({ rows: data ?? [] });
    }

    if (body.action === "create_post") {
      const metaName = typeof member.meta.full_name === "string" ? member.meta.full_name : "";
      const { data, error } = await sb
        .from("posts")
        .insert({
          title: body.title,
          content: body.content,
          author_name: (body.author_name || metaName || "Member").slice(0, 40),
          password_hash: body.password, // hashed by the posts trigger
          is_public: body.is_public,
          member_id: member.id,
        })
        .select("id")
        .single();
      if (error) throw error;
      return json({ id: data.id });
    }

    if (body.action === "datasheet") {
      const file = DATASHEETS[body.slug];
      if (!file) return json({ error: "not_found" }, 404);
      const { data, error } = await sb.storage.from("datasheets").createSignedUrl(file, 120, { download: file });
      if (error) throw error;
      return json({ url: data.signedUrl });
    }
  } catch (e) {
    console.error("member-api error", e);
    return json({ error: "server error" }, 500);
  }
  return json({ error: "unknown action" }, 400);
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
