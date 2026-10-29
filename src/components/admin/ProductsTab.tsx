import { useEffect, useMemo, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, ChevronRight } from "lucide-react";
import { productCatalog, type ProductDetail } from "@/data/products";
import { groupKeyOf, setHiddenLocal, useHiddenSlugs } from "@/lib/productVisibility";
import { crm } from "./shared";

const ORDER: [string, string][] = [
  ["fused-silica", "용융실리카"],
  ["crystalline-silica", "쿼츠 · 결정질 실리카"],
  ["synthetic-silica", "화학합성 실리카"],
  ["surface-modified-silica-powder", "표면개질 실리카 분말"],
  ["spherical-silica-powder", "구상 실리카 분말"],
  ["round-corner-silica-powder", "모서리 라운드 실리카 분말"],
  ["angular-silica-powder", "각상 실리카 분말"],
  ["low-radiation-silica-powder", "저방사선 실리카 분말"],
  ["silica-sand-granule", "실리카 샌드 · 입자"],
  ["lead-free-glass-powder", "무연유리분말"],
  ["precipitated-silica", "침전 실리카"],
  ["fumed-silica", "흄드 실리카"],
  ["silica-gel", "실리카겔"],
  ["silica-sol", "실리카졸"],
  ["silica-sand", "규사"],
  ["silica-powder", "규사분말"],
  ["high-purity-quartz", "천연 고순도규석"],
  ["applied-silica-materials", "실리카 응용 · 연관 소재"],
];

type Item = { p: ProductDetail; shared: boolean };

/** Products of each category: its own products plus products cross-listed via subModels. */
const buildGroups = () => {
  const bySlug = new Map(productCatalog.map((p) => [p.slug, p]));
  const own = new Map<string, ProductDetail[]>();
  for (const p of productCatalog) {
    if (p.isCategoryIndex) continue;
    const k = groupKeyOf(p);
    own.set(k, [...(own.get(k) ?? []), p]);
  }
  return ORDER.map(([key, label]) => {
    const items: Item[] = (own.get(key) ?? []).map((p) => ({ p, shared: false }));
    const seen = new Set(items.map((i) => i.p.slug));
    for (const sm of bySlug.get(key)?.subModels ?? []) {
      const p = sm.slug ? bySlug.get(sm.slug) : undefined;
      if (!p || p.isCategoryIndex || seen.has(p.slug)) continue;
      seen.add(p.slug);
      items.push({ p, shared: true });
    }
    return { key, label, items };
  });
};

const ProductsTab = () => {
  const { toast } = useToast();
  const hidden = useHiddenSlugs();
  const [open, setOpen] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState<string | null>(null);

  const groups = useMemo(buildGroups, []);

  useEffect(() => {
    crm({ action: "product_notes" })
      .then((r) => {
        const m: Record<string, string> = {};
        for (const row of r?.rows ?? []) m[row.slug] = row.memo ?? "";
        setNotes(m);
      })
      .catch(() => toast({ title: "메모를 불러오지 못했습니다", variant: "destructive" }));
  }, [toast]);

  const toggle = async (slug: string, visible: boolean) => {
    setBusy(slug);
    setHiddenLocal(slug, !visible);
    try {
      await crm({ action: "set_visibility", slug, visible });
    } catch {
      setHiddenLocal(slug, visible);
      toast({ title: "저장에 실패했습니다", variant: "destructive" });
    } finally {
      setBusy(null);
    }
  };

  const saveNote = async (slug: string) => {
    const value = drafts[slug];
    if (value === undefined || value === (notes[slug] ?? "")) return;
    try {
      await crm({ action: "set_product_note", slug, memo: value });
      setNotes((n) => ({ ...n, [slug]: value }));
      setDrafts((d) => {
        const { [slug]: _, ...rest } = d;
        return rest;
      });
      setSaved(slug);
      setTimeout(() => setSaved((s) => (s === slug ? null : s)), 1500);
    } catch {
      toast({ title: "메모 저장에 실패했습니다", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        카테고리를 끄면 그 안의 모든 상품이 홈페이지에서 숨겨집니다. 상품별로도 따로 끌 수 있습니다. 메모는 관리자만
        볼 수 있으며, 입력 후 칸을 벗어나면 자동 저장됩니다.
      </p>
      {groups.map((g) => {
        const catOn = !hidden.has(g.key);
        const shown = g.items.filter(({ p }) => !hidden.has(p.slug)).length;
        const isOpen = open === g.key;
        return (
          <div key={g.key} className="rounded-xl border bg-background">
            <div className="flex items-center gap-3 px-4 py-3">
              <button
                onClick={() => setOpen(isOpen ? null : g.key)}
                className="flex flex-1 items-center gap-2 text-left"
                disabled={g.items.length === 0}
              >
                {g.items.length > 0 ? (
                  isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
                ) : (
                  <span className="w-4" />
                )}
                <span className="font-medium">{g.label}</span>
                <span className="text-xs text-muted-foreground">
                  상품 {shown}/{g.items.length} 게시
                </span>
              </button>
              <span className={`text-xs ${catOn ? "text-primary" : "text-muted-foreground"}`}>
                {catOn ? "게시중" : "숨김"}
              </span>
              <Switch
                checked={catOn}
                disabled={busy === g.key}
                onCheckedChange={(v) => toggle(g.key, v)}
                aria-label={`${g.label} 게시`}
              />
            </div>
            {isOpen && (
              <ul className={`divide-y border-t ${catOn ? "" : "opacity-50"}`}>
                {g.items.map(({ p, shared }) => {
                  const on = !hidden.has(p.slug);
                  const memo = drafts[p.slug] ?? notes[p.slug] ?? "";
                  return (
                    <li
                      key={p.slug}
                      className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2.5 pl-10 md:flex-nowrap"
                    >
                      <span className="min-w-0 basis-full text-sm md:flex-1 md:basis-auto">
                        {p.name} <span className="text-xs text-muted-foreground">{p.slug}</span>
                        {shared && (
                          <span className="ml-1.5 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                            다른 카테고리와 공유
                          </span>
                        )}
                      </span>
                      <div className="relative min-w-0 flex-1 md:w-72 md:flex-none">
                        <Input
                          value={memo}
                          onChange={(e) => setDrafts((d) => ({ ...d, [p.slug]: e.target.value }))}
                          onBlur={() => saveNote(p.slug)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                          }}
                          placeholder="메모 (가격·상세정보)"
                          maxLength={5000}
                          title={memo}
                          aria-label={`${p.name} 메모`}
                          className="h-8 text-xs"
                        />
                        {saved === p.slug && (
                          <span className="absolute -top-2 right-2 rounded bg-background px-1 text-[10px] text-primary">
                            저장됨
                          </span>
                        )}
                      </div>
                      <span className={`text-xs ${on ? "text-primary" : "text-muted-foreground"}`}>
                        {on ? "게시" : "숨김"}
                      </span>
                      <Switch
                        checked={on}
                        disabled={busy === p.slug}
                        onCheckedChange={(v) => toggle(p.slug, v)}
                        aria-label={`${p.name} 게시`}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductsTab;
