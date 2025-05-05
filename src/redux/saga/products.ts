import {call, put, takeLatest} from 'redux-saga/effects';

import {setProductsDispatch} from '../reducers/productSlice';

function* fetchProductsSaga(action: any) {
  const limit: number = 30;
  let endpoint: any = '';

  if (action.payload === 'All') {
    endpoint = `https://dummyjson.com/products?limit=${limit}`;
  } else {
    endpoint = `https://dummyjson.com/products/category/${action.payload}?limit=${limit}`;
  }

  const res = yield call(fetch, endpoint);
  const data = yield res.json();
  yield put(setProductsDispatch(data.products));
}

function* watchFetchProducts() {
  yield takeLatest('product/fetchProducts', fetchProductsSaga);
}

export default watchFetchProducts;
