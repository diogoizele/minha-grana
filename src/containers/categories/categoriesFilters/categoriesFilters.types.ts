import type { CategoryType } from "../categories.types";

export type CategoriesFilterProps = {
  category: CategoryType | null;
  order: "type" | "amount" | "amountType" | "frequency" | null;
  orderType: "asc" | "desc";
  onFilterCategory: (category: CategoryType | null) => void;
  onOrderBy: (
    order: "type" | "amount" | "amountType" | "frequency" | null
  ) => void;
  onToggleOrderType: () => void;
};
