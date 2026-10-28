// Verifies a member access token issued by the external sign-up server
// (separate auth project chosen by the site owner). Its URL and publishable key
// are public values, so they live in code rather than secrets.
export const MEMBER_AUTH_URL = "https://msjbpdeyucfunzgtnith.supabase.co";
export const MEMBER_AUTH_KEY = "sb_publishable_OdZnjGADHdfC1iEb3y4xyQ_Dl1QYub_";

export type Member = {
  id: string;
  email: string;
  emailConfirmed: boolean;
  meta: Record<string, unknown>;
  /** Sign-in method of the account, e.g. "email", "google", "kakao". */
  provider: string | null;
  createdAt: string | null;
};

export async function getMember(token: unknown): Promise<Member | null> {
  if (typeof token !== "string" || token.length < 20 || token.length > 4000) return null;
  try {
    const res = await fetch(`${MEMBER_AUTH_URL}/auth/v1/user`, {
      headers: { apikey: MEMBER_AUTH_KEY, Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const u = await res.json();
    if (!u?.id) return null;
    return {
      id: String(u.id),
      email: String(u.email ?? "").toLowerCase(),
      emailConfirmed: Boolean(u.email_confirmed_at ?? u.confirmed_at),
      meta: (u.user_metadata ?? {}) as Record<string, unknown>,
      provider: typeof u.app_metadata?.provider === "string" ? u.app_metadata.provider : null,
      createdAt: typeof u.created_at === "string" ? u.created_at : null,
    };
  } catch (e) {
    console.error("member verify failed", e);
    return null;
  }
}
