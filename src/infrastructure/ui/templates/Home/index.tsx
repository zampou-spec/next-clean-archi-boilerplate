import Layout from '~/infrastructure/ui/layouts';
import CTA from '~/infrastructure/ui//molecules/CTA';
import Section from '~/infrastructure/ui/atoms/Section';
import Teams from '~/infrastructure/ui/organismes/Teams';
// import Eshop from '~/infrastructure/ui/organismes/Eshop';
import { Box, Typography, Button, NoSsr } from '@mui/material';
import SectionTitle from '~/infrastructure/ui/atoms/SectionTitle';
import AllCourses from '~/infrastructure/ui/organismes/AllCourses';
import HeroSlider from '~/infrastructure/ui/molecules/Slider/HeroSlider';
import PartnersSlider from '~/infrastructure/ui/molecules/Slider/PartnersSlider';
import ActualitySlider from '~/infrastructure/ui/molecules/Slider/ActualitySlider';

import styles from './HomeTemplate.module.scss';

const HomeTemplate = () => {
  return (
    <Layout>
      <HeroSlider />
      <CTA />
      <Section>
        <SectionTitle>Cours et Tutos</SectionTitle>
        <AllCourses />
      </Section>
      <Section className={styles.about}>
        <SectionTitle>Vamos Vacilar</SectionTitle>
        <NoSsr>
          <Typography className={styles.text} variant="body2">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempor volutpat purus nibh id. Mauris justo quisque neque tempus sed vitae
              pellentesque. Mi enim mattis sit varius adipiscing tristique aliquam. Ac turpis ultricies varius velit pellentesque.
              Lorem ipsum dolor sit amet consectetur. Tempor volutpat purus nibh id. Mauris justo quisque neque tempus sed vitae
              pellentesque. Mi enim mattis sit varius adipiscing tristique aliquam. Ac turpis ultricies varius velit pellentesque.
            </p>
            <p>
              Mauris justo quisque neque tempus sed vitae pellentesque. Mi enim mattis sit varius adipiscing tristique aliquam. Ac
              turpis ultricies varius velit pellentesque. Lorem ipsum
            </p>
          </Typography>
          <Box className={styles.cta}>
            <Button variant="contained" size="large">
              Nous rejoindre
            </Button>
          </Box>
        </NoSsr>
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
      {/* <Eshop /> */}
      <div style={{ height: 500, width: '100%', background: 'coral' }}></div>
    </Layout>
  );
};

export default HomeTemplate;
