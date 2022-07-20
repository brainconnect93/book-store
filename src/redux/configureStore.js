import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AddandRemoveReducer from './books/books';
import CategoriesReducer from './categories/categories';

const reducer = combineReducers({
  addAndRemoveBook: AddandRemoveReducer,
  checkStatus: CategoriesReducer,
});

const store = configureStore({ reducer });

export default store;
