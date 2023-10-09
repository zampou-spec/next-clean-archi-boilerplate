'use client';
// import Hero from '~/infrastructure/ui/molecules/Hero';
import Section from '~/infrastructure/ui/atoms/Section';
import Player from '~/infrastructure/ui/organismes/Player';

import styles from './CourseDetails.module.scss';

type CourseDetailsTemplateProps = {
  courseId: number;
};

const CourseDetailsTemplate = ({ courseId }: CourseDetailsTemplateProps) => (
  <>
    {/* <Hero image="https://placehold.co/400.webp" title="Lorem ipsum dolor sit amet consectetur adipisicing elit." subtitle="" /> */}
    <Section>
      <Player courseId={courseId} className={styles.player} />
    </Section>
  </>
);

export default CourseDetailsTemplate;
