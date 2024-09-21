import {create} from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,

      setToken: (token) => {
        // Decode JWT token to get user details
        const userDetails = jwtDecode(token);
        console.log("Decoded User Details:", userDetails);
        // Update store with token and user details
        set({ token, user: userDetails });
      },

      logout: () => {
        // Clear the token and user data
        set({ token: null, user: null });
      },
    }),
    {
      name: "auth-storage", // Name of the storage key
    }
  )
);

export default useAuthStore;
