import { createAsyncThunk } from '@reduxjs/toolkit';

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