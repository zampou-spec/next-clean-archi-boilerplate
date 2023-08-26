import { parsePhoneNumber } from 'react-phone-number-input';
import locale from 'react-phone-number-input/locale/fr.json';

export const getCountryName = (phone: unknown) => {
  const countryCode = parsePhoneNumber(`${phone}`)?.country || '';
  const country = countryCode !== '' ? locale[countryCode] : '';
  return country;
};
