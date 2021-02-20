import React from "react";
import styled from "styled-components";

/*STYLES */
const Title = styled.div`
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.3);
`;

const FilterTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default FilterTitle;
