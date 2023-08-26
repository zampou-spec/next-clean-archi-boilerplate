import { Field } from 'formik';
import { Props } from 'react-phone-number-input';
import { FieldAttributes } from 'formik/dist/Field';
import { TextFieldProps } from '@mui/material/TextField';
import PhoneNumberField from '../components/PhoneNumberField';

type FormikTextFieldProps = Props<Omit<FieldAttributes<TextFieldProps>, 'component' | 'defaultChecked'>>;

export const FKPhoneNumberField = ({ ...props }: FormikTextFieldProps) => <Field component={PhoneNumberField} {...props} />;
export default FKPhoneNumberField;
