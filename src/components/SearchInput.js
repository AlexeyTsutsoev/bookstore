//React
import React, { useState } from "react";
import styled from "styled-components";
//styles
import "./styles/style.css";

const Search = styled.input`
  width: 100%;
  margin-bottom: 10px;

  border-left: none;
  border-right: none;
  border-top: none;
`;

const SearchInput = () => {
  return <Search placeholder='Поиск' />;
};

export default SearchInput;
