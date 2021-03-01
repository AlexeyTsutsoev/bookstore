import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  shoppingCart: cartReducer,
  books: booksReducer,
  favorites: favoritesReducer,
  user: userReducer,
});

export default rootReducer;
