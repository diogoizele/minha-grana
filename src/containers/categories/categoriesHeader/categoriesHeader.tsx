import { Button, Grid, Typography } from "@mui/material";
import { Container } from "./categoriesHeader.styles";

export const CategoriesHeader = () => {
  return (
    <Container>
      <Grid item>
        <Typography variant="h4">Categorias</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Nova categoria
        </Button>
      </Grid>
    </Container>
  );
};
