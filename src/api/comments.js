import axios from "./indexAxios";

const path = "comments";

export const getCommentsFromDb = (id) => {
  return axios({
    url: path,
    params: {
      id,
    },
  });
};

export const createComment = (bookId, userId, text) => {
  return axios({
    method: "POST",
    url: path + "/create",
    data: {
      bookId,
      userId,
      text,
    },
  });
};

export const updateComment = (id, text) => {
  return axios({
    method: "PUT",
    url: path + "/update/" + id,
    data: {
      text,
    },
  });
};

export const deleteComment = (id) => {
  return axios({
    method: "DELETE",
    url: path + "/delete/" + id,
  });
};
