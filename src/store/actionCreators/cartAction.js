import {
  ADD_SHOPPING_CART,
  DECREMENT_ITEM,
  DELETE_SHOPPING_CART,
  INCREMENT_ITEM,
} from "../actions/types";

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

export const incrementItem = (id) => {
  return {
    type: INCREMENT_ITEM,
    payload: id,
  };
};

export const decrementItem = (id) => {
  return {
    type: DECREMENT_ITEM,
    payload: id,
  };
};
