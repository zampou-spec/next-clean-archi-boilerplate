import { NoSsr } from '@mui/material';
import Section from '~/infrastructure/ui/atoms/Section';
import Solds from '~/infrastructure/ui/organismes/Solds';
import SectionTitle from '~/infrastructure/ui/atoms/SectionTitle';
import UserAvatar from '~/infrastructure/ui/molecules/UserAvatar';
import UserActions from '~/infrastructure/ui/organismes/UserActions';
import ActualitySlider from '~/infrastructure/ui/molecules/Slider/ActualitySlider';

import styles from './HomeDashboard.module.scss';

const HomeDashboard = () => (
  <>
    <Section className={styles.homeDashboard}>
      <UserAvatar />
      <Solds />
      <UserActions />
    </Section>
    <Section>
      <SectionTitle>Actualités</SectionTitle>
      <NoSsr>
        <ActualitySlider />
      </NoSsr>
    </Section>
  </>
);

export default HomeDashboard;
