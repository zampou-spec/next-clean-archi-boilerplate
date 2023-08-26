import { ReactNode } from 'react';
import RootProvider from '~/infrastructure/providers';
import { SessionProviderProps } from 'next-auth/react';

interface RootLayoutProps {
  children: ReactNode;
  session: SessionProviderProps['session'];
}

const RootLayout = ({ children, session }: RootLayoutProps) => (
  <html lang="fr">
    <body>
      <RootProvider session={session}>{children}</RootProvider>
    </body>
  </html>
);

export default RootLayout;
