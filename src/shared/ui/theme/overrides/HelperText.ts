import { Theme } from '@mui/material';

const muiHelperText = (theme: Theme) => {
  return {
    styleOverrides: {
      root: {
        fontSize: '13px',
        height: '19.5px',
        fontWeight: '500',
        marginLeft: '12px',
        marginBottom: '-20px !important'
      },
      error: {
        color: theme.palette.error.main
      }
    }
  };
};

export default muiHelperText;
