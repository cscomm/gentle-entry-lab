import { ISSUERS, type Issuer, type QuoteItem, won } from "./shared";
import SealStamp from "./SealStamp";

const L = {
  ko: {
    title: "견 적 서",
    sub: "QUOTATION",
    no: "견적번호",
    date: "견적일",
    valid: "유효기간",
    validSuffix: (d: number) => `발행일로부터 ${d}일`,
    seller: "공 급 자",
    buyer: "수 신 처",
    company: "회사명",
    bizNo: "사업자등록번호",
    bizType: "업태",
    bizItem: "종목",
    ceo: "대표자",
    address: "주소",
    email: "이메일",
    contactPerson: "담당자",
    phone: "연락처",
    delivery: "납기",
    items: "견 적 내 역",
    no2: "No.",
    name: "품명",
    spec: "규격",
    qty: "수량",
    price: "단가",
    amount: "금액",
    subtotal: "공급가액 합계",
    vat: "부가가치세",
    total: "합계금액 (VAT 포함)",
    remarks: "비 고 및 특 약 사 항",
    bank: "입금 계좌",
    sellerSign: "공 급 자 확 인",
    buyerSign: "수 요 자 확 인",
    fx: "적용 환율",
  },
  en: {
    title: "QUOTATION",
    sub: "",
    no: "Quotation No.",
    date: "Date",
    valid: "Validity",
    validSuffix: (d: number) => `${d} days from issue date`,
    seller: "SELLER",
    buyer: "BUYER (TO)",
    company: "Company",
    bizNo: "Business Registration No.",
    bizType: "Business Type",
    bizItem: "Business Item",
    ceo: "Representative",
    address: "Address",
    email: "E-mail",
    contactPerson: "Attn.",
    phone: "Tel.",
    delivery: "Delivery",
    items: "ITEM DETAILS",
    no2: "No.",
    name: "Item Description",
    spec: "Grade / Spec",
    qty: "Qty",
    price: "Unit Price",
    amount: "Amount",
    subtotal: "Subtotal",
    vat: "VAT",
    total: "Total (VAT incl.)",
    remarks: "REMARKS & TERMS",
    bank: "Bank Account",
    sellerSign: "SELLER",
    buyerSign: "BUYER",
    fx: "Exchange Rate",
  },
} as const;

export interface QuoteDocData {
  quote_no: string;
  quote_date: string;
  valid_days: number;
  issuer: Issuer;
  lang: "ko" | "en";
  currency: string;
  fx_rate: number;
  buyer_company: string;
  buyer_contact: string;
  buyer_phone: string;
  buyer_email: string;
  delivery_terms: string;
  remarks: string;
  bank_name: string;
  bank_account: string;
  bank_holder: string;
  vat_rate: number;
  subtotal: number;
  vat_amount: number;
  total_amount: number;
  seller_contact: string;
}

const QuoteDocument = ({ data, items }: { data: QuoteDocData; items: QuoteItem[] }) => {
  const t = L[data.lang];
  const iss = ISSUERS[data.issuer] ?? ISSUERS.silica;
  const sellerName = data.lang === "en" ? iss.companyEn : iss.company;
  const cur = data.currency === "KRW" ? (data.lang === "ko" ? "원" : "KRW") : data.currency;
  const rows = [...items, ...Array.from({ length: Math.max(0, 3 - items.length) }, () => null)];

  return (
    <div id="quote-print" className="mx-auto w-full max-w-[820px] bg-white p-8 text-[13px] text-neutral-900">
      <div className="mb-5 flex items-end justify-between border-b-2 border-neutral-800 pb-3">
        <div className="text-xl font-black tracking-tight">
          <span className="mr-1 inline-block rounded bg-neutral-900 px-2 py-0.5 text-white">S</span>
          {sellerName}
        </div>
        <div className="text-right">
          <h1 className="text-2xl font-bold tracking-[0.2em]">{t.title}</h1>
          {t.sub && <p className="text-[11px] tracking-[0.3em] text-neutral-500">{t.sub}</p>}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2 text-[12px]">
        <p><span className="font-semibold">{t.no}:</span> {data.quote_no}</p>
        <p><span className="font-semibold">{t.date}:</span> {data.quote_date}</p>
        <p><span className="font-semibold">{t.valid}:</span> {t.validSuffix(data.valid_days)}</p>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-4">
        <div className="border border-neutral-300">
          <div className="border-b border-neutral-300 bg-neutral-100 px-3 py-1.5 text-[11px] font-bold tracking-widest">
            {t.seller}
          </div>
          <dl className="space-y-1 p-3 text-[12px]">
            <div><span className="text-neutral-500">{t.company}:</span> {sellerName}</div>
            {iss.bizNo && <div><span className="text-neutral-500">{t.bizNo}:</span> {iss.bizNo}</div>}
            <div><span className="text-neutral-500">{t.ceo}:</span> {iss.ceo}</div>
            <div><span className="text-neutral-500">{t.address}:</span> {iss.address}</div>
            {iss.bizType && <div><span className="text-neutral-500">{t.bizType}:</span> {iss.bizType}</div>}
            {iss.bizItem && <div><span className="text-neutral-500">{t.bizItem}:</span> {iss.bizItem}</div>}
            <div><span className="text-neutral-500">{t.email}:</span> {iss.email}</div>
          </dl>
        </div>
        <div className="border border-neutral-300">
          <div className="border-b border-neutral-300 bg-neutral-100 px-3 py-1.5 text-[11px] font-bold tracking-widest">
            {t.buyer}
          </div>
          <dl className="space-y-1 p-3 text-[12px]">
            <div><span className="text-neutral-500">{t.company}:</span> {data.buyer_company || "-"}</div>
            <div><span className="text-neutral-500">{t.contactPerson}:</span> {data.buyer_contact || "-"}</div>
            <div><span className="text-neutral-500">{t.phone}:</span> {data.buyer_phone || "-"}</div>
            <div><span className="text-neutral-500">{t.delivery}:</span> {data.delivery_terms || "-"}</div>
          </dl>
        </div>
      </div>

      <div className="mb-1 text-[11px] font-bold tracking-widest">{t.items}</div>
      <table className="w-full border-collapse text-[12px]">
        <thead>
          <tr className="bg-neutral-100">
            {[t.no2, t.name, t.spec, t.qty, t.price, t.amount].map((h, i) => (
              <th key={i} className="border border-neutral-300 px-2 py-1.5 text-center font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((it, idx) => (
            <tr key={idx}>
              <td className="border border-neutral-300 px-2 py-1.5 text-center">{idx + 1}</td>
              <td className="border border-neutral-300 px-2 py-1.5">{it?.item_name ?? ""}</td>
              <td className="border border-neutral-300 px-2 py-1.5 text-center">{it?.spec ?? ""}</td>
              <td className="border border-neutral-300 px-2 py-1.5 text-center">
                {it ? `${it.qty} ${it.unit}` : ""}
              </td>
              <td className="border border-neutral-300 px-2 py-1.5 text-right">{it ? won(it.unit_price) : ""}</td>
              <td className="border border-neutral-300 px-2 py-1.5 text-right">{it ? won(it.amount) : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3 ml-auto w-full max-w-[320px] space-y-1 text-[12px]">
        <div className="flex justify-between border-b border-neutral-200 pb-1">
          <span>{t.subtotal}</span>
          <span>{won(data.subtotal)} {cur}</span>
        </div>
        <div className="flex justify-between border-b border-neutral-200 pb-1">
          <span>{t.vat} ({data.vat_rate}%)</span>
          <span>{won(data.vat_amount)} {cur}</span>
        </div>
        <div className="flex justify-between bg-neutral-100 px-2 py-1.5 font-bold">
          <span>{t.total}</span>
          <span>{won(data.total_amount)} {cur}</span>
        </div>
        {data.currency !== "KRW" && (
          <div className="flex justify-between text-[11px] text-neutral-500">
            <span>{t.fx} (1 {data.currency} = {won(data.fx_rate)} KRW)</span>
            <span>≈ {won(data.total_amount * data.fx_rate)} KRW</span>
          </div>
        )}
      </div>

      <div className="mt-5">
        <div className="mb-1 text-[11px] font-bold tracking-widest">{t.remarks}</div>
        <div className="whitespace-pre-wrap border border-neutral-300 p-3 text-[12px] leading-relaxed">
          {data.remarks || "-"}
          {(data.bank_name || data.bank_account) && (
            <p className="mt-2 font-semibold">
              {t.bank}: {data.bank_name} {data.bank_account}
              {data.bank_holder ? ` (${data.bank_holder})` : ""}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-[12px]">
        <div className="relative border border-neutral-300 p-3">
          <div className="mb-2 text-[11px] font-bold tracking-widest">{t.sellerSign}</div>
          <div>{t.company}: {sellerName}</div>
          <div>{t.ceo}: {iss.ceo}</div>
          <div>{t.contactPerson}: {data.seller_contact || iss.contact}</div>
          <div className="mt-6 flex items-end justify-between border-t border-dashed border-neutral-300 pt-1">
            <span className="text-neutral-400">(sign)</span>
            {data.issuer === "silica" && <SealStamp size={52} />}
          </div>
        </div>
        <div className="border border-neutral-300 p-3">
          <div className="mb-2 text-[11px] font-bold tracking-widest">{t.buyerSign}</div>
          <div>{t.company}: {data.buyer_company || "-"}</div>
          <div>{t.contactPerson}: {data.buyer_contact || "-"}{data.buyer_phone ? ` (${data.buyer_phone})` : ""}</div>
          <div className="mt-6 border-t border-dashed border-neutral-300 pt-1 text-right text-neutral-400">(sign)</div>
        </div>
      </div>
    </div>
  );
};

export default QuoteDocument;
