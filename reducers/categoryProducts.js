import createReducer from '../core/createReducer'
import * as types from '../actions/types'

export const categoryProducts = createReducer({}, {
  
  [types.SET_CATEGORY_PRODUCTS](state, action) {
    let newState = {  }
    Object.assign(newState, state, { categories: action.categories})
    return newState;
  },

  [types.INCREMENT_QUANTITY_PRODUCT](state, action) {

    var getIndex = (products, id) => {
      for (let prodKey in products) {
        if (products[prodKey].id == id) {
          return prodKey;
        }
      }
      return -1;
    };
    

    var getCategories = (categories, id) => {
      return categories.map((category, index) => {
        var prodIndex = getIndex(category.products, id);
        if(prodIndex != -1) {
          return {
            ...category,
            products: category.products.map((product, pindex) => {
              if(product.id == id) {
                return {
                  ...product,
                  quantity: product.quantity + 1
                }
              }
              return product;
            })
          }
        }
        return category;
      });
    }

    let newState = {
      ...state,
      categories: getCategories(state.categories, action.product.id)
    };

    return newState;
  },

  [types.DECREMENT_QUANTITY_PRODUCT](state, action) {
    
        var getIndex = (products, id) => {
          for (let prodKey in products) {
            if (products[prodKey].id == id) {
              return prodKey;
            }
          }
          return -1;
        };
        
    
        var getCategories = (categories, id) => {
          return categories.map((category, index) => {
            var prodIndex = getIndex(category.products, id);
            if(prodIndex != -1) {
              return {
                ...category,
                products: category.products.map((product, pindex) => {
                  if(product.id == id) {
                    return {
                      ...product,
                      quantity: Math.max(product.quantity - 1, 0)
                    }
                  }
                  return product;
                })
              }
            }
            return category;
          });
        }
    
        let newState = {
          ...state,
          categories: getCategories(state.categories, action.product.id)
        };
    
        return newState;
      },  

      [types.RESET_PRODUCTS](state, action) {
    
        var getCategories = (categories) => {
          return categories.map((category, index) => {
              return {
                ...category,
                products: category.products.map((product, pindex) => {
                    return {
                      ...product,
                      quantity: 0
                    }
                })
              }
          });
        }
    
        let newState = {
          ...state,
          categories: getCategories(state.categories)
        };
    
        return newState;
      },  

});