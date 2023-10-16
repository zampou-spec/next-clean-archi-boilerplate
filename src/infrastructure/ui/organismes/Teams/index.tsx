import Grid from '@mui/material/Unstable_Grid2';
import TeamCard from '~/infrastructure/ui/molecules/Card/TeamCard';

import maud from '~/infrastructure/ui/assets/images/coachs/maud.png';
import hamed from '~/infrastructure/ui/assets/images/coachs/hamed.png';

import styles from './Teams.module.scss';

const Teams = () => (
  <Grid container justifyContent="center" alignItems="center" flexWrap="wrap" spacing={2} className={styles.teams}>
    <Grid xs={12} sm={12} md={6} lg={6}>
      <TeamCard
        image={hamed}
        name="Coach Hamed"
        job="Coach de Salsa"
        description="Ahmed vous permettra de développer votre créativité grâce à une approche innovante."
      />
    </Grid>
    <Grid xs={12} sm={12} md={6} lg={6}>
      <TeamCard
        image={maud}
        name="Coach Maud"
        job="Coach de Salsa"
        description="Maud  possède une grande expérience en danses afro-cubaines ( Rumba , Afro ...) avec de nombreux stages, festivals et séjours immersifs à son actif."
      />
    </Grid>
    {/* <Grid xs={12} sm={6} md={4} lg={4}>
      <TeamCard image={'https://placehold.co/400.webp'} name="Jean Yve Benoird" job="Coach de Salsa" />
    </Grid> */}
    {/* <Grid xs={12} sm={6} md={4} lg={3}>
      <TeamCard image={'https://placehold.co/400.webp'} name="Jean Yve Benoird" job="Coach de Salsa" />
    </Grid> */}
  </Grid>
);

export default Teams;
