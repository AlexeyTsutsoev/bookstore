//React
import React, { useState } from "react";
//styles
import "./styles/style.css";
//components
import CategoryItem from "./CategoryItem";

const Authors = ({ authors }) => {
  const [showAll, setShowAll] = useState(false);

  const lockPublishers = () => {
    return showAll ? authors : authors.slice(0, 4);
  };

  const showInput = () => {
    return showAll ? "filter__search--active" : "filter__search";
  };

  const showText = () => {
    return showAll ? "Скрыть" : "Показать все";
  };

  return (
    <div className='filter filter--author'>
      <div className='filter__title filter__title--author'>Авторы</div>
      <div className={showInput()}>
        <input placeholder='Поиск' />
      </div>
      <div className='filter__content'>
        {lockPublishers().map((item) => {
          return <CategoryItem key={item} value={item.value} />;
        })}
      </div>
      <button className='filter__btn' onClick={() => setShowAll(!showAll)}>
        {showText()}
      </button>
    </div>
  );
};

export default Authors;
