import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import AddToCartBtn from "./AddtoCartBtn";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  height: 200px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const FavoritesItem = ({ onRemove, book }) => {
  console.log(book);
  return (
    <ItemContainer>
      <img src={book.cover} />
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
