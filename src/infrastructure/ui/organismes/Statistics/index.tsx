'use client';
import Grid from '@mui/material/Unstable_Grid2';
import { useGetStatistics } from '~/infrastructure/api';
import StatisticCard from '~/infrastructure/ui/molecules/Card/StatisticCard';

import styles from './Statistics.module.scss';

export type StatisticsType = {
  user_number: number;
  user_active: number;
  number_active_courses: number;
};

const Statistics = () => {
  const { data } = useGetStatistics();

  return (
    <Grid container justifyContent="space-between" spacing={2} className={styles.statistics}>
      <Grid xs={12} sm={6} md={4}>
        <StatisticCard icon="mdi:account-outline" description="Nombre d'utilisateur" title={data?.user_number} />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <StatisticCard icon="mdi:account-check-outline" description="Utilisateur actif" title={data?.user_active} />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <StatisticCard icon="mdi:book-outline" description="Nombre de cours actif" title={data?.number_active_courses} />
      </Grid>
    </Grid>
  );
};

export default Statistics;
