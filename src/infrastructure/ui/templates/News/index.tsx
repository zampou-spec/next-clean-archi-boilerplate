import Layout from '~/infrastructure/ui/layouts';

import News from '~/infrastructure/ui/organismes/News';
import Section from '~/infrastructure/ui/atoms/Section';

const NewsTemplate = () => {
  return (
    <Layout>
      <Section>
        <News />
      </Section>
    </Layout>
  );
};

export default NewsTemplate;
