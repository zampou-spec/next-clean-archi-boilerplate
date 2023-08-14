import { Components, Theme, alpha } from '@mui/material';

const muiButton = (theme: Theme): Components<Omit<Theme, 'component'>>['MuiButton'] => ({
  defaultProps: {
    size: 'medium',
    variant: 'contained',
    disableElevation: true
  },
  styleOverrides: {
    root: ({ ownerState: { color, variant, size, disabled } }) => ({
      fontWeight: 'bold',
      border: '2px solid',
      padding: '5px 10px',
      borderRadius: '4px',
      ...(disabled && {
        border: '2px solid !important'
      }),
      ...(disabled &&
        color === 'primary' && {
          background: `${alpha(theme.palette.primary.main, 0.8)} !important`,
          borderColor: `${alpha(theme.palette.primary.main, 0.2)} !important`
        }),
      ...(disabled &&
        color === 'error' && {
          background: `${alpha(theme.palette.error.main, 0.8)} !important`,
          borderColor: `${alpha(theme.palette.error.main, 0.2)} !important`
        })
    }),
    text: {
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      color: theme.palette.primary.main
    },
    textError: {
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      color: theme.palette.error.main
    },
    hover: {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      '&:hover': {
        background: 'transparent',
        color: theme.palette.primary.main
      }
    },
    hoverError: {
      color: theme.palette.common.white,
      background: theme.palette.error.main,
      borderColor: theme.palette.error.main,
      '&:hover': {
        background: 'transparent',
        color: theme.palette.error.main
      }
    },
    outlined: {
      border: '2px solid',
      '&:hover': {
        border: '2px solid'
      }
    },
    outlinedError: {
      background: 'transparent',
      color: theme.palette.error.main,
      borderColor: theme.palette.error.main,
      '&:hover': {
        borderColor: theme.palette.error.main
      }
    },
    contained: {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main
    },
    containedError: {
      color: theme.palette.common.white,
      background: theme.palette.error.main,
      borderColor: theme.palette.error.main
    }
  }
});

export default muiButton;
