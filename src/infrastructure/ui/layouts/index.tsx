'use client';
// import { NoSsr } from '@mui/material';
import React, { ReactNode } from 'react';
// import { User } from '~/domain/entities';
// import { useSession } from 'next-auth/react';
// import MainHeader from '~/infrastructure/ui/organismes/MainHeader';

import styles from './Layout.module.scss';

export type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // const { data: session } = useSession();

  return (
    <>
      {/* <NoSsr>
        <MainHeader user={session?.user as User} />
      </NoSsr> */}
      <main className={styles.layout}>{children}</main>
    </>
  );
};

export default Layout;
