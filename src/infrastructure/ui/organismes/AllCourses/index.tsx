'use client';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { useGetAllCourses } from '~/infrastructure/api';
import CourseCard from '~/infrastructure/ui/molecules/Card/CourseCard';

import styles from './AllCourses.module.scss';

const AllCourses = () => {
  const { data } = useGetAllCourses();

  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2} className={styles.allCourses}>
      {data?.map((course) => (
        <Grid key={course.id} xs={12} sm={6} md={6}>
          <CourseCard title={course.name} image={course.image} description={course.description} disableRipple />
        </Grid>
      ))}
    </Grid>
  );
};

export default AllCourses;
