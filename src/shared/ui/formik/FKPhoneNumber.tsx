import { TextFieldProps } from '@mui/material/TextField';
import { Field } from 'formik';
import { FieldAttributes } from 'formik/dist/Field';
import { Props } from 'react-phone-number-input';
import PhoneNumberField from '../components/PhoneNumberField';

type FormikTextFieldProps = Props<Omit<FieldAttributes<TextFieldProps>, 'component' | 'defaultChecked'>>;
type FKPhoneNumberProps = FormikTextFieldProps & { onChange: ({ phone, country }: any) => void };

export const FKPhoneNumber = ({ ...props }: FKPhoneNumberProps) => <Field component={PhoneNumberField} {...props} />;
export default FKPhoneNumber;
