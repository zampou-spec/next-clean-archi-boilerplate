'use client';
import { Form, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import Yup from '~/shared/settings/yup-setup';
import { FKSelectField } from '~/shared/ui/formik';
import { Stack, Unstable_Grid2 as Grid } from '@mui/material';
import { optionType, useModalContext } from '~/shared/ui/components';
import { useRemoveSold, removeSoldMutationType } from '~/infrastructure/api';
import { SubscribesData } from '~/infrastructure/ui/molecules/Table/UsersTable';
import { RemoveSoldModalProps } from '~/infrastructure/ui/molecules/Modal/RemoveSoldModal';

export type initialValuesType = {
  courses: SubscribesData | null;
};

const RemoveSoldForm = ({ userId, subscribes }: RemoveSoldModalProps) => {
  const [, setModal] = useModalContext();
  const { mutate: removeSoldMutation } = useRemoveSold(() => setModal(false));
  const [subscribesOption, setSubscribesOption] = useState<optionType[]>([]);

  useEffect(() => {
    const data: optionType[] = [];

    subscribes.map((subscribe) => {
      data.push({
        value: subscribe,
        label: `${subscribe.name} - ${subscribe.type} - ${subscribe.sold}`.toUpperCase()
      });
    });

    if (data.length) {
      setSubscribesOption(data);
    }
  }, [subscribes]);

  const initialValues: initialValuesType = { courses: null };

  const validationSchema = Yup.object({
    courses: Yup.object()
      .shape({
        name: Yup.string().required(),
        sold: Yup.string().required(),
        type: Yup.string().required()
      })
      .required('Ce champ est require')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const data: removeSoldMutationType = {
          user_id: parseInt(userId),
          subscribe: values.courses as SubscribesData
        };

        removeSoldMutation(data);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
              <Grid xs={12}>
                <FKSelectField fullWidth label="Cours" hideSelectedOptions name="courses" options={subscribesOption} />
              </Grid>
              <Grid xs={12} sx={{ mt: 1.5 }}>
                <LoadingButton fullWidth loading={isSubmitting} type="submit" variant="contained">
                  Supprimer
                </LoadingButton>
              </Grid>
            </Grid>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default RemoveSoldForm;
