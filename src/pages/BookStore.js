import React from "react";
import Main from "./main/Main";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./user/Login";
import Registration from "./user/Registration";
import ShoppingCart from "./shopping-cart/ShoppingCart";
import Favorites from "./favorites/Favorites";
import Book from "./book/Book";
import UserPage from "./user/UserPage";
import ProtectedRouter from "../utils/ProtectedRouter";
import { useSelector } from "react-redux";
import CreateNewBook from "./book/CreateNewBook";

const BookStore = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/registration' component={Registration} />
      <Route exact path='/' component={Main} />
      <Route path='/shopping-cart' component={ShoppingCart} />
      <Route path='/book/:id' component={Book} />
      <ProtectedRouter path='/favor' component={Favorites} />
      <ProtectedRouter path='/user/:id' component={UserPage} />
      {user.role === "admin" ? (
        <Route path='/createBook' component={CreateNewBook} />
      ) : (
        <Redirect to='/' />
      )}
    </Switch>
  );
};

export default BookStore;
