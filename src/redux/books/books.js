const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const books = [];

export const addedBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removedBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.id);

    default:
      return state;
  }
};
