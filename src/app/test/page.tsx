'use client';
import { Button } from '@mui/material';
import apiClient from '~/shared/settings/api-client';

const Test = () => {
  const fetch = async () => {
    try {
      const res = await apiClient.get('api/test').json();
      console.log('api-response: ', res);
    } catch (error) {
      console.log('api-error: ', error);
    }
  };
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button onClick={fetch} variant="contained">
        Click
      </Button>
    </div>
  );
};

export default Test;
