import { useEffect, useState } from "react";
import { Loader2, LogOut, MessageSquare, Plus } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate, useSearchParams } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLang } from "@/contexts/LanguageContext";
import { useMember } from "@/lib/members/MemberContext";
import { EMPTY_PROFILE, isProfileComplete, isValidEmail, memberAuth, safeNext, type MemberProfile } from "@/lib/members/client";
import { memberApi } from "@/lib/members/api";
import { INQUIRY_STATUS_LABEL, mt } from "@/lib/members/text";
import AuthLayout from "@/components/member/AuthLayout";
import ProfileFields, { type Consent } from "@/components/member/ProfileFields";

type InquiryRow = { id: string; created_at: string; company: string | null; message: string; status: string };

const MyInquiries = () => {
  const { lang } = useLang();
  const { getToken, user } = useMember();
  const [rows, setRows] = useState<InquiryRow[] | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      const token = await getToken();
      if (!token) return;
      try {
        const res = await memberApi<{ rows: InquiryRow[] }>("my_inquiries", token);
        if (alive) setRows(res.rows);
      } catch {
        if (alive) setRows([]);
      }
    })();
    return () => {
      alive = false;
    };
  }, [getToken, user?.id]);

  const fmt = (d: string) => new Date(d).toLocaleDateString(lang === "ko" ? "ko-KR" : lang === "ja" ? "ja-JP" : "en-US");

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
            <MessageSquare className="h-5 w-5 text-primary" />
            {mt(lang, "inquiriesTitle")}
          </h2>
          <p className="text-xs text-muted-foreground">{mt(lang, "inquiriesLead")}</p>
        </div>
        <Button asChild size="sm" variant="outline" className="gap-1.5">
          <Link to="/#contact"><Plus className="h-4 w-4" />{mt(lang, "newInquiry")}</Link>
        </Button>
      </div>
      {rows === null ? (
        <div className="flex justify-center py-6"><Loader2 className="h-5 w-5 animate-spin text-primary" /></div>
      ) : rows.length === 0 ? (
        <p className="py-6 text-center text-sm text-muted-foreground">{mt(lang, "inquiriesEmpty")}</p>
      ) : (
        <ul className="divide-y divide-border">
          {rows.map((r) => {
            const label = INQUIRY_STATUS_LABEL[r.status]?.[lang] ?? r.status;
            const isOpen = open === r.id;
            return (
              <li key={r.id}>
                <button type="button" onClick={() => setOpen(isOpen ? null : r.id)} className="w-full py-3.5 text-left">
                  <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{fmt(r.created_at)}</span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-semibold text-primary">{label}</span>
                  </div>
                  <p className={`text-sm text-foreground ${isOpen ? "whitespace-pre-line" : "line-clamp-2"}`}>{r.message}</p>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

const MemberAccount = () => {
  const { lang } = useLang();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = safeNext(params.get("next"));
  const { session, user, profile: saved, profileComplete, loading, signOut, getToken } = useMember();
  const [profile, setProfile] = useState<MemberProfile>(EMPTY_PROFILE);
  const [consent, setConsent] = useState<Consent>({ terms: false, privacy: false });
  const [busy, setBusy] = useState(false);
  const [newPw, setNewPw] = useState("");
  const [pwBusy, setPwBusy] = useState(false);

  useEffect(() => {
    if (!loading && !session) navigate(`/login/?next=${encodeURIComponent("/account/")}`, { replace: true });
  }, [loading, session, navigate]);

  useEffect(() => {
    if (saved) setProfile(saved);
    // only when the signed-in user changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  if (loading || !session || !user) {
    return (
      <AuthLayout title={mt(lang, "myAccount")}>
        <div className="flex justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
      </AuthLayout>
    );
  }

  const needsConsent = !saved?.terms_agreed_at;
  const accountEmail = user.email || null;
  const emailLabel = accountEmail || profile.contact_email || mt(lang, "kakaoAccount");
  const usesPassword = (user.identities ?? []).some((i) => i.provider === "email");

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile.full_name.trim() || !profile.company.trim() || !profile.phone.trim() || !profile.address.trim())
      return toast.error(mt(lang, "fillRequired"));
    if (!accountEmail && !isValidEmail(profile.contact_email)) return toast.error(mt(lang, "invalidEmail"));
    if (needsConsent && (!consent.terms || !consent.privacy)) return toast.error(mt(lang, "agreeRequired"));
    setBusy(true);
    const data: MemberProfile = {
      full_name: profile.full_name.trim(),
      company: profile.company.trim(),
      phone: profile.phone.trim(),
      zipcode: profile.zipcode.trim(),
      address: profile.address.trim(),
      address_detail: profile.address_detail.trim(),
      contact_email: profile.contact_email.trim().toLowerCase(),
      terms_agreed_at: saved?.terms_agreed_at || new Date().toISOString(),
    };
    const { data: updated, error } = await memberAuth.auth.updateUser({ data });
    if (error) {
      setBusy(false);
      return toast.error(mt(lang, "genericError"));
    }
    // Keep the site's own member list in step with the saved profile.
    try {
      const token = (await getToken()) ?? updated.user?.id ?? "";
      await memberApi("sync_profile", token);
    } catch {
      setBusy(false);
      return toast.error(mt(lang, "genericError"));
    }
    setBusy(false);
    toast.success(mt(lang, "saved"));
    if (next && isProfileComplete(data, accountEmail)) navigate(next);
  };

  const changePw = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwBusy(true);
    const { error } = await memberAuth.auth.updateUser({ password: newPw });
    setPwBusy(false);
    if (error) return toast.error(mt(lang, "genericError"));
    setNewPw("");
    toast.success(mt(lang, "resetDone"));
  };

  return (
    <AuthLayout title={mt(lang, profileComplete ? "myAccount" : "completeTitle")} lead={profileComplete ? emailLabel : mt(lang, "completeLead")} wide>
      <div className="space-y-6">
        <form onSubmit={save} className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-foreground">{mt(lang, "profileTitle")}</h2>
            <span className="truncate text-xs text-muted-foreground">{emailLabel}</span>
          </div>
          <ProfileFields
            value={profile}
            onChange={setProfile}
            consent={needsConsent ? consent : undefined}
            onConsent={needsConsent ? setConsent : undefined}
            askEmail={!accountEmail}
          />
          <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={busy}>
            {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {mt(lang, "save")}
          </Button>
        </form>

        {profileComplete &&
          (accountEmail ? (
            <MyInquiries />
          ) : (
            <p className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground shadow-sm">{mt(lang, "noEmailInquiries")}</p>
          ))}

        {usesPassword && (
          <form onSubmit={changePw} className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-lg font-bold text-foreground">{mt(lang, "changePassword")}</h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="password"
                autoComplete="new-password"
                minLength={8}
                placeholder={mt(lang, "newPassword")}
                aria-label={mt(lang, "newPassword")}
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
                required
              />
              <Button type="submit" variant="outline" disabled={pwBusy} className="shrink-0">
                {mt(lang, "changePassword")}
              </Button>
            </div>
          </form>
        )}

        <div className="text-center">
          <Button
            variant="ghost"
            className="gap-1.5 text-muted-foreground"
            onClick={async () => {
              await signOut();
              navigate("/");
            }}
          >
            <LogOut className="h-4 w-4" />
            {mt(lang, "logout")}
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default MemberAccount;
