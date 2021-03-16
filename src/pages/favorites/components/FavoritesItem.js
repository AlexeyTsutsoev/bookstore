import React from "react";
import { Button } from "@material-ui/core";
import AddToCartBtn from "../../../components/AddtoCartBtn";
import {
  ItemContainer,
  ItemInfo,
  ItemName,
} from "../styles/FavoritesItem.style";

const FavoritesItem = ({ onRemove, book }) => {
  return (
    <ItemContainer>
      <img src={book.cover ? book.cover : "https://place-hold.it/300x500"} />
      <ItemInfo>
        <ItemName>{book.name}</ItemName>
        <div>{book.author.name}</div>
        <div>Стоимость: {book.price} &#8381;</div>
        <AddToCartBtn book={book} />
        <div style={{ margin: "5px" }}></div>
        <Button
          onClick={() => onRemove(book.id)}
          fullWidth
          variant='contained'
          color='secondary'
        >
          удалить из избранного
        </Button>
      </ItemInfo>
    </ItemContainer>
  );
};

export default FavoritesItem;
