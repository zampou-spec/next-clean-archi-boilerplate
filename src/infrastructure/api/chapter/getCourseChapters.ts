import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { ChapterDatable } from '~/infrastructure/ui/molecules/Table/ChapterTable';

const getCourseChaptersFetcher = async (course_id: number): Promise<ChapterDatable[]> =>
  await apiClient.get(`api/get-course-chapters/${course_id}`).json();

const useGetCourseChapters = (course_id: number) =>
  useQuery<ChapterDatable[]>({
    queryKey: ['get-course-chapters', course_id],
    queryFn: () => getCourseChaptersFetcher(course_id),
    placeholderData: [],
    enabled: Boolean(course_id)
  });

export { useGetCourseChapters, getCourseChaptersFetcher };
