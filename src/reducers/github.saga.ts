import {all, fork, put, takeEvery} from 'redux-saga/effects';
import {repositoriesChange} from './github.actions';
import {GithubActionTypes} from '../@types/github.types';

function* dataChange({payload}: any) {
  try {
    yield put(repositoriesChange(payload));
  } catch (e) {
    console.log(e);
  }
}

export function* watchRepositories() {
  yield takeEvery(GithubActionTypes.API_ENDED, dataChange);
  yield takeEvery(GithubActionTypes.API_FAILURE, dataChange);
  yield takeEvery(GithubActionTypes.API_REQUEST, dataChange);
  yield takeEvery(GithubActionTypes.API_SUCCESS, dataChange);
}

function* githubSaga() {
  yield all([fork(watchRepositories)]);
}

export default githubSaga;
