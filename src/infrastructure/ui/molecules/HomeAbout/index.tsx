import { Box, Typography, Button } from '@mui/material';

import styles from './HomeAbout.module.scss';

const HomeAbout = () => {
  return (
    <Box className={styles.homeAbout}>
      <Box className={styles.textContainer}>
        <Typography component="p" variant="body1" className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Tempor volutpat purus nibh id. Mauris justo quisque neque tempus sed vitae
          pellentesque. Mi enim mattis sit varius adipiscing tristique aliquam. Ac turpis ultricies varius velit pellentesque.
          Lorem ipsum dolor sit amet consectetur. Tempor volutpat purus nibh id. Mauris justo quisque neque tempus sed vitae
          pellentesque. Mi enim mattis sit varius adipiscing tristique aliquam. Ac turpis ultricies varius velit pellentesque.
        </Typography>
        <Typography component="p" variant="body1" className={styles.text}>
          Mauris justo quisque neque tempus sed vitae pellentesque. Mi enim mattis sit varius adipiscing tristique aliquam. Ac
          turpis ultricies varius velit pellentesque. Lorem ipsum
        </Typography>
      </Box>
      <Box className={styles.cta}>
        <Button variant="contained" size="large">
          Nous rejoindre
        </Button>
      </Box>
    </Box>
  );
}

export default HomeAbout
