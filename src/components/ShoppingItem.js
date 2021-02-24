import { Button } from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import { deleteBook } from "../store/actionCreators/cartAction";

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
const ItemAuthor = styled.div``;
const ItemPrice = styled.div``;

const ShoppingItem = ({ book, deleteBook }) => {
  const clickHandler = () => {
    deleteBook(book.id);
  };

  return (
    <ItemContainer>
      <img src={book.image} />
      <ItemInfo>
        <ItemName>{book.name}</ItemName>
        <ItemAuthor>{book.author}</ItemAuthor>
        <ItemPrice>Стоимость: {book.price} &#8381;</ItemPrice>
        <Button
          onClick={() => clickHandler()}
          variant='contained'
          color='secondary'
        >
          удалить
        </Button>
      </ItemInfo>
    </ItemContainer>
  );
};

const mapDispatchToProps = {
  deleteBook: deleteBook,
};

export default connect(null, mapDispatchToProps)(ShoppingItem);
