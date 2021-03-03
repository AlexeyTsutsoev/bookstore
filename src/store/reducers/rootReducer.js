import { combineReducers } from "redux";
import authorReducer from "./authorReducer";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";
import publisherReducer from "./publisherReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  shoppingCart: cartReducer,
  books: booksReducer,
  favorites: favoritesReducer,
  user: userReducer,
  authors: authorReducer,
  publishers: publisherReducer,
});

export default rootReducer;
