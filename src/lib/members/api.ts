const ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/member-api`;
const ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export class MemberApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

/** Calls a members-only action on the site's backend with the member's token. */
export async function memberApi<T = unknown>(action: string, memberToken: string, payload: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: ANON, Authorization: `Bearer ${ANON}` },
    body: JSON.stringify({ action, memberToken, ...payload }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new MemberApiError(res.status, data?.error ?? "error");
  return data as T;
}
