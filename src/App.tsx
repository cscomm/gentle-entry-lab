import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import SilicaGelCategory from "./pages/SilicaGelCategory.tsx";
import SilicaGelApplications from "./pages/SilicaGelApplications.tsx";
import PrecipitatedSilicaCategory from "./pages/PrecipitatedSilicaCategory.tsx";
import PrecipitatedSilicaApplications from "./pages/PrecipitatedSilicaApplications.tsx";
import FumedSilicaCategory from "./pages/FumedSilicaCategory.tsx";
import FumedSilicaApplications from "./pages/FumedSilicaApplications.tsx";
import About from "./pages/About.tsx";
import Terms from "./pages/Terms.tsx";
import Privacy from "./pages/Privacy.tsx";
import Board from "./pages/Board.tsx";
import BoardNew from "./pages/BoardNew.tsx";
import BoardDetail from "./pages/BoardDetail.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
import { LanguageProvider } from "./contexts/LanguageContext";
import CanonicalUrl from "./components/CanonicalUrl";
import { detectInitialLang, isLang, SUPPORTED_LANGS } from "./lib/i18nRouting";

const queryClient = new QueryClient();

// "/" → "/{lang}" based on stored / browser preference.
const RootRedirect = () => <Navigate to={`/${detectInitialLang()}`} replace />;

// Unknown top-level path (no lang prefix) → prepend detected lang. Preserves search & hash.
const LegacyRedirect = () => {
  const { pathname, search, hash } = useLocation();
  return <Navigate to={`/${detectInitialLang()}${pathname}${search}${hash}`} replace />;
};

// Validates :lang and renders the localized app shell.
const LangShell = () => {
  const { lang } = useParams();
  const { pathname, search, hash } = useLocation();
  if (!isLang(lang)) {
    const rest = pathname.replace(/^\/[^/]+/, "");
    return <Navigate to={`/${detectInitialLang()}${rest}${search}${hash}`} replace />;
  }
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="products/silica-gel" element={<SilicaGelCategory />} />
      <Route path="applications/silica-gel" element={<SilicaGelApplications />} />
      <Route path="products/precipitated-silica" element={<PrecipitatedSilicaCategory />} />
      <Route path="applications/precipitated-silica" element={<PrecipitatedSilicaApplications />} />
      <Route path="products/fumed-silica" element={<FumedSilicaCategory />} />
      <Route path="applications/fumed-silica" element={<FumedSilicaApplications />} />
      <Route path="products/:slug" element={<ProductDetail />} />
      <Route path="about" element={<About />} />
      <Route path="terms" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="board" element={<Board />} />
      <Route path="board/new" element={<BoardNew />} />
      <Route path="board/:id" element={<BoardDetail />} />
      <Route path="unsubscribe" element={<Unsubscribe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <CanonicalUrl />
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            {SUPPORTED_LANGS.map((l) => (
              <Route key={l} path={`/${l}/*`} element={<LangShell />} />
            ))}
            {/* Legacy paths without a lang prefix → redirect with detected lang */}
            <Route path="*" element={<LegacyRedirect />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
