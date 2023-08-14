'use client';
import { Iconify } from '~/shared/ui/styles';
import { User } from '~/domain/entities';
import { AppBar, Toolbar, Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import UserMenu from '~/infrastructure/ui/molecules/UserMenu';
import LogoHeader from '~/infrastructure/ui/atoms/logo/header';

import styles from './Header.module.scss';

const Header = () => {
  const { data: session } = useSession();

  return (
    <AppBar color="secondary" position="fixed" className={styles.header}>
      <Toolbar disableGutters className={styles.headerContent}>
        <LogoHeader />

        {session?.user ? (
          <UserMenu user={session?.user as User} onLogout={() => signOut()} />
        ) : (
          <div className={styles.auth}>
            <Button
              color="primary"
              disableElevation
              variant="contained"
              onClick={() => signIn()}
              startIcon={<Iconify icon="mdi:account" />}
            >
              Se connecter
            </Button>
            <Button
              color="primary"
              disableElevation
              variant="contained"
              href="/auth/signin"
              startIcon={<Icon icon="mdi:account" />}
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
