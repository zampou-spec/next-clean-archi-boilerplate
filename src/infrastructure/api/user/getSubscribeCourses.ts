import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { CourseType } from '~/infrastructure/ui/organismes/Courses';

const getSubscribeCoursesFetcher = async (): Promise<CourseType[]> => await apiClient.get('api/get-subscribe-courses').json();

const useGetSubscribeCourses = (user_id: string | undefined) =>
  useQuery({
    queryKey: ['get-subscribe-courses', user_id],
    queryFn: () => getSubscribeCoursesFetcher(),
    placeholderData: [],
    enabled: Boolean(user_id)
  });

export { useGetSubscribeCourses, getSubscribeCoursesFetcher };
