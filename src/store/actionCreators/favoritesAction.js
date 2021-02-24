import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/types";

export const addToFavorites = (book) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: book,
  };
};

export const removeFromFavorites = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
