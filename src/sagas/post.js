import {
  all, call, fork, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_CATEGORY_EVENTS_FAILURE,
  LOAD_CATEGORY_EVENTS_REQUEST,
  LOAD_CATEGORY_EVENTS_SUCCESS,
} from '../reducers/post';

function loadCategoryEventsAPI(categoryType) {
  return axios.get(`https://univ-us-server.herokuapp.com/api/events/category_event?category=${categoryType}`);
}

function* loadCategoryEvents(action) {
  try {
    const result = yield call(loadCategoryEventsAPI, action.categoryType);

    yield put({
      type: LOAD_CATEGORY_EVENTS_SUCCESS,
      data: result.data.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_CATEGORY_EVENTS_FAILURE,
      error: error.message,
    });
  }
}

function* watchLoadCategoryEvents() {
  yield takeLatest(LOAD_CATEGORY_EVENTS_REQUEST, loadCategoryEvents);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadCategoryEvents),
  ]);
}
