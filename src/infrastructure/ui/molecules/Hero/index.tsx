'use client';
import { Box, Typography } from '@mui/material';
import Image from '~/infrastructure/ui/atoms/Image';

import styles from './Hero.module.scss';
import { StaticImageData } from 'next/image';

type HeroProps = {
  title: string;
  height?: string;
  subtitle?: string;
  image: string | StaticImageData;
};

const Hero = ({ title, height, image, subtitle }: HeroProps) => (
  <Box className={styles.hero} sx={{ height: `${height} !important` }}>
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

export default Hero;
