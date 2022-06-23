import { useTheme } from "@mui/material";
import { CategoryType } from "../categories.types";
import type { CategoriesFilterProps } from "./categoriesFilters.types";

export function useCategoriesFilters({
  category,
  order,
}: Pick<CategoriesFilterProps, "category" | "order">) {
  const theme = useTheme();

  const categoryTitle =
    category === CategoryType.INCOME ? "Entradas" : "Saídas";

  const categoryColor =
    category === CategoryType.INCOME
      ? theme.palette.success.light
      : theme.palette.error.light;

  let orderByTitle = "";

  switch (order) {
    case "amount":
      orderByTitle = "Valor";
      break;
    case "amountType":
      orderByTitle = "Tipo do valor";
      break;
    case "frequency":
      orderByTitle = "Frequência";
      break;
    case "type":
    default:
      orderByTitle = "Tipo";
      break;
  }

  return { orderByTitle, categoryTitle, categoryColor };
}
