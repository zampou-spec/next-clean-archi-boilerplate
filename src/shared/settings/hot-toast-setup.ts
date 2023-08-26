import { DefaultToastOptions } from 'react-hot-toast';

export const toastOptions: DefaultToastOptions = {
  style: { fontSize: '12px' },
  position: 'top-center',
  success: {
    duration: 6 * 1000
  },
  error: {
    duration: 10 * 1000
  }
};
