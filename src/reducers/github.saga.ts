import {all, fork, put, takeEvery} from 'redux-saga/effects';
import {repositoriesChange} from './github.actions';
import {GithubActionTypes} from '../@types/github.types';

function* dataChange({payload}: any) {
  try {
    //console.log('DATA_CHANGE', payload);
    yield put(repositoriesChange(payload));
  } catch (e) {
    console.log(e);
  }
}

export function* watchRepositories() {
  yield takeEvery(GithubActionTypes.API_REQUEST, dataChange);
}

function* githubSaga() {
  yield all([fork(watchRepositories)]);
}

export default githubSaga;
