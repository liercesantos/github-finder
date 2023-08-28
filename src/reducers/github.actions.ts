import {GithubActionTypes, GithubTypes} from '../@types/github.types';

export interface GithubActions {
  type:
    | GithubActionTypes.API_ENDED
    | GithubActionTypes.API_FAILURE
    | GithubActionTypes.API_REQUEST
    | GithubActionTypes.API_SUCCESS
    | GithubActionTypes.ON_SEARCH
    | GithubActionTypes.ON_SCROLLING
    | GithubActionTypes.RESET;
  error: string | null;
  payload: GithubTypes;
}

export const repositoriesChange = (response: any) => {
  //console.log('REPOSITORIES_CHANGE', response.data?.length);
  return {type: GithubActionTypes.API_SUCCESS, payload: {data: response.data}};
};
