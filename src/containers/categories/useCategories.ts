import { useEffect, useState } from "react";

import * as categoryApi from "api/categories/categories";

import type { Category, CategoryType } from "./categories.types";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState<CategoryType | null>(
    null
  );

  const handleFilterCategory = (category: CategoryType | null) =>
    setCategoriesFilter(category);

  useEffect(() => {
    const recoveryCategories = async () => {
      try {
        setHasError(false);
        setIsLoading(true);
        const { response, statusCode } = await categoryApi.getCategories({
          type: categoriesFilter,
        });

        if (statusCode === 200) {
          setCategories(response.data);
        }
      } catch (err) {
        setHasError(true);
        console.log(err);
      }
      setIsLoading(false);
    };

    recoveryCategories();
  }, [categoriesFilter]);

  return {
    categories,
    hasError,
    isLoading,
    categoriesFilter,
    handleFilterCategory,
  };
}
