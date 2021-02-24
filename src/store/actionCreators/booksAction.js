import { ADD_BOOKAREA } from "../actions/types";

export const addToBookArea = (book) => {
  return {
    type: ADD_BOOKAREA,
    payload: book,
  };
};
