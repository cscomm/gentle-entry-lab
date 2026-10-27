import { useEffect, type ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/** Shared frame for member pages. These pages are kept out of search results. */
const AuthLayout = ({ title, lead, children, wide = false }: { title: string; lead?: string; children: ReactNode; wide?: boolean }) => {
  useEffect(() => {
    document.title = `${title} | SILICA`;
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, [title]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="px-4 pb-20 pt-32">
        <div className={`mx-auto ${wide ? "max-w-3xl" : "max-w-md"}`}>
          <h1 className="text-center text-3xl font-bold text-foreground">{title}</h1>
          {lead && <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-muted-foreground">{lead}</p>}
          <div className="mt-8">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default AuthLayout;
