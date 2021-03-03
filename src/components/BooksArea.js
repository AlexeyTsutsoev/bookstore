import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllBooksFromDb } from "../http/books";
import BookItem from "./BookItem";
import "./styles/style.css";

const BooksContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 11;

  max-width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BooksArea = () => {
  const bookList = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksFromDb());
  }, []);

  return (
    <BooksContainer className='container'>
      {bookList.map((item) => {
        return (
          <BookItem
            key={item.id}
            image={item.cover}
            author={item.author.name}
            price={item.price}
            name={item.name}
          />
        );
      })}
    </BooksContainer>
  );
};

export default BooksArea;
