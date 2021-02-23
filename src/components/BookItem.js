//react
import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addBook } from "../store/actionCreators/cartAction";

//styles
import "./styles/style.css";

/*STYLES*/
const Book = styled.div`
  flex: 0 0 30%;
  padding: 30px;
  padding-bottom: 0;

  background-color: white;

  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: background 0.2s linear;

  cursor: pointer;
`;

const BookImg = styled.img`
  width: 100%;
`;

const BookAuthor = styled.div`
  color: #a0a0a0;
  font-size: 15px;
`;

const BookName = styled.div`
  font-size: 20px;
`;

const BookPrice = styled.div`
  font-size: 25px;
  color: #eb5757;
  font-weight: lighter;
`;

const BookItem = ({ image, author, price, name }) => {
  const dispatch = useDispatch();

  const addtoCart = (obj) => {
    dispatch(addBook({ ...obj, id: Date.now() }));
  };
  return (
    <Book>
      <BookImg src={image} />
      <BookAuthor>{author}</BookAuthor>
      <BookName>{name}</BookName>
      <BookPrice>{price} &#8381;</BookPrice>
      <Button
        variant='contained'
        color='primary'
        onClick={() => addtoCart({ image, author, price, name })}
      >
        Добавить
      </Button>
    </Book>
  );
};

export default BookItem;
