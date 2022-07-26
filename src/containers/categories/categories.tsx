import { Box, Button, CircularProgress, Typography } from "@mui/material";

import errorImg from "assets/error-image.png";

import Content from "components/content/content";
import Modal from "components/modal/modal";

import { List } from "./categories.styles";
import { CategoriesFilters } from "./categoriesFilters/categoriesFilters";
import { CategoryCard } from "./categoryCard/categoryCard";
import { useCategories } from "./useCategories";

import NewCategoryModal from "./modals/newCategoryModal/newCategoryModal";

export function Categories() {
  const {
    categories,
    hasError,
    isLoading,
    categoriesFilter,
    categoriesOrder,
    categoriesOrderType,
    newCategoryModalIsOpen,
    handleFilterCategory,
    handleOrderCategory,
    handleToggleCategoriesOrderType,
    handleReloadPage,
    handleCloseNewCategoryModal,
    handleOpenNewCategoryModal,
  } = useCategories();

  return (
    <Content
      title="Categorias"
      primaryAction={{
        children: "Nova Categoria",
        variant: "contained",
        onClick: handleOpenNewCategoryModal,
      }}
    >
      {isLoading && (
        <div className="flex w-screen justify-center items-center">
          <CircularProgress />
        </div>
      )}
      {hasError && (
        <div className="flex flex-col gap-4 w-screen justify-center items-center">
          <img src={errorImg} style={{ height: "256px" }} />
          <Typography
            style={{ textAlign: "center" }}
            variant="subtitle1"
            fontSize={20}
            fontWeight={600}
            color={({ palette }) => palette.primary.main}
          >
            Ops! ocorreu um erro ao tentar buscar suas categorias...
          </Typography>
          <Button onClick={handleReloadPage} variant="outlined">
            Atualizar página
          </Button>
        </div>
      )}
      {!hasError && !isLoading && (
        <div className="w-screen flex flex-col">
          <CategoriesFilters
            category={categoriesFilter}
            order={categoriesOrder}
            orderType={categoriesOrderType}
            onOrderBy={handleOrderCategory}
            onFilterCategory={handleFilterCategory}
            onToggleOrderType={handleToggleCategoriesOrderType}
          />

          <List>
            {categories.map(({ ...categoryProps }) => (
              <CategoryCard {...categoryProps} key={categoryProps.id} />
            ))}
          </List>
        </div>
      )}
      <Modal
        open={newCategoryModalIsOpen}
        onClose={handleCloseNewCategoryModal}
      >
        <NewCategoryModal />
      </Modal>
    </Content>
  );
}
