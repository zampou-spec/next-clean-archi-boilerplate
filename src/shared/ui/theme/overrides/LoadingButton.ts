const muiLoadingButton = () => ({
  defaultProps: {
    size: 'medium',
    variant: 'contained',
    disableElevation: true
  },
  styleOverrides: {
    root: () => ({
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
