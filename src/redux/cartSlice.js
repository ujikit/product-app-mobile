import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cartReducer: [],
  quantityReducer: {},
  selectedProductOnCartReducer: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // product
    setProductsDispatch(state, action) {
      state.products = action.payload;
    },
    selectProductOnCartDispatch(state, action) {
      const id = action.payload;
      state.selectedProductOnCartReducer[id] =
        !state.selectedProductOnCartReducer[id];
    },
    // cart
    setCartDispatch(state, action) {
      state.cartReducer = [action.payload, ...state.cartReducer];
    },
    deleteSelectionProductOnCartDispatch(state, action) {
      state.cartReducer = state.cartReducer.filter(
        item => item.id !== action.payload,
      );
    },
    addQuantityDispatch(state, action) {
      const id = action.payload;
      state.quantityReducer[id] = (state.quantityReducer[id] || 0) + 1;
    },
    removeQuantityDispatch(state, action) {
      const id = action.payload;
      if (state.quantityReducer[id] > 0) {
        state.quantityReducer[id] -= 1;
      }
    },
  },
});

export const {
  setCartDispatch,
  setProductsDispatch,
  addQuantityDispatch,
  removeQuantityDispatch,
  selectProductOnCartDispatch,
  deleteSelectionProductOnCartDispatch,
} = cartSlice.actions;

export default cartSlice.reducer;
