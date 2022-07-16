import React, { useState } from 'react';



const DisplayBooks = () => {
  const [books, setBooks] = useState([]);

  const handleSubmit = () => setBooks();

  return (
    <div>
      {books.map((books) => (
        <Books
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
