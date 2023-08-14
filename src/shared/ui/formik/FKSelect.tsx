import { Field, FieldProps } from 'formik';
import SelectField from '../components/SelectField';
import { type ReactSelectProps } from '../components/SelectField/ReactSelect';

export type FKReactSelectFieldProps = Omit<ReactSelectProps, 'component' | 'type'> & Partial<FieldProps>;

export const FKSelect = (props: FKReactSelectFieldProps) => <Field component={SelectField} {...props} />;
export default FKSelect;
