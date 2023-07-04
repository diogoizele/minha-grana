import { Income } from "./income.types";

type IncomePicked = Pick<
  Income,
  | "title"
  | "percent"
  | "amount"
  | "description"
  | "frequency"
  | "receivementMethod"
>;

export interface IncomeFormData extends IncomePicked {}
