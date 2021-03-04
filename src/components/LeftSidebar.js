import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Price from "./Price";
import Filter from "./Filter";
import "./styles/style.css";
import {
  getAuthorsFromDb,
  getCategoriesFromDb,
  getPublishersFromDB,
} from "../api/filters";

const SideBarContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const LeftSidebar = () => {
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategoriesAPI = async () => {
    const categories = await getCategoriesFromDb();
    setCategories(categories.data);
  };

  const getPublishersAPI = async () => {
    const publishers = await getPublishersFromDB();
    setPublishers(publishers.data);
  };

  const getAuthorsAPI = async () => {
    const authors = await getAuthorsFromDb();
    setAuthors(authors.data);
  };

  useEffect(() => {
    getAuthorsAPI();
    getPublishersAPI();
    getCategoriesAPI();
  }, []);

  return (
    <SideBarContainer>
      <Filter items={categories} title={"Категории"} />
      <Price title={"Цены"} />
      <Filter items={publishers} title={"Издатели"} />
      <Filter items={authors} title={"Авторы"} />
    </SideBarContainer>
  );
};

export default LeftSidebar;
