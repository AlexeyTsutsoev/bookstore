import { INITIALIZATION_BOOKS, SET_CURRENT_PAGE } from "../actions/types";

const initialState = {
  books: [],
  currentPage: 1,
  limit: 6,
  count: 0,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_BOOKS:
      return {
        ...state,
        books: action.payload.books,
        count: action.payload.count,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
