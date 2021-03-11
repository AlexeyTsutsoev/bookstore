import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FavoritesItem from "../../components/FavoritesItem";
import Header from "../../components/Header";
import { deleteFromFavor, getFavoritesFromDb } from "../../api/favorites";
import { useSelector } from "react-redux";

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

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const userId = useSelector((state) => state.user.user.id);

  const favHandler = async () => {
    const response = await getFavoritesFromDb(userId);
    setFavorites(response.data.favorites);
  };

  useEffect(() => {
    favHandler();
  }, [userId]);

  const removeFavor = (id) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
    deleteFromFavor(userId, id);
  };

  const renderEmpty = () => {
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
        {favorites.map((item) => (
          <FavoritesItem onRemove={removeFavor} book={item.book} />
        ))}
      </FillContainer>
    );
  };

  console.log(favorites);

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

export default Favorites;
