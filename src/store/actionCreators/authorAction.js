import { ADD_AUTHOR_FILTER, REMOVE_AUTHOR_FILTER } from "../actions/types";

export const addAuthorFilter = (id) => {
  return {
    type: ADD_AUTHOR_FILTER,
    payload: id,
  };
};

export const removeAuthorFilter = (id) => {
  return {
    type: REMOVE_AUTHOR_FILTER,
    payload: id,
  };
};
