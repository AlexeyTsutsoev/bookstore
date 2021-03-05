import axios from "./indexAxios";

const path = "filters/";

export const getAuthorsFromDb = () => {
  return axios({
    url: path + "authors",
  });
};

export const getPublishersFromDB = () => {
  return axios({
    url: path + "publishers",
  });
};

export const getCategoriesFromDb = () => {
  return axios({
    url: path + "categories",
  });
};

export const getPricesFromDb = () => {
  return axios({
    url: path + "price",
  });
};
