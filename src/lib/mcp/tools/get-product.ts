import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { productCatalog } from "../catalog.generated";

export default defineTool({
  name: "get_product",
  title: "Get product details",
  description:
    "Fetch the full detail of a SiLiCA product by its slug — includes descriptions (KO/EN/JA), features, specifications, applications, and sub-models.",
  inputSchema: {
    slug: z.string().min(1).describe("Product slug, e.g. 'fused-silica-a-grade'."),
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
        {
          type: "text",
          text: `${p.name} (${p.enName})\n\n${p.description}`,
        },
      ],
      structuredContent: { product: p },
    };
  },
});
