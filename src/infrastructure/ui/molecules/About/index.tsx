import Image from '~/infrastructure/ui/atoms/Image';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';

import styles from './About.module.scss';

const About = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2} className={styles.about}>
      <Grid xs={12} sm={6} md={6}>
        <Image alt="" src="https://placehold.co/400.webp" className={styles.img} />
      </Grid>
      <Grid xs={12} sm={6} md={6}>
        <Typography variant="body1" className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos amet eius ea sed voluptatem. Rem quaerat consequatur
          officia sunt quibusdam suscipit dolorum. Odit magni temporibus similique perspiciatis impedit accusantium. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Saepe quos amet eius ea sed voluptatem. Rem quaerat consequatur officia
          sunt quibusdam suscipit dolorum. Odit magni temporibus similique perspiciatis impedit accusantium.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
