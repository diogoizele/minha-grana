export interface Income {
  id: number;
  title: string;
  percent: number;
  amount: number;
  createdAt: string;
  updatedAt: string;

  description?: string;
  frequency?: "ONCE";
  isBlocked?: boolean;
  receivementMethod?: string;
}
