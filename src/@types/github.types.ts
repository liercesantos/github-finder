import GitList from "../components/lists/GitList";

export enum GithubActionTypes {
  API_REQUEST = 'API_REQUEST',
  API_SUCCESS = 'API_SUCCESS',
  API_FAILURE = 'API_FAILURE',
  API_ENDED = 'API_ENDED',
}

export type GithubTypes = {
  page: number;
  loading: boolean;
  moreLoading: boolean;
  error: string | null;
  moreError: string | null;
  isListEnd: boolean;
  data: [];
};

export type GithubRepositories = {
  repositories: [];
};

export const GithubState: GithubTypes = {
  page: 1,
  loading: true,
  moreLoading: false,
  error: null,
  moreError: null,
  isListEnd: false,
  data: [],
};

export type GitListProps = {
  repositories: GithubTypes;
};
