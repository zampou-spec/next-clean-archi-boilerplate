import { InputBase } from '@mui/material';
import type { InputBaseProps } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import type { StyledComponent } from '@emotion/styled';

const BootstrapInput: StyledComponent<{ xs?: 'xs' } & InputBaseProps> = styled(InputBase)(({ theme, error, endAdornment }) => {
  return {
    '&': {
      margin: 0
    },
    '& .MuiInputBase-input': {
      fontSize: 14,
      borderRadius: 4,
      fontWeight: 500,
      position: 'relative',
      backgroundColor: '#fcfcfb',
      color: theme.palette.common.black,
      border: error ? `1px solid ${theme.palette.error.main}` : '1px solid #ced4da',
      ...(endAdornment ? { padding: '8px 55px 8px 10px!important' } : { padding: '8px 12px' }),
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
      '&:focus': {
        boxShadow: error
          ? `${alpha(theme.palette.error.main, 0.25)} 0 0 0 0.2rem`
          : `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: error ? theme.palette.error.main : theme.palette.primary.main
      }
    },
    '& .Mui-disabled': {
      background: '#ffffff80'
    },
    '& > input.MuiInputBase-inputSizeSmall': {
      padding: '8.5px 14px'
    },
    '& > input[xs]': {
      padding: '3px 10px',
      fontSize: 'small'
    },
    '&[xs] .MuiSelect-select': {
      padding: '1px 10px',
      fontSize: 'small'
    }
  };
});

export default BootstrapInput;
