import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";
import { MEMBER_AUTH_KEY, MEMBER_AUTH_URL, memberAuth } from "@/lib/members/client";
import { withLang } from "@/lib/i18nRouting";
import { mt } from "@/lib/members/text";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.96 10.96 0 0 0 12 1 11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
  </svg>
);

const KakaoIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path fill="currentColor" d="M12 3C6.48 3 2 6.48 2 10.78c0 2.77 1.86 5.2 4.66 6.58l-.95 3.48c-.08.3.26.54.52.37l4.14-2.74c.53.06 1.07.1 1.63.1 5.52 0 10-3.48 10-7.79S17.52 3 12 3z" />
  </svg>
);

/** Google / Kakao sign-in through the member sign-up server. Returns here via /login. */
const SocialButtons = ({ next }: { next: string | null }) => {
  const { lang } = useLang();
  const [busy, setBusy] = useState<string | null>(null);

  const go = async (provider: "google" | "kakao") => {
    setBusy(provider);
    // Avoid sending visitors to a raw error page when the provider isn't switched on yet.
    try {
      const res = await fetch(`${MEMBER_AUTH_URL}/auth/v1/settings`, { headers: { apikey: MEMBER_AUTH_KEY } });
      const s = await res.json();
      if (s?.external && s.external[provider] === false) {
        setBusy(null);
        toast.error(mt(lang, "socialSetupError"));
        return;
      }
    } catch {
      /* try anyway */
    }
    const back = `${window.location.origin}${withLang(lang, "/login/")}${next ? `?next=${encodeURIComponent(next)}` : ""}`;
    const { error } = await memberAuth.auth.signInWithOAuth({ provider, options: { redirectTo: back } });
    if (error) {
      setBusy(null);
      toast.error(mt(lang, "genericError"));
    }
  };

  return (
    <div className="grid gap-2.5">
      <Button type="button" variant="outline" className="h-11 gap-2" disabled={!!busy} onClick={() => go("google")}>
        <GoogleIcon />
        {mt(lang, "google")}
      </Button>
      <Button
        type="button"
        className="h-11 gap-2 bg-[hsl(var(--kakao))] text-[hsl(var(--kakao-foreground))] hover:bg-[hsl(var(--kakao))]/90"
        disabled={!!busy}
        onClick={() => go("kakao")}
      >
        <KakaoIcon />
        {mt(lang, "kakao")}
      </Button>
    </div>
  );
};

export default SocialButtons;
