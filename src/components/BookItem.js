import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addBook } from "../store/actionCreators/cartAction";
import "./styles/style.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { addToFavorites } from "../store/actionCreators/favoritesAction";
import { NavLink } from "react-router-dom";

const Book = styled.div`
  padding: 30px;
  padding-bottom: 0;

  width: 30%;

  background-color: white;

  margin-bottom: 30px;

  transition: background 0.2s linear;

  cursor: pointer;
`;

const BookImg = styled.img`
  width: 100%;
  height: 70%;
`;

const BookAuthor = styled.div`
  color: #a0a0a0;
  font-size: 15px;
`;

const BookName = styled.div``;

const BookPrice = styled.div`
  font-size: 25px;
  color: #eb5757;
  font-weight: lighter;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BookItem = ({ book }) => {
  const [isFavor, setFavor] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const path = `/book/${book.id}`;

  const addtoCart = (book) => {
    dispatch(addBook(book));
  };

  const addToFav = (book) => {
    if (!isFavor) {
      dispatch(addToFavorites(book));
      setFavor(!isFavor);
    }
  };

  const renderFavor = () => {
    return isFavor ? (
      <FavoriteIcon />
    ) : (
      <FavoriteBorderIcon onClick={() => addToFav(book)} />
    );
  };

  return (
    <Book>
      <NavLink to={path}>
        <BookImg
          src={book.cover ? book.cover : "https://place-hold.it/300x500"}
        />
      </NavLink>
      <BookAuthor>{book.author}</BookAuthor>
      <BookName>{book.name}</BookName>
      <BookPrice>{book.price} &#8381;</BookPrice>
      {isAuth && (
        <Buttons>
          <Button
            variant='contained'
            color='primary'
            onClick={() => addtoCart(book)}
          >
            Добавить
          </Button>
          {renderFavor()}
        </Buttons>
      )}
    </Book>
  );
};

export default BookItem;
