import React from 'react';
import { useDispatch } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();

  const checkStatus = () => {
    dispatch(checkBookStatus())
  }
}
  <div>
    <button type="button">check status</button>
  </div>
);

export default Category;
