import { ADD_SHOPPING_CART } from "../actions/types";

export const addBook = (book) => {
  return {
    type: ADD_SHOPPING_CART,
    payload: book,
  };
};
