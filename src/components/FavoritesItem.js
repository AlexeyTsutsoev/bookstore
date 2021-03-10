import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../store/actionCreators/cartAction";

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

const FavoritesItem = ({ onRemove, name, id, price, cover, author }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user.id);

  const addHandler = (obj) => {
    dispatch(addBook(obj));
  };

  return (
    <ItemContainer>
      <img src={cover} />
      <ItemInfo>
        <ItemName>{name}</ItemName>
        <div>{author}</div>
        <div>Стоимость: {price} &#8381;</div>
        <Button
          onClick={() => addHandler({ name, id, price, cover, author })}
          fullWidth
          variant='contained'
          color='primary'
        >
          Добавить в корзину
        </Button>
        <div style={{ margin: "5px" }}></div>
        <Button
          onClick={() => onRemove(id)}
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
