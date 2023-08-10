import { ReactNode } from 'react';
import RootProvider from '~/infrastructure/providers';

interface RootLayoutProps {
  session: any;
  children: ReactNode;
}

const RootLayout = ({ children, session }: RootLayoutProps) => (
  <html lang="fr">
    <body>
      <RootProvider session={session}>{children}</RootProvider>
    </body>
  </html>
);

export default RootLayout;
