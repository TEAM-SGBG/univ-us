import {
  all, call, delay, fork, put, takeLatest,
} from 'redux-saga/effects';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import channel from '../mock/channel.json';
import {
  DELETE_CHANNEL_FAILURE,
  DELETE_CHANNEL_REQUEST, DELETE_CHANNEL_SUCCESS,
  LOAD_CHANNELS_FAILURE,
  LOAD_CHANNELS_REQUEST,
  LOAD_CHANNELS_SUCCESS,
} from '../reducers/channel';

// eslint-disable-next-line no-unused-vars
function deleteChannelAPI(data) {
  // return axios.post(`api/${data.id}/channels`);
  return channel;
}

// eslint-disable-next-line no-unused-vars
function* deleteChannel(action) {
  try {
    // const result = yield call(deleteChannelAPI, action.data);
    yield delay(50);
    yield put({
      type: DELETE_CHANNEL_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: DELETE_CHANNEL_FAILURE,
      data: error.response.data,
    });
  }
}

// eslint-disable-next-line no-unused-vars
function loadChannelsAPI(data) {
  // return axios.post(`api/${data.id}/channels`);
  return channel;
}

// eslint-disable-next-line no-unused-vars
function* loadChannels(action) {
  try {
    const result = yield call(loadChannelsAPI, action.data);
    yield delay(500);
    yield put({
      type: LOAD_CHANNELS_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: LOAD_CHANNELS_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchLoadChannels() {
  yield takeLatest(LOAD_CHANNELS_REQUEST, loadChannels);
}

function* watchDeleteChannel() {
  yield takeLatest(DELETE_CHANNEL_REQUEST, deleteChannel);
}

export default function* channelSaga() {
  yield all([
    fork(watchLoadChannels),
    fork(watchDeleteChannel),
  ]);
}
