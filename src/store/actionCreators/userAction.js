import { SET_USER, SIGN_OUT } from "../actions/types";
import { checkUser, signIn } from "../../api/user";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const auth = () => async (dispatch) => {
  try {
    const response = await checkUser();
    console.log(response);
    dispatch(setUser(response.user));
  } catch (err) {
    // if (err.data.type === "TokenExpiredError") {
    //   const refresh = await refreshToken();
    //   dispatch(setUser(refresh.data.user));
    //   localStorage.setItem("accessToken", refresh.data.token.accessToken);
    //   localStorage.setItem("refreshToken", refresh.data.token.refreshToken);
    // } else {
    //   console.log("ошибка auth");
    //   console.log(err.message);
    // }
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    console.log("ошибка auth");
    console.log(err.message);
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await signIn(email, password);
    dispatch(setUser(response.user));
    localStorage.setItem("accessToken", response.token.accessToken);
    localStorage.setItem("refreshToken", response.token.refreshToken);
    alert("вход выполнен");
  } catch (err) {
    console.log("ошибка входа");
    console.log(err.message);
    throw new Error();
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: {},
  };
};
