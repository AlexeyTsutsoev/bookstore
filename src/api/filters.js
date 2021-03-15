import myAxios from "./indexAxios";

const path = "filters/";

export const getAuthorsFromDb = () => {
  // return myAxios({
  //   url: `${parh}authors`, //path + "authors",
  // });
  return myAxios.get(`${path}authors`);
};

export const getPublishersFromDB = () => {
  // return myAxios({
  //   url: `${path}publishers`, //path + "publishers",
  // });
  return myAxios.get(`${path}publishers`);
};

export const getCategoriesFromDb = () => {
  // return myAxios({
  //   url: `${path}categories`, //path + "categories",
  // });
  return myAxios.get(`${path}categories`);
};

export const getPricesFromDb = () => {
  // return myAxios({
  //   url: `${path}price`, //path + "price",
  // });
  return myAxios.get(`${path}price`);
};
