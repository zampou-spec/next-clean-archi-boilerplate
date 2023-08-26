import { Theme } from '@mui/material';

const muiInputLabel = (theme: Theme) => {
  return {
    styleOverrides: {
      root: {
        zIndex: 0,
        fontSize: '13px',
        transform: 'none',
        textAlign: 'left',
        fontWeight: '500',
        position: 'initial',
        color: theme.palette.common.black,
        '&& + *': {
          marginTop: '4px'
        },
        focused: {
          '&$root': {
            color: theme.palette.text.primary
          }
        }
      },
      asterisk: {
        color: theme.palette.error.main
      }
    }
  };
};

export default muiInputLabel;
