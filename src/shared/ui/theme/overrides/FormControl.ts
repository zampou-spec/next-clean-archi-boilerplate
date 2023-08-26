import { Components, inputBaseClasses, Theme } from '@mui/material';

export default function FormControl(): Components<Omit<Theme, 'component'>>['MuiFormControl'] {
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
