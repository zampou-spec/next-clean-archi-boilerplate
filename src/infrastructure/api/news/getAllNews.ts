import { News } from '~/domain/entities';
import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const getAllNewsFetcher = async (): Promise<News[]> => await apiClient.get('api/get-all-news').json();

const useGetAllNews = () =>
  useQuery<News[]>({
    queryKey: ['get-all-news'],
    queryFn: () => getAllNewsFetcher(),
    placeholderData: []
  });

export { useGetAllNews, getAllNewsFetcher };
