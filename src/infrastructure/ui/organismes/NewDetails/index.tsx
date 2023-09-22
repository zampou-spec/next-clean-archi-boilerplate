'use client';
import Iconify from '~/shared/ui/components/Iconify';
import Image from '~/infrastructure/ui/atoms/Image';
import Section from '~/infrastructure/ui/atoms/Section';
import { useGetNew } from '~/infrastructure/api/new/getNew';
import { Box, Chip, Paper, Typography } from '@mui/material';

import styles from './NewDetails.module.scss';

type NewDetails = {
  newId: number;
};

const NewDetails = ({ newId }: NewDetails) => {
  const { data: newItem } = useGetNew(newId);

  return (
    <Box className={styles.newDetails}>
      <Box className={styles.imgContainer}>
        <Image alt="" src={newItem?.image || "https://placehold.co/400?text=''"} className={styles.img} />
        <Box className={styles.overlay}></Box>
      </Box>
      <Box className={styles.descContainer}>
        <Section className={styles.descContent}>
          <Typography variant="h4" className={styles.title}>
            {newItem?.title}
          </Typography>
          <Paper className={styles.description}>
            <Typography variant="body2">{newItem?.description}</Typography>
            <Box className={styles.descBottom}>
              <Box className={styles.category}>{newItem?.category?.map((cat, i) => <Chip key={i} label={cat} />)}</Box>
              <Typography variant="body2" className={styles.createdAt}>
                <Iconify icon="mdi:clock-outline" fontSize={24} style={{ color: 'rgba(0, 0, 0, 0.54)' }} />7 min read
                {` · ${newItem?.author}`}
              </Typography>
            </Box>
          </Paper>
        </Section>
      </Box>
    </Box>
  );
};

export default NewDetails;
