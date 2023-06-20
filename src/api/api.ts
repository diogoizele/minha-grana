import axios from "axios";

import { LocalStorageKeys } from "constants";

const token = localStorage.getItem(LocalStorageKeys.TOKEN);

export const apiClient = () => {
  const defaultOptions = {
    baseURL: "http://localhost:8800/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem(LocalStorageKeys.TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem(LocalStorageKeys.TOKEN);
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export const api = apiClient();
