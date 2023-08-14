import { Field } from 'formik';
import { FieldAttributes } from 'formik/dist/Field';
import { TextFieldProps } from '../components';

type FKFieldProps = FieldAttributes<TextFieldProps>;

export const FKField = (props: FKFieldProps) => <Field {...props} />;
export default FKField;
