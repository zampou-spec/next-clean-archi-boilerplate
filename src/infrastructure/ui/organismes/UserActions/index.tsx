'use client';

import { Box, Button } from '@mui/material';

import React from 'react';
import styles from './UserActions.module.scss';
import { useSession } from 'next-auth/react';

const UserActions = () => {
  const { data } = useSession();

  return (
    <Box className={styles.userActions}>
      <Button variant="contained" href="/dashboard/courses">
        Mes cours en ligne
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
