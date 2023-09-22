import Section from '~/infrastructure/ui/atoms/Section';
import Courses from '~/infrastructure/ui/organismes/Courses';

import styles from './CoursesDashboard.module.scss';

const CoursesDashboard = () => (
  <Section className={styles.coursesDashboard}>
    <Courses />
  </Section>
);

export default CoursesDashboard;
