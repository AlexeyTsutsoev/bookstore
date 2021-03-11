import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import ShoppingItem from "../../components/ShoppingItem";
import { NavLink } from "react-router-dom";
import {
  decrementItem,
  deleteBook,
  incrementItem,
} from "../../store/actionCreators/cartAction";

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

//NEED REVIEW
const ShoppingCart = () => {
  const [sum, setSum] = useState(0);
  const [cart, setCart] = useState(
    useSelector((state) => state.shoppingCart.cart)
  );
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(deleteBook(id));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  const incrementHandler = (id) => {
    dispatch(incrementItem(id));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  const decrementHandler = (id) => {
    dispatch(decrementItem(id));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  const renderEmpty = () => {
    return (
      <EmptyContainer>
        <p>В Вашей корзине нет ни одной книги</p>
        <NavLink to='/'>Выбрать товар</NavLink>
      </EmptyContainer>
    );
  };

  const totalSum = () => {
    let result = 0;
    for (let i = 0; i < cart.length; i++) {
      let sumOneBook = cart[i].book.price * cart[i].count;
      result += sumOneBook;
    }
    setSum(result);
  };

  useEffect(() => {
    totalSum();
  }, [totalSum]);

  const renderFill = () => {
    return (
      <FillContainer>
        {cart.map((book) => (
          <ShoppingItem
            onIncrement={incrementHandler}
            onDecrement={decrementHandler}
            onRemove={removeHandler}
            item={book}
            key={book.id}
          />
        ))}
        <CartFooter>
          <div>Сумма покупки:</div>
          <div>
            {sum}
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

export default ShoppingCart;
