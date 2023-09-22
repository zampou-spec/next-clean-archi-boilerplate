import Section from '~/infrastructure/ui/atoms/Section';
import CoursesTable from '~/infrastructure/ui/molecules/Table/CoursesTable';

import styles from './Courses.module.scss';

const CoursesTemplate = () => (
  <Section>
    <CoursesTable className={styles.courses} />
  </Section>
);

export default CoursesTemplate;
