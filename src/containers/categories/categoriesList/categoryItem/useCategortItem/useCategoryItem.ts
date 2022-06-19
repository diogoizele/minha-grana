import { useMemo } from "react";
import { useTheme } from "@mui/material";

import {
  CategoryAmountType,
  CategoryFrequency,
  CategoryType,
} from "shared/categories/category.types";

import type { UseCategoryItem } from "./useCategoryItem.types";

export function useCategoryItem({
  amount,
  frequency,
  id,
  title,
  type,
  amountType,
}: UseCategoryItem) {
  const theme = useTheme();

  const categoryAmoutTypeText = useMemo(() => {
    switch (amountType) {
      case CategoryAmountType.FIXED:
        return "Fixa";
      case CategoryAmountType.VARIABLE:
        return "Variável";
      default:
        return "";
    }
  }, [amountType]);

  const categoryFrequencyText = useMemo(() => {
    switch (frequency) {
      case CategoryFrequency.ONCE:
        return "Única";
      case CategoryFrequency.MONTHLY:
        return "Mensal";
      case CategoryFrequency.BIMONTHLY:
        return "Bimestral";
      case CategoryFrequency.QUARTERLY:
        return "Trimestral";
      case CategoryFrequency.SEMIANNUALLY:
        return "Semestral";
      case CategoryFrequency.ANNUALLY:
        return "Anual";
      default:
        return "";
    }
  }, [frequency]);

  const categoryAmountTypeColor = useMemo(() => {
    switch (amountType) {
      case CategoryAmountType.FIXED:
        return theme.palette.secondary.main;
      case CategoryAmountType.VARIABLE:
        return theme.palette.info.main;
      default:
        return theme.palette.primary.main;
    }
  }, [amountType, theme]);

  const categoryTypeColor = useMemo(() => {
    switch (type) {
      case CategoryType.INCOME:
        return theme.palette.success.main;
      case CategoryType.EXPENSE:
        return theme.palette.error.main;
      default:
        return theme.palette.primary.main;
    }
  }, [type, theme]);

  const categoryTypeText = useMemo(() => {
    switch (type) {
      case CategoryType.INCOME:
        return "Entrada";
      case CategoryType.EXPENSE:
        return "Saída";
      default:
        return "Não atribuído";
    }
  }, [type]);

  return {
    categoryTypeColor,
    categoryTypeText,
    categoryFrequencyText,
    categoryAmoutTypeText,
    categoryAmountTypeColor,
  };
}
