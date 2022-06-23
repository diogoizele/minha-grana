import { useTheme } from "@mui/material";
import { useMemo } from "react";
import { formatCurrency } from "util/formatCurrency";
import {
  CategoryAmountType,
  CategoryFrequency,
  CategoryType,
} from "../categories.types";
import { CategoryCardProps } from "./categoryCard.types";

export function useCategoryCard({
  amount,
  amountType,
  frequency,
  id,
  title,
  type,
}: CategoryCardProps) {
  const theme = useTheme();

  const categoryColor =
    type === CategoryType.INCOME
      ? theme.palette.success.main
      : theme.palette.error.main;

  let formattedAmountValue = "";
  let amountTypeTitle = "";
  let frequencyTitle = "";

  switch (amountType) {
    case CategoryAmountType.VARIABLE:
      formattedAmountValue = `${amount}%`;
      amountTypeTitle = "Variável";
      break;
    case CategoryAmountType.FIXED:
    default:
      formattedAmountValue = formatCurrency(amount);
      amountTypeTitle = "Fixa";
  }

  switch (frequency) {
    case CategoryFrequency.MONTLHLY:
      frequencyTitle = "Mensal";
      break;
    case CategoryFrequency.BIMONTHLY:
      frequencyTitle = "Bimestral";
      break;
    case CategoryFrequency.QUARTERLY:
      frequencyTitle = "Trimestral";
      break;
    case CategoryFrequency.SEMIANNUALLY:
      frequencyTitle = "Semestral";
      break;
    case CategoryFrequency.ANNUALLY:
      frequencyTitle = "Anual";
      break;
    case CategoryFrequency.VARIABLE:
      frequencyTitle = "Até março";
      break;
    case CategoryFrequency.ONCE:
    default:
      frequencyTitle = "Única";
      break;
  }

  return {
    formattedAmountValue,
    amountTypeTitle,
    frequencyTitle,
    categoryColor,
  };
}
