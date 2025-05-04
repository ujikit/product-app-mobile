import {all} from 'redux-saga/effects';
import watchFetchProducts from './saga';

export default function* rootSaga() {
  yield all([watchFetchProducts()]);
}
