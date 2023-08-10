import ky, { Options } from 'ky';

const kyDefaultOptions: Options = {
  timeout: 40 * 1000,
  headers: {
    Accept: 'application/json',
    Origin: process.env.BACKEND_URL,
    'X-Requested-With': 'XMLHttpRequest'
  },
  credentials: 'include'
};

const apiClient = ky
  .create({
    prefixUrl: process.env.BACKEND_URL
  })
  .extend(kyDefaultOptions);

export default apiClient;
