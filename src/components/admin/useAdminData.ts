import { useCallback, useState } from "react";
import {
  crm,
  inquiryApi,
  type Account,
  type MoneyRow,
  type PurchaseVoucher,
  type Quote,
  type QuoteItem,
  type SalesVoucher,
  type Sample,
} from "./shared";

export type Status = "pending" | "in_progress" | "done" | "archived";

export interface Inquiry {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  company: string | null;
  message: string;
  status: Status;
  admin_note: string | null;
  source: string;
  channel: string;
  account_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface AdminStore {
  inquiries: Inquiry[];
  accounts: Account[];
  quotes: Quote[];
  quoteItems: QuoteItem[];
  samples: Sample[];
  salesVouchers: SalesVoucher[];
  purchaseVouchers: PurchaseVoucher[];
  receipts: MoneyRow[];
  payments: MoneyRow[];
}

const empty: AdminStore = {
  inquiries: [],
  accounts: [],
  quotes: [],
  quoteItems: [],
  samples: [],
  salesVouchers: [],
  purchaseVouchers: [],
  receipts: [],
  payments: [],
};

export const useAdminData = () => {
  const [store, setStore] = useState<AdminStore>(empty);
  const [loading, setLoading] = useState(false);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const [inq, boot] = await Promise.all([
        inquiryApi({ action: "list" }),
        crm({ action: "bootstrap" }),
      ]);
      setStore({
        inquiries: inq.inquiries ?? [],
        accounts: boot.accounts ?? [],
        quotes: boot.quotes ?? [],
        quoteItems: boot.quote_items ?? [],
        samples: boot.samples ?? [],
        salesVouchers: boot.sales_vouchers ?? [],
        purchaseVouchers: boot.purchase_vouchers ?? [],
        receipts: boot.sales_receipts ?? [],
        payments: boot.purchase_payments ?? [],
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const clear = useCallback(() => setStore(empty), []);

  return { store, setStore, loading, reload, clear };
};
