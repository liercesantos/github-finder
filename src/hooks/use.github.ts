import useRedux from './use.redux';
import {shallowEqual} from 'react-redux';
import {useState} from 'react';
import {getRepositories} from '../api/repository.api';

const useGithub = () => {
  const {appSelector, dispatch} = useRedux();
  const {repositories} = appSelector(
    state => ({
      repositories: state.repositories,
    }),
    shallowEqual,
  );
  const [page, setPage] = useState<number>(1);
  const fetchMoreData = () => {
    if (!repositories.isListEnd && !repositories.moreLoading) {
      setPage(page + 1);
    }
  };
  const apiRequest = () => {
    const response = getRepositories(undefined);
    dispatch({payload: {response}, type: 'API_REQUEST'});
  };
  return {repositories, fetchMoreData, apiRequest};
};

export default useGithub;
