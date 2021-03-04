import axios from "./indexAxios";

const path = "auth/";

export const signUp = (name, email, password, phone) => {
  return axios({
    method: "POST",
    url: path + "sign-up",
    data: {
      name,
      email,
      password,
      phone,
    },
  });
};

export const signIn = (email, password) => {
  return axios({
    method: "POST",
    url: path + "sign-in",
    data: {
      email,
      password,
    },
  });
};

export const checkUser = () => {
  return axios({
    url: path + "me",
    headers: { authorization: `Bearer ` + localStorage.getItem("token") },
  });
};
