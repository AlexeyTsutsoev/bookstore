import { SET_MAX_PRICE, SET_MIN_RPICE } from "../actions/types";

const initialState = {
  min: 0,
  max: 999999,
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MIN_RPICE:
      return { ...state, min: action.payload };
    case SET_MAX_PRICE:
      return { ...state, max: action.payload };
    default:
      return state;
  }
};

export default priceReducer;
