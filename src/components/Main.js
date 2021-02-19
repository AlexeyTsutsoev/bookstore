//react
import React from "react";
//components
import LeftSidebar from "./LeftSidebar";
import BooksArea from "./BooksArea";
//styles
import Lord from "./styles/images/book.jpg";
import "./styles/style.css";

const books = [
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
];

const Main = () => {
  return (
    <main className='container main--container'>
      <LeftSidebar />
      <BooksArea books={books} />
    </main>
  );
};

export default Main;
