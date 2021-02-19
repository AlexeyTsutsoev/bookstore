//react
import {
  faUser,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
//styles
import "./styles/style.css";

const Header = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <header className='header'>
      <div className='container header--container'>
        <div className='header__topline'>
          <div className='header__topline-column'>
            <a href='#'>Ваш город Москва</a>
            <a href='#'>Адреса магазинов</a>
          </div>
          <div className='header__topline-column'>
            <a href='#'>Блог</a>
            <a href='#'>Доставка</a>
            <a href='#'>8-800-000-00-00</a>
          </div>
        </div>
        <div className='header__mainline'>
          <div className='header__mainline-logo'>
            <h1>bookstore</h1>
          </div>
          <div className='header__mainline-form-container'>
            <form className='header__mainline-form-form'>
              <input
                className='header__mainline-form-input'
                placeholder='Поиск'
              />
            </form>
          </div>
          <div className='header__mainline-icons'>
            <button onClick={modalHandler} className='header__icon'>
              <FontAwesomeIcon icon={faUser} />
            </button>

            <button className='header__icon'>
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <button className='header__icon'>
              <FontAwesomeIcon icon={faShoppingBag} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
