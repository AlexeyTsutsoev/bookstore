import { ADD_SHOPPING_CART, DELETE_SHOPPING_CART } from "../actions/types";

export const addBook = (book) => {
  return {
    type: ADD_SHOPPING_CART,
    payload: book,
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETE_SHOPPING_CART,
    payload: id,
  };
};
