'use client';

import { FKPasswordField, FKTextField } from '~/shared/ui/formik';
import { Form, Formik } from 'formik';
import { Unstable_Grid2 as Grid, Stack } from '@mui/material';

import { LoadingButton } from '@mui/lab';
import SendCodeResetPasswordModal from '~/infrastructure/ui/molecules/Modal/SendCodeResetPasswordModal';
import Yup from '~/shared/settings/yup-setup';
import { objectToFormData } from '~/shared/utils';
import styles from './ForgotPasswordForm.module.scss';
import { useResetPassword } from '~/infrastructure/api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [disabledBtnIfOK, setDisabledBtnIfOK] = useState(false);

  const { mutate: resetPassword } = useResetPassword(() => {
    setDisabledBtnIfOK(true);
    router.push('/auth/signin');
  });

  const initialValues = {
    code: '',
    password: '',
    password_confirmation: ''
  };

  const validationSchema = Yup.object({
    code: Yup.string().required('Ce champ est require'),
    password: Yup.string().required('Ce champ est require'),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password')], 'Les mots de passe doivent correspondre')
      .required('Ce champ est requis')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const formData = objectToFormData(values);
        resetPassword(formData);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.forgotPasswordForm}>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
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
              <Grid xs={12} md={4}>
                <FKTextField fullWidth label="Code" type="text" name="code" />
              </Grid>
              <Grid xs={12} md={8}>
                <SendCodeResetPasswordModal
                  button={
                    <LoadingButton sx={{ mt: 2.85 }} fullWidth variant="contained">
                      Demandez le code
                    </LoadingButton>
                  }
                />
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

export default ForgotPasswordForm;
