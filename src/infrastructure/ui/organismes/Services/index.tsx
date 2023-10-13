import { Box } from '@mui/material';
import ServiceCard from '~/infrastructure/ui/molecules/Card/ServiceCard';

import styles from './Services.module.scss';

const Services = () => (
  <Box className={styles.services}>
    <ServiceCard
      icon="mdi:school"
      title="Cours particuliers"
      description="Nous offrons des cours particuliers pour ceux qui souhaitent avoir un accompagnement spécifique au début  de leur apprentissage. Cependant, ne perdez pas de vue que l'objectif est de danser en soirée."
    />
    <ServiceCard
      title="Soirée de dance"
      icon="mdi:dance-ballroom"
      description="Notre format de cours est de 3 heures pour un seul prix ! Nous offrons les niveaux Débutant Premiers pas, Débutant, Novice et Intermédiaire. C’est toujours gratuit pour les 12 ans et moins"
    />
    <ServiceCard
      icon="mdi:party-popper"
      title="Partys Privés (Maraige, etc...)"
      description="Vous souhaitez épater vos invités le jour de votre mariage tout en partageant un moment unique de complicité. Nous vous offrons un programme sur mesure pour réaliser la danse vos rêves."
    />
    <ServiceCard
      icon="mdi:office-building"
      title="Teambuilding"
      description="Nous offrons des séances d'initiations à la salsa afin de renforcer la cohésion de vos équipes autours des valeur de cette danses : le partage, l'entraide,  la cohésion et le respect."
    />
    <ServiceCard
      icon="mdi:island"
      title="Événementiel"
      description="Notre format de cours est de 3 heures pour un seul prix ! Nous offrons les niveaux Débutant Premiers pas, Débutant, Novice et Intermédiaire. C’est toujours gratuit pour les 12 ans et moins"
    />
  </Box>
);

export default Services;
