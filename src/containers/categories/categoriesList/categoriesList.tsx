import { Container, List } from "./categoriesList.styles";

import { CategoryItem } from "./categoryItem/categoryItem";
import { useCategoriesList } from "./useCategoriesList/useCategoriesList";

export const CategoriesList = () => {
  const { categories } = useCategoriesList();

  return (
    <Container>
      <List>
        {categories.map(
          ({ amount, frequency, id, title, type, amountType }) => (
            <CategoryItem
              amount={amount}
              frequency={frequency}
              id={id}
              title={title}
              type={type}
              key={id}
              amountType={amountType}
            />
          )
        )}
      </List>
    </Container>
  );
};
