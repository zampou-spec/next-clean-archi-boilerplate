import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { SoldsType } from '~/infrastructure/ui/organismes/Solds';

const getSubscribesFetcher = async (): Promise<SoldsType[]> => await apiClient.get('api/get-subscribes').json();

const useGetSubscribes = (user_id: string | undefined) =>
  useQuery({
    queryKey: ['get-subscribes', user_id],
    queryFn: () => getSubscribesFetcher(),
    placeholderData: [],
    enabled: Boolean(user_id)
  });

export { useGetSubscribes, getSubscribesFetcher };
