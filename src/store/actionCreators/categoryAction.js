import { ADD_CATEGORY_FILTER, REMOVE_CATEGORY_FILTER } from "../actions/types";

export const addCategoryFilter = (id) => {
  return {
    type: ADD_CATEGORY_FILTER,
    payload: id,
  };
};

export const removeCategoryFilter = (id) => {
  return {
    type: REMOVE_CATEGORY_FILTER,
    payload: id,
  };
};
