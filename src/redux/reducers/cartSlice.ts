import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartReducer: [],
  quantityReducer: {},
  selectedProductOnCartReducer: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // product
    selectProductOnCartDispatch(state: any, action: any) {
      const id = action.payload;
      state.selectedProductOnCartReducer[id] =
        !state.selectedProductOnCartReducer[id];
    },
    // cart
    setCartDispatch(state: any, action: any) {
      state.cartReducer = [action.payload, ...state.cartReducer];
    },
    deleteSelectionProductOnCartDispatch(state: any, action: any) {
      state.cartReducer = state.cartReducer.filter(
        (item: any) => item.id !== action.payload,
      );
    },
    addQuantityDispatch(state: any, action: any) {
      const id = action.payload;
      state.quantityReducer[id] = (state.quantityReducer[id] || 0) + 1;
    },
    removeQuantityDispatch(state: any, action: any) {
      const id = action.payload;
      if (state.quantityReducer[id] > 0) {
        state.quantityReducer[id] -= 1;
      }
    },
  },
});

export const {
  setCartDispatch,
  addQuantityDispatch,
  removeQuantityDispatch,
  selectProductOnCartDispatch,
  deleteSelectionProductOnCartDispatch,
} = cartSlice.actions;

export default cartSlice.reducer;
