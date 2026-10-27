import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import type { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/contexts/LanguageContext";
import {
  afterSignInPath,
  clearAuthReturn,
  isProfileComplete,
  memberAuth,
  profileFromMeta,
  readAuthReturn,
} from "@/lib/members/client";
import { mt } from "@/lib/members/text";

/** Error text the sign-in server put in the return address, if any. */
const urlError = () => {
  const q = new URLSearchParams(window.location.search);
  const h = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  return q.get("error_description") || h.get("error_description") || q.get("error") || h.get("error");
};

/**
 * Landing page after Kakao / Google sign-in (and sign-up email links).
 * Lives outside the /{lang} prefix so its address matches the member server's Redirect URLs list exactly.
 */
const AuthCallback = () => {
  const navigate = useNavigate();
  const [{ lang, next }] = useState(readAuthReturn);
  const [failed, setFailed] = useState<string | null>(null);
  const done = useRef(false);

  useEffect(() => {
    document.title = "Signing in | SILICA";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  useEffect(() => {
    const finish = (session: Session) => {
      if (done.current) return;
      done.current = true;
      const user = session.user;
      const complete = isProfileComplete(profileFromMeta(user.user_metadata), user.email ?? null);
      clearAuthReturn();
      navigate(afterSignInPath(lang, next, complete), { replace: true });
    };

    const err = urlError();
    if (err) {
      setFailed(err);
      return;
    }

    const { data: sub } = memberAuth.auth.onAuthStateChange((_e, s) => {
      if (s) finish(s);
    });
    // Waits until the client has read the tokens from the address bar.
    memberAuth.auth.getSession().then(({ data, error }) => {
      if (data.session) finish(data.session);
      else if (error) setFailed(error.message);
    });
    const timer = window.setTimeout(() => {
      if (!done.current) setFailed("no-session");
    }, 12000);
    return () => {
      sub.subscription.unsubscribe();
      window.clearTimeout(timer);
    };
  }, [lang, next, navigate]);

  const l = lang as Lang;

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        {failed ? (
          <>
            <h1 className="text-lg font-bold text-foreground">{mt(l, "callbackFailed")}</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mt(l, "callbackFailedLead")}</p>
            <Button className="mt-6 w-full" onClick={() => navigate(`/${lang}/login/`, { replace: true })}>
              {mt(l, "login")}
            </Button>
          </>
        ) : (
          <>
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" aria-hidden="true" />
            <h1 className="mt-4 text-lg font-bold text-foreground">{mt(l, "callbackWorking")}</h1>
          </>
        )}
      </div>
    </main>
  );
};

export default AuthCallback;
