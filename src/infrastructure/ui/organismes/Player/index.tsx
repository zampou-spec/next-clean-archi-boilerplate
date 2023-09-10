'use client';
import { Box } from '@mui/material';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Chapter, Video } from '~/domain/entities';
import Playlist from '~/infrastructure/ui/molecules/Playlist';
import VideoPlayer from '~/infrastructure/ui/molecules/VideoPalyer';
import { useGetChapterAndVideos } from '~/infrastructure/api/chapter/getChapterAndVideos';

import styles from './Player.module.scss';

type infosType = {
  id: number;
  lock: boolean;
  title: string;
};

export type playerDataType = {
  infos: infosType;
  chapters: Chapter[];
};

type PlayerProps = {
  courseId: number;
  className?: string | number | symbol | undefined;
};

const Player = ({ courseId, className }: PlayerProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | undefined>();
  const { data } = useGetChapterAndVideos({ course_id: courseId, user_id: 1 });

  useEffect(() => {
    if (data?.chapters.length !== 0) {
      setSelectedVideo(data?.chapters[0].videos[0]);
    } else {
      setSelectedVideo(undefined);
    }
  }, [data]);

  const handleClick = (video: Video) => setSelectedVideo(video);

  return (
    <Box
      className={classNames(styles.player, {
        [className || '']: Boolean(className)
      })}
    >
      <Box color={styles.video}>
        <VideoPlayer title={selectedVideo?.title} url={selectedVideo?.video_url} />
      </Box>
      <Playlist data={data?.chapters as Chapter[]} lock={data?.infos?.lock} className={styles.list} onClick={handleClick} />
    </Box>
  );
};

export default Player;
