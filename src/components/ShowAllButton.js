import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 5px;

  border: none;
  background-color: white;
  text-align: left;
  color: #34547a;

  cursor: pointer;
`;

const ShowAllButton = ({ clickHandler, text }) => {
  return <Button onClick={clickHandler}>{text}</Button>;
};

export default ShowAllButton;
