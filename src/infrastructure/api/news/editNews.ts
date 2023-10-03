import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const editNewsFetcher = async (data: FormData) => await apiClient.post(`api/edit-news/${data.get('id')}`, { body: data }).json();

const useEditNews = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => editNewsFetcher(data),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Actualité mis a jour avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-news'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useEditNews, editNewsFetcher };
