'use client';

import { Box, Unstable_Grid2 as Grid, Stack, Tab } from '@mui/material';
import { FKPasswordField, FKPhoneNumberField, FKTextField } from '~/shared/ui/formik';
import { Form, Formik } from 'formik';
import { LoadingButton, TabContext, TabList, TabPanel } from '@mui/lab';
import { SyntheticEvent, useState } from 'react';

import Yup from '~/shared/settings/yup-setup';
import { signIn } from 'next-auth/react';
import styles from './SignInForm.module.scss';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const router = useRouter();
  const [tabSelected, setTabSelected] = useState('mobile_number');
  const [disabledBtnIfOK, setDisabledBtnIfOK] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    mobile_number: '',
    login_mode: 'email'
  };

  const validationSchema = Yup.object({
    password: Yup.string().required('Ce champ est require'),
    login_mode: Yup.string().required('Ce champ est require'),
    mobile_number: Yup.string().when('login_mode', {
      is: 'mobile_number',
      then: (shema) => shema.min(10, 'Numéro de téléphone non valide.').required('Ce champ est require.')
    }),
    email: Yup.string().when('login_mode', {
      is: 'email',
      then: (shema) => shema.email('Ce champ doit être un email').required('Ce champ est require.')
    })
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const id = values.login_mode === 'email' ? values?.email : values?.mobile_number;

        const res = await signIn('credentials', {
          id,
          redirect: false,
          password: values.password,
          callbackUrl: '/dashboard',
          login_mode: values?.login_mode
        });

        if (res?.ok) {
          setDisabledBtnIfOK(true);
          toast.success('Connexion réussite');
          router.push('/dashboard');
        } else {
          toast.error('Identifiant ou mot de passe incorrect.');
        }

        setSubmitting(false);
      }}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className={styles.signInForm}>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
              <Grid xs={12}>
                <TabContext value={tabSelected}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                      onChange={(event: SyntheticEvent, newValue: string) => {
                        setTabSelected(newValue);
                        setFieldValue('login_mode', newValue);
                      }}
                      aria-label="email or mobile number"
                    >
                      <Tab label="Numéro de téléphone" value="mobile_number" />
                      <Tab label="E-mail" value="email" />
                    </TabList>
                  </Box>
                  <TabPanel value="email" sx={{ padding: 0, paddingTop: '20px' }}>
                    <FKTextField fullWidth label="E-mail" type="email" name="email" autoComplete="username" />
                  </TabPanel>
                  <TabPanel value="mobile_number" sx={{ padding: 0, paddingTop: '20px' }}>
                    <FKPhoneNumberField
                      fullWidth
                      name="mobile_number"
                      autoComplete="username"
                      label="Numéro de téléphone"
                      helperText="Exemple: +225 xx xx xx xx xx"
                      onChange={(value) => setFieldValue('mobile_number', value)}
                    />
                  </TabPanel>
                </TabContext>
              </Grid>
              <Grid xs={12}>
                <FKPasswordField fullWidth label="Mot de passe" name="password" autoComplete="password" />
              </Grid>
              <Grid xs={12} sx={{ mt: 1.5 }}>
                <LoadingButton fullWidth loading={isSubmitting} disabled={disabledBtnIfOK} type="submit" variant="contained">
                  Envoyez
                </LoadingButton>
              </Grid>
            </Grid>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
