'use client';
import Section from '~/infrastructure/ui/atoms/Section';
import { useGetAllUser, useGetStatistics } from '~/infrastructure/api';
import Statistics, { StatisticsType } from '~/infrastructure/ui/organismes/Statistics';
import UsersTable, { UsersDataTable } from '~/infrastructure/ui/molecules/Table/UsersTable';

import styles from './Home.module.scss';

const AdminHomeTemplate = () => {
  const { data: users } = useGetAllUser();
  const { data: statistics } = useGetStatistics();

  return (
    <Section>
      <Statistics data={(statistics as StatisticsType) || {}} />
      <UsersTable data={(users as UsersDataTable[]) || []} className={styles.table} />
    </Section>
  );
};

export default AdminHomeTemplate;
