import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  height: 200px;
  width: 40%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const Counter = styled.div`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
