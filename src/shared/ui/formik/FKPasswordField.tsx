import { Field } from 'formik';
import { FieldAttributes } from 'formik/dist/Field';
import PasswordField from '../components/PasswordField';
import { TextFieldProps } from '../components/TextField';

type FormikTextFieldProps = Omit<FieldAttributes<TextFieldProps>, 'component'>;

export const FKPasswordField = ({ ...props }: FormikTextFieldProps) => <Field component={PasswordField} {...props} />;
export default FKPasswordField;
