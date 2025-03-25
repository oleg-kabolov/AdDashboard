import { defineStore } from "pinia";
import axios from "axios";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

interface UserTokens {
  idToken: string;
  refreshToken: string;
  email: string;
  expiresIn: number;
  userId: string;
}

export const useAuthStore = defineStore("auth", () => {
  let userTokens: UserTokens = ref({
    idToken: "",
    refreshToken: "",
    email: "",
    expiresIn: 0,
    userId: "",
  });
  const auth = async (payload, type) => {
    const authType = type === "signup" ? "signUp" : "signInWithPassword";
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${authType}key=${apiKey}`,
        {
          ...payload,
          returnSecureToken: true,
        }
      );
      userTokens = {
        idToken: response.data.idToken,
        refreshToken: response.data.refreshToken,
        email: response.data.email,
        expiresIn: response.data.expiresIn,
        userId: response.data.localId,
      };
    } catch (error) {
      console.log(error);
    }
  };
  return { auth, userTokens };
});
