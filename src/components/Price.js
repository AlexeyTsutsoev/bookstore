import React, { useState } from "react";
import styled from "styled-components";
import "./styles/style.css";
import Title from "./Title";

import { Slider } from "@material-ui/core";

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
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(29990);

  const sliderHandler = (event, data) => {
    setMinValue(data[0]);
    setMaxValue(data[1]);
  };

  const changeHandlerMin = (event) => {
    setMinValue(parseInt(event.target.value));
  };

  const changeHandlerMax = (event) => {
    setMaxValue(parseInt(event.target.value));
  };

  return (
    <div>
      <Title title={title} />
      <PriceContent>
        <FilterPrice>
          <div>от</div>
          <PriceInput
            type='number'
            onChange={(event) => changeHandlerMin(event)}
            value={minValue}
          />
        </FilterPrice>
        <FilterPrice>
          <div>до</div>
          <PriceInput
            type='number'
            onChange={(event) => changeHandlerMax(event)}
            value={maxValue}
          />
        </FilterPrice>
      </PriceContent>
      <Slider
        value={[parseInt(minValue), parseInt(maxValue)]}
        onChange={sliderHandler}
        min={50}
        max={29900}
      />
    </div>
  );
};

export default Price;
