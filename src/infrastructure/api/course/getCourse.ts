import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const getCourseFetcher = async (course_id: number) => await apiClient.get(`api/get-course/${course_id}`).json();

const useGetCourse = (course_id: number) =>
  useQuery({
    queryKey: ['get-course'],
    queryFn: () => getCourseFetcher(course_id),
    placeholderData: [],
    enabled: Boolean(course_id)
  });

export { useGetCourse, getCourseFetcher };
