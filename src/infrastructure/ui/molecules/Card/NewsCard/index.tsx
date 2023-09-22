import { Iconify } from '~/shared/ui/components';
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
  description: string;
  category: string[];
};

const NewsCard = ({ href, image, title, category, author, description }: NewsCardProps) => {
  return (
    <Card elevation={2} className={styles.newsCard}>
      <CardActionArea href={href || '#'} className={styles.container}>
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
            {description}
          </Typography>
          <Box className={styles.category}>{category?.map((cat, i) => <Chip key={i} label={cat} />)}</Box>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Typography variant="body2" className={styles.createdAt}>
            <NoSSR>
              <Iconify icon="mdi:clock-outline" fontSize={24} style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
            </NoSSR>
            7 min read
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
