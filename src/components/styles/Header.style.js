import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 30px;
`;

export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopLineColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopLineLink = styled.a`
  color: #333333;
  text-decoration: none;
  margin: 10px;
  margin-left: 0;

  transition: color 0.2s linear;
  &:last-child {
    margin-right: 0;
  }
`;

export const MainLine = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export const MainLineLogo = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;

  grid-row-start: 2;

  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: bold;
`;

export const FormContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 7;

  grid-row-start: 2;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const Icons = styled.div`
  grid-column-start: 7;
  grid-column-end: 9;

  grid-row-start: 2;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const IconItem = styled.button`
  background-color: white;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border: none;
  padding: 0;
  margin-left: 10px;

  cursor: pointer;
  position: relative;
`;

export const ShoppingCounter = styled.span`
  min-width: 1rem;
  height: 1rem;
  padding: 0 0.125rem;
  display: inline-block;
  border-radius: 50%;
  font-weight: 500;
  font-size: 0.8625rem;
  line-height: 1rem;
  text-align: center;

  background-color: #46c3d2;
  color: #fff;

  position: absolute;
  right: -1px;
  bottom: -1px;
`;
