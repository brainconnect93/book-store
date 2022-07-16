import React, { useState } from 'react';
import Book from './Books';
import AddBook from './AddBooks';

const DisplayBooks = () => {
  const [books, setBooks] = useState([]);

  const handleSubmit = () => setBooks();

  return (
    <div>
      {books.map((books) => (
        <Book
          key={books.id}
          title={books.title}
          author={books.author}
        />
      ))}

      <AddBook handleSubmit={handleSubmit} />
    </div>
  );
};

export default DisplayBooks;
