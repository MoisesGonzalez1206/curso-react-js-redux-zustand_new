import { create } from "zustand";
import { loginService, registrerService } from "../services/auth.service";
import { devOnlyDevtools as devtools } from "./devTools";
import { immer } from "zustand/middleware/immer";
import { AuthState, AuthState2 } from "../types";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const useAuthStore = create<AuthState>(
  devtools(
    immer((set) => ({
      isAuthenticated: false,
      loading: false,
      error: false,
      login: (username: string, password: string) =>
        loginService(username, password)
          .then(() =>
            set({ isAuthenticated: true }, false, { type: "loginSuccess" })
          )
          .catch(() =>
            set({ isAuthenticated: false }, false, { type: "loginError" })
          ),



      checkAuth: async () => {
        try {
          const response = await axios.get(`${BASE_URL}/auth/me`, {
            withCredentials: true,
          });
          const user = response.data.user || null;
          set({ isAuthenticated: !!user, user });

          return { isAuthenticated: !!user, user };
        } catch {
          set({ isAuthenticated: false, user: null });
          return { isAuthenticated: false, user: null };
        }
      },
    })),
    { name: "authStore" }
  )
);

export const registrerAuthStore = create<AuthState2>(
    devtools(
      immer((set) => ({
        isAuthenticated: false,
        loading: false,
        error: false,
        registro:(username: string, password: string) =>
            registrerService(username,password)
            .then(() =>
              set({ isAuthenticated: true }, false, { type: "Registrer Success" })
            )
            .catch(() =>
              set({ isAuthenticated: false }, false, { type: "Registro Error" })
            ),
  
  
            checkAuth: async () => {
                try {
                  const response = await axios.get(`${BASE_URL}/auth/me`, {
                    
                  });
                  const user = response.data.user || null;
                  set({ isAuthenticated: !!user, user });
        
                  return { isAuthenticated: !!user, user };
                } catch {
                  set({ isAuthenticated: false, user: null });
                  return { isAuthenticated: false, user: null };
                }
              },
        
      })),
      
      
      { name: "authStore" }
    )
  );

