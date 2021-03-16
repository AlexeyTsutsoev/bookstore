import styled from "styled-components";

export const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 20px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  .current {
    color: blue;
    font-weight: 700;
  }
`;

export const Span = styled.span`
  margin: 0 10px;
`;
