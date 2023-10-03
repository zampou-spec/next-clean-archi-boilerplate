'use client';
import { useSession } from 'next-auth/react';
import { Iconify } from '~/shared/ui/components/Iconify';
import { useGetSubscribes } from '~/infrastructure/api';
import { Fab, Box, Unstable_Grid2 as Grid } from '@mui/material';
import SoldCard from '~/infrastructure/ui/molecules/Card/SoldCard';
import AddSoldModal from '~/infrastructure/ui/molecules/Modal/AddSoldModal';

import styles from './Solds.module.scss';

export type SoldsType = {
  id: number;
  name: string;
  sold: number;
};

const Solds = () => {
  const { data: session } = useSession();
  const { data } = useGetSubscribes(session?.user.id);

  return (
    <Box className={styles.solds}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid className={styles.addContainer} xs={12} md={2.4}>
          <AddSoldModal
            button={
              <Fab className={styles.add} size="large">
                <Iconify fontSize={42} icon="mdi:plus" sx={{ color: (theme) => theme.palette.primary.main }} />
              </Fab>
            }
          />
        </Grid>
        {data?.map((sold) => (
          <Grid key={sold.id} md={2.4}>
            <SoldCard name={sold.name} sold={sold.sold} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solds;
