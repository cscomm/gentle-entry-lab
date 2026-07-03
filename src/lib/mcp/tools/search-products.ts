import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { productCatalog } from "@/data/products";

export default defineTool({
  name: "search_products",
  title: "Search products",
  description:
    "Full-text search across the SiLiCA catalog — matches product name (KO/EN/JA), tagline, description, applications, and slug.",
  inputSchema: {
    query: z.string().min(1).describe("Free-text search term."),
    limit: z.number().int().min(1).max(50).default(10),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit }) => {
    const q = query.toLowerCase();
    const matches = productCatalog
      .filter((p) => {
        const haystack = [
          p.slug,
          p.name,
          p.enName,
          p.jaName ?? "",
          p.tagline,
          p.enTagline ?? "",
          p.description,
          p.enDescription ?? "",
          ...(p.applications ?? []),
        ]
          .join(" \n ")
          .toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, limit)
      .map((p) => ({
        slug: p.slug,
        name: p.name,
        enName: p.enName,
        category: p.category ?? "quartz",
        tagline: p.tagline,
      }));
    return {
      content: [{ type: "text", text: `${matches.length} match(es) for "${query}".` }],
      structuredContent: { count: matches.length, matches },
    };
  },
});
