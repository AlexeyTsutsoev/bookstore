import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentPage } from "../../../store/actionCreators/booksAction";

const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 20px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  .current {
    color: blue;
    font-weight: 700;
  }
`;

const Span = styled.span`
  margin: 0 10px;
`;

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
