import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookLists from './Books';
import AddBook from './AddBooks';
import { createBook } from '../redux/books/thunkFunction';

const DisplayBooks = () => {
  const dispatch = useDispatch();

  const [books, setBooks] = useState({
    title: '',
    author: '',
    category: '',
    item_id: '',
  });

  const onChange = (e) => {
    setBooks({
      ...books,
      [e.target.name]: e.target.value,
      item_id: uuidv4(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (books.title.trim() && books.author.trim()) {
      dispatch(createBook(books));
    }

    // to clear the input field
    e.target.parentElement.children[0].value = '';
    e.target.parentElement.children[1].value = '';

    setBooks({
      title: '',
      author: '',
      category: '',
      item_id: '',
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
