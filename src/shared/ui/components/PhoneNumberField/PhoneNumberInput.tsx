'use client';
import { FieldProps, getIn } from 'formik';
import { ReactNode, forwardRef } from 'react';
import { TextFieldProps } from '../TextField';
import BootstrapInput from '../BootstrapInput';
import { FormControl, FormHelperText, InputLabel, InputLabelProps } from '@mui/material';

export type FieldBaseProps = {
  controlId: string;
  required: boolean;
  placeholder: string;
  name: string;
  helperText: string;
  label: string | ReactNode;
  xs?: 'xs';
  inputLabelProps: InputLabelProps;
};

const PhoneNumberInput = forwardRef<unknown, TextFieldProps & FieldProps>((props, ref) => {
  const { label, controlId, inputLabelProps, helperText, error, field, form, fullWidth, ...rest } = props;

  const fieldErrorMessage = field?.name && getIn(form?.errors, field?.name);
  const hasError = error ?? (field?.name && !!getIn(form?.touched, field?.name) && !!fieldErrorMessage);

  return (
    <FormControl fullWidth={fullWidth} id={controlId} error={!!hasError}>
      {label && (
        <InputLabel {...inputLabelProps} shrink>
          {label}
        </InputLabel>
      )}
      <BootstrapInput
        {...rest}
        inputRef={ref}
        fullWidth={fullWidth}
        error={!!hasError}
        inputMode="numeric"
        onBlur={field?.onBlur(field?.name)}
      />
      <FormHelperText error={!!hasError} data-testid="helper-text">
        {hasError ? fieldErrorMessage : helperText}
      </FormHelperText>
    </FormControl>
  );
});

export default PhoneNumberInput;
PhoneNumberInput.displayName = 'PhoneNumberInput';
