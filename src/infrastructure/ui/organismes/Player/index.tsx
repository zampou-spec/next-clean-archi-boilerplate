'use client';
import { useState } from 'react';
import { Box } from '@mui/material';
import classNames from 'classnames';
import { Chapter, Video } from '~/domain/entities';
import Playlist from '~/infrastructure/ui/molecules/Playlist';
import VideoPlayer from '~/infrastructure/ui/molecules/VideoPalyer';

import styles from './Player.module.scss';

const data: Chapter[] = [
  {
    title: '1. Porjet de fete de pain',
    videos: [
      {
        title: 'salsa dance de kiffante',
        image: 'https://placehold.co/200/webp',
        videoUrl: 'https://youtu.be/fhrV-83Av2k'
      },
      {
        title: 'salsa dance de kiff',
        image: 'https://placehold.co/200/webp',
        videoUrl: 'https://youtu.be/vwGp16NXgQU'
      },
      {
        title: 'Salsa Beginners 1 - Étape de base de la salsa pour le débutant absolu - Explication détaillée',
        videoUrl: 'https://youtu.be/wV8cDpJa2f4',
        image: 'https://placehold.co/200/webp'
      }
    ]
  }
];

interface PlayerProps {
  className?: string | number | symbol | undefined;
}
const Player = ({ className }: PlayerProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | undefined>();

  const handleClick = (video: Video) => setSelectedVideo(video);

  return (
    <Box
      className={classNames(styles.player, {
        [className || '']: Boolean(className)
      })}
    >
      <Box color={styles.video}>
        <VideoPlayer title={selectedVideo?.title} url={selectedVideo?.videoUrl} />
      </Box>
      <Playlist data={data} className={styles.list} onClick={handleClick} />
    </Box>
  );
};

export default Player;
