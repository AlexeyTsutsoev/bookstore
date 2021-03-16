import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBook } from "../../../store/actionCreators/booksAction";
import { BooksContainer, Container } from "../styles/BooksArea.style";
import BookItem from "./BookItem";
import Pages from "./Pages";

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
