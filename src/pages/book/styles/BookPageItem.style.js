import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: rows;
`;

export const Item = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 30%;
  max-height: 50%;

  img {
    width: 300px;
    height: 500px;
  }
`;

export const Info = styled.div`
  border-bottom: 1px solid gray;
  font-size: 20px;
  height: auto;
`;
