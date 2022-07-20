import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { removedBook } from '../redux/books/books';

export default function bookLists() {
  const displayBooks = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    const targetId = e.target.id;
    dispatch(removedBook(targetId));
  };

  return (
    <ul>
      {displayBooks.map((bookList) => (
        <li key={bookList.id}>
          <div>{bookList.title}</div>
          <div>{bookList.author}</div>

          <button 
          type="button"
          id={bookList.id}
          onClick={(e) => deleteBook(e)}>
            Remove</button>

        </li>
      ))} 
  </ul>
  );
}
