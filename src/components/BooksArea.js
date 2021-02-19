//react
import React from "react";
//components
import BookItem from "./BookItem";
//styles
import "./styles/style.css";

const BooksArea = ({ books }) => {
  return (
    <div className='container books--container'>
      {books.map((item) => {
        return (
          <BookItem
            key={item}
            image={item.url}
            author={item.author}
            price={item.price}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default BooksArea;
