'use client';
import Section from '~/infrastructure/ui/atoms/Section';
import { useGetAllCourses } from '~/infrastructure/api';
import CoursesTable, { CoursesDatable } from '~/infrastructure/ui/molecules/Table/CoursesTable';

import styles from './Courses.module.scss';

const CoursesTemplate = () => {
  const { data: courses } = useGetAllCourses();

  return (
    <Section>
      <CoursesTable className={styles.courses} data={(courses as CoursesDatable[]) || []} />
    </Section>
  );
};

export default CoursesTemplate;
