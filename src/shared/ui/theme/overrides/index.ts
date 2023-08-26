import { Theme } from '@mui/material';

// Button
import muiButton from './Button';
import muiLoadingButton from './LoadingButton';

// InputBase
import muiInputBase from './InputBase';
import muiInputLabel from './InputLabel';
import muiHelperText from './HelperText';
import muiInputAdornment from './InputAdornment';

export default function components(theme: Theme) {
  return {
    // Button
    MuiButton: muiButton(theme),
    MuiLoadingButton: muiLoadingButton(),

    // InputBase
    MuiInputBase: muiInputBase(theme),
    MuiInputLabel: muiInputLabel(theme),
    MuiFormHelperText: muiHelperText(theme),
    MuiInputAdornment: muiInputAdornment(theme)
  };
}
