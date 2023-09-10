'use client';
import { Backdrop, CircularProgress } from '@mui/material';

const loading = () => {
  return (
    <Backdrop
      open={true}
      sx={{
        color: '#fff',
        overflow: 'hidden',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: (theme) => theme.palette.primary.main
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default loading;
