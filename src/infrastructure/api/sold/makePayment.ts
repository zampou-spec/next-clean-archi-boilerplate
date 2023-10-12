import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

type makePaymentMutationType = {
  course_id: number;
  subscribe_type: string;
};

const makePaymentFetcher = async (course_id: number, subscribe_type: string): Promise<{ link: string }> =>
  await apiClient.post(`api/make-payment/${course_id}/${subscribe_type}`).json();

const useMakePayment = (onSuccess?: (data: { link: string }) => void) =>
  useMutation({
    mutationFn: (data: makePaymentMutationType) => makePaymentFetcher(data.course_id, data.subscribe_type),
    onSuccess: async (data) => {
      if (onSuccess) onSuccess(data);
      toast.success('Ajout de solde en cours');
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export type { makePaymentMutationType };
export { useMakePayment, makePaymentFetcher };
