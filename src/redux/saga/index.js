import {all} from 'redux-saga/effects';

import watchCart from './cart';
import watchProducts from './products';

export default function* rootSaga() {
  yield all([watchCart(), watchProducts()]);
}
