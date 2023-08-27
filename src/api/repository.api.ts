import {get} from './config';

export const getRepositories = async (data: string | undefined) => {
  const criteria = data ? '?q=$data&per_page=10' : '?per_page=10';
  return await get(`search/repositories${criteria}`);
};
