'use client';
import { Form, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Yup from '~/shared/settings/yup-setup';
import { FKSelectField } from '~/shared/ui/formik';
import { optionType, useModalContext } from '~/shared/ui/components';
import { Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { useGetAllCourses, useMakePayment, makePaymentMutationType } from '~/infrastructure/api';

const AddSoldForm = () => {
  const router = useRouter();
  const [, setModal] = useModalContext();
  const { mutate: makePayment } = useMakePayment((data) => {
    setModal(false);
    router.push(data.link);
  });

  const { data: courses } = useGetAllCourses();
  const [coursesOption, setCoursesOption] = useState<optionType[]>([]);
  const [coursePrice, setCoursePrice] = useState<number>(0);

  useEffect(() => {
    const data: optionType[] = [];

    courses?.map((course) => {
      data.push({
        value: course.id,
        label: course.name.toUpperCase()
      });
    });

    if (data.length) {
      setCoursesOption(data);
    }
  }, [courses]);

  const getCoursePrice = (data: optionType) => {
    const course = courses?.find((course) => course.id === data?.value);

    if (course) {
      setCoursePrice(course.price_classroom);
    }
  };

  const initialValues = { course_id: null };

  const validationSchema = Yup.object({
    course_id: Yup.number().required('Ce champ est require')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={({ course_id }) => {
        if (typeof course_id === 'number') {
          const data: makePaymentMutationType = {
            course_id: course_id,
            subscribe_type: 'classroom'
          };

          makePayment(data);
        }
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
              <Grid xs={12}>
                <FKSelectField
                  fullWidth
                  label="Cours"
                  hideSelectedOptions
                  name="course_id"
                  options={coursesOption}
                  onChange={async (e) => {
                    getCoursePrice(e as optionType);
                    await setFieldValue('course_id', (e as optionType).value);
                  }}
                />
              </Grid>
              <Grid xs={12} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Typography variant="h6">Prix en Présentiel:</Typography>
                <Typography variant="body1">{coursePrice} FCFA</Typography>
              </Grid>
              <Grid xs={12}>
                <LoadingButton fullWidth loading={isSubmitting} type="submit" variant="contained">
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

export default AddSoldForm;
