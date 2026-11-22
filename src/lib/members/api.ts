import { memberAuth } from "./client";

/**
 * Members-only actions, executed directly against the member storage project
 * (the same place sign-ups live). The member's own login session authorizes
 * every call — no site server involved. The `memberToken` argument is kept
 * for call-site compatibility and is no longer needed.
 */
export class MemberApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

// Product slug → file in the private "datasheets" bucket.
const DATASHEETS: Record<string, string> = {
  "fumed-silica-slh-380s": "SLH-380S.pdf",
};

const requireUser = async () => {
  const { data } = await memberAuth.auth.getUser();
  if (!data.user) throw new MemberApiError(401, "login_required");
  return data.user;
};

export async function memberApi<T = unknown>(
  action: string,
  _memberToken: string,
  payload: Record<string, unknown> = {},
): Promise<T> {
  if (action === "my_inquiries") {
    await requireUser();
    const { data, error } = await memberAuth.rpc("my_inquiries");
    if (error) throw new MemberApiError(500, error.message);
    return { rows: data ?? [] } as T;
  }

  if (action === "create_post") {
    const user = await requireUser();
    const title = String(payload.title ?? "").trim().slice(0, 120);
    const content = String(payload.content ?? "").trim().slice(0, 50000);
    const password = String(payload.password ?? "");
    if (!title || !content || password.length < 4) throw new MemberApiError(400, "invalid input");
    const metaName = typeof user.user_metadata?.full_name === "string" ? user.user_metadata.full_name : "";
    const author = String(payload.author_name ?? "").trim() || metaName || "Member";
    const { data, error } = await memberAuth
      .from("posts")
      .insert({
        title,
        content,
        author_name: author.slice(0, 40),
        password_hash: password, // hashed by the posts trigger
        is_public: payload.is_public !== false,
        member_id: user.id,
      })
      .select("id")
      .single();
    if (error) throw new MemberApiError(500, error.message);
    return { id: data.id } as T;
  }

  if (action === "delete_post") {
    await requireUser();
    const { data, error } = await memberAuth.rpc("delete_post", {
      _post_id: String(payload.postId ?? ""),
      _password: String(payload.password ?? ""),
    });
    if (error) throw new MemberApiError(500, error.message);
    if (data !== true) throw new MemberApiError(403, "forbidden");
    return { ok: true } as T;
  }

  if (action === "upload_image") {
    const user = await requireUser();
    const contentType = String(payload.contentType ?? "");
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(contentType))
      throw new MemberApiError(400, "invalid input");
    const bytes = Uint8Array.from(atob(String(payload.data ?? "")), (c) => c.charCodeAt(0));
    if (bytes.length > 5 * 1024 * 1024) throw new MemberApiError(413, "too_large");
    const ext = contentType.split("/")[1].replace("jpeg", "jpg");
    const path = `${user.id}/${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
    const { error } = await memberAuth.storage
      .from("board-images")
      .upload(path, bytes, { contentType, upsert: false });
    if (error) throw new MemberApiError(500, error.message);
    const { data } = memberAuth.storage.from("board-images").getPublicUrl(path);
    return { url: data.publicUrl } as T;
  }

  if (action === "datasheet") {
    await requireUser();
    const file = DATASHEETS[String(payload.slug ?? "")];
    if (!file) throw new MemberApiError(404, "not_found");
    const { data, error } = await memberAuth.storage
      .from("datasheets")
      .createSignedUrl(file, 120, { download: file });
    if (error) throw new MemberApiError(500, error.message);
    return { url: data.signedUrl } as T;
  }

  if (action === "sync_profile") {
    // Copies the profile saved in the account's own metadata into the member
    // list table, so the admin panel can read it.
    const user = await requireUser();
    const m = (user.user_metadata ?? {}) as Record<string, unknown>;
    const s = (k: string, max = 300) => (typeof m[k] === "string" ? (m[k] as string).trim().slice(0, max) : "");
    const terms = s("terms_agreed_at", 40);
    const provider =
      (user.app_metadata?.provider as string | undefined) ??
      user.identities?.[0]?.provider ??
      null;
    const { error } = await memberAuth.from("member_profiles").upsert(
      {
        member_id: user.id,
        account_email: user.email || null,
        contact_email: s("contact_email", 200).toLowerCase() || null,
        provider,
        full_name: s("full_name", 100) || s("name", 100) || s("nickname", 100),
        company: s("company", 200),
        phone: s("phone", 50),
        zipcode: s("zipcode", 20),
        address: s("address"),
        address_detail: s("address_detail"),
        terms_agreed_at: terms && !Number.isNaN(Date.parse(terms)) ? terms : null,
        signed_up_at: user.created_at,
        last_seen_at: new Date().toISOString(),
      },
      { onConflict: "member_id" },
    );
    if (error) throw new MemberApiError(500, error.message);
    return { ok: true } as T;
  }

  throw new MemberApiError(400, "unknown action");
}
