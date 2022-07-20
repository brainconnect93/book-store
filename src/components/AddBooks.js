import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ handleSubmit, onChange }) => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input 
      name="title" 
      type="text" 
      placeholder="Book title" 
      onChange={(e) => onChange(e)}
      />

      <input 
      name="author" 
      type="text" 
      placeholder="Category" 
      onChange={(e) => onChange(e)}
      />

      <button
      onClick={(e) =>  handleSubmit(e)}
      type="submit">ADD BOOK</button>
    </form>
  </div>

);

AddBook.PropTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default AddBook;
