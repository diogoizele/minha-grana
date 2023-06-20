import { api } from "api";
import { ApiEndpoints } from "constants";

import { ApiLoginResponse, LoginCredentials } from "types";

const login = async (form: LoginCredentials) => {
  try {
    const response = await api.post<ApiLoginResponse>(
      `${ApiEndpoints.USER}/login`,
      form
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const authApi = { login };
