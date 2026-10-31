import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getProductBySlug } from "@/data/products";
import { resolveLegacyPath } from "@/lib/legacyRedirects";

const NotFound = () => {
  const location = useLocation();
  // Old addresses such as /en/silica-gel-type-b/ forward to the current product page.
  const legacyTarget = resolveLegacyPath(location.pathname, (s) => !!getProductBySlug(s));

  useEffect(() => {
    if (legacyTarget) return;
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname, legacyTarget]);

  // Keep "page not found" screens out of search results.
  useEffect(() => {
    if (legacyTarget) return;
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, [legacyTarget]);

  if (legacyTarget) return <Navigate to={legacyTarget + location.search + location.hash} replace />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
