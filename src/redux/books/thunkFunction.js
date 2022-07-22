import { createAsyncThunk } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils'
// import { useDispatch } from 'react-redux';
// import DisplayBooks from '../components/DisplayBooks';

const CREATE_BOOK = 'bookstore/books/CREATE_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const LOAD_BOOK = 'bookstore/books/LOAD_BOOK';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'HFXJLS6sqYBrz4mVU65o';

export const createBook = createAsyncThunk(
  CREATE_BOOK,
  async (books) => {
    await fetch(`${baseUrl}/${appId}/books`, {
    method: 'POST',
    body: JSON.stringify(books),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.text())
  .then((data) => data);

  const data = await fetch(`${baseUrl}/${appId}/books`)
    .then((response) => response.json())
    .then((data) => data);

    return data;
 },
);

export const deleteBook = createAsyncThunk(
  DELETE_BOOK,
  async (id) => {
    await fetch(`${baseUrl}/${appId}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  })
    .then((response) => response.text())
    .then((data) => data);

    const data = await fetch(`${baseUrl}/${appId}/books`)
      .then((response) => response.json())
      .then((data) => data);

    return data;
  },
);

export const loadBooks = createAsyncThunk(
  LOAD_BOOK,
  async () => {
    const request = new Request(`${baseUrl}/${appId}/books`);
    const res = await fetch(request);
    const result = await res.json();
    console.log(result);
    return result;
  },
);

const books = [];

export default (state = books, action) => {
  switch (action.type) {
    case 'bookstore/books/CREATE_BOOK/fulfilled':
     return action.payload;

    case 'bookstore/books/LOAD_BOOK/fulfilled':
      return action.payload;

    case 'bookstore/books/DELETE_BOOK/fulfilled':
      return state.filter((books) => books.item_id !== action.payload);

    default:
      return state;
  }
};
