import {
  GithubActionTypes,
  GithubState,
  GithubTypes,
} from '../@types/github.types';
import {GithubActions} from './github.actions';

const GithubReducer = (
  state: GithubTypes = GithubState,
  action: GithubActions,
): GithubTypes => {
  switch (action.type) {
    case GithubActionTypes.API_ENDED: {
      return {
        ...state,
        isListEnd: true,
        loading: false,
        moreLoading: false,
      };
    }
    case GithubActionTypes.API_FAILURE: {
      return {
        ...state,
        error: action.error,
        loading: false,
        moreLoading: false,
      };
    }
    case GithubActionTypes.API_REQUEST: {
      if (action.payload.page === 1) {
        return {...state, loading: true};
      }
      return {...state, moreLoading: true};
    }
    case GithubActionTypes.API_SUCCESS: {
      //console.log(`${GithubActionTypes.API_SUCCESS} :: action`, action);
      //console.log(`${GithubActionTypes.API_SUCCESS} :: state`, state);
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        error: '',
        loading: false,
        moreLoading: false,
      };
    }
    case GithubActionTypes.ON_SEARCH: {
      return {
        ...GithubState,
        search: action.payload.search,
        loading: true,
      };
    }
    case GithubActionTypes.ON_SCROLLING: {
      return {
        ...state,
        page: action.payload.page,
        moreLoading: true,
      };
    }
    case GithubActionTypes.RESET: {
      return GithubState;
    }
    default: {
      return {...state};
    }
  }
};

export default GithubReducer;
