import { ReactNode } from 'react';
import { Typography } from '@mui/material';

import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <Typography variant="h3" className={styles.sectionTitle}>
    {children}
  </Typography>
);

export default SectionTitle;
