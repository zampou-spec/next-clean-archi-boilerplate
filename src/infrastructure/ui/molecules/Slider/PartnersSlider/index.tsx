'use client';
import { Box } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import PartnerCard from '~/infrastructure/ui/molecules/Card/PartnerCard';

import logo1 from '~/infrastructure/ui/assets/images/partners/logo1.png';
import logo2 from '~/infrastructure/ui/assets/images/partners/logo2.png';
import logo3 from '~/infrastructure/ui/assets/images/partners/logo3.png';
import logo4 from '~/infrastructure/ui/assets/images/partners/logo4.png';

import styles from './PartnersSlide.module.scss';

const PartnersSlide = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 }
  };

  return (
    <Box className={styles.partnersSlide}>
      <AliceCarousel
        infinite
        mouseTracking
        autoPlayInterval={0}
        disableDotsControls
        disableButtonsControls
        animationDuration={2000}
        responsive={responsive}
        animationEasingFunction="linear"
        items={[
          <PartnerCard key={1} image={logo1} />,
          <PartnerCard key={2} image={logo2} />,
          <PartnerCard key={3} image={logo3} />,
          <PartnerCard key={4} image={logo4} />
        ]}
        autoPlay
      />
    </Box>
  );
};

export default PartnersSlide;
