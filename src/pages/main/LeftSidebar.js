//react
import React from "react";
import styled from "styled-components";
//components
import Price from "../../components/Price";
import Filter from "../../components/Filter";
//styles
import "../../components/styles/style.css";
//api
import { getAuthors, getCategories, getPublishers } from "../../api/index";

const SideBarContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const LeftSidebar = () => {
  return (
    <SideBarContainer>
      <Filter items={getCategories()} title={"Категории"} />
      <Price title={"Цены"} />
      <Filter items={getPublishers()} title={"Издатели"} />
      <Filter items={getAuthors()} title={"Авторы"} />
    </SideBarContainer>
  );
};

export default LeftSidebar;
