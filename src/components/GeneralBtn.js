//react
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #46c3d2;

  margin: 0;
  padding: 0;
  width: 80%;
  border: 0;
  font-size: 25px;

  cursor: pointer;
`;

const GeneralBtn = ({ text, clickHandler }) => {
  return <Button onClick={clickHandler}>{text}</Button>;
};

export default GeneralBtn;
