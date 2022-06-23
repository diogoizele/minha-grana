import { api } from "api/api";
import { Category, CategoryType } from "containers/categories/categories.types";

type GetCategoryParams = {
  order?: "asc" | "desc";
  sort?: keyof Category;
  type?: CategoryType | null;
};

type GetCategoryResponse = {
  response: { data: Category[] };
  statusCode: number;
};
export async function getCategories(
  params?: GetCategoryParams
): Promise<GetCategoryResponse> {
  try {
    const { data, status } = await api.get(`/categories`, {
      params: {
        _order: params?.order,
        _sort: params?.sort,
        type: params?.type,
      },
    });

    return { response: { data }, statusCode: status };
  } catch (err: any) {
    throw err;
  }
}
