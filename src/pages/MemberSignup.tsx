import { useState } from "react";
import { Loader2, MailCheck } from "lucide-react";
import { Link, useSearchParams } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLang } from "@/contexts/LanguageContext";
import { EMPTY_PROFILE, authCallbackUrl, memberAuth, rememberAuthReturn, safeNext, type MemberProfile } from "@/lib/members/client";
import { withLang } from "@/lib/i18nRouting";
import { mt } from "@/lib/members/text";
import AuthLayout from "@/components/member/AuthLayout";
import SocialButtons from "@/components/member/SocialButtons";
import ProfileFields, { type Consent } from "@/components/member/ProfileFields";
import { Divider, useAfterSignIn } from "./MemberLogin";

const MemberSignup = () => {
  const { lang } = useLang();
  const [params] = useSearchParams();
  const next = safeNext(params.get("next"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [profile, setProfile] = useState<MemberProfile>(EMPTY_PROFILE);
  const [consent, setConsent] = useState<Consent>({ terms: false, privacy: false });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  useAfterSignIn(next);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== password2) return setError(mt(lang, "passwordMismatch"));
    if (!profile.full_name.trim() || !profile.company.trim() || !profile.phone.trim() || !profile.address.trim())
      return setError(mt(lang, "fillRequired"));
    if (!consent.terms || !consent.privacy) return setError(mt(lang, "agreeRequired"));

    setBusy(true);
    rememberAuthReturn(lang, next);
    const { data, error: err } = await memberAuth.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: authCallbackUrl(),
        data: {
          full_name: profile.full_name.trim(),
          company: profile.company.trim(),
          phone: profile.phone.trim(),
          zipcode: profile.zipcode.trim(),
          address: profile.address.trim(),
          address_detail: profile.address_detail.trim(),
          terms_agreed_at: new Date().toISOString(),
          signup_lang: lang,
        },
      },
    });
    setBusy(false);
    if (err) {
      setError(/registered|exists/i.test(err.message) ? mt(lang, "alreadyRegistered") : /password/i.test(err.message) ? mt(lang, "passwordHint") : mt(lang, "genericError"));
      return;
    }
    // An existing address comes back with no identities (no email is sent).
    if (data.user && (data.user.identities?.length ?? 0) === 0) return setError(mt(lang, "alreadyRegistered"));
    if (!data.session) setSent(true);
  };

  if (sent) {
    return (
      <AuthLayout title={mt(lang, "checkEmailTitle")}>
        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <MailCheck className="mx-auto h-12 w-12 text-primary" />
          <p className="mt-4 font-semibold text-foreground">{email}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mt(lang, "checkEmail")}</p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/login/">{mt(lang, "login")}</Link>
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title={mt(lang, "signupTitle")} lead={mt(lang, "signupLead")} wide>
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        <SocialButtons next={next} />
        <Divider label={mt(lang, "or")} />
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="su-email" className="mb-1.5 block text-sm font-semibold text-foreground">
              {mt(lang, "email")}<span className="ml-0.5 text-destructive">*</span>
            </label>
            <Input id="su-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="su-pw" className="mb-1.5 block text-sm font-semibold text-foreground">
                {mt(lang, "password")}<span className="ml-0.5 text-destructive">*</span>
              </label>
              <Input id="su-pw" type="password" autoComplete="new-password" minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} required />
              <p className="mt-1 text-xs text-muted-foreground">{mt(lang, "passwordHint")}</p>
            </div>
            <div>
              <label htmlFor="su-pw2" className="mb-1.5 block text-sm font-semibold text-foreground">
                {mt(lang, "passwordConfirm")}<span className="ml-0.5 text-destructive">*</span>
              </label>
              <Input id="su-pw2" type="password" autoComplete="new-password" minLength={8} value={password2} onChange={(e) => setPassword2(e.target.value)} required />
            </div>
          </div>
          <ProfileFields value={profile} onChange={setProfile} consent={consent} onConsent={setConsent} />
          {error && (
            <p role="alert" className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">{error}</p>
          )}
          <Button type="submit" className="h-11 w-full" disabled={busy}>
            {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {mt(lang, "submitSignup")}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {mt(lang, "haveAccount")}{" "}
          <Link to={`/login/${next ? `?next=${encodeURIComponent(next)}` : ""}`} className="font-semibold text-primary hover:underline">
            {mt(lang, "login")}
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default MemberSignup;
