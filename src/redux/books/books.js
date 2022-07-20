const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addedBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removedBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const books = [];

export default (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};
