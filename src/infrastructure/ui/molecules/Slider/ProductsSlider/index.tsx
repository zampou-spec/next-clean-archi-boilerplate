'use client';
import { DragEvent } from 'react';
import { Box } from '@mui/material';
import * as NextImage from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import Image from '~/infrastructure/ui/atoms/Image';

import t1 from '~/infrastructure/ui/assets/images/product/tee-shirt-1.png';
import t2 from '~/infrastructure/ui/assets/images/product/tee-shirt-2.png';

import styles from './ProductsSlide.module.scss';

type ProductProps = {
  image: string | NextImage.StaticImageData;
};

const Product = ({ image }: ProductProps) => {
  const handleDragStart = (e: DragEvent) => e.preventDefault();

  return (
    <Box className={styles.slider} onDragStart={handleDragStart}>
      <Image alt="" src={image} className={styles.img} />
    </Box>
  );
};

const ProductsSlider = () => {
  return (
    <Box className={styles.productsSlide}>
      <AliceCarousel
        infinite
        mouseTracking
        autoPlayInterval={0}
        disableDotsControls
        disableButtonsControls
        animationDuration={3500}
        animationType="fadeout"
        items={[<Product key={1} image={t1} />, <Product key={2} image={t2} />]}
        autoPlay
      />
    </Box>
  );
};

export default ProductsSlider;
