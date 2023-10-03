'use client';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Iconify } from '~/shared/ui/components/Iconify';
import { Video, Chapter } from '~/domain/entities';
import ChapterItem from '~/infrastructure/ui/atoms/ChapterItem';
import PlaylistItem from '~/infrastructure/ui/atoms/PlaylistItem';

import styles from './Playlist.module.scss';

interface PlaylistProps {
  data: Chapter[];
  lock: boolean | undefined;
  onClick?: (video: Video) => void;
  className?: string | number | symbol | undefined;
}

const Playlist = ({ data, lock, onClick, className }: PlaylistProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | undefined>();

  const handleClick = (video: Video) => {
    setSelectedVideo(video);
    if (onClick) onClick(video);
  };

  useEffect(() => {
    if (data && data?.length > 0) {
      const video = data[0].videos[0];
      setSelectedVideo(video);
    } else {
      setSelectedVideo(undefined);
    }
  }, [data]);

  return (
    <Box className={styles.playlist}>
      <Box className={styles.header}>
        <Iconify icon="mdi:animation-play" fontSize="23px" />
        <Typography variant="body1">12 Videos</Typography>
      </Box>
      <Box className={classNames(styles.playlistContainer, { [className || '']: Boolean(className) })}>
        {data?.map((chapters, ic) => (
          <ChapterItem key={ic} title={chapters.title}>
            {chapters.videos.map((video, iv) => (
              <PlaylistItem
                key={iv}
                src={video.image}
                title={video.title}
                onClick={() => handleClick(video)}
                lock={video?.lock ? video?.lock : lock}
                active={video.id === selectedVideo?.id}
              />
            ))}
          </ChapterItem>
        ))}
      </Box>
    </Box>
  );
};

export default Playlist;
