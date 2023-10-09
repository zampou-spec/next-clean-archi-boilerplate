'use client';
import { Box, Typography } from '@mui/material';
import Image from '~/infrastructure/ui/atoms/Image';

import styles from './Hero.module.scss';

type HeroProps = {
  image: string;
  title: string;
  subtitle?: string;
};

const Hero = ({ title, image, subtitle }: HeroProps) => {
  return (
    <Box className={styles.hero}>
      <Box className={styles.imgContainer}>
        <Image alt="" src={image} className={styles.img} />
      </Box>
      <Box className={styles.text}>
        <Typography variant="h3" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          {subtitle || ''}
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
