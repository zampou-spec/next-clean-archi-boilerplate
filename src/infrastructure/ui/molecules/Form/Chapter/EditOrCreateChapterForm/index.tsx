'use client';
import { Form, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import Yup from '~/shared/settings/yup-setup';
import { FKTextField } from '~/shared/ui/formik';
import { Stack, Unstable_Grid2 as Grid } from '@mui/material';
import { ChapterDatable } from 'src/infrastructure/ui/molecules/Table/ChapterTable';
import { objectToFormData } from '~/shared/utils';
import { useModalContext } from '~/shared/ui/components';
import { useEditChapter } from '~/infrastructure/api';
import { useCreateChapter } from '~/infrastructure/api/chapter/createChapter';

type EditOrCreateChapterFormProps = {
  chapter: ChapterDatable;
  type: 'edit' | 'create';
};

const EditOrCreateChapterForm = ({ type, chapter }: EditOrCreateChapterFormProps) => {
  const [, setModal] = useModalContext();
  const closeModal = () => setModal(false);
  const { mutate: editChapter } = useEditChapter(closeModal);
  const { mutate: createChapter } = useCreateChapter(closeModal);

  const validationSchema = Yup.object({
    id: Yup.number().required('Ce champ est require'),
    name: Yup.string().required('Ce champ est require'),
    playlist_id: Yup.string().required('Ce champ est require')
  });

  return (
    <Formik
      initialValues={chapter}
      validationSchema={validationSchema}
      onSubmit={(values: ChapterDatable) => {
        const formData = objectToFormData(values);

        if (type === 'edit') {
          editChapter(formData);
        } else if (type === 'create') {
          createChapter(formData);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
              <Grid xs={12}>
                <FKTextField label="Nom du chapitre" name="name" fullWidth />
              </Grid>
              <Grid xs={12}>
                <FKTextField label="ID de la playlist" name="playlist_id" fullWidth />
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

export default EditOrCreateChapterForm;
