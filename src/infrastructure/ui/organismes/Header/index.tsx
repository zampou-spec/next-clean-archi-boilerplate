'use client';
import { User } from '~/domain/entities';
import { signOut } from 'next-auth/react';
import { Iconify } from '~/shared/ui/components/Iconify';
import UserMenu from '~/infrastructure/ui/molecules/UserMenu';
import LogoHeader from '~/infrastructure/ui/atoms/Logo/Header';
import { AppBar, Toolbar, Button, useMediaQuery } from '@mui/material';
import DesktopMenuList from '~/infrastructure/ui/molecules/List/DesktopMenuList';
import MobileMenuDrawer from '~/infrastructure/ui/molecules/Drawer/MobileMenuDrawer';
import MobileAuthDrawer from '~/infrastructure/ui/molecules/Drawer/MobileAuthDrawer';

import styles from './Header.module.scss';

interface HeaderProps {
  user?: User;
}

const Mobile = ({ user }: HeaderProps) => {
  return (
    <>
      <MobileMenuDrawer />
      <LogoHeader className={styles.logo} />
      {user ? <UserMenu user={user} onLogout={() => signOut()} /> : <MobileAuthDrawer />}
    </>
  );
};

const Desktop = ({ user }: HeaderProps) => {
  return (
    <>
      <LogoHeader className={styles.logo} />
      <DesktopMenuList />
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
    </>
  );
};

const Header = ({ user }: HeaderProps) => {
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <AppBar color="secondary" position="fixed" className={styles.header}>
      <Toolbar disableGutters className={styles.headerContent}>
        {matches ? <Desktop user={user} /> : <Mobile user={user} />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
