import axios from 'axios';

const updateAxiosConfig = async (
  request: {
    interceptors: {
      request: {use: (arg0: (config: any) => any) => void};
      response: {
        use: (
          arg0: (response: any) => any,
          arg1: (error: {response: any}) => Promise<never>,
        ) => void;
      };
    };
  },
  headers: {contentType?: any},
) => {
  const {contentType} = headers;

  request.interceptors.request.use(function (config: any) {
    config.baseURL = 'https://api.github.com/';
    config.headers = {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': contentType || 'application/json',
      'Cache-Control': 'no-store',
    };

    return config;
  });

  request.interceptors.response.use(
    function (response: any) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      // console.log('INTERCEPT:', response);
      return response;
    },
    function (error: {response: any}) {
      return Promise.reject(error?.response);
    },
  );
};

const post = async (url: string, data: any, headers = {}) => {
  const api = axios.create();
  await updateAxiosConfig(api, headers);
  return await api.post(url, data);
};

const get = async (url: string, headers = {}) => {
  const api = axios.create();
  await updateAxiosConfig(api, headers);
  return await api.get(url);
};

export {post, get};
