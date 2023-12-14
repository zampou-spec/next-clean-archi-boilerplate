import About from '~/infrastructure/ui/molecules/About';
import CTA from '~/infrastructure/ui//molecules/CTA';
import Hero from '~/infrastructure/ui/molecules/Hero';
import Information from '~/infrastructure/ui/molecules/Information';
import Layout from '~/infrastructure/ui/layouts';
import { NoSsr } from '@mui/material';
import PartnersSlider from '~/infrastructure/ui/molecules/Slider/PartnersSlider';
import Section from '~/infrastructure/ui/atoms/Section';
import SectionTitle from '~/infrastructure/ui/atoms/SectionTitle';
import Teams from '~/infrastructure/ui/organismes/Teams';
import hbAboutBg from '~/infrastructure/ui/assets/images/hb-about-bg.png';
import styles from './Club.module.scss';

const ClubTemplate = () => (
  <Layout>
    <Hero image={hbAboutBg} title="A props du club" subtitle="" />
    <Section>
      <About />
    </Section>
    <Section>
      <SectionTitle>Informations</SectionTitle>
      <Information />
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
    <CTA className={styles.cta} />
  </Layout>
);

export default ClubTemplate;
