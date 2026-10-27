import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLang } from "@/contexts/LanguageContext";
import { useMember } from "@/lib/members/MemberContext";
import { memberAuth, safeNext } from "@/lib/members/client";
import { mt } from "@/lib/members/text";
import AuthLayout from "@/components/member/AuthLayout";
import SocialButtons from "@/components/member/SocialButtons";

const Divider = ({ label }: { label: string }) => (
  <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
    <span className="h-px flex-1 bg-border" />
    {label}
    <span className="h-px flex-1 bg-border" />
  </div>
);

/** After sign-in: incomplete profiles go to the account page first. */
export const useAfterSignIn = (next: string | null) => {
  const { session, profileComplete, loading } = useMember();
  const navigate = useNavigate();
  useEffect(() => {
    if (loading || !session) return;
    if (!profileComplete) navigate(`/account/${next ? `?next=${encodeURIComponent(next)}` : ""}`, { replace: true });
    else navigate(next ?? "/account/", { replace: true });
  }, [loading, session, profileComplete, next, navigate]);
};

const MemberLogin = () => {
  const { lang } = useLang();
  const [params] = useSearchParams();
  const next = safeNext(params.get("next"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useAfterSignIn(next);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const { error: err } = await memberAuth.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (err) {
      setError(/confirm/i.test(err.message) ? mt(lang, "notConfirmed") : /invalid/i.test(err.message) ? mt(lang, "loginFailed") : mt(lang, "genericError"));
    }
  };

  const nextQs = next ? `?next=${encodeURIComponent(next)}` : "";

  return (
    <AuthLayout title={mt(lang, "loginTitle")} lead={mt(lang, "loginLead")}>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="login-email" className="mb-1.5 block text-sm font-semibold text-foreground">{mt(lang, "email")}</label>
            <Input id="login-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="login-pw" className="mb-1.5 block text-sm font-semibold text-foreground">{mt(lang, "password")}</label>
            <Input id="login-pw" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && (
            <p role="alert" className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">{error}</p>
          )}
          <Button type="submit" className="h-11 w-full" disabled={busy}>
            {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {mt(lang, "login")}
          </Button>
          <div className="text-right">
            <Link to="/reset-password/" className="text-xs text-muted-foreground hover:text-primary">{mt(lang, "forgot")}</Link>
          </div>
        </form>
        <Divider label={mt(lang, "or")} />
        <SocialButtons next={next} />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {mt(lang, "noAccount")}{" "}
          <Link to={`/signup/${nextQs}`} className="font-semibold text-primary hover:underline">{mt(lang, "signup")}</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export { Divider };
export default MemberLogin;
