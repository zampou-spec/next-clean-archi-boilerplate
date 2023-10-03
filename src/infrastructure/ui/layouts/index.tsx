'use client';
import { NoSsr } from '@mui/material';
import React, { ReactNode } from 'react';
import { User } from '~/domain/entities';
import { useSession } from 'next-auth/react';
import Header from '~/infrastructure/ui/organismes/Header';

import styles from './Layout.module.scss';

export type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { data: session } = useSession();

  return (
    <>
      <NoSsr>
        <Header user={session?.user as User} />
      </NoSsr>
      <main className={styles.layout}>{children}</main>
    </>
  );
};

export default Layout;
