import { Field } from 'formik';
import { FieldAttributes, FieldProps } from 'formik/dist/Field';
import TextField, { TextFieldProps } from '../components/TextField';

type FormikTextFieldProps = Omit<FieldAttributes<TextFieldProps>, 'component'> & Partial<FieldProps>;

export const FKTextField = ({ ...props }: FormikTextFieldProps) => <Field component={TextField} {...props} />;
export default FKTextField;
