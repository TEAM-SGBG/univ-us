import {
  all, call, fork, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  AUTH_CHECK_FAILURE,
  AUTH_CHECK_REQUEST,
  AUTH_CHECK_SUCCESS,
  CHANGE_MY_CHANNEL_FAILURE,
  CHANGE_MY_CHANNEL_REQUEST,
  CHANGE_MY_CHANNEL_SUCCESS,
  CREATE_MY_CHANNEL_FAILURE,
  CREATE_MY_CHANNEL_REQUEST,
  CREATE_MY_CHANNEL_SUCCESS,
  CREATE_MY_EVENT_FAILURE,
  CREATE_MY_EVENT_REQUEST,
  CREATE_MY_EVENT_SUCCESS,
  DELETE_MY_CHANNEL_FAILURE,
  DELETE_MY_CHANNEL_REQUEST,
  DELETE_MY_CHANNEL_SUCCESS,
  DELETE_MY_EVENT_FAILURE,
  DELETE_MY_EVENT_REQUEST,
  DELETE_MY_EVENT_SUCCESS, LOAD_EVENT_PARTICIPANT_FAILURE,
  LOAD_EVENT_PARTICIPANT_REQUEST,
  LOAD_EVENT_PARTICIPANT_SUCCESS,
  LOAD_MY_CHANNELS_FAILURE,
  LOAD_MY_CHANNELS_REQUEST,
  LOAD_MY_CHANNELS_SUCCESS, LOAD_MY_EVENT_INFO_FAILURE,
  LOAD_MY_EVENT_INFO_REQUEST, LOAD_MY_EVENT_INFO_SUCCESS,
  LOAD_MY_EVENTS_FAILURE,
  LOAD_MY_EVENTS_REQUEST,
  LOAD_MY_EVENTS_SUCCESS,
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

async function loadMyChannelsAPI() {
  const result = await axios.get('http://localhost:3001/');

  return result;
}

function* loadMyChannels() {
  try {
    const result = yield call(loadMyChannelsAPI);
    yield put({
      type: LOAD_MY_CHANNELS_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: LOAD_MY_CHANNELS_FAILURE,
      error,
    });
  }
}

async function loadMyEventsAPI() {
  const result = await axios.get('http://localhost:3001/');

  return result;
}

function* loadMyEvents() {
  try {
    const result = yield call(loadMyEventsAPI);
    yield put({
      type: LOAD_MY_EVENTS_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: LOAD_MY_EVENTS_FAILURE,
      error,
    });
  }
}

async function createMyChannelAPI() {
  const result = await axios.get('http://localhost:3001/');

  return result;
}

function* createMyChannel() {
  try {
    const result = yield call(createMyChannelAPI);
    yield put({
      type: CREATE_MY_CHANNEL_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: CREATE_MY_CHANNEL_FAILURE,
      error,
    });
  }
}

async function createMyEventAPI() {
  const result = await axios.get('http://localhost:3001/');

  return result;
}

function* createMyEvent() {
  try {
    const result = yield call(createMyEventAPI);
    yield put({
      type: CREATE_MY_EVENT_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: CREATE_MY_EVENT_FAILURE,
      error,
    });
  }
}

async function changeMyChannelAPI() {
  const result = await axios.get('http://localhost:3001/');

  return result;
}

function* changeMyChannel() {
  try {
    const result = yield call(changeMyChannelAPI);
    yield put({
      type: CHANGE_MY_CHANNEL_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: CHANGE_MY_CHANNEL_FAILURE,
      error,
    });
  }
}

async function deleteMyChannelAPI() {
  const result = await axios.get('http://localhost:3001/');

  return result;
}

function* deleteMyChannel() {
  try {
    const result = yield call(deleteMyChannelAPI);
    yield put({
      type: DELETE_MY_CHANNEL_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: DELETE_MY_CHANNEL_FAILURE,
      error,
    });
  }
}

async function deleteMyEventAPI() {
  const result = await axios.get('http://localhost:3001/');

  return result;
}

function* deleteMyEvent() {
  try {
    const result = yield call(deleteMyEventAPI);
    yield put({
      type: DELETE_MY_EVENT_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: DELETE_MY_EVENT_FAILURE,
      error,
    });
  }
}

async function loadEventParticipantAPI() {
  const result = await axios.get('http://localhost:3001/');

  return result;
}

function* loadEventParticipant() {
  try {
    const result = yield call(loadEventParticipantAPI);
    yield put({
      type: LOAD_EVENT_PARTICIPANT_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: LOAD_EVENT_PARTICIPANT_FAILURE,
      error,
    });
  }
}

async function loadMyEventInfoAPI() {
  const result = await axios.get('http://localhost:3001/');

  return result;
}

function* loadMyEventInfo() {
  try {
    const result = yield call(loadMyEventInfoAPI);
    yield put({
      type: LOAD_MY_EVENT_INFO_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: LOAD_MY_EVENT_INFO_FAILURE,
      error,
    });
  }
}

function* watchAuthCheck() {
  yield takeLatest(AUTH_CHECK_REQUEST, authCheck);
}

function* watchLoadMyChannels() {
  yield takeLatest(LOAD_MY_CHANNELS_REQUEST, loadMyChannels);
}

function* watchLoadMyEvents() {
  yield takeLatest(LOAD_MY_EVENTS_REQUEST, loadMyEvents);
}

function* watchCreateMyChannel() {
  yield takeLatest(CREATE_MY_CHANNEL_REQUEST, createMyChannel);
}

function* watchCreateMyEvent() {
  yield takeLatest(CREATE_MY_EVENT_REQUEST, createMyEvent);
}

function* watchChangeMyChannel() {
  yield takeLatest(CHANGE_MY_CHANNEL_REQUEST, changeMyChannel);
}

function* watchDeleteMyChannel() {
  yield takeLatest(DELETE_MY_CHANNEL_REQUEST, deleteMyChannel);
}

function* watchDeleteMyEvent() {
  yield takeLatest(DELETE_MY_EVENT_REQUEST, deleteMyEvent);
}

function* watchLoadSubscribeChannels() {
  yield takeLatest(LOAD_SUBSCRIBE_CHANNELS_REQUEST, loadSubscribeChannels);
}

function* watchLoadEventParticipant() {
  yield takeLatest(LOAD_EVENT_PARTICIPANT_REQUEST, loadEventParticipant);
}

function* watchLoadMyEventInfo() {
  yield takeLatest(LOAD_MY_EVENT_INFO_REQUEST, loadMyEventInfo);
}

export default function* userSaga() {
  yield all([
    fork(watchAuthCheck),
    fork(watchLoadSubscribeChannels),
    fork(watchLoadMyChannels),
    fork(watchLoadMyEvents),
    fork(watchCreateMyChannel),
    fork(watchCreateMyEvent),
    fork(watchChangeMyChannel),
    fork(watchDeleteMyChannel),
    fork(watchDeleteMyEvent),
    fork(watchLoadEventParticipant),
    fork(watchLoadMyEventInfo),
  ]);
}
