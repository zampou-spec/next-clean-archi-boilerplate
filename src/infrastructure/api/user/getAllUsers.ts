import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const getAllUserFetcher = async () => await apiClient.get('api/get-all-user').json();

const useGetAllUser = () =>
  useQuery({
    queryKey: ['get-all-user'],
    queryFn: () => getAllUserFetcher()
  });

export { useGetAllUser, getAllUserFetcher };
