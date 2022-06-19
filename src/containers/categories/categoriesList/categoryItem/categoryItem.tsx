import { Typography, useTheme } from "@mui/material";

import { Tag } from "components/tag/tag";
import { formatCurrency } from "utils/formatCurrency";

import { Container, Item } from "./categortItem.styles";
import { useCategoryItem } from "./useCategortItem/useCategoryItem";

import type { CategoryItemProps } from "./categoryItem.types";

export const CategoryItem = ({
  amount,
  frequency,
  id,
  title,
  type,
  amountType,
}: CategoryItemProps) => {
  const theme = useTheme();
  const {
    categoryTypeColor,
    categoryTypeText,
    categoryFrequencyText,
    categoryAmoutTypeText,
    categoryAmountTypeColor,
  } = useCategoryItem({
    amount,
    frequency,
    id,
    title,
    type,
    amountType,
  });

  return (
    <Container>
      <Item area="1 / 1 / 1 / 1">
        <Typography variant="h5">{title}</Typography>
      </Item>
      <Item area="1 / 2 / 2 / 2" justifyContent="flex-end">
        <Tag bgColor={categoryTypeColor}>{categoryTypeText}</Tag>
      </Item>
      <Item area="2 / 1 / 3 / 3" justifyContent="flex-end">
        <Typography variant="body2" color={theme.palette.text.secondary}>
          {categoryFrequencyText}
        </Typography>
      </Item>
      <Item area="3 / 1 / 3 / 2">
        <Typography
          variant="h4"
          component="strong"
          fontWeight={600}
          color={categoryTypeColor}
        >
          {formatCurrency(amount)}
        </Typography>
      </Item>
      <Item
        area="3 / 3 / 3 / 2"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Tag bgColor={categoryAmountTypeColor}>{categoryAmoutTypeText}</Tag>
      </Item>
    </Container>
  );
};
