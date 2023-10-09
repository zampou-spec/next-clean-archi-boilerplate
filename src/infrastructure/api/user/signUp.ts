'use client';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

type signupFetcherProps = {
  result: boolean;
  error?: {
    first_name: string[];
    last_name: string[];
    country: string[];
    email: string[];
    mobile_number: string[];
    password: string[];
    email_verified_at: string[];
  };
};

const signupFetcher = async (data: FormData): Promise<signupFetcherProps> =>
  await apiClient.post('api/auth/register', { body: data }).json();

const useSignup = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => signupFetcher(data),
    onSuccess: async (result: signupFetcherProps) => {
      if (result.result) {
        if (onSuccess) onSuccess();
        toast.success('Inscription réussite avec succès');
      } else if (result.error) {
        const errorArray: string[] = Object.values(result.error || {}).reduce((acc, item) => acc.concat(item), []);
        errorArray.map((error) => toast.error(error));
      }
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { signupFetcher, useSignup };
