'use client';
import classNames from 'classnames';
import { Box, Typography } from '@mui/material';
import ChapterItem from '../../atoms/ChapterItem';
import { Video, Chapter } from '~/domain/entities';
import PlaylistItem from '../../atoms/PlaylistItem';
import Iconify from '~/shared/ui/components/Iconify';

import styles from './Playlist.module.scss';
import { useState } from 'react';

interface PlaylistProps {
  data: Chapter[];
  onClick?: (video: Video) => void;
  className?: string | number | symbol | undefined;
}

const Playlist = ({ data, onClick, className }: PlaylistProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | undefined>();

  const handleClick = (video: Video) => {
    setSelectedVideo(video);
    if (onClick) onClick(video);
  };

  return (
    <Box className={styles.playlist}>
      <Box className={styles.header}>
        <Iconify icon="mdi:animation-play" fontSize="23px" />
        <Typography variant="body1">12 Videos</Typography>
      </Box>
      <Box className={classNames(styles.playlistContainer, { [className || '']: Boolean(className) })}>
        {data?.map((chapters, i) => (
          <ChapterItem key={i} title={chapters.title}>
            {chapters.videos.map((video, iv) => (
              <PlaylistItem
                key={iv}
                src={video.image}
                title={video.title}
                onClick={() => handleClick(video)}
                active={video.title === selectedVideo?.title}
              />
            ))}
          </ChapterItem>
        ))}
      </Box>
    </Box>
  );
};

export default Playlist;
