import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { productCatalog, type ProductCategory } from "../catalog.generated";

const CATEGORIES = ["quartz", "silica-gel", "precipitated", "fumed", "advanced-series"] as const;

export default defineTool({
  name: "list_products",
  title: "List products",
  description:
    "List all silica products in the SiLiCA catalog. Optionally filter by category (quartz, silica-gel, precipitated, fumed, advanced-series).",
  inputSchema: {
    category: z
      .enum(CATEGORIES)
      .optional()
      .describe("Optional product category filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const items = productCatalog
      .filter((p) => !category || (p.category ?? "quartz") === (category as ProductCategory))
      .map((p) => ({
        slug: p.slug,
        name: p.name,
        enName: p.enName,
        jaName: p.jaName,
        category: p.category ?? "quartz",
        tagline: p.tagline,
        enTagline: p.enTagline,
        isCategoryIndex: !!p.isCategoryIndex,
        parentSlug: p.parentSlug,
      }));
    return {
      content: [{ type: "text", text: `${items.length} product(s) found.` }],
      structuredContent: { count: items.length, items },
    };
  },
});
