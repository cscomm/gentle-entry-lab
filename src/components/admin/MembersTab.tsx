import { useCallback, useEffect, useMemo, useState } from "react";
import { Download, RefreshCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { crm, downloadCsv, fmtDate, fmtDateTime } from "./shared";

interface MemberRow {
  member_id: string;
  account_email: string | null;
  contact_email: string | null;
  provider: string | null;
  full_name: string;
  company: string;
  phone: string;
  zipcode: string;
  address: string;
  address_detail: string;
  terms_agreed_at: string | null;
  signed_up_at: string | null;
  last_seen_at: string;
  created_at: string;
  updated_at: string;
}

const PROVIDER: Record<string, string> = { email: "이메일", google: "구글", kakao: "카카오" };

const fullAddress = (m: MemberRow) =>
  [m.zipcode && `(${m.zipcode})`, m.address, m.address_detail].filter(Boolean).join(" ");

const emailOf = (m: MemberRow) => m.account_email || m.contact_email || "";

/** Read-only list of members who signed up on the site. */
const MembersTab = () => {
  const { toast } = useToast();
  const [rows, setRows] = useState<MemberRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await crm({ action: "member_profiles" });
      setRows(res.rows ?? []);
    } catch {
      toast({ title: "회원 정보를 불러오지 못했습니다", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    load();
  }, [load]);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter((m) =>
      [m.full_name, m.company, m.phone, emailOf(m), m.address].some((v) => (v ?? "").toLowerCase().includes(term)),
    );
  }, [rows, q]);

  const stats = useMemo(() => {
    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);
    return {
      total: rows.length,
      month: rows.filter((m) => new Date(m.signed_up_at ?? m.created_at) >= monthStart).length,
      incomplete: rows.filter((m) => !m.full_name || !m.company || !m.phone || !m.address).length,
    };
  }, [rows]);

  const exportCsv = () => {
    downloadCsv(`members-${new Date().toISOString().slice(0, 10)}.csv`, [
      ["가입일", "이름", "회사", "전화번호", "이메일", "가입 방법", "주소", "약관 동의", "최근 접속"],
      ...list.map((m) => [
        fmtDate(m.signed_up_at ?? m.created_at),
        m.full_name,
        m.company,
        m.phone,
        emailOf(m),
        PROVIDER[m.provider ?? ""] ?? m.provider ?? "",
        fullAddress(m),
        m.terms_agreed_at ? fmtDate(m.terms_agreed_at) : "",
        fmtDateTime(m.last_seen_at),
      ]),
    ]);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          ["전체 회원", stats.total],
          ["이번 달 가입", stats.month],
          ["정보 미완성", stats.incomplete],
        ].map(([label, n]) => (
          <div key={label as string} className="rounded-xl border bg-background p-4">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="mt-1 text-2xl font-semibold">{n}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="relative min-w-[220px] flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="이름, 회사, 전화번호, 이메일 검색" className="pl-9" />
        </div>
        <Button variant="outline" size="sm" onClick={load} disabled={loading}>
          <RefreshCw className={`mr-1.5 h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} /> 새로고침
        </Button>
        <Button variant="outline" size="sm" onClick={exportCsv} disabled={list.length === 0}>
          <Download className="mr-1.5 h-3.5 w-3.5" /> CSV
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        회원 정보는 보기 전용입니다. 회원이 "내 정보"에서 저장하거나 로그인하면 자동으로 갱신됩니다.
      </p>

      <div className="overflow-x-auto rounded-xl border bg-background">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="bg-muted/50 text-left text-xs text-muted-foreground">
            <tr>
              <th className="px-3 py-2.5 font-medium">가입일</th>
              <th className="px-3 py-2.5 font-medium">이름</th>
              <th className="px-3 py-2.5 font-medium">회사</th>
              <th className="px-3 py-2.5 font-medium">전화번호</th>
              <th className="px-3 py-2.5 font-medium">이메일</th>
              <th className="px-3 py-2.5 font-medium">가입 방법</th>
              <th className="px-3 py-2.5 font-medium">주소</th>
              <th className="px-3 py-2.5 font-medium">최근 접속</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {list.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-3 py-10 text-center text-muted-foreground">
                  {loading ? "불러오는 중…" : "아직 등록된 회원이 없습니다"}
                </td>
              </tr>
            ) : (
              list.map((m) => (
                <tr key={m.member_id} className="align-top">
                  <td className="whitespace-nowrap px-3 py-2.5">{fmtDate(m.signed_up_at ?? m.created_at)}</td>
                  <td className="px-3 py-2.5 font-medium">{m.full_name || <span className="text-muted-foreground">미입력</span>}</td>
                  <td className="px-3 py-2.5">{m.company || <span className="text-muted-foreground">미입력</span>}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{m.phone}</td>
                  <td className="px-3 py-2.5">
                    {emailOf(m)}
                    {!m.account_email && m.contact_email && (
                      <span className="ml-1 text-xs text-muted-foreground">(직접 입력)</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5">{PROVIDER[m.provider ?? ""] ?? m.provider ?? ""}</td>
                  <td className="px-3 py-2.5 text-muted-foreground">{fullAddress(m)}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-muted-foreground">{fmtDateTime(m.last_seen_at)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembersTab;
