import myAxios from "./indexAxios";

const path = "comments/";

export const getCommentsFromDb = (id) => {
  // return myAxios({
  //   url: path,
  //   params: {
  //     id,
  //   },
  // });
  return myAxios.get(path, { params: { id } });
};

export const createComment = (bookId, userId, text) => {
  // return myAxios({
  //   method: "POST",
  //   url: `${path}create`, //path + "create",
  //   data: {
  //     bookId,
  //     userId,
  //     text,
  //   },
  //   headers: { authorization: `Bearer ` + localStorage.getItem("accessToken") },
  // });
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
  // return myAxios({
  //   method: "PUT",
  //   url: `${path}update/${id}`, //path + "/update/" + id,
  //   data: {
  //     text,
  //   },
  //   headers: { authorization: `Bearer ` + localStorage.getItem("accessToken") },
  // });

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
  // return myAxios({
  //   method: "DELETE",
  //   url: `${path}delete/${id}`, //path + "/delete/" + id,
  //   headers: { authorization: `Bearer ` + localStorage.getItem("accessToken") },
  // });
  return myAxios.delete(`${path}delete/${id}`, {
    headers: { authorization: `Bearer ` + localStorage.getItem("accessToken") },
  });
};
