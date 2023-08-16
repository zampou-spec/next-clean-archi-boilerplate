'use client';
import { User } from '~/domain/entities';
import { Iconify } from '~/shared/ui/styles';
import { AppBar, Toolbar, Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import UserMenu from '~/infrastructure/ui/molecules/UserMenu';
import LogoHeader from '~/infrastructure/ui/atoms/logo/header';

import styles from './Header.module.scss';

interface HeaderProps {
  user?: User;
}

const Header = ({ user }: HeaderProps) => {
  return (
    <AppBar color="secondary" position="fixed" className={styles.header}>
      <Toolbar disableGutters className={styles.headerContent}>
        <LogoHeader className={styles.login} />

        {user ? (
          <UserMenu user={user} onLogout={() => signOut()} />
        ) : (
          <div className={styles.auth}>
            <Button color="primary" variant="contained" onClick={() => signIn()} startIcon={<Iconify icon="mdi:login-variant" />}>
              Se connecter
            </Button>
            <Button
              color="primary"
              variant="contained"
              href='/auth/signin'
              startIcon={<Iconify icon="mdi:text-box-outline" />}
            >
              S'inscrire
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
