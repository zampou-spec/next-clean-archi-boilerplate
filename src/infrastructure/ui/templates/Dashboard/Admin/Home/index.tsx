import Hero from '~/infrastructure/ui/molecules/Hero';
import Section from '~/infrastructure/ui/atoms/Section';
import Statistics from '~/infrastructure/ui/organismes/Statistics';
import UsersTable from '~/infrastructure/ui/molecules/Table/UsersTable';
import AdminMenuDrawer from '~/infrastructure/ui/molecules/Drawer/AdminMenuDrawer';

import styles from './Home.module.scss';

const AdminHomeTemplate = () => (
  <>
    <Hero image="https://placehold.co/400.webp" title="Mes cours" height="200px" />
    <Section>
      <AdminMenuDrawer />
      <Statistics />
      <UsersTable className={styles.table} />
    </Section>
  </>
);

export default AdminHomeTemplate;
