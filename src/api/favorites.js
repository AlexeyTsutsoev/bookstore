import myAxios from "./indexAxios";

const path = "favorites/";

export const getFavoritesFromDb = (userId) => {
  return myAxios.get(path, { params: { userId } });
};

export const addToFavorAtDb = (userId, bookId) => {
  return myAxios.post(`${path}add`, { userId, bookId });
};

export const deleteFromFavor = (userId, bookId) => {
  return myAxios.delete(`${path}delete`, { userId, bookId });
};
