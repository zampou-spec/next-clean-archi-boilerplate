import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Button, Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import FKTextField from '../FKTextField';
import FKSelectField from '../FKSelectField';
import FKPasswordField from '../FKPasswordField';
import FKPhoneNumberField from '../FKPhoneNumberField';
import { getCountryName } from '~/shared/utils/getCountryName';

const Template = () => {
  const initialValues = {
    name: '',
    email: '',
    selec: null,
    country: '',
    password: '',
    phoneNumber: ''
  };

  const validationSchema = Yup.object({
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
      {({ setFieldValue }) => (
        <Form>
          <Stack maxWidth="400px" spacing={3}>
            <FKTextField label="Nom & Premon(s)" name="name" autoComplete="username" />
            <FKTextField label="E-mail" type="email" name="email" autoComplete="username" />
            <FKPhoneNumberField
              fullWidth
              name="phoneNumber"
              label="Numero de telephone"
              onChange={(value) => {
                const phone = `${value}` || '';
                const country = getCountryName(value);

                setFieldValue('country', country);
                setFieldValue('phoneNumber', phone);
              }}
            />
            <FKSelectField
              label="Select Form"
              name="selec"
              options={[
                { value: 10, label: 'Ten' },
                { value: 20, label: 'Twenty' },
                { value: 30, label: 'Thirty' }
              ]}
            />
            <FKPasswordField label="Mot de passe" name="password" />
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
  render: () => <Template />,
  args: {}
};
