//react
import React from "react";
import styled from "styled-components";
//styles
import "./styles/style.css";

/*STYLES*/

const Item = styled.div`
  line-height: normal;
  height: auto;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Link = styled.a`
  color: #333333;
  text-decoration: none;
  margin: 10px;
  margin-left: 0;

  transition: color 0.2s linear;
`;

const FilterItem = ({ value }) => {
  return (
    <Item>
      <Link href='#'>{value}</Link>
    </Item>
  );
};

export default FilterItem;
