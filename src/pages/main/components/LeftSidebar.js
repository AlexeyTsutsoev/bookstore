import React, { useEffect, useState } from "react";
import Price from "./Price";
import Filter from "./Filter";
import {
  getAuthorsFromDb,
  getCategoriesFromDb,
  getPublishersFromDB,
} from "../../../api/filters";
import { SideBarContainer } from "../styles/LeftSideBar.style";

const LeftSidebar = () => {
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategoriesAPI = async () => {
    const categories = await getCategoriesFromDb();
    setCategories(categories);
  };

  const getPublishersAPI = async () => {
    const publishers = await getPublishersFromDB();
    setPublishers(publishers);
  };

  const getAuthorsAPI = async () => {
    const authors = await getAuthorsFromDb();
    setAuthors(authors);
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
