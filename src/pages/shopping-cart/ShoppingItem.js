import React from "react";

const ShoppingItem = ({ book }) => {
  return <div className='card'>{book.name}</div>;
};

export default ShoppingItem;
