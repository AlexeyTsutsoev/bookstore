import { getBooksFromDb } from "../../api/books";
import { INITIALIZATION_BOOKS, SET_CURRENT_PAGE } from "../actions/types";

export const initializeBooks = (books, count) => {
  return {
    type: INITIALIZATION_BOOKS,
    payload: { books, count },
  };
};

export const loadBook = ({
  page = 0,
  categories = "",
  authors = "",
  publishers = "",
  prices = "",
  keyword = "",
}) => async (dispatch) => {
  try {
    const response = await getBooksFromDb({
      page,
      categories,
      authors,
      publishers,
      prices,
      keyword,
    });
    dispatch(initializeBooks(response.rows, response.count));
  } catch (err) {
    console.log(err.message);
    console.log("ошибка запроса");
  }
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};
