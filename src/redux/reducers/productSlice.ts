import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // product
    setProductsDispatch(state: any, action: any) {
      state.products = action.payload;
    },
  },
});

export const {setProductsDispatch} = productSlice.actions;

export default productSlice.reducer;
