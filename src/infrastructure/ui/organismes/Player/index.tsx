'use client';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Chapter, Video } from '~/domain/entities';
import Image from '~/infrastructure/ui/atoms/Image';
import { Box, Button, Typography } from '@mui/material';
import { Iconify } from '~/shared/ui/components/Iconify';
import Playlist from '~/infrastructure/ui/molecules/Playlist';
import VideoPlayer from '~/infrastructure/ui/molecules/VideoPalyer';
import UnlockCourseModal from '~/infrastructure/ui/molecules/Modal/UnlockCourseModal';
import { useGetChapterAndVideos } from '~/infrastructure/api/chapter/getChapterAndVideos';

import styles from './Player.module.scss';

export type infosType = {
  id: number;
  lock: boolean;
  title: string;
  image: string;
  description: string;
  price_online: number;
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
  const { data: session } = useSession();
  const { data } = useGetChapterAndVideos(courseId, session?.user.id);
  const [selectedVideo, setSelectedVideo] = useState<Video | undefined>();

  useEffect(() => {
    if (data && data?.chapters.length > 0) {
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
      <Box className={styles.video}>
        {data?.infos?.lock ? (
          <Box className={styles.imgContent}>
            <Image alt="" src={selectedVideo?.image || "https://placehold.co/400?text=''"} className={styles.img} />
            <div className={styles.lock}>
              <Iconify icon="mdi:lock" fontSize="42px" color="#fff" />
              <Typography className={styles.title} variant="h4">
                Verrouiller {data.infos.title && `- ${data.infos.title}`}
              </Typography>
              <Typography className={styles.description} variant="body1">
                Vous n&apos;avez pas accès à ce cours car il est verrouillé, vous devez l&apos;acheter pour le déverrouiller.
              </Typography>
              <UnlockCourseModal
                infos={data.infos}
                button={
                  <Button
                    size="large"
                    variant="contained"
                    className={styles.action}
                    startIcon={<Iconify icon="mdi:lock-open-variant" fontSize="42px" />}
                  >
                    Déverrouiller
                  </Button>
                }
              />
            </div>
          </Box>
        ) : (
          <VideoPlayer title={selectedVideo?.title} url={selectedVideo?.video_url} />
        )}
      </Box>
      <Playlist data={data?.chapters as Chapter[]} lock={data?.infos?.lock} className={styles.list} onClick={handleClick} />
    </Box>
  );
};

export default Player;
