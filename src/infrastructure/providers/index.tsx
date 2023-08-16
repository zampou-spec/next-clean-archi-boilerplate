'use client';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { theme } from '~/shared/ui/theme';
import { SessionProvider } from 'next-auth/react';
import { globalStyles } from '~/shared/ui/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';

interface RootProviderProps {
  session?: any;
  children: ReactNode;
}

const RootProvider = ({ children, session }: RootProviderProps) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {children}
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default RootProvider;
