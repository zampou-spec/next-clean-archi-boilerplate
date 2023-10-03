'use client';
import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';
import { User } from '~/domain/entities';
import { useSession } from 'next-auth/react';
const Header = dynamic(() => import('~/infrastructure/ui/organismes/Header'), { ssr: false });

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
