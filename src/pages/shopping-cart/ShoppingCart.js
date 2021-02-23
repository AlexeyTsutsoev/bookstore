import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import Header from "../main/Header";
import ShoppingItem from "./ShoppingItem";
import { NavLink } from "react-router-dom";

const CartContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FillContainer = styled.div``;

const ShoppingCart = ({ books }) => {
  const renderEmpty = () => {
    return (
      <EmptyContainer>
        <p>В Вашей корзине нет ни одной книги</p>
        <NavLink to='/'>Выбрать товар</NavLink>
      </EmptyContainer>
    );
  };

  const renderFill = () => {
    return (
      <FillContainer>
        {books.map((book) => (
          <ShoppingItem book={book} key={book.id} />
        ))}
      </FillContainer>
    );
  };

  return (
    <div className='container'>
      <Header />
      <h1>Корзина</h1>
      <CartContainer>
        {books.length ? renderFill() : renderEmpty()}
      </CartContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.shoppingCart,
  };
};

export default connect(mapStateToProps, null)(ShoppingCart);
