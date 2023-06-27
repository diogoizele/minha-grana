import { api } from "api";
import { ApiEndpoints } from "constants";
import { getGeneralApiError } from "util";

import { Income, Pagination } from "types";

const listIncomes = async (pagination?: Pagination) => {
  try {
    const response = await api.get<Income[]>(`${ApiEndpoints.INCOME}`, {
      params: {
        page: pagination?.page,
        pageSize: pagination?.pageSize,
      },
    });

    return response.data;
  } catch (error) {
    throw getGeneralApiError(error);
  }
};

export const incomeApi = { listIncomes };
