import { createServer } from "miragejs";

import {
  Category,
  CategoryAmountType,
  CategoryFrequency,
  CategoryType,
} from "shared/categories/category.types";

export const server = () =>
  createServer({
    namespace: "api",
    routes() {
      this.get("/categories", (): { categories: Category[] } => ({
        categories: [
          {
            id: 1,
            title: "Mercado",
            amount: 150,
            type: CategoryType.EXPENSE,
            frequency: CategoryFrequency.MONTHLY,
            amountType: CategoryAmountType.FIXED,
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
          },
          {
            id: 2,
            title: "Investimentos",
            amount: 20,
            type: CategoryType.EXPENSE,
            frequency: CategoryFrequency.MONTHLY,
            amountType: CategoryAmountType.VARIABLE,
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
          },
          {
            id: 3,
            title: "Salário",
            amount: 2000,
            type: CategoryType.INCOME,
            frequency: CategoryFrequency.MONTHLY,
            amountType: CategoryAmountType.FIXED,
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
          },
          {
            id: 4,
            title: "Moto",
            amount: 1000,
            type: CategoryType.EXPENSE,
            frequency: CategoryFrequency.MONTHLY,
            amountType: CategoryAmountType.FIXED,
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
          },
          {
            id: 5,
            title: "Fundo de Emergência",
            amount: 100,
            type: CategoryType.EXPENSE,
            frequency: CategoryFrequency.MONTHLY,
            amountType: CategoryAmountType.VARIABLE,
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
          },
          {
            id: 6,
            title: "freela",
            amount: 150,
            type: CategoryType.INCOME,
            frequency: CategoryFrequency.ONCE,
            amountType: CategoryAmountType.FIXED,
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
          },
          {
            id: 7,
            title: "Fundo de Emergência",
            amount: 100,
            type: CategoryType.EXPENSE,
            frequency: CategoryFrequency.MONTHLY,
            amountType: CategoryAmountType.VARIABLE,
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
          },
          {
            id: 8,
            title: "Fundo de Emergência",
            amount: 100,
            type: CategoryType.EXPENSE,
            frequency: CategoryFrequency.MONTHLY,
            amountType: CategoryAmountType.VARIABLE,
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
          },
          {
            id: 9,
            title: "Fundo de Emergência",
            amount: 10,
            type: CategoryType.EXPENSE,
            frequency: CategoryFrequency.MONTHLY,
            amountType: CategoryAmountType.VARIABLE,
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
          },
        ],
      }));
    },
  });
