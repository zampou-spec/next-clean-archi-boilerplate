import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { StatisticsType } from '~/infrastructure/ui/organismes/Statistics';

const getStatisticsFetcher = async (): Promise<StatisticsType> => await apiClient.get('api/get-statistics').json();

const useGetStatistics = () =>
  useQuery({
    queryKey: ['get-statistics'],
    queryFn: () => getStatisticsFetcher(),
    placeholderData: {
      user_number: 0,
      user_active: 0,
      number_active_courses: 0
    }
  });

export { useGetStatistics, getStatisticsFetcher };
