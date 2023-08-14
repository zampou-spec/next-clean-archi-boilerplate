import React, { ReactNode } from 'react';
import { FieldProps, getIn } from 'formik';
import BootstrapInput from '../BootstrapInput';
import FormControl from '@mui/material/FormControl';
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel';
import { FormHelperText as MuiFormHelperText, InputBaseProps } from '@mui/material';

export interface TextFieldProps extends InputBaseProps {
  helperText?: any;
  label?: ReactNode;
  controlId?: string;
  inputLabelProps?: InputLabelProps;
}

export const TextField = React.forwardRef(
  (
    {
      label,
      controlId,
      helperText,
      inputLabelProps,
      error,
      required,
      fullWidth,
      disabled,
      onBlur,
      field,
      form,
      ...rest
    }: Partial<FieldProps> & TextFieldProps,
    ref
  ) => {
    const fieldErrorMessage = field?.name && getIn(form?.errors, field?.name);
    const hasError = error ?? (field?.name && !!getIn(form?.touched, field?.name) && !!fieldErrorMessage);

    return (
      <FormControl error={!!hasError} fullWidth={fullWidth} id={controlId} required={required}>
        {label && (
          <InputLabel {...inputLabelProps} shrink data-testid="input-label">
            {label}
          </InputLabel>
        )}
        <BootstrapInput
          // disabled={disabled ?? form?.isSubmitting}
          {...rest}
          {...field}
          onBlur={
            onBlur ??
            ((e: React.FocusEvent<HTMLInputElement>) => {
              field?.onBlur(e ?? field?.name);
            })
          }
          ref={ref}
          inputRef={ref}
          error={!!hasError}
          fullWidth={fullWidth}
          data-testid="input-field"
        />
        <MuiFormHelperText error={!!hasError} data-testid="helper-text">
          {hasError ? fieldErrorMessage : helperText}
        </MuiFormHelperText>
      </FormControl>
    );
  }
);

export default TextField;
