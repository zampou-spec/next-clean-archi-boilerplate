import Hero from '~/infrastructure/ui/molecules/Hero';
import Section from '~/infrastructure/ui/atoms/Section';
import NewsTable from '~/infrastructure/ui/molecules/Table/NewsTable';
import AdminMenuDrawer from '~/infrastructure/ui/molecules/Drawer/AdminMenuDrawer';

const NewsTemplate = () => (
  <>
    <Hero image="https://placehold.co/400.webp" title="Actualités" height="200px" />
    <Section>
      <AdminMenuDrawer />
      <NewsTable />
    </Section>
  </>
);

export default NewsTemplate;
