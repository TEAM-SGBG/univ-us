import {
  all, call, fork, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  AUTH_CHECK_FAILURE,
  AUTH_CHECK_REQUEST,
  AUTH_CHECK_SUCCESS,
  LOAD_SUBSCRIBE_CHANNELS_FAILURE,
  LOAD_SUBSCRIBE_CHANNELS_REQUEST,
  LOAD_SUBSCRIBE_CHANNELS_SUCCESS,
} from '../reducers/user';

async function authCheckAPI() {
  const user = await axios.get('http://localhost:3001/auth/');
  return user.data;
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

async function loadSubscribeChannelsAPI() {
  const subscribeChannels = await axios.get('http://localhost:3001/api/channel/subscribe');

  return subscribeChannels.data.data;
}

function* loadSubscribeChannels() {
  try {
    const result = yield call(loadSubscribeChannelsAPI);
    yield put({
      type: LOAD_SUBSCRIBE_CHANNELS_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: LOAD_SUBSCRIBE_CHANNELS_FAILURE,
      error,
    });
  }
}

function* watchAuthCheck() {
  yield takeLatest(AUTH_CHECK_REQUEST, authCheck);
}

function* watchLoadSubscribeChannels() {
  yield takeLatest(LOAD_SUBSCRIBE_CHANNELS_REQUEST, loadSubscribeChannels);
}

export default function* userSaga() {
  yield all([
    fork(watchAuthCheck),
    fork(watchLoadSubscribeChannels),
  ]);
}
