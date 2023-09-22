import Section from '~/infrastructure/ui/atoms/Section';
import Solds from '~/infrastructure/ui/organismes/Solds';
import UserAvatar from '~/infrastructure/ui/molecules/UserAvatar';
import UserActions from '~/infrastructure/ui/organismes/UserActions';

import styles from './HomeDashboard.module.scss';

const HomeDashboard = () => (
  <Section className={styles.homeDashboard}>
    <UserAvatar />
    <Solds />
    <UserActions />
  </Section>
);

export default HomeDashboard;
