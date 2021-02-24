import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  shoppingCart: cartReducer,
  books: booksReducer,
});

export default rootReducer;
