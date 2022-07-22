import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { deleteBook, loadBooks } from '../redux/books/thunkFunction';

export default function BookLists() {
  const displayBooks = useSelector((state) => state.books, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  const deleteBookItems = (e) => {
    const targetId = e.target.id;
    dispatch(deleteBook(targetId));
  };

  return (
    <ul>
      {displayBooks.map((bookList) => (
        <li key={bookList.item_id}>
          <div>{bookList.title}</div>
          <div>{bookList.author}</div>

          <button
            id={bookList.item_id}
            type="button"
            onClick={(e) => deleteBookItems(e)}
          >
            Remove
          </button>

        </li>
      ))}
    </ul>
  );
}
