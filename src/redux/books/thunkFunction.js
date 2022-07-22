import { createAsyncThunk } from '@reduxjs/toolkit';
import { object } from 'prop-types';

const CREATE_BOOK = 'bookstore/books/CREATE_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const LOAD_BOOK = 'bookstore/books/LOAD_BOOK';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'BdQQgWoibG47n5bOZipB';

export const createBook = createAsyncThunk(
  CREATE_BOOK,
  async (books) => fetch(`${baseUrl}/${appId}/books`, {
    method: 'POST',
    body: JSON.stringify(books),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((res) => res.text())
  .then((data) => ([data, books])),
);

export const deleteBook = createAsyncThunk(
  DELETE_BOOK,
  async (itemId) => fetch(`${baseUrl}/${appId}/books/${itemId}`, {
    method: 'DELETE',
  })
  .then((res) => res.text())
  .then((data) => ([data, itemId])),
);

export const loadBooks = createAsyncThunk(
  LOAD_BOOK,
  async () => {
    const request = new Request(`${baseUrl}/${appId}/books`);
    const res = await fetch(request);
    const result = await res.json();
    const arr = object.enteries(result);

    const newArr = [];
    arr.forEach((item) => {
      const itemId = item[0];
      const bookList = item[1][0];
      newArr.push({...bookList, item_id: itemId});
    });

    return newArr;
  }
)