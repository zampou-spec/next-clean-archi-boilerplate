import { Product } from '~/domain/entities';
import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const getAllProductsFetcher = async (): Promise<Product[]> => await apiClient.get('api/get-all-products').json();

const useGetAllProducts = () =>
  useQuery<Product[]>({
    queryKey: ['get-all-products'],
    queryFn: () => getAllProductsFetcher(),
    placeholderData: []
  });

export { useGetAllProducts, getAllProductsFetcher };
