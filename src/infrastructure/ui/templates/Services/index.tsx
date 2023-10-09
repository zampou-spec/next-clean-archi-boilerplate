import Layout from '~/infrastructure/ui/layouts';
import Hero from '~/infrastructure/ui/molecules/Hero';
import Services from '~/infrastructure/ui/organismes/Services';

const ServiceTemplate = () => {
  return (
    <Layout>
      <Hero image="https://placehold.co/400.webp" title="Lorem ipsum dolor sit amet consectetur adipisicing elit." subtitle="" />
      <Services />
    </Layout>
  );
};

export default ServiceTemplate;
