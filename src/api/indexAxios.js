import axios from "axios";
import config from "../config";

const BASE_URL = config.development.serverAddress;

const getDefaultHeaders = () => ({
  Accept: "application/json",
  "Content-type": "application/json",
});

export default async ({
  method = "GET",
  baseURL = `${BASE_URL}/`,
  url = "",
  params = {},
  headers = {},
  data = {},
  body = {},
}) => {
  try {
    const response = await axios({
      method,
      url: `${baseURL}${url}`,
      params,
      headers: {
        ...getDefaultHeaders(),
        ...headers,
      },
      data,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error.response;
  }
};
