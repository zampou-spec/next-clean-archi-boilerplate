import Link from 'next/link';
import { Paper, Stack, Typography } from '@mui/material';
import LogoHeader from '~/infrastructure/ui/atoms/Logo/Header';
import LoginForm from '~/infrastructure/ui/molecules/Form/Auth/SignInForm';

import styles from './SignInTemplate.module.scss';

const SignInTemplate = () => (
  <div className={styles.signInTemplate}>
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
          Vous n&apos;avez pas de compte ?{' '}
          <Link href="/auth/signup" passHref className={styles.signUp}>
            S&apos;inscrire ici
          </Link>
        </Typography>
      </Stack>
    </Paper>
  </div>
);

export default SignInTemplate;
