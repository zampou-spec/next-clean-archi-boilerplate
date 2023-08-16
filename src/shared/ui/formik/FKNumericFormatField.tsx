import { Field } from 'formik';
import { FieldProps } from 'formik/dist/Field';
import { TextFieldProps } from '../components/TextField';
import { NumericFormatProps } from 'react-number-format';
import tNumericFormatField from '../components/NumberFormatField';

type FKNumericFormatFieldProps = NumericFormatProps<Partial<FieldProps> & TextFieldProps>;

export const FKNumericFormatField = (props: FKNumericFormatFieldProps) => <Field component={tNumericFormatField} {...props} />;
export default FKNumericFormatField;
