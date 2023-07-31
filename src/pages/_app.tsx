import { AppProps } from "next/app";
import theme from "shared/styles/theme";
import { ThemeProvider } from "@mui/material/styles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
