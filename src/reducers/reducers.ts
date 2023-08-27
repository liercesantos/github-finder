import {combineReducers} from 'redux';
import GithubReducer from './github.reducer';

export default combineReducers({
  repositories: GithubReducer,
});
