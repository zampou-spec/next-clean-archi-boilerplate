import Link from 'next/link';
import styles from './SignUpTemplate.module.scss';
import { Paper, Stack, Typography } from '@mui/material';
import LogoHeader from '~/infrastructure/ui/atoms/Logo/Header';
import SignUpForm from '~/infrastructure/ui/molecules/Form/Auth/SignUpForm';

const SignUpTemplate = () => (
  <div className={styles.signUpTemplate}>
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
          <Link href="/auth/signin" passHref className={styles.signIn}>
            Se connecter ici
          </Link>
        </Typography>
      </Stack>
    </Paper>
  </div>
);

export default SignUpTemplate;
