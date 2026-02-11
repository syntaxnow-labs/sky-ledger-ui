import { axiosInstance } from './axiosInstance';

export interface Invoice {
  id: string;
  name: string;
  balance: number;
}

export const fetchLedgers = async (): Promise<Invoice[]> => {
  const res = await axiosInstance.get('/invoices');
  return res.data;
};
