import { all, fork } from 'redux-saga/effects';
import channelSaga from './channel';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    fork(channelSaga),
    fork(userSaga),
  ]);
}
