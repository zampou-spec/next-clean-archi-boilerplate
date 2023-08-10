'use client';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme, globalStyles } from '~/shared/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';

interface RootProviderProps {
  session: any;
  children: ReactNode;
}

const RootProvider = ({ children, session }: RootProviderProps) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};

export default RootProvider;
