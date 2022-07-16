import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <ul>
    <div>{title}</div>
    <div>{author}</div>
    <button type="button">Remove</button>
  </ul>

);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
