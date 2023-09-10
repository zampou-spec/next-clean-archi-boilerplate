'use client';
import Section from '~/infrastructure/ui/atoms/Section';
import Player from '~/infrastructure/ui/organismes/Player';

import styles from './CourseDetails.module.scss';

type CourseDetailsTemplateProps = {
  courseId: number;
};

const CourseDetailsTemplate = ({ courseId }: CourseDetailsTemplateProps) => (
  <Section>
    <Player courseId={courseId} className={styles.player} />
  </Section>
);

export default CourseDetailsTemplate;
