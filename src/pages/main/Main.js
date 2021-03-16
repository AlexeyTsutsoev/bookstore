import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import BooksArea from "./components/BooksArea";
import MainContainer from "./styles/Main.style";

const Main = () => {
  return (
    <MainContainer>
      <LeftSidebar />
      <BooksArea />
    </MainContainer>
  );
};

export default Main;
