import Hero from '~/infrastructure/ui/molecules/Hero';
import Section from '~/infrastructure/ui/atoms/Section';
import CoursesTable from '~/infrastructure/ui/molecules/Table/CoursesTable';
import AdminMenuDrawer from '~/infrastructure/ui/molecules/Drawer/AdminMenuDrawer';

import styles from './Courses.module.scss';

const CoursesTemplate = () => (
  <>
    <Hero image="https://placehold.co/400.webp" title="Cours" height="200px" />
    <Section>
      <AdminMenuDrawer />
      <CoursesTable className={styles.courses} />
    </Section>
  </>
);

export default CoursesTemplate;
