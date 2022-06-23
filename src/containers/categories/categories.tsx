import { CircularProgress, Typography } from "@mui/material";

import errorImg from "assets/error-image.png";

import { Content } from "components/content/content";

import { List } from "./categories.styles";
import { CategoriesFilter } from "./categoriesFilter/categoriesFilter";
import { CategoryCard } from "./categoryCard/categoryCard";
import { useCategories } from "./useCategories";

export function Categories() {
  const {
    categories,
    hasError,
    isLoading,
    categoriesFilter,
    handleFilterCategory,
  } = useCategories();

  return (
    <Content
      title="Categorias"
      primaryAction={{ children: "Nova Categoria", variant: "contained" }}
    >
      {isLoading && (
        <div className="flex w-screen justify-center items-center">
          <CircularProgress />
        </div>
      )}
      {hasError && (
        <div className="flex flex-col gap-8 w-screen justify-center items-center">
          <img src={errorImg} style={{ height: "256px" }} />
          <Typography
            variant="subtitle1"
            fontSize={20}
            fontWeight={600}
            color={({ palette }) => palette.primary.main}
          >
            Ops! ocorreu um erro ao tentar buscar suas categorias...
          </Typography>
        </div>
      )}
      {!hasError && !isLoading && (
        <div className="w-screen flex flex-col">
          <CategoriesFilter
            category={categoriesFilter}
            onFilterCategory={handleFilterCategory}
          />

          <List>
            {categories.map(({ ...categoryProps }) => (
              <CategoryCard {...categoryProps} key={categoryProps.id} />
            ))}
          </List>
        </div>
      )}
    </Content>
  );
}
