import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/actionCreators/cartAction";

const AddToCartBtn = ({ book }) => {
  const dispatch = useDispatch();

  const addtoCart = (book) => {
    dispatch(addBook(book));
  };

  return (
    <Button variant='contained' color='primary' onClick={() => addtoCart(book)}>
      Добавить в корзину
    </Button>
  );
};

export default AddToCartBtn;
