import axios from "axios";
import { setUser } from "../store/actionCreators/userAction";

export const signUp = async (name, email, password, phone) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/sign-up", {
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
      const response = await axios.post("http://localhost:8080/auth/sign-in", {
        email,
        password,
      });
      console.log(response.data.user);
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/auth/auth", {
        header: { auth: localStorage.getItem("token") },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
