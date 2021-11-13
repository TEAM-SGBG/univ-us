import { all, fork } from 'redux-saga/effects';
import channelSaga from './channel';

export default function* rootSaga() {
  yield all([
    fork(channelSaga),
  ]);
}
