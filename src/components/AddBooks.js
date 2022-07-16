import React from 'react';

const AddBook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input name="title" type="text" placeholder="Book Title" />
      <input name="author" type="text" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>

);

export default AddBook;