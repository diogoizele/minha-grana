import { api } from "api";
import { ApiEndpoints, LocalStorageKeys } from "constants";

import { ApiLoginResponse, ErrorResponse, LoginCredentials } from "types";
import { getGeneralApiError } from "../../util";

const login = async (form: LoginCredentials) => {
  try {
    const response = await api.post<ApiLoginResponse>(
      `${ApiEndpoints.USER}/login`,
      form
    );

    return response.data;
  } catch (error) {
    throw getGeneralApiError(error);
  }
};

export const authApi = { login };
