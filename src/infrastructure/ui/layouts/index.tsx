'use client';

import React, { ReactNode } from 'react';

import Footer from '~/infrastructure/ui/organismes/Footer';
import { User } from '~/domain/entities';
import dynamic from 'next/dynamic';
import styles from './Layout.module.scss';
import { useSession } from 'next-auth/react';
const Header = dynamic(() => import('~/infrastructure/ui/organismes/Header'), { ssr: false });

export type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { data: session } = useSession();

  return (
    <>
      <Header user={session?.user as User} />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
