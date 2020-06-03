import {call, put, cancelled, takeLatest} from 'redux-saga/effects';
import {getSignUp} from './apiCall';

function* getSignUpSaga() {
  const abortController = new AbortController();
  try {
    const signUpData = yield call(getSignUp, abortController.signal);
    yield put({type: 'FETCH_SIGN_UP', payload: signUpData.signUp})
  }
  catch(e) {
    if(yield(cancelled())) abortController.abort();
    yield put({type: 'FETCH_ERROR', payload: e})
  }
}

export function* signUpWatcher() {
  yield takeLatest('GET_SIGN_UP', getSignUpSaga)
}