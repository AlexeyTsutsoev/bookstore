//react
import React from "react";
//styles
import "./styles/style.css";

const CategoryItem = ({ value }) => {
  return (
    <div className='category__item'>
      <a href='#'>{value}</a>
    </div>
  );
};

export default CategoryItem;
