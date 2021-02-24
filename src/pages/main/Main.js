//react
import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import BooksArea from "../../components/BooksArea";
import "../../components/styles/style.css";
import styled from "styled-components";
import Header from "../../components/Header";

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
        <BooksArea />
      </MainContainer>
    </div>
  );
};

export default Main;
