import myAxios from "./indexAxios";

const path = "book/";

export const getBooksFromDb = ({
  page = 0,
  categories = "",
  authors = "",
  publishers = "",
  limit = 6,
  prices = "",
  keyword = "",
}) => {
  return myAxios.get(path, {
    params: { authors, publishers, categories, prices, limit, page, keyword },
  });
};

export const getOneBookFromDb = (id) => {
  return myAxios.get(`${path}${id}`);
};

export const addBookToDb = (id, data) => {
  const config = { userid: id, "content-type": "multipart/form-data" };
  return myAxios.post(`${path}add`, data, { headers: config });
};
