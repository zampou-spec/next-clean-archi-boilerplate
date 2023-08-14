import { Theme } from '@mui/material';

// Button
import muiButton from './Button';
import muiLoadingButton from './LoadingButton';

// InputBase
import muiInputLabel from './InputLabel';
import muiHelperText from './HelperText';
import muiInputAdornment from './InputAdornment';
import muiInputBase from './InputBase';

export default function components(theme: Theme): any {
  return {
    // Button
    MuiButton: muiButton(theme),
    MuiLoadingButton: muiLoadingButton(theme),

    // InputBase
    MuiInputBase: muiInputBase(theme),
    MuiInputLabel: muiInputLabel(theme),
    MuiFormHelperText: muiHelperText(theme),
    MuiInputAdornment: muiInputAdornment(theme)
  };
}
