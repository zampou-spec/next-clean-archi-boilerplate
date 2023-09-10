import { useQuery } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { playerDataType } from '~/infrastructure/ui/organismes/Player';

type getChapterAndVideosFetcherType = {
  user_id: number;
  course_id: number;
};

const getChapterAndVideosFetcher = async (data: getChapterAndVideosFetcherType): Promise<playerDataType> =>
  await apiClient.get(`api/get-course-videos/${data.course_id}${data.user_id && '/' + data.user_id}`).json();

const useGetChapterAndVideos = (data: getChapterAndVideosFetcherType) =>
  useQuery<playerDataType>({
    queryKey: ['get-course-videos'],
    queryFn: () => getChapterAndVideosFetcher(data),
    placeholderData: {
      infos: {
        id: 0,
        lock: true,
        title: ''
      },
      chapters: []
    }
  });

export { useGetChapterAndVideos, getChapterAndVideosFetcher };
