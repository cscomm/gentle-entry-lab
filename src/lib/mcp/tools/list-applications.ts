import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { productCatalog } from "../catalog.generated";

export default defineTool({
  name: "list_applications",
  title: "List applications for a product",
  description:
    "Return the industrial application list for a specific SiLiCA product by slug.",
  inputSchema: {
    slug: z.string().min(1).describe("Product slug."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const p = productCatalog.find((x) => x.slug === slug);
    if (!p) {
      return {
        content: [{ type: "text", text: `Product not found: ${slug}` }],
        isError: true,
      };
    }
    return {
      content: [
        { type: "text", text: (p.applications ?? []).join("\n- ") || "No applications listed." },
      ],
      structuredContent: { slug: p.slug, applications: p.applications ?? [] },
    };
  },
});
