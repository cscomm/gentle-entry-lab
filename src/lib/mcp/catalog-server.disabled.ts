import { defineMcp } from "@lovable.dev/mcp-js";
import listProductsTool from "./tools/list-products";
import getProductTool from "./tools/get-product";
import searchProductsTool from "./tools/search-products";
import listApplicationsTool from "./tools/list-applications";

export default defineMcp({
  name: "silica-catalog-mcp",
  title: "SiLiCA Product Catalog MCP",
  version: "0.1.0",
  instructions:
    "Tools for exploring the SiLiCA silica product catalog: fused silica, quartz sand, silica gel, precipitated silica, fumed silica, and related grades. Use `list_products` to browse (optionally by category), `search_products` for keyword search, `get_product` for full details by slug, and `list_applications` for the industrial-use list of a product.",
  tools: [listProductsTool, getProductTool, searchProductsTool, listApplicationsTool],
});
