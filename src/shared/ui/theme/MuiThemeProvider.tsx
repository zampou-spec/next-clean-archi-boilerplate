import theme from '.';
import deepmerge from 'deepmerge';
import { ThemeProvider, Theme } from '@mui/material/styles';

export interface ThemeProviderProps {
  outerTheme?: Partial<Theme>;
  children: React.ReactNode;
}

export const MuiThemeProvider = ({ outerTheme = {}, children }: ThemeProviderProps) => {
  const _theme = deepmerge(theme, outerTheme);

  return <ThemeProvider theme={_theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
