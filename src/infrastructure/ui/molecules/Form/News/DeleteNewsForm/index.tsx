'use client';
import { Form, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import Yup from '~/shared/settings/yup-setup';
import { useModalContext } from '~/shared/ui/components';
import { useDeleteNews } from '~/infrastructure/api/news/deleteNews';
import { Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';

type DeleteNewsFormProps = {
  newId: number;
};

const DeleteNewsForm = ({ newId }: DeleteNewsFormProps) => {
  const [, setModal] = useModalContext();
  const closeModal = () => setModal(false);
  const { mutate: deleteNews } = useDeleteNews(closeModal);
  const initialValues = { id: newId };

  const validationSchema = Yup.object({
    id: Yup.number().required('Ce champ est require')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        deleteNews(values.id);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
              <Grid xs={12}>
                <Typography style={{ textAlign: 'center' }}>Êtes-vous sûr de vouloir supprimer ce chapitre ?</Typography>
              </Grid>
              <Grid container xs={12}>
                <Grid xs={12} md={6}>
                  <LoadingButton onClick={closeModal} fullWidth variant="contained">
                    Non
                  </LoadingButton>
                </Grid>
                <Grid xs={12} md={6}>
                  <LoadingButton loading={isSubmitting} fullWidth type="submit" variant="contained">
                    Oui supprimer
                  </LoadingButton>
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default DeleteNewsForm;
