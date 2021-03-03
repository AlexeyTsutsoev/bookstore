import { ADD_AUTHOR_FILTER, REMOVE_AUTHOR_FILTER } from "../actions/types";

const initialState = [];

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTHOR_FILTER:
      return [...state, action.payload];
    case REMOVE_AUTHOR_FILTER:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default authorReducer;
