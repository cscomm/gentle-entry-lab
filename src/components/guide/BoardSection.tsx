import { useEffect, useState } from "react";
import { Link } from "@/lib/router";
import { Lock, Globe, PenSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";

interface PostRow {
  id: string;
  title: string;
  author_name: string;
  is_public: boolean;
  created_at: string;
}

const BoardSection = () => {
  const { t, lang } = useLang();
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from("posts")
        .select("id, title, author_name, is_public, created_at")
        .order("created_at", { ascending: false });
      let rows = data ?? [];

      // Overlay translated titles for non-Korean languages
      if (rows.length && (lang === "en" || lang === "ja")) {
        const ids = rows.map((r) => r.id);
        const { data: trs } = await supabase
          .from("post_translations")
          .select("post_id, title")
          .in("post_id", ids)
          .eq("lang", lang);
        const map = new Map((trs ?? []).map((t) => [t.post_id, t.title]));
        rows = rows.map((r) => (map.has(r.id) ? { ...r, title: map.get(r.id)! } : r));

        // Translate missing rows (capped to avoid runaway calls)
        const missing = rows.filter((r) => !map.has(r.id)).slice(0, 5);
        await Promise.all(
          missing.map(async (r) => {
            try {
              const res = await supabase.functions.invoke("translate-post", {
                body: { post_id: r.id, lang },
              });
              const title = (res.data as { title?: string } | null)?.title;
              if (title) {
                setPosts((prev) => prev.map((p) => (p.id === r.id ? { ...p, title } : p)));
              }
            } catch {
              /* ignore */
            }
          }),
        );
      }

      setPosts(rows);
      setLoading(false);
    })();
  }, [lang]);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === "ko" ? "ko-KR" : lang === "ja" ? "ja-JP" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div>
      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-muted-foreground">{t("board.subtitle")}</p>
        <Button asChild className="gap-2">
          <Link to="/board/new/">
            <PenSquare className="h-4 w-4" />
            {t("board.new")}
          </Link>
        </Button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="hidden grid-cols-12 border-b border-border bg-secondary/40 px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground md:grid">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-7">{t("form.title")}</div>
          <div className="col-span-2">{t("board.author")}</div>
          <div className="col-span-2">{t("board.date")}</div>
        </div>

        {loading ? (
          <div className="px-6 py-16 text-center text-muted-foreground">…</div>
        ) : posts.length === 0 ? (
          <div className="px-6 py-16 text-center text-muted-foreground">{t("board.empty")}</div>
        ) : (
          posts.map((p, idx) => (
            <Link
              key={p.id}
              to={`/board/${p.id}/`}
              className="grid grid-cols-1 gap-1 border-b border-border px-6 py-4 transition last:border-b-0 hover:bg-secondary/50 md:grid-cols-12 md:items-center md:gap-2"
            >
              <div className="hidden text-center text-sm text-muted-foreground md:col-span-1 md:block">
                {posts.length - idx}
              </div>
              <div className="md:col-span-7">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide ${
                      p.is_public ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {p.is_public ? <Globe className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                    {p.is_public ? t("board.public") : t("board.private")}
                  </span>
                  <span className="line-clamp-1 font-semibold text-foreground">{p.title}</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:col-span-2">{p.author_name}</div>
              <div className="text-sm text-muted-foreground md:col-span-2">{formatDate(p.created_at)}</div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default BoardSection;
