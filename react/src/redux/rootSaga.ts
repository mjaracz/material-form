import {all} from 'redux-saga/effects';
import {signUpWatcher} from '../form/wrapper/redux/sagas/getSignUp';

export function* rootSaga() {
  yield all([
    signUpWatcher()
  ])
}