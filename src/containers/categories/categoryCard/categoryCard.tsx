import { Typography, useTheme } from "@mui/material";
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { CategoryType } from "../categories.types";
import { Container } from "./categoryCard.styles";

import type { CategoryCardProps } from "./categoryCard.types";
import { useCategoryCard } from "./useCategoryCard";

export function CategoryCard({
  title,
  amount,
  amountType,
  frequency,
  id,
  type,
}: CategoryCardProps) {
  const theme = useTheme();
  const {
    formattedAmountValue,
    amountTypeTitle,
    frequencyTitle,
    categoryColor,
  } = useCategoryCard({
    title,
    amount,
    amountType,
    frequency,
    id,
    type,
  });

  return (
    <Container>
      <div className="flex grow flex-col justify-between">
        <Typography fontSize={"1.1rem"}>{title}</Typography>
        <Typography variant="h3" color={categoryColor}>
          {formattedAmountValue}
        </Typography>
      </div>
      <div className="flex grow flex-col justify-between items-end">
        {type === CategoryType.INCOME ? (
          <BsArrowUpCircle color={theme.palette.success.main} />
        ) : (
          <BsArrowDownCircle color={theme.palette.error.main} />
        )}
        <Typography fontSize={"0.875rem"} color={({palette}) => palette.grey[500]}>{frequencyTitle}</Typography>
        <Typography>{amountTypeTitle}</Typography>
      </div>
    </Container>
  );
}
