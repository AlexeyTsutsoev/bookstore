import { ADD_CATEGORY_FILTER, REMOVE_CATEGORY_FILTER } from "../actions/types";

const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_FILTER:
      return [...state, action.payload];
    case REMOVE_CATEGORY_FILTER:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

export default categoryReducer;
