//react
import React from "react";
//components
import Main from "./main/Main";
//styles
import "../components/styles/style.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./auth/Login";
import Registration from "./auth/Registration";

const Store = () => {
  return (
    <BrowserRouter>
      <Route path='/login' component={Login} />
      <Route path='/registration' component={Registration} />
      <Route path='/' component={Main} />
    </BrowserRouter>
  );
};

export default Store;
