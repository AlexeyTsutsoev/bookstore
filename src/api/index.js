const { categories, authors, publishers, books } = require("./tempConstants");

export const getCategories = () => {
  // return new Promise(res => {
  //     setTimeout(() => {
  //         res(categories);
  //     }, 300);
  // })
  return categories;
};

export const getBooks = () => {
  return books;
};

export const getAuthors = () => {
  return authors;
};

export const getPublishers = () => {
  return publishers;
};
