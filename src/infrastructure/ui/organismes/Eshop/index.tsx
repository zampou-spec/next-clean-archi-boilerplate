'use client';
import AliceCarousel from 'react-alice-carousel';
import Image from '~/infrastructure/ui/atoms/Image';
import Section from '~/infrastructure/ui/atoms/Section';
import { useGetAllProducts } from '~/infrastructure/api';
import { Box, Button, Typography, NoSsr } from '@mui/material';
import { DragEvent, ReactElement, useEffect, useState } from 'react';
import OrderProductModal from '~/infrastructure/ui/molecules/Modal/OrderProductModal';

import styles from './Eshop.module.scss';

const Eshop = () => {
  const { data: products } = useGetAllProducts();
  const [product, setProduct] = useState<ReactElement[]>([]);
  const handleDragStart = (e: DragEvent) => e.preventDefault();

  useEffect(() => {
    const data: ReactElement[] = [];
    products?.map((product, i) => {
      data.push(<Image key={i} alt="" src={product.image} className={styles.slide} onDragStart={handleDragStart} />);
    });

    if (data) {
      setProduct(data);
    }
  }, [products]);

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
              items={product}
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
          <OrderProductModal
            title="Passez votre commande"
            button={
              <Button variant="contained" className={styles.action} size="large">
                Commander
              </Button>
            }
          />
        </Box>
      </Box>
    </Section>
  );
};

export default Eshop;
