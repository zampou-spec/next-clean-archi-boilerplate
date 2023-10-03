'use client';
import { MouseEvent } from 'react';
import { Iconify } from '../Iconify';
import { IconButton } from '@mui/material';
import { forwardRef, useState } from 'react';
import { TextField, TextFieldProps } from '../TextField';

export const PasswordField = forwardRef<unknown, TextFieldProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPasswordChange = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...props}
      ref={ref}
      type={showPassword ? 'text' : 'password'}
      inputProps={{ autoComplete: 'news-password' }}
      endAdornment={
        <IconButton
          sx={{
            right: '10px',
            padding: '4px',
            position: 'absolute',
            textTransform: 'uppercase',
            background: 'transparent'
          }}
          onClick={handleShowPasswordChange}
          onMouseDown={handleMouseDownPassword}
          aria-label="toggle password visibility"
        >
          {showPassword ? <Iconify icon="mdi:eye-closed" /> : <Iconify icon="mdi:eye-outline" />}
        </IconButton>
      }
    />
  );
});

export default PasswordField;
PasswordField.displayName = 'PasswordField';
