'use client';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import Yup from '~/shared/settings/yup-setup';
import { FKTextField } from '~/shared/ui/formik';
import { objectToFormData } from '~/shared/utils';
import { useModalContext } from '~/shared/ui/components';
import DropImage from '~/infrastructure/ui/molecules/DropImage';
import { useEditCourse, useCreateCourse } from '~/infrastructure/api';
import { CoursesDatable } from 'src/infrastructure/ui/molecules/Table/CoursesTable';
import { FormHelperText as MuiFormHelperText, Stack, Unstable_Grid2 as Grid } from '@mui/material';

type EditOrCreateCourseForm = {
  course: CoursesDatable;
  type: 'edit' | 'create';
};

type CouresDataForm = {
  id: number;
  name: string;
  description: string;
  image: string | File;
  price_online: number;
  price_classroom: number;
};

const EditOrCreateCourseForm = ({ type, course }: EditOrCreateCourseForm) => {
  const [, setModal] = useModalContext();
  const closeModal = () => setModal(false);
  const { mutate: editCourse } = useEditCourse(closeModal);
  const { mutate: createCourse } = useCreateCourse(closeModal);
  const [imagePreview, setImagePreview] = useState('');

  const validationSchema = Yup.object({
    id: Yup.number().required('Ce champ est require'),
    name: Yup.string().required('Ce champ est require'),
    image: Yup.mixed()
      .test('is-string-or-file', "L'entrée doit être une chaîne ou un fichier", (value) => {
        return value instanceof File || typeof value === 'string';
      })
      .required('Ce champ est require'),
    price_online: Yup.number().required('Ce champ est require'),
    price_classroom: Yup.number().required('Ce champ est require'),
    description: Yup.string().required('Ce champ est require')
  });

  return (
    <Formik
      initialValues={course}
      validationSchema={validationSchema}
      onSubmit={async (values: CouresDataForm) => {
        const formData = objectToFormData(values);

        if (type === 'edit') {
          editCourse(formData);
        } else if (type === 'create') {
          createCourse(formData);
        }
      }}
    >
      {({ setFieldValue, values, errors, touched }) => (
        <Form>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
              <Grid xs={12}>
                <FKTextField label="Nom du cours" name="name" fullWidth />
              </Grid>
              <Grid xs={12}>
                <FKTextField type="number" label="Prix en ligne" name="price_online" fullWidth />
              </Grid>
              <Grid xs={12}>
                <FKTextField type="number" label="Prix en presentiel" name="price_classroom" fullWidth />
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
                <LoadingButton fullWidth type="submit" variant="contained">
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

export default EditOrCreateCourseForm;
