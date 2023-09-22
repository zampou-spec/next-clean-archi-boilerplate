import { New } from '~/domain/entities';
import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const getNewFetcher = async (newId: number): Promise<New> => await apiClient.get(`api/get-new/${newId}`).json();

const useGetNew = (newId: number) =>
  useQuery<New>({
    queryKey: ['get-new'],
    queryFn: () => getNewFetcher(newId),
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

export { useGetNew, getNewFetcher };
