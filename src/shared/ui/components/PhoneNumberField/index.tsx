'use client';
import 'react-phone-number-input/style.css';
import './phone-input.css';

import { Component, forwardRef } from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import PhoneInput from 'react-phone-number-input';

export type PhoneNumberFieldProps = {
  field: Component;
  onChange: (value: undefined) => void;
};

const PhoneNumberField = forwardRef(({ field, ...props }: PhoneNumberFieldProps, ref) => (
  <PhoneInput
    {...props}
    field={field}
    inputRef={ref}
    limitMaxLength
    inputComponent={PhoneNumberInput}
    style={{ width: '100% !important' }}
  />
));

export default PhoneNumberField;
PhoneNumberField.displayName = 'PhoneNumberField';
