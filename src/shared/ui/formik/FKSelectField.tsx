import { Field, FieldProps } from 'formik';
import SelectField from '../components/SelectField';
import { type ReactSelectProps } from '../components/SelectField/ReactSelect';

export type FKReactSelectFieldProps = Omit<ReactSelectProps, 'component' | 'type'> & Partial<FieldProps>;

export const FKSelectField = (props: FKReactSelectFieldProps) => <Field component={SelectField} {...props} />;
export default FKSelectField;
