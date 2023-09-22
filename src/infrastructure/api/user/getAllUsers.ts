import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { UsersDataTable } from '~/infrastructure/ui/molecules/Table/UsersTable';

const getAllUserFetcher = async (): Promise<UsersDataTable[]> => await apiClient.get('api/get-all-user').json();

const useGetAllUser = () =>
  useQuery({
    queryKey: ['get-all-user'],
    queryFn: () => getAllUserFetcher(),
    placeholderData: []
  });

export { useGetAllUser, getAllUserFetcher };
