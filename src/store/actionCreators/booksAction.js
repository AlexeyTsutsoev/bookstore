import { INITIALIZATION_BOOKS } from "../actions/types";

export const initializeBooks = (books) => {
  return {
    type: INITIALIZATION_BOOKS,
    payload: books,
  };
};
