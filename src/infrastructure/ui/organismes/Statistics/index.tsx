import Grid from '@mui/material/Unstable_Grid2';
import StatisticCard from '~/infrastructure/ui/molecules/Card/StatisticCard';

import styles from './Statistics.module.scss';

export type StatisticsType = {
  user_number: number;
  user_active: number;
  number_active_courses: number;
};

export type StatisticsProps = {
  data: StatisticsType;
};

const Statistics = ({ data }: StatisticsProps) => (
  <Grid container justifyContent="space-between" spacing={2} className={styles.statistics}>
    <Grid xs={12} sm={6} md={4}>
      <StatisticCard icon="mdi:account-outline" title={data?.user_number} description="Nombre d'utilisateur" />
    </Grid>
    <Grid xs={12} sm={6} md={4}>
      <StatisticCard icon="mdi:account-check-outline" title={data?.user_active} description="Utilisateur actif" />
    </Grid>
    <Grid xs={12} sm={6} md={4}>
      <StatisticCard icon="mdi:book-outline" title={data?.number_active_courses} description="Nombre de cours actif" />
    </Grid>
  </Grid>
);

export default Statistics;
