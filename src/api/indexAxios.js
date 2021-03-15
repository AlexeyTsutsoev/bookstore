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
    const { token } = await myAxios.post("/auth/refresh", {
      token: localStorage.getItem("refreshToken"),
      user: JSON.parse(localStorage.getItem("user")),
    });
    console.log(token);
    localStorage.setItem("accessToken", token.accessToken);
    localStorage.setItem("refreshToken", token.refreshToken);
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
      console.log("check access from inter", accessToken);
      err.config.headers.Authorization = `Bearer ${accessToken}`;

      console.log("err from inter", err);
      console.log("err config from inter", err.config);
      console.log("config headers from inter", err.config.headers);

      return myAxios(err.config);
    }

    return Promise.reject(err.response);
  }
);

export default myAxios;
