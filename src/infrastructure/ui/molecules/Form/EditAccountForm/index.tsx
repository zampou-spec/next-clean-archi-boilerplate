'use client';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { User } from '~/domain/entities';
import { useSession } from 'next-auth/react';
import Yup from '~/shared/settings/yup-setup';
import { objectToFormData } from '~/shared/utils';
import { useEditUser } from '~/infrastructure/api';
import { useModalContext } from '~/shared/ui/components';
import removeProperties from '~/shared/utils/removeProperties';
import { getCountryName } from '~/shared/utils/getCountryName';
import DropImage from '~/infrastructure/ui/molecules/DropImage';
import { FKTextField, FKPhoneNumberField } from '~/shared/ui/formik';
import { FormHelperText as MuiFormHelperText, Stack, Unstable_Grid2 as Grid } from '@mui/material';

const EditAccountForm = () => {
  const [, setModal] = useModalContext();
  const { data: session, update } = useSession();
  const [imagePreview, setImagePreview] = useState('');

  const updateSessionData = (user: User) => {
    setModal(false);

    update({
      ...session,
      user: {
        ...session?.user,
        ...user
      }
    });
  };

  const { mutate: editUser } = useEditUser((user) => updateSessionData(user));

  const validationSchema = Yup.object({
    email: Yup.string().required('Ce champ est require'),
    last_name: Yup.string().required('Ce champ est require'),
    first_name: Yup.string().required('Ce champ est require'),
    image: Yup.mixed()
      .test('is-string-or-file', "L'entrée doit être une chaîne ou un fichier", (value) => {
        return value instanceof File || typeof value === 'string';
      })
      .required('Ce champ est require'),
    mobile_number: Yup.string().min(7).required('Ce champ est require')
  });

  return (
    <Formik
      initialValues={removeProperties(session?.user as User, [
        'exp',
        'iat',
        'jti',
        'sub',
        'role',
        'picture',
        'expires_in',
        'token_type',
        'access_token'
      ])}
      validationSchema={validationSchema}
      onSubmit={(values: User) => {
        const formData = objectToFormData(values);
        editUser(formData);
      }}
    >
      {({ setFieldValue, values, errors, touched, isSubmitting }) => (
        <Form>
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
                  value={session?.user?.mobile_number as string}
                  name="mobile_number"
                  label="Numéro de téléphone"
                  helperText="Exemple: +225 xx xx xx xx xx"
                  onChange={(value) => {
                    const phone = `${value}` || '';
                    const country = getCountryName(value);
                    setFieldValue('country', country);
                    setFieldValue('mobile_number', phone);
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <DropImage
                  image={imagePreview}
                  defaultImage={values?.image as string}
                  onChange={async ({ image, preview }) => {
                    setImagePreview(preview);
                    await setFieldValue('image', image);
                  }}
                />
                {errors.image && touched.image ? (
                  <MuiFormHelperText error={!!(errors.image && touched.image)} data-testid="helper-text">
                    {errors.image}
                  </MuiFormHelperText>
                ) : null}
              </Grid>
              <Grid xs={12} sx={{ mt: 1.5 }}>
                <LoadingButton loading={isSubmitting} fullWidth type="submit" variant="contained">
                  Mettre à jour
                </LoadingButton>
              </Grid>
            </Grid>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default EditAccountForm;
