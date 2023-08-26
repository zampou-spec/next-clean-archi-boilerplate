import Section from '~/infrastructure/ui/atoms/section';
import Player from '~/infrastructure/ui/organismes/Player';
import CourseTable from '~/infrastructure/ui/molecules/Table/CourseTable';

import styles from './CourseDetails.module.scss';

const CourseDetails = () => {
  return (
    <Section>
      <CourseTable className={styles.courseTable} />
      <Player className={styles.player} />
    </Section>
  );
};

export default CourseDetails;
