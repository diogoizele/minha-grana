import { create } from "zustand";

import { User } from "types";

export interface UserStore {
  user: User | null;
  setUser: (User: User | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
