import axios from "axios";
import config from "../config";
import { initializeBooks } from "../store/actionCreators/booksAction";

export const getAllBooksFromDb = (authors, publishers) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        config.development.serverAddress + "/book",
        {
          params: {
            author: authors,
            publisher: publishers,
            limit: 6,
          },
        }
      );
      dispatch(initializeBooks(response.data));
    } catch (err) {
      console.log("ошибка запроса");
      console.log(err.message);
    }
  };
};
