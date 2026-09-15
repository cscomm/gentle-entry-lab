import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { BarChart3, Download, FileText, FlaskConical, Lock, LogOut, MessageSquare, RefreshCw, Users, Wallet } from "lucide-react";
import { PW_KEY, inquiryApi } from "@/components/admin/shared";
import { useAdminData, type Inquiry } from "@/components/admin/useAdminData";
import InquiriesTab from "@/components/admin/InquiriesTab";
import AccountsTab from "@/components/admin/AccountsTab";
import SamplesTab from "@/components/admin/SamplesTab";
import QuotesTab, { type QuoteDraft } from "@/components/admin/QuotesTab";
import FinanceTab from "@/components/admin/FinanceTab";
import DashboardTab from "@/components/admin/DashboardTab";

type Tab = "dashboard" | "inquiries" | "accounts" | "quotes" | "samples" | "finance";

const TABS: { key: Tab; label: string; icon: typeof Users }[] = [
  { key: "dashboard", label: "대시보드", icon: BarChart3 },
  { key: "inquiries", label: "문의 관리", icon: MessageSquare },
  { key: "accounts", label: "거래처 관리", icon: Users },
  { key: "quotes", label: "견적서", icon: FileText },
  { key: "samples", label: "샘플 관리", icon: FlaskConical },
  { key: "finance", label: "매출 · 매입 · 수금", icon: Wallet },
];

const Admin = () => {
  const { toast } = useToast();
  const { store, loading, reload, clear } = useAdminData();
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [busy, setBusy] = useState(false);
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
    if (sessionStorage.getItem(PW_KEY)) {
      setAuthed(true);
      reload().catch(() => toast({ title: "자료를 불러오지 못했습니다", variant: "destructive" }));
    }
  }, [reload, toast]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      sessionStorage.setItem(PW_KEY, password);
      await inquiryApi({ action: "login" });
      setAuthed(true);
      setPassword("");
      await reload();
    } catch {
      sessionStorage.removeItem(PW_KEY);
      toast({ title: "비밀번호가 올바르지 않습니다", variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem(PW_KEY);
    setAuthed(false);
    clear();
  };

  const backfill = async () => {
    try {
      const res = await inquiryApi({ action: "backfill" });
      await reload();
      toast({ title: `지난 문의 ${res.imported ?? 0}건을 불러왔습니다` });
    } catch {
      toast({ title: "불러오기에 실패했습니다", variant: "destructive" });
    }
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

  if (!authed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm rounded-xl border bg-background p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-semibold">관리자 모드</h1>
          </div>
          <label htmlFor="admin-pw" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
            비밀번호
          </label>
          <Input
            id="admin-pw"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="mb-4"
          />
          <Button type="submit" className="w-full" disabled={busy || !password}>
            {busy ? "확인 중..." : "입장"}
          </Button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/20 px-4 py-8 md:px-8">
      <style>{`@media print { body * { visibility: hidden; } #quote-print, #quote-print * { visibility: visible; } #quote-print { position: absolute; left: 0; top: 0; width: 100%; } }`}</style>
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
            <Button variant="outline" size="sm" onClick={backfill}>
              <Download className="mr-1.5 h-3.5 w-3.5" /> 지난 문의 불러오기
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
      </div>
    </main>
  );
};

export default Admin;
