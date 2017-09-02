import * as types from './types'
import categoriesData from '../core/data';

export function fetchCategoryProducts() {
  return (dispatch, getState) => {
    dispatch(setCategoryProducts({categories: categoriesData}));
  }
}

export function setCategoryProducts({ categories }) {
  return {
    type: types.SET_CATEGORY_PRODUCTS,
    categories,
  }
}

export function incrementQuantityCategoryProduct({ product }) {
  return {
    type: types.INCREMENT_QUANTITY_PRODUCT,
    product,
  }
}

export function decrementQuantityCategoryProduct({ product }) {
  return {
    type: types.DECREMENT_QUANTITY_PRODUCT,
    product,
  }
}

export function sendProducts(categories) {
  return (dispatch, getState) => {
    dispatch(resetProducts());
  }
}

export function resetProducts() {
  return {
    type: types.RESET_PRODUCTS,
  }
}