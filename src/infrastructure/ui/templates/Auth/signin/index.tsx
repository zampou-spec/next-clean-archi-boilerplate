'use client';
import { signIn } from 'next-auth/react';
import { Button, Paper, TextField } from '@mui/material';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

import styles from './SigninTemplate.module.scss';

const SigninTemplate = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    return await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard'
    });
  };

  return (
    <div className={styles.signinTemplate}>
      <Paper elevation={3} className={styles.signinBox}>
        <form method="POST" onSubmit={handleSubmit}>
          <TextField
            size="small"
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={email}
            id="login-email"
            autoComplete="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <TextField
            size="small"
            label="Mot de passse"
            name="password"
            type="password"
            variant="outlined"
            value={password}
            id="login-password"
            autoComplete="current-password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <Button size="small" type="submit" variant="contained">
            Connexion
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default SigninTemplate;
