import { ADD_SHOPPING_CART, DELETE_SHOPPING_CART } from "../actions/types";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SHOPPING_CART:
      return [...state, action.payload];
    case DELETE_SHOPPING_CART:
      return state.filter((book) => book.id !== action.payload); //Верно ли?
    default:
      return state;
  }
};

export default cartReducer;
