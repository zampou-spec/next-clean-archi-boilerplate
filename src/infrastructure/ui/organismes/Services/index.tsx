import { Box } from '@mui/material';
import ServiceCard from '~/infrastructure/ui/molecules/Card/ServiceCard';

import styles from './Services.module.scss';

const Services = () => {
  return (
    <Box className={styles.services}>
      <ServiceCard
        icon="mdi:school"
        title="Cours de dance"
        description="Notre format de cours est de 3 heures pour un seul prix ! Nous offrons les niveaux Débutant Premiers pas, Débutant, Novice et Intermédiaire. C’est toujours gratuit pour les 12 ans et moins"
      />
      <ServiceCard
        title="Soirée de dance"
        icon="mdi:dance-ballroom"
        description="Notre format de cours est de 3 heures pour un seul prix ! Nous offrons les niveaux Débutant Premiers pas, Débutant, Novice et Intermédiaire. C’est toujours gratuit pour les 12 ans et moins"
      />
      <ServiceCard
        icon="mdi:party-popper"
        title="Partys Privés"
        description="Notre format de cours est de 3 heures pour un seul prix ! Nous offrons les niveaux Débutant Premiers pas, Débutant, Novice et Intermédiaire. C’est toujours gratuit pour les 12 ans et moins"
      />
      <ServiceCard
        icon="mdi:office-building"
        title="Teambuilding"
        description="Notre format de cours est de 3 heures pour un seul prix ! Nous offrons les niveaux Débutant Premiers pas, Débutant, Novice et Intermédiaire. C’est toujours gratuit pour les 12 ans et moins"
      />
      <ServiceCard
        icon="mdi:island"
        title="Événementiel"
        description="Notre format de cours est de 3 heures pour un seul prix ! Nous offrons les niveaux Débutant Premiers pas, Débutant, Novice et Intermédiaire. C’est toujours gratuit pour les 12 ans et moins"
      />
    </Box>
  );
};

export default Services;
