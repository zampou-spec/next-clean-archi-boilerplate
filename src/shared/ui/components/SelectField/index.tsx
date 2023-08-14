import { forwardRef } from 'react';
import { ActionMeta } from 'react-select';
import { getIn, FieldProps } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MuiFormHelperText from '@mui/material/FormHelperText';
import ReactSelect, { ReactSelectProps } from './ReactSelect';

export const SelectField = forwardRef(
  (
    {
      id,
      label,
      helperText,
      error,
      fullWidth,
      field,
      form: { touched, setFieldValue, isSubmitting, errors },
      options,
      onChange,
      isDisabled,
      onBlur,
      value,
      ...selectProps
    }: ReactSelectProps & FieldProps,
    ref: any
  ) => {
    const fieldErrorMessage = getIn(errors, field?.name);
    const hasError: boolean = getIn(touched, field?.name) && !!fieldErrorMessage;

    const handleChange = (selectedOption: any, actionMeta: ActionMeta<unknown>) => {
      if (!onChange) {
        setFieldValue(field.name, selectedOption?.value);
      } else {
        onChange(selectedOption, actionMeta);
      }
    };

    const getValue = () => {
      if (options) {
        return (options || []).find((option: any) => option.value === field.value || option.id === field.value);
      }

      if (value) {
        return value;
      }

      return undefined;
    };

    return (
      <FormControl id={field?.name} variant="standard" error={error || hasError} fullWidth={fullWidth}>
        {label && (
          <InputLabel
            sx={{
              position: 'inherit'
            }}
            htmlFor={field?.name}
          >
            {label}
          </InputLabel>
        )}
        <ReactSelect
          error={hasError}
          {...field}
          {...selectProps}
          id={field?.name}
          inputId={field?.name}
          value={getValue()}
          onChange={handleChange}
          instanceId={field?.name}
          onBlur={field.onBlur(field.name)}
          options={options}
          ref={ref}
        />
        <MuiFormHelperText error={hasError}>{hasError ? fieldErrorMessage : helperText}</MuiFormHelperText>
      </FormControl>
    );
  }
);

export default SelectField;
