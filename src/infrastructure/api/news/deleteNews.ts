import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const deleteNewsFetcher = async (id: number) => await apiClient.post(`api/delete-news/${id}`).json();

const useDeleteNews = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (id: number) => deleteNewsFetcher(id),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Actualité supprimer avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-news'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useDeleteNews, deleteNewsFetcher };
