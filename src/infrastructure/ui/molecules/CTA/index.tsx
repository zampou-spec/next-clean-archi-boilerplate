import { Box, Button, Typography } from '@mui/material';

import styles from './CTA.module.scss';
import Section from '../../atoms/Section';
import classNames from 'classnames';

type CTAProps = {
  className?: string | number | symbol | undefined;
};

const CTA = ({ className }: CTAProps) => {
  return (
    <Section className={classNames(styles.cta, { [className || '']: Boolean(className) })}>
      <Box className={styles.text}>
        <Typography variant="h4" className={styles.title}>
          Rejoignez notre communauté de danseurs
        </Typography>
        <Typography variant="body2" className={styles.subtitle}>
          Dansez avec nous et faites partie de notre communauté passionnée de danseurs.
        </Typography>
      </Box>
      <Button variant="contained" className={styles.action}>
        Rejoignez-nous maintenant
      </Button>
    </Section>
  );
};

export default CTA;
