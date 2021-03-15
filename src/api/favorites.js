import myAxios from "./indexAxios";

const path = "favorites/";

export const getFavoritesFromDb = (userId) => {
  // return myAxios({
  //   url: path,
  //   params: {
  //     userId,
  //   },
  // });
  return myAxios.get(path, { params: { userId } });
};

export const addToFavorAtDb = (userId, bookId) => {
  // return myAxios({
  //   method: "POST",
  //   url: `${path}add`, //path + "/add",
  //   data: {
  //     userId,
  //     bookId,
  //   },
  // });
  return myAxios.post(`${path}add`, { userId, bookId });
};

export const deleteFromFavor = (userId, bookId) => {
  // return myAxios({
  //   method: "DELETE",
  //   url: `${path}delete`, //path + "/delete",
  //   data: {
  //     userId,
  //     bookId,
  //   },
  // });
  return myAxios.delete(`${path}delete`, { userId, bookId });
};
