//React
import React, { useState } from "react";
import styled from "styled-components";
//styles
import "./styles/style.css";
//components
import Title from "./Title";

import { Slider } from "@material-ui/core";

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
  const [value, setValue] = useState([50, 29900]);

  const sliderHandler = (event, data) => {
    setValue(data);
  };

  return (
    <div>
      <Title title={title} />
      <PriceContent>
        <FilterPrice>
          <div>от</div>
          <PriceInput value={value[0]} />
        </FilterPrice>
        <FilterPrice>
          <div>до</div>
          <PriceInput value={value[1]} />
        </FilterPrice>
      </PriceContent>
      <Slider value={value} onChange={sliderHandler} min={50} max={29900} />
    </div>
  );
};

export default Price;
