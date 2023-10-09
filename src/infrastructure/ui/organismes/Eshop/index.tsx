'use client';
import { DragEvent } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Image from '~/infrastructure/ui/atoms/Image';
import Section from '~/infrastructure/ui/atoms/Section';
import { Box, Button, Typography, NoSsr } from '@mui/material';

import t1 from '~/infrastructure/ui/assets/images/products/tee-shirt-1.png';
import t2 from '~/infrastructure/ui/assets/images/products/tee-shirt-2.png';

import styles from './Eshop.module.scss';

const Eshop = () => {
  const handleDragStart = (e: DragEvent) => e.preventDefault();

  return (
    <Section className={styles.eshop}>
      <Box className={styles.eshopContainer}>
        <Box className={styles.productsSlide}>
          <NoSsr>
            <AliceCarousel
              infinite
              mouseTracking
              autoPlayInterval={0}
              disableDotsControls
              disableButtonsControls
              animationDuration={2000}
              animationType="fadeout"
              animationEasingFunction="linear"
              items={[
                <Image key={1} alt="" src={t1} className={styles.slide} onDragStart={handleDragStart} />,
                <Image key={2} alt="" src={t2} className={styles.slide} onDragStart={handleDragStart} />
              ]}
              autoPlay
            />
          </NoSsr>
        </Box>
        <Box className={styles.text}>
          <Typography variant="subtitle2" className={styles.subtitle}>
            Découvrez nos articles <br /> en vente dans notre.
          </Typography>
          <Typography variant="h4" className={styles.title}>
            e-shop
          </Typography>
          <Button variant="contained" className={styles.action} size="large">
            Commander
          </Button>
        </Box>
      </Box>
    </Section>
  );
};

export default Eshop;
