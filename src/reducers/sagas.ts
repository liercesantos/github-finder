import {all} from 'redux-saga/effects';
import githubSaga from './github.saga';

export default function* rootSaga() {
  yield all([githubSaga()]);
}
