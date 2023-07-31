import { AppProps } from 'next/app';
import { theme, globalStyles } from 'shared/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
