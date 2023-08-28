import useRedux from './use.redux';
import {shallowEqual} from 'react-redux';
import {fetch} from '../api/repository.api';

const useGithub = () => {
  const {appSelector, dispatch} = useRedux();
  const {repositories} = appSelector(
    state => ({
      repositories: state.repositories,
    }),
    shallowEqual,
  );
  const {page, search} = repositories;
  //const [page, setPage] = useState<number>(1);
  //const [search, setSearch] = useState<string>('');
  const onSearch = (value: string) => {
    console.log('ON_SEARCH', value.length);
    if (value.length > 0) {
      dispatch({type: 'ON_SEARCH', payload: {search: value}});
      fetchRepositories(value);
    }
  };
  const fetchMoreData = () => {
    if (!repositories.isListEnd && !repositories.moreLoading) {
      console.log('FETCH_MORE_DATA', page, search.length);
      const next = page + 1;
      dispatch({type: 'ON_SCROLLING', payload: {page: next}});
      fetchRepositories(search, next);
    }
  };
  const fetchRepositories = (
    value: string | false = false,
    paging: number | false = false,
  ) => {
    fetch(value || search, paging || page).then(response => {
      const data = Object.entries(response.data.items).reduce(
        (repository, [_, row]) => {
          // @ts-ignore
          repository.push({
            // @ts-ignore
            name: row?.name,
            // @ts-ignore
            rate: row?.stargazers_count,
            // @ts-ignore
            html_url: row?.html_url,
            owner: {
              // @ts-ignore
              login: row?.owner.login,
              // @ts-ignore
              avatar_url: row?.owner.avatar_url,
            },
          });

          return repository;
        },
        [],
      );
      dispatch({
        payload: {data: data},
        type: 'API_REQUEST',
      });
    });
  };

  return {
    repositories,
    page,
    search,
    onSearch,
    fetchMoreData,
    fetchRepositories,
  } as const;
};

export default useGithub;
