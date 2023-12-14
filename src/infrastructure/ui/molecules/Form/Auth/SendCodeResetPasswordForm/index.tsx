'use client';

import { Form, Formik } from 'formik';
import { Unstable_Grid2 as Grid, Stack } from '@mui/material';

import { FKTextField } from '~/shared/ui/formik';
import { LoadingButton } from '@mui/lab';
import Yup from '~/shared/settings/yup-setup';
import { objectToFormData } from '~/shared/utils';
import styles from './SendCodeResetPasswordForm.module.scss';
import { useModalContext } from '~/shared/ui/components';
import { useSendCodeResetPassword } from '~/infrastructure/api';
import { useState } from 'react';

const SendCodeResetPasswordForm = () => {
  const [, setModal] = useModalContext();
  const [disabledBtnIfOK, setDisabledBtnIfOK] = useState(false);

  const { mutate: sendCodeResetPassword } = useSendCodeResetPassword(() => {
    setModal(false);
    setDisabledBtnIfOK(true);
  });

  const initialValues = {
    email: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required('Ce champ est require')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const formData = objectToFormData(values);
        sendCodeResetPassword(formData);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.sendCodeResetPasswordForm}>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
              <Grid xs={12}>
                <FKTextField fullWidth label="E-mail" type="email" name="email" />
              </Grid>
              <Grid xs={12} sx={{ mt: 1.5 }}>
                <LoadingButton fullWidth loading={isSubmitting} disabled={disabledBtnIfOK} type="submit" variant="contained">
                  Demandez le code
                </LoadingButton>
              </Grid>
            </Grid>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default SendCodeResetPasswordForm;
