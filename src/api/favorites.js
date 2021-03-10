import axios from "./indexAxios";

const path = "favorites";

export const getFavoritesFromDb = (userId) => {
  return axios({
    url: path,
    params: {
      userId,
    },
  });
};

export const addToFavorAtDb = (userId, bookId) => {
  return axios({
    method: "POST",
    url: path + "/add",
    data: {
      userId,
      bookId,
    },
  });
};

export const deleteFromFavor = (userId, bookId) => {
  return axios({
    method: "DELETE",
    url: path + "/delete",
    data: {
      userId,
      bookId,
    },
  });
};
