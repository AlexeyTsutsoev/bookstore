//React
import React, { useState } from "react";
import styled from "styled-components";
//styles
import "./styles/style.css";
//components
import FilterTitle from "./FilterTitle";

import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

/*STYLES*/
const PriceContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PriceInput = styled.input`
  width: 100%;
  border-left: none;
  border-right: none;
  border-top: none;
`;

const Price = ({ title }) => {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(29900);

  const setPrice = (arr) => {
    setMinPrice(arr[0]);
    setMaxPrice(arr[1]);
  };

  return (
    <div>
      <FilterTitle title={title} />
      <PriceContent>
        <FilterPrice>
          <div>от</div>
          <PriceInput value={minPrice} />
        </FilterPrice>
        <FilterPrice>
          <div>до</div>
          <PriceInput value={maxPrice} />
        </FilterPrice>
      </PriceContent>
      <Range
        min={minPrice}
        max={maxPrice}
        defaultValue={[minPrice, maxPrice]}
        onChange={(event) => setPrice(event)}
        /*onAfterChange={(event) => setPrice(event)}*/
      />
    </div>
  );
};

export default Price;
