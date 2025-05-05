import {call, put, takeEvery} from 'redux-saga/effects';

import {setProductsDispatch} from '../cartSlice';

function* fetchProductsSaga() {
  const res = yield call(fetch, 'https://dummyjson.com/products?limit=10');
  const data = yield res.json();
  yield put(setProductsDispatch(data.products));
}

function* watchFetchProducts() {
  yield takeEvery('cart/fetchProducts', fetchProductsSaga);
}

export default watchFetchProducts;
