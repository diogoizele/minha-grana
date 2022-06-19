import { Grid } from "@mui/material";

import { Container } from "./categories.styles";
import { CategoriesHeader } from "./categoriesHeader/categoriesHeader";
import { CategoriesList } from "./categoriesList/categoriesList";

export const Categories = () => {
  return (
    <Container container>
      <Grid item xs={12} flexGrow={1}>
        <CategoriesHeader />
      </Grid>
      <Grid item xs={12}>
        <CategoriesList />
      </Grid>
    </Container>
  );
};
