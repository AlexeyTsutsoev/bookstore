import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadBook } from "../../../store/actionCreators/booksAction";
import BookItem from "./BookItem";
import Pages from "./Pages";

const Container = styled.div`
  grid-column-start: 4;
  grid-column-end: 11;

  max-width: 100%;

  flex-direction: column;
  align-items: center;
`;

const BooksContainer = styled.div`
  max-width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;

const BooksArea = () => {
  const bookList = useSelector((state) => state.books.books);
  const keyword = useSelector((state) => state.search);
  const currentPage = useSelector((state) => state.books.currentPage);
  const authorsFilter = useSelector((state) => state.authors);
  const publishersFilter = useSelector((state) => state.publishers);
  const categoriesFilter = useSelector((state) => state.categories);
  const priceFilter = useSelector((state) => state.prices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadBook({
        page: currentPage - 1,
        authors: authorsFilter,
        publishers: publishersFilter,
        categories: categoriesFilter,
        prices: [priceFilter.min, priceFilter.max],
        keyword: keyword,
      })
    );
  }, [
    categoriesFilter,
    publishersFilter,
    authorsFilter,
    currentPage,
    priceFilter,
    keyword,
  ]);

  return (
    <Container>
      <BooksContainer className='container'>
        {bookList.map((item) => {
          return (
            <BookItem
              key={item.id}
              book={{
                id: item.id,
                cover: item.cover,
                author: item.author.name,
                price: item.price,
                name: item.name,
              }}
            />
          );
        })}
      </BooksContainer>
      <Pages />
    </Container>
  );
};

export default BooksArea;
