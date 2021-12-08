import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import channelSaga from './channel';
import userSaga from './user';
import postSaga from './post';
import hostcenterSaga from './hostcenter';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://univ-us-server.herokuapp.com';

export default function* rootSaga() {
  yield all([
    fork(channelSaga),
    fork(userSaga),
    fork(postSaga),
    fork(hostcenterSaga),
  ]);
}
