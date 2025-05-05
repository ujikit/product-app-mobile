import {call, put, takeLatest} from 'redux-saga/effects';

import {setProductsDispatch} from '../reducers/productSlice';

function* fetchProductsSaga() {
  const res = yield call(fetch, 'https://dummyjson.com/products?limit=10');
  const data = yield res.json();
  yield put(setProductsDispatch(data.products));
}

function* watchFetchProducts() {
  yield takeLatest('product/fetchProducts', fetchProductsSaga);
}

export default watchFetchProducts;
