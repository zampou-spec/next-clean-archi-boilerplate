import { Components, Theme, alpha } from '@mui/material';

const muiLoadingButton = (theme: Theme): Components<Omit<Theme, 'component'>>['MuiLoadingButton'] => ({
  defaultProps: {
    size: 'medium',
    variant: 'contained',
    disableElevation: true
  },
  styleOverrides: {
    root: ({ color, variant, size, disabled }: any) => ({
      '&.MuiButton-text': {
        '& .MuiLoadingButton-startIconPendingStart': {
          marginLeft: 0
        },
        '& .MuiLoadingButton-endIconPendingEnd': {
          marginRight: 0
        }
      }
    })
  }
});

export default muiLoadingButton;
