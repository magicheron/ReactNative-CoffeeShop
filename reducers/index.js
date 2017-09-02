import { combineReducers } from 'redux';
import * as CategoryProductsReducer from './categoryProducts'

export default combineReducers(Object.assign(
  CategoryProductsReducer,
));