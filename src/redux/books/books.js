const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addedBook = () => ({
  type: ADD_BOOK,
});

export const removedBook = () => ({
  type: REMOVE_BOOK,
});

const books = [];

export default (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];

    case REMOVE_BOOK:
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1, state.length),
      ];

    default:
      return state;
  }
};
