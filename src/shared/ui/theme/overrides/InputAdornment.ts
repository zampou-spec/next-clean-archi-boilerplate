import { Components, Theme } from '@mui/material';

const muiInputAdornment = (theme: Theme): Components<Omit<Theme, 'component'>>['MuiInputAdornment'] => {
  return {
    styleOverrides: {
      root: {
        button: {
          marginRight: 0,
          color: theme.palette.primary.main
        }
      }
    }
  };
};

export default muiInputAdornment;
