import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {configureStore, Tuple} from '@reduxjs/toolkit';

import rootSaga from './saga/index';
import cartReducer from './cartSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: () => new Tuple(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export default store;
