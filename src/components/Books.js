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
      {Object.keys(displayBooks).map((bookId) => (
        <li key={displayBooks[bookId][0].item_id}>
          <div>{displayBooks[bookId][0].title}</div>
          <div>{displayBooks[bookId][0].author}</div>

          <button
            id={displayBooks[bookId][0].item_id}
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
