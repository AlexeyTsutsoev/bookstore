import axios from "axios";
import config from "../config";
import { signOut } from "../store/actionCreators/userAction";

const myAxios = axios.create({
  baseURL: config.serverAddress,
});

let refreshPromise = null;

export const setToken = (token) => {
  console.log("setToken >", token);
  myAxios.defaults.headers.Authorization = `Bearer ${token}`;
};

setToken(localStorage.getItem("accessToken"));

const refreshToken = async () => {
  try {
    const { accessToken, refreshToken } = await myAxios.post("/auth/refresh", {
      token: localStorage.getItem("refreshToken"),
      user: localStorage.getItem("user"),
    });
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  } catch (err) {
    console.log("here?");
    signOut();
    throw err;
  } finally {
    refreshPromise = null;
  }
};

myAxios.interceptors.response.use(
  ({ data }) => data,
  async (err) => {
    if (err.response.data.type === "TokenExpiredError") {
      console.log("check if --------->", refreshPromise);
      if (!refreshPromise) {
        console.log("before refresh");
        await refreshToken();
        console.log("after refresh");
      }
      const accessToken = localStorage.getItem("accessToken");
      err.config.headers.Authorization = `Bearer ${accessToken}`;

      return myAxios(err.config);
    }

    return Promise.reject(err.response);
  }
);

export default myAxios;
