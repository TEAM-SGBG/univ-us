import {
  all, call, fork, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  AUTH_CHECK_FAILURE,
  AUTH_CHECK_REQUEST,
  AUTH_CHECK_SUCCESS,
} from '../reducers/user';

async function authCheckAPI() {
  const response = await axios.get('http://localhost:3001/auth/', { withCredentials: true });
  return !!response.data;
}

function* authCheck() {
  try {
    const result = yield call(authCheckAPI);
    yield put({
      type: AUTH_CHECK_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: AUTH_CHECK_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchAuthCheck() {
  yield takeLatest(AUTH_CHECK_REQUEST, authCheck);
}

export default function* userSaga() {
  yield all([
    fork(watchAuthCheck),
  ]);
}
