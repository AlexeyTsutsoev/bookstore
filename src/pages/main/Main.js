import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import BooksArea from "./components/BooksArea";
import styled from "styled-components";

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
`;

const Main = () => {
  return (
    <div className='container'>
      <MainContainer>
        <LeftSidebar />
        <BooksArea />
      </MainContainer>
    </div>
  );
};

export default Main;
