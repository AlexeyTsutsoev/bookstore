import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FavoritesItem from "./components/FavoritesItem";
import { deleteFromFavor, getFavoritesFromDb } from "../../api/favorites";
import { useSelector } from "react-redux";
import {
  EmptyContainer,
  FavorContainer,
  FillContainer,
} from "./styles/Favorites.style";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const userId = useSelector((state) => state.user.user.id);

  const favHandler = async () => {
    const response = await getFavoritesFromDb(userId);
    setFavorites(response.favorites);
  };

  useEffect(() => {
    favHandler();
  }, []);

  const removeFavor = (id) => {
    const filter = favorites.filter((favorite) => favorite.book_id !== id);
    setFavorites(filter);
    deleteFromFavor(userId, id);
  };

  return (
    <div className='container'>
      <h1>Избранное</h1>
      <FavorContainer>
        {favorites.length ? (
          <FillContainer>
            {favorites.map((item) => (
              <FavoritesItem onRemove={removeFavor} book={item.book} />
            ))}
          </FillContainer>
        ) : (
          <EmptyContainer>
            <p>У вас нет избранных товаров</p>
            <NavLink to='/'>Выбрать товар</NavLink>
          </EmptyContainer>
        )}
      </FavorContainer>
    </div>
  );
};

export default Favorites;
