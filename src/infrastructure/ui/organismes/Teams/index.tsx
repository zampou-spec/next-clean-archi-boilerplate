import Grid from '@mui/material/Unstable_Grid2';
import TeamCard from '~/infrastructure/ui/molecules/Card/TeamCard';

import styles from './Teams.module.scss';

const Teams = () => (
  <Grid container justifyContent="center" alignItems="center" flexWrap="wrap" spacing={2} className={styles.teams}>
    <Grid xs={12} sm={6} md={4} lg={3}>
      <TeamCard />
    </Grid>
    <Grid xs={12} sm={6} md={4} lg={3}>
      <TeamCard />
    </Grid>
    <Grid xs={12} sm={6} md={4} lg={3}>
      <TeamCard />
    </Grid>
    <Grid xs={12} sm={6} md={4} lg={3}>
      <TeamCard />
    </Grid>
  </Grid>
);

export default Teams;
