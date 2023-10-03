import React from 'react';
import Section from '~/infrastructure/ui/atoms/Section';
import ProductsTable from '~/infrastructure/ui/molecules/Table/ProductsTable';

const ProductsTemplate = () => {
  return (
    <Section>
      <ProductsTable />
    </Section>
  );
};

export default ProductsTemplate;
