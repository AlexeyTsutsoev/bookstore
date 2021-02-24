import React, { useState } from "react";
import "./styles/style.css";
import FilterItem from "./FilterItem";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import Title from "./Title";
import { Button } from "@material-ui/core";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Filter = ({ items, title }) => {
  const [showAll, setShowAll] = useState(false);

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
          {items.map((item, index) => {
            return <FilterItem key={index} value={item.value} />;
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
          {lockItem().map((item, index) => {
            return <FilterItem key={index} value={item.value} />;
          })}
        </div>
        <Button onClick={() => setShowAll(!showAll)}>{showText()}</Button>
      </FilterContainer>
    );
  };

  return items.length > 14 ? renderAll() : renderOnlyItem();
};

export default Filter;
