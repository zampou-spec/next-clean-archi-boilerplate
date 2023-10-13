import Layout from '~/infrastructure/ui/layouts';
import Hero from '~/infrastructure/ui/molecules/Hero';
import Services from '~/infrastructure/ui/organismes/Services';

import hbAboutBg from '~/infrastructure/ui/assets/images/hb-about-bg.png';

const ServiceTemplate = () => (
  <Layout>
    <Hero image={hbAboutBg} title="Nos prestation de service" subtitle="" />
    <Services />
  </Layout>
);

export default ServiceTemplate;
