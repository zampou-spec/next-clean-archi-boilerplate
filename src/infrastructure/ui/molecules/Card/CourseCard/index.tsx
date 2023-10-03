'use client';
import { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Iconify } from '~/shared/ui/components/Iconify';
import Image from '~/infrastructure/ui/atoms/Image';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';

import styles from './CourseCard.module.scss';

type CourseCardProps = {
  href?: string;
  image: string;
  title: string;
  lock?: boolean;
  description: string;
  disableRipple?: boolean;
};

const CourseCard = ({ href, image, title, description, lock = false, disableRipple }: CourseCardProps) => {
  const router = useRouter();

  const handleOnClick = (e: SyntheticEvent) => {
    if (href) {
      router.push(href);
    }

    e.preventDefault();
  };

  return (
    <Card elevation={2} className={styles.courseCard}>
      <CardActionArea onClick={handleOnClick} className={styles.container} disableRipple={Boolean(disableRipple)}>
        <Box className={styles.imgContent}>
          <Image alt="course card" src={image} className={styles.img} />
          {lock && (
            <div className={styles.lock}>
              <Iconify icon="mdi:lock" fontSize="32px" color="#fff" />
            </div>
          )}
        </Box>
        <CardContent className={styles.cardContent}>
          <Typography variant="h4" sx={{ textTransform: 'uppercase', color: (theme) => theme.palette.primary.main }}>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
