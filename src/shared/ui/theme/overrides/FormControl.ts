import { Components, inputBaseClasses, Theme, inputLabelClasses } from '@mui/material';

export default function FormControl(_theme: Theme): Components<Omit<Theme, 'component'>>['MuiFormControl'] {
  return {
    styleOverrides: {
      root: () => ({
        [`& .${inputBaseClasses.root}`]: {
          marginTop: 0
        }
      })
    }
  };
}
