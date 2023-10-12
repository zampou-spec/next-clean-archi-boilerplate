'use client';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import { globalStyles } from '~/shared/ui/styles';
import { SessionProviderProps } from 'next-auth/react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { queryClient } from '~/shared/settings/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { toastOptions } from '~/shared/settings/hot-toast-setup';
import MuiThemeProvider from '~/shared/ui/theme/MuiThemeProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import 'react-alice-carousel/lib/alice-carousel.css';

interface RootProviderProps {
  children: ReactNode;
  session?: SessionProviderProps['session'] | undefined;
}

const RootProvider = ({ children, session }: RootProviderProps) => {
  return (
    <SessionProvider session={session}>
      <MuiThemeProvider>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          {children}
          <ReactQueryDevtools />
          <Toaster toastOptions={toastOptions} />
        </QueryClientProvider>
      </MuiThemeProvider>
    </SessionProvider>
  );
};

export default RootProvider;
