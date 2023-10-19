'use client';
import { Form, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import Yup from '~/shared/settings/yup-setup';
import { objectToFormData } from '~/shared/utils';
import Image from '~/infrastructure/ui/atoms/Image';
import { getCountryName } from '~/shared/utils/getCountryName';
import { optionType, useModalContext } from '~/shared/ui/components';
import { useGetAllProducts, useOderProduct } from '~/infrastructure/api';
import { Stack, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { FKSelectField, FKTextField, FKPhoneNumberField } from '~/shared/ui/formik';

const OrderProductForm = () => {
  const [, setModal] = useModalContext();
  const closeModal = () => setModal(false);
  const { data: products } = useGetAllProducts();
  const { mutate: orderProduct } = useOderProduct(closeModal);
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productImage, setProductImage] = useState<string>('');
  const [productsOption, setProductsOption] = useState<optionType[]>([]);

  useEffect(() => {
    const data: optionType[] = [];

    products?.map((product) => {
      data.push({
        value: product.id,
        label: product.name.toUpperCase()
      });
    });

    if (data.length) {
      setProductsOption(data);
    }
  }, [products]);

  const getOroductImage = (data: optionType) => {
    const product = products?.find((values) => values.id === data?.value);
    if (product) {
      setProductPrice(product.price);
      setProductImage(product.image);
    }
  };

  const initialValues = { name: '', country: '', product_id: 0, mobile_number: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Ce champ est require'),
    country: Yup.string().required('Ce champ est require'),
    product_id: Yup.number().required('Ce champ est require'),
    mobile_number: Yup.string().required('Ce champ est require')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const formData = objectToFormData(values);
        orderProduct(formData);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <Stack maxWidth="450px" spacing={2.5}>
            <Grid container columnSpacing={1} rowSpacing={2.5}>
              <Grid xs={12}>
                <FKSelectField
                  fullWidth
                  label="Quels produits voulez-vous"
                  hideSelectedOptions
                  name="product_id"
                  options={productsOption}
                  onChange={async (e) => {
                    getOroductImage(e as optionType);
                    await setFieldValue('product_id', (e as optionType).value);
                  }}
                />
              </Grid>
              <Grid xs={12} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {productImage ? (
                  <Image
                    alt=""
                    src={productImage}
                    imageSize={{
                      width: '100%',
                      height: '150px'
                    }}
                  />
                ) : (
                  <Image
                    alt=""
                    src="https://placehold.co/400?text=''"
                    imageSize={{
                      width: '100%',
                      height: '150px'
                    }}
                  />
                )}
              </Grid>
              <Grid xs={12} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Typography variant="h6">Prix du produit:</Typography>
                {productPrice ? (
                  <Typography variant="body1">{productPrice} FCFA</Typography>
                ) : (
                  <Typography variant="body1">Choisissez un produit</Typography>
                )}
              </Grid>
              <Grid xs={12}>
                <FKTextField label="Nom complet" name="name" fullWidth />
              </Grid>
              <Grid xs={12}>
                <FKPhoneNumberField
                  fullWidth
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
              <Grid xs={12} sx={{ mt: 1.5 }}>
                <LoadingButton fullWidth loading={isSubmitting} type="submit" variant="contained">
                  Commandez
                </LoadingButton>
              </Grid>
            </Grid>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default OrderProductForm;
