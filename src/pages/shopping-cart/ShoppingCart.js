import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import ShoppingItem from "../../components/ShoppingItem";
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

const FillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid gray;
`;

const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  padding: 20px;
  border-top: 1px solid gray;
  margin-bottom: 100px;
`;

const ShoppingCart = ({ cart }) => {
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
        {cart.map((book) => (
          <ShoppingItem book={book} key={book.id} />
        ))}
        <CartFooter>
          <div>Сумма покупки:</div>
          <div>
            {cart.reduce((sum, current) => sum + parseInt(current.price), 0)}
            &#8381;
          </div>
        </CartFooter>
      </FillContainer>
    );
  };

  return (
    <div className='container'>
      <Header />
      <h1>Корзина</h1>
      <CartContainer>
        {cart.length ? renderFill() : renderEmpty()}
      </CartContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCart,
  };
};

export default connect(mapStateToProps, null)(ShoppingCart);
