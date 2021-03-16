import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { NavLink } from "react-router-dom";
import { addToFavorAtDb, getFavoritesFromDb } from "../../../api/favorites";
import AddToCartBtn from "../../../components/AddtoCartBtn";
import {
  Book,
  BookAuthor,
  BookImg,
  BookName,
  BookPrice,
  Buttons,
} from "../styles/BookItem.style";

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
