import { Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';

type ownerStateType = {
  ownerState: {
    color: string;
    disabled: boolean;
  };
};

const muiButton = (theme: Theme) => ({
  defaultProps: {
    size: 'medium',
    variant: 'contained',
    disableElevation: true
  },
  styleOverrides: {
    root: ({ ownerState }: ownerStateType) => ({
      fontWeight: 'bold',
      border: '2px solid',
      padding: '5px 15px',
      borderRadius: '4px',
      textTransform: 'uppercase',
      ...(ownerState?.disabled && {
        border: '2px solid !important'
      }),
      ...(ownerState?.disabled &&
        ownerState?.color === 'primary' && {
          background: `${alpha(theme.palette.primary.main, 0.8)} !important`,
          borderColor: `${alpha(theme.palette.primary.main, 0.2)} !important`
        }),
      ...(ownerState?.disabled &&
        ownerState?.color === 'error' && {
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
