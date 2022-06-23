import { Chip, MenuItem, TextField } from "@mui/material";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { Container } from "./categoriesFilters.styles";

import { useCategoriesFilters } from "./useCategoriesFilters";
import { CategoryType } from "../categories.types";
import type { CategoriesFilterProps } from "./categoriesFilters.types";

export function CategoriesFilters({
  category,
  order,
  orderType,
  onOrderBy,
  onFilterCategory,
  onToggleOrderType,
}: CategoriesFilterProps) {
  const { orderByTitle, categoryTitle, categoryColor } = useCategoriesFilters({
    category,
    order,
  });

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
      <div>
        <TextField
          select
          label="Ordenar por"
          placeholder="Ordenar por"
          id="filter-categoryType"
          value={order}
          size="small"
          fullWidth
          onChange={({ target }) =>
            onOrderBy(
              target.value as "type" | "amount" | "amountType" | "frequency"
            )
          }
          style={{ width: "10rem" }}
        >
          <MenuItem value="type">Tipo</MenuItem>
          <MenuItem value="amount">Valor</MenuItem>
          <MenuItem value="frequency">Frequência</MenuItem>
          <MenuItem value="amountType">Tipo do valor</MenuItem>
        </TextField>
      </div>

      {category && (
        <Chip
          variant="outlined"
          
          label={categoryTitle}
          onDelete={() => onFilterCategory(null)}
        />
      )}

      {order && (
        <Chip
          variant="outlined"
          label={orderByTitle}
          icon={orderType === "desc" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          onClick={onToggleOrderType}
          onDelete={() => onOrderBy(null)}
        />
      )}
    </Container>
  );
}
