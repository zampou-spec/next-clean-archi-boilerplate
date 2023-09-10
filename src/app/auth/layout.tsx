import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const cookieStore = cookies();

  if (cookieStore.has('next-auth.session-token')) {
    redirect('/dashboard');
  }

  return <>{children}</>;
};

export default Layout;
