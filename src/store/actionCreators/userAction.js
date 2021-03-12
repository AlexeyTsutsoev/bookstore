import { SET_USER, SIGN_OUT } from "../actions/types";
import { checkUser, refreshToken, signIn } from "../../api/user";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const auth = () => async (dispatch) => {
  try {
    const response = await checkUser();
    dispatch(setUser(response.data.user));
  } catch (err) {
    if (err.data.type === "TokenExpiredError") {
      const refresh = await refreshToken();
      dispatch(setUser(refresh.data.user));
      localStorage.setItem("accessToken", refresh.data.token.accessToken);
      localStorage.setItem("refreshToken", refresh.data.token.refreshToken);
    } else {
      console.log("ошибка auth");
      console.log(err.message);
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await signIn(email, password);
    dispatch(setUser(response.data.user));
    localStorage.setItem("accessToken", response.data.token.accessToken);
    localStorage.setItem("refreshToken", response.data.token.refreshToken);
    alert("вход выполнен");
  } catch (err) {
    console.log("ошибка входа");
    console.log(err.message);
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: {},
  };
};
