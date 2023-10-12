import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';

const orderProductFetcher = async (data: FormData) =>
  await apiClient.post(`api/order-product/${data.get('product_id')}`, { body: data }).json();

const useOderProduct = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => orderProductFetcher(data),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Votre commande a ete pris en compte avec succès');
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useOderProduct, orderProductFetcher };
