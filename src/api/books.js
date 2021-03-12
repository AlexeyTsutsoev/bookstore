import axios from "./indexAxios";

const path = "book";

export const getBooksFromDb = ({
  page = 0,
  categories = "",
  authors = "",
  publishers = "",
  limit = 6,
  prices = "",
  keyword = "",
}) => {
  return axios({
    url: path,
    params: { authors, publishers, categories, prices, limit, page, keyword },
  });
};

export const getOneBookFromDb = (id) => {
  return axios({
    url: path + "/" + id,
  });
};

export const addBookToDb = (
  id,
  { name, authorId, publisherId, discription, cover, price, categories }
) => {
  return axios({
    method: "POST",
    url: path + "/add",
    headers: { userid: id },
    data: {
      name,
      authorId,
      publisherId,
      discription,
      cover,
      price,
      categories,
    },
  });
};
