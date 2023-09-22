import { New } from '~/domain/entities';
import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const getAllNewsFetcher = async (): Promise<New[]> => await apiClient.get('api/get-all-news').json();

const useGetAllNews = () =>
  useQuery<New[]>({
    queryKey: ['get-all-news'],
    queryFn: () => getAllNewsFetcher(),
    placeholderData: []
  });

export { useGetAllNews, getAllNewsFetcher };
