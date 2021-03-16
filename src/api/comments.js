import myAxios from "./indexAxios";

const path = "comments/";

export const getCommentsFromDb = (id) => {
  return myAxios.get(path, { params: { id } });
};

export const createComment = (bookId, userId, text) => {
  return myAxios.post(
    `${path}create`,
    { bookId, userId, text },
    {
      headers: {
        authorization: `Bearer ` + localStorage.getItem("accessToken"),
      },
    }
  );
};

export const updateComment = (id, text) => {
  return myAxios.put(
    `${path}update/${id}`,
    { text },
    {
      headers: {
        authorization: `Bearer ` + localStorage.getItem("accessToken"),
      },
    }
  );
};

export const deleteComment = (id) => {
  return myAxios.delete(`${path}delete/${id}`, {
    headers: { authorization: `Bearer ` + localStorage.getItem("accessToken") },
  });
};
