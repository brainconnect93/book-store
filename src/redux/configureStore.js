import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import AddandRemoveReducer from './books/books';
import CategoriesReducer from './categories/categories';

const reducer = combineReducers({
  addAndRemoveBook: AddandRemoveReducer,
  checkStatus: CategoriesReducer,
});

const store = configureStore({ reducer });

export default store;
