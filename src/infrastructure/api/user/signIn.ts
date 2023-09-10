import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const signinFetcher = async (id: string, password: string, mode: string) =>
  await apiClient.post('api/auth/login', { json: { id, password, mode } }).json();

const useSignin = (id: string, password: string, mode: string) =>
  useQuery({
    queryKey: [],
    queryFn: () => signinFetcher(id, password, mode)
  });

export { signinFetcher, useSignin };
