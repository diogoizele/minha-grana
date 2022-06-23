import { CategoryType } from "../categories.types";

export type CategoriesFilterProps = {
  category: CategoryType | null;
  onFilterCategory: (category: CategoryType | null) => void;
};
