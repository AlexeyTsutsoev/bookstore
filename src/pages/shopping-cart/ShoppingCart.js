import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingItem from "./components/ShoppingItem";
import { NavLink } from "react-router-dom";
import {
  decrementItem,
  deleteBook,
  incrementItem,
} from "../../store/actionCreators/cartAction";
import {
  CartContainer,
  CartFooter,
  EmptyContainer,
  FillContainer,
} from "./styles/ShoppingCart.style";

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

  return (
    <div className='container'>
      <h1>Корзина</h1>
      <CartContainer>
        {cart.length ? (
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
        ) : (
          <EmptyContainer>
            <p>В Вашей корзине нет ни одной книги</p>
            <NavLink to='/'>Выбрать товар</NavLink>
          </EmptyContainer>
        )}
      </CartContainer>
    </div>
  );
};

export default ShoppingCart;
