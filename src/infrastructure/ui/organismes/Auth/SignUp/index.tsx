import Link from 'next/link';
import { Paper, Typography, Stack } from '@mui/material';
import LogoHeader from '~/infrastructure/ui/atoms/logo/header';
import SignUpForm from '~/infrastructure/ui/molecules/Form/Auth/SignUpForm';

import styles from './SignUp.module.scss';

const SignUp = () => {
  return (
    <Paper elevation={3} className={styles.signUp}>
      <Stack alignItems="center" className={styles.header}>
        <LogoHeader className={styles.logo} />
        <Typography variant="h5" className={styles.text}>
          Explorez un Monde de Possibilités
        </Typography>
      </Stack>
      <SignUpForm />
      <Stack alignItems="center" className={styles.footer}>
        <Typography variant="body2" className={styles.text}>
          Déjà membre ?{' '}
          <Link href="/auth/signin" passHref className={styles.login}>
            Se connecter ici
          </Link>
        </Typography>
      </Stack>
    </Paper>
  );
};

export default SignUp;
