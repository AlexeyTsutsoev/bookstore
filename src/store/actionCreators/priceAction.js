import { SET_MAX_PRICE, SET_MIN_RPICE } from "../actions/types";

export const setMinPrice = (num) => {
  return {
    type: SET_MIN_RPICE,
    payload: num,
  };
};

export const setMaxPrice = (num) => {
  return {
    type: SET_MAX_PRICE,
    payload: num,
  };
};
