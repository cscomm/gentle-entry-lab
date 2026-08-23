import { useEffect, useState } from "react";

/**
 * Blocks visitors located in mainland China from viewing the site.
 *
 * Important: search-engine crawlers (Googlebot, Naver Yeti, Bingbot, Daum, AI
 * crawlers, social preview bots ...) are ALWAYS allowed through so the geo gate
 * can never hurt indexing. The prerender/build pipeline is allowed too.
 */

const BLOCKED_COUNTRIES = ["CN"];

// Crawlers & preview bots that must never be blocked.
const BOT_UA =
  /(googlebot|google-inspectiontool|storebot-google|adsbot|mediapartners-google|apis-google|bingbot|bingpreview|yeti|naver|daum|slurp|duckduckbot|baiduspider|yandex|applebot|facebookexternalhit|facebot|twitterbot|linkedinbot|slackbot|telegrambot|whatsapp|discordbot|pinterest|petalbot|gptbot|oai-searchbot|chatgpt-user|perplexitybot|claudebot|anthropic-ai|google-extended|ccbot|amazonbot|bytespider|headlesschrome|prerender|lighthouse|crawler|spider|bot\/)/i;

const isExempt = () => {
  if (typeof navigator === "undefined") return true;
  const ua = navigator.userAgent || "";
  if (BOT_UA.test(ua)) return true;
  // Prerender / automated build browsers
  if ((navigator as Navigator & { webdriver?: boolean }).webdriver) return true;
  return false;
};

const lookupCountry = async (): Promise<string | null> => {
  const endpoints: Array<{ url: string; pick: (data: unknown) => string | undefined }> = [
    {
      url: "https://get.geojs.io/v1/ip/country.json",
      pick: (d) => (d as { country?: string })?.country,
    },
    {
      url: "https://ipapi.co/json/",
      pick: (d) => (d as { country_code?: string })?.country_code,
    },
  ];

  for (const ep of endpoints) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(ep.url, { signal: controller.signal });
      clearTimeout(timer);
      if (!res.ok) continue;
      const code = ep.pick(await res.json());
      if (code) return String(code).toUpperCase();
    } catch {
      // try next endpoint
    }
  }
  return null;
};

const BlockedNotice = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6">
    <div className="max-w-md text-center">
      <h1 className="text-xl font-semibold text-foreground">
        Service not available in your region
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Access to this website is currently restricted in your region.
        <br />
        For business inquiries, please contact us by e-mail.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        由于地区限制，本网站暂不提供访问。业务咨询请通过电子邮件联系我们。
      </p>
      <a
        href="mailto:contact@silica.co.kr"
        className="mt-6 inline-block rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        contact@silica.co.kr
      </a>
    </div>
  </main>
);

const GeoGate = ({ children }: { children: React.ReactNode }) => {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (isExempt()) return;
    let cancelled = false;
    lookupCountry().then((code) => {
      // Fail open: unknown location is never blocked.
      if (!cancelled && code && BLOCKED_COUNTRIES.includes(code)) setBlocked(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (blocked) return <BlockedNotice />;
  return <>{children}</>;
};

export default GeoGate;
