import { combineReducers } from "redux";
import authorReducer from "./authorReducer";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";
import publisherReducer from "./publisherReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
import priceReducer from "./priceReducer";

const rootReducer = combineReducers({
  shoppingCart: cartReducer,
  books: booksReducer,
  favorites: favoritesReducer,
  user: userReducer,
  authors: authorReducer,
  publishers: publisherReducer,
  categories: categoryReducer,
  prices: priceReducer,
});

export default rootReducer;
