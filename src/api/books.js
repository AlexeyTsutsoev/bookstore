import axios from "./indexAxios";

const path = "book";

export const getBooksFromDb = ({
  page = 0,
  categories = "",
  authors = "",
  publishers = "",
  limit = 6,
  prices = "",
}) => {
  return axios({
    url: path,
    params: { authors, publishers, categories, prices, limit, page },
  });
};
