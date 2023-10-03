import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const editProductFetcher = async (data: FormData) =>
  await apiClient.post(`api/edit-product/${data.get('id')}`, { body: data }).json();

const useEditProduct = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => editProductFetcher(data),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Produit mis a jour avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-products'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useEditProduct, editProductFetcher };
