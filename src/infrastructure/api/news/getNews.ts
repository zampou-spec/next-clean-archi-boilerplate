import { News } from '~/domain/entities';
import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const getNewsFetcher = async (newId: number): Promise<News> => await apiClient.get(`api/get-news/${newId}`).json();

const useGetNews = (newId: number) =>
  useQuery<News>({
    queryKey: ['get-news'],
    queryFn: () => getNewsFetcher(newId),
    placeholderData: {
      id: 0,
      title: '',
      image: '',
      author: '',
      category: [],
      description: ''
    },
    enabled: Boolean(newId)
  });

export { useGetNews, getNewsFetcher };
