import { TextFieldProps } from '@mui/material/TextField';
import { Field } from 'formik';
import { FieldAttributes } from 'formik/dist/Field';
import { Props } from 'react-phone-number-input';
import PhoneNumberField from '../components/PhoneNumberField';

type FormikTextFieldProps = Props<Omit<FieldAttributes<TextFieldProps>, 'component' | 'defaultChecked'>>;
type FKPhoneNumberFieldProps = FormikTextFieldProps & { onChange: ({ phone, country }: any) => void };

export const FKPhoneNumberField = ({ ...props }: FKPhoneNumberFieldProps) => <Field component={PhoneNumberField} {...props} />;
export default FKPhoneNumberField;
