import myAxios from "./indexAxios";

const path = "filters/";

export const getAuthorsFromDb = () => {
  return myAxios.get(`${path}authors`);
};

export const getPublishersFromDB = () => {
  return myAxios.get(`${path}publishers`);
};

export const getCategoriesFromDb = () => {
  return myAxios.get(`${path}categories`);
};

export const getPricesFromDb = () => {
  return myAxios.get(`${path}price`);
};
