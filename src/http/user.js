import axios from "axios";
import { setUser } from "../store/actionCreators/userAction";
import config from "../config";

export const signUp = async (name, email, password, phone) => {
  try {
    const response = await axios.post(config.serverAddress + "/auth/sign-up", {
      name,
      email,
      password,
      phone,
    });
    console.log(response.data.message);
  } catch (err) {
    console.log(err.message);
  }
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        config.serverAddress + "/auth/sign-in",
        {
          email,
          password,
        }
      );
      console.log(response.data.user);
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const checkUser = () => {
  return async (dispatch) => {
    try {
      console.log(localStorage.getItem("token"));
      const response = await axios.get(config.serverAddress + "/auth/me", {
        headers: { authorization: `Bearer ` + localStorage.getItem("token") },
      });
      console.log(response);
      console.log(response.data.user);
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
    }
  };
};
