import {
  ADD_PUBLISHER_FILTER,
  REMOVE_PUBLISHER_FILTER,
} from "../actions/types";

const initialState = [];

const publisherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PUBLISHER_FILTER:
      return [...state, action.payload];
    case REMOVE_PUBLISHER_FILTER:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default publisherReducer;
