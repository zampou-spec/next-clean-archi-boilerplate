'use client';
import { User } from '~/domain/entities';
import { signOut } from 'next-auth/react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Iconify } from '~/shared/ui/components/Iconify';
import UserMenu from '~/infrastructure/ui/molecules/UserMenu';
import LogoHeader from 'src/infrastructure/ui/atoms/Logo/Header';

import styles from './Header.module.scss';

interface HeaderProps {
  user?: User;
}

// Recommit moi ça

const Header = ({ user }: HeaderProps) => {
  return (
    <AppBar color="secondary" position="fixed" className={styles.header}>
      <Toolbar disableGutters className={styles.headerContent}>
        <LogoHeader className={styles.login} />
        {user ? (
          <UserMenu user={user} onLogout={() => signOut()} />
        ) : (
          <div className={styles.auth}>
            <Button variant="contained" href="/auth/signin" startIcon={<Iconify icon="mdi:login-variant" />}>
              Se connecter
            </Button>
            <Button variant="contained" href="/auth/signup" startIcon={<Iconify icon="mdi:text-box-outline" />}>
              S&apos;inscrire
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
