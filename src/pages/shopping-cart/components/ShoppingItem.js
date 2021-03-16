import { Button } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  Counter,
  ItemContainer,
  ItemInfo,
  ItemName,
} from "../styles/ShoppingItem.style";

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
