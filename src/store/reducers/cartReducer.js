import CartCollection from "../../utils/CartCollection";
import {
  ADD_SHOPPING_CART,
  DECREMENT_ITEM,
  DELETE_SHOPPING_CART,
  INCREMENT_ITEM,
} from "../actions/types";

const initialState = new CartCollection(
  JSON.parse(localStorage.getItem("cart")) || []
);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOPPING_CART:
      state.add(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return state;

    case DELETE_SHOPPING_CART:
      state.remove(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return state;

    case INCREMENT_ITEM:
      state.incrementCounter(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return state;

    case DECREMENT_ITEM:
      state.decrementCounter(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return state;
    default:
      return state;
  }
};

export default cartReducer;
