import axios from "axios";
import config from "../config";
import { signOut } from "../store/actionCreators/userAction";

const myAxios = axios.create({
  baseURL: config.serverAddress,
});

export const setToken = (token) => {
  console.log("setToken >", token);
  myAxios.defaults.headers.Authorization = `Bearer ${token}`;
};

setToken(localStorage.getItem("accessToken"));

const refreshToken = async () => {
  try {
    const { accessToken, refreshToken } = await myAxios.post("/auth/refresh", {
      token: localStorage.getItem("refreshToken"),
    });
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  } catch (err) {
    console.log("here?");
    signOut();
    throw err;
  }
};

myAxios.interceptors.response.use(
  ({ data }) => data,
  async (err) => {
    if (err.response.data.type === "TokenExpiredError") {
      await refreshToken();
      const accessToken = localStorage.getItem("accessToken");
      err.config.headers.Authorization = `Bearer ${accessToken}`;

      return myAxios(err.config);
    }

    return Promise.reject(err.response);
  }
);

export default myAxios;
