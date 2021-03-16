import myAxios from "./indexAxios";

const path = "auth/";

export const signUp = (name, email, password, phone) => {
  return myAxios.post(`${path}sign-up`, { name, email, password, phone });
};

export const signIn = (email, password) => {
  return myAxios.post(`${path}sign-in`, { email, password });
};

export const checkUser = () => {
  return myAxios.get(`${path}me`);
};

export const uploadAvatar = (data, user) => {
  return myAxios.post(`${path}avatar`, data, user, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
