import type {
  CategoryOrderSortType,
  CategoryOrderValues,
  CategoryType,
} from "../categories.types";

export type CategoriesFilterProps = {
  category: CategoryType | null;
  order: CategoryOrderValues;
  orderType: CategoryOrderSortType;

  onFilterCategory: (category: CategoryType | null) => void;
  onOrderBy: (order: CategoryOrderValues) => void;
  onToggleOrderType: () => void;
};
