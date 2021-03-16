import axios from "axios";
import config from "../config";
import { signOut } from "../store/actionCreators/userAction";

const myAxios = axios.create({
  baseURL: config.serverAddress,
});

let refreshPromise = null;

export const setToken = (token) => {
  myAxios.defaults.headers.Authorization = `Bearer ${token}`;
};

setToken(localStorage.getItem("accessToken"));

const refreshToken = async () => {
  try {
    const { token } = await myAxios.post("/auth/refresh", {
      token: localStorage.getItem("refreshToken"),
      user: JSON.parse(localStorage.getItem("user")),
    });
    localStorage.setItem("accessToken", token.accessToken);
    localStorage.setItem("refreshToken", token.refreshToken);
  } catch (err) {
    console.log(err);
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
      if (!refreshPromise) {
        await refreshToken();
      }
      const accessToken = localStorage.getItem("accessToken");
      err.config.headers.Authorization = `Bearer ${accessToken}`;

      return myAxios(err.config);
    }

    return Promise.reject(err.response);
  }
);

export default myAxios;
