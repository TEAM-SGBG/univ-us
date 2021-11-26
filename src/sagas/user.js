import {
  all, call, fork, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  AUTH_CHECK_FAILURE,
  AUTH_CHECK_REQUEST,
  AUTH_CHECK_SUCCESS,
  GET_SUBSCRIBE_CHANNELS_FAILURE,
  GET_SUBSCRIBE_CHANNELS_REQUEST,
  GET_SUBSCRIBE_CHANNELS_SUCCESS,
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

async function getSubscribeChannelsAPI() {
  const response = await axios.get('http://localhost:3001/api/channel/subscribe', { withCredentials: true });

  return response.data.data;
}

function* getSubscribeChannels() {
  try {
    const result = yield call(getSubscribeChannelsAPI);
    yield put({
      type: GET_SUBSCRIBE_CHANNELS_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: GET_SUBSCRIBE_CHANNELS_FAILURE,
      data: error,
    });
  }
}
function* watchAuthCheck() {
  yield takeLatest(AUTH_CHECK_REQUEST, authCheck);
}

function* watchGetSubscribeChannels() {
  yield takeLatest(GET_SUBSCRIBE_CHANNELS_REQUEST, getSubscribeChannels);
}

export default function* userSaga() {
  yield all([
    fork(watchAuthCheck),
    fork(watchGetSubscribeChannels),
  ]);
}
