import { ADD_BOOKAREA } from "../actions/types";

export const addToBookArea = (book) => {
  return {
    action: ADD_BOOKAREA,
    payload: book,
  };
};
