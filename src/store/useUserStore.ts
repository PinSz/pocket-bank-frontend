import { create } from "zustand";
import { IUserResponse } from "@/type/user";

interface UserState {
  user: IUserResponse | null;
  setUser: (data: IUserResponse | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (data) => set({ user: data }),
  clearUser: () => set({ user: null }),
}));
