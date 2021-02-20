//react
import React from "react";
//components
import Main from "./main/Main";
//styles
import "../components/styles/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";

const Store = () => {
  return (
    <BrowserRouter>
      <Route path='/login' component={Login} />
      <Route path='/' component={Main} />
    </BrowserRouter>
  );
};

export default Store;
