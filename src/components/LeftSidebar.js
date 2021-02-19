//react
import React from "react";
//components
import Authors from "./Authors";
import Categories from "./Categories";
import Price from "./Price";
import Publishers from "./Publishers";
//styles
import "./styles/style.css";

const categories = [
  { value: "Бестселлеры" },
  { value: "Психология" },
  { value: "Искусство, дизайн и мода" },
  { value: "Художественная литература" },
  { value: "Хобби, дом и досуг" },
  { value: "Научно-популярные книги" },
  { value: "Здоровье, красота и спорт" },
  { value: "Учебная литература" },
  { value: "Детские книги" },
  { value: "Публицистика" },
  { value: "Религия и эзотерика" },
  { value: "Гуманитарные и общественные науки" },
  { value: "Школьные учебники" },
  { value: "Журналы и газеты" },
  { value: "Путешествия" },
];

const publishers = [
  { value: "Эксмо" },
  { value: "АСТ" },
  { value: "Азбука" },
  { value: "Бизнес-книги" },
  { value: "Клевер" },
  { value: "Альпина Паблишер" },
  { value: "Манн, Иванов и Фербер" },
  { value: "Рипол Классик" },
  { value: "Питер" },
  { value: "Робинс" },
  { value: "Самокат" },
  { value: "Религия и эзотерика" },
  { value: "Альпина нон-фикшен" },
  { value: "Махаон" },
  { value: "Бомбора" },
  { value: "Иностранка" },
];

const authors = [
  { value: "Стивен Кинг" },
  { value: "Владимир Маяковский" },
  { value: "Карл Маркс" },
  { value: "Адам Смит" },
  { value: "Джон Толкин" },
  { value: "Жан Поль Сартр" },
  { value: "Альберт Камю" },
  { value: "Фридрих Ницше" },
  { value: "Арестотель" },
  { value: "Николло Макиавелли" },
  { value: "Борис Акунин" },
  { value: "Тору Кумон" },
  { value: "Далай Ламма" },
  { value: "Виктор Пелевин" },
  { value: "Александр Солженицин" },
  { value: "Александр Пушкин" },
];

const LeftSidebar = () => {
  return (
    <div className='container sidebar--container'>
      <Categories categories={categories} />
      <Price />
      <Publishers publishers={publishers} />
      <Authors authors={authors} />
    </div>
  );
};

export default LeftSidebar;
