import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();

  const checkStatus = () => {
    dispatch(checkBookStatus());
  };
  const status = useSelector((state) => state.categories);

  return (
    <div>
      <button
        type="button"
        onClick={(e) => checkStatus(e)}
      >
        check status
      </button>
      <div>{status}</div>
    </div>
  );
};

export default Category;
