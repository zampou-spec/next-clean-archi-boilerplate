import Section from '~/infrastructure/ui/atoms/Section';
import Player from '~/infrastructure/ui/organismes/Player';
import ChapterTable from '~/infrastructure/ui/molecules/Table/ChapterTable';

import styles from './CourseDetails.module.scss';

type CourseDetailsTemplateProps = {
  courseId: number;
};

const CourseDetailsTemplate = ({ courseId }: CourseDetailsTemplateProps) => {
  return (
    <Section>
      <ChapterTable courseId={courseId} className={styles.courseTable} />
      <Player courseId={courseId} className={styles.player} />
    </Section>
  );
};

export default CourseDetailsTemplate;
