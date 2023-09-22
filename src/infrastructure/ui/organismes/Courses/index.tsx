'use client';
import { useSession } from 'next-auth/react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { useGetSubscribeCourses } from '~/infrastructure/api';
import CourseCard from '~/infrastructure/ui/molecules/Card/CourseCard';

import styles from './Courses.module.scss';

export type CourseType = {
  id: number;
  name: string;
  image: string;
  lock: boolean;
  description: string;
};

const Courses = () => {
  const { data: session } = useSession();
  const { data } = useGetSubscribeCourses(session?.user.id);

  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2} className={styles.courses}>
      {data?.map((course) => (
        <Grid key={course.id} xs={12} sm={6} md={6}>
          <CourseCard
            lock={course.lock}
            title={course.name}
            image={course.image}
            description={course.description}
            href={`/dashboard/courses/${course.id}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Courses;
