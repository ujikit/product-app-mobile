import createSagaMiddleware from 'redux-saga';
import {configureStore, Tuple} from '@reduxjs/toolkit';

import rootSaga from './rootSaga';
import cartReducer from './cartSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: () => new Tuple(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
