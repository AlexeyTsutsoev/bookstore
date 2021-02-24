import Lord from "../../components/styles/images/book.jpg";
import { ADD_BOOKAREA } from "../actions/types";

const initialState = [
  {
    id: 1,
    url: Lord,
    name: "Lord of The Ring",
    author: "Jhon Tolkin",
    price: "1999",
  },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
  { url: Lord, name: "Lord of The Ring", author: "Jhon Tolkin", price: "1999" },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKAREA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default booksReducer;
