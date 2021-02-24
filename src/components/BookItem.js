import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addBook } from "../store/actionCreators/cartAction";
import "./styles/style.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { addToFavorites } from "../store/actionCreators/favoritesAction";
import { NavLink } from "react-router-dom";

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

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BookItem = ({ image, author, price, name }) => {
  const [isFavor, setFavor] = useState(false);
  const dispatch = useDispatch();

  const addtoCart = (obj) => {
    dispatch(addBook({ ...obj, id: Date.now() }));
  };

  const addToFav = (obj) => {
    if (!isFavor) {
      dispatch(addToFavorites({ ...obj, id: Date.now() }));
      setFavor(!isFavor);
    }
  };

  const renderFavor = () => {
    return isFavor ? (
      <FavoriteIcon />
    ) : (
      <FavoriteBorderIcon
        onClick={() => addToFav({ image, author, price, name })}
      />
    );
  };

  return (
    <Book>
      <NavLink to='/book'>
        <BookImg src={image} />
      </NavLink>
      <BookAuthor>{author}</BookAuthor>
      <BookName>{name}</BookName>
      <BookPrice>{price} &#8381;</BookPrice>
      <Buttons>
        <Button
          variant='contained'
          color='primary'
          onClick={() => addtoCart({ image, author, price, name })}
        >
          Добавить
        </Button>
        {renderFavor()}
      </Buttons>
    </Book>
  );
};

export default BookItem;
