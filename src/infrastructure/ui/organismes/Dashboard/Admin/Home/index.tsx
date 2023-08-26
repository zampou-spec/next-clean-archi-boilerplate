import Grid from '@mui/material/Unstable_Grid2';
import Section from '~/infrastructure/ui/atoms/section';
import UsersTable from '~/infrastructure/ui/molecules/Table/UsersTable';
import StatisticCard from '~/infrastructure/ui/molecules/Card/StatisticCard';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <Section>
      <Grid container justifyContent="space-between" spacing={2} className={styles.home}>
        <Grid xs={12} sm={6} md={4}>
          <StatisticCard icon="mdi:account-outline" title={100} description="Nombre d'utilisateur" />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <StatisticCard icon="mdi:account-check-outline" title={100} description="Utilisateur actif" />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <StatisticCard icon="mdi:book-outline" title={100} description="Nombre de cours actif" />
        </Grid>
      </Grid>
      <UsersTable className={styles.table} />
    </Section>
  );
};

export default Home;
