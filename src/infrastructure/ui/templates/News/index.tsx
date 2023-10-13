import Layout from '~/infrastructure/ui/layouts';
import Hero from '~/infrastructure/ui/molecules/Hero';
import News from '~/infrastructure/ui/organismes/News';
import Section from '~/infrastructure/ui/atoms/Section';

import hbAboutBg from '~/infrastructure/ui/assets/images/hb-about-bg.png';

const NewsTemplate = () => (
  <Layout>
    <Hero image={hbAboutBg} title="Actualité du club" subtitle="" />
    <Section>
      <News />
    </Section>
  </Layout>
);

export default NewsTemplate;
