import { axiosInstance } from './axiosInstance';

export interface Invoice {
  id: string;
  name: string;
  balance: number;
}

export const fetchInvoice = async (): Promise<Invoice[]> => {
  const res = await axiosInstance.get('/invoices');
  return res.data;
};
