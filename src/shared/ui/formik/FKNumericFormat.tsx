import { Field } from 'formik';
import { FieldProps } from 'formik/dist/Field';
import { TextFieldProps } from '../components/TextField';
import { NumericFormatProps } from 'react-number-format';
import tNumericFormatField from '../components/NumberFormatField';

type FKNumberFormatProps = NumericFormatProps<Partial<FieldProps> & TextFieldProps>;

export const FKNumericFormat = (props: FKNumberFormatProps) => <Field component={tNumericFormatField} {...props} />;
export default FKNumericFormat;
