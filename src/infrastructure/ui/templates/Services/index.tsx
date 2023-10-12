import Layout from '~/infrastructure/ui/layouts';
import Hero from '~/infrastructure/ui/molecules/Hero';
import Services from '~/infrastructure/ui/organismes/Services';

const ServiceTemplate = () => (
  <Layout>
    <Hero image="https://placehold.co/400.webp" title="Nos prestation de service" subtitle="" />
    <Services />
  </Layout>
);

export default ServiceTemplate;
