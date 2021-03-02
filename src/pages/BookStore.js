import React, { useEffect } from "react";
import Main from "./main/Main";
import "../components/styles/style.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import ShoppingCart from "./shopping-cart/ShoppingCart";
import Favorites from "./favorites/Favorites";
import Book from "./book/Book";
import UserPage from "./auth/UserPage";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../http/user";

const BookStore = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  if (isAuth) {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/user/:id' component={UserPage} />
        <Route path='/shopping-cart' component={ShoppingCart} />
        <Route path='/favor' component={Favorites} />
        <Route path='/book' component={Book} />
        <Redirect from='/login' to='/' />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/registration' component={Registration} />
      <Route path='/shopping-cart' component={ShoppingCart} />
      <Route path='/favor' component={Favorites} />
      <Route path='/book' component={Book} />
      <Redirect from='/user:id' to='/' />
    </Switch>
  );
};

export default BookStore;
