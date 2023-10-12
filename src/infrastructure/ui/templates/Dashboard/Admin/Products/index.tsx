import Hero from '~/infrastructure/ui/molecules/Hero';
import Section from '~/infrastructure/ui/atoms/Section';
import ProductsTable from '~/infrastructure/ui/molecules/Table/ProductsTable';
import AdminMenuDrawer from '~/infrastructure/ui/molecules/Drawer/AdminMenuDrawer';

const ProductsTemplate = () => (
  <>
    <Hero image="https://placehold.co/400.webp" title="Produits" height="200px" />
    <Section>
      <AdminMenuDrawer />
      <ProductsTable />
    </Section>
  </>
);

export default ProductsTemplate;
