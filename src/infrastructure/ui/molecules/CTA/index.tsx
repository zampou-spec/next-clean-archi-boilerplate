import { Box, Button, Typography } from '@mui/material';

import Section from '~/infrastructure/ui/atoms/Section';
import classNames from 'classnames';
import styles from './CTA.module.scss';

type CTAProps = {
  className?: string | number | symbol | undefined;
};

const CTA = ({ className }: CTAProps) => (
  <Section className={classNames(styles.cta, { [className || '']: Boolean(className) })}>
    <Box className={styles.text}>
      <Typography variant="h4" className={styles.title}>
        Rejoignez notre communauté de danseurs
      </Typography>
      <Typography variant="body2" className={styles.subtitle}>
        Dansez avec nous et partagez notre passion pour la salsa cubaine.
      </Typography>
    </Box>
    <Button variant="contained" className={styles.action} href="/auth/signup">
      Rejoignez-nous maintenant
    </Button>
  </Section>
);

export default CTA;
