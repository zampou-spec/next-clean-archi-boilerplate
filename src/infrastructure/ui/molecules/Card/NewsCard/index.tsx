import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { Iconify } from '~/shared/ui/components/Iconify';
import { DragEvent, SyntheticEvent } from 'react';
import Image from '~/infrastructure/ui/atoms/Image';
import { truncateString } from '~/shared/utils/truncateString';
import { NoSSR } from 'next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr';
import { Box, Card, CardActionArea, CardActions, CardContent, Chip, Typography } from '@mui/material';

import styles from './NewsCard.module.scss';

type NewsCardProps = {
  href?: string;
  image: string;
  title: string;
  author: string;
  fixSize?: boolean;
  category?: string[];
  description?: string;
  disableRipple?: boolean;
};

const NewsCard = ({ href, image, title, category, author, description, disableRipple, fixSize }: NewsCardProps) => {
  const router = useRouter();

  const handleOnClick = (e: SyntheticEvent) => {
    if (href) {
      router.push(href);
    }

    e.preventDefault();
  };

  const handleDragStart = (e: DragEvent) => e.preventDefault();

  return (
    <Card
      elevation={2}
      className={classNames(styles.newsCard, {
        [fixSize ? styles.fixSize : '']: Boolean(fixSize)
      })}
    >
      <CardActionArea
        onClick={handleOnClick}
        className={styles.container}
        onDragStart={handleDragStart}
        disableRipple={Boolean(disableRipple)}
      >
        <Box className={styles.imgContainer}>
          <Image alt="" src={image} className={styles.img} />
          <Box className={styles.titleContainer}>
            <Typography variant="h5" className={styles.title}>
              {title}
            </Typography>
          </Box>
        </Box>
        <CardContent className={styles.cardContent}>
          <Typography variant="body1" className={styles.description}>
            {description || ''}
          </Typography>
          <Box className={styles.category}>{category?.map((cat, i) => <Chip key={i} label={cat} className={styles.chip} />)}</Box>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Typography variant="body2" className={styles.createdAt}>
            <NoSSR>
              <Iconify icon="mdi:clock-outline" fontSize={16} style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
            </NoSSR>
            10/10/20
          </Typography>
          <Typography variant="body2" className={styles.author}>
            {truncateString(author, 18)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
