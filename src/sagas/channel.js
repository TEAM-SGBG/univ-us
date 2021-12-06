import {
  all, call, delay, fork, put, takeLatest,
} from 'redux-saga/effects';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import channel from '../mock/HostCenterMock/channel.json';
import {
  LOAD_CHANNELS_FAILURE,
  LOAD_CHANNELS_REQUEST,
  LOAD_CHANNELS_SUCCESS,
} from '../reducers/channel';

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

export default function* channelSaga() {
  yield all([
    fork(watchLoadChannels),
  ]);
}
