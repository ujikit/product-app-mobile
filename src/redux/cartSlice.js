import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: {},
  selectedProductOnCartReducer: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProductsDispatch(state, action) {
      state.products = action.payload;
    },
    selectProductOnCartDispatch(state, action) {
      const id = action.payload;
      state.selectedProductOnCartReducer[id] =
        !state.selectedProductOnCartReducer[id];
    },
    deleteSelectionProductOnCartDispatch(state, action) {
      state.products = state.products.filter(
        item => item.id !== action.payload,
      );
    },
    addQuantityDispatch(state, action) {
      const id = action.payload;
      state.cart[id] = (state.cart[id] || 0) + 1;
    },
    removeQuantityDispatch(state, action) {
      const id = action.payload;
      if (state.cart[id] > 0) {
        state.cart[id] -= 1;
      }
    },
  },
});

export const {
  setProductsDispatch,
  addQuantityDispatch,
  removeQuantityDispatch,
  selectProductOnCartDispatch,
  deleteSelectionProductOnCartDispatch,
} = cartSlice.actions;

export default cartSlice.reducer;
