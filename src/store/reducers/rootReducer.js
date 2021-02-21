import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  shoppingCart: cartReducer,
});

export default rootReducer;
