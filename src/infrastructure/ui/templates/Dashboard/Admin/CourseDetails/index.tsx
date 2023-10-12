import Hero from '~/infrastructure/ui/molecules/Hero';
import Section from '~/infrastructure/ui/atoms/Section';
import Player from '~/infrastructure/ui/organismes/Player';
import ChapterTable from '~/infrastructure/ui/molecules/Table/ChapterTable';
import AdminMenuDrawer from '~/infrastructure/ui/molecules/Drawer/AdminMenuDrawer';

import styles from './CourseDetails.module.scss';

type CourseDetailsTemplateProps = {
  courseId: number;
};

const CourseDetailsTemplate = ({ courseId }: CourseDetailsTemplateProps) => (
  <>
    <Hero image="https://placehold.co/400.webp" title="Mes cours" height="200px" />
    <Section>
      <AdminMenuDrawer />
      <ChapterTable courseId={courseId} className={styles.courseTable} />
      <Player courseId={courseId} className={styles.player} />
    </Section>
  </>
);

export default CourseDetailsTemplate;
