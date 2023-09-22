import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { playerDataType } from '~/infrastructure/ui/organismes/Player';

const getChapterAndVideosFetcher = async (course_id: number): Promise<playerDataType> =>
  await apiClient.get(`api/get-course-videos/${course_id}`).json();

const useGetChapterAndVideos = (course_id: number, user_id: string | undefined) => {
  const queryKey = ['get-course-videos', course_id];

  if (user_id) {
    queryKey.push(user_id.toString());
  }

  return useQuery<playerDataType>({
    queryKey,
    queryFn: () => getChapterAndVideosFetcher(course_id),
    placeholderData: {
      infos: {
        id: 0,
        title: '',
        image: '',
        lock: true,
        price_online: 0,
        description: ''
      },
      chapters: []
    },
    enabled: Boolean(user_id)
  });
};

export { useGetChapterAndVideos, getChapterAndVideosFetcher };
