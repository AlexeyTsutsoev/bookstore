//react
import React from "react";
//components
import CategoryItem from "./CategoryItem";
//styles
import "./styles/style.css";

const Categories = ({ categories }) => {
  return (
    <div className='filter'>
      <div className='filter__title'>Категории</div>
      <div className='filter__content'>
        {categories.map((item) => {
          return <CategoryItem key={item} value={item.value} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
