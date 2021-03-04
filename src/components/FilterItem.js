import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "./styles/style.css";

const Item = styled.div`
  line-height: normal;
  height: auto;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Action = styled.a`
  color: #333333;
  text-decoration: none;
  margin: 10px;
  margin-left: 0;
  cursor: pointer;

  transition: color 0.2s linear;
`;

const FilterItem = ({ value, methods }) => {
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setActive(!isActive);
    isActive
      ? dispatch(methods.remove(value.id))
      : dispatch(methods.add(value.id));
  };

  const getColor = () => {
    return isActive ? "blue" : "black";
  };

  return (
    <Item>
      <Action style={{ color: getColor() }} onClick={clickHandler}>
        {value.name}
      </Action>
    </Item>
  );
};

export default FilterItem;
