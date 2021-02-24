import React from "react";
import styled from "styled-components";
import Price from "./Price";
import Filter from "./Filter";
import "./styles/style.css";
import { getAuthors, getCategories, getPublishers } from "../api/index";

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
