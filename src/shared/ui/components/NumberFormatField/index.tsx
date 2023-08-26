'use client';
import React from 'react';
import { FieldProps, getIn } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import type { TextFieldProps } from '../TextField';
import FormControl from '@mui/material/FormControl';
import { NumericFormatProps } from 'react-number-format';
import { ReactNumericFormat } from './ReactNumberFormat';
import { FormHelperText as MuiFormHelperText } from '@mui/material';

const NumericFormatField = React.forwardRef(
  (
    {
      form,
      field,
      label,
      error,
      onBlur,
      required,
      onChange,
      controlId,
      fullWidth,
      helperText,
      defaultValue,
      inputLabelProps,
      ...rest
    }: Partial<FieldProps> & NumericFormatProps<TextFieldProps>,
    ref
  ) => {
    const fieldErrorMessage = field?.name && getIn(form?.errors, field?.name);
    const hasError = error ?? (field?.name && !!getIn(form?.touched, field?.name) && !!fieldErrorMessage);

    return (
      <FormControl error={!!hasError} fullWidth={fullWidth} id={controlId} required={required} sx={{ marginTop: '10px' }}>
        {label && (
          <InputLabel {...inputLabelProps} shrink data-testid="input-label">
            {label}
          </InputLabel>
        )}
        <ReactNumericFormat
          {...field}
          {...rest}
          fullWidth={fullWidth}
          onBlur={
            onBlur ??
            ((e: React.FocusEvent<HTMLInputElement>) => {
              field?.onBlur(e ?? field?.name);
            })
          }
          inputRef={ref}
          onChange={onChange}
          error={Boolean(hasError)}
          defaultValue={defaultValue}
        />
        <MuiFormHelperText error={!!hasError} data-testid="helper-text">
          {hasError ? fieldErrorMessage : helperText}
        </MuiFormHelperText>
      </FormControl>
    );
  }
);

export default NumericFormatField;
NumericFormatField.displayName = 'NumericFormatField';
