'use client';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { News } from '~/domain/entities';
import Yup from '~/shared/settings/yup-setup';
import { FKTextField } from '~/shared/ui/formik';
import { objectToFormData } from '~/shared/utils';
import { useModalContext } from '~/shared/ui/components';
import DropImage from '~/infrastructure/ui/molecules/DropImage';
import { useEditNews, useCreateNews } from '~/infrastructure/api';
import { FormHelperText as MuiFormHelperText, Stack, Unstable_Grid2 as Grid } from '@mui/material';

// type EditOrCreateNews = News & { category: string };

type EditOrCreateNewsFormProps = {
  news: News;
  type: 'edit' | 'create';
};

const EditOrCreateNewsForm = ({ type, news }: EditOrCreateNewsFormProps) => {
  const [, setModal] = useModalContext();
  const closeModal = () => setModal(false);
  const { mutate: editNews } = useEditNews(closeModal);
  const { mutate: createNews } = useCreateNews(closeModal);
  const [imagePreview, setImagePreview] = useState('');

  const validationSchema = Yup.object({
    id: Yup.number().required('Ce champ est require'),
    title: Yup.string().required('Ce champ est require'),
    image: Yup.mixed()
      .test('is-string-or-file', "L'entrée doit être une chaîne ou un fichier", (value) => {
        return value instanceof File || typeof value === 'string';
      })
      .required('Ce champ est require'),
    author: Yup.string().required('Ce champ est require'),
    category: Yup.string().required('Ce champ est require'),
    description: Yup.string().required('Ce champ est require')
  });

  return (
    <Formik
      initialValues={news}
      validationSchema={validationSchema}
      onSubmit={(values: News) => {
        const formData = objectToFormData({
          ...values,
          category: values.category as string
        });

        if (type === 'edit') {
          editNews(formData);
        } else if (type === 'create') {
          createNews(formData);
        }
      }}
    >
      {({ setFieldValue, values, errors, touched, isSubmitting }) => (
        <Form>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
              <Grid xs={12}>
                <FKTextField label="Titre" name="title" fullWidth />
              </Grid>
              <Grid xs={12}>
                <FKTextField label="Autheur" name="author" fullWidth />
              </Grid>
              <Grid xs={12}>
                <FKTextField label="Categories" name="category" fullWidth />
              </Grid>
              <Grid xs={12}>
                <FKTextField label="Description" multiline rows={4} name="description" fullWidth />
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
                  {type === 'create' ? 'Créer' : 'Mettre à jour'}
                </LoadingButton>
              </Grid>
            </Grid>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default EditOrCreateNewsForm;
