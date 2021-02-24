import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  shoppingCart: cartReducer,
  books: booksReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
