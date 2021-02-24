import React from "react";
import Main from "./main/Main";
import "../components/styles/style.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import ShoppingCart from "./shopping-cart/ShoppingCart";
import store from "../store/store";
import Favorites from "./favorites/Favorites";

const BookStore = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/shopping-cart' component={ShoppingCart} />
        <Route path='/favor' component={Favorites} />
      </BrowserRouter>
    </Provider>
  );
};

export default BookStore;
