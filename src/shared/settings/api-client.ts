import ky, { Options } from 'ky';
import { User } from '~/domain/entities';
import { getSession } from 'next-auth/react';

const addBearerToken = async (request: Request) => {
  const clientSession = await getSession();
  const accessToken = (clientSession?.user as User)?.access_token;

  if (accessToken) {
    request.headers.set('Authorization', `Bearer ${accessToken}`);
  }
};

const kyDefaultOptions: Options = {
  timeout: 40 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  },
  hooks: {
    beforeRequest: [addBearerToken]
  }
};

const apiClient = ky
  .create({
    prefixUrl: 'http://localhost:8000'
  })
  .extend(kyDefaultOptions);

export default apiClient;
