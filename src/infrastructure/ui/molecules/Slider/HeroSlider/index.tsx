'use client';
import { DragEvent } from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import * as NextImage from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import Image from '~/infrastructure/ui/atoms/Image';

import slide1 from '~/infrastructure/ui/assets/images/slides/slider-1.png';

import './customDot.css';
import styles from './HeroSlider.module.scss';

type SlideProps = {
  image: string | NextImage.StaticImageData;
};

const Slide = ({ image }: SlideProps) => {
  const handleDragStart = (e: DragEvent) => e.preventDefault();

  return (
    <Box className={styles.slider} onDragStart={handleDragStart}>
      <Image alt="" src={image} className={styles.img} />
    </Box>
  );
};

const HeroSlider = () => {
  const slides = [...Array.from({ length: 2 })].map((_, i) => (
    <Slide key={i} image={`https://picsum.photos/id/26${i}/3744.webp`} />
  ));

  return (
    <Box className={classNames('heroSlider', styles.heroSlider)}>
      <AliceCarousel mouseTracking disableButtonsControls items={[<Slide key={3} image={slide1} />, ...slides]} />
    </Box>
  );
};

export default HeroSlider;
