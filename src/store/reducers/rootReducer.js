import { combineReducers } from "redux";
import authorReducer from "./authorReducer";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";
import publisherReducer from "./publisherReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
import priceReducer from "./priceReducer";
import searchReduser from "./searchReducer";

const rootReducer = combineReducers({
  shoppingCart: cartReducer,
  books: booksReducer,
  user: userReducer,
  authors: authorReducer,
  publishers: publisherReducer,
  categories: categoryReducer,
  prices: priceReducer,
  search: searchReduser,
});

export default rootReducer;
