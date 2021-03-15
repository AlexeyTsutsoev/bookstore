import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { NavLink } from "react-router-dom";
import { addToFavorAtDb, getFavoritesFromDb } from "../../../api/favorites";
import AddToCartBtn from "../../../components/AddtoCartBtn";

const Book = styled.div`
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
  const userId = useSelector((state) => state.user.user.id);
  const isAuth = useSelector((state) => state.user.isAuth);
  const path = `/book/${book.id}`;

  const favorHandler = async () => {
    if (isAuth) {
      const response = await getFavoritesFromDb(userId);
      const favoritesArr = response.favorites;
      for (let i = 0; i < favoritesArr.length; i++) {
        if (favoritesArr[i].book_id === book.id) {
          return true;
        }
      }
      return false;
    }
  };

  useEffect(() => {
    favorHandler().then((res) => setFavor(res));
  }, []);

  const addToFav = () => {
    if (!isFavor) {
      addToFavorAtDb(userId, book.id);
      setFavor(!isFavor);
    }
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
          <AddToCartBtn book={book} />
          {isFavor ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon onClick={() => addToFav()} />
          )}
        </Buttons>
      )}
    </Book>
  );
};

export default BookItem;
