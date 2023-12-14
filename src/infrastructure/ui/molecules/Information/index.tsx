import { Box, Unstable_Grid2 as Grid } from '@mui/material';

import { Iconify } from '~/shared/ui/components/Iconify';
import Link from 'next/link';
import styles from './Information.module.scss';

const Information = () => (
  <Grid container alignItems="center" justifyContent="center" spacing={2} className={styles.information}>
    <Grid xs={12} sm={6} md={6}>
      <Box className={styles.item}>
        <ul>
          <li>
            <Link href="tel:+225 07 09 60 57 62" passHref>
              <span className={styles.icon}>
                <Iconify icon="mdi:phone" fontSize={18} />
              </span>
              <span className={styles.name}>Tel:</span> <span className={styles.value}>+225 07 09 60 57 62</span>
            </Link>
          </li>
          <li>
            <Link href="mailto:info@vamosavacilar.com" passHref>
              <span className={styles.icon}>
                <Iconify icon="mdi:email-variant" fontSize={18} />
              </span>
              <span className={styles.name}>Email:</span> <span className={styles.value}>info@vamosavacilar.com</span>
            </Link>
          </li>
          <li>
            <Link href="https://maps.app.goo.gl/TCeiJvFz1TSNWkgb7" passHref>
              <span className={styles.icon}>
                <Iconify icon="mdi:map-marker-radius" fontSize={18} />
              </span>
              <span className={styles.name}>Adresse:</span>
              <span className={styles.value}>
                Cocody Danga, espace théren, <br /> Abidjan, Côte d’Ivoire
              </span>
            </Link>
          </li>
        </ul>
      </Box>
    </Grid>
    <Grid xs={12} sm={6} md={6}>
      <iframe
        loading="lazy"
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.479435440798!2d-4.013779299999999!3d5.3435399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb095745f57d%3A0xa7af9fd7c81a8a59!2sEspace%20Th%C3%A9ren!5e0!3m2!1sfr!2sci!4v1702477842936!5m2!1sfr!2sci"
      ></iframe>
    </Grid>
  </Grid>
);

export default Information;
