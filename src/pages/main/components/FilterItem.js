import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Action, Item } from "../styles/FilterItem.style";

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
