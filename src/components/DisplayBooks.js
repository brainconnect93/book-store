import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookLists from './Books';
import AddBook from './AddBooks';
import { addedBook } from '../redux/books/books';

const DisplayBooks = () => {
  const dispatch = useDispatch();

  const [books, setBooks] = useState({
    title: '',
    author: '',
    id: '',
  });

  const onChange = (e) => {
    setBooks({
      ...books,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (books.title.trim() && books.author.trim()) {
      dispatch(addedBook(books));
    }

    // to clear the input field
    e.target.parentElement.children[0].value = '';
    e.target.parentElement.children[1].value = '';

    setBooks({
      title: '',
      author: '',
    });
  };

  return (
    <div>
      <BookLists />

      <AddBook
        handleSubmit={handleSubmit}
        onChange={onChange}
      />
    </div>
  );
};

export default DisplayBooks;
