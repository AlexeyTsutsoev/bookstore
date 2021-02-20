import React from "react";
import styled from "styled-components";

/*STYLES */
const Text = styled.div`
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.3);
`;

const Title = ({ title }) => {
  return <Text>{title}</Text>;
};

export default Title;
