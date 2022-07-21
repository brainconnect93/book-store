import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { removedBook } from '../redux/books/books';

export default function BookLists() {
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
            id={bookList.id}
            type="button"
            onClick={(e) => deleteBook(e)}
          >
            Remove
          </button>

        </li>
      ))}
    </ul>
  );
}
