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
  const [categoriesOrder, setCategoriesOrder] = useState<
    "type" | "amount" | "amountType" | "frequency" | null
  >(null);
  const [categoriesOrderType, setCategoriesOrderType] = useState<
    "asc" | "desc"
  >("asc");

  const handleFilterCategory = (category: CategoryType | null) =>
    setCategoriesFilter(category);

  const handleOrderCategory = (
    order: "type" | "amount" | "amountType" | "frequency" | null
  ) => setCategoriesOrder(order);

  const handleToggleCategoriesOrderType = () => {
    setCategoriesOrderType((currentType) =>
      currentType === "asc" ? "desc" : "asc"
    );
  };

  const handleReloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const recoveryCategories = async () => {
      try {
        setHasError(false);
        setIsLoading(true);
        const { response, statusCode } = await categoryApi.getCategories({
          type: categoriesFilter,
          order: categoriesOrderType,
          sort: categoriesOrder,
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
  }, [categoriesFilter, categoriesOrder, categoriesOrderType]);

  return {
    categories,
    hasError,
    isLoading,
    categoriesFilter,
    categoriesOrder,
    categoriesOrderType,
    handleFilterCategory,
    handleOrderCategory,
    handleToggleCategoriesOrderType,
    handleReloadPage,
  };
}
