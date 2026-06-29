/**
 * Drop-in replacement exports for react-router-dom that auto-prefix the
 * current language code (/ko, /en, /ja) onto absolute paths. Pages should
 * import Link / useNavigate from this module instead of react-router-dom.
 *
 * All other exports are re-exported untouched so a single import switch
 * is enough.
 */
import { forwardRef, useCallback } from "react";
import {
  Link as RouterLink,
  LinkProps,
  NavLink as RouterNavLink,
  NavLinkProps,
  useNavigate as useRouterNavigate,
  NavigateOptions,
  To,
} from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { withLang } from "./i18nRouting";

const prefixTo = (to: To, lang: string): To => {
  if (typeof to === "string") return withLang(lang as any, to);
  if (to && typeof to === "object" && typeof to.pathname === "string") {
    return { ...to, pathname: withLang(lang as any, to.pathname) };
  }
  return to;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, ...rest },
  ref,
) {
  const { lang } = useLang();
  return <RouterLink ref={ref} to={prefixTo(to, lang)} {...rest} />;
});

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function NavLink({ to, ...rest }, ref) {
    const { lang } = useLang();
    return <RouterNavLink ref={ref} to={prefixTo(to, lang)} {...rest} />;
  },
);

export function useNavigate() {
  const nav = useRouterNavigate();
  const { lang } = useLang();
  return useCallback(
    (to: To | number, opts?: NavigateOptions) => {
      if (typeof to === "number") return nav(to);
      return nav(prefixTo(to, lang) as To, opts);
    },
    [nav, lang],
  );
}

export {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
  useMatch,
  useRoutes,
} from "react-router-dom";
export type { LinkProps, NavLinkProps, NavigateOptions, To } from "react-router-dom";
