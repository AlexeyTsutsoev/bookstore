import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../main/Header";
import ShoppingItem from "./ShoppingItem";

const ShoppingCart = ({ books }) => {
  return (
    <div>
      <Header />
      {books.length ? (
        books.map((book) => <ShoppingItem book={book} key={book.id} />)
      ) : (
        <p>Корзина пуста</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.shoppingCart,
  };
};

export default connect(mapStateToProps, null)(ShoppingCart);
