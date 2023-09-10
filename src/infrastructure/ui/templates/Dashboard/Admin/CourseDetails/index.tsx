'use client';
import Section from '~/infrastructure/ui/atoms/Section';
import { useGetAllChapters } from '~/infrastructure/api';
import Player from '~/infrastructure/ui/organismes/Player';
import CourseTable, { ChapterDatable } from '~/infrastructure/ui/molecules/Table/ChapterTable';

import styles from './CourseDetails.module.scss';

type CourseDetailsTemplateProps = {
  courseId: number;
};

const CourseDetailsTemplate = ({ courseId }: CourseDetailsTemplateProps) => {
  const { data: chapter } = useGetAllChapters();

  return (
    <Section>
      <CourseTable courseId={courseId} data={chapter as ChapterDatable[]} className={styles.courseTable} />
      <Player courseId={courseId} className={styles.player} />
    </Section>
  );
};

export default CourseDetailsTemplate;
