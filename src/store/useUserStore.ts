import { create } from 'zustand';
import { fetchLedgers, type Invoice } from '../api/invoice.api';
interface InvoiceState {
  invoices: Invoice[];
  loading: boolean;
  error?: string;

  loadInvoice: () => Promise<void>;
}

export const useInvoiceStore = create<InvoiceState>((set) => ({
  invoices: [],
  loading: false,

  loadInvoice: async () => {
    set({ loading: true, error: undefined });
    try {
      const data = await fetchLedgers();
      set({ invoices: data, loading: false });
    } catch (e: any) {
      set({ error: e.message, loading: false });
    }
  }

}));
