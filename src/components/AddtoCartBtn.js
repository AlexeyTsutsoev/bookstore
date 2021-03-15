import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, deleteBook } from "../store/actionCreators/cartAction";

//NEED REVIEW
const AddToCartBtn = ({ book }) => {
  const dispatch = useDispatch();
  const [isInCart, setInCart] = useState(false);

  const checkCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    let result = false;
    if (cart) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].book.id === book.id) {
          result = true;
        }
      }
    }
    setInCart(result);
  };

  useEffect(() => {
    checkCart();
  }, [checkCart]);

  const addtoCart = (book) => {
    dispatch(addBook(book));
    setInCart(true);
  };

  const removeFromCart = (id) => {
    dispatch(deleteBook(id));
    setInCart(false);
  };

  return isInCart ? (
    <Button
      variant='contained'
      color='secondary'
      onClick={() => removeFromCart(book.id)}
    >
      Удалить из корзины
    </Button>
  ) : (
    <Button variant='contained' color='primary' onClick={() => addtoCart(book)}>
      Добавить в корзину
    </Button>
  );
};

export default AddToCartBtn;
