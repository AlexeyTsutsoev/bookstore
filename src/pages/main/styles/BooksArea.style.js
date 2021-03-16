import styled from "styled-components";

export const Container = styled.div`
  grid-column-start: 4;
  grid-column-end: 11;

  max-width: 100%;

  flex-direction: column;
  align-items: center;
`;

export const BooksContainer = styled.div`
  max-width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;
