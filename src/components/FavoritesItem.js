import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addBook } from "../store/actionCreators/cartAction";
import { removeFromFavorites } from "../store/actionCreators/favoritesAction";

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

const FavoritesItem = ({ book }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeFromFavorites(book.id));
  };

  const addHandler = (obj) => {
    dispatch(addBook({ ...obj, id: Date.now() }));
  };

  return (
    <ItemContainer>
      <img src={book.image} />
      <ItemInfo>
        <ItemName>{book.name}</ItemName>
        <div>{book.author}</div>
        <div>Стоимость: {book.price} &#8381;</div>
        <Button
          onClick={() => addHandler(book)}
          fullWidth
          variant='contained'
          color='primary'
        >
          Добавить в корзину
        </Button>
        <div style={{ margin: "5px" }}></div>
        <Button
          onClick={() => removeHandler()}
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
