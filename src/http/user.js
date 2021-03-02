import axios from "axios";
import { setUser } from "../store/actionCreators/userAction";
import config from "../config";

export const signUp = async (name, email, password, phone) => {
  try {
    const response = await axios.post(
      config.development.serverAddress + "/auth/sign-up",
      {
        name,
        email,
        password,
        phone,
      }
    );
    alert(response.data.message);
  } catch (err) {
    console.log("ошибка регистрации");
    console.log(err.message);
  }
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        config.development.serverAddress + "/auth/sign-in",
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      alert("вход выполнен");
    } catch (err) {
      console.log("ошибка входа");
      console.log(err.message);
    }
  };
};

export const checkUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        config.development.serverAddress + "/auth/me",
        {
          headers: { authorization: `Bearer ` + localStorage.getItem("token") },
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
    }
  };
};
