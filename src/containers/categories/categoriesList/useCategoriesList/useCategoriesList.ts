import { useEffect, useState } from "react";

import { api } from "helpers/apis/api";

import type { Category } from "shared/categories/category.types";

export function useCategoriesList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get("/categories").then(({ data }) => {
      setCategories(data.categories);
    });
  }, []);

  return {
    categories,
  };
}
