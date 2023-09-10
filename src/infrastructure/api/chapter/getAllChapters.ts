import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const getAllChaptersFetcher = async () => await apiClient.get('api/get-all-chapters').json();

const useGetAllChapters = () =>
  useQuery({
    queryKey: ['get-all-chapters'],
    queryFn: () => getAllChaptersFetcher(),
    placeholderData: []
  });

export { useGetAllChapters, getAllChaptersFetcher };
