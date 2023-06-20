import { create } from "zustand";

import { LocalStorageKeys } from "constants";

export interface AuthStore {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  setToken: (token) => {
    if (token) {
      localStorage.setItem(LocalStorageKeys.TOKEN, token);
    } else {
      localStorage.removeItem(LocalStorageKeys.TOKEN);
    }
    set({ token });
  },
}));
