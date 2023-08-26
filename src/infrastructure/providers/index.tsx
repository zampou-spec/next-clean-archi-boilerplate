'use client';
import { ReactNode } from 'react';
import { theme } from '~/shared/ui/theme';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import { globalStyles } from '~/shared/ui/styles';
import { ThemeProvider } from '@mui/material/styles';
import { SessionProviderProps } from 'next-auth/react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { queryClient } from '~/shared/settings/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { toastOptions } from '~/shared/settings/hot-toast-setup';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface RootProviderProps {
  children: ReactNode;
  session?: SessionProviderProps['session'] | undefined;
}

const RootProvider = ({ children, session }: RootProviderProps) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          {children}
          <ReactQueryDevtools />
          <Toaster toastOptions={toastOptions} />
        </QueryClientProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default RootProvider;
