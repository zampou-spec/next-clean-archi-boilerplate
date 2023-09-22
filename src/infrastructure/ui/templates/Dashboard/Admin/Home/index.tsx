import Section from '~/infrastructure/ui/atoms/Section';
import Statistics from '~/infrastructure/ui/organismes/Statistics';
import UsersTable from '~/infrastructure/ui/molecules/Table/UsersTable';

import styles from './Home.module.scss';

const AdminHomeTemplate = () => (
  <Section>
    <Statistics />
    <UsersTable className={styles.table} />
  </Section>
);

export default AdminHomeTemplate;
