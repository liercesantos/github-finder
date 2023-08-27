import {
  GithubActionTypes,
  GithubRepositories,
  GithubTypes,
} from '../@types/github.types';

export interface GithubActions {
  type:
    | GithubActionTypes.API_ENDED
    | GithubActionTypes.API_FAILURE
    | GithubActionTypes.API_REQUEST
    | GithubActionTypes.API_SUCCESS;
  error: string | null;
  data: GithubRepositories;
  payload: GithubTypes;
}

export const repositoriesChange = (response: GithubTypes) => {
  return {type: GithubActionTypes.API_ENDED, payload: {response}};
};
