//react
import React from "react";
//components
import Header from "./Header";
import Main from "./Main";
//styles
import "./styles/style.css";

const Store = () => {
  return (
    <div className='container store--container'>
      <Header />
      <Main />
    </div>
  );
};

export default Store;
