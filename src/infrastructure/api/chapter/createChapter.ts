import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const createChapterFetcher = async (data: FormData) => await apiClient.post('api/create-chapter', { body: data }).json();

const useCreateChapter = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => createChapterFetcher(data),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Chapitre crée avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-course-chapters'] });
      await queryClient.invalidateQueries({ queryKey: ['get-course-videos'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useCreateChapter, createChapterFetcher };
