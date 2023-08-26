'use client';
import classNames from 'classnames';
import { StaticImageData } from 'next/image';
import Iconify from '~/shared/ui/components/Iconify';
import Image from '~/infrastructure/ui/atoms/image';
import { truncateString } from '~/shared/utils/truncateString';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';

import styles from './PlaylistItem.module.scss';

interface PlaylistItemProps {
  title: string;
  lock?: boolean;
  active?: boolean;
  onClick?: () => void;
  src: string | StaticImageData;
}

const PlaylistItem = ({ src, onClick, title, lock = false, active = false }: PlaylistItemProps) => {
  return (
    <Card
      elevation={1}
      className={classNames(styles.playlistItem, {
        [styles.active]: active
      })}
    >
      <CardActionArea onClick={onClick} className={styles.cardActionArea}>
        <Box className={styles.imgContent}>
          <Image
            src={src}
            alt={title}
            imageSize={{
              width: 200,
              height: 200
            }}
            className={styles.img}
          />

          {lock && (
            <div className={styles.lock}>
              <Iconify icon="mdi:lock" fontSize="20px" color="#fff" />
            </div>
          )}
        </Box>
        <CardContent className={styles.cardContent}>
          <Typography variant="body2">{truncateString(title, 56)}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlaylistItem;
