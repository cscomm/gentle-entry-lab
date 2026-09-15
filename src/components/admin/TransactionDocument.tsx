import { ISSUERS, type Issuer, type Quote, type QuoteItem, type SalesVoucher, won } from "./shared";
import SealStamp from "./SealStamp";

interface Props {
  quote: Quote;
  voucher: SalesVoucher;
  items: QuoteItem[];
}

const TransactionDocument = ({ quote, voucher, items }: Props) => {
  const issuer = ISSUERS[(quote.issuer as Issuer) ?? "silica"] ?? ISSUERS.silica;
  const rows = [...items, ...Array.from({ length: Math.max(0, 5 - items.length) }, () => null)];

  return (
    <div id="transaction-print" className="mx-auto w-full max-w-[820px] bg-white p-8 text-[13px] text-neutral-900">
      <header className="mb-5 border-b-2 border-neutral-800 pb-3 text-center">
        <h1 className="text-2xl font-bold tracking-[0.2em]">거 래 명 세 표</h1>
        <p className="mt-1 text-[11px] tracking-widest text-neutral-500">TRANSACTION STATEMENT</p>
      </header>

      <div className="mb-4 grid grid-cols-3 gap-2 text-[12px]">
        <p><span className="font-semibold">명세표 번호:</span> {voucher.transaction_no || "-"}</p>
        <p><span className="font-semibold">출고일:</span> {voucher.delivery_date || voucher.voucher_date}</p>
        <p><span className="font-semibold">견적번호:</span> {quote.quote_no}</p>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-4">
        <section className="border border-neutral-300">
          <h2 className="border-b border-neutral-300 bg-neutral-100 px-3 py-1.5 text-[11px] font-bold tracking-widest">공 급 자</h2>
          <dl className="relative space-y-1 p-3 text-[12px]">
            <div><span className="text-neutral-500">상호:</span> {issuer.company}</div>
            <div><span className="text-neutral-500">등록번호:</span> {issuer.bizNo}</div>
            <div><span className="text-neutral-500">대표자:</span> {issuer.ceo}</div>
            <div><span className="text-neutral-500">주소:</span> {issuer.address}</div>
            <div><span className="text-neutral-500">업태:</span> {issuer.bizType}</div>
            <div><span className="text-neutral-500">종목:</span> {issuer.bizItem}</div>
            {quote.issuer === "silica" && (
              <div className="absolute right-3 top-3"><SealStamp size={54} /></div>
            )}
          </dl>
        </section>
        <section className="border border-neutral-300">
          <h2 className="border-b border-neutral-300 bg-neutral-100 px-3 py-1.5 text-[11px] font-bold tracking-widest">공 급 받 는 자</h2>
          <dl className="space-y-1 p-3 text-[12px]">
            <div><span className="text-neutral-500">상호:</span> {quote.buyer_company || "-"}</div>
            <div><span className="text-neutral-500">담당자:</span> {quote.buyer_contact || "-"}</div>
            <div><span className="text-neutral-500">연락처:</span> {quote.buyer_phone || "-"}</div>
            <div><span className="text-neutral-500">이메일:</span> {quote.buyer_email || "-"}</div>
          </dl>
        </section>
      </div>

      <table className="w-full border-collapse text-[12px]">
        <thead>
          <tr className="bg-neutral-100">
            {["No.", "품명", "규격", "수량", "단가", "공급가액"].map((heading) => (
              <th key={heading} className="border border-neutral-300 px-2 py-1.5 text-center font-semibold">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index}>
              <td className="border border-neutral-300 px-2 py-1.5 text-center">{index + 1}</td>
              <td className="border border-neutral-300 px-2 py-1.5">{item?.item_name ?? ""}</td>
              <td className="border border-neutral-300 px-2 py-1.5 text-center">{item?.spec ?? ""}</td>
              <td className="border border-neutral-300 px-2 py-1.5 text-center">{item ? `${item.qty} ${item.unit}` : ""}</td>
              <td className="border border-neutral-300 px-2 py-1.5 text-right">{item ? won(item.unit_price) : ""}</td>
              <td className="border border-neutral-300 px-2 py-1.5 text-right">{item ? won(item.amount) : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3 ml-auto w-full max-w-[320px] space-y-1 text-[12px]">
        <div className="flex justify-between border-b border-neutral-200 pb-1"><span>공급가액</span><span>{won(quote.subtotal)}원</span></div>
        <div className="flex justify-between border-b border-neutral-200 pb-1"><span>부가가치세</span><span>{won(quote.vat_amount)}원</span></div>
        <div className="flex justify-between bg-neutral-100 px-2 py-1.5 font-bold"><span>합계금액</span><span>{won(quote.total_amount)}원</span></div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 text-[12px]">
        <div className="border border-neutral-300 p-3">
          <p className="font-bold">공급자 확인</p>
          <p className="mt-2">{issuer.company} · 대표 {issuer.ceo}</p>
          <p className="mt-6 border-t border-dashed border-neutral-300 pt-1 text-right text-neutral-400">(인)</p>
        </div>
        <div className="border border-neutral-300 p-3">
          <p className="font-bold">인수자 확인</p>
          <p className="mt-2">{quote.buyer_company || "-"} · {quote.buyer_contact || "-"}</p>
          <p className="mt-6 border-t border-dashed border-neutral-300 pt-1 text-right text-neutral-400">(인)</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDocument;