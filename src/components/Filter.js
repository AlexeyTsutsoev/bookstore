//React
import React, { useState } from "react";
//styles
import "./styles/style.css";
//components
import FilterItem from "./FilterItem";
import ShowAllButton from "./ShowAllButton";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import FilterTitle from "./FilterTitle";

/*Styles*/
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
        <FilterTitle title={title} />
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
        <FilterTitle title={title} />
        {showInput()}
        <div>
          {lockItem().map((item, index) => {
            return <FilterItem key={index} value={item.value} />;
          })}
        </div>
        <ShowAllButton
          text={showText()}
          clickHandler={() => setShowAll(!showAll)}
        />
      </FilterContainer>
    );
  };

  return items.length > 14 ? renderAll() : renderOnlyItem();
};

export default Filter;
