import { Box, Button, Typography, NoSsr } from '@mui/material';
import ProductsSlider from '~/infrastructure/ui/molecules/Slider/ProductsSlider';

import styles from './Eshop.module.scss';
import Section from '../../atoms/Section';

const Eshop = () => {
  return (
    <Section className={styles.eshop}>
      <NoSsr>
        <ProductsSlider />
      </NoSsr>
      <Box className={styles.text}>
        <Typography variant="subtitle2" className={styles.subtitle}>
          Découvrez nos articles en vente dans notre.
        </Typography>
        <Typography variant="h4" className={styles.title}>
          e-shop
        </Typography>
        <Button variant="contained" className={styles.action}>
          Commander
        </Button>
      </Box>
    </Section>
  );
};

export default Eshop;
