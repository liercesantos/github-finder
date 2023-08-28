export enum GithubActionTypes {
  API_REQUEST = 'API_REQUEST',
  API_SUCCESS = 'API_SUCCESS',
  API_FAILURE = 'API_FAILURE',
  API_ENDED = 'API_ENDED',
  ON_SEARCH = 'ON_SEARCH',
  ON_SCROLLING = 'ON_SCROLLING',
  RESET = 'RESET',
}

export type GithubTypes = {
  page: number;
  search: string;
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
  search: '',
  loading: false,
  moreLoading: false,
  error: null,
  moreError: null,
  isListEnd: false,
  data: [],
};

export type GitListItemTypes = {
  name: string;
  rate: number;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};

export type GitListItemProps = {
  item: GitListItemTypes;
};
