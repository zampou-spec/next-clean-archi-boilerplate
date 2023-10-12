import { NoSsr } from '@mui/material';
import Layout from '~/infrastructure/ui/layouts';
import CTA from '~/infrastructure/ui//molecules/CTA';
import Section from '~/infrastructure/ui/atoms/Section';
import Teams from '~/infrastructure/ui/organismes/Teams';
import Eshop from '~/infrastructure/ui/organismes/Eshop';
import HomeAbout from '~/infrastructure/ui/molecules/HomeAbout';
import SectionTitle from '~/infrastructure/ui/atoms/SectionTitle';
import AllCourses from '~/infrastructure/ui/organismes/AllCourses';
import HeroSlider from '~/infrastructure/ui/molecules/Slider/HeroSlider';
import PartnersSlider from '~/infrastructure/ui/molecules/Slider/PartnersSlider';
import ActualitySlider from '~/infrastructure/ui/molecules/Slider/ActualitySlider';

const HomeTemplate = () => (
  <Layout>
    <HeroSlider />
    <CTA />
    <Section>
      <SectionTitle>Cours et Tutos</SectionTitle>
      <AllCourses />
    </Section>
    <Section>
      <SectionTitle>Vamos Vacilar</SectionTitle>
      <HomeAbout />
    </Section>
    <Section>
      <SectionTitle>Actualités</SectionTitle>
      <NoSsr>
        <ActualitySlider />
      </NoSsr>
    </Section>
    <Section>
      <SectionTitle>Nos Professeurs</SectionTitle>
      <Teams />
    </Section>
    <Section>
      <SectionTitle>Nos partenaires</SectionTitle>
      <NoSsr>
        <PartnersSlider />
      </NoSsr>
    </Section>
    <Eshop />
  </Layout>
);

export default HomeTemplate;
