import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

import styles from './ChapterItem.module.scss';

interface ChapterItemProps {
  title: string;
  children: ReactNode;
}

const ChapterItem = ({ title, children }: ChapterItemProps) => (
  <Box className={styles.chapterItem}>
    <Typography variant="body1" className={styles.title}>
      {title}
    </Typography>
    <Box className={styles.itemContent}>{children}</Box>
  </Box>
);

export default ChapterItem;
