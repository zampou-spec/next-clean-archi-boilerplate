'use client';
import React, { forwardRef } from 'react';
import BootstrapInput from '../BootstrapInput';
import { InputBaseProps } from '@mui/material';
import { NumericFormatProps, NumericFormat } from 'react-number-format';

export const ReactNumericFormat = forwardRef<HTMLInputElement, NumericFormatProps<InputBaseProps>>(({ error, ...props }, ref) => (
  <NumericFormat customInput={BootstrapInput} {...props} inputRef={ref} error={error} />
));

ReactNumericFormat.displayName = 'ReactNumericFormat';