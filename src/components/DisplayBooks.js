import React, { useState } from 'react';
import Book from './Books';
import AddBook from './AddBooks';
import { useDispatch } from 'react-redux';
import { addedBook } from '../redux/books/books';
import { v4 as uuidv4 } from 'uuid';

const DisplayBooks = () => {
  const dispatch = useDispatch();

  const [books, setBooks] = useState({
    id: '',
    title: '',
    author: '',
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
        <bookLists />
  
        <AddBook 
        handleSubmit={handleSubmit} 
        onChange={onChange}/>
      </div>
    );
};

export default DisplayBooks;
