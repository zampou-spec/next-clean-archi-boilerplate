'use client';
import { useRef } from 'react';
import classNames from 'classnames';
import { Box, Fab } from '@mui/material';
import { Iconify } from '~/shared/ui/components/Iconify';
import AliceCarousel from 'react-alice-carousel';
import NewsCard from '~/infrastructure/ui/molecules/Card/NewsCard';

import './customDot.css';
import styles from './ActualitySlider.module.scss';

const ActualitySlider = () => {
  const carousel = useRef<AliceCarousel>(null);

  const responsive = {
    0: { items: 1.2 },
    568: { items: 2.3 },
    1024: { items: 3.5 }
  };

  const slides = [...Array.from({ length: 10 })].map((_, i) => (
    <NewsCard
      key={i}
      fixSize
      disableRipple
      title={'La rue'}
      author={'Femme claire'}
      category={['Femme', 'Homme']}
      image={'https://placehold.co/400.webp'}
    />
  ));

  return (
    <Box className={classNames('actualitySlider', styles.actualitySlider)}>
      <AliceCarousel mouseTracking ref={carousel} disableButtonsControls responsive={responsive} items={slides} />
      <div className={styles.btnSlide}>
        <Fab size="small" color="primary" className={styles.btnPrev} onClick={(e) => carousel?.current?.slidePrev(e)}>
          <Iconify icon="mdi:chevron-left" fontSize={24} />
        </Fab>
        <Fab size="small" color="primary" className={styles.btnNext} onClick={(e) => carousel?.current?.slideNext(e)}>
          <Iconify icon="mdi:chevron-right" fontSize={24} />
        </Fab>
      </div>
    </Box>
  );
};

export default ActualitySlider;
