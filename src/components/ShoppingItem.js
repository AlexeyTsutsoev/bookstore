import { Button } from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  height: 200px;
  width: 40%;
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

const Counter = styled.div`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShoppingItem = ({ onRemove, item, onIncrement, onDecrement }) => {
  //NEED REVIEW
  return (
    <ItemContainer>
      <img
        src={
          item.book.cover ? item.book.cover : "https://place-hold.it/300x500"
        }
      />
      <ItemInfo>
        <ItemName>{item.book.name}</ItemName>
        <div>{item.book.author.name}</div>
        <div>
          Колличество:
          <Counter>
            <RemoveIcon
              style={{ cursor: "pointer" }}
              onClick={() => onDecrement(item.book.id)}
            />
            {item.count}
            <AddIcon
              style={{ cursor: "pointer" }}
              onClick={() => onIncrement(item.book.id)}
            />
          </Counter>
        </div>
        <div>Стоимость: {item.book.price * item.count} &#8381;</div>
        <Button
          onClick={() => onRemove(item.book.id)}
          variant='contained'
          color='secondary'
        >
          удалить
        </Button>
      </ItemInfo>
    </ItemContainer>
  );
};

export default ShoppingItem;
