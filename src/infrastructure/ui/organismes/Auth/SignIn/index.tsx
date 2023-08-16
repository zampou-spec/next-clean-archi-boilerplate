import Link from 'next/link';
import { Paper, Typography, Stack, Box } from '@mui/material';
import LogoHeader from '~/infrastructure/ui/atoms/logo/header';
import LoginForm from '~/infrastructure/ui/molecules/Form/Auth/SignInForm';

import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <Paper elevation={3} className={styles.signIn}>
      <Stack alignItems="center" className={styles.header}>
        <LogoHeader className={styles.logo} />
        <Typography variant="h5" className={styles.text}>
          Explorez un Monde de Possibilités
        </Typography>
      </Stack>
      <LoginForm />
      <Stack alignItems="center" className={styles.footer}>
        <Typography variant="body2" className={styles.text}>
          Vous n'avez pas de compte ?{' '}
          <Link href="/auth/signup" passHref className={styles.signin}>
            S'inscrire ici
          </Link>
        </Typography>
      </Stack>
    </Paper>
  );
};

export default SignIn;
