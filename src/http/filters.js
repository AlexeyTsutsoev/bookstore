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

export const getPublishersFromDB = async () => {
  try {
    const response = await axios.get(
      config.development.serverAddress + "/filters/publishers"
    );
    return response.data;
  } catch (err) {
    console.log("ошибка запроса");
    console.log(err);
  }
};

export const getCategoriesFromDb = async () => {
  try {
    const response = await axios.get(
      config.development.serverAddress + "/filters/categories"
    );
    return response.data;
  } catch (err) {
    console.log("ошибка запроса");
    console.log(err);
  }
};
