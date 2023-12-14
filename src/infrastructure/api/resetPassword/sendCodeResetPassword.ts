'use client';

import apiClient from '~/shared/settings/api-client';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

type sendCodeResetPasswordFetcherProps = {
  result: boolean;
  error?: {
    email: string[];
  };
};

const sendCodeResetPasswordFetcher = async (data: FormData): Promise<sendCodeResetPasswordFetcherProps> =>
  await apiClient.post('api/auth/forgot-password', { body: data }).json();

const useSendCodeResetPassword = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => sendCodeResetPasswordFetcher(data),
    onSuccess: async () => {
      toast.success('Code envoyez avec succès');
      onSuccess && onSuccess();
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { sendCodeResetPasswordFetcher, useSendCodeResetPassword };
