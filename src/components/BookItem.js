//react
import React from "react";

//styles
import "./styles/style.css";

const BookItem = ({ image, author, price, name }) => {
  return (
    <div className='book__item'>
      <img src={image} />
      <div className='book__author'>{author}</div>
      <div className='book__name'>{name}</div>
      <div className='book__price'>{price} &#8381;</div>
      <button className='book__btn'>Добавить</button>
    </div>
  );
};

export default BookItem;
