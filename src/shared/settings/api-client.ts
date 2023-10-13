import { toast } from 'react-hot-toast';
import { User } from '~/domain/entities';
import { getSession, signOut } from 'next-auth/react';
import ky, { HTTPError, NormalizedOptions, Options } from 'ky';

async function normalizeErrorMessage(error: HTTPError) {
  if (typeof window !== 'undefined') {
    const errorJson = await error.response.json();

    if (error.response.status === 401) {
      toast.error("Vous n'êtes pas autorisé à accéder à cette page");
    } else {
      toast.error(errorJson.error.kind.message || errorJson.error.messages[0] || error.message);
    }
  }

  return error;
}

const addBearerToken = async (request: Request) => {
  const clientSession = await getSession();
  const accessToken = (clientSession?.user as User)?.access_token;

  if (accessToken) {
    request.headers.set('Authorization', `Bearer ${accessToken}`);
  }
};

const signOutIfUnauthorize = async (_request: Request, _options: NormalizedOptions, response: Response) => {
  if (typeof window !== 'undefined') {
    if (!response) {
      toast.error('Soucis de connexion');
    }

    if (response.status === 401) {
      await signOut();

      const { pathname } = new URL(response.url);
      if (pathname !== '/auth/signin') window.location.assign('/auth/signin');
    }
  }
};

const kyDefaultOptions: Options = {
  timeout: 40 * 1000,
  headers: {},
  hooks: {
    beforeRequest: [addBearerToken],
    afterResponse: [signOutIfUnauthorize],
    beforeError: [normalizeErrorMessage]
  }
};

const apiClient = ky
  .create({
    prefixUrl: 'https://api-vamos.vamosavacilar.com'
  })
  .extend(kyDefaultOptions);

export default apiClient;
