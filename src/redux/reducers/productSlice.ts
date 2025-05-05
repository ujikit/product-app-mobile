import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // product
    setProductsDispatch(state, action) {
      state.products = action.payload;
    },
  },
});

export const {setProductsDispatch} = productSlice.actions;

export default productSlice.reducer;
