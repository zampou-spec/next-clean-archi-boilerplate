import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const getAllCoursesFetcher = async () => await apiClient.get('api/get-all-courses').json();

const useGetAllCourses = () =>
  useQuery({
    queryKey: ['get-all-courses'],
    queryFn: () => getAllCoursesFetcher()
  });

export { useGetAllCourses, getAllCoursesFetcher };
