import React, { ReactNode } from 'react';
import Header from '~/infrastructure/ui/organismes/header';

import styles from './Layout.module.scss'

export type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;
