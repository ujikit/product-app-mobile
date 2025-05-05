import {put, takeEvery} from 'redux-saga/effects';

import {setCartDispatch} from '../reducers/cartSlice';

function* addToCartSaga(action) {
  yield put(setCartDispatch(action.payload));
}

function* watchFetchAddToCart() {
  yield takeEvery('cart/addToCart', addToCartSaga);
}

export default watchFetchAddToCart;
