import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const deleteProductFetcher = async (id: number) => await apiClient.post(`api/delete-product/${id}`).json();

const useDeleteProduct = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (id: number) => deleteProductFetcher(id),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Produit supprimer avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-products'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useDeleteProduct, deleteProductFetcher };
