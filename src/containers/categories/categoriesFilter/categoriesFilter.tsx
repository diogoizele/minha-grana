import { Chip, MenuItem, TextField, useTheme } from "@mui/material";
import { Container } from "./categoriesFilter.styles";

import { CategoryType } from "../categories.types";
import type { CategoriesFilterProps } from "./categoriesFilter.types";

export function CategoriesFilter({
  category,
  onFilterCategory,
}: CategoriesFilterProps) {
  const theme = useTheme();
  return (
    <Container>
      <div>
        <TextField
          select
          label="Filtrar por"
          placeholder="Filtrar por"
          id="filter-categoryType"
          value={category}
          size="small"
          fullWidth
          onChange={({ target }) =>
            onFilterCategory(Number(target.value) as CategoryType)
          }
          style={{ width: "10rem" }}
        >
          <MenuItem value={CategoryType.INCOME}>Entradas</MenuItem>
          <MenuItem value={CategoryType.EXPENSE}>Saídas</MenuItem>
        </TextField>
      </div>

      {category && (
        <Chip
          variant="outlined"
          style={{
            color:
              category === CategoryType.INCOME
                ? theme.palette.success.light
                : theme.palette.error.light,
          }}
          label={category === CategoryType.INCOME ? "Entradas" : "Saídas"}
          onDelete={() => onFilterCategory(null)}
        />
      )}
    </Container>
  );
}
