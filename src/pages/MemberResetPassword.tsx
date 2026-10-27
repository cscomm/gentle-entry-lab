import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLang } from "@/contexts/LanguageContext";
import { memberAuth, openedFromRecoveryLink } from "@/lib/members/client";
import { withLang } from "@/lib/i18nRouting";
import { mt } from "@/lib/members/text";
import AuthLayout from "@/components/member/AuthLayout";

/** Public page: request a reset link, or set a new password when opened from that link. */
const MemberResetPassword = () => {
  const { lang } = useLang();
  const navigate = useNavigate();
  const [recovery, setRecovery] = useState(openedFromRecoveryLink);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const { data } = memberAuth.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  const request = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await memberAuth.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}${withLang(lang, "/reset-password/")}`,
    });
    setBusy(false);
    if (error) return toast.error(mt(lang, "genericError"));
    setSent(true);
  };

  const update = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pw !== pw2) return toast.error(mt(lang, "passwordMismatch"));
    setBusy(true);
    const { error } = await memberAuth.auth.updateUser({ password: pw });
    setBusy(false);
    if (error) return toast.error(mt(lang, "genericError"));
    toast.success(mt(lang, "resetDone"));
    navigate("/account/", { replace: true });
  };

  return (
    <AuthLayout title={mt(lang, "resetTitle")} lead={recovery ? undefined : mt(lang, "resetLead")}>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        {recovery ? (
          <form onSubmit={update} className="space-y-4">
            <Input type="password" autoComplete="new-password" minLength={8} placeholder={mt(lang, "newPassword")} aria-label={mt(lang, "newPassword")} value={pw} onChange={(e) => setPw(e.target.value)} required />
            <Input type="password" autoComplete="new-password" minLength={8} placeholder={mt(lang, "passwordConfirm")} aria-label={mt(lang, "passwordConfirm")} value={pw2} onChange={(e) => setPw2(e.target.value)} required />
            <Button type="submit" className="h-11 w-full" disabled={busy}>
              {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {mt(lang, "save")}
            </Button>
          </form>
        ) : sent ? (
          <p className="text-center text-sm leading-relaxed text-muted-foreground">{mt(lang, "resetSent")}</p>
        ) : (
          <form onSubmit={request} className="space-y-4">
            <Input type="email" autoComplete="email" placeholder={mt(lang, "email")} aria-label={mt(lang, "email")} value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Button type="submit" className="h-11 w-full" disabled={busy}>
              {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {mt(lang, "resetSend")}
            </Button>
          </form>
        )}
        <p className="mt-6 text-center text-sm">
          <Link to="/login/" className="text-primary hover:underline">{mt(lang, "login")}</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default MemberResetPassword;
