import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ handleSubmit, onChange }) => (
  <div className="form-container">
    <h1 className="add-book">ADD NEW BOOK</h1>
    <form>
      <input
        className="title-input"
        name="title"
        type="text"
        placeholder="Book title"
        onChange={(e) => onChange(e)}
      />

      <input
        className="author-input"
        name="author"
        type="text"
        placeholder="author"
        onChange={(e) => onChange(e)}
      />

      <select
        className="category-input"
        name="category"
        type="text"
        onChange={(e) => onChange(e)}
      >
        <option value="Choose">Choose Category</option>
        <option value="Fiction">Fiction</option>
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
        <option value="Romance">Romance</option>
        <option value="Kids">Kids</option>
      </select>

      <button
        className="submit-btn"
        onClick={(e) => handleSubmit(e)}
        type="submit"
      >
        ADD BOOK
      </button>
    </form>
  </div>

);

AddBook.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddBook;
