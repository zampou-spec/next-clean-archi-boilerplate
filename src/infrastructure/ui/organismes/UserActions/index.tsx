'use client';
import React from 'react';
import { Box, Button } from '@mui/material';
import { useSession } from 'next-auth/react';

import styles from './UserActions.module.scss';

const UserActions = () => {
  const { data } = useSession();

  return (
    <Box className={styles.userActions}>
      <Button variant="contained" href="/dashboard/courses">
        Mes cours
      </Button>
      <Button variant="outlined" href="/news">
        Mes événements
      </Button>
      {data?.user.role === 'admin' && (
        <Button variant="outlined" href="/dashboard/admin">
          Dashboard Admin
        </Button>
      )}
    </Box>
  );
};

export default UserActions;
