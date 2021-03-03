import { INITIALIZATION_BOOKS } from "../actions/types";

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
