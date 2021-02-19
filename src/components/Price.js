//React
import React from "react";
//styles
import "./styles/style.css";

const Price = () => {
  return (
    <div className='filter filter--price'>
      <div className='filter__title filter__title--price'>Цены</div>
      <div className='filter__contnet filter__contnet--price'>
        <div className='filter__price'>
          <div className='filter__price--title'>от</div>
          <div className='filter__price--input'>
            <input placeholder='50' />
          </div>
        </div>
        <div className='filter__price'>
          <div className='filter__price--title'>до</div>
          <div className='filter__price--input'>
            <input placeholder='29900' />
          </div>
        </div>
      </div>
      <div className='filter__slider'>слайдер</div>
    </div>
  );
};

export default Price;
