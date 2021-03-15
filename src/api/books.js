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
  // return myAxios({
  //   url: path,
  //   params: { authors, publishers, categories, prices, limit, page, keyword },
  // });
  return myAxios.get(path, {
    params: { authors, publishers, categories, prices, limit, page, keyword },
  });
};

export const getOneBookFromDb = (id) => {
  // return myAxios({
  //   url: `${path}${id}`, //path + "/" + id,
  // });
  return myAxios.get(`${path}${id}`);
};

export const addBookToDb = (
  id,
  { name, authorId, publisherId, discription, cover, price, categories }
) => {
  // return myAxios({
  //   method: "POST",
  //   url: `${path}add`, //path + "/add",
  //   headers: { userid: id },
  //   data: {
  //     name,
  //     authorId,
  //     publisherId,
  //     discription,
  //     cover,
  //     price,
  //     categories,
  //   },
  // });
  return myAxios.post(
    `${path}add`,
    { name, authorId, publisherId, discription, cover, price, categories },
    { headers: { userid: id } }
  );
};
