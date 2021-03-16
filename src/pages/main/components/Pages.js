import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../store/actionCreators/booksAction";
import { PagesContainer, Span } from "../styles/Pages.style";

const Pages = () => {
  const currentPage = useSelector((state) => state.books.currentPage);
  const limit = useSelector((state) => state.books.limit);
  const count = useSelector((state) => state.books.count);
  const dispatch = useDispatch();

  const getPages = (count, limit) => {
    const lenght = Math.ceil(count / limit);
    const result = [];
    for (let i = 1; i <= lenght; i++) {
      result.push(i);
    }
    return result;
  };

  const clickHandler = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <PagesContainer>
      {getPages(count, limit).map((item, index) => (
        <Span
          style={{ cursor: "pointer" }}
          onClick={() => clickHandler(item)}
          className={currentPage === item ? "current" : "notCurrent"}
          key={index}
        >
          {item}
        </Span>
      ))}
    </PagesContainer>
  );
};

export default Pages;
