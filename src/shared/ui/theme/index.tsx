import components from './overrides';
import { frFR } from '@mui/material/locale';
import pxToRem from '~/shared/utils/pxToRem';
import { Montserrat } from 'next/font/google';
import { pink, red } from '@mui/material/colors';
import { Shadows, createTheme, Components } from '@mui/material/styles';
import { responsiveFontSizes } from '~/shared/utils/responsiveFontSizes';

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900']
});

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#b80042',
        dark: '#a6023d',
        light: pink[50]
      },
      secondary: {
        main: '#fff'
      },
      success: {
        light: '#AAF27F',
        main: '#54D62C',
        dark: '#229A16'
      },
      error: {
        light: '#FFA48D',
        main: red[900],
        dark: '#B72136'
      },
      text: {
        primary: '#555555',
        secondary: '#C2C2C2'
      },
      warning: {
        light: '#FFE16A',
        main: '#FFC107',
        dark: '#B78103'
      },
      action: {
        disabled: '#f8f8f8'
      }
    },
    typography: {
      fontSize: 14,
      fontFamily: montserrat.style.fontFamily,
      fontWeightRegular: 400,
      h1: {
        fontWeight: 700,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 })
      },
      h2: {
        fontWeight: 700,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 })
      },
      h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
      },
      h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
      },
      h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
      },
      h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
      },
      subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
      },
      subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
      },
      body1: {
        lineHeight: 1.5,
        fontWeight: 400,
        fontSize: pxToRem(16)
      },
      body2: {
        lineHeight: 1.5,
        fontSize: pxToRem(14)
      },
      caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
      },
      overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: 'uppercase'
      },
      button: {
        fontWeight: 600,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: 'none'
      },
      allVariants: {
        color: '#000'
      }
    },
    shadows: [
      'none',
      `rgba(80, 80, 80, 0.02) 0px 8px 24px`,
      'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      ...Array(23).fill('')
    ] as Shadows
  },
  frFR
);

theme.components = components(theme) as Components;

export default theme;
