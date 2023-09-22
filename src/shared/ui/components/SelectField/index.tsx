'use client';
import { ActionMeta } from 'react-select';
import { getIn, FieldProps } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MuiFormHelperText from '@mui/material/FormHelperText';
import ReactSelect, { ReactSelectProps } from './ReactSelect';

export type optionType = {
  id?: number | string;
  value: number | string | object;
  label: number | string;
};

const isOptionType = (obj: object): obj is optionType => {
  return 'value' in obj && 'label' in obj;
};

export const SelectField = ({
  id,
  label,
  helperText,
  error,
  fullWidth,
  field,
  form: { touched, setFieldValue, errors },
  options,
  onChange,
  isDisabled,
  value,
  defaultValue,
  ...selectProps
}: ReactSelectProps & FieldProps) => {
  const fieldErrorMessage = getIn(errors, field?.name);
  const hasError: boolean = getIn(touched, field?.name) && !!fieldErrorMessage;

  const handleChange = (selectedOption: unknown, actionMeta: ActionMeta<unknown>) => {
    if (!onChange) {
      if (isOptionType(selectedOption as object)) {
        setFieldValue(field.name, (selectedOption as optionType).value);
      }
    } else {
      onChange(selectedOption, actionMeta);
    }
  };

  const getValue = () => {
    if (options) {
      return ((options as optionType[]) || []).find((option) => option.value === field.value || option.id === field.value);
    }

    if (value) {
      return value;
    }

    return undefined;
  };

  return (
    <FormControl id={field?.name || id} variant="standard" error={error || hasError} fullWidth={fullWidth}>
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
        defaultValue={defaultValue}
        error={hasError}
        {...field}
        {...selectProps}
        id={field?.name}
        inputId={field?.name || id}
        value={getValue()}
        onChange={handleChange}
        instanceId={field?.name}
        onBlur={field.onBlur(field.name)}
        options={options}
        isDisabled={isDisabled}
      />
      <MuiFormHelperText error={Boolean(hasError)}>{hasError ? fieldErrorMessage : helperText}</MuiFormHelperText>
    </FormControl>
  );
};

export default SelectField;
SelectField.displayName = 'SelectField';
