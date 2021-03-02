import axios from "axios";
import config from "../config";

export const getAuthorsFromDb = async () => {
  try {
    const response = await axios.get(
      config.development.serverAddress + "/filters/authors"
    );
    return response.data;
  } catch (err) {
    console.log("ошибка запроса");
    console.log(err);
  }
};
