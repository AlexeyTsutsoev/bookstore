import React, { useState } from "react";
import "./styles/style.css";
import FilterItem from "./FilterItem";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import Title from "./Title";
import { Button } from "@material-ui/core";
import {
  addAuthorFilter,
  removeAuthorFilter,
} from "../store/actionCreators/authorAction";
import {
  addPublisherFilter,
  removePublisherFilter,
} from "../store/actionCreators/publisherAction";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Filter = ({ items, title }) => {
  const [showAll, setShowAll] = useState(false);

  const filterMethod = () => {
    let add;
    let remove;
    switch (title) {
      case "Авторы":
        add = addAuthorFilter;
        remove = removeAuthorFilter;
        break;
      case "Издатели":
        add = addPublisherFilter;
        remove = removePublisherFilter;
        break;
      default:
        add = null;
        remove = null;
        break;
    }

    return { add, remove };
  };

  const lockItem = () => {
    return showAll ? items : items.slice(0, 6);
  };

  const showInput = () => {
    return showAll ? <SearchInput /> : "";
  };

  const showText = () => {
    return showAll ? "Скрыть" : "Показать все";
  };

  const renderOnlyItem = () => {
    return (
      <FilterContainer>
        <Title title={title} />
        <div>
          {items.map((item) => {
            return (
              <FilterItem key={item.id} value={item} methods={filterMethod()} />
            );
          })}
        </div>
      </FilterContainer>
    );
  };

  const renderAll = () => {
    return (
      <FilterContainer>
        <Title title={title} />
        {showInput()}
        <div>
          {lockItem().map((item) => {
            return (
              <FilterItem key={item.id} value={item} methods={filterMethod()} />
            );
          })}
        </div>
        <Button onClick={() => setShowAll(!showAll)}>{showText()}</Button>
      </FilterContainer>
    );
  };

  return items.length > 14 ? renderAll() : renderOnlyItem();
};

export default Filter;
