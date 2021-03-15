import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Title from "../../../components/Title";

import { Slider } from "@material-ui/core";
import { getPricesFromDb } from "../../../api/filters";
import {
  setMinPrice,
  setMaxPrice,
} from "../../../store/actionCreators/priceAction";

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
  const [slidersValues, setSlidersValues] = useState([minValue, maxValue]);
  const dispatch = useDispatch();

  const getPricesAPI = async () => {
    const prices = await getPricesFromDb();
    setMinValue(prices.minPrice);
    setMaxValue(prices.maxPrice);
    setSlidersValues([prices.minPrice, prices.maxPrice]);
  };

  useEffect(() => {
    getPricesAPI();
  }, []);

  const sliderHandler = (event, data) => {
    setMinValue(data[0]);
    setMaxValue(data[1]);
  };

  const setPrices = () => {
    dispatch(setMinPrice(minValue));
    dispatch(setMaxPrice(maxValue));
  };

  const changeHandlerMin = (event) => {
    setMinValue(parseInt(event.target.value));
    dispatch(setMinPrice(parseInt(event.target.value)));
  };

  const changeHandlerMax = (event) => {
    setMaxValue(parseInt(event.target.value));
    dispatch(setMaxPrice(parseInt(event.target.value)));
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
        onChangeCommitted={setPrices}
        min={slidersValues[0]}
        max={slidersValues[1]}
      />
    </div>
  );
};

export default Price;
