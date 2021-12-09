import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import channelSaga from './channel';
import userSaga from './user';
import postSaga from './post';
import hostcenterSaga from './hostcenter';

axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(channelSaga),
    fork(userSaga),
    fork(postSaga),
    fork(hostcenterSaga),
  ]);
}
