import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadBook } from "../store/actionCreators/booksAction";
import BookItem from "./BookItem";
import Pages from "./Pages";
import "./styles/style.css";

const Container = styled.div`
  grid-column-start: 4;
  grid-column-end: 11;

  max-width: 100%;

  flex-direction: column;
  align-items: center;
`;

const BooksContainer = styled.div`
  max-width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BooksArea = () => {
  const bookList = useSelector((state) => state.books.books);
  const currentPage = useSelector((state) => state.books.currentPage);
  const authorsFilter = useSelector((state) => state.authors);
  const publishersFilter = useSelector((state) => state.publishers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadBook({
        page: currentPage - 1,
        authors: authorsFilter,
        publishers: publishersFilter,
      })
    );
  }, []);

  return (
    <Container>
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
      <Pages />
    </Container>
  );
};

export default BooksArea;
