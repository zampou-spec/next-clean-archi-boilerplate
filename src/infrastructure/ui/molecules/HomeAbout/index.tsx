import { Box, Typography, Button } from '@mui/material';

import styles from './HomeAbout.module.scss';

const HomeAbout = () => (
  <Box className={styles.homeAbout}>
    <Box className={styles.textContainer}>
      <Typography component="p" variant="body1" className={styles.text}>
        {`"Vamos a Vacilar" est un club de salsa cubaine basé en Côte d'Ivoire. Nous œuvrons à la promotion et à la vulgarisation de
        cette danse à travers des cours, des soirées, des stages et l’organisation de festivals. Le club a été fondé en 2018 par
        Maud & Ahmed, deux passionnés de salsa cubaine qui cumulent près de 20 ans de pratique. Grâce à leur pédagogie efficace,
        vous arriverez à danser dès vos premiers cours.`}
      </Typography>
    </Box>
    <Box className={styles.cta}>
      <Button variant="contained" size="large" href="/auth/signup">
        Devenez membre
      </Button>
    </Box>
  </Box>
);

export default HomeAbout;
