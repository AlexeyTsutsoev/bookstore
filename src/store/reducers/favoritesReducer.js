import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/types";

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
