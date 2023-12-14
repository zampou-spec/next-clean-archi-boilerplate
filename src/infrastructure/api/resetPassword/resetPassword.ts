'use client';

import apiClient from '~/shared/settings/api-client';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

type resetPasswordFetcherProps = {
  result: boolean;
  error?: {
    code: string[];
    password: string[];
  };
};

const resetPasswordFetcher = async (data: FormData): Promise<resetPasswordFetcherProps> =>
  await apiClient.post('api/auth/reset-password', { body: data }).json();

const useResetPassword = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => resetPasswordFetcher(data),
    onSuccess: async (result: resetPasswordFetcherProps) => {
      if (result.result) {
        if (onSuccess) onSuccess();
        toast.success('Mot de passe reinitialiser avec succès');
      } else if (result.error) {
        const errorArray: string[] = Object.values(result.error || {}).reduce((acc, item) => acc.concat(item), []);
        errorArray.map((error) => toast.error(error));
      }
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { resetPasswordFetcher, useResetPassword };
