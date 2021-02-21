import { ADD_SHOPPING_CART } from "../actions/types";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SHOPPING_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartReducer;
