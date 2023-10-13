import { NoSsr } from '@mui/material';
import Layout from '~/infrastructure/ui/layouts';
import CTA from '~/infrastructure/ui//molecules/CTA';
import Hero from '~/infrastructure/ui/molecules/Hero';
import About from '~/infrastructure/ui/molecules/About';
import Section from '~/infrastructure/ui/atoms/Section';
import Teams from '~/infrastructure/ui/organismes/Teams';
import SectionTitle from '~/infrastructure/ui/atoms/SectionTitle';
import PartnersSlider from '~/infrastructure/ui/molecules/Slider/PartnersSlider';

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
      <p>..... a revoir</p>
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
