import { NoSsr } from '@mui/material';
import Layout from '~/infrastructure/ui/layouts';
import CTA from '~/infrastructure/ui//molecules/CTA';
import Hero from '~/infrastructure/ui/molecules/Hero';
import About from '~/infrastructure/ui/molecules/About';
import Section from '~/infrastructure/ui/atoms/Section';
import Teams from '~/infrastructure/ui/organismes/Teams';
import SectionTitle from '~/infrastructure/ui/atoms/SectionTitle';
import VideoPlayer from '~/infrastructure/ui/molecules/VideoPalyer';
import PartnersSlider from '~/infrastructure/ui/molecules/Slider/PartnersSlider';

import styles from './Club.module.scss';

const ClubTemplate = () => {
  return (
    <Layout>
      <Hero image="https://placehold.co/400.webp" title="Lorem ipsum dolor sit amet consectetur adipisicing elit." subtitle="" />
      <Section>
        <About />
      </Section>
      <Section>
        <VideoPlayer className={styles.videoPlayer} title={'Presentations du culb vamos'} url={'https://youtu.be/vwGp16NXgQU'} />
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
};

export default ClubTemplate;
