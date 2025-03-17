import { defineStore } from "pinia";
import axiosApiInstance from "~/api";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

export const useAuthStore = defineStore("auth", () => {
  const userInfo = ref<object>({
    token: "",
    email: "",
    userId: "",
    refreshToken: "",
  });
  const error = ref<string>("");
  const loader = ref<boolean>(false);

  const auth = async (payload: Array<string>, type: string) => {
    const stringUrl = type === "signup" ? "signUp" : "signInWithPassword";
    error.value = "";
    loader.value = true;
    try {
      let response = await axiosApiInstance.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`,
        {
          ...payload,
          returnSecureToken: true,
        }
      );
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
      };
      localStorage.setItem(
        "userTokens",
        JSON.stringify({
          token: userInfo.value.token,
          refreshToken: userInfo.value.refreshToken,
          expiresIn: response.data.expiresIn,
        })
      );
    } catch (err) {
      switch (err.response.data.error.message) {
        case "EMAIL_EXISTS":
          error.value = "Такой email уже зарегистрирован";
          break;
        case "OPERATION_NOT_ALLOWED":
          error.value = "Регистрация заблокирована";
          break;
        case "EMAIL_NOT_FOUND":
          error.value = "Неверный email";
          break;
        case "INVALID_PASSWORD":
          error.value = "Неверный пароль";
          break;
        default:
          error.value = "Что-то пошло не так";
          break;
      }
      throw error.value;
    } finally {
      loader.value = false;
    }
  };
  const logout = () => {
    userInfo.value = {
      token: "",
      email: "",
      userId: "",
      refreshToken: "",
    };
  };

  return { auth, userInfo, error, loader, logout };
});
