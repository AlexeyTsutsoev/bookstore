//react
import React from "react";
//components
import LeftSidebar from "./LeftSidebar";
import BooksArea from "./BooksArea";
//styles
import "../../components/styles/style.css";
//api
import { getBooks } from "../../api/index";
import styled from "styled-components";
import Header from "./Header";

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
`;

const Main = () => {
  return (
    <div className='container'>
      <Header />
      <MainContainer>
        <LeftSidebar />
        <BooksArea books={getBooks()} />
      </MainContainer>
    </div>
  );
};

export default Main;
