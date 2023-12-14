import { Paper, Stack, Typography } from '@mui/material';

import ForgotPasswordForm from '~/infrastructure/ui/molecules/Form/Auth/ForgotPasswordForm';
import Link from 'next/link';
import LogoHeader from '~/infrastructure/ui/atoms/Logo/Header';
import styles from './ForgotPasswordTemplate.module.scss';

const ForgotPasswordTemplate = () => (
  <div className={styles.forgotPasswordTemplate}>
    <Paper elevation={3} className={styles.forgotPassword}>
      <Stack alignItems="center" className={styles.header}>
        <LogoHeader className={styles.logo} />
        <Typography variant="h5" className={styles.text}>
          Explorez un Monde de Possibilités
        </Typography>
      </Stack>
      <ForgotPasswordForm />
      <Stack alignItems="center" className={styles.footer}>
        <Typography variant="body2" className={styles.text}>
          Déjà membre ?{' '}
          <Link href="/auth/signin" passHref className={styles.signIn}>
            Se connecter ici
          </Link>
        </Typography>
      </Stack>
    </Paper>
  </div>
);

export default ForgotPasswordTemplate;
