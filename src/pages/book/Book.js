import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOneBookFromDb } from "../../api/books";
import Header from "../../components/Header";

const Book = () => {
  const [book, setBook] = useState({});
  const current = useSelector((state) => state.books.currentBook);

  const getBookAPI = async () => {
    const book = await getOneBookFromDb(current);
    setBook(book.data);
  };

  useEffect(() => {
    getBookAPI();
  }, []);

  return (
    <div className='container'>
      <Header />
      <div>{book.name}</div>
    </div>
  );
};

export default Book;
