import 'react-phone-number-input/style.css';
import './phone-input.css';

import { forwardRef } from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import locale from 'react-phone-number-input/locale/fr.json';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';

const getCountryName = (phone: any) => {
  const countryCode = parsePhoneNumber(`${phone}`)?.country || '';
  const country = countryCode !== '' ? locale[countryCode] : '';
  return country;
};

const PhoneNumberField = forwardRef(({ ref: _ref, field, form, onChange, ...props }: any, ref) => (
  <PhoneInput
    {...props}
    form={form}
    field={field}
    inputRef={ref}
    limitMaxLength
    inputComponent={PhoneNumberInput}
    style={{ width: '100% !important' }}
    onChange={(value) => {
      const phone = value || '';
      const country = getCountryName(value);
      onChange({ phone, country });
    }}
  />
));

export default PhoneNumberField;
