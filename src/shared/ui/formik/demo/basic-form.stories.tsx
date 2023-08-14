import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Button, Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import { FKSelect } from '../FKSelect';
import FKTextField from '../FKTextField';
import FKNumberFormat from '../FKNumericFormat';
import { FKPhoneNumber } from '../FKPhoneNumber';
import FKPasswordField from '../FKPasswordField';

const Template = () => {
  const initialValues = {
    numm: '',
    name: '',
    email: '',
    selec: null,
    country: '',
    password: '',
    phoneNumber: ''
  };

  const validationSchema = Yup.object({
    numm: Yup.number().required('Ce champ est require'),
    name: Yup.string().required('Ce champ est require'),
    selec: Yup.number().required('Ce champ est require'),
    country: Yup.string().required('Ce champ est require'),
    password: Yup.string().required('Ce champ est require'),
    phoneNumber: Yup.string().required('Ce champ est require'),
    email: Yup.string().email('Email').required('Ce champ est require')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('**************************');
        console.log('[values]: ', values);
        console.log('**************************');
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <Stack maxWidth="400px" spacing={3}>
            <FKTextField label="Nom & Premon(s)" name="name" autoComplete="username" />
            <FKTextField label="E-mail" type="email" name="email" autoComplete="username" />
            <FKPhoneNumber
              fullWidth
              name="phoneNumber"
              label="Numero de telephone"
              onChange={(value) => {
                setFieldValue('country', value.country);
                setFieldValue('phoneNumber', value.phone);
              }}
            />
            <FKSelect
              label="Select Form"
              name="selec"
              options={[
                { value: 10, label: 'Ten' },
                { value: 20, label: 'Twenty' },
                { value: 30, label: 'Thirty' }
              ]}
            />
            <FKPasswordField label="Mot de passe" name="password" />
            <FKNumberFormat label="Number Truck" name="numm" />
            <Button type="submit" variant="contained">
              Envoyez
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

const meta = {
  title: 'Demo/Basic-form'
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Template />,
  args: {}
};
