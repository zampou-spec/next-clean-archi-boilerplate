import pxToRem from '~/shared/utils/pxToRem';
import { alpha } from '@mui/material/styles';
import { InputBaseProps, Theme } from '@mui/material';

const muiInputBase = (theme: Theme) => {
  return {
    MuiInputBase: {
      defaultProps: {
        size: 'medium'
      },
      styleOverrides: {
        root: ({ ownerState }: { ownerState: InputBaseProps }) => ({
          fontWeight: 500,
          fontSize: pxToRem(14),
          borderRadius: pxToRem(8),
          position: 'relative',
          backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
          border: ownerState.error ? `1px solid ${theme.palette.error.main}` : '1px solid #ced4da',
          padding: `${pxToRem(10)} ${pxToRem(12)}`,
          transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
          '&:focus-within': {
            borderColor: ownerState.error ? `1px solid ${theme.palette.error.main}` : theme.palette.primary.main,
            boxShadow: ownerState.error
              ? `${alpha(theme.palette.error.main, 0.25)} 0 0 0 0.2rem`
              : `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`
          },
          '& .MuiInputBase-inputSizeSmall': {
            paddingBottom: 0
          }
        })
      }
    }
  };
};

export default muiInputBase;
