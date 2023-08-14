import { Montserrat } from 'next/font/google';
import { red, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900']
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#b80042',
      dark: '#a6023d',
      light: pink[50]
    },
    secondary: {
      main: "#fff"
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          padding: '8px 10px',
          border: '2px solid #b80042'
        },
        outlined: {
          border: '2px solid',
          '&:hover': {
            border: '2px solid'
          }
        }
      },
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: '#fff',
            background: '#b80042',
            border: '2px solid #b80042',
            '&:hover': {
              color: '#b80042',
              background: 'transparent'
            }
          }
        }
      ]
    }
  }
});
