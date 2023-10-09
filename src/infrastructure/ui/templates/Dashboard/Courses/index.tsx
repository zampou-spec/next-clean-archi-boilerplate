import Hero from '~/infrastructure/ui/molecules/Hero';
import Section from '~/infrastructure/ui/atoms/Section';
import Courses from '~/infrastructure/ui/organismes/Courses';

import styles from './CoursesDashboard.module.scss';

const CoursesDashboard = () => (
  <>
    <Hero image="https://placehold.co/400.webp" title="Lorem ipsum dolor sit amet consectetur adipisicing elit." subtitle="" />
    <Section className={styles.coursesDashboard}>
      <Courses />
    </Section>
  </>
);

export default CoursesDashboard;
