import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const createProductFetcher = async (data: FormData) => await apiClient.post('api/create-product', { body: data }).json();

const useCreateProduct = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => createProductFetcher(data),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Produit crée avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-products'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useCreateProduct, createProductFetcher };
