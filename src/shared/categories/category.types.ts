export enum CategoryType {
  INCOME = 1,
  EXPENSE = 2,
}

export enum CategoryFrequency {
  ONCE = 1,
  MONTHLY = 2,
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
  id: number;
  amount: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  frequency: CategoryFrequency;
  type: CategoryType;
  amountType: CategoryAmountType;
}
