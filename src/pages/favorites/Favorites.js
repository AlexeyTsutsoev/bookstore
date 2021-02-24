import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import FavoritesItem from "../../components/FavoritesItem";
import Header from "../../components/Header";

const FavorContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Favorites = ({ favorites }) => {
  const renderEmpty = () => {
    console.log(favorites.length);
    return (
      <EmptyContainer>
        <p>У вас нет избранных товаров</p>
        <NavLink to='/'>Выбрать товар</NavLink>
      </EmptyContainer>
    );
  };

  const renderFill = () => {
    return (
      <FillContainer>
        {favorites.map((book) => (
          <FavoritesItem book={book} key={book.id} />
        ))}
      </FillContainer>
    );
  };

  return (
    <div className='container'>
      <Header />
      <h1>Избранное</h1>
      <FavorContainer>
        {favorites.length ? renderFill() : renderEmpty()}
      </FavorContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
