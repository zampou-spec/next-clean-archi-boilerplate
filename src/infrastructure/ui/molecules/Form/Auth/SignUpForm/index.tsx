'use client';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import Yup from '~/shared/settings/yup-setup';
import { useSignup } from '~/infrastructure/api';
import { objectToFormData } from '~/shared/utils';
import { getCountryName } from '~/shared/utils/getCountryName';
import { Button, Unstable_Grid2 as Grid, Stack } from '@mui/material';
import { FKPasswordField, FKPhoneNumberField, FKTextField } from '~/shared/ui/formik';

import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
  const router = useRouter();
  const { mutate: signup } = useSignup(() => {
    router.push('/auth/signin');
  });

  const initialValues = {
    email: '',
    country: '',
    password: '',
    last_name: '',
    first_name: '',
    mobile_number: '',
    password_confirmation: ''
  };
  // salijukeg@mailinator.com
  // +225 7575985859
  const validationSchema = Yup.object({
    email: Yup.string().required('Ce champ est require'),
    password: Yup.string().required('Ce champ est require'),
    last_name: Yup.string().required('Ce champ est require'),
    first_name: Yup.string().required('Ce champ est require'),
    mobile_number: Yup.string().min(7).required('Ce champ est require'),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password')], 'Les mots de passe doivent correspondre')
      .required('Ce champ est requis')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const formData = objectToFormData(values);
        signup(formData);
      }}
    >
      {({ setFieldValue }) => (
        <Form className={styles.signUpForm}>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
              <Grid xs={12} md={6}>
                <FKTextField fullWidth label="Nom" type="text" name="first_name" autoComplete="username" />
              </Grid>
              <Grid xs={12} md={6}>
                <FKTextField fullWidth label="Prémon(s)" type="text" name="last_name" autoComplete="username" />
              </Grid>

              <Grid xs={12}>
                <FKTextField fullWidth label="E-mail" type="email" name="email" autoComplete="username" />
              </Grid>
              <Grid xs={12}>
                <FKPhoneNumberField
                  fullWidth
                  name="mobile_number"
                  label="Numéro de téléphone"
                  onChange={(value) => {
                    const phone = `${value}` || '';
                    const country = getCountryName(value);
                    setFieldValue('country', country);
                    setFieldValue('mobile_number', phone);
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <FKPasswordField fullWidth label="Mot de passe" name="password" autoComplete="password" />
              </Grid>
              <Grid xs={12}>
                <FKPasswordField
                  fullWidth
                  label="Confiramtion de Mot de passe"
                  name="password_confirmation"
                  autoComplete="password"
                />
              </Grid>
              <Grid xs={12} sx={{ mt: 1.5 }}>
                <Button fullWidth type="submit" variant="contained">
                  Envoyez
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
