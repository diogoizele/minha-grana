import type { Category } from "shared/categories/category.types";

export type CategoryItemProps = Pick<
  Category,
  "id" | "title" | "amount" | "type" | "frequency" | "amountType"
>;
