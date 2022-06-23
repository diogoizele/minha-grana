export enum CategoryType {
  INCOME = 1,
  EXPENSE = 2,
}

export enum CategoryFrequency {
  ONCE = 1,
  MONTLHLY = 2,
  BIMONTHLY = 3,
  QUARTERLY = 4,
  SEMIANNUALLY = 5,
  ANNUALLY = 6,
  VARIABLE = 7,
}

export enum CategoryAmountType {
  FIXED = 1,
  VARIABLE = 2,
}

export interface Category {
  id: 1;
  title: string;
  amount: number;
  type: CategoryType;
  frequency: CategoryFrequency;
  amountType: CategoryAmountType;
}
