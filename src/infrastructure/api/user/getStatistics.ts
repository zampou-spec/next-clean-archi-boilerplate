import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const getStatisticsFetcher = async () => await apiClient.get('api/get-statistics').json();

const useGetStatistics = () =>
  useQuery({
    queryKey: ['get-statistics'],
    queryFn: () => getStatisticsFetcher()
  });

export { useGetStatistics, getStatisticsFetcher };
