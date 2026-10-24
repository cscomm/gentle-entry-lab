import { useMemo, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, ChevronRight } from "lucide-react";
import { productCatalog } from "@/data/products";
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

const ProductsTab = () => {
  const { toast } = useToast();
  const hidden = useHiddenSlugs();
  const [open, setOpen] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const groups = useMemo(() => {
    const map = new Map<string, typeof productCatalog>();
    for (const p of productCatalog) {
      if (p.isCategoryIndex) continue;
      const k = groupKeyOf(p);
      map.set(k, [...(map.get(k) ?? []), p]);
    }
    return ORDER.map(([key, label]) => ({ key, label, items: map.get(key) ?? [] }));
  }, []);

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

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        카테고리를 끄면 그 안의 모든 상품이 홈페이지에서 숨겨집니다. 상품별로도 따로 끌 수 있습니다.
      </p>
      {groups.map((g) => {
        const catOn = !hidden.has(g.key);
        const shown = g.items.filter((p) => !hidden.has(p.slug)).length;
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
                {g.items.map((p) => {
                  const on = !hidden.has(p.slug);
                  return (
                    <li key={p.slug} className="flex items-center gap-3 px-4 py-2.5 pl-10">
                      <span className="flex-1 text-sm">
                        {p.name} <span className="text-xs text-muted-foreground">{p.slug}</span>
                      </span>
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
