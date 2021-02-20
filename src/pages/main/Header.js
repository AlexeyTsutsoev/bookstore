//react
import {
  faUser,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
//styles
import "../../components/styles/style.css";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 30px;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopLineColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopLineLink = styled.a`
  color: #333333;
  text-decoration: none;
  margin: 10px;
  margin-left: 0;

  transition: color 0.2s linear;
  &:last-child {
    margin-right: 0;
  }
`;

const MainLine = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const MainLineLogo = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;

  grid-row-start: 2;

  text-transform: uppercase;
  font-size: 30px;
  font-weight: bold;
`;

const FormContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 7;

  grid-row-start: 2;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
`;

const Icons = styled.div`
  grid-column-start: 7;
  grid-column-end: 9;

  grid-row-start: 2;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const IconItem = styled.button`
  background-color: white;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border: none;
  padding: 0;
  margin-left: 10px;

  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className='container'>
        <TopLine>
          <TopLineColumn>
            <TopLineLink href='#'>Ваш город Москва</TopLineLink>
            <TopLineLink href='#'>Адреса магазинов</TopLineLink>
          </TopLineColumn>
          <TopLineColumn>
            <TopLineLink href='#'>Блог</TopLineLink>
            <TopLineLink href='#'>Доставка</TopLineLink>
            <TopLineLink href='#'>8-800-000-00-00</TopLineLink>
          </TopLineColumn>
        </TopLine>
        <MainLine>
          <MainLineLogo>bookstore</MainLineLogo>
          <FormContainer>
            <Form>
              <Input placeholder='Поиск' />
            </Form>
          </FormContainer>
          <Icons>
            <IconItem>
              <NavLink to='/login'>
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            </IconItem>

            <IconItem>
              <FontAwesomeIcon icon={faHeart} />
            </IconItem>

            <IconItem>
              <FontAwesomeIcon icon={faShoppingBag} />
            </IconItem>
          </Icons>
        </MainLine>
      </div>
    </HeaderContainer>
  );
};

export default Header;
