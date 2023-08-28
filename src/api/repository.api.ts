import {get} from './config';

export const fetchAll = async () => {
  return await get('repositories');
};

export const fetch = async (data: string, page: number) => {
  const criteria = `?q=${data}&per_page=10&page=${page}`;
  try {
    return await get(`search/repositories${criteria}`);
  } catch (e) {
    return Promise.reject('REJECTED');
  }
};
