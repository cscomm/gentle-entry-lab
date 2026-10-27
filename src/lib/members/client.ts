import { createClient } from "@supabase/supabase-js";

/**
 * Member accounts live on a separate sign-up server chosen by the site owner
 * (not the site's own backend). URL and publishable key are public values.
 */
export const MEMBER_AUTH_URL = "https://msjbpdeyucfunzgtnith.supabase.co";
export const MEMBER_AUTH_KEY = "sb_publishable_OdZnjGADHdfC1iEb3y4xyQ_Dl1QYub_";

export const memberAuth = createClient(MEMBER_AUTH_URL, MEMBER_AUTH_KEY, {
  auth: {
    storageKey: "silica-member-auth",
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export type MemberProfile = {
  full_name: string;
  company: string;
  phone: string;
  zipcode: string;
  address: string;
  address_detail: string;
  /** Contact email typed by the member; used when the sign-in provider (e.g. Kakao) gave no email. */
  contact_email: string;
  terms_agreed_at?: string;
};

export const EMPTY_PROFILE: MemberProfile = {
  full_name: "",
  company: "",
  phone: "",
  zipcode: "",
  address: "",
  address_detail: "",
  contact_email: "",
};

const str = (v: unknown) => (typeof v === "string" ? v : "");

export const profileFromMeta = (meta: Record<string, unknown> | undefined | null): MemberProfile => {
  const m = meta ?? {};
  return {
    full_name: str(m.full_name) || str(m.name) || str(m.nickname) || str(m.preferred_username),
    company: str(m.company),
    phone: str(m.phone),
    zipcode: str(m.zipcode),
    address: str(m.address),
    address_detail: str(m.address_detail),
    contact_email: str(m.contact_email),
    terms_agreed_at: str(m.terms_agreed_at) || undefined,
  };
};

export const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

/**
 * Required before a member can use members-only features. Accounts whose sign-in
 * provider returned no email (Kakao without email consent) must give a contact email.
 */
export const isProfileComplete = (p: MemberProfile, accountEmail: string | null | undefined = "x") =>
  Boolean(
    p.full_name.trim() &&
      p.company.trim() &&
      p.phone.trim() &&
      p.address.trim() &&
      p.terms_agreed_at &&
      (accountEmail || isValidEmail(p.contact_email)),
  );

/** Keeps redirects on this site only. */
export const safeNext = (next: string | null | undefined) =>
  next && next.startsWith("/") && !next.startsWith("//") ? next : null;

/** True when the page was opened from a password-reset email (captured before the link is consumed). */
export const openedFromRecoveryLink =
  typeof window !== "undefined" && /type=recovery/.test(window.location.hash + window.location.search);
