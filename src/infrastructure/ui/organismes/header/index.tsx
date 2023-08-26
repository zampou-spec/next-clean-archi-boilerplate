'use client';
import { User } from '~/domain/entities';
import { signIn, signOut } from 'next-auth/react';
import { AppBar, Toolbar, Button } from '@mui/material';
import UserMenu from '~/infrastructure/ui/molecules/UserMenu';
import LogoHeader from '~/infrastructure/ui/atoms/logo/header';

import styles from './Header.module.scss';
import { Iconify } from '~/shared/ui/components';

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
            <Button variant="contained" onClick={() => signIn()} startIcon={<Iconify icon="mdi:login-variant" />}>
              Se connecter
            </Button>
            <Button variant="contained" href="/auth/signin" startIcon={<Iconify icon="mdi:text-box-outline" />}>
              S&apos;inscrire
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
