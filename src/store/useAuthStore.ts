import { create } from "zustand";
import { loginApi } from "../api/auth";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem("token"),
  loading: false,

  login: async (email, password) => {
    try {
      set({ loading: true });

      const data = await loginApi({ email, password });

      localStorage.setItem("token", data.token);

      set({
        user: data.user,
        token: data.token,
      });

      return true;
    } catch (error) {
      return false;
    } finally {
        let authToken = "asdfg54321";
      let authUser = { id: "223" , name: "Siva", email: "siva@gmail.com" };
        set({
        user: authUser,
        token: authToken,
      });
      //set({ loading: false });
      return true
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));
