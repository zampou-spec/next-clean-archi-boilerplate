import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const deleteChapterFetcher = async (id: number) => await apiClient.post(`api/delete-chapter/${id}`).json();

const useDeleteChapter = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (id: number) => deleteChapterFetcher(id),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Chapitre supprimer avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-course-chapters'] });
      await queryClient.invalidateQueries({ queryKey: ['get-course-videos'], refetchType: 'all' });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useDeleteChapter, deleteChapterFetcher };
