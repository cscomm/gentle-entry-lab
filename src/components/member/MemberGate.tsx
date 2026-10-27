import { Lock } from "lucide-react";
import { Link, useLocation } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";
import { useMember } from "@/lib/members/MemberContext";
import { stripLang } from "@/lib/i18nRouting";
import { mt, type MTKey } from "@/lib/members/text";

/** Current page path without the language prefix, for ?next= after sign-in. */
export const useNextPath = () => {
  const { pathname, search } = useLocation();
  return `${stripLang(pathname)}${search}`;
};

/** Shown in place of a members-only feature for visitors who are not signed in (or whose profile is incomplete). */
const MemberGate = ({ messageKey, className = "" }: { messageKey: MTKey; className?: string }) => {
  const { lang } = useLang();
  const { session } = useMember();
  const next = encodeURIComponent(useNextPath());

  return (
    <div className={`rounded-2xl border border-primary/25 bg-primary/5 p-6 text-center ${className}`}>
      <span className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Lock className="h-5 w-5" />
      </span>
      <p className="font-semibold text-foreground">{mt(lang, "gateTitle")}</p>
      <p className="mt-1 text-sm text-muted-foreground">{session ? mt(lang, "gateComplete") : mt(lang, messageKey)}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {session ? (
          <Button asChild>
            <Link to={`/account/?next=${next}`}>{mt(lang, "completeNow")}</Link>
          </Button>
        ) : (
          <>
            <Button asChild>
              <Link to={`/login/?next=${next}`}>{mt(lang, "login")}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to={`/signup/?next=${next}`}>{mt(lang, "signup")}</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default MemberGate;
