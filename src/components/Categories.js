import React from 'react';
import { useDispatch } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();

  const checkStatus = () => {
    dispatch(checkBookStatus());
  };

  return (
    <div>
    <button 
    type="button"
    onClick={(e) => checkStatus(e)}>
      check status
      </button>
    </div>
  );
};
  
export default Category;
