import { useState } from "react";
import { FileDown, Loader2, Lock } from "lucide-react";
import { toast } from "sonner";
import { Link } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";
import { useMember } from "@/lib/members/MemberContext";
import { memberApi } from "@/lib/members/api";
import { mt } from "@/lib/members/text";
import { useNextPath } from "./MemberGate";

/** Products with a downloadable datasheet. Files are kept in private storage; keep in sync with member-api. */
export const DATASHEET_SLUGS = new Set(["fumed-silica-slh-380s"]);

const DatasheetButton = ({ slug, className = "" }: { slug: string; className?: string }) => {
  const { lang } = useLang();
  const { session, profileComplete, getToken } = useMember();
  const [busy, setBusy] = useState(false);
  const next = encodeURIComponent(useNextPath());
  if (!DATASHEET_SLUGS.has(slug)) return null;

  if (!session || !profileComplete) {
    return (
      <div className={className}>
        <Button asChild variant="outline" className="gap-2">
          <Link to={session ? `/account/?next=${next}` : `/login/?next=${next}`}>
            <Lock className="h-4 w-4" />
            {session ? mt(lang, "completeNow") : mt(lang, "gateDatasheet")}
          </Link>
        </Button>
        <p className="mt-1.5 text-xs text-muted-foreground">
          {mt(lang, "datasheet")} · {mt(lang, "datasheetMembers")}
        </p>
      </div>
    );
  }

  const download = async () => {
    setBusy(true);
    try {
      const token = await getToken();
      if (!token) return;
      const { url } = await memberApi<{ url: string }>("datasheet", token, { slug });
      window.location.assign(url);
    } catch {
      toast.error(mt(lang, "genericError"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={className}>
      <Button type="button" onClick={download} disabled={busy} className="gap-2">
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
        {mt(lang, "datasheet")}
      </Button>
    </div>
  );
};

export default DatasheetButton;
