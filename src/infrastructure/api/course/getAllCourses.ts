import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { CoursesDatable } from '~/infrastructure/ui/molecules/Table/CoursesTable';

const getAllCoursesFetcher = async (): Promise<CoursesDatable[]> => await apiClient.get('api/get-all-courses').json();

const useGetAllCourses = () =>
  useQuery({
    queryKey: ['get-all-courses'],
    queryFn: () => getAllCoursesFetcher(),
    placeholderData: []
  });

export { useGetAllCourses, getAllCoursesFetcher };
