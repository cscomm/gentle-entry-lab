import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BarChart3, Boxes, FileText, FlaskConical, Loader2, Lock, LogOut, MessageSquare, RefreshCw, UserRound, Users, Wallet, Wand2 } from "lucide-react";
import { Link } from "@/lib/router";
import { ADMIN_EMAIL } from "@/components/admin/shared";
import { useMember } from "@/lib/members/MemberContext";
import { useAdminData, type Inquiry } from "@/components/admin/useAdminData";
import InquiriesTab from "@/components/admin/InquiriesTab";
import AccountsTab from "@/components/admin/AccountsTab";
import SamplesTab from "@/components/admin/SamplesTab";
import QuotesTab, { type QuoteDraft } from "@/components/admin/QuotesTab";
import FinanceTab from "@/components/admin/FinanceTab";
import DashboardTab from "@/components/admin/DashboardTab";
import ProductsTab from "@/components/admin/ProductsTab";
import FinderLogsTab from "@/components/admin/FinderLogsTab";
import MembersTab from "@/components/admin/MembersTab";

type Tab = "dashboard" | "products" | "inquiries" | "accounts" | "quotes" | "samples" | "finance" | "finder" | "members";

const TABS: { key: Tab; label: string; icon: typeof Users }[] = [
  { key: "dashboard", label: "대시보드", icon: BarChart3 },
  { key: "inquiries", label: "문의 관리", icon: MessageSquare },
  { key: "accounts", label: "거래처 관리", icon: Users },
  { key: "quotes", label: "견적서", icon: FileText },
  { key: "samples", label: "샘플 관리", icon: FlaskConical },
  { key: "finance", label: "매출 · 매입 · 수금", icon: Wallet },
  { key: "products", label: "상품 관리", icon: Boxes },
  { key: "finder", label: "AI 추천 로그", icon: Wand2 },
  { key: "members", label: "회원 정보", icon: UserRound },
];

const Admin = () => {
  const { toast } = useToast();
  const { store, loading, reload, clear } = useAdminData();
  const { session, user, loading: memberLoading, signOut } = useMember();
  // Admin data is protected by the member storage project's access rules:
  // only the admin account can read or write it.
  const authed = Boolean(session && user?.email?.toLowerCase() === ADMIN_EMAIL);
  const [tab, setTab] = useState<Tab>("dashboard");
  const [accountFocus, setAccountFocus] = useState<string | null>(null);
  const [quoteDraft, setQuoteDraft] = useState<QuoteDraft | null>(null);

  useEffect(() => {
    document.title = "관리자 · 통합 관리";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  useEffect(() => {
    if (authed) {
      reload().catch(() => toast({ title: "자료를 불러오지 못했습니다", variant: "destructive" }));
    } else {
      clear();
    }
  }, [authed, reload, clear, toast]);

  const logout = async () => {
    await signOut();
    clear();
  };

  const openAccount = (id: string) => {
    setAccountFocus(id);
    setTab("accounts");
  };

  const quoteFromInquiry = (i: Inquiry) => {
    setQuoteDraft({
      account_id: i.account_id ?? "",
      inquiry_id: i.id,
      channel: i.channel,
      buyer_company: i.company ?? "",
      buyer_contact: i.name ?? "",
      buyer_phone: i.phone ?? "",
      buyer_email: i.email ?? "",
    });
    setTab("quotes");
  };

  if (memberLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </main>
    );
  }

  if (!authed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
        <div className="w-full max-w-sm rounded-xl border bg-background p-8 text-center shadow-sm">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-semibold">관리자 모드</h1>
          </div>
          {session ? (
            <>
              <p className="mb-6 text-sm text-muted-foreground">
                현재 로그인된 계정({user?.email ?? "이메일 없음"})은 관리자 계정이 아닙니다.
              </p>
              <div className="flex flex-col gap-2">
                <Button asChild className="w-full">
                  <Link to="/login/?next=%2Fadmin%2F">관리자 계정으로 다시 로그인</Link>
                </Button>
                <Button variant="ghost" className="w-full" onClick={logout}>
                  로그아웃
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="mb-6 text-sm text-muted-foreground">
                관리자 회원 계정으로 로그인하면 이용할 수 있습니다.
              </p>
              <Button asChild className="w-full">
                <Link to="/login/?next=%2Fadmin%2F">관리자 로그인</Link>
              </Button>
            </>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/20 px-4 py-8 md:px-8">
      <style>{`@media print { body * { visibility: hidden; } #quote-print, #quote-print *, #transaction-print, #transaction-print * { visibility: visible; } #quote-print, #transaction-print { position: absolute; left: 0; top: 0; width: 100%; } }`}</style>
      <div className="mx-auto max-w-7xl">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div>
            <h1 className="text-xl font-semibold">통합 관리자</h1>
            <p className="text-sm text-muted-foreground">문의 · 거래처 · 견적 · 샘플 · 손익 통합 관리</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => reload()} disabled={loading}>
              <RefreshCw className={`mr-1.5 h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} /> 새로고침
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="mr-1.5 h-3.5 w-3.5" /> 나가기
            </Button>
          </div>
        </header>

        <nav className="mb-6 flex flex-wrap gap-1.5 border-b pb-2 print:hidden">
          {TABS.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  tab === t.key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" /> {t.label}
              </button>
            );
          })}
        </nav>

        {tab === "dashboard" && <DashboardTab store={store} />}
        {tab === "inquiries" && (
          <InquiriesTab store={store} reload={reload} onOpenAccount={openAccount} onQuoteFromInquiry={quoteFromInquiry} />
        )}
        {tab === "accounts" && (
          <AccountsTab
            store={store}
            reload={reload}
            focusId={accountFocus}
            onFocused={() => setAccountFocus(null)}
            onQuoteForAccount={(a) =>
              quoteFromInquiry({
                id: "",
                name: a.ceo_name ?? "",
                phone: a.phone,
                email: a.email,
                company: a.company_name,
                message: "",
                status: "pending",
                admin_note: null,
                source: "account",
                channel: a.channel,
                account_id: a.id,
                created_at: a.created_at,
                updated_at: a.updated_at,
              })
            }
          />
        )}
        {tab === "quotes" && (
          <QuotesTab store={store} reload={reload} draft={quoteDraft} onDraftConsumed={() => setQuoteDraft(null)} />
        )}
        {tab === "samples" && <SamplesTab store={store} reload={reload} />}
        {tab === "finance" && <FinanceTab store={store} reload={reload} />}
        {tab === "products" && <ProductsTab />}
        {tab === "finder" && <FinderLogsTab />}
        {tab === "members" && <MembersTab />}
      </div>
    </main>
  );
};

export default Admin;
