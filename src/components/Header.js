import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch, useSelector } from "react-redux";
import { setKeyword } from "../store/actionCreators/searchAction";
import { setCurrentPage } from "../store/actionCreators/booksAction";
import {
  Form,
  FormContainer,
  HeaderContainer,
  IconItem,
  Icons,
  MainLine,
  MainLineLogo,
  ShoppingCounter,
  TopLine,
  TopLineColumn,
  TopLineLink,
} from "./styles/Header.style";

const styleForLink = {
  color: "black",
  textDecoration: "none",
};

const Header = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const isAuth = useSelector((state) => state.user.isAuth);
  const id = useSelector((state) => state.user.user.id);
  const path = `/user/${id}`;
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const cartLenght = useSelector((state) => state.shoppingCart.cart.length);
  const [counter, setCounter] = useState(cartLenght);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(setKeyword(searchVal));
    dispatch(setCurrentPage(1));
    props.history.push("/");
    setSearchVal("");
  };

  const clearSearch = () => {
    dispatch(setKeyword(""));
  };

  useEffect(() => {
    setCounter(cartLenght);
  }, [cartLenght]);

  return (
    <HeaderContainer>
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
        <MainLineLogo>
          <NavLink to='/' activeStyle={styleForLink}>
            bookstore
          </NavLink>
        </MainLineLogo>
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='Поиск...'
              variant='outlined'
              value={searchVal}
              onChange={(event) => setSearchVal(event.target.value)}
            />
          </Form>
          {search && (
            <div>
              Результаты поиска по запросу:{search}
              <ClearIcon onClick={clearSearch} style={{ cursor: "pointer" }} />
            </div>
          )}
        </FormContainer>
        <Icons>
          <IconItem>
            {isAuth ? (
              <NavLink to={path} activeStyle={styleForLink}>
                <PersonIcon />
              </NavLink>
            ) : (
              <NavLink to='/login' activeStyle={styleForLink}>
                <PersonIcon />
              </NavLink>
            )}
          </IconItem>

          <IconItem>
            <NavLink to='/favor' activeStyle={styleForLink}>
              <FavoriteIcon />
            </NavLink>
          </IconItem>

          <IconItem>
            <NavLink to='/shopping-cart' activeStyle={styleForLink}>
              <ShoppingBasketIcon />
            </NavLink>
            <ShoppingCounter>{counter}</ShoppingCounter>
          </IconItem>
        </Icons>
      </MainLine>
    </HeaderContainer>
  );
};

export default withRouter(Header);
