import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AddandRemoveReducer from './books/thunkFunction';
import CategoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: AddandRemoveReducer,
  categories: CategoriesReducer,
});

const store = configureStore({ reducer });

export default store;
