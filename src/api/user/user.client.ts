import { api } from "api";
import { ApiEndpoints } from "constants";

import { User } from "types";

export const detailUser = async () => {
  try {
    const response = await api.get<User>(`${ApiEndpoints.USER}/detail`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
