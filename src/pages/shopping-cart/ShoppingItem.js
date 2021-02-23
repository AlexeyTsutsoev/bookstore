import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { deleteBook } from "../../store/actionCreators/cartAction";

const ShoppingItem = ({ book, deleteBook }) => {
  const clickHandler = () => {
    deleteBook(book.id);
  };

  return (
    <div>
      {book.name}
      <Button
        onClick={() => clickHandler()}
        variant='contained'
        color='secondary'
      >
        удалить
      </Button>
    </div>
  );
};

const mapDispatchToProps = {
  deleteBook: deleteBook,
};

export default connect(null, mapDispatchToProps)(ShoppingItem);
