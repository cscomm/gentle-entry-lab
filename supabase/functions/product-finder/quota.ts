// Usage limits for the AI product finder. Pure functions so they can be tested
// from the site's test suite as well as used by the edge function.

/** Visitors who are not signed in cannot use the finder; they are asked to sign up. */
export const GUEST_LIMIT = 0;
/** Signed-in members get this many tries per calendar month (Korea time). */
export const MEMBER_MONTHLY_LIMIT = 10;
/** Members with these confirmed emails have no limit. */
export const UNLIMITED_EMAILS = ["songinjai@gmail.com"];

export type Quota = {
  kind: "guest" | "member";
  unlimited: boolean;
  limit: number;
  used: number;
  remaining: number;
};

export const isUnlimitedMember = (email: string | null | undefined, emailConfirmed: boolean) =>
  Boolean(emailConfirmed && email && UNLIMITED_EMAILS.includes(email.trim().toLowerCase()));

/** Start of the current month in Korea (UTC+9), as a UTC instant. */
export function monthStartKst(now: Date): Date {
  const kst = new Date(now.getTime() + 9 * 3600_000);
  return new Date(Date.UTC(kst.getUTCFullYear(), kst.getUTCMonth(), 1) - 9 * 3600_000);
}

export function buildQuota(kind: "guest" | "member", used: number, unlimited = false): Quota {
  const limit = kind === "guest" ? GUEST_LIMIT : MEMBER_MONTHLY_LIMIT;
  if (unlimited) return { kind, unlimited: true, limit: 0, used, remaining: Number.MAX_SAFE_INTEGER };
  return { kind, unlimited: false, limit, used, remaining: Math.max(0, limit - used) };
}
