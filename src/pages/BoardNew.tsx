import { useRef, useState } from "react";
import { Link, useNavigate } from "@/lib/router";
import { Globe, ImagePlus, Lock, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useLang } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const BoardNew = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const insertAtCursor = (snippet: string) => {
    const el = textareaRef.current;
    if (!el) {
      setContent((c) => c + snippet);
      return;
    }
    const start = el.selectionStart ?? content.length;
    const end = el.selectionEnd ?? content.length;
    const next = content.slice(0, start) + snippet + content.slice(end);
    setContent(next);
    requestAnimationFrame(() => {
      el.focus();
      const pos = start + snippet.length;
      el.setSelectionRange(pos, pos);
    });
  };

  const uploadImageFile = async (file: File): Promise<string | null> => {
    const ext = (file.name.split(".").pop() || "png").toLowerCase();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await supabase.storage
      .from("board-images")
      .upload(path, file, { contentType: file.type || "image/png", upsert: false });
    if (error) {
      toast.error(error.message);
      return null;
    }
    const { data } = supabase.storage.from("board-images").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleFiles = async (files: FileList | File[]) => {
    const imgs = Array.from(files).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) return;
    setUploading(true);
    for (const f of imgs) {
      const url = await uploadImageFile(f);
      if (url) insertAtCursor(`\n![](${url})\n`);
    }
    setUploading(false);
  };

  const onPaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const cd = e.clipboardData;
    if (!cd) return;
    // 1) Direct image files (screenshot, copied image)
    const files = Array.from(cd.files || []).filter((f) => f.type.startsWith("image/"));
    if (files.length > 0) {
      e.preventDefault();
      await handleFiles(files);
      return;
    }
    // 2) HTML paste from another web page → extract <img src> URLs
    const html = cd.getData("text/html");
    if (html && /<img\s/i.test(html)) {
      const urls = Array.from(html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi))
        .map((m) => m[1])
        .filter((u) => /^https?:\/\//i.test(u));
      if (urls.length > 0) {
        e.preventDefault();
        const text = cd.getData("text/plain").trim();
        const snippet =
          (text ? text + "\n" : "") + urls.map((u) => `![](${u})`).join("\n");
        insertAtCursor(snippet);
        return;
      }
    }
    // otherwise let default paste happen
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !password.trim()) return;
    setSubmitting(true);
    const { error } = await supabase.from("posts").insert({
      title: title.trim(),
      content: content.trim(),
      author_name: author.trim() || "Anonymous",
      password_hash: password,
      is_public: isPublic,
    });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(t("board.created"));
    navigate("/board/");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-32 pb-20">
        <section className="mx-auto max-w-3xl px-6 md:px-8">
          <Link to="/board/" className="text-sm text-muted-foreground hover:text-foreground">
            {t("board.back")}
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            {t("board.new")}
          </h1>

          <form onSubmit={onSubmit} className="mt-8 space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground">{t("form.title")}</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} required maxLength={120} />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-semibold text-foreground">{t("form.content")}</label>
                <div className="flex items-center gap-2">
                  {uploading && (
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Loader2 className="h-3 w-3 animate-spin" /> 업로드 중…
                    </span>
                  )}
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="gap-1.5"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                  >
                    <ImagePlus className="h-3.5 w-3.5" /> 이미지
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) handleFiles(e.target.files);
                      e.target.value = "";
                    }}
                  />
                </div>
              </div>
              <Textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onPaste={onPaste}
                required
                rows={12}
                className="resize-y font-mono text-sm"
                placeholder={"내용을 입력하세요.\n링크(https://...)와 이미지를 붙여넣을 수 있습니다.\n다른 웹페이지에서 이미지를 복사해 붙여넣으면 자동으로 삽입됩니다."}
              />
              <p className="mt-1 text-xs text-muted-foreground">
                URL은 자동으로 링크가 되며, 이미지는 <code>![](URL)</code> 형식으로 삽입됩니다.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">{t("form.author")}</label>
                <Input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Anonymous" maxLength={40} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">{t("form.password")}</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={4}
                />
                <p className="mt-1 text-xs text-muted-foreground">{t("form.passwordHint")}</p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-4 py-3">
              <div className="flex items-center gap-2">
                {isPublic ? <Globe className="h-4 w-4 text-primary" /> : <Lock className="h-4 w-4 text-muted-foreground" />}
                <div>
                  <div className="text-sm font-semibold text-foreground">{t("form.visibility")}</div>
                  <div className="text-xs text-muted-foreground">
                    {isPublic ? t("board.public") : t("board.private")}
                  </div>
                </div>
              </div>
              <Switch checked={isPublic} onCheckedChange={setIsPublic} />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => navigate("/board/")}>
                {t("form.cancel")}
              </Button>
              <Button type="submit" disabled={submitting}>
                {t("form.publish")}
              </Button>
            </div>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BoardNew;
