//react
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
//components
import BookItem from "./BookItem";
//styles
import "./styles/style.css";

const BooksContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 11;

  max-width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BooksArea = ({ books }) => {
  return (
    <BooksContainer className='container'>
      {books.map((item, index) => {
        return (
          <BookItem
            key={index}
            image={item.url}
            author={item.author}
            price={item.price}
            name={item.name}
          />
        );
      })}
    </BooksContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps, null)(BooksArea);
