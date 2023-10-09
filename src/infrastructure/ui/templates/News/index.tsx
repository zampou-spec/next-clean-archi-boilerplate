import Layout from '~/infrastructure/ui/layouts';
import Hero from '~/infrastructure/ui/molecules/Hero';
import News from '~/infrastructure/ui/organismes/News';
import Section from '~/infrastructure/ui/atoms/Section';

const NewsTemplate = () => {
  return (
    <Layout>
      <Hero image="https://placehold.co/400.webp" title="Lorem ipsum dolor sit amet consectetur adipisicing elit." subtitle="" />
      <Section>
        <News />
      </Section>
    </Layout>
  );
};

export default NewsTemplate;
