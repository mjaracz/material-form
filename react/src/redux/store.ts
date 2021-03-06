import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './rootReducer';
import {rootSaga} from "./rootSaga";

const applySagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(applySagaMiddleware)
)

applySagaMiddleware.run(rootSaga);
