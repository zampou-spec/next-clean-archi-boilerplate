import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const editChapterFetcher = async (data: FormData) =>
  await apiClient.post(`api/edit-chapter/${data.get('id')}`, { body: data }).json();

const useEditChapter = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => editChapterFetcher(data),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Chapitre mis a jour avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-chapters'] });
      await queryClient.invalidateQueries({ queryKey: ['get-course-videos'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useEditChapter, editChapterFetcher };
