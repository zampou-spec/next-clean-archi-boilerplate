'use client';
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
      <Header user={session?.user as User} />
      <main className={styles.layout}>{children}</main>
    </>
  );
};

export default Layout;
