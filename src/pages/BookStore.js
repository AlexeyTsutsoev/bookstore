//react
import React from "react";
//components
import Main from "./main/Main";
//styles
import "../components/styles/style.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import ShoppingCart from "./shopping-cart/ShoppingCart";
import store from "../store/store";

const BookStore = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/shopping-cart' component={ShoppingCart} />
      </BrowserRouter>
    </Provider>
  );
};

export default BookStore;
