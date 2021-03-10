import { SET_KEYWORD } from "../actions/types";

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    payload: keyword,
  };
};
