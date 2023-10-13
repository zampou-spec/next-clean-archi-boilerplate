import Image from '~/infrastructure/ui/atoms/Image';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';

import vamos from '~/infrastructure/ui/assets/images/vamos.png';

import styles from './About.module.scss';

const About = () => (
  <Grid container alignItems="center" justifyContent="center" spacing={2} className={styles.about}>
    <Grid xs={12} sm={6} md={6}>
      <Image alt="" src={vamos} className={styles.img} />
    </Grid>
    <Grid xs={12} sm={6} md={6}>
      <Typography variant="body1" className={styles.text}>
        {`"Vamos a Vacilar" est un club de salsa cubaine basé en Côte d'Ivoire. Nous œuvrons à la promotion et à la vulgarisation de
        cette danse à travers des cours, des soirées, des stages et l’organisation de festivals. Le club a été fondé en 2018 par
        Maud & Ahmed, deux passionnés de salsa cubaine qui cumulent près de 20 ans de pratique. Grâce à leur pédagogie efficace,
        vous arriverez à danser dès vos premiers cours.`}
        <br />
        <br />
        {`La salsa cubaine ou casino (nom authentique) est une danse populaire et sociale. Elle s’inspire de la danse casino des
        années 50, comme celle pratiquée au Tropicana, fameux club de la Havane. La salsa cubaine prend ses racines dans le son
        (prononcé « sonne ») cubain, danse apparue vers 1920. Elle se danse principalement en couple, de manière circulaire.`}
      </Typography>
    </Grid>
  </Grid>
);

export default About;
