import {
  all, call, fork, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
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
  LOAD_MY_EVENTS_SUCCESS, URL_DUPLICATE_CHECK_FAILURE, URL_DUPLICATE_CHECK_REQUEST, URL_DUPLICATE_CHECK_SUCCESS,
} from '../reducers/hostcenter';

async function loadMyChannelsAPI() {
  const result = await axios.get('http://localhost:3001/api/hostCenter/mychannel');

  return result.data;
}

function* loadMyChannels() {
  try {
    const result = yield call(loadMyChannelsAPI);
    yield put({
      type: LOAD_MY_CHANNELS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_MY_CHANNELS_FAILURE,
      error,
    });
  }
}

async function loadMyEventsAPI(data) {
  const result = await axios.get(`http://localhost:3001/api/hostCenter/${data.channel_id}/events`);

  return result.data;
}

function* loadMyEvents(action) {
  try {
    const result = yield call(loadMyEventsAPI, action.data);
    yield put({
      type: LOAD_MY_EVENTS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_MY_EVENTS_FAILURE,
      error,
    });
  }
}

async function createMyChannelAPI(data) {
  /*
  {
  channel_id: asd
  channel_name: asd
  }
   */
  const result = await axios.post('http://localhost:3001/api/channel/create', data);

  return result;
}

function* createMyChannel(action) {
  try {
    console.log('test: ', action.data);
    const result = yield call(createMyChannelAPI, action.data);
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

async function createMyEventAPI(data) {
  const result = await axios.post('http://localhost:3001/api/hostCenter/create_event', data);

  return result.data;
}

function* createMyEvent(action) {
  try {
    const result = yield call(createMyEventAPI, action.data);
    yield put({
      type: CREATE_MY_EVENT_SUCCESS,
      data: result.success,
    });
  } catch (error) {
    yield put({
      type: CREATE_MY_EVENT_FAILURE,
      error,
    });
  }
}

async function changeMyChannelAPI(data) {
  const result = await axios.patch(`http://localhost:3001/api/channel/${data.channelID}/${data.newChannelName}`);

  return result.data.success;
}

function* changeMyChannel(action) {
  try {
    const result = yield call(changeMyChannelAPI, action.data);
    if (result) {
      yield put({
        type: CHANGE_MY_CHANNEL_SUCCESS,
        data: { success: result, channelName: action.data.newChannelName, channelID: action.data.channelID },
      });
    } else {
      yield put({
        type: CHANGE_MY_CHANNEL_FAILURE,
        data: { success: result, channelName: action.data.channelName },
      });
    }
  } catch (error) {
    yield put({
      type: CHANGE_MY_CHANNEL_FAILURE,
      error,
    });
  }
}

async function deleteMyChannelAPI(data) {
  const result = await axios.delete(`http://localhost:3001/api/channel/${data.channel_id}`);

  return result.data;
}

function* deleteMyChannel(action) {
  try {
    const result = yield call(deleteMyChannelAPI, action.data);

    if (result.success) {
      yield put({
        type: DELETE_MY_CHANNEL_SUCCESS,
        data: {
          success: result.success,
          channel_id: action.data.channel_id,
        },
      });
    } else {
      yield put({
        type: DELETE_MY_CHANNEL_FAILURE,
        error: result.message,
      });
    }
  } catch (error) {
    yield put({
      type: DELETE_MY_CHANNEL_FAILURE,
      error,
    });
  }
}

async function deleteMyEventAPI(data) {
  const result = await axios.delete(`http://localhost:3001/api/hostCenter/delete/${data.event_id}`);

  return result.data;
}

function* deleteMyEvent(action) {
  try {
    const result = yield call(deleteMyEventAPI, action.data);

    if (result.success) {
      yield put({
        type: DELETE_MY_EVENT_SUCCESS,
        data: {
          success: result.success,
          event_id: action.data.event_id,
        },
      });
    } else {
      yield put({
        type: DELETE_MY_EVENT_FAILURE,
        error: result.message,
      });
    }
  } catch (error) {
    yield put({
      type: DELETE_MY_EVENT_FAILURE,
      error,
    });
  }
}

async function loadEventParticipantAPI(data) {
  console.log('here', data);
  const result = await axios.post('http://localhost:3001/api/hostCenter/get_participants', {
    event_id: data.event_id,
  });

  return result.data;
}

function* loadEventParticipant(action) {
  try {
    console.log(action);
    const result = yield call(loadEventParticipantAPI, action.data);
    yield put({
      type: LOAD_EVENT_PARTICIPANT_SUCCESS,
      data: result.data,
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

async function urlDuplicateCheckAPI(data) {
  const result = await axios.post('http://localhost:3001/api/channel/duplicate', data);
  console.log(result.data);
  return result.data.data;
}

function* urlDuplicateCheck(action) {
  try {
    const result = yield call(urlDuplicateCheckAPI, action.data);
    yield put({
      type: URL_DUPLICATE_CHECK_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: URL_DUPLICATE_CHECK_FAILURE,
      error,
    });
  }
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

function* watchLoadEventParticipant() {
  yield takeLatest(LOAD_EVENT_PARTICIPANT_REQUEST, loadEventParticipant);
}

function* watchLoadMyEventInfo() {
  yield takeLatest(LOAD_MY_EVENT_INFO_REQUEST, loadMyEventInfo);
}

function* watchUrlDuplicateCheck() {
  yield takeLatest(URL_DUPLICATE_CHECK_REQUEST, urlDuplicateCheck);
}

export default function* hostcenterSaga() {
  yield all([
    fork(watchLoadMyChannels),
    fork(watchLoadMyEvents),
    fork(watchCreateMyChannel),
    fork(watchCreateMyEvent),
    fork(watchChangeMyChannel),
    fork(watchDeleteMyChannel),
    fork(watchDeleteMyEvent),
    fork(watchLoadEventParticipant),
    fork(watchLoadMyEventInfo),
    fork(watchUrlDuplicateCheck),
  ]);
}
